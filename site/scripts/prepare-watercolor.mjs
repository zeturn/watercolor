import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const packages = [
  '@zeturn/watercolor-core@1.2.8',
  '@zeturn/watercolor-react@1.2.8',
]

function installFromRegistry(spec) {
  const name = spec.replace(/@[^@]+$/, '')
  const dest = join(process.cwd(), 'node_modules', ...name.split('/'))
  const tarball = execSync(`npm pack ${spec}`, { encoding: 'utf8' })
    .trim()
    .split(/\r?\n/)
    .pop()

  rmSync(dest, { recursive: true, force: true })
  mkdirSync(dest, { recursive: true })
  execSync(`tar -xzf ${tarball} -C "${dest}" --strip-components=1`, { stdio: 'inherit' })
  rmSync(tarball, { force: true })

  const entry = join(dest, 'dist')
  if (!existsSync(entry)) {
    throw new Error(`Packed ${spec} but ${entry} is missing`)
  }
  console.log(`Installed ${spec} from npm registry -> ${dest}`)
}

const reactPath = join(process.cwd(), 'node_modules', '@zeturn', 'watercolor-react')
const hasDist = existsSync(join(reactPath, 'dist', 'watercolor-react.es.js'))

// Workspace junctions point at source packages without dist; replace them.
if (!hasDist) {
  for (const spec of packages) {
    installFromRegistry(spec)
  }
} else {
  console.log('@zeturn/watercolor-react already has dist, skipping registry pack')
}

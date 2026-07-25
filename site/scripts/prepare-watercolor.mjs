import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, copyFileSync, readdirSync, statSync } from 'node:fs'
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

const skillOnly = process.argv.includes('--skill-only')

const reactPath = join(process.cwd(), 'node_modules', '@zeturn', 'watercolor-react')
const hasDist = existsSync(join(reactPath, 'dist', 'watercolor-react.es.js'))

// Workspace junctions point at source packages without dist; replace them.
if (!skillOnly) {
  if (!hasDist) {
    for (const spec of packages) {
      installFromRegistry(spec)
    }
  } else {
    console.log('@zeturn/watercolor-react already has dist, skipping registry pack')
  }
}

// Sync the AI skill (source of truth: .codebuddy/skills/watercolor-ui) into public/
// so it is always downloadable at /skills/watercolor-ui/... without manual copies.
function copyDir(src, dest) {
  if (!existsSync(src)) {
    console.warn(`Skill source not found, skipping sync: ${src}`)
    return
  }
  rmSync(dest, { recursive: true, force: true })
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src)) {
    const s = join(src, entry)
    const d = join(dest, entry)
    if (statSync(s).isDirectory()) {
      copyDir(s, d)
    } else {
      copyFileSync(s, d)
    }
  }
  console.log(`Synced skill -> ${dest}`)
}

if (process.env.SKIP_SKILL_SYNC !== '1') {
  const skillSrc = join(process.cwd(), '..', '.codebuddy', 'skills', 'watercolor-ui')
  const skillDest = join(process.cwd(), 'public', 'skills', 'watercolor-ui')
  copyDir(skillSrc, skillDest)
}

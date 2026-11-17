import { existsSync, mkdirSync, rmSync, copyFileSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteRoot = dirname(fileURLToPath(new URL('../package.json', import.meta.url)))
const require = createRequire(new URL('../package.json', import.meta.url))
const sitePackage = JSON.parse(readFileSync(join(siteRoot, 'package.json'), 'utf8'))
const skillSrc = resolve(siteRoot, '..', '.codebuddy', 'skills', 'watercolor-ui')
const skillDest = join(siteRoot, 'public', 'skills', 'watercolor-ui')

function verifyPackage(name, artifacts) {
  const specification = sitePackage.dependencies[name]
  const localManifest = specification?.startsWith('file:')
    ? JSON.parse(readFileSync(resolve(siteRoot, specification.slice(5), 'package.json'), 'utf8'))
    : null
  if (localManifest && localManifest.name !== name) throw new Error(`Unexpected local package for ${name}`)
  const expectedVersion = localManifest?.version ?? specification
  const manifestPath = require.resolve.paths(name)
    .map((directory) => join(directory, name, 'package.json'))
    .find(existsSync)
  const installed = manifestPath && JSON.parse(readFileSync(manifestPath, 'utf8'))
  const missingArtifacts = manifestPath
    ? artifacts.filter((artifact) => !existsSync(join(dirname(manifestPath), artifact)))
    : artifacts

  if (!expectedVersion || installed?.version !== expectedVersion || missingArtifacts.length) {
    throw new Error(
      `Expected ${name}@${expectedVersion} with its build artifacts; found ${installed?.version ?? 'no installation'}. ` +
      `Run npm ci --prefix "${siteRoot}". If using workspace links, build the matching core and React packages first.`,
    )
  }
  console.log(`Verified ${name}@${expectedVersion}`)
}

const skillOnly = process.argv.includes('--skill-only')

// Use the locked installation. Never replace workspace links or download a
// different package version during a build.
if (!skillOnly) {
  verifyPackage('@zeturn/watercolor-core', ['dist/core.es.js', 'src/styles/index.css'])
  verifyPackage('@zeturn/watercolor-react', ['dist/watercolor-react.es.js', 'dist/watercolor-react.css'])
}

// Sync the AI skill (source of truth: .codebuddy/skills/watercolor-ui) into public/
// so it is always downloadable at /skills/watercolor-ui/... without manual copies.
function copyDir(src, dest) {
  const destination = resolve(dest)
  const relativeDestination = relative(skillDest, destination)
  if (relativeDestination === '..' || relativeDestination.startsWith(`..${sep}`) || isAbsolute(relativeDestination)) {
    throw new Error(`Skill destination is outside ${skillDest}: ${destination}`)
  }
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
  copyDir(skillSrc, skillDest)
}

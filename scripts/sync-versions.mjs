import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const version = process.argv[2]
if (!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(version || '')) throw new Error('Expected the complete release version')
const npm = process.env.npm_execpath || path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js')
const read = (file) => JSON.parse(fs.readFileSync(file, 'utf8'))
const write = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n')
const manifests = (directory) => fs.readdirSync(path.join(root, directory)).map((name) => path.join(root, directory, name, 'package.json')).filter(fs.existsSync)
const libraries = manifests('packages')
const names = new Set(libraries.map((file) => read(file).name))
const previous = read(path.join(root, 'package.json')).version
for (const file of [path.join(root, 'package.json'), ...libraries, ...manifests('examples'), path.join(root, 'site/package.json')]) {
  const pkg = read(file)
  if (libraries.includes(file) || pkg.version === previous) pkg.version = version
  for (const field of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    for (const [name, range] of Object.entries(pkg[field] || {})) {
      if (names.has(name) && !/^(?:file:|workspace:)/.test(range)) pkg[field][name] = version
    }
  }
  write(file, pkg)
}
for (const cwd of [root, path.join(root, 'site'), ...manifests('examples').map(path.dirname).filter((directory) => fs.existsSync(path.join(directory, 'package-lock.json')))]) {
  execFileSync(process.execPath, [npm, 'install', '--package-lock-only', '--ignore-scripts', '--no-audit', '--no-fund'], { cwd, stdio: 'inherit' })
}
console.log(`Synchronized ${libraries.length} workspace versions and consumer dependency locks to ${version}.`)

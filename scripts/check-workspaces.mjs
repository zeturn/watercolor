import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const operation = process.argv[2]
if (!['lint', 'typecheck'].includes(operation)) throw new Error('Expected lint or typecheck')
const npm = process.env.npm_execpath || path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js')
const order = ['core', 'react', 'vue', 'next', 'svelte', 'angular']
const packages = fs.readdirSync(path.join(root, 'packages')).flatMap((directory) => {
  const manifest = path.join(root, 'packages', directory, 'package.json')
  return fs.existsSync(manifest) ? [{ directory, ...JSON.parse(fs.readFileSync(manifest, 'utf8')) }] : []
})
console.log(`Checking published workspaces; private source packages: ${packages.filter((pkg) => pkg.private).map((pkg) => pkg.directory).join(', ')}`)
for (const pkg of packages.filter((pkg) => !pkg.private && pkg.scripts?.[operation]).sort((a, b) => {
  const rank = (pkg) => order.includes(pkg.directory) ? order.indexOf(pkg.directory) : order.length
  return rank(a) - rank(b) || a.directory.localeCompare(b.directory)
})) {
  execFileSync(process.execPath, [npm, 'run', operation, '--workspace', `packages/${pkg.directory}`], { cwd: root, stdio: 'inherit' })
}

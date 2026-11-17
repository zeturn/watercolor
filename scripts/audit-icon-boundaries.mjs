import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name)
  return entry.isDirectory() ? walk(file) : [file]
})
for (const framework of ['react', 'next']) {
  const pkg = JSON.parse(read(`packages/${framework}/package.json`))
  const deps = { ...pkg.dependencies, ...pkg.peerDependencies }
  assert.ok(Object.keys(deps).every((name) => !/icons-|lucide|heroicons|phosphor|tabler|feather/.test(name)), `${framework} declares an icon provider`)
  const dist = path.join(root, 'packages', framework, 'dist')
  for (const file of walk(dist).filter((file) => file.endsWith('.js'))) {
    const source = fs.readFileSync(file, 'utf8')
    assert.ok(!/watercolor-icons-|lucide-react|@heroicons|@tabler|@phosphor|feather-icons/.test(source), `${file} reaches an icon provider`)
    if (framework === 'next' && file.includes(`${path.sep}entries${path.sep}`)) assert.match(source, /^['"]use client['"];?/, `${file} lost its RSC boundary`)
  }
  assert.ok(pkg.exports['./*'], `${framework} has no component subpaths`)
  for (const component of ['Button', 'Card', 'Icon', 'ThemeProvider', 'TableBody']) {
    for (const extension of ['js', 'd.ts']) assert.ok(fs.existsSync(path.join(dist, 'entries', `${component}.${extension}`)), `Missing ${framework}/${component}.${extension}`)
  }
}
for (const provider of ['lucide', 'heroicons', 'tabler', 'phosphor']) {
  const directory = `packages/icons-${provider}-react`
  const pkg = JSON.parse(read(`${directory}/package.json`))
  assert.ok(!Object.keys(pkg.dependencies || {}).length, `${provider} must use provider peers`)
  assert.ok(!/import\s+\*\s+as/.test(read(`${directory}/src/index.ts`)), `${provider} imports a catalog namespace`)
  const factory = read(`${directory}/${pkg.main}`)
  assert.ok(!/\bimport\s|\bimport\(/.test(factory), `${provider} root must import no catalog`)
  const manifest = JSON.parse(read(`${directory}/dist/icon-manifest.json`))
  for (const [name, upstream] of Object.entries(manifest)) {
    assert.ok(upstream.includes('/'), `Bare provider entry in ${provider}/${name}`)
    assert.ok(!/from ['"](?:lucide-react|@tabler\/icons-react|@phosphor-icons\/react|@heroicons\/react\/24\/outline)['"]/.test(read(`${directory}/dist/icons/${name}.js`)), `Barrel import in ${provider}/${name}`)
  }
}
const feather = read('packages/icons-feather/dist/watercolor-icons-feather.es.js')
assert.ok(!/import\(/.test(feather), 'Feather root must not load the legacy catalog')
const installer = JSON.parse(read('packages/watercolor-ui/package.json'))
assert.ok(!installer.scripts?.postinstall, 'Installer must have no postinstall side effects')
console.log('Icon boundaries OK: provider-free React/Next, leaf adapters, RSC subpaths, explicit installer.')

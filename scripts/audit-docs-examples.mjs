#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const rootPackage = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
const version = rootPackage.version
const failures = []

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const exists = (file) => fs.existsSync(path.join(root, file))
const legacyDocsPattern = /(watercolor-ui\/src|watercolor-ui\/[^'"\s]+\.(?:vue|jsx)|@watercolorui|@watercolor-ui\/watercolor|watercolor\/dist|from ['"]watercolor-ui['"]|from ['"]watercolor['"]|npm install watercolor-ui|yarn add watercolor-ui)/

function fail(message) {
  failures.push(message)
}

function assertFile(file, description = file) {
  if (!exists(file)) fail(`Missing ${description}: ${file}`)
}

function assertIncludes(file, needle, description = needle) {
  const content = read(file)
  if (!content.includes(needle)) fail(`${file} should include ${description}`)
}

const siteDocs = read('site/src/data/docs.js')
function assertSiteDoc(id, description = id) {
  if (!siteDocs.includes(`${id}: \``) && !siteDocs.includes(`'${id}': \``)) {
    fail(`Missing site docs section: ${description}`)
  }
}

function collectGuideLinks() {
  if (!exists('docs/.vitepress/config.mts')) return []
  const config = read('docs/.vitepress/config.mts')
  return [...config.matchAll(/link:\s*'\/guide\/([^']+)'/g)].map((match) => match[1])
}

assertFile('site/src/data/docs.js', 'canonical site docs data')
assertFile('site/src/data/components.jsx', 'canonical component docs data')

for (const section of [
  'intro',
  'install',
  'quick-start',
  'usage',
  'theming',
  'customization',
  'dark-mode',
  'accessibility',
  'ssr',
  'tree-shaking',
  'migration',
  'contributing',
]) assertSiteDoc(section)

for (const guide of collectGuideLinks()) {
  assertFile(`docs/guide/${guide}.md`, `sidebar target ${guide}`)
}

for (const file of [
  'examples/README.md',
  'examples/react-minimal/README.md',
  'examples/vue-minimal/README.md',
  'examples/next-ssr/README.md',
  'examples/nuxt-ssr/README.md',
]) {
  assertFile(file)
}

const examples = [
  {
    name: 'react-minimal',
    manifest: 'examples/react-minimal/package.json',
    packageName: '@zeturn/watercolor-react',
    app: 'examples/react-minimal/src/App.jsx',
    provider: 'themeUrl="/theme.json"',
    mode: 'defaultMode="system"',
    style: "@zeturn/watercolor-react/style.css",
  },
  {
    name: 'vue-minimal',
    manifest: 'examples/vue-minimal/package.json',
    packageName: '@zeturn/watercolor-vue',
    app: 'examples/vue-minimal/src/main.js',
    provider: 'theme-url="/theme.json"',
    mode: 'default-mode="system"',
    style: "@zeturn/watercolor-vue/style.css",
  },
]

for (const example of examples) {
  assertFile(example.manifest, `${example.name} manifest`)
  assertFile(example.app, `${example.name} app entry`)
  const manifest = JSON.parse(read(example.manifest))
  const actual = manifest.dependencies?.[example.packageName]
  if (actual !== version) fail(`${example.manifest} uses ${example.packageName}@${actual}; expected ${version}`)
  assertIncludes(example.app, example.provider, `${example.name} Provider themeUrl`)
  assertIncludes(example.app, example.mode, `${example.name} system mode`)
  assertIncludes(example.app, 'LocaleProvider', `${example.name} LocaleProvider`)
  assertIncludes(example.app, example.style, `${example.name} style import`)
  assertFile(`examples/${example.name}/public/theme.json`, `${example.name} Theme v2 JSON`)
  const theme = JSON.parse(read(`examples/${example.name}/public/theme.json`))
  if (theme.version !== 2) fail(`examples/${example.name}/public/theme.json must be Theme v2`)
}

assertIncludes('README.md', 'examples/react-minimal', 'React example link')
assertIncludes('README.md', 'examples/vue-minimal', 'Vue example link')
if (exists('docs/guide/usage.md')) assertIncludes('docs/guide/usage.md', '/guide/recipes', 'recipes guide link')
if (exists('docs/guide/integrations.md')) assertIncludes('docs/guide/integrations.md', 'theme.json', 'theme fallback guidance')
if (exists('docs/guide/production-checklist.md')) assertIncludes('docs/guide/production-checklist.md', 'npm run audit:docs-examples', 'docs audit checklist')
if (!siteDocs.includes('theme.json')) fail('site docs should include theme.json fallback guidance')
if (!siteDocs.includes('npm run audit:docs-examples')) fail('site docs should include docs audit checklist')

for (const file of [
  'README.md',
  'site/src/data/docs.js',
  ...(exists('docs/guide/integrations.md') ? ['docs/guide/integrations.md'] : []),
  ...(exists('docs/guide/recipes.md') ? ['docs/guide/recipes.md'] : []),
  ...(exists('docs/guide/production-checklist.md') ? ['docs/guide/production-checklist.md'] : []),
  'examples/README.md',
]) {
  const content = read(file)
  if (/\b1\.2\.4\b/.test(content)) fail(`${file} still references 1.2.4`)
}

const documentationRoots = [
  'README.md',
  'docs',
  'examples',
  'packages/react/src/components',
  'packages/vue/src/components',
]

function walkDocs(entry) {
  const absolute = path.join(root, entry)
  if (!exists(entry)) return []
  const stats = fs.statSync(absolute)
  if (stats.isFile()) return [entry]
  const results = []
  for (const child of fs.readdirSync(absolute, { withFileTypes: true })) {
    if (child.name === 'dist' || child.name === 'storybook-static' || child.name === '.vitepress') continue
    results.push(...walkDocs(path.join(entry, child.name)))
  }
  return results
}

for (const file of documentationRoots.flatMap(walkDocs)) {
  if (!/\.(?:md|mdx)$/.test(file)) continue
  const content = read(file)
  const match = content.match(legacyDocsPattern)
  if (match) fail(`${file} still uses legacy package/import guidance (${match[0]})`)
}

if (failures.length) {
  throw new Error(`Docs/examples audit failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`)
}

console.log(`Docs/examples audit OK: examples match ${version}, guide links and onboarding docs are present.`)

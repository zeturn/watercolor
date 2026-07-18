import { readFile, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(resolve(root, 'api-manifest.json'), 'utf8'))

function collectExports(source) {
  const exports = new Set()
  for (const match of source.matchAll(/export\s*\{([^}]+)\}\s*from/g)) {
    for (const rawSpecifier of match[1].split(',')) {
      const specifier = rawSpecifier.trim()
      if (!specifier || specifier.startsWith('type ')) continue
      const name = specifier.match(/(?:default\s+as\s+)?([A-Za-z_$][\w$]*)$/)?.[1]
      if (name) exports.add(name)
    }
  }
  return [...exports].sort()
}

function compare(label, actual, expected) {
  const missing = expected.filter((name) => !actual.includes(name))
  const unexpected = actual.filter((name) => !expected.includes(name))
  if (missing.length || unexpected.length) {
    throw new Error(`${label} API differs from api-manifest.json\nmissing: ${missing.join(', ') || 'none'}\nunexpected: ${unexpected.join(', ') || 'none'}`)
  }
}

const expected = [...manifest.publicExports].sort()
for (const framework of manifest.frameworks) {
  const source = await readFile(resolve(root, `packages/${framework}/src/index.ts`), 'utf8')
  compare(framework, collectExports(source), expected)
}

const reactDeclaration = await readFile(resolve(root, 'packages/react/index.d.ts'), 'utf8')
if (/ComponentType\s*<\s*any\s*>/.test(reactDeclaration)) {
  throw new Error('React public declarations must not expose ComponentType<any>')
}
if (/ComponentType\s*<\s*Record\s*<\s*string\s*,\s*unknown\s*>\s*>/.test(reactDeclaration) || /\bWatercolorComponent\b/.test(reactDeclaration)) {
  throw new Error('React public declarations must expose explicit component props, not WatercolorComponent or ComponentType<Record<string, unknown>>')
}
for (const typeName of manifest.typedContracts.react) {
  if (!new RegExp(`export\\s+(?:interface|type)\\s+${typeName}\\b`).test(reactDeclaration)) {
    throw new Error(`React public declaration is missing ${typeName}`)
  }
}

for (const framework of ['react', 'vue']) {
  const dist = resolve(root, `packages/${framework}/dist`)
  if (!existsSync(dist)) continue
  const leaked = []
  async function auditDeclarations(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name)
      if (entry.isDirectory()) await auditDeclarations(path)
      else if (entry.name.endsWith('.d.ts')) {
        const declaration = await readFile(path, 'utf8')
        if (/(?:\.\.\/)+(?:core\/src)|@zeturn\/watercolor-core\/src/.test(declaration)) leaked.push(path)
      }
    }
  }
  await auditDeclarations(dist)
  if (leaked.length) throw new Error(`${framework} declarations leak core/src paths:\n${leaked.join('\n')}`)
}

const vueDist = resolve(root, 'packages/vue/dist')
if (existsSync(vueDist)) {
  async function findVueDeclaration(component) {
    const candidates = []
    async function walk(directory) {
      for (const entry of await readdir(directory, { withFileTypes: true })) {
        const path = resolve(directory, entry.name)
        if (entry.isDirectory()) await walk(path)
        else if (entry.name === `${component}.vue.d.ts`) candidates.push(path)
      }
    }
    await walk(vueDist)
    if (candidates.length !== 1) throw new Error(`Expected one Vue declaration for ${component}, found ${candidates.length}`)
    return readFile(candidates[0], 'utf8')
  }
  for (const component of manifest.typedContracts.vue.props) {
    const declaration = await findVueDeclaration(component)
    if (!declaration.includes('$props:')) throw new Error(`Vue ${component} declaration has no props contract`)
  }
  for (const component of manifest.typedContracts.vue.events) {
    const declaration = await findVueDeclaration(component)
    if (!declaration.includes('$emit:')) throw new Error(`Vue ${component} declaration has no emits contract`)
  }
  for (const component of manifest.typedContracts.vue.slots) {
    const declaration = await findVueDeclaration(component)
    if (!declaration.includes('$slots:')) throw new Error(`Vue ${component} declaration has no slots contract`)
  }
} else {
  console.warn('Vue dist is absent; skipped generated declaration checks (run the Vue build first).')
}

console.log(`API parity passed: ${expected.length} shared React/Vue exports.`)

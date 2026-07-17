import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = process.cwd()
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-theme-package-'))

function pack(packageName) {
  const output = execFileSync('npm', [
    'pack', path.join(root, 'packages', packageName),
    '--pack-destination', temporaryDirectory,
    '--json',
  ], { encoding: 'utf8' })
  const [result] = JSON.parse(output)
  if (!result?.filename || !Array.isArray(result.files)) throw new Error(`npm pack did not describe packages/${packageName}`)
  return { ...result, tarball: path.join(temporaryDirectory, result.filename) }
}

try {
  const core = pack('core')
  const react = pack('react')
  const vue = pack('vue')
  const coreFiles = new Set(core.files.map((file) => file.path))
  for (const required of ['dist/index.d.ts', 'dist/core.es.js', 'theme-v2.schema.json']) {
    if (!coreFiles.has(required)) throw new Error(`Core package is missing ${required}`)
  }
  for (const result of [core, react, vue]) {
    const stale = result.files.find((file) => /(?:deprecations|themeManager)/i.test(file.path))
    if (stale) throw new Error(`${result.name} still packages removed API file ${stale.path}`)
  }

  fs.writeFileSync(path.join(temporaryDirectory, 'package.json'), JSON.stringify({ private: true, type: 'module' }))
  execFileSync('npm', ['install', '--ignore-scripts', '--no-package-lock', core.tarball], {
    cwd: temporaryDirectory,
    stdio: 'pipe',
  })
  execFileSync(process.execPath, ['--input-type=module', '--eval', `
    import {
      createThemeController,
      createThemeInitScript,
      validateThemeConfig,
    } from '@zeturn/watercolor-core'
    const before = globalThis.document
    const controller = createThemeController({ initialMode: 'dark', storage: null })
    if (controller.started || controller.mode !== 'dark' || globalThis.document !== before) throw new Error('controller is not SSR-pure')
    if (!validateThemeConfig({ version: 2 }).ok) throw new Error('strict Theme v2 config is unavailable')
    if (!createThemeInitScript().includes('resolvedTheme')) throw new Error('pre-paint helper is unavailable')
  `], { cwd: temporaryDirectory, stdio: 'pipe' })
  if (!fs.existsSync(path.join(temporaryDirectory, 'node_modules/@zeturn/watercolor-core/theme-v2.schema.json'))) {
    throw new Error('The installed package does not include theme-v2.schema.json')
  }
  console.log(`Theme package smoke OK: ${core.name}, ${react.name}, ${vue.name}; real core consumer import passed.`)
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true })
}

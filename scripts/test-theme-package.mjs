#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = process.cwd()
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-consumer-'))
const cache = path.join(os.tmpdir(), 'watercolor-consumer-npm-cache')

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: temporaryDirectory,
    stdio: 'pipe',
    env: { ...process.env, npm_config_cache: cache },
    ...options,
  })
}

function pack(packageName) {
  const output = run('npm', [
    'pack', path.join(root, 'packages', packageName),
    '--pack-destination', temporaryDirectory,
    '--json',
  ], { encoding: 'utf8' })
  const [result] = JSON.parse(output)
  if (!result?.filename) throw new Error(`npm pack did not produce packages/${packageName}`)
  return path.join(temporaryDirectory, result.filename)
}

try {
  const core = pack('core')
  const react = pack('react')
  const vue = pack('vue')

  fs.mkdirSync(path.join(temporaryDirectory, 'src'))
  fs.writeFileSync(path.join(temporaryDirectory, 'package.json'), JSON.stringify({
    private: true,
    type: 'module',
    scripts: { build: 'vite build && tsc --noEmit' },
    dependencies: {
      '@zeturn/watercolor-core': `file:${core}`,
      '@zeturn/watercolor-react': `file:${react}`,
      '@zeturn/watercolor-vue': `file:${vue}`,
      react: '^19.0.0',
      'react-dom': '^19.0.0',
      vue: '^3.5.0',
    },
    devDependencies: {
      '@types/react': '^19.0.0',
      '@types/react-dom': '^19.0.0',
      typescript: '^5.3.3',
      vite: '^8.0.0',
    },
  }, null, 2))
  fs.writeFileSync(path.join(temporaryDirectory, 'index.html'), '<div id="app"></div><script type="module" src="/src/main.tsx"></script>')
  fs.writeFileSync(path.join(temporaryDirectory, 'src/main.tsx'), `
    import React from 'react'
    import { createRoot } from 'react-dom/client'
    import { h } from 'vue'
    import { Button, ThemeProvider } from '@zeturn/watercolor-react'
    import { Button as VueButton } from '@zeturn/watercolor-vue'
    import { validateThemeConfig } from '@zeturn/watercolor-core'
    import '@zeturn/watercolor-react/style.css'
    if (!validateThemeConfig({ version: 2 }).ok || !VueButton || !h) throw new Error('Vue/core consumer contract failed')
    createRoot(document.getElementById('app')!).render(<ThemeProvider defaultMode="system"><Button variant="primary" onClick={() => undefined}>Watercolor</Button></ThemeProvider>)
  `)
  fs.writeFileSync(path.join(temporaryDirectory, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      target: 'ES2020', module: 'ESNext', moduleResolution: 'bundler', jsx: 'react-jsx',
      strict: true, skipLibCheck: true, noEmit: true, allowSyntheticDefaultImports: true,
    },
    include: ['src'],
  }, null, 2))

  run('npm', ['install', '--ignore-scripts', '--prefer-offline', '--no-audit', '--no-fund'])
  run('npm', ['run', 'build'])
  run(process.execPath, ['--input-type=module', '--eval', `
    const core = await import('@zeturn/watercolor-core')
    const react = await import('@zeturn/watercolor-react')
    const vue = await import('@zeturn/watercolor-vue')
    if (!core.createThemeController || !react.ThemeProvider || !vue.ThemeProvider) throw new Error('ESM imports are incomplete')
  `])
  console.log('Clean-room consumer OK: packed core, React and Vue installed, imported, typechecked and bundled.')
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true })
}

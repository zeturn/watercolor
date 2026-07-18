#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const root = process.cwd()
const expectedVersion = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8')).version
const packages = fs.readdirSync(path.join(root, 'packages'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, 'packages', entry.name, 'package.json')))
  .map((entry) => entry.name)
  .sort()
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-publish-check-'))
const errors = []

const fail = (message) => errors.push(message)
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'))

function pack(packageDirectory) {
  const output = execFileSync('npm', [
    'pack', path.join(root, 'packages', packageDirectory),
    '--pack-destination', temporaryDirectory,
    '--json',
  ], {
    encoding: 'utf8',
    env: { ...process.env, npm_config_cache: path.join(temporaryDirectory, '.npm-cache') },
  })
  const [result] = JSON.parse(output)
  if (!result?.filename || !Array.isArray(result.files)) throw new Error(`npm pack returned no manifest for ${packageDirectory}`)
  return result
}

try {
  for (const packageDirectory of packages) {
    const packageFile = path.join(root, 'packages', packageDirectory, 'package.json')
    const pkg = readJson(packageFile)
    if (pkg.version !== expectedVersion) fail(`${pkg.name}: version ${pkg.version} does not match root ${expectedVersion}`)
    if (!pkg.license) fail(`${pkg.name}: missing license metadata`)

    for (const [name, range] of Object.entries(pkg.dependencies ?? {})) {
      if (range === '*') fail(`${pkg.name}: dependency ${name} uses an unbounded * range`)
    }

    if (packageDirectory !== 'watercolor-ui') {
      const rootExport = pkg.exports?.['.']
      if (!rootExport?.types || !rootExport?.import) fail(`${pkg.name}: ESM export requires types and import conditions`)
      if (rootExport?.require) fail(`${pkg.name}: ESM-only package must not expose a require condition`)
      if (pkg.exports?.['./src/*']) fail(`${pkg.name}: internal source must not be a public export`)
      if (pkg.main && !pkg.main.endsWith('.js')) fail(`${pkg.name}: unexpected main entry ${pkg.main}`)
    }

    if (packageDirectory === 'react' || packageDirectory === 'vue') {
      const forcedIcons = Object.keys(pkg.dependencies ?? {}).filter((name) => name.startsWith('@zeturn/watercolor-icons-'))
      if (forcedIcons.length) fail(`${pkg.name}: icon wrappers must be opt-in (${forcedIcons.join(', ')})`)
    }

    if (packageDirectory === 'watercolor-ui' && pkg.scripts?.postinstall) {
      fail(`${pkg.name}: installers must be explicit; postinstall is forbidden`)
    }

    const packed = pack(packageDirectory)
    const fileNames = new Set(packed.files.map((file) => file.path))
    if (!fileNames.has('package.json') || !fileNames.has('README.md')) fail(`${pkg.name}: tarball is missing package.json or README.md`)
    if (packageDirectory !== 'watercolor-ui') {
      if (!fileNames.has('dist/index.d.ts')) fail(`${pkg.name}: tarball is missing dist/index.d.ts`)
      if (![...fileNames].some((file) => /^dist\/.*\.es\.js$/.test(file))) fail(`${pkg.name}: tarball has no ESM build`)
    }
  }

  for (const packageDirectory of ['core', 'react', 'vue']) {
    const dist = path.join(root, 'packages', packageDirectory, 'dist')
    for (const file of fs.readdirSync(dist, { recursive: true })) {
      if (typeof file !== 'string' || !file.endsWith('.d.ts')) continue
      const contents = fs.readFileSync(path.join(dist, file), 'utf8')
      if (/\.\.\/\.\.\/\.\.\/\.\.\/core\/src\//.test(contents)) fail(`${packageDirectory}/${file}: declaration escapes into core/src`)
    }
  }

  const reactTypes = fs.readFileSync(path.join(root, 'packages/react/index.d.ts'), 'utf8')
  if (/ComponentType<any>/.test(reactTypes)) fail('React public types still collapse components to ComponentType<any>')
  if (/ComponentType\s*<\s*Record\s*<\s*string\s*,\s*unknown\s*>\s*>/.test(reactTypes) || /\bWatercolorComponent\b/.test(reactTypes)) {
    fail('React public types still expose generic WatercolorComponent declarations')
  }
  const coreEntry = fs.readFileSync(path.join(root, 'packages/core/src/index.ts'), 'utf8')
  if (/export \* as \w+Utils from ['"]\.\/components\//.test(coreEntry)) fail('Core root entry must not export component utility namespaces')
  for (const generator of ['scripts/generate-react-assets.mjs', 'scripts/generate-react-assets.js']) {
    const contents = fs.readFileSync(path.join(root, generator), 'utf8')
    if (/expect\(true\)\.toBe\(true\)/.test(contents)) fail(`${generator}: generated tests must assert rendered output, not expect(true)`)
  }
  for (const framework of ['react', 'vue']) {
    const sourceRoot = path.join(root, 'packages', framework, 'src')
    const leaks = []
    const walk = (directory) => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const fullPath = path.join(directory, entry.name)
        if (entry.isDirectory()) walk(fullPath)
        else if (/\.(?:js|jsx|ts|tsx|vue)$/.test(entry.name)) {
          const contents = fs.readFileSync(fullPath, 'utf8')
          if (/@zeturn\/watercolor-core\/src\//.test(contents)) leaks.push(path.relative(root, fullPath))
        }
      }
    }
    walk(sourceRoot)
    if (leaks.length) fail(`${framework}: source imports private @zeturn/watercolor-core/src paths:\n${leaks.join('\n')}`)
  }

  if (errors.length) {
    console.error(`Publish contract failed:\n${errors.map((error) => `- ${error}`).join('\n')}`)
    process.exitCode = 1
  } else {
    console.log(`Publish contract OK: ${packages.length} tarballs, ESM-only exports, bounded dependencies, portable declarations.`)
  }
} finally {
  fs.rmSync(temporaryDirectory, { recursive: true, force: true })
}

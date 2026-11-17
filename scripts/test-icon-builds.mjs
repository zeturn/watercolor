import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const fixtureSource = path.join(root, 'tests/fixtures/icon-build')
const budgets = JSON.parse(fs.readFileSync(path.join(fixtureSource, 'budgets.json'), 'utf8'))
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-icon-build-'))
const artifacts = path.join(root, '.cache/icon-build')
const npm = process.env.npm_execpath || path.join(path.dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js')
const report = { measurements: [], rssDefinition: budgets.note }
fs.mkdirSync(artifacts, { recursive: true })
const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text) }

async function run(label, script, args = [], measured = false) {
  console.log(`[icon-build] ${label}`)
  const rssDirectory = path.join(temporary, 'rss', label)
  const start = performance.now()
  const result = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...args], {
      cwd: temporary,
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: '1',
        WATERCOLOR_BUILD_CASE: label,
        ...(measured ? {
          WATERCOLOR_RSS_DIRECTORY: rssDirectory,
          NODE_OPTIONS: `${process.env.NODE_OPTIONS || ''} --require="${path.join(fixtureSource, 'measure.cjs').replaceAll('\\', '/')}"`,
        } : {}),
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    })
    let output = ''
    child.stdout.on('data', (data) => { output += data })
    child.stderr.on('data', (data) => { output += data })
    child.on('error', reject)
    child.on('close', (code) => resolve({ code, output }))
  })
  write(path.join(artifacts, `${label}.log`), result.output)
  if (result.code !== 0) throw new Error(`${label} failed (${result.code}):\n${result.output.slice(-12000)}`)
  const rssMiB = measured ? fs.readdirSync(rssDirectory)
    .filter((name) => name.endsWith('.json'))
    .reduce((sum, name) => sum + JSON.parse(fs.readFileSync(path.join(rssDirectory, name), 'utf8')).peakMiB, 0) : undefined
  return { output: result.output, seconds: Number(((performance.now() - start) / 1000).toFixed(2)), rssMiB: rssMiB && Number(rssMiB.toFixed(1)) }
}

function files(directory) {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name)
    return entry.isDirectory() ? files(file) : [file]
  })
}

function auditGraph(ids, iconsExpected) {
  const normalized = [...new Set(ids.map((id) => id.replaceAll('\\', '/')))]
  const forbidden = normalized.filter((id) => /@tabler\/|@heroicons\/|@phosphor-icons\/|feather-icons|watercolor-icons-(?:tabler|heroicons|phosphor|feather)/.test(id))
  assert.deepEqual(forbidden, [], 'An unselected icon provider entered the module graph')
  const icons = [...new Set(normalized.flatMap((id) => id.match(/lucide-react\/dist\/esm\/icons\/[^?|]+?\.mjs/g) || []))]
  assert.equal(icons.length, iconsExpected ? 1 : 0, `Expected ${iconsExpected ? 'one Lucide icon' : 'no icon catalog'}; found ${icons.length}`)
  if (iconsExpected) assert.ok(icons[0].endsWith('/database.mjs'))
  return { modules: normalized.length, icons: icons.length }
}

try {
  const tarballs = {}
  for (const name of ['core', 'react', 'next', 'icons-lucide-react']) {
    const result = await run(`pack-${name}`, npm, ['pack', path.join(root, 'packages', name), '--pack-destination', temporary, '--json'])
    tarballs[name] = path.join(temporary, JSON.parse(result.output)[0].filename)
  }
  const installedVersion = (name) => JSON.parse(fs.readFileSync(path.join(root, 'node_modules', name, 'package.json'), 'utf8')).version
  write(path.join(temporary, 'package.json'), JSON.stringify({
    name: 'watercolor-icon-build-fixture', private: true, type: 'module',
    dependencies: {
      '@zeturn/watercolor-core': `file:${tarballs.core}`,
      '@zeturn/watercolor-react': `file:${tarballs.react}`,
      '@zeturn/watercolor-next': `file:${tarballs.next}`,
      '@zeturn/watercolor-icons-lucide-react': `file:${tarballs['icons-lucide-react']}`,
      'lucide-react': installedVersion('lucide-react'), react: installedVersion('react'), 'react-dom': installedVersion('react-dom'),
      next: installedVersion('next'), vite: installedVersion('vite'),
    },
  }, null, 2))
  await run('install', npm, ['install', '--ignore-scripts', '--prefer-offline', '--no-audit', '--no-fund'])
  for (const name of ['@tabler/icons-react', '@heroicons/react', '@phosphor-icons/react', 'feather-icons']) {
    assert.ok(!fs.existsSync(path.join(temporary, 'node_modules', name)), `Unselected ${name} was installed`)
  }
  write(path.join(temporary, 'index.html'), '<div id="root"></div><script type="module" src="/src/main.jsx"></script>')
  for (const mode of process.argv.includes('--next-only') ? [] : ['root-none', 'root-lucide', 'deep-lucide']) {
    const deep = mode.startsWith('deep')
    const icons = mode !== 'root-none'
    const imports = deep
      ? "import Button from '@zeturn/watercolor-react/Button'; import Icon from '@zeturn/watercolor-react/Icon';"
      : "import { Button, Icon } from '@zeturn/watercolor-react';"
    write(path.join(temporary, 'src/main.jsx'), `import React from 'react'; import {createRoot} from 'react-dom/client';\n${imports}\n` +
      (icons ? "import Database from '@zeturn/watercolor-icons-lucide-react/Database';\n" : '') +
      "import '@zeturn/watercolor-react/style.css';\n" +
      `createRoot(document.getElementById('root')).render(<Button>${icons ? '<Icon component={Database} label="Database" />' : ''}Database</Button>);\n`)
    const result = await run(`vite-${mode}`, path.join(fixtureSource, 'vite.mjs'), [temporary, mode], true)
    const graph = auditGraph(JSON.parse(fs.readFileSync(path.join(temporary, `modules-${mode}.json`), 'utf8')), icons)
    const javascript = files(path.join(temporary, `dist/${mode}`)).filter((file) => file.endsWith('.js')).map((file) => fs.readFileSync(file))
    const measurement = { name: `vite-${mode}`, ...result, output: undefined, ...graph,
      jsKiB: Number((javascript.reduce((sum, bytes) => sum + bytes.length, 0) / 1024).toFixed(1)),
      gzipKiB: Number((javascript.reduce((sum, bytes) => sum + zlib.gzipSync(bytes).length, 0) / 1024).toFixed(1)) }
    assert.ok(measurement.rssMiB <= budgets.vite.rssMiB, `Vite RSS exceeds ${budgets.vite.rssMiB} MiB`)
    assert.ok(measurement.jsKiB <= budgets.vite.jsKiB && measurement.gzipKiB <= budgets.vite.gzipKiB, 'Vite bundle budget exceeded')
    if (deep) assert.ok(graph.modules <= budgets.vite.deepModules, `Deep entry parsed ${graph.modules} modules`)
    report.measurements.push(measurement)
    console.log(JSON.stringify(measurement))
  }

  if (!process.argv.includes('--skip-next')) {
    write(path.join(temporary, 'next.config.mjs'), `import fs from 'node:fs'; import path from 'node:path';
      export default { experimental: { cpus: 1 }, webpack(config) {
        config.plugins.push({ apply(compiler) { compiler.hooks.compilation.tap('WatercolorGraph', compilation => {
          compilation.hooks.finishModules.tap('WatercolorGraph', modules => {
            const dir = path.join(process.cwd(), 'graphs', process.env.WATERCOLOR_BUILD_CASE || 'build'); fs.mkdirSync(dir, {recursive:true});
            fs.writeFileSync(path.join(dir, (compiler.name || 'compiler') + '-' + process.pid + '.json'), JSON.stringify([...modules].map(m => m.resource || m.identifier())));
          });
        }); }}); return config;
      }};`)
    write(path.join(temporary, 'app/layout.jsx'), "import '@zeturn/watercolor-react/style.css'; export default function Layout({children}) { return <html><body>{children}</body></html> }")
    const demos = []
    for (const mode of ['root', 'deep']) {
      const imports = mode === 'root'
        ? "import {Button, Icon} from '@zeturn/watercolor-next';"
        : "import Button from '@zeturn/watercolor-next/Button'; import Icon from '@zeturn/watercolor-next/Icon';"
      const directory = mode === 'root' ? 'app' : 'app/deep'
      const demoFile = path.join(temporary, directory, 'Demo.jsx')
      demos.push([demoFile, `'use client';\n${imports}\nimport Database from '@zeturn/watercolor-icons-lucide-react/Database'; export default function Demo() { return <Button><Icon component={Database} label="Database" />Database ${mode}</Button> }`])
      write(demoFile, `'use client'; export default function Demo() { return <button>Database ${mode}</button> }`)
      write(path.join(temporary, directory, 'page.jsx'), "import Demo from './Demo'; export default function Page() { return <Demo /> }")
    }
    const nextBytes = () => files(path.join(temporary, '.next/static')).filter((file) => file.endsWith('.js')).reduce((sum, file) => sum + fs.statSync(file).size, 0) / 1024
    const baseline = await run('next-framework-baseline', path.join(temporary, 'node_modules/next/dist/bin/next'), ['build', '--webpack'], true)
    const baselineJsKiB = nextBytes()
    const baselineGraph = auditGraph(files(path.join(temporary, 'graphs/next-framework-baseline')).flatMap((file) => JSON.parse(fs.readFileSync(file, 'utf8'))), false)
    report.measurements.push({ name: 'next-framework-baseline', ...baseline, output: undefined, ...baselineGraph, clientJsKiB: Number(baselineJsKiB.toFixed(1)) })
    for (const [file, source] of demos) write(file, source)
    const nextOutput = path.resolve(temporary, '.next')
    assert.equal(path.dirname(nextOutput), temporary)
    assert.equal(path.basename(nextOutput), '.next')
    fs.rmSync(nextOutput, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
    const result = await run('next-root-and-deep', path.join(temporary, 'node_modules/next/dist/bin/next'), ['build', '--webpack'], true)
    const graph = auditGraph(files(path.join(temporary, 'graphs/next-root-and-deep')).flatMap((file) => JSON.parse(fs.readFileSync(file, 'utf8'))), true)
    const clientJsKiB = nextBytes()
    const addedClientJsKiB = Math.max(0, clientJsKiB - baselineJsKiB)
    const measurement = { name: 'next-root-and-deep', ...result, output: undefined, ...graph, clientJsKiB: Number(clientJsKiB.toFixed(1)), addedClientJsKiB: Number(addedClientJsKiB.toFixed(1)) }
    report.measurements.push(measurement)
    console.log(JSON.stringify(measurement))
    assert.ok(measurement.rssMiB <= budgets.next.rssMiB, 'Next aggregate Node RSS budget exceeded')
    assert.ok(clientJsKiB <= budgets.next.clientJsKiB, `Next client JS ${measurement.clientJsKiB} KiB exceeds ${budgets.next.clientJsKiB} KiB`)
    assert.ok(addedClientJsKiB <= budgets.next.addedClientJsKiB, `Watercolor adds ${measurement.addedClientJsKiB} KiB over the Next baseline; budget ${budgets.next.addedClientJsKiB} KiB`)
    for (const file of ['index.html', 'deep.html']) {
      const html = fs.readFileSync(path.join(temporary, '.next/server/app', file), 'utf8')
      assert.match(html, /aria-label="Database"/)
      assert.match(html, /<svg/)
    }
  }
  report.passed = true
} finally {
  write(path.join(artifacts, 'report.json'), JSON.stringify(report, null, 2) + '\n')
  // Only remove the exact temporary fixture created by this invocation.
  assert.equal(path.dirname(temporary), path.resolve(os.tmpdir()))
  assert.ok(path.basename(temporary).startsWith('watercolor-icon-build-'))
  if (!process.env.WATERCOLOR_KEEP_FIXTURE) fs.rmSync(temporary, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
  else console.log(`Kept fixture: ${temporary}`)
}

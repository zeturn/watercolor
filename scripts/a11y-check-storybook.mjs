#!/usr/bin/env node

import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'
import WebSocket from 'ws'

const root = process.cwd()
const axeSource = fs.readFileSync(path.join(root, 'node_modules/axe-core/axe.min.js'), 'utf8')
const chromePath = process.env.CHROME_PATH || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome')
const outputDir = path.join(root, 'tmp/a11y')
const storyFilter = process.env.STORY_FILTER?.trim()

const referenceStories = [
  { id: 'foundations-composition--overview', selector: '.wc-composition-demo' },
  { id: 'foundations-theme-contract--provider-contract', selector: '.wc-theme-contract' },
  { id: 'recipes-product-pages--dashboard', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--settings', selector: '.wc-recipe' },
]

const mime = {
  '.css': 'text/css', '.html': 'text/html', '.ico': 'image/x-icon',
  '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
}

function serve(directory) {
  const server = http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    const requested = path.resolve(directory, `.${pathname === '/' ? '/index.html' : pathname}`)
    if (!requested.startsWith(path.resolve(directory))) {
      response.writeHead(403).end()
      return
    }
    fs.readFile(requested, (error, content) => {
      if (error) response.writeHead(error.code === 'ENOENT' ? 404 : 500).end()
      else response.writeHead(200, { 'content-type': mime[path.extname(requested)] || 'application/octet-stream' }).end(content)
    })
  })
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)))
}

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

async function waitForJson(url, attempts = 300) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url)
      if (response.ok) return response.json()
    } catch {}
    await delay(100)
  }
  throw new Error(`Timed out waiting for ${url}`)
}

class Cdp {
  constructor(url) {
    this.nextId = 0
    this.pending = new Map()
    this.socket = new WebSocket(url)
    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)
      const callback = this.pending.get(message.id)
      if (!callback) return
      this.pending.delete(message.id)
      if (message.error) callback.reject(new Error(message.error.message))
      else callback.resolve(message.result)
    })
  }

  async open() {
    if (this.socket.readyState === WebSocket.OPEN) return
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true })
      this.socket.addEventListener('error', reject, { once: true })
    })
  }

  send(method, params = {}) {
    const id = ++this.nextId
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject })
      this.socket.send(JSON.stringify({ id, method, params }))
    })
  }

  close() { this.socket.close() }
}

async function evaluate(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text)
  return result.result.value
}

async function waitForStory(cdp, selector, label) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (await evaluate(cdp, `Boolean(document.querySelector(${JSON.stringify(selector)}))`)) {
      await evaluate(cdp, 'document.fonts.ready.then(() => true)')
      await delay(120)
      return
    }
    await delay(100)
  }
  throw new Error(`Story did not render ${selector} (${label})`)
}

function defaultComponentStories(framework) {
  const index = JSON.parse(fs.readFileSync(path.join(root, `packages/${framework}/storybook-static/index.json`), 'utf8'))
  const entries = Object.values(index.entries).filter((entry) => entry.type === 'story' && entry.title.startsWith('Components/'))
  const byTitle = new Map()
  for (const entry of entries) {
    const current = byTitle.get(entry.title)
    if (!current || entry.name === 'Default') byTitle.set(entry.title, entry)
  }
  return [...byTitle.values()].map((entry) => ({ id: entry.id, selector: '#storybook-root > *' }))
}

async function scanStory({ baseUrl, framework, story, debugPort }) {
  const url = `${baseUrl}/iframe.html?id=${story.id}&viewMode=story&globals=theme:light`
  const target = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' }).then((response) => response.json())
  const cdp = new Cdp(target.webSocketDebuggerUrl)
  await cdp.open()
  await cdp.send('Page.enable')
  await cdp.send('Runtime.enable')
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await cdp.send('Page.navigate', { url })
  await waitForStory(cdp, story.selector, `${framework}/${story.id}`)
  await cdp.send('Runtime.evaluate', { expression: axeSource })
  const result = await evaluate(cdp, `axe.run(document, {
    resultTypes: ['violations'],
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
  }).then((result) => ({
    violations: result.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      help: violation.help,
      nodes: violation.nodes.slice(0, 5).map((node) => ({ target: node.target, failureSummary: node.failureSummary })),
    }))
  }))`)
  cdp.close()
  await fetch(`http://127.0.0.1:${debugPort}/json/close/${target.id}`)
  return { framework, story: story.id, ...result }
}

fs.mkdirSync(outputDir, { recursive: true })
for (const framework of ['vue', 'react']) {
  const build = path.join(root, `packages/${framework}/storybook-static/iframe.html`)
  if (!fs.existsSync(build)) throw new Error(`Missing ${build}; build both Storybooks first.`)
}

const servers = []
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-a11y-chrome-'))
const debugPort = 9339
const chrome = spawn(chromePath, [
  '--headless=new', '--hide-scrollbars', '--disable-gpu', '--no-first-run',
  '--no-default-browser-check', '--no-sandbox', '--disable-dev-shm-usage',
  '--remote-debugging-address=127.0.0.1', `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: ['ignore', 'ignore', 'inherit'] })

try {
  await waitForJson(`http://127.0.0.1:${debugPort}/json/version`)
  const vueServer = await serve(path.join(root, 'packages/vue/storybook-static'))
  const reactServer = await serve(path.join(root, 'packages/react/storybook-static'))
  servers.push(vueServer, reactServer)
  const frameworks = [
    { framework: 'vue', baseUrl: `http://127.0.0.1:${vueServer.address().port}` },
    { framework: 'react', baseUrl: `http://127.0.0.1:${reactServer.address().port}` },
  ]
  const report = []
  for (const framework of frameworks) {
    const stories = [...referenceStories, ...defaultComponentStories(framework.framework)]
      .filter((story) => !storyFilter || story.id.includes(storyFilter))
    console.log(`Checking ${framework.framework} a11y stories (${stories.length})...`)
    for (const story of stories) report.push(await scanStory({ ...framework, story, debugPort }))
  }
  fs.writeFileSync(path.join(outputDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`)
  const failures = report.flatMap((item) => item.violations.map((violation) => {
    const nodes = violation.nodes.map((node) => `${node.target.join(', ')} ${node.failureSummary || ''}`).join('\n    ')
    return `${item.framework}/${item.story}: ${violation.impact || 'unknown'} ${violation.id} - ${violation.help}\n    ${nodes}`
  }))
  if (failures.length) throw new Error(`A11y checks failed:\n${failures.join('\n')}`)
  console.log(`A11y checks OK: ${report.length} Storybook stories scanned with axe.`)
} finally {
  servers.forEach((server) => server.close())
  chrome.kill('SIGTERM')
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }) } catch {}
}


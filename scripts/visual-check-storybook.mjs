import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'

const root = process.cwd()
const outputDir = path.join(root, 'tmp/visual-regression')
const chromePath = process.env.CHROME_PATH || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome')

const modes = [
  { name: 'light-desktop', theme: 'light', width: 1440, height: 1000 },
  { name: 'dark-desktop', theme: 'dark', width: 1440, height: 1000 },
  { name: 'light-mobile', theme: 'light', width: 390, height: 844 },
  { name: 'dark-mobile', theme: 'dark', width: 390, height: 844 },
]
const stories = [
  { id: 'foundations-composition--overview', selector: '.wc-composition-demo' },
  { id: 'foundations-composition--component-boundaries', selector: '.wc-composition-demo' },
  { id: 'foundations-theme-contract--provider-contract', selector: '.wc-theme-contract' },
  { id: 'recipes-product-pages--dashboard', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--settings', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--list-detail', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--form-page', selector: '.wc-recipe' },
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

async function waitForJson(url, attempts = 100) {
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

async function waitForStory(cdp, selector) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (await evaluate(cdp, `Boolean(document.querySelector(${JSON.stringify(selector)}))`)) {
      await evaluate(cdp, 'document.fonts.ready.then(() => true)')
      await delay(150)
      return
    }
    await delay(100)
  }
  throw new Error(`Story did not render ${selector}`)
}

async function capture({ baseUrl, framework, story, mode, debugPort }) {
  const url = `${baseUrl}/iframe.html?id=${story.id}&viewMode=story&globals=theme:${mode.theme}`
  const target = await fetch(`http://127.0.0.1:${debugPort}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' }).then((response) => response.json())
  const cdp = new Cdp(target.webSocketDebuggerUrl)
  await cdp.open()
  await cdp.send('Page.enable')
  await cdp.send('Runtime.enable')
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width: mode.width, height: mode.height, deviceScaleFactor: 1, mobile: mode.width < 640,
  })
  await cdp.send('Page.navigate', { url })
  await waitForStory(cdp, story.selector)

  const metrics = await evaluate(cdp, `(() => {
    const split = document.querySelector('.wc-split')
    return {
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      resolvedTheme: document.documentElement.dataset.resolvedTheme,
      splitColumns: split ? getComputedStyle(split).gridTemplateColumns : null,
      primitiveCounts: Object.fromEntries(['page', 'stack', 'inline', 'split'].map(name => [name, document.querySelectorAll('.wc-' + name).length])),
    }
  })()`)

  let hover = null
  if (story.id.endsWith('--dashboard') && mode.width >= 640) {
    const rect = await evaluate(cdp, `(() => {
      const item = document.querySelector('.wc-recipe-nav-item:not(.is-active)')
      const box = item.getBoundingClientRect()
      return { x: box.x + box.width / 2, y: box.y + box.height / 2, before: getComputedStyle(item).backgroundColor }
    })()`)
    await cdp.send('Input.dispatchMouseEvent', { type: 'mouseMoved', x: rect.x, y: rect.y })
    await delay(180)
    hover = { before: rect.before, after: await evaluate(cdp, `getComputedStyle(document.querySelector('.wc-recipe-nav-item:not(.is-active)')).backgroundColor`) }
  }

  const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false, fromSurface: true })
  let themeSwitch = null
  if (story.id === 'foundations-theme-contract--provider-contract') {
    const readTheme = () => evaluate(cdp, `(() => ({
      requested: document.querySelector('[data-theme-requested]')?.textContent,
      resolved: document.querySelector('[data-theme-resolved]')?.textContent,
      dataTheme: document.documentElement.dataset.theme,
      dataResolvedTheme: document.documentElement.dataset.resolvedTheme,
      className: document.documentElement.className,
      colorScheme: document.documentElement.style.colorScheme,
      background: getComputedStyle(document.querySelector('.wc-theme-contract')).backgroundColor,
    }))()`)
    const initial = await readTheme()
    const switchTo = async (next) => {
      await evaluate(cdp, `document.querySelector('[data-mode="${next}"]').click()`)
      for (let attempt = 0; attempt < 40; attempt += 1) {
        const current = await readTheme()
        if (current.dataTheme === next && current.resolved === next) return current
        await delay(25)
      }
      throw new Error(`Theme story did not switch to ${next}`)
    }
    themeSwitch = { initial, dark: await switchTo('dark'), light: await switchTo('light') }
  }
  const filename = `${framework}-${story.id.replace('recipes-product-pages--', '').replace('foundations-composition--', 'composition-')}-${mode.name}.png`
  fs.writeFileSync(path.join(outputDir, filename), Buffer.from(screenshot.data, 'base64'))
  cdp.close()
  await fetch(`http://127.0.0.1:${debugPort}/json/close/${target.id}`)
  return { framework, story: story.id, mode: mode.name, ...metrics, hover, themeSwitch, screenshot: filename }
}

fs.mkdirSync(outputDir, { recursive: true })
const requiredBuilds = ['vue', 'react'].map((name) => path.join(root, `packages/${name}/storybook-static/iframe.html`))
for (const build of requiredBuilds) {
  if (!fs.existsSync(build)) throw new Error(`Missing ${build}; build both Storybooks first.`)
}

const servers = []
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-chrome-'))
const debugPort = 9338
const chrome = spawn(chromePath, [
  '--headless=new', '--hide-scrollbars', '--disable-gpu', '--no-first-run',
  '--no-default-browser-check', `--remote-debugging-port=${debugPort}`, `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: 'ignore' })

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
    for (const story of stories) {
      for (const mode of modes) report.push(await capture({ ...framework, story, mode, debugPort }))
    }
  }

  const failures = report.flatMap((item) => {
    const errors = []
    if (item.scrollWidth > item.innerWidth) errors.push(`horizontal overflow ${item.scrollWidth}/${item.innerWidth}`)
    if (!item.mode.startsWith(item.resolvedTheme)) errors.push(`theme did not resolve: ${item.resolvedTheme}`)
    if (!item.primitiveCounts.page || !item.primitiveCounts.stack) errors.push('missing Page or Stack composition')
    if (item.mode.includes('mobile') && item.splitColumns?.includes(' ')) errors.push(`Split did not collapse: ${item.splitColumns}`)
    if (item.hover && (item.hover.before !== 'rgba(0, 0, 0, 0)' || item.hover.after === item.hover.before)) errors.push(`hover surface failed: ${JSON.stringify(item.hover)}`)
    if (item.themeSwitch) {
      const expectedInitial = item.mode.startsWith('dark') ? 'dark' : 'light'
      if (item.themeSwitch.initial.dataTheme !== expectedInitial || item.themeSwitch.initial.resolved !== expectedInitial) errors.push(`initial theme frame is inconsistent: ${JSON.stringify(item.themeSwitch.initial)}`)
      if (!item.themeSwitch.dark.className.includes('dark') || item.themeSwitch.dark.className.includes('light') || item.themeSwitch.dark.colorScheme !== 'dark') errors.push(`dark DOM contract failed: ${JSON.stringify(item.themeSwitch.dark)}`)
      if (!item.themeSwitch.light.className.includes('light') || item.themeSwitch.light.className.includes('dark') || item.themeSwitch.light.colorScheme !== 'light') errors.push(`light DOM contract failed: ${JSON.stringify(item.themeSwitch.light)}`)
      if (item.themeSwitch.dark.background === item.themeSwitch.light.background) errors.push('theme canvas did not change')
    }
    return errors.map((error) => `${item.framework}/${item.story}/${item.mode}: ${error}`)
  })

  fs.writeFileSync(path.join(outputDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`)
  if (failures.length) throw new Error(`Visual checks failed:\n${failures.join('\n')}`)
  console.log(`Visual checks OK: ${report.length} captures, 2 frameworks, ${stories.length} stories, ${modes.length} modes.`)
  console.log(`Artifacts: ${path.relative(root, outputDir)}`)
} finally {
  servers.forEach((server) => server.close())
  chrome.kill('SIGTERM')
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }) } catch {}
}

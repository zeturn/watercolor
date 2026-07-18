import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'
import os from 'node:os'
import path from 'node:path'
import WebSocket from 'ws'

const root = process.cwd()
const outputDir = path.join(root, 'tmp/visual-regression')
const chromePath = process.env.CHROME_PATH || (process.platform === 'darwin'
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : 'google-chrome')

const modes = [
  { name: 'light-desktop', theme: 'light', resolvedTheme: 'light', width: 1440, height: 1000 },
  { name: 'dark-desktop', theme: 'dark', resolvedTheme: 'dark', width: 1440, height: 1000 },
  { name: 'system-light-desktop', theme: 'system', resolvedTheme: 'light', prefersColorScheme: 'light', width: 1440, height: 1000 },
  { name: 'system-dark-desktop', theme: 'system', resolvedTheme: 'dark', prefersColorScheme: 'dark', width: 1440, height: 1000 },
  { name: 'light-mobile', theme: 'light', resolvedTheme: 'light', width: 390, height: 844 },
  { name: 'dark-mobile', theme: 'dark', resolvedTheme: 'dark', width: 390, height: 844 },
  { name: 'reduced-motion', theme: 'light', resolvedTheme: 'light', width: 1440, height: 1000, prefersReducedMotion: 'reduce' },
  { name: 'forced-colors', theme: 'light', resolvedTheme: 'light', width: 1440, height: 1000, forcedColors: 'active' },
  { name: 'rtl-desktop', theme: 'light', resolvedTheme: 'light', width: 1440, height: 1000, direction: 'rtl' },
  { name: 'zoom-200', theme: 'light', resolvedTheme: 'light', width: 720, height: 1000, pageScaleFactor: 2 },
]
const stories = [
  { id: 'foundations-composition--overview', selector: '.wc-composition-demo' },
  { id: 'foundations-composition--component-boundaries', selector: '.wc-composition-demo' },
  { id: 'foundations-theme-contract--provider-contract', selector: '.wc-theme-contract' },
  { id: 'foundations-theme-contract--custom-theme-v-2', selector: '.wc-theme-contract' },
  { id: 'recipes-product-pages--dashboard', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--settings', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--list-detail', selector: '.wc-recipe' },
  { id: 'recipes-product-pages--form-page', selector: '.wc-recipe' },
]
const componentModes = modes.filter((mode) => mode.name === 'light-desktop' || mode.name === 'dark-desktop')
const storyFilter = process.env.STORY_FILTER?.trim()
const includeStory = (story) => !storyFilter || story.id.includes(storyFilter)

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
      await delay(150)
      return
    }
    await delay(100)
  }
  throw new Error(`Story did not render ${selector} (${label})`)
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
  if (mode.pageScaleFactor) {
    await cdp.send('Emulation.setPageScaleFactor', { pageScaleFactor: mode.pageScaleFactor })
  }
  await cdp.send('Emulation.setEmulatedMedia', {
    features: [
      { name: 'prefers-color-scheme', value: mode.prefersColorScheme || mode.resolvedTheme },
      ...(mode.prefersReducedMotion ? [{ name: 'prefers-reduced-motion', value: mode.prefersReducedMotion }] : []),
      ...(mode.forcedColors ? [{ name: 'forced-colors', value: mode.forcedColors }] : []),
    ],
  })
  await cdp.send('Page.navigate', { url })
  await waitForStory(cdp, story.selector, `${framework}/${story.id}/${mode.name}`)
  if (mode.direction) {
    await evaluate(cdp, `document.documentElement.setAttribute('dir', ${JSON.stringify(mode.direction)})`)
    await delay(50)
  }
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 })
  await cdp.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9, nativeVirtualKeyCode: 9 })
  await delay(50)

  const metrics = await evaluate(cdp, `(() => {
    const split = document.querySelector('.wc-split')
    const sampled = [...document.querySelectorAll('button, [role="button"], input, textarea, select, a[href]')].slice(0, 8)
    const visibleInteractive = (element) => !element.disabled && element.tabIndex !== -1 && element.offsetParent !== null
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    const forcedColors = matchMedia('(forced-colors: active)').matches
    return {
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      resolvedTheme: document.documentElement.dataset.resolvedTheme,
      direction: document.documentElement.dir || getComputedStyle(document.documentElement).direction,
      reducedMotion,
      forcedColors,
      maxTransitionDuration: Math.max(0, ...sampled.map((element) => {
        const duration = getComputedStyle(element).transitionDuration.split(',').map((part) => parseFloat(part) || 0)
        return Math.max(...duration)
      })),
      focusedOutline: (() => {
        const active = document.activeElement
        const target = sampled.includes(active) && visibleInteractive(active) ? active : null
        if (!target) return { probed: false }
        const candidates = [target, target.parentElement, target.parentElement?.parentElement].filter(Boolean)
        return {
          probed: true,
          target: target.className || target.tagName.toLowerCase(),
          candidates: candidates.map((element) => {
            const style = getComputedStyle(element)
            return {
              target: element.className || element.tagName.toLowerCase(),
              outlineStyle: style.outlineStyle,
              outlineWidth: style.outlineWidth,
              boxShadow: style.boxShadow,
            }
          }),
        }
      })(),
      splitColumns: split ? getComputedStyle(split).gridTemplateColumns : null,
      primitiveCounts: Object.fromEntries(['page', 'stack', 'inline', 'split'].map(name => [name, document.querySelectorAll('.wc-' + name).length])),
      storybookError: [...document.querySelectorAll('.sb-errordisplay, [data-testid="story-error"]')]
        .find((element) => {
          const box = element.getBoundingClientRect()
          const style = getComputedStyle(element)
          return style.display !== 'none' && style.visibility !== 'hidden' && box.width > 0 && box.height > 0
        })?.textContent?.trim() || null,
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
  if (story.id.startsWith('foundations-theme-contract--')) {
    const readTheme = () => evaluate(cdp, `(() => ({
      requested: document.querySelector('[data-theme-requested]')?.textContent,
      resolved: document.querySelector('[data-theme-resolved]')?.textContent,
      dataTheme: document.documentElement.dataset.theme,
      dataResolvedTheme: document.documentElement.dataset.resolvedTheme,
      className: document.documentElement.className,
      colorScheme: document.documentElement.style.colorScheme,
      background: getComputedStyle(document.querySelector('.wc-theme-contract')).backgroundColor,
      primary: getComputedStyle(document.documentElement).getPropertyValue('--wc-primary-600').trim(),
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
  return { framework, story: story.id, storyKind: story.kind || 'reference', mode: mode.name, expectedResolvedTheme: mode.resolvedTheme, ...metrics, hover, themeSwitch, screenshot: filename }
}

function defaultComponentStories(framework) {
  const index = JSON.parse(fs.readFileSync(path.join(root, `packages/${framework}/storybook-static/index.json`), 'utf8'))
  const entries = Object.values(index.entries).filter((entry) => entry.type === 'story' && entry.title.startsWith('Components/'))
  const byTitle = new Map()
  for (const entry of entries) {
    const current = byTitle.get(entry.title)
    if (!current || entry.name === 'Default') byTitle.set(entry.title, entry)
  }
  return [...byTitle.values()].map((entry) => ({
    id: entry.id,
    selector: '#storybook-root > *',
    kind: 'component-default',
  }))
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
    console.log(`Checking ${framework.framework} reference stories...`)
    for (const story of stories.filter(includeStory)) {
      for (const mode of modes) report.push(await capture({ ...framework, story, mode, debugPort }))
    }
    const componentStories = defaultComponentStories(framework.framework).filter(includeStory)
    console.log(`Checking ${framework.framework} component defaults (${componentStories.length})...`)
    for (const story of componentStories) {
      for (const mode of componentModes) report.push(await capture({ ...framework, story, mode, debugPort }))
    }
  }

  const failures = report.flatMap((item) => {
    const errors = []
    if (item.scrollWidth > item.innerWidth) errors.push(`horizontal overflow ${item.scrollWidth}/${item.innerWidth}`)
    if (item.resolvedTheme !== item.expectedResolvedTheme) errors.push(`theme did not resolve: expected ${item.expectedResolvedTheme}, received ${item.resolvedTheme}`)
    if (item.mode === 'reduced-motion' && (!item.reducedMotion || item.maxTransitionDuration > 0.01)) errors.push(`reduced motion failed: ${item.maxTransitionDuration}`)
    if (item.mode === 'forced-colors' && !item.forcedColors) errors.push('forced-colors media was not active')
    if (item.mode === 'rtl-desktop' && item.direction !== 'rtl') errors.push(`RTL direction failed: ${item.direction}`)
    if (item.mode === 'zoom-200' && item.scrollWidth > item.innerWidth + 1) errors.push(`200% zoom overflow ${item.scrollWidth}/${item.innerWidth}`)
    if (
      item.focusedOutline?.probed &&
      !item.focusedOutline.candidates.some((candidate) =>
        (candidate.outlineStyle !== 'none' && candidate.outlineWidth !== '0px') ||
        candidate.boxShadow !== 'none'
      )
    ) errors.push('focus state has no visible outline or ring')
    if (item.storybookError) errors.push(`Storybook render error: ${item.storybookError}`)
    if (item.storyKind === 'reference' && (!item.primitiveCounts.page || !item.primitiveCounts.stack)) errors.push('missing Page or Stack composition')
    if (item.mode.includes('mobile') && item.splitColumns?.includes(' ')) errors.push(`Split did not collapse: ${item.splitColumns}`)
    if (item.hover) {
      const transparentBefore = item.hover.before === 'transparent' || /rgba\([^)]*,\s*0\)$/.test(item.hover.before)
      if (!transparentBefore || item.hover.after === item.hover.before) errors.push(`hover surface failed: ${JSON.stringify(item.hover)}`)
    }
    if (item.themeSwitch) {
      const expectedRequested = item.mode.startsWith('system-') ? 'system' : item.expectedResolvedTheme
      if (item.themeSwitch.initial.dataTheme !== expectedRequested || item.themeSwitch.initial.resolved !== item.expectedResolvedTheme) errors.push(`initial theme frame is inconsistent: ${JSON.stringify(item.themeSwitch.initial)}`)
      if (!item.themeSwitch.dark.className.includes('dark') || item.themeSwitch.dark.className.includes('light') || item.themeSwitch.dark.colorScheme !== 'dark') errors.push(`dark DOM contract failed: ${JSON.stringify(item.themeSwitch.dark)}`)
      if (!item.themeSwitch.light.className.includes('light') || item.themeSwitch.light.className.includes('dark') || item.themeSwitch.light.colorScheme !== 'light') errors.push(`light DOM contract failed: ${JSON.stringify(item.themeSwitch.light)}`)
      if (item.mode !== 'forced-colors' && item.themeSwitch.dark.background === item.themeSwitch.light.background) errors.push('theme canvas did not change')
      if (item.story.endsWith('--custom-theme-v-2') && (item.themeSwitch.dark.primary !== '#8b5cf6' || item.themeSwitch.light.primary !== '#8b5cf6')) errors.push(`custom brand token was not stable: ${JSON.stringify(item.themeSwitch)}`)
    }
    return errors.map((error) => `${item.framework}/${item.story}/${item.mode}: ${error}`)
  })

  fs.writeFileSync(path.join(outputDir, 'report.json'), `${JSON.stringify(report, null, 2)}\n`)
  if (failures.length) throw new Error(`Visual checks failed:\n${failures.join('\n')}`)
  const componentCaptures = report.filter((item) => item.storyKind === 'component-default').length
  console.log(`Visual checks OK: ${report.length} captures (${componentCaptures} component-default), 2 frameworks.`)
  console.log(`Artifacts: ${path.relative(root, outputDir)}`)
} finally {
  servers.forEach((server) => server.close())
  chrome.kill('SIGTERM')
  try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }) } catch {}
}

import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { fireEvent, render, screen } from '@testing-library/vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/ThemeVUE.ts'

const Probe = defineComponent({
  setup () {
    const theme = useTheme()
    return () => h('button', {
      onClick: () => theme.setMode(theme.dark.value ? 'light' : 'dark'),
    }, `${theme.mode.value}:${theme.resolvedMode.value}`)
  },
})

const createStorage = () => {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    clear: () => values.clear(),
    values,
  }
}

let storage
const brandTheme = {
  version: 2,
  tokens: { colors: { primary: { 600: '#123456' } } },
  modes: { light: { canvas: '#ffffff', textPrimary: '#111111', accent: '#123456', onAccent: '#ffffff' } },
}

const deferred = () => {
  let resolve
  const promise = new Promise((next) => { resolve = next })
  return { promise, resolve }
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    storage = createStorage()
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
    document.documentElement.removeAttribute('style')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    document.body.innerHTML = ''
  })

  it('publishes mode state and keeps the legacy dark class in sync', async () => {
    render(ThemeProvider, {
      props: { defaultMode: 'light', storage },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.classList.contains('light')).toBe(false)
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(storage.getItem('wc-mode')).toBe('dark')
    expect(storage.getItem('wc-scheme')).toBeNull()
  })

  it('responds to controlled mode updates', async () => {
    storage.setItem('wc-mode', 'dark')
    const onUpdateMode = vi.fn()
    const view = render(ThemeProvider, {
      props: { mode: 'light', storage, 'onUpdate:mode': onUpdateMode },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await fireEvent.click(screen.getByRole('button'))
    expect(onUpdateMode).toHaveBeenCalledWith('dark')
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await view.rerender({ mode: 'dark', storage, 'onUpdate:mode': onUpdateMode })
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })

  it('keeps system mode while updating its resolved value', async () => {
    let dark = false
    let listener
    const matchMedia = vi.fn(() => ({
      get matches () { return dark },
      addEventListener: (_event, next) => { listener = next },
      removeEventListener: vi.fn(),
    }))
    vi.stubGlobal('matchMedia', matchMedia)
    window.matchMedia = matchMedia
    const onResolvedModeChange = vi.fn()
    render(ThemeProvider, {
      props: { defaultMode: 'system', storage, onResolvedModeChange },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('system:light')
    dark = true
    listener({ matches: dark })
    await Promise.resolve()
    expect(screen.getByRole('button')).toHaveTextContent('system:dark')
    expect(document.documentElement.dataset.theme).toBe('system')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(onResolvedModeChange).toHaveBeenCalledWith('dark')
  })

  it('does not mutate the document during server rendering', async () => {
    const before = document.documentElement.outerHTML
    const app = createSSRApp({ render: () => h(ThemeProvider, { defaultMode: 'dark' }, () => h(Probe)) })
    expect(await renderToString(app)).toContain('dark:dark')
    expect(document.documentElement.outerHTML).toBe(before)
  })

  it('can render system dark on the server with an explicit resolved mode', async () => {
    const app = createSSRApp({
      render: () => h(ThemeProvider, { defaultMode: 'system', initialResolvedMode: 'dark' }, () => h(Probe)),
    })
    expect(await renderToString(app)).toContain('system:dark')
  })

  it('hydrates server markup without a theme mismatch', async () => {
    const createApp = () => createSSRApp({
      render: () => h(ThemeProvider, { defaultMode: 'dark', storage }, () => h(Probe)),
    })
    const serverApp = createApp()
    const container = document.createElement('div')
    container.innerHTML = await renderToString(serverApp)
    document.body.appendChild(container)
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const app = createApp()
    app.mount(container)
    await Promise.resolve()
    expect(container.textContent).toBe('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(consoleError).not.toHaveBeenCalled()
    expect(consoleWarn).not.toHaveBeenCalled()
    app.unmount()
    container.remove()
  })

  it('does not request a theme file when themeUrl is omitted', () => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)
    const view = render(ThemeProvider, {
      props: { defaultMode: 'light', storage },
      slots: { default: () => h(Probe) },
    })
    expect(fetch).not.toHaveBeenCalled()
    view.unmount()
    expect(document.documentElement.dataset.theme).toBeUndefined()
  })

  it('applies scoped config and restores the same target on unmount', () => {
    const target = document.createElement('section')
    target.style.setProperty('--wc-primary-600', '#000000')
    const view = render(ThemeProvider, {
      props: { defaultMode: 'dark', storage, target, config: brandTheme },
      slots: { default: () => h(Probe) },
    })
    expect(target.dataset.resolvedTheme).toBe('dark')
    expect(target.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    expect(document.documentElement.dataset.resolvedTheme).toBeUndefined()
    view.unmount()
    expect(target.dataset.resolvedTheme).toBeUndefined()
    expect(target.style.getPropertyValue('--wc-primary-600')).toBe('#000000')
  })

  it('reports remote theme errors without changing existing config', async () => {
    const onThemeError = vi.fn()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: false, status: 404 }))
    render(ThemeProvider, {
      props: { storage, config: brandTheme, themeUrl: '/missing.json', onThemeError },
      slots: { default: () => h(Probe) },
    })
    await Promise.resolve()
    await Promise.resolve()
    expect(onThemeError).toHaveBeenCalledWith(expect.objectContaining({ ok: false, url: '/missing.json' }))
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
  })

  it('keeps the previous remote theme when a newer URL fails', async () => {
    const fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(brandTheme) })
      .mockResolvedValueOnce({ ok: false, status: 500 })
    vi.stubGlobal('fetch', fetch)
    const view = render(ThemeProvider, {
      props: { storage, themeUrl: '/brand.json' },
      slots: { default: () => h(Probe) },
    })
    await Promise.resolve()
    await Promise.resolve()
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    await view.rerender({ storage, themeUrl: '/broken.json' })
    await Promise.resolve()
    await Promise.resolve()
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
  })

  it('aborts obsolete theme requests and lets the last request win', async () => {
    const first = deferred()
    const secondTheme = { ...brandTheme, tokens: { colors: { primary: { 600: '#abcdef' } } } }
    const fetch = vi.fn()
      .mockReturnValueOnce(first.promise)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(secondTheme) })
    vi.stubGlobal('fetch', fetch)
    const view = render(ThemeProvider, {
      props: { storage, themeUrl: '/first.json' },
      slots: { default: () => h(Probe) },
    })
    await view.rerender({ storage, themeUrl: '/second.json' })
    await Promise.resolve()
    expect(fetch.mock.calls[0][1].signal.aborted).toBe(true)
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#abcdef')
    first.resolve({ ok: true, json: () => Promise.resolve(brandTheme) })
    await Promise.resolve()
    await Promise.resolve()
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#abcdef')
  })
})

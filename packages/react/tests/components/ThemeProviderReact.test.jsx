import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/ThemeReact.tsx'

function Probe () {
  const theme = useTheme()
  return (
    <button onClick={() => theme.setMode(theme.dark ? 'light' : 'dark')}>
      {theme.mode}:{theme.resolvedMode}
    </button>
  )
}

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

  it('publishes mode state and keeps the legacy dark class in sync', () => {
    render(<ThemeProvider defaultMode="light" storage={storage}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.classList.contains('light')).toBe(false)
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(storage.getItem('wc-mode')).toBe('dark')
    expect(storage.getItem('wc-scheme')).toBeNull()
  })

  it('responds to controlled mode updates', () => {
    storage.setItem('wc-mode', 'dark')
    const onModeChange = vi.fn()
    const { rerender } = render(<ThemeProvider mode="light" storage={storage} onModeChange={onModeChange}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    fireEvent.click(screen.getByRole('button'))
    expect(onModeChange).toHaveBeenCalledWith('dark')
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    rerender(<ThemeProvider mode="dark" storage={storage} onModeChange={onModeChange}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })

  it('keeps system mode while updating its resolved value', () => {
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
    render(<ThemeProvider defaultMode="system" storage={storage} onResolvedModeChange={onResolvedModeChange}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('system:light')
    dark = true
    act(() => listener({ matches: dark }))
    expect(screen.getByRole('button')).toHaveTextContent('system:dark')
    expect(document.documentElement.dataset.theme).toBe('system')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(onResolvedModeChange).toHaveBeenCalledWith('dark')
  })

  it('does not mutate the document during server rendering', () => {
    const before = document.documentElement.outerHTML
    expect(renderToString(<ThemeProvider defaultMode="dark"><Probe /></ThemeProvider>)).toContain('dark')
    expect(document.documentElement.outerHTML).toBe(before)
  })

  it('can render system dark on the server with an explicit resolved mode', () => {
    const html = renderToString(
      <ThemeProvider defaultMode="system" initialResolvedMode="dark">
        <Probe />
      </ThemeProvider>,
    )
    expect(html).toContain('system')
    expect(html).toContain('dark')
  })

  it('hydrates server markup without a theme mismatch', async () => {
    const element = <ThemeProvider defaultMode="dark" storage={storage}><Probe /></ThemeProvider>
    const container = document.createElement('div')
    container.innerHTML = renderToString(element)
    document.body.appendChild(container)
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    let root
    await act(async () => {
      root = hydrateRoot(container, element)
      await Promise.resolve()
    })
    expect(container.textContent).toBe('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(consoleError).not.toHaveBeenCalled()
    await act(async () => root.unmount())
    container.remove()
  })

  it('does not request a theme file when themeUrl is omitted', () => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)
    const { unmount } = render(<ThemeProvider defaultMode="light" storage={storage}><Probe /></ThemeProvider>)
    expect(fetch).not.toHaveBeenCalled()
    unmount()
    expect(document.documentElement.dataset.theme).toBeUndefined()
  })

  it('applies scoped config and restores the same target on unmount', () => {
    const target = document.createElement('section')
    target.style.setProperty('--wc-primary-600', '#000000')
    const { unmount } = render(
      <ThemeProvider defaultMode="dark" storage={storage} target={target} config={brandTheme}>
        <Probe />
      </ThemeProvider>,
    )
    expect(target.dataset.resolvedTheme).toBe('dark')
    expect(target.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    expect(document.documentElement.dataset.resolvedTheme).toBeUndefined()
    unmount()
    expect(target.dataset.resolvedTheme).toBeUndefined()
    expect(target.style.getPropertyValue('--wc-primary-600')).toBe('#000000')
  })

  it('reports remote theme errors without changing existing config', async () => {
    const onThemeError = vi.fn()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: false, status: 404 }))
    render(<ThemeProvider storage={storage} config={brandTheme} themeUrl="/missing.json" onThemeError={onThemeError}><Probe /></ThemeProvider>)
    await act(async () => { await Promise.resolve() })
    expect(onThemeError).toHaveBeenCalledWith(expect.objectContaining({ ok: false, url: '/missing.json' }))
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
  })

  it('keeps the previous remote theme when a newer URL fails', async () => {
    const fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(brandTheme) })
      .mockResolvedValueOnce({ ok: false, status: 500 })
    vi.stubGlobal('fetch', fetch)
    const view = render(<ThemeProvider storage={storage} themeUrl="/brand.json"><Probe /></ThemeProvider>)
    await act(async () => { await Promise.resolve() })
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    await act(async () => {
      view.rerender(<ThemeProvider storage={storage} themeUrl="/broken.json"><Probe /></ThemeProvider>)
      await Promise.resolve()
    })
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
  })

  it('aborts obsolete theme requests and lets the last request win', async () => {
    const first = deferred()
    const secondTheme = { ...brandTheme, tokens: { colors: { primary: { 600: '#abcdef' } } } }
    const fetch = vi.fn()
      .mockReturnValueOnce(first.promise)
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve(secondTheme) })
    vi.stubGlobal('fetch', fetch)
    const onThemeLoad = vi.fn()
    const view = render(<ThemeProvider storage={storage} themeUrl="/first.json" onThemeLoad={onThemeLoad}><Probe /></ThemeProvider>)
    await act(async () => {
      view.rerender(<ThemeProvider storage={storage} themeUrl="/second.json" onThemeLoad={onThemeLoad}><Probe /></ThemeProvider>)
      await Promise.resolve()
    })
    expect(fetch.mock.calls[0][1].signal.aborted).toBe(true)
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#abcdef')
    await act(async () => {
      first.resolve({ ok: true, json: () => Promise.resolve(brandTheme) })
      await Promise.resolve()
    })
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#abcdef')
  })
})

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

describe('ThemeProvider', () => {
  beforeEach(() => {
    storage = createStorage()
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
  })

  afterEach(() => vi.unstubAllGlobals())

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
})

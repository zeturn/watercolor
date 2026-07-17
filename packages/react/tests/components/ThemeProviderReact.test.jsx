import React from 'react'
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
    const { rerender } = render(<ThemeProvider mode="light" storage={storage}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    rerender(<ThemeProvider mode="dark" storage={storage}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })

  it('keeps system mode while updating its resolved value', () => {
    let dark = false
    let listener
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      get matches () { return dark },
      addEventListener: (_event, next) => { listener = next },
      removeEventListener: vi.fn(),
    })))
    render(<ThemeProvider defaultMode="system" storage={storage}><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('system:light')
    dark = true
    act(() => listener())
    expect(screen.getByRole('button')).toHaveTextContent('system:dark')
    expect(document.documentElement.dataset.theme).toBe('system')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })
})

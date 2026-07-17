import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { applyCSSTheme, isDarkMode, toggleDarkMode } from '../../../core/src/theme/config.ts'
import { createThemeManager } from '../../../core/src/theme/controller.ts'

describe('legacy theme APIs', () => {
  beforeEach(() => {
    const values = new Map()
    vi.stubGlobal('localStorage', {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: (key) => values.delete(key),
      clear: () => values.clear(),
    })
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
  })

  afterEach(() => vi.unstubAllGlobals())

  it('warns once per legacy API while preserving compatible behavior', () => {
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => {})

    applyCSSTheme('default')
    applyCSSTheme('default')
    toggleDarkMode(true)
    toggleDarkMode(true)
    expect(isDarkMode()).toBe(true)
    expect(isDarkMode()).toBe(true)
    const manager = createThemeManager('default', false)
    manager.destroy()

    for (const api of ['applyCSSTheme()', 'toggleDarkMode()', 'isDarkMode()', 'createThemeManager()']) {
      expect(warning.mock.calls.filter(([message]) => String(message).includes(api))).toHaveLength(1)
    }
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(window.localStorage.getItem('wc-mode')).toBe('dark')
    expect(window.localStorage.getItem('wc-scheme')).toBeNull()
    warning.mockRestore()
  })
})

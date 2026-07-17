import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createThemeController,
  LEGACY_THEME_STORAGE_KEY,
  THEME_COLOR_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from '../../../core/src/theme/controller.ts'

const createStorage = (initial = {}) => {
  const values = new Map(Object.entries(initial))
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    values,
  }
}

afterEach(() => vi.unstubAllGlobals())

describe('theme controller contract', () => {
  it('applies the authoritative DOM contract and only writes current storage keys', () => {
    const target = document.createElement('html')
    const storage = createStorage()
    const controller = createThemeController({ target, storage, defaultMode: 'light' })

    expect(target.dataset.theme).toBe('light')
    expect(target.dataset.resolvedTheme).toBe('light')
    expect(target.classList.contains('light')).toBe(true)
    expect(target.style.colorScheme).toBe('light')

    controller.setMode('dark')
    expect(target.dataset.resolvedTheme).toBe('dark')
    expect(target.classList.contains('dark')).toBe(true)
    expect(target.classList.contains('light')).toBe(false)
    expect(storage.values.get(THEME_STORAGE_KEY)).toBe('dark')
    expect(storage.values.get(THEME_COLOR_STORAGE_KEY)).toBe('default')
    expect(storage.values.has(LEGACY_THEME_STORAGE_KEY)).toBe(false)
    controller.destroy()
  })

  it('migrates the legacy storage key without continuing to write it', () => {
    const storage = createStorage({ [LEGACY_THEME_STORAGE_KEY]: 'dark' })
    const controller = createThemeController({ target: document.createElement('html'), storage })

    expect(controller.mode).toBe('dark')
    expect(storage.values.get(THEME_STORAGE_KEY)).toBe('dark')
    controller.setMode('light')
    expect(storage.values.get(LEGACY_THEME_STORAGE_KEY)).toBe('dark')
    expect(storage.values.get(THEME_STORAGE_KEY)).toBe('light')
    controller.destroy()
  })

  it('resolves system changes without replacing the system preference', () => {
    let dark = false
    let listener
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      get matches () { return dark },
      addEventListener: (_event, next) => { listener = next },
      removeEventListener: vi.fn(),
    })))
    const target = document.createElement('html')
    const controller = createThemeController({ target, storage: null, defaultMode: 'system' })

    expect(controller.mode).toBe('system')
    expect(controller.resolvedMode).toBe('light')
    dark = true
    listener()
    expect(controller.mode).toBe('system')
    expect(controller.resolvedMode).toBe('dark')
    expect(target.dataset.theme).toBe('system')
    expect(target.dataset.resolvedTheme).toBe('dark')
    controller.destroy()
  })

  it('ignores invalid runtime modes from untyped consumers', () => {
    const controller = createThemeController({ target: document.createElement('html'), storage: null, defaultMode: 'light' })
    controller.setMode('sepia')
    expect(controller.mode).toBe('light')
    controller.destroy()
  })
})

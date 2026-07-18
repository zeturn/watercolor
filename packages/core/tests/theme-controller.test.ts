import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  createThemeController,
  resolveThemeMode,
  type ThemeStorage,
} from '../src/theme/controller.ts'
import { createThemeInitScript } from '../src/theme/ssr.ts'

const createStorage = (initial: Record<string, string> = {}): ThemeStorage & { values: Map<string, string> } => {
  const values = new Map(Object.entries(initial))
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  }
}

afterEach(() => {
  document.documentElement.className = ''
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('data-resolved-theme')
  document.documentElement.style.colorScheme = ''
  vi.unstubAllGlobals()
})

describe('Theme v2 controller', () => {
  it('is pure until start and applies the DOM contract afterward', () => {
    const before = document.documentElement.outerHTML
    const controller = createThemeController({ initialMode: 'dark', storage: null })
    expect(document.documentElement.outerHTML).toBe(before)
    expect(controller.started).toBe(false)
    controller.start()
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    controller.destroy()
  })

  it('falls back to system for invalid runtime initial modes', () => {
    const controller = createThemeController({ initialMode: 'sepia', storage: null })
    expect(controller.mode).toBe('system')
    expect(controller.resolvedMode).toBe('light')
  })

  it('migrates the legacy mode once and persists future choices only to wc-mode', () => {
    const storage = createStorage({ 'wc-scheme': 'dark' })
    const controller = createThemeController({ storage })
    controller.start()
    expect(controller.mode).toBe('dark')
    expect(storage.values.get('wc-mode')).toBe('dark')
    controller.setMode('light')
    expect(storage.values.get('wc-mode')).toBe('light')
    expect(storage.values.get('wc-scheme')).toBe('dark')
    controller.destroy()
  })

  it('tracks system changes without replacing the requested system mode', () => {
    let dark = false
    let listener: ((event: { matches: boolean }) => void) | undefined
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      get matches () { return dark },
      addEventListener: (_event: string, next: typeof listener) => { listener = next },
      removeEventListener: vi.fn(),
    })))
    const controller = createThemeController({ initialMode: 'system', storage: null })
    controller.start()
    dark = true
    listener?.({ matches: true })
    expect(controller.mode).toBe('system')
    expect(controller.resolvedMode).toBe('dark')
    controller.destroy()
  })

  it('synchronizes valid mode changes from another browsing context', () => {
    const controller = createThemeController({ initialMode: 'light', storage: createStorage() })
    controller.start()
    window.dispatchEvent(new StorageEvent('storage', { key: 'wc-mode', newValue: 'dark' }))
    expect(controller.mode).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    window.dispatchEvent(new StorageEvent('storage', { key: 'wc-mode', newValue: 'sepia' }))
    expect(controller.mode).toBe('dark')
    controller.destroy()
  })

  it('removes media and storage listeners when destroyed', () => {
    const removeMediaListener = vi.fn()
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: removeMediaListener,
    })))
    const removeWindowListener = vi.spyOn(window, 'removeEventListener')
    const controller = createThemeController({ storage: null })
    controller.start()
    controller.destroy()
    expect(removeMediaListener).toHaveBeenCalledWith('change', expect.any(Function))
    expect(removeWindowListener).toHaveBeenCalledWith('storage', expect.any(Function))
  })

  it('restores the target DOM contract when destroyed', () => {
    const target = document.createElement('section')
    target.dataset.theme = 'light'
    target.dataset.resolvedTheme = 'light'
    target.className = 'existing'
    target.style.colorScheme = 'light'
    const controller = createThemeController({ target, initialMode: 'dark', storage: null })
    controller.start()
    expect(target.dataset.resolvedTheme).toBe('dark')
    expect(target.classList.contains('dark')).toBe(true)
    controller.destroy()
    expect(target.dataset.theme).toBe('light')
    expect(target.dataset.resolvedTheme).toBe('light')
    expect(target.className).toBe('existing')
    expect(target.style.colorScheme).toBe('light')
  })

  it('resolves modes and executes the pre-paint script before providers mount', () => {
    expect(resolveThemeMode('system', true)).toBe('dark')
    const script = createThemeInitScript({ defaultMode: 'light', storageKey: 'wc-mode' })
    expect(script).toContain("d.dataset.theme=m")
    expect(script).not.toContain('<')
    const storage = createStorage({ 'wc-mode': 'dark' })
    vi.stubGlobal('localStorage', storage)
    Function(script)()
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.style.colorScheme).toBe('dark')
  })
})

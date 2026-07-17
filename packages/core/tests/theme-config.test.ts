import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  applyThemeConfig,
  loadThemeConfig,
  resetThemeConfig,
  serializeThemeConfig,
  validateThemeConfig,
} from '../src/theme/config.ts'
import { createThemeController } from '../src/theme/controller.ts'

const theme = {
  version: 2,
  tokens: {
    colors: { primary: { 600: '#123456' } },
    radius: { lg: '14px' },
  },
  modes: {
    light: { canvas: '#fefefe', accent: '#123456' },
    dark: { canvas: '#101010', accent: '#abcdef' },
  },
} as const

afterEach(() => {
  resetThemeConfig(document.documentElement)
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('data-resolved-theme')
  document.documentElement.className = ''
  document.documentElement.style.colorScheme = ''
  vi.unstubAllGlobals()
})

describe('Theme v2 configuration', () => {
  it('validates and applies primitive and per-mode variables transactionally', () => {
    const result = applyThemeConfig(theme)
    expect(result).toMatchObject({ ok: true, appliedVariables: 6 })
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    expect(document.documentElement.style.getPropertyValue('--wc-radius-lg')).toBe('14px')
    expect(document.documentElement.style.getPropertyValue('--wc-theme-light-canvas')).toBe('#fefefe')
    expect(document.documentElement.style.getPropertyValue('--wc-theme-dark-accent')).toBe('#abcdef')
  })

  it('rejects legacy and unsafe configs without changing the active theme', () => {
    applyThemeConfig(theme)
    const before = document.documentElement.getAttribute('style')
    expect(validateThemeConfig({ primary: { 600: '#fff' } }).ok).toBe(false)
    expect(applyThemeConfig({ version: 2, modes: { light: { canvas: 'red;display:none' } } }).ok).toBe(false)
    expect(document.documentElement.getAttribute('style')).toBe(before)
  })

  it('warns about low primary-text contrast without rejecting the theme', () => {
    const result = validateThemeConfig({
      version: 2,
      modes: { light: { canvas: '#ffffff', textPrimary: '#eeeeee' } },
    })
    expect(result.ok).toBe(true)
    expect(result.warnings).toContainEqual({
      path: '$.modes.light.textPrimary',
      message: 'textPrimary and canvas have less than 4.5:1 contrast.',
    })
  })

  it('resets only variables applied by the config layer', () => {
    document.documentElement.style.setProperty('--product-token', 'keep')
    applyThemeConfig(theme)
    resetThemeConfig()
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('')
    expect(document.documentElement.style.getPropertyValue('--product-token')).toBe('keep')
  })

  it('can validate an application without mutating the browser root', () => {
    const before = document.documentElement.getAttribute('style')
    expect(applyThemeConfig(theme, { target: null })).toMatchObject({ ok: true, appliedVariables: 6 })
    expect(document.documentElement.getAttribute('style')).toBe(before)
  })

  it('does not overwrite brand variables when the mode changes', () => {
    applyThemeConfig(theme)
    const controller = createThemeController({ initialMode: 'light', storage: null })
    controller.start()
    controller.setMode('dark')
    expect(document.documentElement.style.getPropertyValue('--wc-primary-600')).toBe('#123456')
    expect(document.documentElement.style.getPropertyValue('--wc-theme-dark-accent')).toBe('#abcdef')
    controller.destroy()
  })

  it('returns structured failures for HTTP and JSON errors', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: false, status: 404 }))
    await expect(loadThemeConfig('/missing.json')).resolves.toMatchObject({ ok: false, url: '/missing.json' })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({ ok: true, json: () => Promise.reject(new Error('bad json')) }))
    await expect(loadThemeConfig('/bad.json')).resolves.toMatchObject({ ok: false, url: '/bad.json' })
  })

  it('serializes only validated variables for SSR', () => {
    const result = serializeThemeConfig(theme)
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.css).toContain('--wc-primary-600:#123456')
      expect(result.css).toContain('--wc-theme-dark-canvas:#101010')
    }
  })
})

import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defaultLocaleMessages } from '../locale.js'
import {
  createThemeController,
  applyThemeConfig,
  resetThemeConfig,
  createThemeInitScript,
  THEME_MODES,
} from '../utils/theme.js'

const here = dirname(fileURLToPath(import.meta.url))

describe('@zeturn/watercolor-angular public surface', () => {
  it('re-exports the core theme utilities', () => {
    expect(typeof createThemeController).toBe('function')
    expect(typeof applyThemeConfig).toBe('function')
    expect(typeof resetThemeConfig).toBe('function')
    expect(typeof createThemeInitScript).toBe('function')
    expect(Array.isArray(THEME_MODES)).toBe(true)
  })

  it('provides complete default locale messages', () => {
    expect(defaultLocaleMessages.closeLightbox).toBeTruthy()
    expect(typeof defaultLocaleMessages.openImageInLightbox).toBe('function')
    expect(typeof defaultLocaleMessages.ratingValue).toBe('function')
  })

  it('exports every name required by api-manifest.json', () => {
    const manifest = JSON.parse(
      readFileSync(resolve(here, '../../../../api-manifest.json'), 'utf8'),
    ) as { publicExports: string[] }
    const barrel = readFileSync(resolve(here, '../index.ts'), 'utf8')
    const exported = new Set<string>()
    for (const match of barrel.matchAll(/export\s*\{([^}]+)\}\s*from/g)) {
      for (const raw of match[1].split(',')) {
        const spec = raw.trim()
        if (!spec || spec.startsWith('type ')) continue
        const name = spec.match(/(?:default\s+as\s+)?([A-Za-z_$][\w$]*)$/)?.[1]
        if (name) exported.add(name)
      }
    }
    const missing = manifest.publicExports.filter((name) => !exported.has(name))
    expect(missing).toEqual([])
  })
})

import { warnThemeDeprecation } from './deprecations.js'

export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface FontConfig {
  chinese?: string
  english?: string
  fallback?: string
}

export interface RadiusConfig {
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
  full?: string
}

export interface WatercolorTheme {
  primary: Partial<ColorPalette>
  secondary?: Partial<ColorPalette>
  neutral?: Partial<ColorPalette>
  success?: Partial<ColorPalette>
  warning?: Partial<ColorPalette>
  error?: Partial<ColorPalette>
  info?: Partial<ColorPalette>
  danger?: Partial<ColorPalette>
  purple?: Partial<ColorPalette>
  pink?: Partial<ColorPalette>
  teal?: Partial<ColorPalette>
  indigo?: Partial<ColorPalette>
  fonts?: FontConfig
  radius?: RadiusConfig
}

const paletteNames = [
  'primary', 'secondary', 'neutral', 'success', 'warning', 'error',
  'info', 'danger', 'purple', 'pink', 'teal', 'indigo',
] as const

export function setFonts(fonts: FontConfig, target?: HTMLElement): void {
  if (typeof document === 'undefined' && !target) return
  const root = target ?? document.documentElement
  const family = [
    fonts.chinese ? `"${fonts.chinese}"` : '',
    fonts.english ? `"${fonts.english}"` : '',
    fonts.fallback ?? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  ].filter(Boolean).join(', ')

  root.style.setProperty('--wc-font-family', family)
  root.style.setProperty('--wc-font-chinese', fonts.chinese ?? '')
  root.style.setProperty('--wc-font-english', fonts.english ?? '')
}

export function setTheme(theme: WatercolorTheme, target?: HTMLElement): void {
  if (typeof document === 'undefined' && !target) return
  const root = target ?? document.documentElement

  paletteNames.forEach((name) => {
    const palette = theme[name]
    if (!palette) return
    Object.entries(palette).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-${name}-${shade}`, color)
    })
  })

  if (theme.fonts) setFonts(theme.fonts, root)
  if (theme.radius) {
    Object.entries(theme.radius).forEach(([name, value]) => {
      root.style.setProperty(`--wc-radius-${name}`, value)
    })
  }
}

export const themes = {
  default: {
    primary: {
      50: '#f8faff', 100: '#edf5ff', 200: '#d7e9ff', 300: '#b8d8ff',
      400: '#89bcff', 500: '#5b9eff', 600: '#3384ff', 700: '#1f74f4',
      800: '#165fc5', 900: '#164e9e',
    },
    secondary: {
      50: '#f6ffed', 100: '#d9f7be', 200: '#b7eb8f', 300: '#95de64',
      400: '#73d13d', 500: '#52c41a', 600: '#389e0d', 700: '#237804',
      800: '#135200', 900: '#092b00',
    },
  },
} as const

export type ColorTheme = keyof typeof themes

export function applyTheme(name: ColorTheme, target?: HTMLElement): void {
  setTheme(themes[name], target)
}

/** @deprecated Use applyTheme. Scheduled for removal in the next major version. */
export function applyCSSTheme(name: string): void {
  warnThemeDeprecation('applyCSSTheme()', 'applyTheme()')
  if (name === 'default') applyTheme('default')
}

export const fontThemes = {
  system: { english: 'system-ui', chinese: 'system-ui' },
  chinese: { chinese: 'PingFang SC', english: 'SF Pro Display' },
  modern: { english: 'Inter', chinese: 'Noto Sans SC' },
  readable: { english: 'IBM Plex Sans', chinese: 'IBM Plex Sans SC' },
  apple: { english: 'SF Pro Display', chinese: 'PingFang SC' },
} as const

export function applyFontTheme(name: keyof typeof fontThemes): void {
  setFonts(fontThemes[name])
}

export function getCurrentFonts(target?: HTMLElement): FontConfig {
  if (typeof document === 'undefined' && !target) return {}
  const root = target ?? document.documentElement
  return {
    chinese: root.style.getPropertyValue('--wc-font-chinese') || undefined,
    english: root.style.getPropertyValue('--wc-font-english') || undefined,
    fallback: root.style.getPropertyValue('--wc-font-family') || undefined,
  }
}

export async function loadThemeConfig(path = '/theme.config.json'): Promise<void> {
  if (typeof window === 'undefined' || typeof fetch === 'undefined') return
  try {
    const response = await fetch(path, { cache: 'no-store' })
    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) return
    setTheme(await response.json() as WatercolorTheme)
  } catch {
    // A custom theme is optional; defaults remain active.
  }
}

/** @deprecated Use ThemeProvider and useTheme(). Scheduled for removal in the next major version. */
export function toggleDarkMode(dark: boolean): void {
  warnThemeDeprecation('toggleDarkMode()', 'ThemeProvider with useTheme().setMode()')
  if (typeof document === 'undefined') return
  const mode = dark ? 'dark' : 'light'
  const root = document.documentElement
  root.dataset.theme = mode
  root.dataset.resolvedTheme = mode
  root.classList.toggle('dark', dark)
  root.classList.toggle('light', !dark)
  root.style.colorScheme = mode
  try { window.localStorage.setItem('wc-mode', mode) } catch {}
}

/** @deprecated Read the dark value from useTheme(). Scheduled for removal in the next major version. */
export function isDarkMode(): boolean {
  warnThemeDeprecation('isDarkMode()', 'useTheme().dark')
  return typeof document !== 'undefined' && document.documentElement.dataset.resolvedTheme === 'dark'
}

export const THEME_CONFIG_VERSION = 2 as const

const paletteNames = [
  'primary', 'secondary', 'neutral', 'success', 'warning', 'error',
  'info', 'purple', 'pink', 'teal', 'indigo', 'orange', 'cyan',
] as const
const paletteShades = ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', '1000'] as const
const radiusNames = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'] as const
const modeTokenNames = [
  'canvas', 'surfaceSubtle', 'surfaceRaised', 'surfaceOverlay',
  'actionHover', 'actionActive', 'actionSelected', 'actionSelectedHover', 'actionDisabled',
  'textPrimary', 'textSecondary', 'textTertiary', 'textDisabled', 'textInverse',
  'borderDefault', 'borderStrong', 'borderSubtle',
  'onAccent',
  'accent', 'accentHover', 'accentActive', 'accentSubtle',
  'danger', 'dangerHover', 'dangerSubtle', 'backdrop',
  'shadowSm', 'shadowMd', 'shadowLg', 'shadowXl', 'focusRing',
] as const

export type PaletteName = typeof paletteNames[number]
export type PaletteShade = typeof paletteShades[number]
export type ThemeModeTokenName = typeof modeTokenNames[number]
export type ThemeModeConfig = Partial<Record<ThemeModeTokenName, string>>

export interface ThemeFontConfig {
  english?: string
  chinese?: string
  fallback?: string
  mono?: string
}

export interface ThemeMotionConfig {
  fast?: string
  normal?: string
  easing?: string
}

export interface ThemeTokensConfig {
  colors?: Partial<Record<PaletteName, Partial<Record<PaletteShade, string>>>>
  fonts?: ThemeFontConfig
  radius?: Partial<Record<typeof radiusNames[number], string>>
  motion?: ThemeMotionConfig
}

export interface WatercolorThemeConfig {
  $schema?: string
  version: typeof THEME_CONFIG_VERSION
  tokens?: ThemeTokensConfig
  modes?: {
    light?: ThemeModeConfig
    dark?: ThemeModeConfig
  }
}

export interface ThemeValidationIssue {
  path: string
  message: string
}

export type ThemeValidationResult =
  | { ok: true; config: WatercolorThemeConfig; warnings: ThemeValidationIssue[] }
  | { ok: false; errors: ThemeValidationIssue[]; warnings: ThemeValidationIssue[] }

export type ThemeApplyResult =
  | { ok: true; appliedVariables: number; warnings: ThemeValidationIssue[] }
  | { ok: false; errors: ThemeValidationIssue[]; warnings: ThemeValidationIssue[] }

export type ThemeLoadResult = ThemeApplyResult & { url: string }

export interface ThemeApplyOptions {
  target?: HTMLElement | null
}

export interface ThemeLoadOptions extends ThemeApplyOptions {
  signal?: AbortSignal
}

export interface ThemeProviderLoadOptions extends ThemeLoadOptions {
  isCurrent?: () => boolean
}

const appliedVariables = new WeakMap<HTMLElement, Map<string, string | null>>()

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const isSafeCssValue = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0 && !/[;{}<>]/.test(value)

const isColorValue = (value: unknown): value is string => {
  if (!isSafeCssValue(value)) return false
  const input = value.trim()
  return /^#[\da-f]{3,8}$/i.test(input) ||
    /^(?:rgb|rgba|hsl|hsla|oklch|oklab|color|color-mix|var)\(.+\)$/i.test(input) ||
    /^(?:transparent|currentColor|black|white)$/i.test(input)
}

const isLengthValue = (value: unknown): value is string =>
  isSafeCssValue(value) && (/^0$/.test(value.trim()) || /^-?(?:\d+|\d*\.\d+)(?:px|rem|em|%)$/.test(value.trim()))

const isDurationValue = (value: unknown): value is string =>
  isSafeCssValue(value) && /^(?:\d+|\d*\.\d+)(?:ms|s)$/.test(value.trim())

const isEasingValue = (value: unknown): value is string =>
  isSafeCssValue(value) && /^(?:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier\(.+\))$/.test(value.trim())

const assertKnownKeys = (
  value: Record<string, unknown>,
  allowed: readonly string[],
  path: string,
  errors: ThemeValidationIssue[],
): void => {
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) errors.push({ path: `${path}.${key}`, message: 'Unknown theme property.' })
  }
}

const parseHexColor = (value: unknown): [number, number, number] | null => {
  if (typeof value !== 'string') return null
  const match = value.trim().match(/^#([\da-f]{3}|[\da-f]{6})$/i)
  if (!match) return null
  const hex = match[1].length === 3
    ? [...match[1]].map((character) => character + character).join('')
    : match[1]
  return [0, 2, 4].map((index) => Number.parseInt(hex.slice(index, index + 2), 16)) as [number, number, number]
}

const warnLowContrast = (
  warnings: ThemeValidationIssue[],
  mode: 'light' | 'dark',
  foregroundName: ThemeModeTokenName,
  foreground: unknown,
  backgroundName: ThemeModeTokenName,
  background: unknown,
  minimum = 4.5,
): void => {
  const foregroundColor = parseHexColor(foreground)
  const backgroundColor = parseHexColor(background)
  if (!foregroundColor || !backgroundColor || contrastRatio(foregroundColor, backgroundColor) >= minimum) return
  warnings.push({
    path: `$.modes.${mode}.${foregroundName}`,
    message: `${foregroundName} and ${backgroundName} have less than ${minimum}:1 contrast.`,
  })
}

const contrastRatio = (foreground: [number, number, number], background: [number, number, number]): number => {
  const luminance = ([red, green, blue]: [number, number, number]): number => {
    const [r, g, b] = [red, green, blue].map((channel) => {
      const value = channel / 255
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const foregroundLuminance = luminance(foreground)
  const backgroundLuminance = luminance(background)
  return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05) /
    (Math.min(foregroundLuminance, backgroundLuminance) + 0.05)
}

export function validateThemeConfig(input: unknown): ThemeValidationResult {
  const errors: ThemeValidationIssue[] = []
  const warnings: ThemeValidationIssue[] = []
  if (!isRecord(input)) return { ok: false, errors: [{ path: '$', message: 'Theme config must be an object.' }], warnings }

  assertKnownKeys(input, ['$schema', 'version', 'tokens', 'modes'], '$', errors)
  if (input.version !== THEME_CONFIG_VERSION) {
    errors.push({ path: '$.version', message: `Theme config version must be ${THEME_CONFIG_VERSION}.` })
  }
  if (input.$schema !== undefined && typeof input.$schema !== 'string') {
    errors.push({ path: '$.$schema', message: '$schema must be a string.' })
  }

  if (input.tokens !== undefined) {
    if (!isRecord(input.tokens)) errors.push({ path: '$.tokens', message: 'tokens must be an object.' })
    else {
      assertKnownKeys(input.tokens, ['colors', 'fonts', 'radius', 'motion'], '$.tokens', errors)
      const { colors, fonts, radius, motion } = input.tokens
      if (colors !== undefined) {
        if (!isRecord(colors)) errors.push({ path: '$.tokens.colors', message: 'colors must be an object.' })
        else {
          assertKnownKeys(colors, paletteNames, '$.tokens.colors', errors)
          for (const [palette, shades] of Object.entries(colors)) {
            if (!paletteNames.includes(palette as PaletteName)) continue
            if (!isRecord(shades)) {
              errors.push({ path: `$.tokens.colors.${palette}`, message: 'Palette must be an object.' })
              continue
            }
            assertKnownKeys(shades, paletteShades, `$.tokens.colors.${palette}`, errors)
            for (const [shade, color] of Object.entries(shades)) {
              if (paletteShades.includes(shade as PaletteShade) && !isColorValue(color)) {
                errors.push({ path: `$.tokens.colors.${palette}.${shade}`, message: 'Invalid CSS color.' })
              }
            }
          }
        }
      }
      if (fonts !== undefined) {
        if (!isRecord(fonts)) errors.push({ path: '$.tokens.fonts', message: 'fonts must be an object.' })
        else {
          assertKnownKeys(fonts, ['english', 'chinese', 'fallback', 'mono'], '$.tokens.fonts', errors)
          for (const [name, value] of Object.entries(fonts)) {
            if (!isSafeCssValue(value)) errors.push({ path: `$.tokens.fonts.${name}`, message: 'Invalid font value.' })
          }
        }
      }
      if (radius !== undefined) {
        if (!isRecord(radius)) errors.push({ path: '$.tokens.radius', message: 'radius must be an object.' })
        else {
          assertKnownKeys(radius, radiusNames, '$.tokens.radius', errors)
          for (const [name, value] of Object.entries(radius)) {
            if (radiusNames.includes(name as typeof radiusNames[number]) && !isLengthValue(value)) {
              errors.push({ path: `$.tokens.radius.${name}`, message: 'Radius must use px, rem, em, %, or 0.' })
            }
          }
        }
      }
      if (motion !== undefined) {
        if (!isRecord(motion)) errors.push({ path: '$.tokens.motion', message: 'motion must be an object.' })
        else {
          assertKnownKeys(motion, ['fast', 'normal', 'easing'], '$.tokens.motion', errors)
          if (motion.fast !== undefined && !isDurationValue(motion.fast)) errors.push({ path: '$.tokens.motion.fast', message: 'Invalid duration.' })
          if (motion.normal !== undefined && !isDurationValue(motion.normal)) errors.push({ path: '$.tokens.motion.normal', message: 'Invalid duration.' })
          if (motion.easing !== undefined && !isEasingValue(motion.easing)) errors.push({ path: '$.tokens.motion.easing', message: 'Invalid easing.' })
        }
      }
    }
  }

  if (input.modes !== undefined) {
    if (!isRecord(input.modes)) errors.push({ path: '$.modes', message: 'modes must be an object.' })
    else {
      assertKnownKeys(input.modes, ['light', 'dark'], '$.modes', errors)
      for (const mode of ['light', 'dark'] as const) {
        const values = input.modes[mode]
        if (values === undefined) continue
        if (!isRecord(values)) {
          errors.push({ path: `$.modes.${mode}`, message: 'Mode tokens must be an object.' })
          continue
        }
        assertKnownKeys(values, modeTokenNames, `$.modes.${mode}`, errors)
        for (const [name, value] of Object.entries(values)) {
          if (!modeTokenNames.includes(name as ThemeModeTokenName)) continue
          const isShadow = name.startsWith('shadow')
          if (!(isShadow ? isSafeCssValue(value) : isColorValue(value))) {
            errors.push({ path: `$.modes.${mode}.${name}`, message: isShadow ? 'Invalid shadow value.' : 'Invalid CSS color.' })
          }
        }
        warnLowContrast(warnings, mode, 'textPrimary', values.textPrimary, 'canvas', values.canvas)
        warnLowContrast(warnings, mode, 'onAccent', values.onAccent, 'accent', values.accent)
        warnLowContrast(warnings, mode, 'danger', values.danger, 'canvas', values.canvas, 3)
        warnLowContrast(warnings, mode, 'focusRing', values.focusRing, 'canvas', values.canvas, 3)
      }
    }
  }

  if (errors.length) return { ok: false, errors, warnings }
  return { ok: true, config: input as unknown as WatercolorThemeConfig, warnings }
}

const kebab = (value: string): string => value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)

function configVariables(config: WatercolorThemeConfig): Map<string, string> {
  const variables = new Map<string, string>()
  for (const [palette, shades] of Object.entries(config.tokens?.colors ?? {})) {
    for (const [shade, color] of Object.entries(shades ?? {})) variables.set(`--wc-${palette}-${shade}`, color)
  }
  const fonts = config.tokens?.fonts
  if (fonts) {
    if (fonts.chinese !== undefined) variables.set('--wc-font-chinese', fonts.chinese)
    if (fonts.english !== undefined) variables.set('--wc-font-english', fonts.english)
    if (fonts.mono !== undefined) variables.set('--wc-font-mono', fonts.mono)
    const family = [
      fonts.chinese ? `"${fonts.chinese}"` : '',
      fonts.english ? `"${fonts.english}"` : '',
      fonts.fallback ?? '',
    ].filter(Boolean).join(', ')
    if (family) variables.set('--wc-font-family', family)
  }
  for (const [name, value] of Object.entries(config.tokens?.radius ?? {})) variables.set(`--wc-radius-${name}`, value)
  if (config.tokens?.motion?.fast) variables.set('--wc-motion-fast', config.tokens.motion.fast)
  if (config.tokens?.motion?.normal) variables.set('--wc-motion-normal', config.tokens.motion.normal)
  if (config.tokens?.motion?.easing) variables.set('--wc-ease-standard', config.tokens.motion.easing)
  for (const mode of ['light', 'dark'] as const) {
    for (const [name, value] of Object.entries(config.modes?.[mode] ?? {})) {
      variables.set(`--wc-theme-${mode}-${kebab(name)}`, value)
    }
  }
  return variables
}

const resolveTarget = (target?: HTMLElement | null): HTMLElement | null =>
  target === undefined ? (typeof document === 'undefined' ? null : document.documentElement) : target

export function resetThemeConfig(target?: HTMLElement | null): void {
  const root = resolveTarget(target)
  if (!root) return
  for (const [name, previous] of appliedVariables.get(root) ?? []) {
    if (previous === null) root.style.removeProperty(name)
    else root.style.setProperty(name, previous)
  }
  appliedVariables.delete(root)
}

export function applyThemeConfig(input: unknown, options: ThemeApplyOptions = {}): ThemeApplyResult {
  const validation = validateThemeConfig(input)
  if (!validation.ok) return validation
  const root = resolveTarget(options.target)
  const variables = configVariables(validation.config)
  if (root) {
    resetThemeConfig(root)
    const previous = new Map<string, string | null>()
    for (const name of variables.keys()) previous.set(name, root.style.getPropertyValue(name) || null)
    for (const [name, value] of variables) root.style.setProperty(name, value)
    appliedVariables.set(root, previous)
  }
  return { ok: true, appliedVariables: variables.size, warnings: validation.warnings }
}

export async function loadThemeConfig(url: string, options: ThemeLoadOptions = {}): Promise<ThemeLoadResult> {
  if (typeof url !== 'string' || !url.trim() || typeof fetch === 'undefined') {
    return { ok: false, url, errors: [{ path: '$', message: 'Theme config URL or fetch is unavailable.' }], warnings: [] }
  }
  try {
    const response = await fetch(url, { cache: 'no-store', signal: options.signal })
    if (!response.ok) return { ok: false, url, errors: [{ path: '$', message: `Theme request failed with ${response.status}.` }], warnings: [] }
    const result = applyThemeConfig(await response.json(), options)
    return { ...result, url }
  } catch (error) {
    return { ok: false, url, errors: [{ path: '$', message: error instanceof Error ? error.message : 'Theme request failed.' }], warnings: [] }
  }
}

export async function loadProviderThemeConfig(url: string, options: ThemeProviderLoadOptions = {}): Promise<ThemeLoadResult | null> {
  const isCurrent = options.isCurrent ?? (() => true)
  if (typeof url !== 'string' || !url.trim() || typeof fetch === 'undefined') {
    return { ok: false, url, errors: [{ path: '$', message: 'Theme config URL or fetch is unavailable.' }], warnings: [] }
  }
  try {
    const response = await fetch(url, { cache: 'no-store', signal: options.signal })
    if (!isCurrent()) return null
    if (!response.ok) return { ok: false, url, errors: [{ path: '$', message: `Theme request failed with ${response.status}.` }], warnings: [] }
    const config = await response.json()
    if (!isCurrent()) return null
    const result = applyThemeConfig(config, { target: options.target })
    return { ...result, url }
  } catch (error) {
    if (!isCurrent()) return null
    return { ok: false, url, errors: [{ path: '$', message: error instanceof Error ? error.message : 'Theme request failed.' }], warnings: [] }
  }
}

export function serializeThemeConfig(input: unknown): ThemeApplyResult & { css?: string } {
  const validation = validateThemeConfig(input)
  if (!validation.ok) return validation
  const variables = configVariables(validation.config)
  const css = `:root{${[...variables].map(([name, value]) => `${name}:${value}`).join(';')}}`
  return { ok: true, appliedVariables: variables.size, warnings: validation.warnings, css }
}

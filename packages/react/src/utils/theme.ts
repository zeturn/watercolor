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

/**
 * 通过读取到的json设置主题颜色和字体
 * Set theme colors and fonts
 * @param theme Theme configuration object
 */
export function setTheme(theme: WatercolorTheme): void {
  const root = document.documentElement

  // Set primary colors
  if (theme.primary) {
    Object.entries(theme.primary).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-primary-${shade}`, color)
    })
  }

  // Set secondary colors
  if (theme.secondary) {
    Object.entries(theme.secondary).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-secondary-${shade}`, color)
    })
  }

  // Set neutral colors
  if (theme.neutral) {
    Object.entries(theme.neutral).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-neutral-${shade}`, color)
    })
  }

  // Set semantic colors
  if (theme.success) {
    Object.entries(theme.success).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-success-${shade}`, color)
    })
  }

  if (theme.warning) {
    Object.entries(theme.warning).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-warning-${shade}`, color)
    })
  }

  if (theme.error) {
    Object.entries(theme.error).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-error-${shade}`, color)
    })
  }

  if (theme.info) {
    Object.entries(theme.info).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-info-${shade}`, color)
    })
  }

  if (theme.danger) {
    Object.entries(theme.danger).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-danger-${shade}`, color)
    })
  }

  // Set extended color palette
  if (theme.purple) {
    Object.entries(theme.purple).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-purple-${shade}`, color)
    })
  }

  if (theme.pink) {
    Object.entries(theme.pink).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-pink-${shade}`, color)
    })
  }

  if (theme.teal) {
    Object.entries(theme.teal).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-teal-${shade}`, color)
    })
  }

  if (theme.indigo) {
    Object.entries(theme.indigo).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-indigo-${shade}`, color)
    })
  }

  // Set fonts
  if (theme.fonts) {
    setFonts(theme.fonts)
  }

  // Set border radius variables
  if (theme.radius) {
    Object.entries(theme.radius).forEach(([name, value]) => {
      const varName = `--wc-radius-${name}`
      root.style.setProperty(varName, value as string)
    })
  }
}

/**
 * Apply CSS class theme (deprecated - now using file-based themes)
 * @deprecated Use loadThemeConfig() instead for file-based themes
 * @param themeName Theme name
 */
export function applyCSSTheme(_themeName: string): void {
  console.warn('applyCSSTheme is deprecated. Use loadThemeConfig() for file-based themes.')
}

/**
 * Set font configuration
 * @param fonts Font configuration object
 */
export function setFonts(fonts: FontConfig): void {
  const root = document.documentElement
  
  // Build font stack
  const fontStack: string[] = []
  
  // Add Chinese fonts
  if (fonts.chinese) {
    fontStack.push(`"${fonts.chinese}"`)
  }
  
  // Add English fonts
  if (fonts.english) {
    fontStack.push(`"${fonts.english}"`)
  }
  
  // Add default fallback fonts
  const defaultFallback = fonts.fallback || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  fontStack.push(defaultFallback)
  
  const finalFontFamily = fontStack.join(', ')
  
  // Set CSS variables
  root.style.setProperty('--wc-font-family', finalFontFamily)
  root.style.setProperty('--wc-font-chinese', fonts.chinese || '')
  root.style.setProperty('--wc-font-english', fonts.english || '')
  
  // Apply to body immediately
  document.body.style.fontFamily = finalFontFamily
}

/**
 * Toggle dark mode
 * @param isDark Whether it's dark mode
 */
export function toggleDarkMode(isDark: boolean): void {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

/**
 * Get current dark mode status
 */
export function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark')
}

/**
 * 预定义主题配置 (已弃用 - 现在使用基于文件的主题系统)
 * Predefined theme configurations (deprecated - now using file-based theme system)
 * @deprecated Use theme.config.json file for theme configuration
 */
export const themes = {
  // 保留默认主题作为fallback
  default: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#f3f4ff',
      100: '#e5e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81'
    }
  }
} as const

/**
 * Apply theme configuration (deprecated - use file-based themes)
 * @deprecated Use loadThemeConfig() instead for file-based themes
 * @param themeName Theme name
 */
export function applyTheme(themeName: keyof typeof themes): void {
  console.warn('applyTheme is deprecated. Use loadThemeConfig() for file-based themes.')
  
  // 只保留默认主题的支持作为fallback
  if (themeName === 'default') {
    const theme = themes[themeName]
    setTheme({
      primary: theme.primary,
      secondary: theme.secondary
    })
  } else {
    console.warn(`Theme "${themeName}" is no longer supported. Please use theme.config.json file.`)
  }
}

/**
 * 预定义字体主题
 * Predefined font themes
 */
export const fontThemes = {
  // System default fonts
  system: {
    english: 'system-ui',
    chinese: 'system-ui',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  // Chinese-friendly font combination
  chinese: {
    chinese: 'PingFang SC',
    english: 'SF Pro Display',
    fallback: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif'
  },
  // Modern English fonts
  modern: {
    english: 'Inter',
    chinese: 'Noto Sans SC',
    fallback: '"Inter", "Noto Sans SC", sans-serif'
  },
  // Elegant font combination
  elegant: {
    english: 'Poppins',
    chinese: 'Source Han Sans',
    fallback: '"Poppins", "Source Han Sans", "Noto Sans CJK SC", sans-serif'
  },
  // Readability first
  readable: {
    english: 'IBM Plex Sans',
    chinese: 'IBM Plex Sans SC',
    fallback: '"IBM Plex Sans", "IBM Plex Sans SC", sans-serif'
  },
  // Apple style
  apple: {
    english: 'SF Pro Display',
    chinese: 'PingFang SC',
    fallback: '"SF Pro Display", "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  // Google fonts
  google: {
    english: 'Roboto',
    chinese: 'Noto Sans SC',
    fallback: '"Roboto", "Noto Sans SC", sans-serif'
  }
} as const

/**
 * 应用预定义字体主题
 * Apply predefined font theme
 * @param fontThemeName Font theme name
 */
export function applyFontTheme(fontThemeName: keyof typeof fontThemes): void {
  setFonts(fontThemes[fontThemeName])
}

/**
 * 获取当前字体配置
 * Get current font configuration
 */
export function getCurrentFonts(): FontConfig {
  const root = document.documentElement
  return {
    chinese: root.style.getPropertyValue('--wc-font-chinese') || undefined,
    english: root.style.getPropertyValue('--wc-font-english') || undefined,
    fallback: root.style.getPropertyValue('--wc-font-family') || undefined
  }
}

/**
 * 动态加载根目录的 theme.config.json 并应用
 * 该配置文件允许最终用户无需修改style.css即可自定义主题。
 * Dynamic load theme.config.json and apply theme
 * @param configPath 配置文件路径
 */
export async function loadThemeConfig(configPath: string = '/theme.config.json'): Promise<void> {
  if (typeof window === 'undefined' || typeof fetch === 'undefined') return

  try {
    const res = await fetch(configPath, { cache: 'no-store' })
    if (!res.ok) {
      console.info('[Watercolor UI] theme.config.json not found, using default theme')
      return
    }

    const contentType = res.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      console.info('[Watercolor UI] theme.config.json not found, using default theme')
      return
    }

    const cfg: WatercolorTheme = await res.json()
    setTheme(cfg)
    
    // 设置字体配置
    if (cfg.fonts) {
      setFonts(cfg.fonts)
    }
    
    console.info('[Watercolor UI] Theme loaded from theme.config.json')
  } catch (err) {
    console.warn('[Watercolor UI] 无法加载自定义 theme.config.json:', err)
    console.info('[Watercolor UI] Using default theme')
  }
}

// 在浏览器环境下自动尝试加载配置
if (typeof window !== 'undefined') {
  // 不阻塞主线程，异步加载
  loadThemeConfig()
} 

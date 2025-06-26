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
 * Apply CSS class theme
 * @param themeName Theme name
 */
export function applyCSSTheme(themeName: string): void {
  const root = document.documentElement
  
  // Remove all theme classes
  root.classList.remove('theme-ocean', 'theme-forest', 'theme-sunset', 'theme-violet', 'theme-rose')
  
  // Apply new theme class
  if (themeName !== 'default') {
    root.classList.add(`theme-${themeName}`)
  }
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
 * 6 theme configurations - Default theme updated to oklch format
 */
export const themes = {
  // Default theme - using new oklch colors
  default: {
    primary: {
        50: '#F7F8FF',
        100: '#EEF0FF',
        200: '#E1E5FF',
        300: '#C7D1FF',
        400: '#A5B4FF',
        500: '#7C91FF',
        600: '#5A6FE8',
        700: '#4A5CD1',
        800: '#3F4CA3',
        900: '#374282'
    },
    secondary: {
        50: '#F6FFED',
        100: '#D9F7BE',
        200: '#B7EB8F',
        300: '#95DE64',
        400: '#73D13D',
        500: '#52C41A',
        600: '#389E0D',
        700: '#237804',
        800: '#135200',
        900: '#092B00'
    }
  },
  // Ocean blue theme
  ocean: {
    primary: {
      50: '#E6F7FF',
      100: '#BAE7FF',
      200: '#91D5FF',
      300: '#69C0FF',
      400: '#40A9FF',
      500: '#1890FF',
      600: '#096DD9',
      700: '#0050B3',
      800: '#003A8C',
      900: '#002766'
    },
    secondary: {
      50: '#E6FFFB',
      100: '#B5F5EC',
      200: '#87E8DE',
      300: '#5CDBD3',
      400: '#36CFC9',
      500: '#13C2C2',
      600: '#08979C',
      700: '#006D75',
      800: '#00474F',
      900: '#002329'
    }
  },
  // Forest green theme
  forest: {
    primary: {
      50: '#F6FFED',
      100: '#D9F7BE',
      200: '#B7EB8F',
      300: '#95DE64',
      400: '#73D13D',
      500: '#52C41A',
      600: '#389E0D',
      700: '#237804',
      800: '#135200',
      900: '#092B00'
    },
    secondary: {
      50: '#F9FFED',
      100: '#EAFF99',
      200: '#DEFF66',
      300: '#D4FF33',
      400: '#CBFF00',
      500: '#A6CC00',
      600: '#7D9900',
      700: '#546600',
      800: '#2B3300',
      900: '#0F1100'
    }
  },
  // Sunset orange theme
  sunset: {
    primary: {
      50: '#FFF7E6',
      100: '#FFE7BA',
      200: '#FFD591',
      300: '#FFC069',
      400: '#FFA940',
      500: '#FA8C16',
      600: '#D46B08',
      700: '#AD4E00',
      800: '#873800',
      900: '#612500'
    },
    secondary: {
      50: '#FFF2E8',
      100: '#FFD8BF',
      200: '#FFBB96',
      300: '#FF9C6E',
      400: '#FF7A45',
      500: '#FF4D4F',
      600: '#CF1322',
      700: '#A8071A',
      800: '#820014',
      900: '#5C0011'
    }
  },
  // Violet theme
  violet: {
    primary: {
      50: '#F9F0FF',
      100: '#EFDBFF',
      200: '#D3ADF7',
      300: '#B37FEB',
      400: '#9254DE',
      500: '#722ED1',
      600: '#531DAB',
      700: '#391085',
      800: '#22075E',
      900: '#120338'
    },
    secondary: {
      50: '#F4F0FF',
      100: '#E6D7FF',
      200: '#D2B3FF',
      300: '#BD8CFF',
      400: '#A866FF',
      500: '#9340FF',
      600: '#7B1FA2',
      700: '#6A1B9A',
      800: '#4A148C',
      900: '#311B92'
    }
  },
  // Rose pink theme
  rose: {
    primary: {
      50: '#FFF0F6',
      100: '#FFD6E7',
      200: '#FFADD2',
      300: '#FF85C0',
      400: '#F759AB',
      500: '#EB2F96',
      600: '#C41D7F',
      700: '#9E1068',
      800: '#780650',
      900: '#520339'
    },
    secondary: {
      50: '#FFF2F6',
      100: '#FFE0EC',
      200: '#FFCDD2',
      300: '#F8BBD9',
      400: '#F06292',
      500: '#E91E63',
      600: '#AD1457',
      700: '#880E4F',
      800: '#560027',
      900: '#37001C'
    }
  }
} as const

/**
 * 应用预定义主题
 * Apply predefined theme - using CSS class method
 * @param themeName Theme name
 */
export function applyTheme(themeName: keyof typeof themes): void {
  applyCSSTheme(themeName)
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
    if (!res.ok) return

    const cfg: WatercolorTheme = await res.json()
    setTheme(cfg)
  } catch (err) {
    // 静默失败，保持默认主题
    console.warn('[Watercolor][utils/theme.ts] 无法加载自定义 theme.config.json:', err)
  }
}

// 在浏览器环境下自动尝试加载配置
if (typeof window !== 'undefined') {
  // 不阻塞主线程，异步加载
  loadThemeConfig()
} 
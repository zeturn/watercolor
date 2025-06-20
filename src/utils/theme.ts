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
}

/**
 * 设置主题色彩和字体
 * @param theme 主题配置对象
 */
export function setTheme(theme: WatercolorTheme): void {
  const root = document.documentElement

  // 设置主色调
  if (theme.primary) {
    Object.entries(theme.primary).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-primary-${shade}`, color)
    })
  }

  // 设置次色调
  if (theme.secondary) {
    Object.entries(theme.secondary).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-secondary-${shade}`, color)
    })
  }

  // 设置中性色调
  if (theme.neutral) {
    Object.entries(theme.neutral).forEach(([shade, color]) => {
      root.style.setProperty(`--wc-neutral-${shade}`, color)
    })
  }

  // 设置语义色彩
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

  // 设置扩展调色板
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

  // 设置字体
  if (theme.fonts) {
    setFonts(theme.fonts)
  }
}

/**
 * 应用CSS类主题
 * @param themeName 主题名称
 */
export function applyCSSTheme(themeName: string): void {
  const root = document.documentElement
  
  // 移除所有主题类
  root.classList.remove('theme-ocean', 'theme-forest', 'theme-sunset', 'theme-violet', 'theme-rose')
  
  // 应用新主题类
  if (themeName !== 'default') {
    root.classList.add(`theme-${themeName}`)
  }
}

/**
 * 设置字体配置
 * @param fonts 字体配置对象
 */
export function setFonts(fonts: FontConfig): void {
  const root = document.documentElement
  
  // 构建字体栈
  let fontStack: string[] = []
  
  // 添加中文字体
  if (fonts.chinese) {
    fontStack.push(`"${fonts.chinese}"`)
  }
  
  // 添加英文字体
  if (fonts.english) {
    fontStack.push(`"${fonts.english}"`)
  }
  
  // 添加默认后备字体
  const defaultFallback = fonts.fallback || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  fontStack.push(defaultFallback)
  
  const finalFontFamily = fontStack.join(', ')
  
  // 设置CSS变量
  root.style.setProperty('--wc-font-family', finalFontFamily)
  root.style.setProperty('--wc-font-chinese', fonts.chinese || '')
  root.style.setProperty('--wc-font-english', fonts.english || '')
  
  // 立即应用到body
  document.body.style.fontFamily = finalFontFamily
}

/**
 * 切换深色模式
 * @param isDark 是否为深色模式
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
 * 获取当前是否为深色模式
 */
export function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark')
}

/**
 * 6个主题配置 - 默认主题更新为oklch格式
 */
export const themes = {
  // 默认主题 - 使用新的oklch配色
  default: {
    primary: {
      50: 'oklch(0.97 0.014 254.604)',
      100: 'oklch(0.932 0.032 255.585)',
      200: 'oklch(0.882 0.059 254.128)',
      300: 'oklch(0.809 0.105 251.813)',
      400: 'oklch(0.707 0.165 254.624)',
      500: 'oklch(0.623 0.214 259.815)',
      600: 'oklch(0.546 0.245 262.881)',
      700: 'oklch(0.488 0.243 264.376)',
      800: 'oklch(0.424 0.199 265.638)',
      900: 'oklch(0.379 0.146 265.522)'
    },
    secondary: {
      50: 'oklch(0.979 0.021 166.113)',
      100: 'oklch(0.95 0.052 163.051)',
      200: 'oklch(0.905 0.093 164.15)',
      300: 'oklch(0.845 0.143 164.978)',
      400: 'oklch(0.765 0.177 163.223)',
      500: 'oklch(0.696 0.17 162.48)',
      600: 'oklch(0.596 0.145 163.225)',
      700: 'oklch(0.508 0.118 165.612)',
      800: 'oklch(0.432 0.095 166.913)',
      900: 'oklch(0.378 0.077 168.94)'
    }
  },
  
  // 海洋蓝主题
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
  
  // 森林绿主题
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
  
  // 夕阳橙主题
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
  
  // 紫罗兰主题
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
  
  // 玫瑰粉主题
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
 * 应用预定义主题 - 使用CSS类方式
 * @param themeName 主题名称
 */
export function applyTheme(themeName: keyof typeof themes): void {
  applyCSSTheme(themeName)
}

/**
 * 预定义字体主题
 */
export const fontThemes = {
  // 系统默认字体
  system: {
    english: 'system-ui',
    chinese: 'system-ui',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  // 中文友好字体组合
  chinese: {
    chinese: 'PingFang SC',
    english: 'SF Pro Display',
    fallback: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif'
  },
  // 英文现代字体
  modern: {
    english: 'Inter',
    chinese: 'Noto Sans SC',
    fallback: '"Inter", "Noto Sans SC", sans-serif'
  },
  // 优雅字体组合
  elegant: {
    english: 'Poppins',
    chinese: 'Source Han Sans',
    fallback: '"Poppins", "Source Han Sans", "Noto Sans CJK SC", sans-serif'
  },
  // 可读性优先
  readable: {
    english: 'IBM Plex Sans',
    chinese: 'IBM Plex Sans SC',
    fallback: '"IBM Plex Sans", "IBM Plex Sans SC", sans-serif'
  },
  // 苹果风格
  apple: {
    english: 'SF Pro Display',
    chinese: 'PingFang SC',
    fallback: '"SF Pro Display", "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  // Google字体
  google: {
    english: 'Roboto',
    chinese: 'Noto Sans SC',
    fallback: '"Roboto", "Noto Sans SC", sans-serif'
  }
} as const

/**
 * 应用预定义字体主题
 * @param fontThemeName 字体主题名称
 */
export function applyFontTheme(fontThemeName: keyof typeof fontThemes): void {
  setFonts(fontThemes[fontThemeName])
}

/**
 * 获取当前字体配置
 */
export function getCurrentFonts(): FontConfig {
  const root = document.documentElement
  return {
    chinese: root.style.getPropertyValue('--wc-font-chinese') || undefined,
    english: root.style.getPropertyValue('--wc-font-english') || undefined,
    fallback: root.style.getPropertyValue('--wc-font-family') || undefined
  }
} 
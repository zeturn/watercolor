import { setTheme, toggleDarkMode, themes } from './theme'

export type ColorTheme = keyof typeof themes

export interface ThemeManager {
  /** 当前颜色主题名 */
  color: ColorTheme
  /** 是否暗黑模式 */
  dark: boolean
  /** 设置颜色主题 */
  setColor: (c: ColorTheme) => void
  /** 切换暗黑模式 */
  toggleDark: () => void
}

function getResolvedTheme () {
  return themes.default
}

/**
 * 创建一个跨框架可复用的主题管理器
 * ─ 负责：
 *   • 从 localStorage 读取初始色彩/明暗偏好
 *   • 同步调用 applyTheme / toggleDarkMode 修改 DOM
 *   • 把结果写回 localStorage
 * @param defaultColor  默认颜色主题
 * @param defaultDark   默认暗黑模式
 */
export function createThemeManager (
  defaultColor: ColorTheme = 'default',
  defaultDark: boolean = false
): ThemeManager {
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'

  let savedColor: ColorTheme | null = null
  let savedScheme: 'light' | 'dark' | null = null

  if (isBrowser) {
    try {
      savedColor = localStorage.getItem('wc-color') as ColorTheme | null
      savedScheme = localStorage.getItem('wc-scheme') as 'light' | 'dark' | null
    } catch {
      // ignore storage failures (privacy mode / disabled storage)
    }
  }

  let _color: ColorTheme = savedColor || defaultColor
  let _dark = savedScheme ? savedScheme === 'dark' : defaultDark

  // 首次应用（仅浏览器环境）
  if (isBrowser) {
    const theme = getResolvedTheme()
    setTheme({
      primary: theme.primary,
      secondary: theme.secondary,
    })
    toggleDarkMode(_dark)
  }

  const setColor = (c: ColorTheme) => {
    if (c === _color) return
    _color = c
    if (isBrowser) {
      const theme = getResolvedTheme()
      setTheme({
        primary: theme.primary,
        secondary: theme.secondary,
      })
      try {
        localStorage.setItem('wc-color', c)
      } catch {
        // ignore
      }
    }
  }

  const toggleDark = () => {
    _dark = !_dark
    if (isBrowser) {
      toggleDarkMode(_dark)
      try {
        localStorage.setItem('wc-scheme', _dark ? 'dark' : 'light')
      } catch {
        // ignore
      }
    }
  }

  return {
    get color () {
      return _color
    },
    get dark () {
      return _dark
    },
    setColor,
    toggleDark,
  }
} 

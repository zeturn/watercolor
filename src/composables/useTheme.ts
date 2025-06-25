import { ref, watch, provide, inject, type Ref } from 'vue'
import { applyTheme, toggleDarkMode, themes } from '@/utils/theme'

// 可用的颜色主题类型，保持与 utils/theme.ts 中 themes 键一致
export type ColorTheme = keyof typeof themes

export interface ThemeStore {
  color: Ref<ColorTheme>
  dark: Ref<boolean>
  setColor: (c: ColorTheme) => void
  toggleDark: () => void
}

const THEME_KEY = Symbol('WatercolorTheme')

function createThemeStore (): ThemeStore {
  const savedColor = localStorage.getItem('wc-color') as ColorTheme | null
  const savedScheme = localStorage.getItem('wc-scheme') as 'light' | 'dark' | null

  const color = ref<ColorTheme>(savedColor || 'default')
  const dark = ref<boolean>(savedScheme ? savedScheme === 'dark' : false)

  // 初始化同步到 DOM
  applyTheme(color.value)
  toggleDarkMode(dark.value)

  watch(color, v => {
    applyTheme(v)
    localStorage.setItem('wc-color', v)
  })

  watch(dark, v => {
    toggleDarkMode(v)
    localStorage.setItem('wc-scheme', v ? 'dark' : 'light')
  })

  const setColor = (c: ColorTheme): void => {
    color.value = c
  }
  const toggleDark = (): void => {
    dark.value = !dark.value
  }

  return { color, dark, setColor, toggleDark }
}

export function provideTheme (): void {
  const store = createThemeStore()
  provide(THEME_KEY, store)
}

export function useTheme (): ThemeStore {
  const store = inject<ThemeStore>(THEME_KEY)
  if (!store) {
    throw new Error('No theme store provided. Call provideTheme() in root component.')
  }
  return store
} 
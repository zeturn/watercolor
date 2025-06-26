import { ref, provide, inject, type Ref, defineComponent } from 'vue'
import { themes } from '@/utils/theme'
import { createThemeManager, type ColorTheme } from '@/utils/themeManager'

// 与 utils/theme.ts 中的 themes 保持同步
type _ColorTheme = keyof typeof themes // 本文件内部使用，但实际已通过 utils 提供

// 复用主题类型

export interface ThemeStore {
  color: Ref<ColorTheme>
  dark: Ref<boolean>
  setColor: (c: ColorTheme) => void
  toggleDark: () => void
}

const THEME_KEY = Symbol('WatercolorTheme')

// 创建全局主题管理器（单例）
const manager = createThemeManager()

function createThemeStore (): ThemeStore {
  const color = ref<ColorTheme>(manager.color as ColorTheme)
  const dark = ref<boolean>(manager.dark)

  const setColor = (c: ColorTheme): void => {
    manager.setColor(c)
    color.value = c
  }

  const toggleDark = (): void => {
    manager.toggleDark()
    dark.value = manager.dark
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

// 提供与 React 端一致的 ThemeProvider 组件封装
export const ThemeProvider = defineComponent({
  name: 'ThemeProvider',
  setup (_props, { slots }) {
    provideTheme()
    return () => slots.default ? slots.default() : null
  }
}) 
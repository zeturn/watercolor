import { ref, provide, inject, type Ref, defineComponent } from 'vue'
import { themes } from '@/utils/theme'
import { createThemeManager } from '@/utils/themeManager'

// 与 React 端保持一致的类型定义
type _ColorTheme = keyof typeof themes // 本文件内部使用，但实际已通过 utils 提供

// 复用主题类型

export interface ThemeStore {
  color: Ref<_ColorTheme>
  dark: Ref<boolean>
  setColor: (c: _ColorTheme) => void
  toggleDark: () => void
}

const THEME_KEY = Symbol('Water_ColorTheme')

// 创建全局主题管理器（单例）
const manager = createThemeManager()

function createThemeStore (): ThemeStore {
  const color = ref<_ColorTheme>(manager.color as _ColorTheme)
  const dark = ref<boolean>(manager.dark)

  const setColor = (c: _ColorTheme): void => {
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
import React, { createContext, useContext, useState } from 'react'
import { themes } from '@/utils/theme'
import { createThemeManager } from '@/utils/themeManager'

// 与 utils/theme.ts 中的 themes 保持同步
type _ColorTheme = keyof typeof themes // 本文件内部使用，但实际已通过 utils 提供

interface ThemeContextValue {
  color: _ColorTheme
  setColor: (c: _ColorTheme) => void
  dark: boolean
  /** 与 Vue 端保持一致，切换暗黑模式 */
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const manager = createThemeManager()

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [color, setColorState] = useState<_ColorTheme>(manager.color as _ColorTheme)
  const [dark, setDarkState] = useState<boolean>(manager.dark)

  const setColor = (c: _ColorTheme) => {
    manager.setColor(c)
    setColorState(c)
  }

  const toggleDark = () => {
    manager.toggleDark()
    setDarkState(manager.dark)
  }

  return (
    <ThemeContext.Provider value={{ color, setColor, dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
} 
import React, { createContext, useContext, useEffect, useState } from 'react'
import { applyTheme, toggleDarkMode, themes } from '@/utils/theme'

// 与 utils/theme.ts 中的 themes 保持同步
export type ColorTheme = keyof typeof themes

interface ThemeContextValue {
  color: ColorTheme
  setColor: (c: ColorTheme) => void
  dark: boolean
  setDark: (d: boolean) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // 从 localStorage 读取
  const initColor = (localStorage.getItem('wc-color') as ColorTheme) || 'default'
  const initScheme = localStorage.getItem('wc-scheme') === 'dark'

  const [color, setColor] = useState<ColorTheme>(initColor)
  const [dark, setDark] = useState<boolean>(initScheme)

  // 同步颜色主题
  useEffect(() => {
    applyTheme(color)
    localStorage.setItem('wc-color', color)
  }, [color])

  // 同步明暗模式
  useEffect(() => {
    toggleDarkMode(dark)
    localStorage.setItem('wc-scheme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ color, setColor, dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
} 
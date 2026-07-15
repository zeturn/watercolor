import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import {
  createThemeController,
  type ColorTheme,
  type ResolvedThemeMode,
  type ThemeController,
  type ThemeMode,
  type ThemeSnapshot,
} from '@zeturn/watercolor-core'

export interface ThemeContextValue extends ThemeSnapshot {
  setColor: (color: ColorTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleDark: () => void
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  defaultColor?: ColorTheme
  defaultMode?: ThemeMode
  color?: ColorTheme
  mode?: ThemeMode
  storageKey?: string
  onColorChange?: (color: ColorTheme) => void
  onModeChange?: (mode: ThemeMode, resolvedMode: ResolvedThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColor = 'default',
  defaultMode = 'system',
  color: controlledColor,
  mode: controlledMode,
  storageKey,
  onColorChange,
  onModeChange,
}) => {
  const controllerRef = useRef<ThemeController | null>(null)
  if (!controllerRef.current) {
    controllerRef.current = createThemeController({
      defaultColor: controlledColor ?? defaultColor,
      defaultMode: controlledMode ?? defaultMode,
      storageKey,
    })
  }
  const controller = controllerRef.current
  const [snapshot, setSnapshot] = useState<ThemeSnapshot>({
    color: controller.color,
    mode: controller.mode,
    resolvedMode: controller.resolvedMode,
    dark: controller.dark,
  })

  useEffect(() => controller.subscribe(setSnapshot), [controller])
  useEffect(() => () => controller.destroy(), [controller])
  useEffect(() => {
    if (controlledMode) controller.setMode(controlledMode)
  }, [controller, controlledMode])
  useEffect(() => {
    if (controlledColor) controller.setColor(controlledColor)
  }, [controller, controlledColor])

  const setMode = useCallback((next: ThemeMode) => {
    controller.setMode(next)
    onModeChange?.(controller.mode, controller.resolvedMode)
  }, [controller, onModeChange])

  const setColor = useCallback((next: ColorTheme) => {
    controller.setColor(next)
    onColorChange?.(controller.color)
  }, [controller, onColorChange])

  const toggleDark = useCallback(() => {
    controller.toggleDark()
    onModeChange?.(controller.mode, controller.resolvedMode)
  }, [controller, onModeChange])

  const value = useMemo<ThemeContextValue>(() => ({
    ...snapshot,
    setColor,
    setMode,
    toggleDark,
  }), [snapshot, setColor, setMode, toggleDark])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme (): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

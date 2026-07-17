import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  createThemeController,
  type ResolvedThemeMode,
  type ThemeController,
  type ThemeStorage,
  type ThemeMode,
  type ThemeSnapshot,
} from '@zeturn/watercolor-core'

export interface ThemeContextValue extends ThemeSnapshot {
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  defaultMode?: ThemeMode
  mode?: ThemeMode
  storageKey?: string
  storage?: ThemeStorage | null
  onModeChange?: (mode: ThemeMode) => void
  onResolvedModeChange?: (resolvedMode: ResolvedThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'system',
  mode: controlledMode,
  storageKey,
  storage,
  onModeChange,
  onResolvedModeChange,
}) => {
  const controllerRef = useRef<ThemeController | null>(null)
  if (!controllerRef.current) {
    controllerRef.current = createThemeController({
      initialMode: controlledMode ?? defaultMode,
      storageKey,
      storage,
      readStorage: controlledMode === undefined,
    })
  }
  const controller = controllerRef.current
  const [snapshot, setSnapshot] = useState<ThemeSnapshot>({
    mode: controller.mode,
    resolvedMode: controller.resolvedMode,
    dark: controller.dark,
  })
  const resolvedRef = useRef(snapshot.resolvedMode)
  const onResolvedModeChangeRef = useRef(onResolvedModeChange)
  onResolvedModeChangeRef.current = onResolvedModeChange

  useBrowserLayoutEffect(() => {
    const unsubscribe = controller.subscribe((next) => {
      setSnapshot(next)
      if (resolvedRef.current !== next.resolvedMode) {
        resolvedRef.current = next.resolvedMode
        onResolvedModeChangeRef.current?.(next.resolvedMode)
      }
    })
    controller.start()
    return () => {
      unsubscribe()
      controller.destroy()
    }
  }, [controller])

  useBrowserLayoutEffect(() => {
    if (controlledMode !== undefined) controller.setMode(controlledMode)
  }, [controller, controlledMode])

  const setMode = useCallback((next: ThemeMode) => {
    if (controlledMode === undefined) controller.setMode(next)
    onModeChange?.(next)
  }, [controller, controlledMode, onModeChange])

  const toggleMode = useCallback(() => {
    const next = controller.resolvedMode === 'dark' ? 'light' : 'dark'
    if (controlledMode === undefined) controller.setMode(next)
    onModeChange?.(next)
  }, [controller, controlledMode, onModeChange])

  const value = useMemo<ThemeContextValue>(() => ({
    ...snapshot,
    setMode,
    toggleMode,
  }), [snapshot, setMode, toggleMode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme (): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

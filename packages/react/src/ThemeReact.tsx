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
  applyThemeConfig,
  createThemeController,
  loadProviderThemeConfig,
  resetThemeConfig,
  type ResolvedThemeMode,
  type ThemeApplyResult,
  type ThemeController,
  type ThemeLoadResult,
  type ThemeStorage,
  type ThemeMode,
  type ThemeSnapshot,
  type WatercolorThemeConfig,
} from '@zeturn/watercolor-core'

export interface ThemeContextValue extends ThemeSnapshot {
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

export interface ThemeProviderProps extends React.PropsWithChildren {
  config?: WatercolorThemeConfig
  defaultMode?: ThemeMode
  themeUrl?: string
  target?: HTMLElement | null
  mode?: ThemeMode
  initialResolvedMode?: ResolvedThemeMode
  storageKey?: string
  storage?: ThemeStorage | null
  onModeChange?: (mode: ThemeMode) => void
  onResolvedModeChange?: (resolvedMode: ResolvedThemeMode) => void
  onThemeLoad?: (result: ThemeApplyResult | ThemeLoadResult) => void
  onThemeError?: (result: Extract<ThemeApplyResult | ThemeLoadResult, { ok: false }>) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  config,
  defaultMode = 'system',
  themeUrl,
  target,
  mode: controlledMode,
  initialResolvedMode,
  storageKey,
  storage,
  onModeChange,
  onResolvedModeChange,
  onThemeLoad,
  onThemeError,
}) => {
  const controllerRef = useRef<ThemeController | null>(null)
  if (!controllerRef.current) {
    controllerRef.current = createThemeController({
      target,
      initialMode: controlledMode ?? defaultMode,
      initialResolvedMode,
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
  const targetRef = useRef<HTMLElement | null | undefined>(target)
  const themeRequestRef = useRef(0)
  const onResolvedModeChangeRef = useRef(onResolvedModeChange)
  const onThemeLoadRef = useRef(onThemeLoad)
  const onThemeErrorRef = useRef(onThemeError)
  onResolvedModeChangeRef.current = onResolvedModeChange
  onThemeLoadRef.current = onThemeLoad
  onThemeErrorRef.current = onThemeError

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

  useEffect(() => {
    const requestId = ++themeRequestRef.current
    const root = targetRef.current
    const abortController = typeof AbortController === 'undefined' ? null : new AbortController()

    if (config !== undefined) {
      const result = applyThemeConfig(config, { target: root })
      if (result.ok) onThemeLoadRef.current?.(result)
      else onThemeErrorRef.current?.(result)
    } else if (!themeUrl) {
      resetThemeConfig(root)
    }

    if (themeUrl) {
      void loadProviderThemeConfig(themeUrl, {
        target: root,
        isCurrent: () => requestId === themeRequestRef.current,
        signal: abortController?.signal,
      }).then((result) => {
        if (!result) return
        if (result.ok) onThemeLoadRef.current?.(result)
        else if (!abortController?.signal.aborted) onThemeErrorRef.current?.(result)
      })
    }

    return () => {
      abortController?.abort()
    }
  }, [config, themeUrl])

  useEffect(() => {
    const root = targetRef.current
    return () => resetThemeConfig(root)
  }, [])

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

import { createContext, useContext, createSignal, onMount, onCleanup, type JSX } from 'solid-js'
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

export interface ThemeProviderProps {
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
  children?: JSX.Element
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider(props: ThemeProviderProps) {
  const controller: ThemeController = createThemeController({
    target: props.target,
    initialMode: (props.mode ?? props.defaultMode ?? 'system') as ThemeMode,
    initialResolvedMode: props.initialResolvedMode,
    storageKey: props.storageKey,
    storage: props.storage,
    readStorage: props.mode === undefined,
  })

  const [snapshot, setSnapshot] = createSignal<ThemeSnapshot>({
    mode: controller.mode,
    resolvedMode: controller.resolvedMode,
    dark: controller.dark,
  })

  let requestId = 0
  let abortController: AbortController | null = null
  const targetRef: HTMLElement | null | undefined = props.target

  onMount(() => {
    const unsubscribe = controller.subscribe((next) => setSnapshot(next))
    controller.start()
    return () => {
      unsubscribe()
      controller.destroy()
    }
  })

  const runThemeRequest = () => {
    const id = ++requestId
    const root = targetRef
    abortController?.abort()
    abortController = typeof AbortController === 'undefined' ? null : new AbortController()

    if (props.config !== undefined) {
      const result = applyThemeConfig(props.config, { target: root })
      if (result.ok) props.onThemeLoad?.(result)
      else props.onThemeError?.(result)
    } else if (!props.themeUrl) {
      resetThemeConfig(root)
    }

    if (props.themeUrl) {
      void loadProviderThemeConfig(props.themeUrl, {
        target: root,
        isCurrent: () => id === requestId,
        signal: abortController?.signal,
      }).then((result) => {
        if (!result) return
        if (result.ok) props.onThemeLoad?.(result)
        else if (!abortController?.signal.aborted) props.onThemeError?.(result)
      })
    }
  }

  onMount(() => {
    runThemeRequest()
    return () => abortController?.abort()
  })
  onCleanup(() => resetThemeConfig(targetRef))

  const setMode = (next: ThemeMode) => {
    if (props.mode === undefined) controller.setMode(next)
    props.onModeChange?.(next)
  }
  const toggleMode = () => {
    const next = controller.resolvedMode === 'dark' ? 'light' : 'dark'
    if (props.mode === undefined) controller.setMode(next)
    props.onModeChange?.(next)
  }

  const value: ThemeContextValue = {
    get mode() {
      return snapshot().mode
    },
    get resolvedMode() {
      return snapshot().resolvedMode
    },
    get dark() {
      return snapshot().dark
    },
    setMode,
    toggleMode,
  }

  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

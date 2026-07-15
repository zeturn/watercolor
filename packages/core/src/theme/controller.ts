import { applyTheme, type ColorTheme } from './config.js'

export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedThemeMode = 'light' | 'dark'

type Listener = (theme: ThemeSnapshot) => void

export interface ThemeSnapshot {
  color: ColorTheme
  mode: ThemeMode
  resolvedMode: ResolvedThemeMode
  dark: boolean
}

export interface ThemeControllerOptions {
  target?: HTMLElement | null
  storage?: Pick<Storage, 'getItem' | 'setItem'> | null
  storageKey?: string
  defaultColor?: ColorTheme
  defaultMode?: ThemeMode
}

export interface ThemeController extends ThemeSnapshot {
  setColor: (color: ColorTheme) => void
  setMode: (mode: ThemeMode) => void
  toggleDark: () => void
  subscribe: (listener: Listener) => () => void
  destroy: () => void
}

const isMode = (value: string | null | undefined): value is ThemeMode =>
  value === 'light' || value === 'dark' || value === 'system'

export function createThemeController(options: ThemeControllerOptions = {}): ThemeController {
  const target = options.target ?? (typeof document === 'undefined' ? null : document.documentElement)
  let storage = options.storage ?? null
  if (options.storage === undefined && typeof window !== 'undefined') {
    try {
      storage = window.localStorage
    } catch {
      storage = null
    }
  }
  const key = options.storageKey ?? 'wc-mode'
  const media = typeof window === 'undefined' || typeof window.matchMedia !== 'function'
    ? null
    : window.matchMedia('(prefers-color-scheme: dark)')

  let color: ColorTheme = options.defaultColor ?? 'default'
  let mode: ThemeMode = options.defaultMode ?? 'system'
  const listeners = new Set<Listener>()

  try {
    const storedMode = storage?.getItem(key)
    const legacyMode = storage?.getItem('wc-scheme')
    const storedColor = storage?.getItem('wc-color')
    if (isMode(storedMode)) mode = storedMode
    else if (legacyMode === 'light' || legacyMode === 'dark') mode = legacyMode
    if (storedColor === 'default') color = storedColor
  } catch {
    // Storage may be unavailable in private browsing or sandboxed iframes.
  }

  const resolved = (): ResolvedThemeMode => mode === 'system'
    ? (media?.matches ? 'dark' : 'light')
    : mode

  const snapshot = (): ThemeSnapshot => ({
    color,
    mode,
    resolvedMode: resolved(),
    dark: resolved() === 'dark',
  })

  const apply = (persist = true): void => {
    const current = snapshot()
    if (target) {
      target.dataset.theme = current.mode
      target.dataset.resolvedTheme = current.resolvedMode
      target.classList.toggle('dark', current.dark)
      target.classList.toggle('light', !current.dark)
      target.style.colorScheme = current.resolvedMode
      applyTheme(color, target)
    }
    if (persist) {
      try {
        storage?.setItem(key, mode)
        storage?.setItem('wc-scheme', current.resolvedMode)
        storage?.setItem('wc-color', color)
      } catch {
        // Ignore storage failures; DOM theme switching still works.
      }
    }
    listeners.forEach((listener) => listener(current))
  }

  const onSystemChange = (): void => {
    if (mode === 'system') apply(false)
  }
  media?.addEventListener?.('change', onSystemChange)

  const controller: ThemeController = {
    get color () { return color },
    get mode () { return mode },
    get resolvedMode () { return resolved() },
    get dark () { return resolved() === 'dark' },
    setColor (next) {
      if (next === color) return
      color = next
      apply()
    },
    setMode (next) {
      if (next === mode) return
      mode = next
      apply()
    },
    toggleDark () {
      mode = resolved() === 'dark' ? 'light' : 'dark'
      apply()
    },
    subscribe (listener) {
      listeners.add(listener)
      listener(snapshot())
      return () => listeners.delete(listener)
    },
    destroy () {
      media?.removeEventListener?.('change', onSystemChange)
      listeners.clear()
    },
  }

  apply(false)
  return controller
}

/** Backward-compatible name for the old cross-framework manager. */
export function createThemeManager(
  defaultColor: ColorTheme = 'default',
  defaultDark = false,
): ThemeController {
  return createThemeController({ defaultColor, defaultMode: defaultDark ? 'dark' : 'light' })
}

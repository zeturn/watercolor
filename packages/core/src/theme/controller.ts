export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedThemeMode = 'light' | 'dark'
export const THEME_MODES = ['light', 'dark', 'system'] as const
export const THEME_STORAGE_KEY = 'wc-mode'
export const LEGACY_THEME_STORAGE_KEY = 'wc-scheme'

type Listener = (theme: ThemeSnapshot) => void
export type ThemeStorage = Pick<Storage, 'getItem' | 'setItem'>

export interface ThemeSnapshot {
  mode: ThemeMode
  resolvedMode: ResolvedThemeMode
  dark: boolean
}

export interface ThemeControllerOptions {
  target?: HTMLElement | null
  storage?: ThemeStorage | null
  storageKey?: string
  initialMode?: unknown
  initialResolvedMode?: ResolvedThemeMode
  readStorage?: boolean
}

export interface ThemeController extends ThemeSnapshot {
  readonly started: boolean
  start: () => void
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
  subscribe: (listener: Listener) => () => void
  destroy: () => void
}

export const isThemeMode = (value: unknown): value is ThemeMode =>
  typeof value === 'string' && THEME_MODES.includes(value as ThemeMode)

export const resolveThemeMode = (mode: ThemeMode, prefersDark = false): ResolvedThemeMode =>
  mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode

export function applyThemeMode(target: HTMLElement, mode: ThemeMode, resolvedMode: ResolvedThemeMode): void {
  target.dataset.theme = mode
  target.dataset.resolvedTheme = resolvedMode
  target.classList.toggle('dark', resolvedMode === 'dark')
  target.classList.toggle('light', resolvedMode === 'light')
  target.style.colorScheme = resolvedMode
}

export function createThemeController(options: ThemeControllerOptions = {}): ThemeController {
  let mode: ThemeMode = isThemeMode(options.initialMode) ? options.initialMode : 'system'
  let prefersDark = options.initialResolvedMode === 'dark'
  let started = false
  let target: HTMLElement | null = null
  let storage: ThemeStorage | null = null
  let media: MediaQueryList | null = null
  const key = typeof options.storageKey === 'string' && options.storageKey.trim() ? options.storageKey : THEME_STORAGE_KEY
  const listeners = new Set<Listener>()

  const resolved = (): ResolvedThemeMode => resolveThemeMode(mode, prefersDark)
  const snapshot = (): ThemeSnapshot => ({ mode, resolvedMode: resolved(), dark: resolved() === 'dark' })
  const notify = (): void => listeners.forEach((listener) => listener(snapshot()))

  const apply = (persist = true): void => {
    const current = snapshot()
    if (target) applyThemeMode(target, current.mode, current.resolvedMode)
    if (persist) {
      try { storage?.setItem(key, mode) } catch {}
    }
    notify()
  }

  const onSystemChange = (event: MediaQueryListEvent | MediaQueryList): void => {
    prefersDark = event.matches
    if (mode === 'system') apply(false)
  }

  const onStorage = (event: StorageEvent): void => {
    if (event.key !== key || !isThemeMode(event.newValue) || event.newValue === mode) return
    mode = event.newValue
    apply(false)
  }

  const controller: ThemeController = {
    get mode () { return mode },
    get resolvedMode () { return resolved() },
    get dark () { return resolved() === 'dark' },
    get started () { return started },
    start () {
      if (started || typeof window === 'undefined') return
      started = true
      target = options.target === undefined ? document.documentElement : options.target
      if (options.storage === undefined) {
        try { storage = window.localStorage } catch { storage = null }
      } else storage = options.storage

      media = typeof globalThis.matchMedia === 'function' ? globalThis.matchMedia('(prefers-color-scheme: dark)') : null
      prefersDark = media?.matches ?? prefersDark
      if (options.readStorage !== false) {
        try {
          const storedMode = storage?.getItem(key)
          const legacyMode = options.storageKey === undefined ? storage?.getItem(LEGACY_THEME_STORAGE_KEY) : null
          if (isThemeMode(storedMode)) mode = storedMode
          else if (legacyMode === 'light' || legacyMode === 'dark') {
            mode = legacyMode
            storage?.setItem(key, legacyMode)
          }
        } catch {}
      }
      media?.addEventListener?.('change', onSystemChange)
      if (!media?.addEventListener) media?.addListener?.(onSystemChange)
      window.addEventListener('storage', onStorage)
      apply(false)
    },
    setMode (next) {
      if (!isThemeMode(next) || next === mode) return
      mode = next
      apply(started)
    },
    toggleMode () {
      mode = resolved() === 'dark' ? 'light' : 'dark'
      apply(started)
    },
    subscribe (listener) {
      listeners.add(listener)
      listener(snapshot())
      return () => listeners.delete(listener)
    },
    destroy () {
      media?.removeEventListener?.('change', onSystemChange)
      if (!media?.removeEventListener) media?.removeListener?.(onSystemChange)
      if (typeof window !== 'undefined') window.removeEventListener('storage', onStorage)
      listeners.clear()
      media = null
      storage = null
      target = null
      started = false
    },
  }

  return controller
}

import { InjectionToken, inject } from '@angular/core'
import { defaultLocaleMessages, type LocaleStore } from './locale'

export interface ThemeStore {
  readonly mode: string
  readonly resolvedMode: string
  readonly dark: boolean
  setMode: (mode: string) => void
  toggleMode: () => void
}

export const WC_THEME = new InjectionToken<ThemeStore>('wc-theme')
export const WC_LOCALE = new InjectionToken<LocaleStore>('wc-locale')

const fallbackLocaleStore: LocaleStore = {
  locale: undefined,
  messages: defaultLocaleMessages,
}

/** Must be called in an injection context (constructor / field initializer). */
export function useTheme(): ThemeStore {
  const store = inject(WC_THEME, { optional: true })
  if (!store) throw new Error('useTheme must be used within ThemeProvider')
  return store
}

/** Must be called in an injection context (constructor / field initializer). */
export function useLocale(): LocaleStore {
  return inject(WC_LOCALE, { optional: true }) ?? fallbackLocaleStore
}

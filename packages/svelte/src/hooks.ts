import { getContext } from 'svelte'
import { defaultLocaleMessages, type LocaleStore } from './locale'

export interface ThemeStore {
  mode: string
  resolvedMode: string
  dark: boolean
  setMode: (mode: string) => void
  toggleMode: () => void
}

const fallbackLocaleStore: LocaleStore = {
  locale: undefined,
  messages: defaultLocaleMessages,
}

export function useTheme(): ThemeStore {
  const store = getContext<ThemeStore>('wc-theme')
  if (!store) throw new Error('useTheme must be used within ThemeProvider')
  return store
}

export function useLocale(): LocaleStore {
  return getContext<LocaleStore>('wc-locale') ?? fallbackLocaleStore
}

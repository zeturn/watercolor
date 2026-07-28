import { createContext, useContext, type JSX } from 'solid-js'
import { defaultLocaleMessages, type WatercolorLocaleMessages } from './locale'

export { defaultLocaleMessages } from './locale'
export type { WatercolorLocaleMessages } from './locale'

export interface LocaleContextValue {
  locale: string | undefined
  messages: WatercolorLocaleMessages
}

export interface LocaleProviderProps {
  locale?: string
  messages?: Partial<WatercolorLocaleMessages>
  children?: JSX.Element
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: undefined,
  messages: defaultLocaleMessages,
})

export function LocaleProvider(props: LocaleProviderProps) {
  const value: LocaleContextValue = {
    get locale() {
      return props.locale
    },
    get messages() {
      return { ...defaultLocaleMessages, ...(props.messages ?? {}) }
    },
  }
  return <LocaleContext.Provider value={value}>{props.children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext)
}

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'
import jaJP from './locales/ja-JP'

const LOCALES = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP,
}

const DEFAULT_LANG = 'zh-CN'
const STORAGE_KEY = 'wc-site-lang'

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LOCALES[saved]) return saved
  } catch { /* ignore */ }
  const nav = typeof navigator !== 'undefined' ? navigator.language || '' : ''
  if (nav.startsWith('zh')) return 'zh-CN'
  if (nav.startsWith('ja')) return 'ja-JP'
  if (nav.startsWith('en')) return 'en-US'
  return DEFAULT_LANG
}

function resolve(dict, key) {
  return key.split('.').reduce((obj, k) => (obj == null ? undefined : obj[k]), dict)
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  const setLang = useCallback((code) => {
    if (!LOCALES[code]) return
    setLangState(code)
    try { localStorage.setItem(STORAGE_KEY, code) } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key, params) => {
    let text = resolve(LOCALES[lang], key)
    if (text === undefined) text = resolve(LOCALES[DEFAULT_LANG], key)
    if (text === undefined) return key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.split(`{${k}}`).join(String(v))
      }
    }
    return text
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}

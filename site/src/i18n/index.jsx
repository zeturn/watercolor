import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'
import jaJP from './locales/ja-JP'
import frFR from './locales/fr-FR'
import deDE from './locales/de-DE'
import esES from './locales/es-ES'
import { compI18n } from '../data/componentsI18n'

const LOCALES = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP,
  'fr-FR': frFR,
  'de-DE': deDE,
  'es-ES': esES,
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
  if (nav.startsWith('fr')) return 'fr-FR'
  if (nav.startsWith('de')) return 'de-DE'
  if (nav.startsWith('es')) return 'es-ES'
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

// 组件元数据（description / props.desc）的多语言读取助手。
// 中文源在 data/components.jsx，翻译在 data/componentsI18n.js。
export function useComponentText() {
  const { lang } = useI18n()
  return {
    desc(comp) {
      return compI18n[comp.id]?.description?.[lang] || comp.description
    },
    propDesc(comp, prop) {
      return compI18n[comp.id]?.props?.[prop.name]?.[lang] || prop.desc
    },
  }
}

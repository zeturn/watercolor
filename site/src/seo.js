// SEO helpers for the Watercolor site.
// Provides a single source of truth for site metadata and a hook that
// updates the document <title> / meta / canonical per route at runtime
// (this is a client-rendered SPA, so meta is managed in JS).

import { useEffect, useLocation } from 'react'
import {
  LANG_TO_PATH,
  LANG_TO_HREFLANG,
  DEFAULT_LANG,
  ALL_LANGS,
  stripLang,
  isLangPath,
  toLangPath,
} from './i18n/langMap'

const SITE_URL = 'https://watercolorui.com'
const SITE_NAME = 'Watercolor UI'
const DEFAULT_TITLE = 'Watercolor UI - 水彩风格的跨框架组件库'
const DEFAULT_DESCRIPTION =
  'Watercolor UI 是一个现代、极简、水彩风格的跨框架 UI 组件库，支持 Vue、React、Svelte、Angular 四大框架（并一等支持 Next.js），提供 60+ 开箱即用组件，零运行时依赖、可主题化、可访问。'
const DEFAULT_OG_IMAGE = '/og-image.svg'

// 语言前缀 -> Open Graph locale（下划线格式）
const LOCALE_MAP = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
}

function upsertMeta({ name, property, content }) {
  if (typeof document === 'undefined' || !content) return
  const attr = name ? 'name' : 'property'
  const value = name ?? property
  let el = document.head.querySelector(`meta[${attr}="${value}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, value)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  if (typeof document === 'undefined' || !href) return
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// 注入 hreflang 备用链接（含 x-default），便于 Google 区分各语言版本。
function upsertHreflangLinks(rest) {
  if (typeof document === 'undefined') return
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((el) => el.remove())
  for (const lang of ALL_LANGS) {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = LANG_TO_HREFLANG[lang]
    link.href = SITE_URL + '/' + LANG_TO_PATH[lang] + rest
    document.head.appendChild(link)
  }
  const xd = document.createElement('link')
  xd.rel = 'alternate'
  xd.hreflang = 'x-default'
  xd.href = SITE_URL + '/' + LANG_TO_PATH[DEFAULT_LANG] + rest
  document.head.appendChild(xd)
}

export function updateDocumentMeta({
  title,
  description,
  path = '/',
  image,
  type = 'website',
} = {}) {
  const safePath = path && path.startsWith('/') ? path : `/${path || ''}`
  const pageTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE
  const desc = description || DEFAULT_DESCRIPTION
  const url = SITE_URL + safePath
  const img = SITE_URL + (image || DEFAULT_OG_IMAGE)
  const rest = stripLang(safePath)
  const seg = safePath.split('/')[1] || ''
  const langPath = isLangPath(seg) ? seg : toLangPath(DEFAULT_LANG)
  const ogLocale = LOCALE_MAP[langPath] || 'zh_CN'

  document.title = pageTitle

  upsertMeta({ name: 'description', content: desc })

  // Open Graph
  upsertMeta({ property: 'og:title', content: pageTitle })
  upsertMeta({ property: 'og:description', content: desc })
  upsertMeta({ property: 'og:type', content: type })
  upsertMeta({ property: 'og:url', content: url })
  upsertMeta({ property: 'og:site_name', content: SITE_NAME })
  upsertMeta({ property: 'og:image', content: img })
  upsertMeta({ property: 'og:locale', content: ogLocale })

  // Twitter
  upsertMeta({ name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta({ name: 'twitter:title', content: pageTitle })
  upsertMeta({ name: 'twitter:description', content: desc })
  upsertMeta({ name: 'twitter:image', content: img })

  upsertCanonical(url)
  upsertHreflangLinks(rest)
}

// Per-route document meta. Re-applies whenever any field changes.
// canonical / hreflang 始终基于真实 URL（含语言前缀）。
export function useDocumentMeta(meta = {}) {
  const location = useLocation()
  const { title, description, image, type } = meta
  useEffect(() => {
    const fullPath = location.pathname || '/'
    updateDocumentMeta({ title, description, path: fullPath, image, type })
  }, [title, description, location.pathname, image, type])
}

export { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION }

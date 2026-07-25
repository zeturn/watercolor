// SEO helpers for the Watercolor site.
// Provides a single source of truth for site metadata and a hook that
// updates the document <title> / meta / canonical per route at runtime
// (this is a client-rendered SPA, so meta is managed in JS).

import { useEffect } from 'react'

const SITE_URL = 'https://watercolorui.com'
const SITE_NAME = 'Watercolor UI'
const DEFAULT_TITLE = 'Watercolor UI - 水彩风格的跨框架组件库'
const DEFAULT_DESCRIPTION =
  'Watercolor UI 是一个现代、极简、水彩风格的跨框架 UI 组件库，同时支持 Vue 3 和 React，提供 60+ 开箱即用组件，零运行时依赖、可主题化、可访问。'
const DEFAULT_OG_IMAGE = '/og-image.svg'

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

export function updateDocumentMeta({
  title,
  description,
  path = '/',
  image,
  type = 'website',
} = {}) {
  const pageTitle = title ? `${title} · ${SITE_NAME}` : DEFAULT_TITLE
  const desc = description || DEFAULT_DESCRIPTION
  const url = SITE_URL + (path.startsWith('/') ? path : `/${path}`)
  const img = SITE_URL + (image || DEFAULT_OG_IMAGE)

  document.title = pageTitle

  upsertMeta({ name: 'description', content: desc })

  // Open Graph
  upsertMeta({ property: 'og:title', content: pageTitle })
  upsertMeta({ property: 'og:description', content: desc })
  upsertMeta({ property: 'og:type', content: type })
  upsertMeta({ property: 'og:url', content: url })
  upsertMeta({ property: 'og:site_name', content: SITE_NAME })
  upsertMeta({ property: 'og:image', content: img })
  upsertMeta({ property: 'og:locale', content: 'zh_CN' })

  // Twitter
  upsertMeta({ name: 'twitter:card', content: 'summary_large_image' })
  upsertMeta({ name: 'twitter:title', content: pageTitle })
  upsertMeta({ name: 'twitter:description', content: desc })
  upsertMeta({ name: 'twitter:image', content: img })

  upsertCanonical(url)
}

// Per-route document meta. Re-applies whenever any field changes.
export function useDocumentMeta(meta = {}) {
  const { title, description, path, image, type } = meta
  useEffect(() => {
    updateDocumentMeta({ title, description, path, image, type })
  }, [title, description, path, image, type])
}

export { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION }

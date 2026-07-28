// 语言映射（纯 JS，无 React 依赖）。
// i18n key 与 URL 前缀、hreflang 区域码互相对应，供前端路由与 sitemap 脚本共用。
export const DEFAULT_LANG = 'zh-CN'

// i18n key -> URL 前缀
export const LANG_TO_PATH = {
  'zh-CN': 'zh',
  'en-US': 'en',
  'ja-JP': 'ja',
  'fr-FR': 'fr',
  'de-DE': 'de',
  'es-ES': 'es',
}

// URL 前缀 -> i18n key
export const PATH_TO_LANG = Object.fromEntries(
  Object.entries(LANG_TO_PATH).map(([lang, path]) => [path, lang]),
)

// 所有 i18n key
export const ALL_LANGS = Object.keys(LANG_TO_PATH)

// i18n key -> hreflang 区域码（Google 标准格式）
export const LANG_TO_HREFLANG = {
  'zh-CN': 'zh-CN',
  'en-US': 'en-US',
  'ja-JP': 'ja-JP',
  'fr-FR': 'fr-FR',
  'de-DE': 'de-DE',
  'es-ES': 'es-ES',
}

export function isLangPath(p) {
  return Object.prototype.hasOwnProperty.call(PATH_TO_LANG, p)
}

export function toLangPath(lang) {
  return LANG_TO_PATH[lang] || LANG_TO_PATH[DEFAULT_LANG]
}

// 去掉 pathname 第一段（语言前缀），返回剩余路径（以 / 开头或空串）
export function stripLang(pathname) {
  if (!pathname || pathname === '/') return ''
  const seg = pathname.split('/')[1]
  if (isLangPath(seg)) return pathname.slice(seg.length + 1) || ''
  return pathname
}

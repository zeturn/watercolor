// 生成 public/sitemap.xml，供 Google Search Console 提交。
// 站点采用语言前缀模式（/zh、/en、/ja、/fr、/de、/es），因此每个路径
// 都为每种语言生成一条 <url>，并附带 hreflang 备用链接（含 x-default）。
// 数据源：
//   - src/data/components.jsx  -> 组件列表（/components/:id）
//   - src/data/docs.js         -> 文档分区（/docs/:sectionId）
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  LANG_TO_PATH,
  LANG_TO_HREFLANG,
  ALL_LANGS,
  DEFAULT_LANG,
} from '../src/i18n/langMap.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteRoot = path.resolve(__dirname, '..')
const srcDir = path.join(siteRoot, 'src')
const outFile = path.join(siteRoot, 'public', 'sitemap.xml')

const BASE = 'https://watercolorui.com'
// 站点最后更新日期（与发布保持一致）
const LASTMOD = '2026-07-28'

// 组件 id
const compRaw = fs.readFileSync(path.join(srcDir, 'data', 'components.jsx'), 'utf8')
const compIds = [...compRaw.matchAll(/id:\s*'([a-zA-Z0-9_-]+)'/g)].map((m) => m[1])

// 文档 section id（多语言去重，URL 与语言无关）
const docsRaw = fs.readFileSync(path.join(srcDir, 'data', 'docs.js'), 'utf8')
const docIds = [
  ...new Set(
    [...docsRaw.matchAll(/id:\s*'([a-zA-Z0-9_-]+)',\s*label:/g)].map((m) => m[1]),
  ),
]

// 不带语言前缀的路径集合
const basePaths = []
basePaths.push({ path: '', changefreq: 'daily', priority: '1.0' }) // 首页 /
basePaths.push({ path: '/components', changefreq: 'weekly', priority: '0.9' })
basePaths.push({ path: '/skill', changefreq: 'weekly', priority: '0.6' })
for (const id of docIds) {
  basePaths.push({ path: `/docs/${id}`, changefreq: 'weekly', priority: '0.8' })
}
for (const id of compIds) {
  basePaths.push({ path: `/components/${id}`, changefreq: 'weekly', priority: '0.7' })
}

// 生成某路径的 hreflang 备用链接块（每种语言 + x-default）
function hreflangBlock(rest) {
  const links = []
  for (const lang of ALL_LANGS) {
    links.push(
      `    <xhtml:link rel="alternate" hreflang="${LANG_TO_HREFLANG[lang]}" href="${BASE}/${LANG_TO_PATH[lang]}${rest}" />`,
    )
  }
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/${LANG_TO_PATH[DEFAULT_LANG]}${rest}" />`,
  )
  return links.join('\n')
}

const urls = []
for (const base of basePaths) {
  for (const lang of ALL_LANGS) {
    const loc = `${BASE}/${LANG_TO_PATH[lang]}${base.path}`
    urls.push(
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>${base.changefreq}</changefreq>\n    <priority>${base.priority}</priority>\n${hreflangBlock(base.path)}\n  </url>`,
    )
  }
}

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
  urls.join('\n') +
  '\n</urlset>\n'

fs.writeFileSync(outFile, xml)
console.log(
  `Generated ${urls.length} URLs (${basePaths.length} paths × ${ALL_LANGS.length} langs) -> public/sitemap.xml`,
)

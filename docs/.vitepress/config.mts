import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

function resolveRepoBase(): string {
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  // We serve VitePress under /<repo>/docs/
  const isCI = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true'
  if (!isCI && !process.env.DOCS_BASE) return '/'

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'watercolor'
  const base = process.env.DOCS_BASE || `/${repo}/docs/`
  return base.endsWith('/') ? base : `${base}/`
}

function readSidebar() {
  const sidebarPath = path.resolve(process.cwd(), 'docs/generated/sidebar.json')
  if (!fs.existsSync(sidebarPath)) return {}
  return JSON.parse(fs.readFileSync(sidebarPath, 'utf-8'))
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'Watercolor UI',
  description: 'Watercolor UI 组件文档集（自动生成）',
  base: resolveRepoBase(),

  themeConfig: {
    nav: [
      { text: '组件', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/zeturn/watercolor' },
    ],
    sidebar: readSidebar(),
    search: { provider: 'local' },
  },
})

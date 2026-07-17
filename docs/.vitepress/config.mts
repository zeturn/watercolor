import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

function resolveRepoBase(): string {
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  // We serve VitePress under /<repo>/docs/
  const isCI = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true'
  if (!isCI && !process.env.DOCS_BASE) return '/'

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'watercolor'
  const base = process.env.DOCS_BASE || `/${repo}/`
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
  appearance: false,

  themeConfig: {
    logo: '/img/watercolorui.png',
    nav: [
      { text: '文档首页', link: '/' },
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/usage' },
            { text: '组合布局', link: '/guide/composition' },
            { text: '主题与图标', link: '/guide/theming' },
            { text: '主题 API 迁移', link: '/guide/theme-migration' },
          ]
        }
      ],
      ...readSidebar()
    },
    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zeturn/watercolor' },
    ],

    outline: { level: [2, 3] },
  },
})

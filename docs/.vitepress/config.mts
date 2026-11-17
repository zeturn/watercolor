import { defineConfig } from 'vitepress'
import fs from 'node:fs'

const generatedSidebar = new URL('../generated/sidebar.json', import.meta.url)
const componentSidebar = fs.existsSync(generatedSidebar) ? JSON.parse(fs.readFileSync(generatedSidebar, 'utf8')) : {}

export default defineConfig({
  title: 'Watercolor UI',
  description: 'Cross-framework UI components with explicit icon imports.',
  base: '/watercolor/',
  themeConfig: {
    nav: [
      { text: 'Migration to 2.0', link: '/guide/icon-performance' },
      { text: 'Components', link: '/components/' },
      { text: 'Vue Storybook', link: 'https://zeturn.github.io/watercolor/vue/' },
      { text: 'React Storybook', link: 'https://zeturn.github.io/watercolor/react/' },
    ],
    sidebar: componentSidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/zeturn/watercolor' }],
  },
})

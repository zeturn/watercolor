// Astro 集成：注册 React 渲染器以便 <Component client:*> 生效，并注入主题样式。
import react from '@astrojs/react'

/**
 * @param {object} [options]
 * @param {boolean} [options.injectStyles=true] 是否自动注入 @zeturn/watercolor-react 的样式
 * @returns {import('astro').AstroIntegration}
 */
export default function watercolorAstro(options = {}) {
  const injectStyles = options.injectStyles !== false
  return {
    name: '@zeturn/watercolor-astro',
    hooks: {
      'astro:config:setup': ({ updateConfig, injectScript }) => {
        updateConfig({
          vite: {
            plugins: [react()],
          },
        })

        if (injectStyles) {
          // 在页面 SSR 入口注入样式，确保 Watercolor 主题/CSS 生效。
          injectScript('page-ssr', `import '@zeturn/watercolor-react/style.css';`)
        }
      },
    },
  }
}

// .storybook-vue/main.js
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const workspaceRoot = fileURLToPath(new URL('../../../', import.meta.url))
const coreSourceEntry = path.resolve(workspaceRoot, 'packages/core/src/index.ts')
const coreSourceRoot = path.resolve(workspaceRoot, 'packages/core/src')
const vueSourceRoot = path.resolve(workspaceRoot, 'packages/vue/src')

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  viteFinal: async (config) => {
    // Storybook 在打包时会复用库的 Vite 配置，这里手动去掉 vite-plugin-dts 以避免生成声明文件造成的巨大内存占用。
    const filteredPlugins = (config.plugins || []).filter(
      (p) => !(p && (p.name === 'vite:dts' || p?.name?.includes('vite-plugin-dts')))
    );

    return {
      ...config,
      plugins: filteredPlugins,
      resolve: {
        ...config.resolve,
        alias: [
          ...(Array.isArray(config.resolve?.alias) ? config.resolve.alias : []),
          {
            find: /^@\/(.*)$/,
            replacement: `${vueSourceRoot}/$1`,
          },
          {
            find: /^@zeturn\/watercolor-core$/,
            replacement: coreSourceEntry,
          },
          {
            find: /^@zeturn\/watercolor-core\/src\/(.*)$/,
            replacement: `${coreSourceRoot}/$1`,
          },
        ],
      },
      define: {
        ...config.define,
        global: 'globalThis',
      },
      server: {
        ...config.server,
        fs: {
          ...config.server?.fs,
          allow: [...(config.server?.fs?.allow || []), workspaceRoot],
        },
        hmr: {
          clientPort: process.env.CODESPACE_NAME ? 443 : 6006,
          protocol: process.env.CODESPACE_NAME ? 'wss' : 'ws',
        },
      },
    };
  }
};

export default config; 

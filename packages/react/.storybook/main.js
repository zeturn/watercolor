// .storybook-react/main.js
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const workspaceRoot = fileURLToPath(new URL('../../../', import.meta.url))
const coreSourceEntry = path.resolve(workspaceRoot, 'packages/core/src/index.ts')
const coreSourceRoot = path.resolve(workspaceRoot, 'packages/core/src')

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => {
    // 移除 vite-plugin-dts，防止在 Storybook 打包时生成声明文件导致内存激增
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
            find: /^@zeturn\/watercolor-core$/,
            replacement: coreSourceEntry,
          },
          {
            find: /^@zeturn\/watercolor-core\/src\/(.*)$/,
            replacement: `${coreSourceRoot}/$1`,
          },
        ],
      },
      server: {
        ...config.server,
        fs: {
          ...config.server?.fs,
          allow: [...(config.server?.fs?.allow || []), workspaceRoot],
        },
        hmr: {
          clientPort: process.env.CODESPACE_NAME ? 443 : 6007,
          protocol: process.env.CODESPACE_NAME ? 'wss' : 'ws',
        },
      },
    };
  }
}

export default config; 

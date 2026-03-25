// .storybook-react/main.js
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
      server: {
        ...config.server,
        hmr: {
          clientPort: process.env.CODESPACE_NAME ? 443 : 6007,
          protocol: process.env.CODESPACE_NAME ? 'wss' : 'ws',
        },
      },
    };
  }
}

export default config; 

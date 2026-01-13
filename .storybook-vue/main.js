// .storybook-vue/main.js
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../stories-vue/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    "@chromatic-com/storybook",
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },

  staticDirs: ['../public'],

  viteFinal: async (config) => {
    // Storybook 在打包时会复用库的 Vite 配置，这里手动去掉 vite-plugin-dts 以避免生成声明文件造成的巨大内存占用。
    const filteredPlugins = (config.plugins || []).filter(
      (p) => !(p && (p.name === 'vite:dts' || p?.name?.includes('vite-plugin-dts')))
    );

    return {
      ...config,
      plugins: filteredPlugins,
      define: {
        ...config.define,
        global: 'globalThis',
      },
      server: {
        ...config.server,
        hmr: {
          clientPort: process.env.CODESPACE_NAME ? 443 : 6006,
          protocol: process.env.CODESPACE_NAME ? 'wss' : 'ws',
        },
      },
    };
  }
};

export default config; 
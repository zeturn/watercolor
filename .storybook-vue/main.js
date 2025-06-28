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
    // 合并 Vite 配置
    return {
      ...config,
      define: {
        ...config.define,
        global: 'globalThis',
      },
    };
  }
};

export default config; 
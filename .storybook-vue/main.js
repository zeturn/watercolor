// .storybook-vue/main.js
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../stories-vue/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    "@chromatic-com/storybook"
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
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
  },
};

export default config; 
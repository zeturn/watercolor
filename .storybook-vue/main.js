/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
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
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config; 
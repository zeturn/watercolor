// .storybook-react/main.js
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories-react/**/*.stories.@(js|jsx|ts|tsx|mdx)'],

  addons: [
    '@storybook/addon-links',
    '@chromatic-com/storybook',
    '@storybook/addon-docs'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  staticDirs: ['../public']
}

export default config; 
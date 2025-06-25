import '../src/styles/index.css';
import { h } from 'vue';

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#171717',
        },
      ],
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
    }
  },
  globalTypes: {
    theme: {
      description: '主题模式',
      defaultValue: 'light',
      toolbar: {
        title: '主题',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: '浅色模式' },
          { value: 'dark', icon: 'circle', title: '深色模式' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
    colorTheme: {
      description: '颜色主题',
      defaultValue: 'theme-ocean',
      toolbar: {
        title: '配色',
        icon: 'paintbrush',
        items: [
          { value: 'theme-ocean', title: 'Ocean' },
          { value: 'theme-forest', title: 'Forest' },
          { value: 'theme-sunset', title: 'Sunset' },
          { value: 'theme-violet', title: 'Violet' },
          { value: 'theme-rose', title: 'Rose' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    /**
     * @param {Function} story - 返回要渲染的组件的函数
     * @param {any} context - Storybook 上下文
     */
    (story, context) => {
      const { theme, colorTheme } = context.globals;

      const root = document.documentElement;

      // 处理明暗模式
      root.classList.remove('light', 'dark');
      root.classList.add(theme);

      // 处理颜色主题
      const colorThemes = ['theme-ocean', 'theme-forest', 'theme-sunset', 'theme-violet', 'theme-rose'];
      colorThemes.forEach((cls) => root.classList.remove(cls));
      root.classList.add(colorTheme);

      // 持久化设置
      localStorage.setItem('storybook-theme', theme);
      localStorage.setItem('storybook-color-theme', colorTheme);

      // 返回包装组件
      return {
        setup() {
          return () =>
            h(
              'div',
              {
                class: `p-4 min-h-screen ${
                  theme === 'dark'
                    ? 'bg-neutral-900 text-neutral-100'
                    : 'bg-neutral-0 text-neutral-900'
                }`,
              },
              [h(story())]
            );
        },
      };
    },
  ],
};

export default preview; 
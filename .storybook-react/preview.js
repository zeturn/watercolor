import '../src/styles/index.css'
import React from 'react'

/** @type { import('@storybook/react').Preview } */
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
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#171717' },
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
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      React.useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // 保存主题选择到 localStorage
        localStorage.setItem('storybook-theme', theme);
      }, [theme]);

      // 使用 React.createElement 避免在 .js 文件中直接书写 JSX，防止 Vite 解析错误
      return React.createElement(
        'div',
        {
          className: `p-4 min-h-screen ${theme === 'dark' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-0 text-neutral-900'}`,
        },
        React.createElement(Story, null)
      );
    },
  ],
}

export default preview 
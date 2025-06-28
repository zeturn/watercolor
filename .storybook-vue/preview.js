import '../src/styles/index.css';
import { h, watchEffect } from 'vue';

/** @type { import('@storybook/vue3-vite').Preview } */
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
        { name: 'dark', value: '#0f0f0f' },
        { name: 'gray', value: '#f5f5f5' },
      ],
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (story, context) => {
      const { theme } = context.globals;

      // watchEffect will run once and whenever theme changes
      watchEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // sync background
        const sbRoot = document.getElementById('storybook-root');
        if (sbRoot){
          sbRoot.style.backgroundColor = theme === 'dark' ? '#0f0f0f' : '#ffffff';
        }
      }, [theme]);

      return () =>
        h(
          'div',
          {
            style: {
              backgroundColor: theme === 'dark' ? '#0f0f0f' : '#ffffff',
              color: theme === 'dark' ? '#f5f5f5' : '#1f1f1f',
              minHeight: '100vh',
            },
          },
          [h(story())]
        );
    },
  ],
};

export default preview; 
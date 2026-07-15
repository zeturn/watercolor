import '../src/styles/index.css';
import './preview.css';
import { h } from 'vue';

/** @type { import('@storybook/vue3-vite').Preview } */
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('storybook-theme');
  if (savedTheme) return savedTheme;
  
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};
const savedTheme = getInitialTheme();

const debug = false;

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
      default: savedTheme,
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
      defaultValue: (() => {
        // check system theme preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        // get saved theme
        const savedTheme = localStorage.getItem('storybook-theme');
        // determine the theme to use
        return savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
      })(),
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          { value: 'system', title: 'System' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const { theme } = context.globals;

      const root = document.documentElement;
      const resolved = theme === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme;
      root.dataset.theme = theme;
      root.dataset.resolvedTheme = resolved;
      root.classList.toggle('dark', resolved === 'dark');
      root.classList.toggle('light', resolved === 'light');

        // sync background
        const sbRoot = document.getElementById('storybook-root');
        if (sbRoot){
          sbRoot.style.backgroundColor = 'var(--wc-surface-canvas)';
        }

        // save theme to localStorage and trigger manager reload
        const currentTheme = localStorage.getItem('storybook-theme');
        if (debug) console.log('[Preview] Current localStorage theme:', currentTheme);
        if (debug) console.log('[Preview] New theme to save:', theme);
        
        if (currentTheme !== theme) {
          localStorage.setItem('storybook-theme', theme);
          if (debug) console.log('[Preview] Saved theme to localStorage:', theme);
          
          // 确保localStorage已保存
          const savedTheme = localStorage.getItem('storybook-theme');
          if (debug) console.log('[Preview] Verified saved theme:', savedTheme);
          
          // trigger storage event to notify manager
          const storageEvent = new StorageEvent('storage', {
            key: 'storybook-theme',
            newValue: theme,
            oldValue: currentTheme
          });
          
          if (debug) console.log('[Preview] Dispatching storage event:', storageEvent);
          window.dispatchEvent(storageEvent);
        }
      return () =>
        h(
          'div',
          {
            style: {
              backgroundColor: 'var(--wc-surface-canvas)',
              color: 'var(--wc-text-primary)',
              minHeight: '100vh',
            },
          },
          [h(story())]
        );
    },
  ],
};

export default preview;

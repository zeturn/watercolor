import '../src/styles/index.css'
import React, { useEffect } from 'react'

/** @type { import('@storybook/react-vite').Preview } */
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
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals

      // watchEffect will run once and whenever theme changes
      useEffect(() => {
        if (debug) console.log('[Preview] Theme changed to:', theme)
        
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)

        // sync background
        const sbRoot = document.getElementById('storybook-root')
        if (sbRoot) {
          sbRoot.style.backgroundColor = theme === 'dark' ? '#0f0f0f' : '#ffffff'
        }

        // save theme to localStorage and trigger manager reload
        const currentTheme = localStorage.getItem('storybook-theme')
        if (debug) console.log('[Preview] Current localStorage theme:', currentTheme)
        if (debug) console.log('[Preview] New theme to save:', theme)
        
        if (currentTheme !== theme) {
          localStorage.setItem('storybook-theme', theme)
          if (debug) console.log('[Preview] Saved theme to localStorage:', theme)
          
          // 确保localStorage已保存
          const savedTheme = localStorage.getItem('storybook-theme')
          if (debug) console.log('[Preview] Verified saved theme:', savedTheme)
          
          // trigger storage event to notify manager
          const storageEvent = new StorageEvent('storage', {
            key: 'storybook-theme',
            newValue: theme,
            oldValue: currentTheme
          })
          
          if (debug) console.log('[Preview] Dispatching storage event:', storageEvent)
          window.dispatchEvent(storageEvent)
        }
      }, [theme])

      return (
        <div
          style={{
            backgroundColor: theme === 'dark' ? '#0f0f0f' : '#ffffff',
            color: theme === 'dark' ? '#f5f5f5' : '#1f1f1f',
            minHeight: '100vh',
          }}
        >
          <Story {...context} />
        </div>
      )
    },
  ],
}

export default preview 
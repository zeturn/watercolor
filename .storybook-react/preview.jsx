import React from 'react'
import '../src/styles/index.css'

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
      const theme = context.globals.theme
      document.documentElement.className = theme === 'dark' ? 'dark' : ''
      return (
        <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-0 text-neutral-900'}`}>
          <Story />
        </div>
      )
    },
  ],
}

export default preview 
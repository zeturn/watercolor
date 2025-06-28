// .storybook-react/manager.js
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

// check system theme preference
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// get saved theme
const savedTheme = localStorage.getItem('storybook-theme')

const isDark = savedTheme ? savedTheme === 'dark' : prefersDark

// listen to theme change
window.addEventListener('storage', (e) => {
  if (e.key === 'storybook-theme') {
    location.reload() // reload to apply new theme
  }
})

addons.setConfig({
  theme: isDark ? {
    ...themes.dark,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com/zeturn/watercolor-ui',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',

    // dark theme colors
    colorPrimary: '#60A5FA',
    colorSecondary: '#34D399',

    // application background - using darker black
    appBg: '#0f0f0f',
    appContentBg: '#1a1a1a',
    appBorderColor: '#2a2a2a',
    appBorderRadius: 8,

    // text color
    textColor: '#f5f5f5',
    textInverseColor: '#0f0f0f',

    // toolbar default and active colors
    barTextColor: '#b3b3b3',
    barSelectedColor: '#60A5FA',
    barBg: '#1a1a1a',

    // form colors
    inputBg: '#2a2a2a',
    inputBorder: '#3a3a3a',
    inputTextColor: '#f5f5f5',
    inputBorderRadius: 6,

    // console colors
    controlBg: '#2a2a2a',
    controlBorder: '#3a3a3a',
    controlTextColor: '#f5f5f5',
    controlBorderRadius: 6,

  } : {
    ...themes.light,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com/zeturn/watercolor-ui',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',

    // light theme colors
    colorPrimary: '#3B82F6',
    colorSecondary: '#10B981',

    // light theme background color
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e5e5e5',
    appBorderRadius: 8,

    // text color
    textColor: '#1f1f1f',
    textInverseColor: '#ffffff',

    // toolbar default and active colors
    barTextColor: '#666666',
    barSelectedColor: '#3B82F6',
    barBg: '#ffffff',

    // form colors
    inputBg: '#ffffff',
    inputBorder: '#d1d1d1',
    inputTextColor: '#1f1f1f',
    inputBorderRadius: 6,
  },
})

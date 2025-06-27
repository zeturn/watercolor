// .storybook-react/manager.js
import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

// 检测系统主题偏好
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// 获取保存的主题设置
const savedTheme = localStorage.getItem('storybook-theme')

const isDark = savedTheme ? savedTheme === 'dark' : prefersDark

// 监听主题变化
window.addEventListener('storage', (e) => {
  if (e.key === 'storybook-theme') {
    location.reload() // 重新加载以应用新主题
  }
})

addons.setConfig({
  theme: isDark ? {
    ...themes.dark,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',

    // 深色主题颜色
    colorPrimary: '#60A5FA',
    colorSecondary: '#34D399',

    // 应用程序背景 - 使用更深的黑色
    appBg: '#0f0f0f',
    appContentBg: '#1a1a1a',
    appBorderColor: '#2a2a2a',
    appBorderRadius: 8,

    // 文本颜色
    textColor: '#f5f5f5',
    textInverseColor: '#0f0f0f',

    // 工具栏默认和活动颜色
    barTextColor: '#b3b3b3',
    barSelectedColor: '#60A5FA',
    barBg: '#1a1a1a',

    // 表单颜色
    inputBg: '#2a2a2a',
    inputBorder: '#3a3a3a',
    inputTextColor: '#f5f5f5',
    inputBorderRadius: 6,

    // 控制台颜色
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

    // 浅色主题颜色
    colorPrimary: '#3B82F6',
    colorSecondary: '#10B981',

    // 浅色主题背景颜色
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e5e5e5',
    appBorderRadius: 8,

    // 文本颜色
    textColor: '#1f1f1f',
    textInverseColor: '#ffffff',

    // 工具栏默认和活动颜色
    barTextColor: '#666666',
    barSelectedColor: '#3B82F6',
    barBg: '#ffffff',

    // 表单颜色
    inputBg: '#ffffff',
    inputBorder: '#d1d1d1',
    inputTextColor: '#1f1f1f',
    inputBorderRadius: 6,
  },
})

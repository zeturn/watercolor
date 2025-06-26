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
    appContentBg: '#0f0f0f',
    appPreviewBg: '#0f0f0f',
    appBorderColor: '#2a2a2a',
    appBorderRadius: 8,

    // 文本颜色
    textColor: '#f5f5f5',
    textInverseColor: '#0f0f0f',
    textMutedColor: '#b3b3b3',

    // 工具栏默认和活动颜色
    barTextColor: '#b3b3b3',
    barHoverColor: '#f5f5f5',
    barSelectedColor: '#60A5FA',
    barBg: '#1a1a1a',

    // 表单颜色
    inputBg: '#2a2a2a',
    inputBorder: '#3a3a3a',
    inputTextColor: '#f5f5f5',
    inputBorderRadius: 6,

    // 按钮颜色
    buttonBg: '#2a2a2a',
    buttonBorder: '#3a3a3a',
    booleanBg: '#2a2a2a',
    booleanSelectedBg: '#60A5FA',

    // 网格线颜色
    gridCellSize: 10,
  } : {
    ...themes.light,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',

    // 浅色主题颜色
    colorPrimary: '#3B82F6',
    colorSecondary: '#10B981',

    // 浅色主题背景颜色
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#e5e5e5',
    appBorderRadius: 8,

    // 文本颜色
    textColor: '#1f1f1f',
    textInverseColor: '#ffffff',
    textMutedColor: '#666666',

    // 工具栏默认和活动颜色
    barTextColor: '#666666',
    barHoverColor: '#1f1f1f',
    barSelectedColor: '#3B82F6',
    barBg: '#ffffff',

    // 表单颜色
    inputBg: '#ffffff',
    inputBorder: '#d1d1d1',
    inputTextColor: '#1f1f1f',
    inputBorderRadius: 6,

    // 按钮颜色
    buttonBg: '#ffffff',
    buttonBorder: '#d1d1d1',
    booleanBg: '#ffffff',
    booleanSelectedBg: '#3B82F6',

    // 网格线颜色
    gridCellSize: 10,
  },
})

// 添加自定义CSS来进一步控制样式
const style = document.createElement('style');
style.textContent = `
  /* 确保主内容区域背景正确 */
  .sb-show-main {
    background: ${isDark ? '#0f0f0f' : '#ffffff'} !important;
  }
  
  /* 控制预览区域的边框 */
  .sb-main-padded {
    border: 1px solid ${isDark ? '#2a2a2a' : '#e5e5e5'} !important;
    background: ${isDark ? '#0f0f0f' : '#ffffff'} !important;
  }
  
  /* iframe 容器样式 */
  #storybook-preview-iframe {
    border: 1px solid ${isDark ? '#2a2a2a' : '#e5e5e5'} !important;
    background: ${isDark ? '#0f0f0f' : '#ffffff'} !important;
  }
  
  /* 侧边栏样式 */
  [data-side="right"] {
    background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
    border-left: 1px solid ${isDark ? '#2a2a2a' : '#e5e5e5'} !important;
  }
  
  /* 面板分割线 */
  .os-content {
    background: ${isDark ? '#1a1a1a' : '#ffffff'} !important;
  }
`;
document.head.appendChild(style);

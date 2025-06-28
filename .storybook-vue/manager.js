// .storybook-vue/manager.js
import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

// 获取主题的函数，添加重试逻辑
const getTheme = () => {
  // check system theme preference
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  // get saved theme
  const savedTheme = localStorage.getItem('storybook-theme');
  
  console.log('[Manager] prefersDark:', prefersDark);
  console.log('[Manager] savedTheme:', savedTheme);
  
  // determine the theme to use
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  
  console.log('[Manager] final isDark:', isDark);
  
  return isDark;
};

// 初始主题
let isDark = getTheme();

// 设置主题配置的函数
const setThemeConfig = (dark) => {
  console.log('[Manager] Setting theme config, dark:', dark);
  
  addons.setConfig({
    theme: dark ? {
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
  });
};

// 初始设置
setThemeConfig(isDark);

// 改进的storage事件监听器
window.addEventListener('storage', (e) => {
  console.log('[Manager] Storage event:', e.key, e.newValue);
  
  if (e.key === 'storybook-theme') {
    // 添加小延迟确保localStorage已更新
    setTimeout(() => {
      const newIsDark = getTheme();
      console.log('[Manager] Reloading with theme:', newIsDark ? 'dark' : 'light');
      location.reload();
    }, 50);
  }
});

// 添加一个全局函数用于手动重新加载主题（调试用）
window.__reloadStorybookTheme = () => {
  const newIsDark = getTheme();
  setThemeConfig(newIsDark);
}; 
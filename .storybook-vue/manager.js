// .storybook-vue/manager.js
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

// 检测系统主题偏好
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// 获取保存的主题设置
const savedTheme = localStorage.getItem('storybook-theme');
// 确定使用的主题
const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

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
    
    // 应用程序背景
    appBg: '#111827',
    appContentBg: '#1F2937',
    appBorderColor: '#374151',
    appBorderRadius: 8,
    
    // 文本颜色
    textColor: '#F3F4F6',
    textInverseColor: '#111827',
    
    // 工具栏默认和活动颜色
    barTextColor: '#9CA3AF',
    barSelectedColor: '#60A5FA',
    barBg: '#1F2937',
    
    // 表单颜色
    inputBg: '#374151',
    inputBorder: '#4B5563',
    inputTextColor: '#F3F4F6',
    inputBorderRadius: 6,
  } : {
    ...themes.light,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',
    
    // 浅色主题颜色
    colorPrimary: '#3B82F6',
    colorSecondary: '#10B981',
    
    // 应用程序背景
    appBg: '#F9FAFB',
    appContentBg: '#FFFFFF',
    appBorderColor: '#E5E7EB',
    appBorderRadius: 8,
    
    // 文本颜色
    textColor: '#374151',
    textInverseColor: '#FFFFFF',
    
    // 工具栏默认和活动颜色
    barTextColor: '#6B7280',
    barSelectedColor: '#3B82F6',
    barBg: '#FFFFFF',
    
    // 表单颜色
    inputBg: '#FFFFFF',
    inputBorder: '#D1D5DB',
    inputTextColor: '#374151',
    inputBorderRadius: 6,
  },
}); 
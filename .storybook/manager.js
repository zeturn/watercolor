import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Watercolor UI',
    brandUrl: 'https://github.com',
    brandImage: './img/watercolorui.png',
    brandTarget: '_self',
    
    // 可选：自定义颜色
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
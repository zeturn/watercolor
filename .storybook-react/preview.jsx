import '../src/styles/index.css'
import React from 'react'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

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
      default: 'auto',
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
    // 配置 storybook-dark-mode 插件
    darkMode: {
      // 自定义暗色主题
      dark: { 
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

        // 文档页面样式
        docsBg: '#0f0f0f',
        docsTextColor: '#f5f5f5',
        
        // Base 样式
        base: 'dark',
      },
      // 自定义亮色主题  
      light: { 
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

        // 文档页面样式
        docsBg: '#ffffff',
        docsTextColor: '#1f1f1f',
        
        // Base 样式
        base: 'light',
      },
      // 设置初始主题
      current: 'light',
      // 启用预览样式
      stylePreview: true,
      // 设置类目标
      classTarget: 'html',
      // 自定义类名
      darkClass: 'dark',
      lightClass: 'light',
    }
  },
  // 设置初始全局状态，确保背景与主题同步
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  decorators: [
    (Story, context) => {
      // 使用 storybook-dark-mode 的 hook 来获取当前模式
      const isDark = useDarkMode()
      
      React.useEffect(() => {
        const root = document.documentElement
        const body = document.body
        
        // 根据 dark mode 状态设置主题
        const theme = isDark ? 'dark' : 'light'
        
        // 处理明暗模式
        root.classList.remove('light', 'dark')
        root.classList.add(theme)

        // 同步更新 Storybook 的背景选择器
        const backgroundValue = isDark ? 'dark' : 'light'
        
        // 更新背景全局状态
        if (context.globals.backgrounds?.value !== backgroundValue) {
          context.globals.backgrounds = { value: backgroundValue }
        }

        // 同步 Storybook 的背景色
        const storybookRoot = document.getElementById('storybook-root')
        if (storybookRoot) {
          storybookRoot.style.backgroundColor = isDark ? '#0f0f0f' : '#ffffff'
        }

        // 设置 body 背景色以确保完整的暗黑模式体验
        body.style.backgroundColor = isDark ? '#0f0f0f' : '#ffffff'
        body.style.color = isDark ? '#f5f5f5' : '#1f1f1f'

        // 特殊处理 autodoc 页面
        const interval = setInterval(() => {
          // 查找 autodoc 相关元素并应用样式
          const sbdocs = document.querySelector('.sbdocs')
          const sbdocsWrapper = document.querySelector('.sbdocs-wrapper')
          const sbdocsContent = document.querySelector('.sbdocs-content')
          
          if (sbdocs || sbdocsWrapper || sbdocsContent) {
            // 确保 autodoc 页面也应用暗色模式类
            if (sbdocs) {
              sbdocs.classList.remove('light', 'dark')
              sbdocs.classList.add(theme)
            }
            if (sbdocsWrapper) {
              sbdocsWrapper.classList.remove('light', 'dark')
              sbdocsWrapper.classList.add(theme)
            }
            if (sbdocsContent) {
              sbdocsContent.classList.remove('light', 'dark')
              sbdocsContent.classList.add(theme)
            }
            clearInterval(interval)
          }
        }, 100)

        // 5秒后清除间隔，避免内存泄漏
        setTimeout(() => clearInterval(interval), 5000)
      }, [isDark])
      
      return (
          <Story style={{ width: '100%', height: '100%' }} />
      )
    },
  ],
}

export default preview 
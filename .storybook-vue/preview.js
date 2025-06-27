import '../src/styles/index.css';
import { h, ref, watch } from 'vue';
import { themes } from '@storybook/theming';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

/** @type { import('@storybook/vue3').Preview } */
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
        appBg: '#0f0f0f',
        appContentBg: '#0f0f0f',
        barBg: '#1a1a1a',
        
        // 深色主题颜色
        colorPrimary: '#60A5FA',
        colorSecondary: '#34D399',
        
        // 文本颜色
        textColor: '#f5f5f5',
        textInverseColor: '#0f0f0f',
        
        // 工具栏默认和活动颜色
        barTextColor: '#b3b3b3',
        barSelectedColor: '#60A5FA',
        
        // 表单颜色
        inputBg: '#2a2a2a',
        inputBorder: '#3a3a3a',
        inputTextColor: '#f5f5f5',
        inputBorderRadius: 6,
        
        // 文档页面样式
        docsBg: '#0f0f0f',
        docsTextColor: '#f5f5f5',
        
        // Base 样式
        base: 'dark',
      },
      // 自定义亮色主题  
      light: { 
        ...themes.light, 
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        barBg: '#f6f9fc',
        
        // 浅色主题颜色
        colorPrimary: '#3B82F6',
        colorSecondary: '#10B981',
        
        // 文本颜色
        textColor: '#1f1f1f',
        textInverseColor: '#ffffff',
        
        // 工具栏默认和活动颜色
        barTextColor: '#666666',
        barSelectedColor: '#3B82F6',
        
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
    /**
     * @param {Function} story - 返回要渲染的组件的函数
     * @param {any} context - Storybook 上下文
     */
    (story, context) => {
      // 创建响应式的 dark mode 状态
      const isDark = ref(false);
      
      // 获取 addons channel 来监听 dark mode 变化
      const channel = addons.getChannel();
      
      // 监听 dark mode 事件
      const handleDarkModeChange = (darkMode) => {
        isDark.value = darkMode;
      };
      
      // 设置事件监听器
      channel.on(DARK_MODE_EVENT_NAME, handleDarkModeChange);
      
      // 监听 isDark 变化
      watch(isDark, (darkMode) => {
        const root = document.documentElement;
        const body = document.body;
        
        // 根据 dark mode 状态设置主题
        const currentTheme = darkMode ? 'dark' : 'light';
        
        // 处理明暗模式
        root.classList.remove('light', 'dark');
        root.classList.add(currentTheme);

        // 同步更新 Storybook 的背景选择器
        const backgroundValue = darkMode ? 'dark' : 'light';
        
        // 更新背景全局状态
        if (context.globals.backgrounds?.value !== backgroundValue) {
          context.globals.backgrounds = { value: backgroundValue };
        }

        // 同步 Storybook 的背景色
        const storybookRoot = document.getElementById('storybook-root');
        if (storybookRoot) {
          storybookRoot.style.backgroundColor = darkMode ? '#0f0f0f' : '#ffffff';
        }

        // 设置 body 背景色以确保完整的暗黑模式体验
        body.style.backgroundColor = darkMode ? '#0f0f0f' : '#ffffff';
        body.style.color = darkMode ? '#f5f5f5' : '#1f1f1f';

        // 特殊处理 autodoc 页面
        const interval = setInterval(() => {
          // 查找 autodoc 相关元素并应用样式
          const sbdocs = document.querySelector('.sbdocs');
          const sbdocsWrapper = document.querySelector('.sbdocs-wrapper');
          const sbdocsContent = document.querySelector('.sbdocs-content');
          
          if (sbdocs || sbdocsWrapper || sbdocsContent) {
            // 确保 autodoc 页面也应用暗色模式类
            if (sbdocs) {
              sbdocs.classList.remove('light', 'dark');
              sbdocs.classList.add(currentTheme);
            }
            if (sbdocsWrapper) {
              sbdocsWrapper.classList.remove('light', 'dark');
              sbdocsWrapper.classList.add(currentTheme);
            }
            if (sbdocsContent) {
              sbdocsContent.classList.remove('light', 'dark');
              sbdocsContent.classList.add(currentTheme);
            }
            clearInterval(interval);
          }
        }, 100);

        // 5秒后清除间隔，避免内存泄漏
        setTimeout(() => clearInterval(interval), 5000);
      }, { immediate: true });

      // 返回包装组件
      return {
        setup() {
          return () =>
            h(
              'div',
              {
                class: `min-h-screen transition-colors duration-200 ${
                  isDark.value
                    ? 'bg-neutral-900 text-neutral-100'
                    : 'bg-white text-neutral-900'
                }`,
                style: {
                  padding: '1rem',
                  minHeight: '100vh',
                  backgroundColor: isDark.value ? '#0f0f0f' : '#ffffff',
                  color: isDark.value ? '#f5f5f5' : '#1f1f1f',
                },
              },
              [h(story())]
            );
        },
        beforeUnmount() {
          // 清理事件监听器
          channel.off(DARK_MODE_EVENT_NAME, handleDarkModeChange);
        }
      };
    },
  ],
};

export default preview; 
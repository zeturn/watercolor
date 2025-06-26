import '../src/styles/index.css'
import React from 'react'

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
        { name: 'auto', value: 'transparent' },
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
    darkMode: {
      current: 'light',
      stylePreview: true,
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%',
          },
        },
      },
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
    colorTheme: {
      description: '颜色主题',
      defaultValue: 'theme-ocean',
      toolbar: {
        title: '配色',
        icon: 'paintbrush',
        items: [
          { value: 'theme-ocean', title: 'Ocean' },
          { value: 'theme-forest', title: 'Forest' },
          { value: 'theme-sunset', title: 'Sunset' },
          { value: 'theme-violet', title: 'Violet' },
          { value: 'theme-rose', title: 'Rose' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme, colorTheme } = context.globals;
      
      React.useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        
        // 处理明暗模式
        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        // 处理颜色主题
        const colorThemes = ['theme-ocean', 'theme-forest', 'theme-sunset', 'theme-violet', 'theme-rose'];
        colorThemes.forEach((cls) => root.classList.remove(cls));
        root.classList.add(colorTheme);

        // 设置CSS变量来控制Storybook的UI颜色
        if (theme === 'dark') {
          root.style.setProperty('--sb-color-bg', '#0f0f0f');
          root.style.setProperty('--sb-color-bg-alt', '#1a1a1a');
          root.style.setProperty('--sb-color-border', '#2a2a2a');
          root.style.setProperty('--sb-color-text', '#f5f5f5');
          root.style.setProperty('--sb-color-text-inverse', '#0f0f0f');
        } else {
          root.style.setProperty('--sb-color-bg', '#ffffff');
          root.style.setProperty('--sb-color-bg-alt', '#f8f8f8');
          root.style.setProperty('--sb-color-border', '#e5e5e5');
          root.style.setProperty('--sb-color-text', '#1f1f1f');
          root.style.setProperty('--sb-color-text-inverse', '#ffffff');
        }

        // 同步 Storybook 的背景色
        const storybookRoot = document.getElementById('storybook-root');
        if (storybookRoot) {
          storybookRoot.style.backgroundColor = theme === 'dark' ? '#0f0f0f' : '#ffffff';
        }

        // 设置 body 背景色以确保完整的暗黑模式体验
        body.style.backgroundColor = theme === 'dark' ? '#0f0f0f' : '#ffffff';
        body.style.color = theme === 'dark' ? '#f5f5f5' : '#1f1f1f';

        // 特别处理组件预览区域的背景
        const previewIframe = document.querySelector('#storybook-preview-iframe');
        if (previewIframe) {
          const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
          if (iframeDoc && iframeDoc.body) {
            iframeDoc.body.style.backgroundColor = theme === 'dark' ? '#0f0f0f' : '#ffffff';
            iframeDoc.body.style.color = theme === 'dark' ? '#f5f5f5' : '#1f1f1f';
            if (iframeDoc.documentElement) {
              iframeDoc.documentElement.classList.remove('light', 'dark');
              iframeDoc.documentElement.classList.add(theme);
              colorThemes.forEach((cls) => iframeDoc.documentElement.classList.remove(cls));
              iframeDoc.documentElement.classList.add(colorTheme);
            }
          }
        }

        // 添加自定义样式来处理边框和背景
        const existingStyle = document.getElementById('storybook-theme-style');
        if (existingStyle) {
          existingStyle.remove();
        }

        const style = document.createElement('style');
        style.id = 'storybook-theme-style';
        style.textContent = `
          .sb-show-main {
            background-color: ${theme === 'dark' ? '#0f0f0f' : '#ffffff'} !important;
          }
          
          .sb-main-padded {
            background-color: ${theme === 'dark' ? '#0f0f0f' : '#ffffff'} !important;
            border: ${theme === 'dark' ? '1px solid #2a2a2a' : '1px solid #e5e5e5'} !important;
          }

          #storybook-preview-iframe {
            background-color: ${theme === 'dark' ? '#0f0f0f' : '#ffffff'} !important;
            border: ${theme === 'dark' ? '1px solid #2a2a2a' : '1px solid #e5e5e5'} !important;
          }

          .sb-show-main .sb-main-padded {
            background: ${theme === 'dark' ? '#0f0f0f' : '#ffffff'} !important;
          }

          [data-side="right"] {
            background-color: ${theme === 'dark' ? '#1a1a1a' : '#ffffff'} !important;
            border-left: ${theme === 'dark' ? '1px solid #2a2a2a' : '1px solid #e5e5e5'} !important;
          }
        `;
        document.head.appendChild(style);

        // 持久化
        localStorage.setItem('storybook-theme', theme);
        localStorage.setItem('storybook-color-theme', colorTheme);
      }, [theme, colorTheme]);
      
      return (
        <div 
          className={`min-h-screen transition-colors duration-200 ${
            theme === 'dark' 
              ? 'bg-neutral-900 text-neutral-100' 
              : 'bg-white text-neutral-900'
          }`}
          style={{
            padding: '1rem',
            minHeight: '100vh',
            backgroundColor: theme === 'dark' ? '#0f0f0f' : '#ffffff',
            color: theme === 'dark' ? '#f5f5f5' : '#1f1f1f',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
}

export default preview 
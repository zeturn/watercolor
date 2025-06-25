import React from 'react';
import Marquee from '@/components/Marquee/Marquee.jsx';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Marquee',
  component: Marquee,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '滚动文本内容',
    },
    speed: {
      control: { type: 'number', min: 1, max: 200 },
      description: '滚动速度 (1-200)',
    },
    direction: {
      control: { type: 'select' },
      options: ['left', 'right', 'up', 'down'],
      description: '滚动方向',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'gradient'],
      description: '外观变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '组件尺寸',
    },
    pauseOnHover: {
      control: 'boolean',
      description: '鼠标悬停时暂停',
    },
    loop: {
      control: 'boolean',
      description: '无限循环',
    },
    showGradient: {
      control: 'boolean',
      description: '显示渐变遮罩',
    },
    showControls: {
      control: 'boolean',
      description: '显示控制按钮',
    },
    allowReverse: {
      control: 'boolean',
      description: '允许反向',
    },
    allowSpeedControl: {
      control: 'boolean',
      description: '允许速度控制',
    },
    autoStart: {
      control: 'boolean',
      description: '自动开始',
    },
    loading: {
      control: 'boolean',
      description: '加载状态',
    },
    height: {
      control: 'text',
      description: '组件高度',
    },
    backgroundColor: {
      control: 'color',
      description: '背景颜色',
    },
    textColor: {
      control: 'color',
      description: '文字颜色',
    },
    onStart: { action: 'start' },
    onPause: { action: 'pause' },
    onResume: { action: 'resume' },
    onComplete: { action: 'complete' },
    onDirectionChange: { action: 'direction-change' },
    onSpeedChange: { action: 'speed-change' },
  },
};

const Template = (args) => (
    <div className="w-full p-8">
      <Marquee {...args} />
    </div>
);

export const Default = Template.bind({});
Default.args = {
    text: '欢迎来到 Watercolor UI 组件库！这是一个现代化的 React & Vue 组件库。',
    speed: 50,
    direction: 'left',
    variant: 'default',
    size: 'md',
    pauseOnHover: false,
    loop: true,
    showGradient: true,
    showControls: false,
    allowReverse: true,
    allowSpeedControl: true,
    autoStart: true,
    loading: false,
    height: 'auto',
    backgroundColor: '',
    textColor: '',
    onStart: action('start'),
    onPause: action('pause'),
    onResume: action('resume'),
    onComplete: action('complete'),
    onDirectionChange: action('direction-change'),
    onSpeedChange: action('speed-change'),
};

export const NewsBar = (args) => (
    <div className="w-full">
        <div className="p-4 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">新闻公告栏</h3>
          <p className="text-gray-600 text-sm mb-4">常用于网站顶部的重要通知滚动显示</p>
        </div>
        <Marquee {...args} />
    </div>
);
NewsBar.args = {
    ...Default.args,
    text: '🔥 重要通知：系统维护将于今晚22:00-24:00进行，期间可能影响部分功能使用  |  💡 新功能上线：支持暗色模式和多语言切换  |  📢 活动预告：双十一大促即将开始，敬请期待！',
    speed: 60,
    variant: 'filled',
    pauseOnHover: true,
    showControls: true,
    height: '50px',
    backgroundColor: '#3b82f6',
    textColor: 'white',
};

import React from 'react';
import HoverCard from '@/components/HoverCard/HoverCard';
import { action } from 'storybook/actions';

export default {
  title: 'Components/HoverCard (React)',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    triggerText: {
      control: 'text',
      description: '触发元素的文本',
    },
    cardData: {
      control: 'object',
      description: '卡片数据对象',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled', 'minimal'],
      description: '触发器变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '触发器大小',
    },
    cardSize: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '卡片大小',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '卡片位置',
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '显示延迟(毫秒)',
    },
    hideDelay: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: '隐藏延迟(毫秒)',
    },
    showArrow: {
      control: 'boolean',
      description: '是否显示箭头',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    onShow: { action: 'show' },
    onHide: { action: 'hide' },
    onAction: { action: 'action' },
  },
};

const Template = (args) => <HoverCard {...args} />;

export const Default = {
  args: {
    triggerText: '悬停查看详情',
    cardData: {
      title: '用户信息',
      description: '这是一个用户信息预览卡片，显示了基本的用户详情。',
      image: 'https://avatars.githubusercontent.com/u/62530500?v=4',
      imageAlt: '用户头像',
      meta: ['在线', '最近活跃'],
      actions: [
        { label: '查看资料', onClick: action('查看资料') },
        { label: '发送消息', onClick: action('发送消息') }
      ]
    },
    variant: 'default',
    size: 'md',
    cardSize: 'md',
    position: 'top',
    delay: 300,
    hideDelay: 100,
    showArrow: true,
    disabled: false,
    onShow: action('show'),
    onHide: action('hide'),
  },
  render: (args) => (
    <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem', marginTop: '16rem' }}>
      <p style={{ textAlign: 'center', color: 'var(--wc-text-secondary)', marginBottom: '1rem' }}>
        将鼠标悬停在下面的文本上查看预览卡片
      </p>
      <HoverCard {...args} />
    </div>
  ),
};

export const ProductPreview = {
    args: {
      triggerText: 'MacBook Pro 16"',
      cardData: {
        title: 'MacBook Pro 16英寸',
        description: '配备M3 Max芯片的强大笔记本电脑，专为专业用户设计。',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=Nys1UFFBTmI1T0VnWWNyeEZhdDFYamhTSEZFNjlmT2xUUDNBTjljV1BxWVk4UDMvOWNCVUEyZk1VN2FtQlpZWXZvdUZlR0V0VUdJSjBWaDVNVG95YlBROXI4TlIyY1pzUUZwNVlXcEFNb2c',
        imageAlt: 'MacBook Pro',
        meta: ['现货', '¥25,999'],
        actions: [
          { label: '立即购买', onClick: action('立即购买') },
          { label: '加入购物车', onClick: action('加入购物车') }
        ]
      },
      variant: 'outlined',
      size: 'md',
      cardSize: 'lg',
      position: 'bottom',
      delay: 200,
      hideDelay: 150,
      showArrow: true,
      disabled: false,
      onShow: action('show'),
      onHide: action('hide'),
    },
    render: (args) => (
        <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem', marginTop: '16rem' }}>
            <div style={{ backgroundColor: 'var(--wc-bg-surface)', padding: '1rem', borderRadius: 'var(--wc-radius-2xl)' }}>
                <h3 style={{ fontSize: 'var(--wc-font-size-md)', fontWeight: 'var(--wc-font-weight-medium)', marginBottom: '0.5rem' }}>热门产品</h3>
                <p style={{ color: 'var(--wc-text-secondary)' }}>
                    查看我们最新的
                    <HoverCard {...args} />
                    型号，性能强劲，设计精美。
                </p>
            </div>
        </div>
    ),
};
  
export const UserMention = {
    args: {
        triggerText: '@zeturn',
        cardData: {
          title: 'zeturn',
          description: '前端开发工程师，专注于Vue.js和React开发，3年工作经验。后端开发工程师，专注于PHP和Python开发，5年工作经验。',
          image: 'https://avatars.githubusercontent.com/u/62530500?v=4',
          imageAlt: 'zeturn头像',
          meta: ['开发组', '在线'],
          actions: [
            { label: '发私信', onClick: action('发私信') },
            { label: '查看资料', onClick: action('查看资料') }
          ]
        },
        variant: 'filled',
        size: 'sm',
        cardSize: 'md',
        position: 'right',
        delay: 400,
        hideDelay: 100,
        showArrow: true,
        disabled: false,
        onShow: action('show'),
        onHide: action('hide'),
    },
    render: (args) => (
        <div style={{ width: '100%', maxWidth: '28rem', padding: '2rem', marginTop: '16rem' }}>
            <p style={{ color: 'var(--wc-text-secondary)', lineHeight: '1.5' }}>
                项目进度更新：
                <HoverCard {...args} />
                已经完成了新功能的开发，代码已提交审核。
            </p>
        </div>
    ),
};

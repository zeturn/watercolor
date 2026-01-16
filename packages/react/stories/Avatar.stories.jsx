import Avatar from '@/components/Avatar/Avatar.jsx'
import React from 'react'

export default {
  title: 'Components/Avatar (React)',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: '水彩设计系统的头像组件，支持图片、文字和自定义内容。提供多种尺寸、形状和颜色主题。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: '头像图片链接',
      control: { type: 'text' },
    },
    alt: {
      description: '图片替代文本',
      control: { type: 'text' },
    },
    size: {
      description: '头像尺寸',
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      description: '头像形状',
      control: { type: 'select' },
      options: ['circular', 'rounded', 'square'],
    },
    color: {
      description: '背景颜色主题（当没有图片时）',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    children: {
      description: '显示的文字内容（会自动生成首字母）',
      control: { type: 'text' },
    },
    className: {
      description: '额外的 CSS 类名',
      control: { type: 'text' },
    },
    style: {
      description: '内联样式对象',
      control: { type: 'object' },
    },
  },
}

const Template = (args) => <Avatar {...args} />

export const Primary = {
  render: Template,
  args: {
    children: 'John Doe',
    size: 'md',
    variant: 'circular',
    color: 'primary',
  },
}

export const WithImage = {
  render: Template,
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: '用户头像',
    size: 'md',
  },
}

export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((s) => (
        <div key={s} style={{ textAlign: 'center' }}>
          <Avatar children={s.toUpperCase()} size={s} color='primary' />
          <p style={{ fontSize: 12, marginTop: 8 }}>{s.toUpperCase()}</p>
        </div>
      ))}
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar children='圆形' variant='circular' color='primary' size='lg' />
        <div>
          <h4 style={{ margin: 0 }}>Circular（圆形）</h4>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>最常见的头像形状</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar children='圆角' variant='rounded' color='success' size='lg' />
        <div>
          <h4 style={{ margin: 0 }}>Rounded（圆角矩形）</h4>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>现代化的圆角设计</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Avatar children='方形' variant='square' color='warning' size='lg' />
        <div>
          <h4 style={{ margin: 0 }}>Square（方形）</h4>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>简洁的方形设计</p>
        </div>
      </div>
    </div>
  ),
}

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {['default', 'primary', 'secondary', 'success', 'warning', 'error'].map((c) => (
        <Avatar key={c} children={c.charAt(0).toUpperCase()} color={c} size='md' />
      ))}
    </div>
  ),
} 
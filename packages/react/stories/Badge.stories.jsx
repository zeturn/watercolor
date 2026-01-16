import React from 'react'
import Badge from '@/components/Badge/Badge.jsx'

export default {
  title: 'Components/Badge (React)',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '徽章变体',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '徽章尺寸',
    },
    dot: {
      control: 'boolean',
      description: '是否为圆点模式',
    },
    children: {
      control: 'text',
      description: '徽章文本',
    },
  },
}

export const Default = {
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
    children: '徽章文本',
  },
  render: (args) => (
    <Badge 
      variant={args.variant}
      size={args.size}
      dot={args.dot}
    >
      {args.dot ? '' : args.children}
    </Badge>
  ),
}

export const Variants = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary">主要</Badge>
      <Badge variant="secondary">次要</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">警告</Badge>
      <Badge variant="error">错误</Badge>
      <Badge variant="purple">紫色</Badge>
      <Badge variant="orange">橙色</Badge>
      <Badge variant="cyan">青色</Badge>
      <Badge variant="pink">粉色</Badge>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm" variant="primary">小徽章</Badge>
      <Badge size="md" variant="primary">中徽章</Badge>
      <Badge size="lg" variant="primary">大徽章</Badge>
    </div>
  ),
}

export const Dots = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge dot variant="primary" />
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
      <Badge dot variant="error" />
      <Badge dot variant="purple" />
      <Badge dot variant="orange" />
    </div>
  ),
}

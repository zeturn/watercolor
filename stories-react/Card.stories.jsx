import React from 'react'
import Card from '@/components/Card/Card.jsx'

export default {
  title: 'Components/Card (React)',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '卡片标题',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'minimal', 'elevated'],
      description: '卡片变体样式',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: '颜色主题',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '尺寸大小',
    },
    interactive: {
      control: 'boolean',
      description: '是否启用交互效果（hover动画）',
    },
    noBorder: {
      control: 'boolean',
      description: '是否无边框（默认无边框）',
    },
  },
}

export const Default = {
  args: {
    title: '卡片标题',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    interactive: true,
    noBorder: true,
  },
  render: (args) => (
    <div className="w-96">
      <Card 
        title={args.title}
        variant={args.variant}
        color={args.color}
        size={args.size}
        interactive={args.interactive}
        noBorder={args.noBorder}
      >
        <p className="opacity-80">
          这是一个简洁现代的卡片组件，默认无边框无阴影的设计。
          浅灰色背景，hover时颜色会变深，并带有轻微的上移动画效果。
        </p>
      </Card>
    </div>
  ),
}

export const Colors = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card title="默认色（灰色）" color="default">
        <p className="opacity-80">
          这是默认的浅灰色卡片，简洁清爽的无边框设计。
        </p>
      </Card>
      
      <Card title="主题色（蓝色）" color="primary">
        <p className="opacity-80">
          使用主题蓝色的卡片，适合重要信息展示。
        </p>
      </Card>
      
      <Card title="成功色（绿色）" color="success">
        <p className="opacity-80">
          成功状态的绿色卡片，适合显示成功信息。
        </p>
      </Card>
      
      <Card title="警告色（橙色）" color="warning">
        <p className="opacity-80">
          警告状态的橙色卡片，用于提醒用户注意。
        </p>
      </Card>
      
      <Card title="错误色（红色）" color="error">
        <p className="opacity-80">
          错误状态的红色卡片，用于显示错误信息。
        </p>
      </Card>
      
      <Card title="信息色（青色）" color="info">
        <p className="opacity-80">
          信息提示的青色卡片，用于一般信息展示。
        </p>
      </Card>
    </div>
  ),
}

export const Variants = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">填充样式（默认）</h3>
        <Card title="填充样式卡片" variant="filled">
          <p className="opacity-80">
            这是默认的填充样式，浅灰色背景，无边框无阴影。
          </p>
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">边框样式</h3>
        <Card title="边框样式卡片" variant="outlined">
          <p className="opacity-80">
            透明背景，带有较粗的边框，hover时显示浅色背景。
          </p>
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">简约样式</h3>
        <Card title="简约样式卡片" variant="minimal">
          <p className="opacity-80">
            最简洁的样式，无边框，透明背景，内边距较小。
          </p>
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">立体样式</h3>
        <Card title="立体样式卡片" variant="elevated">
          <p className="opacity-80">
            带有阴影效果的立体样式，这是唯一有阴影的变体。
          </p>
        </Card>
      </div>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">小尺寸</h3>
        <Card title="小卡片" size="small">
          <p className="opacity-80">内边距较小的紧凑卡片。</p>
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">中等尺寸（默认）</h3>
        <Card title="中等卡片" size="medium">
          <p className="opacity-80">标准尺寸的卡片，平衡美观与空间利用。</p>
        </Card>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">大尺寸</h3>
        <Card title="大卡片" size="large">
          <p className="opacity-80">内边距较大的宽松卡片，适合重要内容展示。</p>
        </Card>
      </div>
    </div>
  ),
}

export const Interactive = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card title="可交互卡片" interactive={true}>
        <p className="opacity-80">
          启用了交互效果，鼠标悬停时会有动画效果。
        </p>
      </Card>
      
      <Card title="静态卡片" interactive={false}>
        <p className="opacity-80">
          禁用了交互效果，鼠标悬停时无变化。
        </p>
      </Card>
    </div>
  ),
}

export const WithoutTitle = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <p className="opacity-80">
          这是一个没有标题的卡片，只包含内容部分。
        </p>
      </Card>
    </div>
  ),
}

import React from 'react'
import Button from '@/components/Button/Button.jsx'

export default {
  title: 'Components/Button (React)',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'filled', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '按钮变体',
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: '按钮样式模式',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '按钮大小',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args}>按钮</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
}

export const Filled = Template.bind({})
Filled.args = {
  ...Primary.args,
  variant: 'filled',
}

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <Button size="sm">小按钮</Button>
    <Button size="md">中等按钮</Button>
    <Button size="lg">大按钮</Button>
  </div>
)

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="primary">主要按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="filled">填充按钮</Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="success">成功按钮</Button>
      <Button variant="warning">警告按钮</Button>
      <Button variant="error">错误按钮</Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="purple">紫色按钮</Button>
      <Button variant="orange">橙色按钮</Button>
      <Button variant="cyan">青色按钮</Button>
      <Button variant="pink">粉色按钮</Button>
    </div>
  </div>
)

export const Disabled = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
    <Button variant="primary" disabled>
      禁用主要
    </Button>
    <Button variant="secondary" disabled>
      禁用次要
    </Button>
    <Button variant="filled" disabled>
      禁用填充
    </Button>
  </div>
)

export const ButtonStyles = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '600' }}>默认样式 (Default)</h3>
      <p style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>只有彩色的字，没有背景，hover时才有浅色的背景，没有边框</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant="primary" buttonStyle="default">
          主要按钮
        </Button>
        <Button variant="success" buttonStyle="default">
          成功按钮
        </Button>
        <Button variant="warning" buttonStyle="default">
          警告按钮
        </Button>
        <Button variant="error" buttonStyle="default">
          错误按钮
        </Button>
        <Button variant="purple" buttonStyle="default">
          紫色按钮
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '600' }}>边框样式 (Outlined)</h3>
      <p style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>只有彩色的字，没有背景，hover时才有浅色的背景，有边框</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant="primary" buttonStyle="outlined">
          主要按钮
        </Button>
        <Button variant="success" buttonStyle="outlined">
          成功按钮
        </Button>
        <Button variant="warning" buttonStyle="outlined">
          警告按钮
        </Button>
        <Button variant="error" buttonStyle="outlined">
          错误按钮
        </Button>
        <Button variant="purple" buttonStyle="outlined">
          紫色按钮
        </Button>
      </div>
    </div>

    <div>
      <h3 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: '600' }}>填充样式 (Filled)</h3>
      <p style={{ marginBottom: '12px', fontSize: '14px', color: '#6b7280' }}>只有白色的字，彩色填充背景，hover时有更深色的背景</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Button variant="primary" buttonStyle="filled">
          主要按钮
        </Button>
        <Button variant="success" buttonStyle="filled">
          成功按钮
        </Button>
        <Button variant="warning" buttonStyle="filled">
          警告按钮
        </Button>
        <Button variant="error" buttonStyle="filled">
          错误按钮
        </Button>
        <Button variant="purple" buttonStyle="filled">
          紫色按钮
        </Button>
      </div>
    </div>
  </div>
)

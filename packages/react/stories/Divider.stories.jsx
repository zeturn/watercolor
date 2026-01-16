import React from 'react'
import Divider from '@/components/Divider/Divider.jsx'

export default {
  title: 'Components/Divider (React)',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted'],
      description: '分割线变体',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: '分割线方向',
    },
    flexItem: {
      control: 'boolean',
      description: '是否为 flex 项目',
    },
    children: {
      control: 'text',
      description: '分割线文字内容',
    },
  },
}

export const Horizontal = {
  args: {
    variant: 'solid',
    orientation: 'horizontal',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>内容上方</p>
      <Divider {...args} />
      <p>内容下方</p>
    </div>
  ),
}

export const HorizontalDashed = {
  args: {
    variant: 'dashed',
    orientation: 'horizontal',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>内容上方</p>
      <Divider {...args} />
      <p>内容下方</p>
    </div>
  ),
}

export const HorizontalDotted = {
  args: {
    variant: 'dotted',
    orientation: 'horizontal',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>内容上方</p>
      <Divider {...args} />
      <p>内容下方</p>
    </div>
  ),
}

export const HorizontalWithText = {
  args: {
    variant: 'solid',
    orientation: 'horizontal',
    flexItem: false,
    children: '或者',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>登录方式</p>
      <Divider {...args} />
      <p>其他方式</p>
    </div>
  ),
}

export const HorizontalWithTextDashed = {
  args: {
    variant: 'dashed',
    orientation: 'horizontal',
    flexItem: false,
    children: '和',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <p>步骤一</p>
      <Divider {...args} />
      <p>步骤二</p>
    </div>
  ),
}

export const Vertical = {
  args: {
    variant: 'solid',
    orientation: 'vertical',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100px' }}>
      <div>项目 1</div>
      <Divider {...args} />
      <div>项目 2</div>
      <Divider {...args} />
      <div>项目 3</div>
    </div>
  ),
}

export const VerticalDashed = {
  args: {
    variant: 'dashed',
    orientation: 'vertical',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100px' }}>
      <div>项目 1</div>
      <Divider {...args} />
      <div>项目 2</div>
      <Divider {...args} />
      <div>项目 3</div>
    </div>
  ),
}

export const VerticalDotted = {
  args: {
    variant: 'dotted',
    orientation: 'vertical',
    flexItem: false,
    children: '',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100px' }}>
      <div>项目 1</div>
      <Divider {...args} />
      <div>项目 2</div>
      <Divider {...args} />
      <div>项目 3</div>
    </div>
  ),
}

export const VerticalWithText = {
  args: {
    variant: 'solid',
    orientation: 'vertical',
    flexItem: false,
    children: '或',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100px' }}>
      <div>选项 A</div>
      <Divider {...args} />
      <div>选项 B</div>
    </div>
  ),
}

export const FlexItem = {
  args: {
    variant: 'solid',
    orientation: 'vertical',
    flexItem: true,
    children: '',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '150px' }}>
      <div>内容 A</div>
      <Divider {...args} />
      <div>内容 B</div>
    </div>
  ),
}

export const WithinText = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3>组件展示</h3>
      
      <h4>基础分割线</h4>
      <Divider />
      
      <h4>虚线分割线</h4>
      <Divider variant="dashed" />
      
      <h4>点线分割线</h4>
      <Divider variant="dotted" />
      
      <h4>带文字的分割线</h4>
      <p>登录方式</p>
      <Divider>或者</Divider>
      <p>其他方式</p>
      
      <h4>垂直分割线</h4>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>首页</span>
        <Divider orientation="vertical" />
        <span>分类</span>
        <Divider orientation="vertical" />
        <span>关于</span>
      </div>
    </div>
  ),
}

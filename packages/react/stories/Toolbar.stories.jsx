import React from 'react'
import Toolbar from '@/components/Toolbar/Toolbar.jsx'
import Button from '@/components/Button/Button.jsx'

export default {
  title: 'Components/Toolbar (React)',
  component: Toolbar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['regular', 'dense'],
      description: '高度变体',
    },
    disableGutters: {
      control: 'boolean',
      description: '禁用左右内边距',
    },
    className: {
      control: 'text',
      description: '附加类名',
    },
  },
}

const Template = (args) => (
  <Toolbar {...args}>
    <div className="flex-1">标题</div>
    <Button size="sm" variant="primary">
      操作
    </Button>
  </Toolbar>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'regular',
  disableGutters: false,
}

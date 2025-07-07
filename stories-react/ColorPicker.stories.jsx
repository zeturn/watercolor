import ColorPicker from '@/components/ColorPicker/ColorPicker.jsx'
import React, { useState } from 'react'

export default {
  title: 'Components/ColorPicker (React)',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'color',
      description: 'Selected color',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the color preview',
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the color preview',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the color picker',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
    onChange: { action: 'change' },
  },
}

const Template = (args) => {
  const [color, setColor] = useState(args.value)

  return (
    <>
      <ColorPicker {...args} value={color} onChange={setColor} />
      <span style={{ marginLeft: 12 }}>当前颜色：{color}</span>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  value: '#409eff',
  size: 'md',
  shape: 'circle',
  disabled: false,
}

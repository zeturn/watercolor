import React, { useState } from 'react'
import VerificationCodeInput from '@/components/Input/VerificationCodeInput.jsx'
import { action } from 'storybook/actions'

export default {
  title: 'Components/Input/VerificationCodeInput (React)s',
  component: VerificationCodeInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 1, step: 1 },
      description: '验证码长度'
    },
    autoFocus: {
      control: 'boolean',
      description: '是否自动聚焦'
    },
    value: {
      control: 'text',
      description: '受控值'
    },
    onChange: {
      action: 'changed',
      description: '值变化事件'
    },
    onComplete: {
      action: 'completed',
      description: '输入完成事件'
    }
  }
}

const Template = (args) => {
  const [value, setValue] = useState(args.value || '')

  const handleChange = (val) => {
    setValue(val)
    args.onChange?.(val)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <VerificationCodeInput {...args} value={value} onChange={handleChange} />
      <p style={{ fontSize: '14px', color: 'gray' }}>当前值: {value}</p>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  length: 6,
  autoFocus: false,
  onComplete: action('completed')
}

export const FourDigits = Template.bind({})
FourDigits.args = {
  length: 4,
  autoFocus: true,
  onComplete: action('completed')
} 
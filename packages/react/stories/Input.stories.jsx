import React, { useState } from 'react'
import Input from '@/components/Input/Input.jsx'
import { action } from 'storybook/actions'

export default {
  title: 'Components/Input (React)',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: '输入框类型',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '输入框大小',
    },
    disabled: { control: 'boolean', description: '是否禁用' },
    readonly: { control: 'boolean', description: '是否只读' },
    required: { control: 'boolean', description: '是否必填' },
    label: { control: 'text', description: '标签文本' },
    placeholder: { control: 'text', description: '占位符文本' },
    helpText: { control: 'text', description: '帮助文本' },
    error: { control: 'text', description: '错误信息' },
    value: {
      control: 'text',
      description: '输入框的值（受控'
    },
    onChange: {
      action: 'changed',
      description: '值变化事件'
    }
  },
}

const Template = (args) => {
  const [value, setValue] = useState(args.value || '')
  
  const handleChange = (e) => {
    setValue(e.target.value)
    args.onChange(e)
  }
  
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <Input {...args} value={value} onChange={handleChange} />
      <p style={{ marginTop: '8px', fontSize: '14px', color: '#6b7280' }}>当前值: {value}</p>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: '用户名',
  placeholder: '请输入用户名',
  size: 'md',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  helpText: '',
  error: '',
  onChange: action('changed'),
}

export const WithLabel = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="电子邮箱"
          type="email"
          placeholder="请输入邮箱地址"
          helpText="我们将向此邮箱发送确认信息"
          required
        />
      </div>
    )
  }
}

export const WithError = {
  render: () => {
    const [value, setValue] = useState('invalid-email')
    return (
      <div className="w-80">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="电子邮箱"
          type="email"
          placeholder="请输入邮箱地址"
          error="请输入有效的邮箱地址"
          required
        />
      </div>
    )
  }
}

export const Sizes = {
  render: () => {
    const [smallValue, setSmallValue] = useState('')
    const [mediumValue, setMediumValue] = useState('')
    const [largeValue, setLargeValue] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Input
          value={smallValue}
          onChange={(e) => setSmallValue(e.target.value)}
          label="小尺寸"
          size="sm"
          placeholder="小尺寸输入框"
        />
        <Input
          value={mediumValue}
          onChange={(e) => setMediumValue(e.target.value)}
          label="中等尺寸"
          size="md"
          placeholder="中等尺寸输入框"
        />
        <Input
          value={largeValue}
          onChange={(e) => setLargeValue(e.target.value)}
          label="大尺寸"
          size="lg"
          placeholder="大尺寸输入框"
        />
      </div>
    )
  }
}

export const States = {
  render: () => {
    const [normalValue, setNormalValue] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}  >
        <Input
          value={normalValue}
          onChange={(e) => setNormalValue(e.target.value)}
          label="正常状态"
          placeholder="可正常输入"
        />
        <Input
          value="禁用状态"
          label="禁用状态"
          disabled
        />
        <Input
          value="只读状态"
          label="只读状态"
          readonly
        />
      </div>
    )
  }
}

import React, { useState } from 'react'
import Input from '@/components/Input/Input.jsx'

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
    helperText: { control: 'text', description: '帮助文本' },
    error: { control: 'text', description: '错误信息' },
    onChange: { action: 'changed' },
  },
}

const ControlledTemplate = (args) => {
  const [value, setValue] = useState('')
  return (
    <div className="w-80">
      <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      <p className="mt-2 text-sm text-neutral-500">当前值: {value}</p>
    </div>
  )
}

export const Default = ControlledTemplate.bind({})
Default.args = {
  label: '用户名',
  placeholder: '请输入用户名',
  size: 'md',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  helperText: '',
  error: '',
}

export const WithLabel = () => {
  const [value, setValue] = useState('')
  return (
    <div className="w-80">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="电子邮箱"
        type="email"
        placeholder="请输入邮箱地址"
        helperText="我们将向此邮箱发送确认信息"
        required
      />
    </div>
  )
}

export const WithError = () => {
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

export const Sizes = () => {
  const [small, setSmall] = useState('')
  const [medium, setMedium] = useState('')
  const [large, setLarge] = useState('')
  return (
    <div className="space-y-4 w-80">
      <Input value={small} onChange={(e) => setSmall(e.target.value)} label="小尺寸" size="sm" placeholder="小尺寸输入框" />
      <Input value={medium} onChange={(e) => setMedium(e.target.value)} label="中等尺寸" size="md" placeholder="中等尺寸输入框" />
      <Input value={large} onChange={(e) => setLarge(e.target.value)} label="大尺寸" size="lg" placeholder="大尺寸输入框" />
    </div>
  )
}

export const States = () => (
  <div className="space-y-4 w-80">
    <Input label="正常状态" placeholder="可正常输入" />
    <Input label="禁用状态" disabled value="禁用状态" />
    <Input label="只读状态" readonly value="只读状态" />
  </div>
)

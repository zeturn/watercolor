import React, { useState } from 'react'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'

export default {
  title: 'Components/Checkbox (React)',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Watercolor 复选框组件，支持受控/多选/不确定等功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: '当前是否选中',
      control: { type: 'boolean' },
    },
    indeterminate: { description: '是否为不确定状态', control: 'boolean' },
    label: { description: '标签文本', control: 'text' },
    disabled: { description: '是否禁用', control: 'boolean' },
    color: {
      description: '颜色主题',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    size: {
      description: '尺寸',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    onChange: { action: 'change' },
  },
}

const ControlledTemplate = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="space-y-4">
      <Checkbox
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked)
          args.onChange?.(e)
        }}
      />
      <p className="text-sm text-gray-500">当前状态: {checked ? '已选中' : '未选中'}</p>
    </div>
  )
}

export const Primary = ControlledTemplate.bind({})
Primary.args = {
  label: '我同意条款和条件',
  color: 'primary',
  size: 'md',
  disabled: false,
}

export const Colors = () => {
  const [state, setState] = useState({
    primary: true,
    secondary: true,
    success: true,
    error: true,
    warning: true,
    info: true,
  })
  const toggle = (key) => (e) => setState((s) => ({ ...s, [key]: e.target.checked }))
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">颜色主题</h3>
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info']).map((clr) => (
        <Checkbox
          key={clr}
          checked={state[clr]}
          onChange={toggle(clr)}
          label={clr.charAt(0).toUpperCase() + clr.slice(1)}
          color={clr}
        />
      ))}
    </div>
  )
}

export const Sizes = () => {
  const [sizes, setSizes] = useState({ sm: true, md: true, lg: true })
  const toggle = (key) => (e) => setSizes((s) => ({ ...s, [key]: e.target.checked }))
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">尺寸对比</h3>
      {(['sm', 'md', 'lg']).map((sz) => (
        <Checkbox
          key={sz}
          checked={sizes[sz]}
          onChange={toggle(sz)}
          label={`${sz} 尺寸复选框`}
          size={sz}
        />
      ))}
    </div>
  )
}

export const States = () => {
  const [normal, setNormal] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">各种状态</h3>
      <Checkbox checked={normal} onChange={(e) => setNormal(e.target.checked)} label="正常" />
      <Checkbox checked disabled label="禁用" />
      <Checkbox indeterminate={indeterminate} onChange={() => setIndeterminate(false)} label="不确定" />
    </div>
  )
}

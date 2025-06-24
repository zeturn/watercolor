import React, { useState } from 'react'
import Radio, { RadioGroup } from '@/components/Radio/Radio.jsx'

export default {
  title: 'Components/Radio (React)',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: 'Watercolor 单选按钮组件，支持多种颜色/尺寸，可与 RadioGroup 配合使用。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { description: '单选按钮值', control: 'text' },
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

const Template = (args) => {
  const [selected, setSelected] = useState(args.value)
  return (
    <Radio
      {...args}
      checked={selected === args.value}
      onChange={(val) => {
        setSelected(val)
        args.onChange?.(val)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  value: 'option1',
  label: '选择此选项',
  color: 'primary',
  size: 'md',
  disabled: false,
}

export const Colors = () => {
  const [selected, setSelected] = useState('primary')
  const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info']
  return (
    <div className="flex flex-col gap-4">
      {colors.map((c) => (
        <Radio
          key={c}
          value={c}
          label={c.charAt(0).toUpperCase() + c.slice(1)}
          color={c}
          checked={selected === c}
          onChange={() => setSelected(c)}
        />
      ))}
    </div>
  )
}

export const Sizes = () => {
  const [selected, setSelected] = useState('md')
  const sizes = ['sm', 'md', 'lg']
  return (
    <div className="flex flex-col gap-4">
      {sizes.map((s) => (
        <Radio
          key={s}
          value={s}
          label={`${s} 尺寸单选按钮`}
          size={s}
          checked={selected === s}
          onChange={() => setSelected(s)}
        />
      ))}
    </div>
  )
}

export const States = () => {
  const [selected, setSelected] = useState('checked')
  return (
    <div className="flex flex-col gap-4">
      <Radio value="unchecked" label="未选中状态" checked={selected === 'unchecked'} onChange={() => setSelected('unchecked')} />
      <Radio value="checked" label="选中状态" checked={selected === 'checked'} onChange={() => setSelected('checked')} />
      <Radio value="disabled" label="禁用状态" disabled />
      <Radio value="disabled-checked" label="禁用且选中状态" disabled checked />
    </div>
  )
}

import DatePicker from '@/components/DatePicker/DatePicker.jsx'
import React, { useState } from 'react'

export default {
  title: 'Components/DatePicker (React)',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'date' },
      description: 'Selected date value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    format: {
      control: 'text',
      description: 'Date format (display only)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the picker',
    },
    showToday: {
      control: 'boolean',
      description: 'Display today button (not applicable for native input)',
    },
    minDate: {
      control: { type: 'date' },
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: { type: 'date' },
      description: 'Maximum selectable date',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'filled'],
      description: 'Visual variant',
    },
    onChange: { action: 'change' },
  },
}

const Template = (args) => {
  const [date, setDate] = useState(args.value)

  const handleChange = (d) => {
    setDate(d)
    args.onChange?.(d)
  }

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <DatePicker {...args} value={date} onChange={handleChange} />
      <div className="mt-4 text-sm text-gray-600">
        选中日期: {date ? date.toLocaleDateString() : '无'}
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  value: null,
  placeholder: '请选择日期',
  format: 'YYYY-MM-DD',
  disabled: false,
  showToday: true,
  minDate: null,
  maxDate: null,
  size: 'md',
  variant: 'default',
}

export const WithPreselectedDate = Template.bind({})
WithPreselectedDate.args = {
  ...Default.args,
  value: new Date(),
}

export const WithMinMaxDates = () => {
  const today = new Date()
  const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
  const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
  const [date, setDate] = useState(null)

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>限制日期范围</h3>
      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="选择日期范围内的日期"
        minDate={min}
        maxDate={max}
      />
      <div style={{ marginTop: '16px', fontSize: '12px', color: 'gray' }}>
        <div>最小日期: {min.toLocaleDateString()}</div>
        <div>最大日期: {max.toLocaleDateString()}</div>
      </div>
    </div>
  )
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
  value: new Date(),
}

export const Sizes = () => {
  const [d1, setD1] = useState(null)
  const [d2, setD2] = useState(null)
  const [d3, setD3] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>小尺寸</h3>
        <DatePicker value={d1} onChange={setD1} placeholder="小尺寸日期选择器" size="sm" />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>中等尺寸</h3>
        <DatePicker value={d2} onChange={setD2} placeholder="中等尺寸日期选择器" size="md" />
      </div>
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>大尺寸</h3>
        <DatePicker value={d3} onChange={setD3} placeholder="大尺寸日期选择器" size="lg" />
      </div>
    </div>
  )
}

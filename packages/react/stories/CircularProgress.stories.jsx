import React, { useState } from 'react'
import CircularProgress from '@/components/CircularProgress/CircularProgress.jsx'
import Slider from '@/components/Slider/Slider.jsx'

export default {
  title: 'Components/CircularProgress (React)',
  component: CircularProgress,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['indeterminate', 'determinate'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'inherit'],
    },
    size: { control: 'number' },
    thickness: { control: 'number' },
    showValue: { control: 'boolean' },
  },
}

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? 40)
  const { variant } = args
  
  return (
    <div className="space-y-4 w-64">
      <CircularProgress {...args} variant={variant} value={value} />
      {variant === 'determinate' && (
        <Slider 
          value={value}
          min={0}
          max={100}
          onChange={(newValue) => setValue(newValue)}
        />
      )}
    </div>
  )
}

export const Default = {
  ...Template,
  args: {
    variant: 'indeterminate',
    color: 'primary',
    size: 40,
    thickness: 3.6,
    showValue: false,
  },
  render: Template
}

export const Determinate = {
  args: {
    variant: 'determinate',
    color: 'primary',
    size: 40,
    thickness: 3.6,
    showValue: true,
    value: 75,
  },
  render: Template
}

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} color="primary" />
        <p className="text-sm mt-2">Primary</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} color="secondary" />
        <p className="text-sm mt-2">Secondary</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} color="success" />
        <p className="text-sm mt-2">Success</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} color="warning" />
        <p className="text-sm mt-2">Warning</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} color="error" />
        <p className="text-sm mt-2">Error</p>
      </div>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} size={30} />
        <p className="text-sm mt-2">Small (30px)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} size={40} />
        <p className="text-sm mt-2">Medium (40px)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} size={60} />
        <p className="text-sm mt-2">Large (60px)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} size={80} />
        <p className="text-sm mt-2">Extra Large (80px)</p>
      </div>
    </div>
  ),
}

export const WithValue = {
  render: () => {
    const [value, setValue] = useState(65)
    
    return (
      <div className="space-y-6 max-w-md">
        <div className="text-center">
          <CircularProgress 
            variant="determinate" 
            value={value} 
            size={80} 
            showValue={true}
            color="primary"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            进度值: {value}%
          </label>
          <Slider 
            value={value}
            min={0}
            max={100}
            onChange={setValue}
          />
        </div>
      </div>
    )
  },
}

export const Thickness = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} thickness={2} />
        <p className="text-sm mt-2">Thin (2)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} thickness={3.6} />
        <p className="text-sm mt-2">Default (3.6)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} thickness={6} />
        <p className="text-sm mt-2">Thick (6)</p>
      </div>
      <div className="text-center">
        <CircularProgress variant="determinate" value={75} thickness={10} />
        <p className="text-sm mt-2">Extra Thick (10)</p>
      </div>
    </div>
  ),
}

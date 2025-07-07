import React, { useState } from 'react'
import Countdown from '@/components/Countdown/Countdown.jsx'

export default {
  title: 'Components/Countdown (React)',
  component: Countdown,
  tags: ['autodocs'],
  argTypes: {
    seconds: {
      control: { type: 'number', min: 1, step: 1 },
      description: '初始倒计时秒数',
    },
    autoStart: {
      control: 'boolean',
      description: '是否自动开始',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: '尺寸',
    },
    fontSize: {
      control: 'text',
      description: '字体大小',
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: '颜色主题',
    },
    customColor: {
      control: 'color',
      description: '自定义颜色（优先级更高）',
    },
    warningTime: {
      control: { type: 'number', min: 1, step: 1 },
      description: '触发警告色的剩余秒数',
    },
    onFinish: { action: 'finish' },
  },
}

const Template = (args) => <Countdown {...args} />

export const Default = Template.bind({})
Default.args = {
  seconds: 90,
  autoStart: true,
  size: 'md',
  fontSize: '24px',
  color: 'default',
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  ...Default.args,
  fontSize: '3rem',
  customColor: '#3b82f6',
}

export const Restartable = () => {
  const [key, setKey] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4">
      <Countdown key={key} seconds={10} fontSize="2rem" />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        重新开始
      </button>
    </div>
  )
}

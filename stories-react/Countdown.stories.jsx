import React from 'react'
import Countdown from '@/components/Countdown/Countdown.jsx'

export default {
  title: 'Components/Countdown (React)',
  component: Countdown,
  tags: ['autodocs'],
  argTypes: {
    seconds: {
      control: { type: 'number', min: 1, step: 1 },
      description: '初始倒计时秒数'
    },
    fontSize: {
      control: 'text',
      description: '字体大小'
    },
    color: {
      control: 'color',
      description: '文字颜色'
    },
    onFinish: {
      action: 'finished',
      description: '倒计时结束时触发'
    }
  }
}

export const Basic = {
  args: {
    seconds: 90,
    fontSize: '24px',
    color: '#ff4d4f'
  },
  render: (args) => (
    <Countdown {...args} />
  )
}

export const CustomStyle = {
  args: {
    seconds: 120,
    fontSize: '3rem',
    color: '#3b82f6',
    style: {
      fontFamily: 'monospace',
      fontWeight: 'bold',
      background: '#f0f0f0',
      padding: '1rem 2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }
  },
  render: (args) => (
    <Countdown {...args} />
  )
}

export const Restartable = {
  render: () => {
    const [key, setKey] = React.useState(0)
    const handleRestart = () => setKey(prevKey => prevKey + 1)
    
    return (
      <div className="flex flex-col items-center gap-4">
        <Countdown key={key} seconds={10} fontSize="2rem" />
        <button 
          onClick={handleRestart}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          重新开始
        </button>
      </div>
    )
  }
}

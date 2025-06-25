import React, { useState, useEffect } from 'react'
import Progress from '@/components/Progress/Progress.jsx'

export default {
  title: 'Components/Progress (React)',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 进度条组件，支持多种颜色、尺寸和动画效果。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '进度值（0-100）',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'],
      description: '进度条颜色',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '进度条尺寸',
    },
    showPercent: {
      control: 'boolean',
      description: '显示百分比',
    },
    animated: {
      control: 'boolean',
      description: '动画效果',
    },
    label: {
      control: 'text',
      description: '标签文本',
    },
    className: {
      control: 'text',
      description: '自定义CSS类名',
    },
  },
}

export const Default = {
  args: {
    value: 65,
    color: 'primary',
    size: 'md',
    showPercent: true,
    animated: false,
    label: '完成进度',
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
}

export const Colors = () => {
  const colors = [
    { color: 'primary', value: 75, label: '主色调' },
    { color: 'success', value: 60, label: '成功色' },
    { color: 'warning', value: 45, label: '警告色' },
    { color: 'error', value: 30, label: '错误色' },
    { color: 'purple', value: 85, label: '紫色' },
    { color: 'orange', value: 70, label: '橙色' },
    { color: 'cyan', value: 55, label: '青色' },
    { color: 'pink', value: 40, label: '粉色' },
  ]

  return (
    <div className="space-y-4 w-80">
      {colors.map(({ color, value, label }) => (
        <Progress
          key={color}
          value={value}
          color={color}
          label={label}
          showPercent
        />
      ))}
    </div>
  )
}

export const Sizes = () => {
  const sizes = [
    { size: 'sm', label: '小尺寸' },
    { size: 'md', label: '中尺寸' },
    { size: 'lg', label: '大尺寸' },
  ]

  return (
    <div className="space-y-4 w-80">
      {sizes.map(({ size, label }) => (
        <Progress
          key={size}
          value={65}
          size={size}
          label={label}
          showPercent
        />
      ))}
    </div>
  )
}

export const Animated = () => {
  const progressItems = [
    { value: 45, color: 'primary', label: '正在加载...' },
    { value: 75, color: 'success', label: '上传中...' },
    { value: 30, color: 'warning', label: '处理中...' },
  ]

  return (
    <div className="space-y-4 w-80">
      {progressItems.map(({ value, color, label }, index) => (
        <Progress
          key={index}
          value={value}
          color={color}
          label={label}
          animated
          showPercent
        />
      ))}
    </div>
  )
}

export const InteractiveDemo = () => {
  const [progress, setProgress] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 5
          if (next >= 100) {
            setIsRunning(false)
            return 100
          }
          return next
        })
      }, 200)
    }
    return () => clearInterval(interval)
  }, [isRunning, progress])

  const startProgress = () => {
    setProgress(0)
    setIsRunning(true)
  }

  const resetProgress = () => {
    setIsRunning(false)
    setProgress(0)
  }

  return (
    <div className="w-80 space-y-4">
      <Progress
        value={progress}
        color="primary"
        label="任务执行进度"
        showPercent
        animated={isRunning}
      />
      
      <div className="flex space-x-2">
        <button
          onClick={startProgress}
          disabled={isRunning}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600"
        >
          {isRunning ? '执行中...' : '开始任务'}
        </button>
        
        <button
          onClick={resetProgress}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          重置
        </button>
      </div>
      
      <p className="text-sm text-gray-600">
        状态: {progress >= 100 ? '已完成' : isRunning ? '执行中' : '待开始'}
      </p>
    </div>
  )
}

export const MultiStepProcess = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [stepProgress, setStepProgress] = useState(0)
  
  const steps = [
    { name: '准备数据', color: 'primary' },
    { name: '处理文件', color: 'warning' },
    { name: '验证结果', color: 'purple' },
    { name: '完成', color: 'success' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStepProgress(prev => {
        if (prev >= 100) {
          if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1)
            return 0
          }
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 300)

    return () => clearInterval(interval)
  }, [currentStep])

  const overallProgress = ((currentStep * 100 + stepProgress) / steps.length)

  return (
    <div className="w-96 space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">多步骤处理流程</h3>
        
        <Progress
          value={overallProgress}
          color="primary"
          label="总体进度"
          showPercent
          size="lg"
        />
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep
          const progress = isActive ? stepProgress : isCompleted ? 100 : 0
          
          return (
            <div key={index} className={`p-3 rounded border ${isActive ? 'border-blue-200 bg-blue-50' : 'border-gray-200'}`}>
              <Progress
                value={progress}
                color={step.color}
                label={`${index + 1}. ${step.name}`}
                showPercent
                animated={isActive}
              />
              
              <div className="mt-2 text-xs text-gray-500">
                {isCompleted ? '✅ 已完成' : isActive ? '🔄 进行中' : '⏳ 等待中'}
              </div>
            </div>
          )
        })}
      </div>

      <button
        onClick={() => {
          setCurrentStep(0)
          setStepProgress(0)
        }}
        className="w-full py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        重新开始
      </button>
    </div>
  )
}

export const DashboardStats = () => {
  const stats = [
    { label: '内存使用率', value: 68, color: 'primary', unit: 'GB' },
    { label: 'CPU 负载', value: 45, color: 'success', unit: '%' },
    { label: '磁盘空间', value: 82, color: 'warning', unit: 'TB' },
    { label: '网络带宽', value: 34, color: 'purple', unit: 'Mbps' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 w-96">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <h4 className="font-semibold text-sm mb-2">{stat.label}</h4>
          <Progress
            value={stat.value}
            color={stat.color}
            showPercent
            size="sm"
            animated
          />
          <p className="text-xs text-gray-500 mt-1">
            {stat.value}% of {stat.unit}
          </p>
        </div>
      ))}
    </div>
  )
}

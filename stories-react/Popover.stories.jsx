import React, { useState } from 'react'
import Popover from '@/components/Popover/Popover.jsx'
import '../src/components/Popover/style.css'

export default {
  title: 'Components/Popover (React)',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 弹窗组件，支持多种位置和自定义触发器。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '弹窗位置',
    },
    triggerText: {
      control: 'text',
      description: '触发按钮文本',
    },
    offset: {
      control: { type: 'number', min: 0, max: 50, step: 1 },
      description: '弹窗偏移距离',
    },
    open: {
      control: 'boolean',
      description: '受控模式下的显示状态',
    },
    onOpenChange: {
      action: 'openChange',
      description: '显示状态变化回调',
    },
  },
}

export const Default = {
  args: {
    placement: 'bottom',
    triggerText: '更多信息',
    offset: 8,
  },
  render: (args) => (
    <div className="p-20 text-center">
      <Popover {...args}>
        <div className="p-4 max-w-xs">
          <p className="text-sm text-gray-700">
            这是弹出的内容，可以包含<strong>富文本</strong>或其他组件。
          </p>
        </div>
      </Popover>
    </div>
  ),
}

export const Placements = () => {
  const placements = ['top', 'bottom', 'left', 'right']
  
  return (
    <div className="grid grid-cols-2 gap-8 p-20">
      {placements.map((placement) => (
        <div key={placement} className="flex justify-center">
          <Popover 
            placement={placement}
            triggerText={`${placement} 弹窗`}
          >
            <div className="p-3 bg-white border rounded shadow-lg">
              <p className="text-sm">从{placement}方向弹出的内容</p>
            </div>
          </Popover>
        </div>
      ))}
    </div>
  )
}

export const CustomTrigger = () => {
  return (
    <div className="p-20 text-center space-x-4">
      <Popover 
        trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">自定义按钮</button>}
        placement="bottom"
      >
        <div className="p-4 max-w-sm">
          <h3 className="font-semibold mb-2">自定义触发器</h3>
          <p className="text-sm text-gray-600">使用自定义按钮作为触发器</p>
        </div>
      </Popover>
      
      <Popover 
        trigger={<span className="text-blue-500 underline cursor-pointer">链接触发器</span>}
        placement="top"
      >
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-sm">点击链接触发的弹窗</p>
        </div>
      </Popover>
    </div>
  )
}

export const RichContent = () => {
  return (
    <div className="p-20 text-center space-x-6">
      <Popover 
        triggerText="用户信息"
        placement="bottom"
      >
        <div className="p-4 w-64">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div>
              <h4 className="font-semibold">张三</h4>
              <p className="text-sm text-gray-500">前端开发工程师</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            专注于React和Vue开发，有5年前端开发经验。
          </p>
          <button className="w-full py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            查看详情
          </button>
        </div>
      </Popover>
      
      <Popover 
        triggerText="通知列表"
        placement="left"
      >
        <div className="w-80 max-h-60 overflow-y-auto">
          <div className="p-3 border-b">
            <h4 className="font-semibold">最新通知</h4>
          </div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="p-3 border-b hover:bg-gray-50">
              <p className="font-medium text-sm">系统通知 {item}</p>
              <p className="text-xs text-gray-500 mt-1">
                您有新的消息需要查看，请及时处理。
              </p>
              <span className="text-xs text-blue-500">2小时前</span>
            </div>
          ))}
        </div>
      </Popover>
    </div>
  )
}

export const ControlledMode = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="p-20 text-center space-y-4">
      <div className="space-x-4">
        <button 
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          打开弹窗
        </button>
        <button 
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          关闭弹窗
        </button>
      </div>
      
      <Popover 
        open={open}
        onOpenChange={setOpen}
        triggerText="受控弹窗"
        placement="bottom"
      >
        <div className="p-4 max-w-xs">
          <h3 className="font-semibold mb-2">受控模式</h3>
          <p className="text-sm text-gray-600 mb-3">
            这个弹窗的显示状态由外部控制
          </p>
          <button 
            onClick={() => setOpen(false)}
            className="w-full py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
          >
            关闭
          </button>
        </div>
      </Popover>
      
      <p className="text-sm text-gray-500 mt-4">
        当前状态: {open ? '打开' : '关闭'}
      </p>
    </div>
  )
}

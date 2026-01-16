import React from 'react'
import Status from '@/components/Status/Status.jsx'

export default {
  title: 'Components/Status (React)',
  component: Status,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled'],
      description: '状态类型',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '状态指示器尺寸',
    },
    showText: {
      control: 'boolean',
      description: '是否显示状态文本',
    },
    animated: {
      control: 'boolean',
      description: '是否启用动画效果',
    },
    animationType: {
      control: { type: 'select' },
      options: ['auto', 'pulse', 'spin', 'bounce', 'blink', 'shake', 'breathe', 'ripple', 'glow'],
      description: '动画类型（auto表示根据状态自动选择）',
    },
  },
}

export const Default = {
  args: {
    status: 'default',
    size: 'md',
    showText: false,
    animated: false,
    animationType: 'auto',
  },
}

export const AllStatuses = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <Status status="default" />
        <span className="text-sm">默认</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="success" />
        <span className="text-sm">成功</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="error" />
        <span className="text-sm">失败</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="warning" />
        <span className="text-sm">警告</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="info" />
        <span className="text-sm">信息</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="pending" />
        <span className="text-sm">等待中</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="processing" />
        <span className="text-sm">进行中</span>
      </div>
      <div className="flex items-center gap-2">
        <Status status="cancelled" />
        <span className="text-sm">已取消</span>
      </div>
    </div>
  ),
}

export const WithText = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Status status="success" showText />
      <Status status="error" showText />
      <Status status="warning" showText />
      <Status status="info" showText />
      <Status status="pending" showText />
      <Status status="processing" showText />
      <Status status="cancelled" showText />
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">小:</span>
        <Status size="sm" status="success" />
        <Status size="sm" status="error" />
        <Status size="sm" status="warning" />
        <Status size="sm" status="info" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">中:</span>
        <Status size="md" status="success" />
        <Status size="md" status="error" />
        <Status size="md" status="warning" />
        <Status size="md" status="info" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">大:</span>
        <Status size="lg" status="success" />
        <Status size="lg" status="error" />
        <Status size="lg" status="warning" />
        <Status size="lg" status="info" />
      </div>
    </div>
  ),
}

export const Animated = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h4 className="text-md font-semibold mb-2">自动动画（根据状态类型）</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Status status="success" animated showText />
          <span className="text-sm text-gray-600">成功 - 跳动</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="error" animated showText />
          <span className="text-sm text-gray-600">错误 - 震动</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="warning" animated showText />
          <span className="text-sm text-gray-600">警告 - 闪烁</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="info" animated showText />
          <span className="text-sm text-gray-600">信息 - 扩散</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="pending" animated showText />
          <span className="text-sm text-gray-600">等待中 - 脉冲</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="processing" animated showText />
          <span className="text-sm text-gray-600">进行中 - 旋转</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="cancelled" animated showText />
          <span className="text-sm text-gray-600">已取消 - 呼吸</span>
        </div>
        <div className="flex items-center gap-3">
          <Status status="default" animated showText />
          <span className="text-sm text-gray-600">默认 - 发光</span>
        </div>
      </div>
    </div>
  ),
}

export const CustomAnimations = {
  render: () => (
    <div className="flex flex-col gap-4">
      <h4 className="text-md font-semibold mb-2">自定义动画类型</h4>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="pulse" />
          <span className="text-sm">脉冲动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="spin" />
          <span className="text-sm">旋转动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="bounce" />
          <span className="text-sm">跳动动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="blink" />
          <span className="text-sm">闪烁动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="shake" />
          <span className="text-sm">震动动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="breathe" />
          <span className="text-sm">呼吸动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="ripple" />
          <span className="text-sm">扩散动画</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Status status="success" animated animationType="glow" />
          <span className="text-sm">发光动画</span>
        </div>
      </div>
    </div>
  ),
}

export const UseCase = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">实际应用场景</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>用户注册</span>
          <Status status="success" showText />
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>邮件验证</span>
          <Status status="pending" animated showText />
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>文件上传</span>
          <Status status="processing" animated showText />
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>支付处理</span>
          <Status status="error" showText />
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>订单状态</span>
          <Status status="cancelled" showText />
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <span>系统警告</span>
          <Status status="warning" showText />
        </div>
      </div>
    </div>
  ),
} 
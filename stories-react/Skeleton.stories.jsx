import React from 'react'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'

export default {
  title: 'Components/Skeleton (React)',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '显示内容加载之前的占位符预览。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'rectangular', 'rounded', 'circular'],
      description: '骨架屏的形状变体'
    },
    animation: {
      control: { type: 'select' },
      options: [false, 'pulse', 'wave'],
      description: '动画效果，false表示无动画'
    },
    width: {
      control: { type: 'text' },
      description: '宽度，支持px或百分比'
    },
    height: {
      control: { type: 'text' },
      description: '高度，支持px或百分比'
    }
  }
}

// 最简单的测试用例
export const Default = {
  render: () => (
    <div className="p-6 min-w-80">
      <h3 className="text-lg font-semibold mb-4">默认骨架屏</h3>
      <Skeleton />
    </div>
  )
}

// 基础示例
export const Basic = {
  render: () => (
    <div className="p-6 min-w-96">
      <h3 className="text-lg font-semibold mb-4">基础骨架屏</h3>
      <div className="space-y-3">
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="rectangular" height="200px" />
        <Skeleton variant="circular" width="40px" height="40px" />
      </div>
    </div>
  )
}

// 变体示例
export const Variants = {
  render: () => (
    <div className="p-6 min-w-[500px]">
      <h3 className="text-lg font-semibold mb-4">骨架屏变体</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="mb-2 font-medium">文本</h4>
          <div className="space-y-2">
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
        
        <div>
          <h4 className="mb-2 font-medium">矩形</h4>
          <Skeleton variant="rectangular" height="120px" />
        </div>
        
        <div>
          <h4 className="mb-2 font-medium">圆角矩形</h4>
          <Skeleton variant="rounded" height="80px" />
        </div>
        
        <div>
          <h4 className="mb-2 font-medium">圆形</h4>
          <div className="flex items-center gap-4">
            <Skeleton variant="circular" width="32px" height="32px" />
            <Skeleton variant="circular" width="48px" height="48px" />
            <Skeleton variant="circular" width="64px" height="64px" />
          </div>
        </div>
      </div>
    </div>
  )
}

// 动画示例
export const Animations = {
  render: () => (
    <div className="p-6 min-w-[600px]">
      <h3 className="text-lg font-semibold mb-4">动画效果</h3>
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h4 className="mb-3 font-medium">无动画</h4>
          <Skeleton animation={false} height="60px" />
        </div>
        
        <div>
          <h4 className="mb-3 font-medium">脉冲动画</h4>
          <Skeleton animation="pulse" height="60px" />
        </div>
        
        <div>
          <h4 className="mb-3 font-medium">波浪动画</h4>
          <Skeleton animation="wave" height="60px" />
        </div>
      </div>
    </div>
  )
}

// 卡片加载示例
export const CardLoading = {
  render: () => (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">卡片加载状态</h3>
      
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
        
        <Skeleton variant="rectangular" height="200px" className="mt-4" />
        
        <div className="mt-4 space-y-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="70%" />
        </div>
        
        <div className="mt-4 flex gap-2">
          <Skeleton variant="rounded" width="80px" height="32px" />
          <Skeleton variant="rounded" width="80px" height="32px" />
        </div>
      </div>
    </div>
  )
}

// 列表加载状态
export const ListLoading = {
  render: () => (
    <div className="p-6 max-w-lg">
      <h3 className="text-lg font-semibold mb-4">列表加载状态</h3>
      
      <div className="space-y-4">
        {[1, 2, 3, 4].map(item => (
          <div key={item} className="flex items-center space-x-3 p-3 border rounded-lg">
            <Skeleton variant="circular" width="48px" height="48px" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" width="70%" />
              <Skeleton variant="text" width="50%" />
            </div>
            <Skeleton variant="rounded" width="60px" height="24px" />
          </div>
        ))}
      </div>
    </div>
  )
}

// 表格加载状态
export const TableLoading = {
  render: () => (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">表格加载状态</h3>
      
      <div className="border rounded-lg overflow-hidden">
        {/* 表头 */}
        <div className="bg-gray-50 px-4 py-3 border-b">
          <div className="grid grid-cols-4 gap-4">
            <Skeleton variant="text" width="60px" />
            <Skeleton variant="text" width="80px" />
            <Skeleton variant="text" width="70px" />
            <Skeleton variant="text" width="50px" />
          </div>
        </div>
        
        {/* 表格内容 */}
        {[1, 2, 3, 4, 5].map(row => (
          <div key={row} className="px-4 py-3 border-b last:border-b-0">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Skeleton variant="circular" width="24px" height="24px" />
                <Skeleton variant="text" width="80px" />
              </div>
              <Skeleton variant="text" width="120px" />
              <Skeleton variant="rounded" width="60px" height="20px" />
              <Skeleton variant="text" width="40px" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 文章加载状态
export const ArticleLoading = {
  render: () => (
    <div className="p-6 max-w-2xl">
      <h3 className="text-lg font-semibold mb-4">文章加载状态</h3>
      
      <article className="space-y-4">
        {/* 标题区域 */}
        <div className="space-y-3">
          <Skeleton variant="text" width="90%" height="32px" />
          <Skeleton variant="text" width="70%" height="32px" />
        </div>
        
        {/* 作者信息 */}
        <div className="flex items-center space-x-3 py-4">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div className="space-y-1">
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="80px" />
          </div>
        </div>
        
        {/* 特色图片 */}
        <Skeleton variant="rounded" height="200px" />
        
        {/* 文章内容 */}
        <div className="space-y-3 pt-4">
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="85%" />
          
          <div className="py-2" />
          
          <Skeleton variant="text" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="80%" />
        </div>
        
        {/* 标签区域 */}
        <div className="flex space-x-2 pt-4">
          <Skeleton variant="rounded" width="60px" height="24px" />
          <Skeleton variant="rounded" width="80px" height="24px" />
          <Skeleton variant="rounded" width="70px" height="24px" />
        </div>
      </article>
    </div>
  )
}

// 仪表板加载状态
export const DashboardLoading = {
  render: () => (
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-4">仪表板加载状态</h3>
      
      <div className="space-y-6">
        {/* 统计卡片 */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(card => (
            <div key={card} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Skeleton variant="text" width="60px" />
                <Skeleton variant="circular" width="24px" height="24px" />
              </div>
              <Skeleton variant="text" width="40px" height="28px" />
              <Skeleton variant="text" width="80px" />
            </div>
          ))}
        </div>
        
        {/* 图表区域 */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <Skeleton variant="text" width="120px" className="mb-4" />
            <Skeleton variant="rectangular" height="200px" />
          </div>
          
          <div className="p-4 border rounded-lg">
            <Skeleton variant="text" width="100px" className="mb-4" />
            <Skeleton variant="rectangular" height="200px" />
          </div>
        </div>
        
        {/* 活动列表 */}
        <div className="border rounded-lg">
          <div className="p-4 border-b">
            <Skeleton variant="text" width="120px" />
          </div>
          
          <div className="divide-y">
            {[1, 2, 3].map(item => (
              <div key={item} className="p-4 flex items-center space-x-3">
                <Skeleton variant="circular" width="32px" height="32px" />
                <div className="flex-1 space-y-1">
                  <Skeleton variant="text" width="200px" />
                  <Skeleton variant="text" width="120px" />
                </div>
                <Skeleton variant="text" width="60px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// 控制台
export const Playground = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: undefined,
    height: undefined
  },
  render: (args) => (
    <div className="p-6 min-w-80">
      <h3 className="text-lg font-semibold mb-4">自定义骨架屏</h3>
      <Skeleton 
        variant={args.variant}
        animation={args.animation}
        width={args.width}
        height={args.height}
      />
    </div>
  )
}

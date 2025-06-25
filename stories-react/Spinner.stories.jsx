import React, { useState, useEffect } from 'react'
import Spinner from '@/components/Spinner/Spinner.jsx'

export default {
  title: 'Components/Spinner (React)',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 旋转加载指示器，支持尺寸、颜色、粗细自定义。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 100, step: 4 },
      description: '旋转器尺寸'
    },
    color: {
      control: 'color',
      description: '旋转器颜色'
    },
    thickness: {
      control: { type: 'number', min: 1, max: 8, step: 1 },
      description: '边框粗细'
    },
    className: {
      control: 'text',
      description: '自定义CSS类名'
    },
  },
}

export const Basic = {
  args: {
    size: 40,
    color: '#3b82f6',
    thickness: 4
  },
  render: (args) => (
    <div className="p-8">
      <Spinner {...args} />
    </div>
  ),
}

export const Sizes = () => {
  const sizes = [16, 24, 32, 48, 64, 80]
  
  return (
    <div className="flex items-center space-x-8 p-8">
      {sizes.map(size => (
        <div key={size} className="text-center">
          <Spinner size={size} color="#3b82f6" thickness={3} />
          <p className="mt-2 text-xs text-gray-500">{size}px</p>
        </div>
      ))}
    </div>
  )
}

export const Colors = () => {
  const colors = [
    { name: '蓝色', color: '#3b82f6' },
    { name: '绿色', color: '#10b981' },
    { name: '红色', color: '#ef4444' },
    { name: '黄色', color: '#f59e0b' },
    { name: '紫色', color: '#8b5cf6' },
    { name: '粉色', color: '#ec4899' },
    { name: '青色', color: '#06b6d4' },
    { name: '橙色', color: '#f97316' },
  ]
  
  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      {colors.map(({ name, color }) => (
        <div key={name} className="text-center">
          <Spinner size={40} color={color} thickness={4} />
          <p className="mt-2 text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{color}</p>
        </div>
      ))}
    </div>
  )
}

export const Thickness = () => {
  const thicknesses = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="flex items-center space-x-8 p-8">
      {thicknesses.map(thickness => (
        <div key={thickness} className="text-center">
          <Spinner size={48} color="#3b82f6" thickness={thickness} />
          <p className="mt-2 text-xs text-gray-500">{thickness}px</p>
        </div>
      ))}
    </div>
  )
}

export const LoadingStates = () => {
  const [loadingStates, setLoadingStates] = useState({
    button: false,
    page: false,
    form: false,
    data: false,
  })

  const simulateLoading = (key, duration = 2000) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }))
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }))
    }, duration)
  }

  return (
    <div className="space-y-8 p-8 max-w-md">
      <h3 className="text-lg font-semibold">加载状态演示</h3>
      
      {/* 按钮加载 */}
      <div>
        <p className="text-sm font-medium mb-2">按钮加载状态</p>
        <button
          onClick={() => simulateLoading('button')}
          disabled={loadingStates.button}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loadingStates.button && <Spinner size={16} color="white" thickness={2} />}
          <span>{loadingStates.button ? '加载中...' : '点击加载'}</span>
        </button>
      </div>

      {/* 页面加载 */}
      <div>
        <p className="text-sm font-medium mb-2">页面加载状态</p>
        <div className="border rounded p-4 h-32 flex items-center justify-center bg-gray-50">
          {loadingStates.page ? (
            <div className="text-center">
              <Spinner size={32} color="#3b82f6" thickness={3} />
              <p className="mt-2 text-sm text-gray-600">页面加载中...</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-2">内容已加载完成</p>
              <button
                onClick={() => simulateLoading('page', 3000)}
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                重新加载
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 表单提交 */}
      <div>
        <p className="text-sm font-medium mb-2">表单提交状态</p>
        <div className="border rounded p-4">
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="用户名"
              className="w-full px-3 py-2 border rounded"
              disabled={loadingStates.form}
            />
            <input 
              type="password" 
              placeholder="密码"
              className="w-full px-3 py-2 border rounded"
              disabled={loadingStates.form}
            />
            <button
              onClick={() => simulateLoading('form')}
              disabled={loadingStates.form}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              {loadingStates.form && <Spinner size={16} color="white" thickness={2} />}
              <span>{loadingStates.form ? '提交中...' : '登录'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const InlineSpinners = () => {
  return (
    <div className="space-y-6 p-8 max-w-lg">
      <h3 className="text-lg font-semibold">内联加载指示器</h3>
      
      <div className="space-y-4">
        {/* 文本中的加载 */}
        <div className="flex items-center space-x-2">
          <span className="text-sm">正在保存文档</span>
          <Spinner size={16} color="#6b7280" thickness={2} />
        </div>

        {/* 卡片中的加载 */}
        <div className="border rounded p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">数据同步</h4>
              <p className="text-sm text-gray-600">正在同步到云端...</p>
            </div>
            <Spinner size={24} color="#3b82f6" thickness={3} />
          </div>
        </div>

        {/* 列表项加载 */}
        <div className="space-y-2">
          {[1, 2, 3].map(item => (
            <div key={item} className="flex items-center space-x-3 p-2 border rounded">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Spinner size={16} color="#9ca3af" thickness={2} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">项目 {item}</p>
                <p className="text-xs text-gray-500">加载中...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CustomStyles = () => {
  return (
    <div className="space-y-8 p-8">
      <h3 className="text-lg font-semibold">自定义样式</h3>
      
      <div className="grid grid-cols-3 gap-6">
        {/* 渐变色加载器 */}
        <div className="text-center p-4 border rounded">
          <h4 className="font-medium mb-3">渐变色</h4>
          <Spinner 
            size={48} 
            color="linear-gradient(45deg, #3b82f6, #8b5cf6)" 
            thickness={4}
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6) 1',
            }}
          />
        </div>

        {/* 阴影效果 */}
        <div className="text-center p-4 border rounded">
          <h4 className="font-medium mb-3">阴影效果</h4>
          <Spinner 
            size={48} 
            color="#3b82f6" 
            thickness={4}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))'
            }}
          />
        </div>

        {/* 自定义动画速度 */}
        <div className="text-center p-4 border rounded">
          <h4 className="font-medium mb-3">慢速动画</h4>
          <Spinner 
            size={48} 
            color="#10b981" 
            thickness={4}
            style={{
              animationDuration: '2s'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export const RealWorldExamples = () => {
  const [dataLoading, setDataLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploading, setUploading] = useState(false)

  const loadData = async () => {
    setDataLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setDataLoading(false)
  }

  const simulateUpload = () => {
    setUploading(true)
    setUploadProgress(0)
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  return (
    <div className="space-y-8 p-8 max-w-2xl">
      <h3 className="text-lg font-semibold">实际应用场景</h3>
      
      {/* 数据加载 */}
      <div className="border rounded-lg p-6">
        <h4 className="font-medium mb-4">📊 数据仪表板</h4>
        {dataLoading ? (
          <div className="flex items-center justify-center h-40">
            <div className="text-center">
              <Spinner size={40} color="#3b82f6" thickness={4} />
              <p className="mt-3 text-sm text-gray-600">正在加载图表数据...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-4 bg-gray-50 rounded text-center">
                  <div className="text-2xl font-bold text-blue-600">{Math.floor(Math.random() * 1000)}</div>
                  <div className="text-sm text-gray-600">指标 {i}</div>
                </div>
              ))}
            </div>
            <button
              onClick={loadData}
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              刷新数据
            </button>
          </div>
        )}
      </div>

      {/* 文件上传 */}
      <div className="border rounded-lg p-6">
        <h4 className="font-medium mb-4">📁 文件上传</h4>
        <div className="space-y-4">
          {uploading && (
            <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded">
              <Spinner size={20} color="#3b82f6" thickness={2} />
              <div className="flex-1">
                <p className="text-sm font-medium">正在上传文件...</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{uploadProgress}% 完成</p>
              </div>
            </div>
          )}
          
          <button
            onClick={simulateUpload}
            disabled={uploading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {uploading ? '上传中...' : '选择文件上传'}
          </button>
        </div>
      </div>
    </div>
  )
}

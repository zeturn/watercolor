import React, { useState } from 'react'
import Tooltip from '@/components/Tooltip/Tooltip.jsx'

export default {
  title: 'Components/Tooltip (React)',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 提示组件，在鼠标悬停时显示有用的信息。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '提示文本内容'
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      description: '提示框位置'
    },
    children: {
      description: '触发元素'
    }
  },
}

export const Default = {
  args: {
    text: '这是提示文本',
    placement: 'top',
  },
  render: (args) => (
    <div style={{ padding: '48px' }}>
      <Tooltip {...args}>
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'var(--wc-primary-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
        >
          悬停查看提示
        </button>
      </Tooltip>
    </div>
  ),
}

export const Placements = () => (
  <div style={{ padding: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '32px', 
      alignItems: 'center' 
    }}>
      <div></div>
      <Tooltip text="顶部提示" placement="top">
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'var(--wc-neutral-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}
        >
          顶部
        </button>
      </Tooltip>
      <div></div>
      
      <Tooltip text="左侧提示" placement="left">
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'var(--wc-neutral-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}
        >
          左侧
        </button>
      </Tooltip>
      <div style={{ textAlign: 'center', color: 'var(--wc-neutral-500)' }}>
        悬停按钮查看不同位置的提示
      </div>
      <Tooltip text="右侧提示" placement="right">
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'var(--wc-neutral-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}
        >
          右侧
        </button>
      </Tooltip>
      
      <div></div>
      <Tooltip text="底部提示" placement="bottom">
        <button style={{
          padding: '8px 16px',
          backgroundColor: 'var(--wc-neutral-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}
        >
          底部
        </button>
      </Tooltip>
      <div></div>
    </div>
  </div>
)

export const WithIcons = () => (
  <div style={{ padding: '48px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>带图标的提示</h3>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tooltip text="点击保存当前工作">
        <button style={{
          padding: '8px',
          backgroundColor: 'var(--wc-success-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-success-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-success-600)'}
        >
          💾
        </button>
      </Tooltip>
      
      <Tooltip text="编辑当前项目">
        <button style={{
          padding: '8px',
          backgroundColor: 'var(--wc-primary-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
        >
          ✏️
        </button>
      </Tooltip>
      
      <Tooltip text="删除选中项目">
        <button style={{
          padding: '8px',
          backgroundColor: 'var(--wc-error-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-error-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-error-600)'}
        >
          🗑️
        </button>
      </Tooltip>
      
      <Tooltip text="分享给其他用户">
        <button style={{
          padding: '8px',
          backgroundColor: 'var(--wc-purple-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-purple-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-purple-600)'}
        >
          📤
        </button>
      </Tooltip>
      
      <Tooltip text="查看详细信息">
        <button style={{
          padding: '8px',
          backgroundColor: 'var(--wc-neutral-600)',
          color: 'var(--wc-neutral-0)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-700)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-600)'}
        >
          ℹ️
        </button>
      </Tooltip>
    </div>
  </div>
)

export const RichContent = () => (
  <div className="p-12 space-y-6">
    <h3 className="text-lg font-semibold mb-4">丰富内容提示</h3>
    <div className="flex gap-4 items-center">
      <Tooltip text="用户名: admin@example.com\n状态: 在线\n最后登录: 2小时前">
        <div 
          className="flex items-center gap-2 p-2 border rounded transition-colors"
          style={{ 
            borderColor: 'var(--wc-neutral-200)',
            backgroundColor: 'var(--wc-neutral-0)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-50)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-0)'}
        >
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
            style={{ backgroundColor: 'var(--wc-primary-500)' }}
          >
            A
          </div>
          <span>管理员</span>
        </div>
      </Tooltip>
      
      <Tooltip text="项目进度: 75%\n截止日期: 2024-02-15\n负责人: 张三">
        <div 
          className="p-3 border rounded transition-colors"
          style={{ 
            borderColor: 'var(--wc-neutral-200)',
            backgroundColor: 'var(--wc-neutral-0)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-50)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-neutral-0)'}
        >
          <div className="font-medium">Alpha 项目</div>
          <div className="text-sm" style={{ color: 'var(--wc-neutral-600)' }}>进行中</div>
        </div>
      </Tooltip>
      
      <Tooltip text="点击次数: 1,234\n转化率: 3.2%\n最佳时间: 14:00-16:00">
        <div 
          className="p-3 rounded transition-colors"
          style={{ 
            backgroundColor: 'var(--wc-primary-50)',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-100)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-50)'}
        >
          <div className="text-2xl font-bold" style={{ color: 'var(--wc-primary-600)' }}>📊</div>
          <div className="text-sm">数据分析</div>
        </div>
      </Tooltip>
    </div>
  </div>
)

export const Interactive = () => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [customText, setCustomText] = useState('自定义提示内容')
  
  return (
    <div style={{ padding: '48px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>交互式提示</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ 
            display: 'block', 
            fontSize: '14px', 
            fontWeight: '500', 
            marginBottom: '8px' 
          }}>
            自定义提示文本：
          </label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid var(--wc-neutral-200)',
              backgroundColor: 'var(--wc-neutral-0)',
              color: 'var(--wc-neutral-900)',
              borderRadius: '4px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--wc-primary-500)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--wc-neutral-200)'}
            placeholder="输入提示内容"
          />
        </div>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Tooltip text={customText}>
            <button style={{
              padding: '8px 16px',
              backgroundColor: 'var(--wc-primary-600)',
              color: 'var(--wc-neutral-0)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-700)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            >
              悬停查看自定义提示
            </button>
          </Tooltip>
          
          <Tooltip text={showTooltip ? "提示已显示" : "提示已隐藏"}>
            <button 
              style={{
                padding: '8px 16px',
                backgroundColor: showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)',
                color: 'var(--wc-neutral-0)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = showTooltip ? 'var(--wc-success-700)' : 'var(--wc-neutral-700)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = showTooltip ? 'var(--wc-success-600)' : 'var(--wc-neutral-600)'
              }}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              {showTooltip ? '隐藏' : '显示'} 状态
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export const FormFields = () => (
  <div className="p-12 max-w-md">
    <h3 className="text-lg font-semibold mb-6">表单字段提示</h3>
    <form className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">用户名</label>
          <Tooltip text="用户名必须是3-20个字符，只能包含字母、数字和下划线">
            <span 
              className="cursor-help"
              style={{ color: 'var(--wc-neutral-400)' }}
            >
              ℹ️
            </span>
          </Tooltip>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded focus:ring-2"
          style={{
            borderColor: 'var(--wc-neutral-200)',
            backgroundColor: 'var(--wc-neutral-0)',
            color: 'var(--wc-neutral-900)',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--wc-primary-500)'
            e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--wc-neutral-200)'
            e.target.style.boxShadow = 'none'
          }}
          placeholder="请输入用户名"
        />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">密码强度</label>
          <Tooltip text="强密码应包含：\n• 至少8个字符\n• 大小写字母\n• 数字和特殊字符">
            <span 
              className="cursor-help"
              style={{ color: 'var(--wc-neutral-400)' }}
            >
              🔒
            </span>
          </Tooltip>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded focus:ring-2"
          style={{
            borderColor: 'var(--wc-neutral-200)',
            backgroundColor: 'var(--wc-neutral-0)',
            color: 'var(--wc-neutral-900)',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--wc-primary-500)'
            e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--wc-neutral-200)'
            e.target.style.boxShadow = 'none'
          }}
          placeholder="请输入密码"
        />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">邮箱验证</label>
          <Tooltip text="我们会向此邮箱发送验证码，请确保邮箱地址正确且可接收邮件">
            <span 
              className="cursor-help"
              style={{ color: 'var(--wc-neutral-400)' }}
            >
              📧
            </span>
          </Tooltip>
        </div>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded focus:ring-2"
          style={{
            borderColor: 'var(--wc-neutral-200)',
            backgroundColor: 'var(--wc-neutral-0)',
            color: 'var(--wc-neutral-900)',
            outline: 'none'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--wc-primary-500)'
            e.target.style.boxShadow = '0 0 0 2px var(--wc-primary-200)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--wc-neutral-200)'
            e.target.style.boxShadow = 'none'
          }}
          placeholder="请输入邮箱地址"
        />
      </div>
    </form>
  </div>
)

export const StatusIndicators = () => (
  <div className="p-12 space-y-6">
    <h3 className="text-lg font-semibold mb-4">状态指示器</h3>
    
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">服务状态</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Tooltip text="所有系统正常运行">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--wc-success-500)' }}
              ></div>
            </Tooltip>
            <span>Web 服务</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="数据库响应缓慢，正在优化中">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--wc-warning-500)' }}
              ></div>
            </Tooltip>
            <span>数据库</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="API 服务暂时不可用，预计10分钟内恢复">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: 'var(--wc-error-500)' }}
              ></div>
            </Tooltip>
            <span>API 网关</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-3">用户活动</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Tooltip text="张三 - 5分钟前登录">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--wc-success-100)' }}
              >
                🟢
              </div>
            </Tooltip>
            <span>在线用户: 245</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="李四 - 2小时前离线">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--wc-neutral-100)' }}
              >
                ⚫
              </div>
            </Tooltip>
            <span>离线用户: 1,789</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const DataVisualization = () => (
  <div className="p-12 space-y-6">
    <h3 className="text-lg font-semibold mb-4">数据可视化提示</h3>
    
    <div 
      className="p-6 rounded-lg"
      style={{ backgroundColor: 'var(--wc-neutral-50)' }}
    >
      <h4 className="font-medium mb-4">销售数据图表</h4>
      <div className="flex items-end gap-2 h-32">
        <Tooltip text="一月销售额: ¥45,000\n环比增长: +12%\n目标完成: 90%">
          <div 
            className="w-8 cursor-pointer rounded-t transition-colors"
            style={{
              height: '60%',
              backgroundColor: 'var(--wc-primary-500)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-500)'}
          ></div>
        </Tooltip>
        <Tooltip text="二月销售额: ¥52,000\n环比增长: +15%\n目标完成: 104%">
          <div 
            className="w-8 cursor-pointer rounded-t transition-colors"
            style={{
              height: '70%',
              backgroundColor: 'var(--wc-primary-500)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-500)'}
          ></div>
        </Tooltip>
        <Tooltip text="三月销售额: ¥78,000\n环比增长: +50%\n目标完成: 156%">
          <div 
            className="w-8 cursor-pointer rounded-t transition-colors"
            style={{
              height: '100%',
              backgroundColor: 'var(--wc-primary-500)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-500)'}
          ></div>
        </Tooltip>
        <Tooltip text="四月销售额: ¥64,000\n环比增长: -18%\n目标完成: 128%">
          <div 
            className="w-8 cursor-pointer rounded-t transition-colors"
            style={{
              height: '82%',
              backgroundColor: 'var(--wc-primary-500)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-500)'}
          ></div>
        </Tooltip>
        <Tooltip text="五月销售额: ¥71,000\n环比增长: +11%\n目标完成: 142%">
          <div 
            className="w-8 cursor-pointer rounded-t transition-colors"
            style={{
              height: '91%',
              backgroundColor: 'var(--wc-primary-500)'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--wc-primary-600)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--wc-primary-500)'}
          ></div>
        </Tooltip>
      </div>
      <div className="flex gap-2 text-xs mt-2" style={{ color: 'var(--wc-neutral-600)' }}>
        <span className="w-8 text-center">1月</span>
        <span className="w-8 text-center">2月</span>
        <span className="w-8 text-center">3月</span>
        <span className="w-8 text-center">4月</span>
        <span className="w-8 text-center">5月</span>
      </div>
    </div>
  </div>
)

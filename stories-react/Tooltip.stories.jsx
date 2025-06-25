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
    <div className="p-12">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          悬停查看提示
        </button>
      </Tooltip>
    </div>
  ),
}

export const Placements = () => (
  <div className="p-20 flex items-center justify-center">
    <div className="grid grid-cols-3 gap-8 items-center">
      <div></div>
      <Tooltip text="顶部提示" placement="top">
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          顶部
        </button>
      </Tooltip>
      <div></div>
      
      <Tooltip text="左侧提示" placement="left">
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          左侧
        </button>
      </Tooltip>
      <div className="text-center text-gray-500">
        悬停按钮查看不同位置的提示
      </div>
      <Tooltip text="右侧提示" placement="right">
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          右侧
        </button>
      </Tooltip>
      
      <div></div>
      <Tooltip text="底部提示" placement="bottom">
        <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          底部
        </button>
      </Tooltip>
      <div></div>
    </div>
  </div>
)

export const WithIcons = () => (
  <div className="p-12 space-y-6">
    <h3 className="text-lg font-semibold mb-4">带图标的提示</h3>
    <div className="flex gap-4 items-center">
      <Tooltip text="点击保存当前工作">
        <button className="p-2 bg-green-600 text-white rounded hover:bg-green-700">
          💾
        </button>
      </Tooltip>
      
      <Tooltip text="编辑当前项目">
        <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          ✏️
        </button>
      </Tooltip>
      
      <Tooltip text="删除选中项目">
        <button className="p-2 bg-red-600 text-white rounded hover:bg-red-700">
          🗑️
        </button>
      </Tooltip>
      
      <Tooltip text="分享给其他用户">
        <button className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          📤
        </button>
      </Tooltip>
      
      <Tooltip text="查看详细信息">
        <button className="p-2 bg-gray-600 text-white rounded hover:bg-gray-700">
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
        <div className="flex items-center gap-2 p-2 border rounded hover:bg-gray-50">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
            A
          </div>
          <span>管理员</span>
        </div>
      </Tooltip>
      
      <Tooltip text="项目进度: 75%\n截止日期: 2024-02-15\n负责人: 张三">
        <div className="p-3 border rounded hover:bg-gray-50">
          <div className="font-medium">Alpha 项目</div>
          <div className="text-sm text-gray-600">进行中</div>
        </div>
      </Tooltip>
      
      <Tooltip text="点击次数: 1,234\n转化率: 3.2%\n最佳时间: 14:00-16:00">
        <div className="p-3 bg-blue-50 rounded hover:bg-blue-100">
          <div className="text-2xl font-bold text-blue-600">📊</div>
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
    <div className="p-12 space-y-6">
      <h3 className="text-lg font-semibold mb-4">交互式提示</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">自定义提示文本：</label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="输入提示内容"
          />
        </div>
        
        <div className="flex gap-4 items-center">
          <Tooltip text={customText}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              悬停查看自定义提示
            </button>
          </Tooltip>
          
          <Tooltip text={showTooltip ? "提示已显示" : "提示已隐藏"}>
            <button 
              className={`px-4 py-2 rounded transition-colors ${
                showTooltip 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'
              }`}
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
            <span className="text-gray-400 cursor-help">ℹ️</span>
          </Tooltip>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="请输入用户名"
        />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">密码强度</label>
          <Tooltip text="强密码应包含：\n• 至少8个字符\n• 大小写字母\n• 数字和特殊字符">
            <span className="text-gray-400 cursor-help">🔒</span>
          </Tooltip>
        </div>
        <input
          type="password"
          className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          placeholder="请输入密码"
        />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium">邮箱验证</label>
          <Tooltip text="我们会向此邮箱发送验证码，请确保邮箱地址正确且可接收邮件">
            <span className="text-gray-400 cursor-help">📧</span>
          </Tooltip>
        </div>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
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
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </Tooltip>
            <span>Web 服务</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="数据库响应缓慢，正在优化中">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </Tooltip>
            <span>数据库</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="API 服务暂时不可用，预计10分钟内恢复">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
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
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                🟢
              </div>
            </Tooltip>
            <span>在线用户: 245</span>
          </div>
          <div className="flex items-center gap-3">
            <Tooltip text="李四 - 2小时前离线">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
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
    
    <div className="bg-gray-50 p-6 rounded-lg">
      <h4 className="font-medium mb-4">销售数据图表</h4>
      <div className="flex items-end gap-2 h-32">
        <Tooltip text="一月销售额: ¥45,000\n环比增长: +12%\n目标完成: 90%">
          <div className="w-8 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-t" style={{height: '60%'}}></div>
        </Tooltip>
        <Tooltip text="二月销售额: ¥52,000\n环比增长: +15%\n目标完成: 104%">
          <div className="w-8 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-t" style={{height: '70%'}}></div>
        </Tooltip>
        <Tooltip text="三月销售额: ¥78,000\n环比增长: +50%\n目标完成: 156%">
          <div className="w-8 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-t" style={{height: '100%'}}></div>
        </Tooltip>
        <Tooltip text="四月销售额: ¥64,000\n环比增长: -18%\n目标完成: 128%">
          <div className="w-8 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-t" style={{height: '82%'}}></div>
        </Tooltip>
        <Tooltip text="五月销售额: ¥71,000\n环比增长: +11%\n目标完成: 142%">
          <div className="w-8 bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-t" style={{height: '91%'}}></div>
        </Tooltip>
      </div>
      <div className="flex gap-2 text-xs text-gray-600 mt-2">
        <span className="w-8 text-center">1月</span>
        <span className="w-8 text-center">2月</span>
        <span className="w-8 text-center">3月</span>
        <span className="w-8 text-center">4月</span>
        <span className="w-8 text-center">5月</span>
      </div>
    </div>
  </div>
)

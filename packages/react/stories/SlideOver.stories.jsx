import React, { useState } from 'react'
import SlideOver from '@/components/SlideOver/SlideOver.jsx'

export default {
  title: 'Components/SlideOver (React)',
  component: SlideOver,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 侧边滑出面板组件，支持左右两侧滑出，可自定义宽度。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: '是否显示',
      control: { type: 'boolean' }
    },
    placement: {
      description: '滑出位置',
      control: { type: 'select' },
      options: ['left', 'right']
    },
    width: {
      description: '面板宽度',
      control: { type: 'text' }
    },
    onClose: {
      action: 'close',
      description: '关闭时触发'
    },
  },
}

export const Basic = {
  args: {
    placement: 'right',
    width: '400px'
  },
  render: (args) => {
    const [open, setOpen] = useState(false)
    
    return (
      <div className="p-8">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setOpen(true)}
        >
          打开面板
        </button>
        <SlideOver 
          {...args}
          open={open}
          onClose={() => {
            setOpen(false)
            args.onClose?.()
          }}
        >
          <div className="h-full flex flex-col">
            <div className="flex-shrink-0 px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">侧边栏标题</h3>
            </div>
            
            <div className="flex-1 px-6 py-4">
              <p className="text-sm text-gray-700 mb-4">
                这里可以放任何内容，例如表单、信息等。
              </p>
            </div>
            
            <div className="flex-shrink-0 px-6 py-4 border-t">
              <button 
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setOpen(false)}
              >
                关闭
              </button>
            </div>
          </div>
        </SlideOver>
      </div>
    )
  },
}

export const Placements = () => {
  const [panels, setPanels] = useState({
    left: false,
    right: false,
  })

  const openPanel = (placement) => {
    setPanels(prev => ({ ...prev, [placement]: true }))
  }

  const closePanel = (placement) => {
    setPanels(prev => ({ ...prev, [placement]: false }))
  }

  return (
    <div className="p-8 text-center">
      <h3 className="text-lg font-semibold mb-6">不同滑出位置</h3>
      
      <div className="flex justify-center gap-4 mb-8">
        <button 
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => openPanel('left')}
        >
          从左侧滑出
        </button>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => openPanel('right')}
        >
          从右侧滑出
        </button>
      </div>

      {/* 左侧面板 */}
      <SlideOver 
        open={panels.left}
        placement="left"
        width="350px"
        onClose={() => closePanel('left')}
      >
        <div className="h-full flex flex-col bg-purple-50">
          <div className="flex-shrink-0 px-6 py-4 border-b bg-purple-600 text-white">
            <h3 className="text-lg font-semibold">左侧导航</h3>
          </div>
          
          <div className="flex-1 px-6 py-4">
            <nav className="space-y-2">
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">首页</a>
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">产品</a>
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">服务</a>
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">关于我们</a>
              <a href="#" className="block px-3 py-2 text-purple-700 hover:bg-purple-100 rounded">联系我们</a>
            </nav>
          </div>
        </div>
      </SlideOver>

      {/* 右侧面板 */}
      <SlideOver 
        open={panels.right}
        placement="right"
        width="400px"
        onClose={() => closePanel('right')}
      >
        <div className="h-full flex flex-col">
          <div className="flex-shrink-0 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">设置面板</h3>
          </div>
          
          <div className="flex-1 px-6 py-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">主题</label>
              <select className="w-full px-3 py-2 border rounded">
                <option>浅色主题</option>
                <option>深色主题</option>
                <option>自动</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">语言</label>
              <select className="w-full px-3 py-2 border rounded">
                <option>中文</option>
                <option>English</option>
                <option>日本語</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">接收通知</span>
              </label>
            </div>
          </div>
          
          <div className="flex-shrink-0 px-6 py-4 border-t">
            <button 
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => closePanel('right')}
            >
              保存设置
            </button>
          </div>
        </div>
      </SlideOver>
    </div>
  )
}

export const Widths = () => {
  const [activePanel, setActivePanel] = useState(null)

  const widths = [
    { label: '窄面板 (280px)', width: '280px' },
    { label: '标准面板 (400px)', width: '400px' },
    { label: '宽面板 (500px)', width: '500px' },
    { label: '超宽面板 (600px)', width: '600px' },
  ]

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-6">不同宽度</h3>
      
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        {widths.map(({ label, width }, index) => (
          <button
            key={index}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium"
            onClick={() => setActivePanel(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {widths.map(({ label, width }, index) => (
        <SlideOver
          key={index}
          open={activePanel === index}
          placement="right"
          width={width}
          onClose={() => setActivePanel(null)}
        >
          <div className="h-full flex flex-col">
            <div className="flex-shrink-0 px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="text-sm text-gray-600">宽度: {width}</p>
            </div>
            
            <div className="flex-1 px-6 py-4">
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded">
                  <p className="text-sm text-blue-800">
                    这是一个 {width} 宽度的面板示例。
                    您可以在这里放置任何内容。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 px-6 py-4 border-t">
              <button 
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setActivePanel(null)}
              >
                关闭
              </button>
            </div>
          </div>
        </SlideOver>
      ))}
    </div>
  )
}

export const FormExample = () => {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    assignee: '',
    dueDate: '',
    tags: '',
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('表单数据：\n' + JSON.stringify(formData, null, 2))
    setOpen(false)
    // 重置表单
    setFormData({
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      assignee: '',
      dueDate: '',
      tags: '',
    })
  }

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">创建任务表单</h3>
      <button 
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => setOpen(true)}
      >
        + 新建任务
      </button>

      <SlideOver 
        open={open}
        placement="right"
        width="450px"
        onClose={() => setOpen(false)}
      >
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <div className="flex-shrink-0 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">创建新任务</h3>
            <p className="text-sm text-gray-600">填写下方信息来创建一个新任务</p>
          </div>
          
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">任务标题 *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="输入任务标题"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">描述</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="任务详细描述..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">分类</label>
                <select
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option value="">选择分类</option>
                  <option value="feature">新功能</option>
                  <option value="bug">Bug修复</option>
                  <option value="improvement">优化改进</option>
                  <option value="documentation">文档</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">优先级</label>
                <div className="flex gap-2">
                  {['low', 'medium', 'high', 'urgent'].map(priority => (
                    <label key={priority} className="flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        value={priority}
                        checked={formData.priority === priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                        className="mr-1"
                      />
                      <span className="text-sm capitalize">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">负责人</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="指派给..."
                  value={formData.assignee}
                  onChange={(e) => handleInputChange('assignee', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">截止日期</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.dueDate}
                  onChange={(e) => handleInputChange('dueDate', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">标签</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="用逗号分隔多个标签"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 px-6 py-4 border-t">
            <div className="flex gap-3">
              <button 
                type="submit"
                className="flex-1 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
              >
                创建任务
              </button>
              <button 
                type="button"
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setOpen(false)}
              >
                取消
              </button>
            </div>
          </div>
        </form>
      </SlideOver>
    </div>
  )
}

export const UserProfile = () => {
  const [open, setOpen] = useState(false)

  const user = {
    name: '张三',
    email: 'zhangsan@example.com',
    role: '前端开发工程师',
    department: '技术部',
    avatar: '👤',
    joinDate: '2023-01-15',
    phone: '+86 138 0013 8000',
    address: '北京市朝阳区',
  }

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">用户资料</h3>
      <button 
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={() => setOpen(true)}
      >
        查看用户资料
      </button>

      <SlideOver 
        open={open}
        placement="right"
        width="420px"
        onClose={() => setOpen(false)}
      >
        <div className="h-full flex flex-col">
          <div className="flex-shrink-0 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">用户资料</h3>
          </div>
          
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            {/* 头像和基本信息 */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {user.avatar}
              </div>
              <h4 className="text-xl font-semibold">{user.name}</h4>
              <p className="text-gray-600">{user.role}</p>
            </div>

            {/* 详细信息 */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-medium mb-3">联系信息</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">邮箱:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">电话:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">地址:</span>
                    <span>{user.address}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-medium mb-3">工作信息</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">部门:</span>
                    <span>{user.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">职位:</span>
                    <span>{user.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">入职日期:</span>
                    <span>{user.joinDate}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-medium mb-3">快速操作</h5>
                <div className="space-y-2">
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">
                    📧 发送邮件
                  </button>
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">
                    💬 发起聊天
                  </button>
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">
                    📋 查看任务
                  </button>
                  <button className="w-full py-2 text-left px-3 text-sm hover:bg-gray-100 rounded">
                    ⚙️ 编辑资料
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 px-6 py-4 border-t">
            <button 
              className="w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setOpen(false)}
            >
              关闭
            </button>
          </div>
        </div>
      </SlideOver>
    </div>
  )
}

export const ShoppingCart = () => {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([
    { id: 1, name: 'iPhone 15 Pro', price: 7999, quantity: 1, image: '📱' },
    { id: 2, name: 'AirPods Pro', price: 1999, quantity: 2, image: '🎧' },
    { id: 3, name: 'MacBook Air', price: 8999, quantity: 1, image: '💻' },
  ])

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setItems(items.filter(item => item.id !== id))
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mb-4">购物车示例</h3>
      <button 
        className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 relative"
        onClick={() => setOpen(true)}
      >
        🛒 购物车 ({items.length})
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      <SlideOver 
        open={open}
        placement="right"
        width="450px"
        onClose={() => setOpen(false)}
      >
        <div className="h-full flex flex-col">
          <div className="flex-shrink-0 px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">购物车</h3>
            <p className="text-sm text-gray-600">{items.length} 件商品</p>
          </div>
          
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🛒</div>
                <p className="text-gray-500">购物车为空</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded">
                    <div className="text-2xl">{item.image}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">¥{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="text-red-500 hover:text-red-700"
                      onClick={() => updateQuantity(item.id, 0)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="flex-shrink-0 px-6 py-4 border-t">
              <div className="mb-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>总计:</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
              <button 
                className="w-full py-3 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 font-medium"
                onClick={() => alert('跳转到结算页面')}
              >
                去结算
              </button>
            </div>
          )}
        </div>
      </SlideOver>
    </div>
  )
}

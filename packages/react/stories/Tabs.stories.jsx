import React, { useState } from 'react'
import Tabs from '@/components/Tabs/Tabs.jsx'

export default {
  title: 'Components/Tabs (React)',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Watercolor 标签页组件，支持多种样式变体和交互功能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
      description: '标签页样式',
    },
    activeIndex: {
      control: { type: 'number' },
      description: '当前激活的标签页索引',
    },
    tabs: {
      control: { type: 'object' },
      description: '标签页数组',
    },
    onChange: {
      action: 'tab-changed',
      description: '标签页切换时触发',
    },
  },
}

export const Default = {
  args: {
    variant: 'default',
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState(0)
    const tabs = [
      { title: '主页', key: 'home' },
      { title: '关于', key: 'about' },
      { title: '服务', key: 'services' },
      { title: '联系', key: 'contact' }
    ]
    
    return (
      <div className="w-96 p-6">
        <Tabs 
          tabs={tabs} 
          activeIndex={activeTab}
          variant={args.variant}
          onChange={(index, tab) => {
            setActiveTab(index)
            args.onChange?.(index, tab)
          }}
        >
          {({ activeIndex }) => (
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">
              {activeIndex === 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">主页内容</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">欢迎来到我们的网站主页</p>
                </div>
              )}
              {activeIndex === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">关于我们</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">了解我们公司的历史和使命</p>
                </div>
              )}
              {activeIndex === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">我们的服务</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">查看我们提供的各种服务</p>
                </div>
              )}
              {activeIndex === 3 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">联系我们</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">获取联系方式和地址信息</p>
                </div>
              )}
            </div>
          )}
        </Tabs>
      </div>
    )
  },
}

export const Variants = () => {
  const [activeTab1, setActiveTab1] = useState(0)
  const [activeTab2, setActiveTab2] = useState(1)
  const [activeTab3, setActiveTab3] = useState(2)
  const tabs = [
    { title: '选项1', key: 'tab1' },
    { title: '选项2', key: 'tab2' },
    { title: '选项3', key: 'tab3' }
  ]
  
  return (
    <div className="space-y-8 w-96 p-6">
      <div>
        <h3 className="text-lg font-medium mb-4">默认样式</h3>
        <Tabs 
          tabs={tabs} 
          activeIndex={activeTab1}
          variant="default"
          onChange={setActiveTab1}
        >
          {({ activeIndex }) => (
            <div className="p-4 bg-neutral-50 rounded-xl mt-4">
              <p>默认样式内容 {activeIndex + 1}</p>
            </div>
          )}
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">药丸样式</h3>
        <Tabs 
          tabs={tabs} 
          activeIndex={activeTab2}
          variant="pills"
          onChange={setActiveTab2}
        >
          {({ activeIndex }) => (
            <div className="p-4 bg-neutral-50 rounded-xl mt-4">
              <p>药丸样式内容 {activeIndex + 1}</p>
            </div>
          )}
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">下划线样式</h3>
        <Tabs 
          tabs={tabs} 
          activeIndex={activeTab3}
          variant="underline"
          onChange={setActiveTab3}
        >
          {({ activeIndex }) => (
            <div className="p-4 bg-neutral-50 rounded-xl mt-4">
              <p>下划线样式内容 {activeIndex + 1}</p>
            </div>
          )}
        </Tabs>
      </div>
    </div>
  )
}

export const WithDisabled = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    { title: '可用', key: 'enabled' },
    { title: '禁用', key: 'disabled', disabled: true },
    { title: '可用2', key: 'enabled2' },
    { title: '禁用2', key: 'disabled2', disabled: true }
  ]
  
  return (
    <div className="w-96 p-6">
      <h3 className="text-lg font-medium mb-4">禁用状态</h3>
      <Tabs 
        tabs={tabs} 
        activeIndex={activeTab}
        variant="default"
        onChange={setActiveTab}
      >
        {({ activeIndex }) => (
          <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl mt-4">
            <p>当前激活标签页: {activeIndex + 1}</p>
            <p className="text-sm text-gray-600 mt-2">
              标签页 "{tabs[activeIndex].title}" 处于激活状态
            </p>
          </div>
        )}
      </Tabs>
    </div>
  )
}

export const DynamicTabs = () => {
  const [tabs, setTabs] = useState([
    { title: '标签 1', key: 'tab1', content: '这是第一个标签的内容' },
    { title: '标签 2', key: 'tab2', content: '这是第二个标签的内容' },
  ])
  const [activeTab, setActiveTab] = useState(0)
  const [tabCounter, setTabCounter] = useState(3)
  
  const addTab = () => {
    const newTab = {
      title: `标签 ${tabCounter}`,
      key: `tab${tabCounter}`,
      content: `这是第${tabCounter}个标签的内容`
    }
    setTabs([...tabs, newTab])
    setTabCounter(tabCounter + 1)
    setActiveTab(tabs.length) // 激活新添加的标签
  }
  
  const removeTab = (indexToRemove) => {
    if (tabs.length <= 1) return // 至少保留一个标签
    
    const newTabs = tabs.filter((_, index) => index !== indexToRemove)
    setTabs(newTabs)
    
    // 调整激活标签索引
    if (activeTab >= indexToRemove) {
      setActiveTab(Math.max(0, activeTab - 1))
    }
  }
  
  return (
    <div className="w-96 p-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2">动态标签页</h3>
        <button 
          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          onClick={addTab}
        >
          + 添加标签
        </button>
      </div>
      
      <Tabs 
        tabs={tabs} 
        activeIndex={activeTab}
        variant="default"
        onChange={setActiveTab}
      >
        {({ activeIndex }) => (
          <div className="p-4 bg-neutral-50 rounded-xl mt-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">{tabs[activeIndex]?.title}</h4>
              {tabs.length > 1 && (
                <button 
                  className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs hover:bg-red-200"
                  onClick={() => removeTab(activeIndex)}
                >
                  删除
                </button>
              )}
            </div>
            <p className="text-sm text-gray-600">
              {tabs[activeIndex]?.content}
            </p>
          </div>
        )}
      </Tabs>
    </div>
  )
}

export const NestedContent = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [subTab, setSubTab] = useState(0)
  
  const mainTabs = [
    { title: '产品', key: 'products' },
    { title: '服务', key: 'services' },
    { title: '支持', key: 'support' }
  ]
  
  const productSubTabs = [
    { title: 'Web应用', key: 'web' },
    { title: '移动应用', key: 'mobile' },
    { title: 'API服务', key: 'api' }
  ]
  
  return (
    <div className="w-[600px] p-6">
      <h3 className="text-lg font-medium mb-4">嵌套内容标签页</h3>
      <Tabs 
        tabs={mainTabs} 
        activeIndex={activeTab}
        variant="underline"
        onChange={setActiveTab}
      >
        {({ activeIndex }) => (
          <div className="mt-6">
            {activeIndex === 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-4">我们的产品</h4>
                <Tabs 
                  tabs={productSubTabs}
                  activeIndex={subTab}
                  variant="pills"
                  onChange={setSubTab}
                >
                  {({ activeIndex: subIndex }) => (
                    <div className="p-4 bg-blue-50 rounded-lg mt-4">
                      {subIndex === 0 && (
                        <div>
                          <h5 className="font-medium mb-2">Web应用开发</h5>
                          <p className="text-sm text-gray-600">
                            提供现代化、响应式的Web应用开发服务，使用最新的前端技术栈。
                          </p>
                        </div>
                      )}
                      {subIndex === 1 && (
                        <div>
                          <h5 className="font-medium mb-2">移动应用开发</h5>
                          <p className="text-sm text-gray-600">
                            跨平台移动应用开发，支持iOS和Android平台。
                          </p>
                        </div>
                      )}
                      {subIndex === 2 && (
                        <div>
                          <h5 className="font-medium mb-2">API服务</h5>
                          <p className="text-sm text-gray-600">
                            RESTful API和GraphQL服务开发，提供可靠的后端支持。
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </Tabs>
              </div>
            )}
            {activeIndex === 1 && (
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">专业服务</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 技术咨询</li>
                  <li>• 架构设计</li>
                  <li>• 代码审查</li>
                  <li>• 性能优化</li>
                </ul>
              </div>
            )}
            {activeIndex === 2 && (
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium mb-2">技术支持</h4>
                <p className="text-sm text-gray-600 mb-3">
                  我们提供全面的技术支持服务：
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium">在线支持</h5>
                    <p className="text-gray-600">24/7在线客服</p>
                  </div>
                  <div>
                    <h5 className="font-medium">文档资源</h5>
                    <p className="text-gray-600">详细的技术文档</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Tabs>
    </div>
  )
}

export const TabsWithIcons = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    { title: '🏠 首页', key: 'home' },
    { title: '👤 用户', key: 'users' },
    { title: '📊 分析', key: 'analytics' },
    { title: '⚙️ 设置', key: 'settings' }
  ]
  
  return (
    <div className="w-96 p-6">
      <h3 className="text-lg font-medium mb-4">带图标的标签页</h3>
      <Tabs 
        tabs={tabs} 
        activeIndex={activeTab}
        variant="pills"
        onChange={setActiveTab}
      >
        {({ activeIndex }) => (
          <div className="p-4 bg-neutral-50 rounded-xl mt-4">
            {activeIndex === 0 && (
              <div>
                <h4 className="font-medium mb-2">仪表板</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-blue-100 rounded">
                    <div className="text-2xl font-bold text-blue-600">1,234</div>
                    <div className="text-blue-600">总用户数</div>
                  </div>
                  <div className="p-3 bg-green-100 rounded">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <div className="text-green-600">系统正常运行</div>
                  </div>
                </div>
              </div>
            )}
            {activeIndex === 1 && (
              <div>
                <h4 className="font-medium mb-2">用户管理</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 bg-white rounded">
                    <span>👤</span>
                    <span>张三 - 管理员</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded">
                    <span>👤</span>
                    <span>李四 - 用户</span>
                  </div>
                </div>
              </div>
            )}
            {activeIndex === 2 && (
              <div>
                <h4 className="font-medium mb-2">数据分析</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>页面访问量</span>
                    <span className="font-medium">12,345</span>
                  </div>
                  <div className="flex justify-between">
                    <span>用户活跃度</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>转化率</span>
                    <span className="font-medium">3.2%</span>
                  </div>
                </div>
              </div>
            )}
            {activeIndex === 3 && (
              <div>
                <h4 className="font-medium mb-2">系统设置</h4>
                <div className="space-y-3 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>启用通知</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>自动备份</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    <span>安全模式</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        )}
      </Tabs>
    </div>
  )
}

export const ControlledTabs = () => {
  const [currentTab, setCurrentTab] = useState(1) // 从第二个标签开始
  const tabs = [
    { title: '步骤 1', key: 'step1' },
    { title: '步骤 2', key: 'step2' },
    { title: '步骤 3', key: 'step3' },
    { title: '完成', key: 'complete' }
  ]
  
  const nextStep = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1)
    }
  }
  
  const prevStep = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1)
    }
  }
  
  return (
    <div className="w-[500px] p-6">
      <h3 className="text-lg font-medium mb-4">受控标签页 - 向导流程</h3>
      <Tabs 
        tabs={tabs} 
        activeIndex={currentTab}
        variant="default"
        onChange={setCurrentTab} // 允许点击切换，但主要通过按钮控制
      >
        {({ activeIndex }) => (
          <div className="mt-6">
            <div className="p-6 bg-neutral-50 rounded-xl min-h-[200px]">
              {activeIndex === 0 && (
                <div>
                  <h4 className="font-medium mb-3">基本信息</h4>
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="姓名" 
                      className="w-full px-3 py-2 border rounded"
                    />
                    <input 
                      type="email" 
                      placeholder="邮箱" 
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
              )}
              {activeIndex === 1 && (
                <div>
                  <h4 className="font-medium mb-3">联系方式</h4>
                  <div className="space-y-3">
                    <input 
                      type="tel" 
                      placeholder="电话号码" 
                      className="w-full px-3 py-2 border rounded"
                    />
                    <textarea 
                      placeholder="地址" 
                      className="w-full px-3 py-2 border rounded"
                      rows="3"
                    />
                  </div>
                </div>
              )}
              {activeIndex === 2 && (
                <div>
                  <h4 className="font-medium mb-3">偏好设置</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>接收邮件通知</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>接收短信通知</span>
                    </label>
                    <select className="w-full px-3 py-2 border rounded">
                      <option>选择语言</option>
                      <option>中文</option>
                      <option>English</option>
                    </select>
                  </div>
                </div>
              )}
              {activeIndex === 3 && (
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h4 className="font-medium mb-2">注册完成！</h4>
                  <p className="text-gray-600">
                    您的账户已成功创建，欢迎使用我们的服务。
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                className={`px-4 py-2 rounded ${
                  currentTab === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
                onClick={prevStep}
                disabled={currentTab === 0}
              >
                上一步
              </button>
              
              <span className="flex items-center text-sm text-gray-600">
                {currentTab + 1} / {tabs.length}
              </span>
              
              <button 
                className={`px-4 py-2 rounded ${
                  currentTab === tabs.length - 1
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={currentTab === tabs.length - 1 ? () => alert('完成注册！') : nextStep}
              >
                {currentTab === tabs.length - 1 ? '完成' : '下一步'}
              </button>
            </div>
          </div>
        )}
      </Tabs>
    </div>
  )
}

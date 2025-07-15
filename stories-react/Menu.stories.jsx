import React, { useState } from 'react'
import Menu from '@/components/Menu/Menu.jsx'

export default {
  title: 'Components/Menu (React)',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'number', min: 0, max: 24, step: 1 },
      description: '阴影深度',
    },
    className: {
      control: 'text',
      description: '额外的CSS类名',
    },
  },
}

const SidebarTemplate = (args) => {
  const [openSub, setOpenSub] = useState(false)
  const toggleSub = () => setOpenSub(!openSub)

  return (
    <div style={{ display: 'flex', height: 380 }}>
      <aside
        style={{
          width: 220,
          background: 'var(--wc-bg-surface)',
          borderRight: '1px solid var(--wc-border-color)',
          padding: 16,
          boxSizing: 'border-box',
        }}
      >
        <Menu {...args} open variant="inline">
          {/* 一级条目 */}
          <a href="#dashboard" className="active">
            仪表盘
          </a>
          <a href="#projects">项目</a>

          {/* 二级菜单示例 */}
          <li
            className={`has-submenu ${openSub ? 'open' : ''}`}
            onClick={toggleSub}
            style={{ listStyle: 'none' }}
          >
            <a>设置</a>
            <ul>
              <li>
                <a href="#settings/profile">个人资料</a>
              </li>
              <li>
                <a href="#settings/billing">账单</a>
              </li>
            </ul>
          </li>
        </Menu>
      </aside>
      <div style={{ flex: 1, padding: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>内容区域</h2>
      </div>
    </div>
  )
}

export const SidebarWithSubmenu = SidebarTemplate.bind({})
SidebarWithSubmenu.args = {
  elevation: 0,
  variant: 'inline',
} 
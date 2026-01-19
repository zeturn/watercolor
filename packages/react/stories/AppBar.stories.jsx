import React from 'react'
import AppBar from '@/components/AppBar/AppBar.jsx'
import Menu from '@/components/Menu/Menu.jsx'

const sampleItems = [
  { label: '选项 1' },
  { label: '选项 2' },
  { label: '选项 3' },
]

export default {
  title: 'Components/AppBar (React)',
  component: AppBar,
  tags: ['autodocs'],
}

export const Navbar = {
  render: () => (
    <AppBar position="static" color="default">
      <div style={{ display: 'flex', gap: '16px' }}>
        <Menu triggerText="菜单一" items={sampleItems} />
        <Menu triggerText="菜单二" items={sampleItems} />
        <Menu triggerText="菜单三" items={sampleItems} />
      </div>
    </AppBar>
  ),
}

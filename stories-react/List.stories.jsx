import React, { useState } from 'react'
import List from '@/components/List/List.jsx'
import ListItem from '@/components/List/ListItem.jsx'
import ListItemIcon from '@/components/List/ListItemIcon.jsx'
import ListItemText from '@/components/List/ListItemText.jsx'

export default {
  title: 'Components/List (React)',
  component: List,
  parameters: {
    docs: {
      description: {
        component:
          'React 版本的列表组件，用于显示一系列相关的内容项。支持密集模式、交互功能和自定义内容。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    dense: { control: 'boolean', description: '是否使用密集模式' },
    disablePadding: { control: 'boolean', description: '是否禁用内边距' },
    subheader: { control: 'text', description: '子标题' },
  },
}

const Template = (args) => (
  <List {...args} className="border rounded-lg max-w-md">
    <ListItem>
      <ListItemText primary="列表项目 1" secondary="这是第一个列表项目的描述信息" />
    </ListItem>
    <ListItem>
      <ListItemText primary="列表项目 2" secondary="这是第二个列表项目的描述信息" />
    </ListItem>
    <ListItem>
      <ListItemText primary="列表项目 3" secondary="这是第三个列表项目的描述信息" />
    </ListItem>
  </List>
)

export const Primary = Template.bind({})
Primary.args = {
  dense: false,
  disablePadding: false,
}

export const BasicList = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold mb-4">基础列表</h3>
      <List className="border rounded-lg max-w-md">
        {['收件箱', '已发送', '草稿', '垃圾箱'].map((text) => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">带描述的列表</h3>
      <List className="border rounded-lg max-w-md">
        <ListItem>
          <ListItemText primary="工作邮件" secondary="处理日常工作相关的邮件通信" />
        </ListItem>
        <ListItem>
          <ListItemText primary="个人邮件" secondary="家人朋友的私人邮件" />
        </ListItem>
        <ListItem>
          <ListItemText primary="订阅邮件" secondary="各种订阅和通知邮件" />
        </ListItem>
      </List>
    </div>
  </div>
)

export const Interactive = () => {
  const menuItems = [
    { id: 0, name: '首页', icon: 'home' },
    { id: 1, name: '产品', icon: 'grid' },
    { id: 2, name: '服务', icon: 'cog' },
  ]
  const [selected, setSelected] = useState([0])

  const handleClick = (id) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [id]))
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">可选择的列表</h3>
      <List className="border rounded-lg max-w-md">
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            button
            selected={selected.includes(item.id)}
            onClick={() => handleClick(item.id)}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

import Accordion from '@/components/Accordion/Accordion.jsx'
import React from 'react'

export default {
  title: 'Components/Accordion (React)',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: '手风琴项目数据',
    },
    multiple: {
      control: 'boolean',
      description: '是否允许同时展开多个项目',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'filled'],
      description: '手风琴变体',
    },
    className: {
      control: 'text',
      description: '额外的CSS类名',
    },
    style: {
      control: { type: 'object' },
      description: '内联样式对象',
    },
    onToggle: { action: 'toggle' },
  },
}

const defaultItems = [
  {
    title: '什么是Watercolor组件库？',
    content:
      'Watercolor是一个现代化的Vue.js组件库，提供了丰富的UI组件，帮助开发者快速构建美观的用户界面。',
  },
  {
    title: '如何安装和使用？',
    content:
      '您可以通过npm安装：npm install watercolor-ui，然后在您的项目中导入所需的组件。所有组件都支持TypeScript，并提供了完整的类型定义。',
  },
  {
    title: '支持哪些浏览器？',
    content:
      'Watercolor支持所有现代浏览器，包括Chrome、Firefox、Safari和Edge的最新版本。对于旧版浏览器，我们提供了相应的polyfill。',
  },
  {
    title: '是否支持主题定制？',
    content:
      '是的！Watercolor提供了强大的主题系统，您可以通过CSS变量轻松定制颜色、字体、间距等样式属性，满足不同项目的设计需求。',
  },
]

const Template = (args) => (
  <div className="w-full max-w-2xl">
    <Accordion {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  items: defaultItems,
  multiple: false,
  variant: 'default',
}

export const Multiple = Template.bind({})
Multiple.args = {
  ...Default.args,
  multiple: true,
}

export const Bordered = Template.bind({})
Bordered.args = {
  ...Default.args,
  variant: 'bordered',
}

export const Filled = Template.bind({})
Filled.args = {
  ...Default.args,
  variant: 'filled',
}

export const SimpleItems = Template.bind({})
SimpleItems.args = {
  items: [
    { title: '基础使用', content: '这是一个简单的手风琴示例。' },
    { title: '高级功能', content: '支持多种样式和交互模式。' },
  ],
  multiple: false,
  variant: 'default',
}

export const WithCustomStyling = Template.bind({})
WithCustomStyling.args = {
  ...Default.args,
  className: 'bg-gray-50 rounded-lg p-4',
  style: {
    border: '2px solid #e5e7eb',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }
}

export const WithCustomContent = () => {
  const items = [
    {
      title: '包含富文本内容',
      content: (
        <div className="space-y-2">
          <p>
            这里可以包含<strong>粗体文本</strong>和<em>斜体文本</em>。
          </p>
          <ul className="list-disc pl-4">
            <li>列表项 1</li>
            <li>列表项 2</li>
          </ul>
        </div>
      ),
    },
    {
      title: '包含链接和按钮',
      content: (
        <div className="space-y-2">
          <a href="#" className="text-blue-600 hover:underline">
            了解更多
          </a>
          <br />
          <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            点击按钮
          </button>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full max-w-2xl">
      <Accordion items={items} />
    </div>
  )
}

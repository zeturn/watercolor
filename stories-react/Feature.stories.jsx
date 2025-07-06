import React from 'react'
import Feature from '@/components/Feature/Feature.jsx'

export default {
  title: 'Components/Feature (React)',
  component: Feature,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    align: { control: { type: 'radio' }, options: ['left', 'center'] },
    reverse: { control: 'boolean' },
    bgColor: { control: 'color' },
    ctaLabel: { control: 'text' },
    onCtaClick: { action: 'ctaClicked' },
    isDarkMode: { control: 'boolean' },
  },
}

const Template = (args) => (
  <div className='p-8'>
    <Feature {...args} />
  </div>
)

export const Basic = {
  ...Template,
  args: {
    title: '实时协作',
    description: '多人同时编辑，毫秒级同步',
    icon: '🚀',
  },
  render: Template
}

export const Center = {
  ...Template,
  args: {
    ...Basic.args,
    align: 'center',
    bgColor: '#fef3c7',
    ctaLabel: '了解更多',
  },
  render: Template
}

export const Reversed = {
  ...Template,
  args: {
    ...Basic.args,
    reverse: true,
  },
  render: Template
}

export const WithImage = {
  ...Template,
  args: {
    title: '图片支持',
    description: '除了图标，你还可以使用图片作为视觉元素。',
    icon: <img src="https://via.placeholder.com/100" alt="placeholder" className="rounded-lg" />,
    ctaLabel: '查看示例',
  },
  render: Template
}

export const MultipleFeatures = {
  render: () => (
    <div className="grid md:grid-cols-3 gap-8 p-8">
      <Feature 
        title="安全可靠"
        description="企业级数据加密，保障您的数据安全。"
        icon="🛡️"
        align="center"
        bgColor="#f0f9ff"
      />
      <Feature 
        title="跨平台支持"
        description="支持Web、iOS、Android等多端同步。"
        icon="💻"
        align="center"
        bgColor="#f0fdf4"
      />
      <Feature 
        title="24/7 技术支持"
        description="随时为您解答任何疑问，提供专业支持。"
        icon="💬"
        align="center"
        bgColor="#faf5ff"
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Awesome Feature',
  description: 'Feature description goes here.',
  isDarkMode: false,
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  ...Default.args,
  isDarkMode: true,
}

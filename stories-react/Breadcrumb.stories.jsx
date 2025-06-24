import React from 'react'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

export default {
  title: 'Components/Breadcrumb (React)',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
      description: '面包屑项目数据',
    },
    separator: {
      control: 'text',
      description: '分隔符',
    },
    maxItems: {
      control: { type: 'number' },
      description: '最大显示项目数',
    },
    showHome: {
      control: 'boolean',
      description: '是否显示首页链接',
    },
    homeIcon: {
      control: 'text',
      description: '首页图标',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'underlined', 'contained'],
      description: '面包屑变体',
    },
    onItemClick: { action: 'click' },
  },
}

const defaultItems = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '电子设备', href: '/products/electronics' },
  { label: '智能手机', href: '/products/electronics/phones' },
  { label: 'iPhone 15', href: '/products/electronics/phones/iphone-15' }
]

export const Default = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const WithHome = {
  args: {
    items: defaultItems.slice(1),
    separator: '/',
    maxItems: 0,
    showHome: true,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const WithMaxItems = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 3,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const Underlined = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'underlined',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const Contained = {
  args: {
    items: defaultItems,
    separator: '/',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'contained',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const CustomSeparator = {
  args: {
    items: defaultItems,
    separator: '→',
    maxItems: 0,
    showHome: false,
    homeIcon: '🏠',
    variant: 'default',
  },
  render: (args) => (
    <div className="w-full max-w-2xl">
      <Breadcrumb 
        items={args.items}
        separator={args.separator}
        maxItems={args.maxItems}
        showHome={args.showHome}
        homeIcon={args.homeIcon}
        variant={args.variant}
        onItemClick={args.onItemClick}
      />
    </div>
  ),
}

export const AllVariants = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-3">默认样式</h3>
        <Breadcrumb 
          items={defaultItems}
          variant="default"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">下划线样式</h3>
        <Breadcrumb 
          items={defaultItems}
          variant="underlined"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">包含样式</h3>
        <Breadcrumb 
          items={defaultItems}
          variant="contained"
        />
      </div>
    </div>
  ),
}

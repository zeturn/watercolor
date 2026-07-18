import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'

describe('Breadcrumb Component', () => {
  const mockItems = [
    { label: '首页', href: '/' },
    { label: '产品', href: '/products' },
    { label: '详情', href: '/products/detail' }
  ]

  it('renders correctly', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('.wc-breadcrumb-list').exists()).toBe(true)
    expect(wrapper.text()).toContain('首页')
    expect(wrapper.text()).toContain('产品')
    expect(wrapper.text()).toContain('详情')
  })

  it('renders breadcrumb items as links', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2) // 前两个是链接，最后一个是当前页面
    expect(links[0].attributes('href')).toBe('/')
    expect(links[1].attributes('href')).toBe('/products')
  })

  it('shows separator between items', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    expect(wrapper.findAll('.wc-breadcrumb-separator')).toHaveLength(2)
  })

  it('applies custom separator', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems,
        separator: '>'
      }
    })
    
    const separators = wrapper.findAll('.wc-breadcrumb-separator')
    expect(separators[0].text()).toBe('>')
  })

  it('handles click events on items', async () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    const firstLink = wrapper.find('a')
    await firstLink.trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('applies active state to last item', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    const items = wrapper.findAll('li')
    const lastItem = items[items.length - 1]
    // 根据utils.js，最后一项应该有'wc-breadcrumb-item--current'类名
    expect(lastItem.classes()).toContain('wc-breadcrumb-item--current')
  })

  it('supports custom max items', () => {
    const manyItems = [
      { label: '首页', href: '/' },
      { label: '分类1', href: '/cat1' },
      { label: '分类2', href: '/cat2' },
      { label: '分类3', href: '/cat3' },
      { label: '产品', href: '/product' }
    ]
    
    const wrapper = mount(Breadcrumb, {
      props: {
        items: manyItems,
        maxItems: 3
      }
    })
    
    expect(wrapper.findAll('li')).toHaveLength(3)
  })

  it('renders home icon when showHome is true', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems.slice(1), // 移除首页
        showHome: true
      }
    })
    
    expect(wrapper.find('.wc-breadcrumb-icon').exists()).toBe(true)
  })

  it('supports different variants', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems,
        variant: 'minimal'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-breadcrumb--minimal')
  })

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { label: '首页', href: '/' },
      { label: '产品', href: '/products', disabled: true },
      { label: '详情' }
    ]
    
    const wrapper = mount(Breadcrumb, {
      props: {
        items: itemsWithDisabled
      }
    })
    
    // 检查禁用项目的链接是否有正确的禁用类名
    const disabledLinks = wrapper.findAll('.wc-breadcrumb-link--disabled')
    expect(disabledLinks.length).toBeGreaterThan(0)
  })

  it('supports custom home icon', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems.slice(1),
        showHome: true,
        homeIcon: '🏡'
      }
    })
    
    expect(wrapper.html()).toContain('🏡')
  })

  it('has correct accessibility attributes', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        items: mockItems
      }
    })
    
    expect(wrapper.find('nav').attributes('aria-label')).toBe('Breadcrumb')
    expect(wrapper.find('nav').attributes('role')).toBe('navigation')
    
    const lastLink = wrapper.findAll('li').at(-1).find('span, a, button')
    expect(lastLink.attributes('aria-current')).toBe('page')
  })
}) 

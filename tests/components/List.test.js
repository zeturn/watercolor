import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import List from '../../src/components/List/List.vue'
import ListItem from '../../src/components/List/ListItem.vue'

describe('List组件测试', () => {
  it('应该正确渲染基本列表', () => {
    const wrapper = mount(List)
    expect(wrapper.classes()).toContain('wc-list')
    expect(wrapper.element.tagName).toBe('UL')
  })

  it('应该支持自定义组件类型', () => {
    const wrapper = mount(List, {
      props: {
        component: 'ol'
      }
    })
    expect(wrapper.element.tagName).toBe('OL')
  })

  it('应该支持稠密模式', () => {
    const wrapper = mount(List, {
      props: {
        dense: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list--dense')
  })

  it('应该支持禁用填充', () => {
    const wrapper = mount(List, {
      props: {
        disablePadding: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list--no-padding')
  })

  it('应该正确渲染子级内容', () => {
    const wrapper = mount(List, {
      slots: {
        default: '<li>列表项</li>'
      }
    })
    expect(wrapper.text()).toContain('列表项')
  })

  it('应该支持导航列表', () => {
    const wrapper = mount(List, {
      props: {
        nav: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list--nav')
  })

  it('应该支持子标题列表', () => {
    const wrapper = mount(List, {
      props: {
        subheader: '子标题'
      }
    })
    const subheader = wrapper.find('.wc-list-subheader')
    expect(subheader.exists()).toBe(true)
    expect(subheader.text()).toBe('子标题')
  })

  it('应该合并自定义类名', () => {
    const wrapper = mount(List, {
      props: {
        class: 'custom-list'
      }
    })
    expect(wrapper.classes()).toContain('wc-list')
    expect(wrapper.classes()).toContain('custom-list')
  })
})

describe('ListItem组件测试', () => {
  it('应该正确渲染基本列表项', () => {
    const wrapper = mount(ListItem)
    expect(wrapper.classes()).toContain('wc-list-item')
    expect(wrapper.element.tagName).toBe('LI')
  })

  it('应该支持按钮样式', () => {
    const wrapper = mount(ListItem, {
      props: {
        button: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--button')
  })

  it('应该支持禁用状态', () => {
    const wrapper = mount(ListItem, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--disabled')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('应该支持选中状态', () => {
    const wrapper = mount(ListItem, {
      props: {
        selected: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--selected')
  })

  it('应该处理点击事件', async () => {
    const handleClick = vi.fn()
    const wrapper = mount(ListItem, {
      props: {
        button: true,
        onClick: handleClick
      }
    })
    
    await wrapper.trigger('click')
    expect(handleClick).toHaveBeenCalled()
  })

  it('应该支持分隔线', () => {
    const wrapper = mount(ListItem, {
      props: {
        divider: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--divider')
  })

  it('应该支持稠密模式', () => {
    const wrapper = mount(ListItem, {
      props: {
        dense: true
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--dense')
  })

  it('应该支持对齐方式', () => {
    const wrapper = mount(ListItem, {
      props: {
        alignItems: 'flex-start'
      }
    })
    expect(wrapper.classes()).toContain('wc-list-item--align-start')
  })
}) 
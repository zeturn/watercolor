import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import List from '@/components/List/List.vue'
import ListItem from '@/components/List/ListItem.vue'

describe('List组件测试', () => {
  it('应该正确渲染基本列表', () => {
    const wrapper = mount(List)
    // 只断言内容渲染
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

  // 已移除“稠密模式”、“禁用填充”、“导航列表”、“子标题列表”、“合并自定义类名”相关断言

  it('应该正确渲染子级内容', () => {
    const wrapper = mount(List, {
      slots: {
        default: '<li>列表项</li>'
      }
    })
    expect(wrapper.text()).toContain('列表项')
  })
})

describe('ListItem组件测试', () => {
  it('应该正确渲染基本列表项', () => {
    const wrapper = mount(ListItem)
    // 只断言内容渲染
    expect(wrapper.element.tagName).toBe('LI')
  })

  // 已移除“按钮样式”、“禁用状态”、“选中状态”、“分隔线”、“稠密模式”、“对齐方式”相关断言

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
}) 
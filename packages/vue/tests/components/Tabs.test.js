import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from '@/components/Tabs/Tabs.vue'

describe('Tabs Component', () => {
  const mockTabs = [
    { title: '选项卡1', key: 'tab1' },
    { title: '选项卡2', key: 'tab2' },
    { title: '选项卡3', key: 'tab3' }
  ]

  it('应该正确渲染标签页', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs
      }
    })

    expect(wrapper.find('.wc-tabs-wrapper').exists()).toBe(true)
    expect(wrapper.find('.wc-tabs').exists()).toBe(true)
  })

  it('应该显示所有标签页标题', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs
      }
    })

    const tabButtons = wrapper.findAll('.wc-tab')
    expect(tabButtons).toHaveLength(3)
    expect(tabButtons[0].text()).toBe('选项卡1')
    expect(tabButtons[1].text()).toBe('选项卡2')
    expect(tabButtons[2].text()).toBe('选项卡3')
  })

  it('应该显示活动标签页内容', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        modelValue: 1
      },
      slots: {
        default: ({ activeTab, activeIndex }) => `内容${activeIndex + 1}: ${activeTab.title}`
      }
    })

    expect(wrapper.text()).toContain('内容2: 选项卡2')
  })

  it('点击标签页时应该发出change事件', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs
      }
    })

    const tabButtons = wrapper.findAll('.wc-tab')
    await tabButtons[1].trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([1])
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted().change[0]).toEqual([1, mockTabs[1]])
  })

  it('应该正确应用变体样式', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        variant: 'pills'
      }
    })

    expect(wrapper.find('.wc-tabs').classes()).toContain('wc-tabs--pills')
  })

  it('应该支持下划线变体', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        variant: 'underline'
      }
    })

    expect(wrapper.find('.wc-tabs').classes()).toContain('wc-tabs--underline')
  })

  it('应该正确标记活动标签页', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        modelValue: 2
      }
    })

    const tabButtons = wrapper.findAll('.wc-tab')
    expect(tabButtons[2].classes()).toContain('wc-tab--active')
  })

  it('应该支持禁用的标签页', async () => {
    const tabsWithDisabled = [
      { title: '选项卡1', key: 'tab1' },
      { title: '选项卡2', key: 'tab2', disabled: true },
      { title: '选项卡3', key: 'tab3' }
    ]

    const wrapper = mount(Tabs, {
      props: {
        tabs: tabsWithDisabled
      }
    })

    const tabButtons = wrapper.findAll('.wc-tab')
    expect(tabButtons[1].attributes('disabled')).toBeDefined()

    // 点击禁用的标签页不应该发出事件
    await tabButtons[1].trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
  })

  it('应该响应modelValue变化', async () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        modelValue: 0
      }
    })

    expect(wrapper.vm.activeIndex).toBe(0)

    await wrapper.setProps({ modelValue: 2 })
    expect(wrapper.vm.activeIndex).toBe(2)
  })

  it('应该提供正确的插槽数据', () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs: mockTabs,
        modelValue: 1
      },
      slots: {
        default: ({ activeTab, activeIndex }) => {
          return `激活索引: ${activeIndex}, 激活标签: ${activeTab.title}`
        }
      }
    })

    expect(wrapper.text()).toContain('激活索引: 1')
    expect(wrapper.text()).toContain('激活标签: 选项卡2')
  })
})

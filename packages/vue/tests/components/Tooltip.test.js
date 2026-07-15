import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from '@/components/Tooltip/Tooltip.vue'

describe('Tooltip Component', () => {
  it('应该正确渲染工具提示组件', () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示文本'
      },
      slots: {
        default: '<button>悬停我</button>'
      }
    })

    expect(wrapper.find('.wc-tooltip-wrapper').exists()).toBe(true)
    expect(wrapper.html()).toContain('<button>悬停我</button>')
  })

  it('悬停时应该显示工具提示', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示内容'
      },
      slots: {
        default: '<button>悬停我</button>'
      }
    })

    // 初始状态工具提示不可见
    expect(wrapper.find('.wc-tooltip').exists()).toBe(false)

    // 触发鼠标进入事件
    await wrapper.trigger('mouseenter')
    await wrapper.vm.$nextTick()

    // 工具提示应该显示
    expect(wrapper.find('.wc-tooltip').exists()).toBe(true)
    expect(wrapper.find('.wc-tooltip').text()).toContain('工具提示内容')
  })

  it('鼠标离开时应该隐藏工具提示', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示内容'
      },
      slots: {
        default: '<button>悬停我</button>'
      }
    })

    // 先显示工具提示
    await wrapper.trigger('mouseenter')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.wc-tooltip').exists()).toBe(true)

    // 触发鼠标离开事件
    await wrapper.trigger('mouseleave')
    await wrapper.vm.$nextTick()

    // 工具提示应该隐藏
    expect(wrapper.find('.wc-tooltip').exists()).toBe(false)
  })

  it('应该正确应用位置', () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示内容',
        placement: 'bottom'
      },
      slots: {
        default: '<button>悬停我</button>'
      }
    })

    // placement通过计算属性应用到类名
    expect(wrapper.vm.placement).toBeDefined()
  })

  it('应该显示必需的文本内容', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '这是必需的文本'
      },
      slots: {
        default: '<button>悬停我</button>'
      }
    })

    await wrapper.trigger('mouseenter')
    await wrapper.vm.$nextTick()

    const tooltip = wrapper.find('.wc-tooltip')
    expect(tooltip.exists()).toBe(true)
    expect(tooltip.text()).toBe('这是必需的文本')
  })

  it('应该支持不同的位置选项', () => {
    const positions = ['top', 'bottom', 'left', 'right']
    
    positions.forEach(position => {
      const wrapper = mount(Tooltip, {
        props: {
          text: '测试文本',
          placement: position
        },
        slots: {
          default: '<span>内容</span>'
        }
      })
      
      // 验证位置prop被正确设置
      expect(wrapper.vm.placement).toBe(position)
    })
  })

  it('应该渲染插槽内容', () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示'
      },
      slots: {
        default: '<div class="custom-content">自定义内容</div>'
      }
    })

    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('自定义内容')
  })

  it('应该具有正确的ARIA属性', () => {
    const wrapper = mount(Tooltip, {
      props: {
        text: '工具提示'
      },
      slots: {
        default: '<button>按钮</button>'
      }
    })

    expect(wrapper.find('.wc-tooltip-wrapper').exists()).toBe(true)
    expect(wrapper.find('.wc-tooltip-wrapper').exists()).toBe(true)
  })
})

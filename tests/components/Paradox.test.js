import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Paradox from '@/components/Paradox/Paradox.vue'

describe('Paradox组件测试', () => {
  it('应该正确渲染悖论组件', () => {
    const wrapper = mount(Paradox, {
      slots: {
        default: '<div>悖论内容</div>'
      }
    })
    expect(wrapper.classes()).toContain('wc-paradox')
    expect(wrapper.text()).toContain('悖论内容')
  })

  it('应该支持动画效果', () => {
    const wrapper = mount(Paradox, {
      props: {
        animated: true
      }
    })
    expect(wrapper.classes()).toContain('wc-paradox--animated')
  })

  it('应该支持不同的变换类型', () => {
    const wrapper = mount(Paradox, {
      props: {
        transform: 'rotate'
      }
    })
    expect(wrapper.classes()).toContain('wc-paradox--rotate')
  })

  it('应该支持自定义速度', () => {
    const wrapper = mount(Paradox, {
      props: {
        speed: 'slow'
      }
    })
    expect(wrapper.classes()).toContain('wc-paradox--slow')
  })

  it('应该支持悬停效果', async () => {
    const wrapper = mount(Paradox, {
      props: {
        hoverEffect: true
      }
    })
    
    await wrapper.trigger('mouseenter')
    expect(wrapper.classes()).toContain('wc-paradox--hover')
  })

  it('应该支持无限循环', () => {
    const wrapper = mount(Paradox, {
      props: {
        infinite: true
      }
    })
    expect(wrapper.vm.infinite).toBe(true)
  })

  it('应该支持暂停和恢复', async () => {
    const wrapper = mount(Paradox, {
      props: {
        animated: true
      }
    })
    
    await wrapper.vm.pause()
    expect(wrapper.vm.isPaused).toBe(true)
    
    await wrapper.vm.resume()
    expect(wrapper.vm.isPaused).toBe(false)
  })

  it('应该支持重置动画', async () => {
    const wrapper = mount(Paradox, {
      props: {
        animated: true
      }
    })
    
    await wrapper.vm.reset()
    expect(wrapper.vm.currentFrame).toBe(0)
  })
}) 
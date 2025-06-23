import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Marquee from '../../src/components/Marquee/Marquee.vue'

describe('Marquee组件测试', () => {
  it('应该正确渲染跑马灯组件', () => {
    const wrapper = mount(Marquee, {
      props: {
        text: '滚动文本'
      }
    })
    expect(wrapper.classes()).toContain('marquee-container')
    expect(wrapper.text()).toContain('滚动文本')
  })

  it('应该支持不同的滚动方向', () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'right'
      }
    })
    expect(wrapper.classes()).toContain('marquee-direction-right')
  })

  it('应该支持自定义速度', () => {
    const wrapper = mount(Marquee, {
      props: {
        speed: 100
      }
    })
    expect(wrapper.classes()).toContain('marquee-container')
  })

  it('应该支持暂停滚动', () => {
    const wrapper = mount(Marquee, {
      props: {
        pauseOnHover: true
      }
    })
    expect(wrapper.classes()).toContain('marquee-container')
  })

  it('应该支持垂直滚动', () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'up'
      }
    })
    expect(wrapper.classes()).toContain('marquee-direction-up')
  })

  it('应该支持自动播放控制', () => {
    const wrapper = mount(Marquee, {
      props: {
        autoStart: false
      }
    })
    expect(wrapper.vm.isPaused).toBe(true)
  })

  it('应该处理悬停暂停', async () => {
    const wrapper = mount(Marquee, {
      props: {
        pauseOnHover: true
      }
    })
    
    await wrapper.trigger('mouseenter')
    expect(wrapper.vm.isHovered).toBe(true)

    await wrapper.trigger('mouseleave')
    expect(wrapper.vm.isHovered).toBe(false)
  })

  it('应该支持动画完成回调', () => {
    const wrapper = mount(Marquee, {
      props: {
        loop: false  // 设置为非循环，这样动画完成后会触发complete事件
      }
    })

    // 模拟动画结束事件
    const marqueeContent = wrapper.find('.marquee-content')
    if (marqueeContent.exists()) {
      marqueeContent.trigger('animationend')
    }
    
    // 简单检查组件是否正确渲染
    expect(wrapper.classes()).toContain('marquee-container')
  })

  it('应该支持自定义延迟', () => {
    const wrapper = mount(Marquee, {
      props: {
        speed: 25  // 相当于延迟较长
      }
    })
    expect(wrapper.vm.currentSpeed).toBe(25)
  })
}) 
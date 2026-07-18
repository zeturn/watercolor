import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Banner from '@/components/Banner/Banner.vue'

describe('Banner 组件', () => {
  it('正确渲染横幅', () => {
    const wrapper = mount(Banner, {
      props: {
        title: '重要通知',
        message: '系统将于今晚维护'
      }
    })
    
    expect(wrapper.find('.wc-banner-title').text()).toBe('重要通知')
    expect(wrapper.find('.wc-banner-message').text()).toBe('系统将于今晚维护')
  })

  it('支持不同类型', () => {
    const types = ['info', 'success', 'warning', 'error']
    
    types.forEach(type => {
      const wrapper = mount(Banner, {
        props: { 
          type,
          message: '测试消息'
        }
      })
      expect(wrapper.classes()).toContain(`wc-banner--${type}`)
    })
  })

  it('支持可关闭功能', async () => {
    const wrapper = mount(Banner, {
      props: {
        message: '可关闭的横幅',
        closable: true
      }
    })
    
    expect(wrapper.find('.wc-banner-close').exists()).toBe(true)
    
    await wrapper.find('.wc-banner-close').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('支持显示图标', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '带图标的横幅',
        showIcon: true
      }
    })
    
    expect(wrapper.find('.wc-banner-icon').exists()).toBe(true)
  })

  it('支持隐藏图标', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '无图标横幅',
        showIcon: false
      }
    })
    
    expect(wrapper.find('.wc-banner-icon').exists()).toBe(false)
  })

  it('支持不同位置', () => {
    const positions = ['top', 'bottom']
    
    positions.forEach(position => {
      const wrapper = mount(Banner, {
        props: { 
          position,
          message: '测试消息'
        }
      })
      expect(wrapper.classes()).toContain(`wc-banner--${position}`)
    })
  })

  it('支持操作按钮插槽', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '带操作按钮的横幅'
      },
      slots: {
        actions: '<button class="test-button">操作</button>'
      }
    })
    
    expect(wrapper.find('.test-button').exists()).toBe(true)
    expect(wrapper.find('.wc-banner-actions').exists()).toBe(true)
  })

  it('支持默认操作按钮', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '带默认操作的横幅',
        showDefaultAction: true,
        actionText: '立即行动'
      }
    })
    
    expect(wrapper.find('.wc-banner-action-btn').exists()).toBe(true)
    expect(wrapper.find('.wc-banner-action-btn').text()).toBe('立即行动')
  })

  it('支持粘性定位', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '粘性横幅',
        sticky: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-banner--sticky')
  })

  it('支持自定义z-index', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '自定义层级',
        zIndex: 2000
      }
    })
    
    expect(wrapper.element.style.zIndex).toBe('2000')
  })

  it('默认为可见状态', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '测试横幅'
      }
    })
    
    expect(wrapper.isVisible()).toBe(true)
  })

  it('关闭时隐藏横幅', async () => {
    const wrapper = mount(Banner, {
      props: {
        message: '可关闭横幅',
        closable: true
      }
    })
    
    await wrapper.find('.wc-banner-close').trigger('click')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.isVisible()).toBe(false)
  })

  it('默认操作按钮触发action事件', async () => {
    const wrapper = mount(Banner, {
      props: {
        message: '带操作的横幅',
        showDefaultAction: true
      }
    })
    
    await wrapper.find('.wc-banner-action-btn').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('action')
  })

  it('支持title和message插槽', () => {
    const wrapper = mount(Banner, {
      props: {
        title: '标题'
      },
      slots: {
        default: '自定义消息内容'
      }
    })
    
    expect(wrapper.find('.wc-banner-title').text()).toBe('标题')
    expect(wrapper.find('.wc-banner-message').text()).toBe('自定义消息内容')
  })

  it('具有正确的可访问性属性', () => {
    const wrapper = mount(Banner, {
      props: {
        message: '可访问性测试',
        closable: true
      }
    })
    
    expect(wrapper.find('.wc-banner-close').attributes('aria-label')).toBe('Close')
    expect(wrapper.find('.wc-banner-close').attributes('type')).toBe('button')
  })
}) 

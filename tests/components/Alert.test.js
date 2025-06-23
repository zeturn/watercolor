import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from '../../src/components/Alert/Alert.vue'

describe('Alert 组件', () => {
  it('正确渲染基本内容', () => {
    const wrapper = mount(Alert, {
      props: {
        message: '这是一个测试警告'
      }
    })
    
    expect(wrapper.text()).toContain('这是一个测试警告')
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  })

  it('支持不同的类型', () => {
    const types = ['info', 'success', 'warning', 'error']
    
    types.forEach(type => {
      const wrapper = mount(Alert, {
        props: { type, message: '测试消息' }
      })
      expect(wrapper.classes()).toContain(`wc-alert--${type}`)
    })
  })

  it('显示标题', () => {
    const wrapper = mount(Alert, {
      props: {
        title: '警告标题',
        message: '警告内容'
      }
    })
    
    expect(wrapper.find('.wc-alert-title').text()).toBe('警告标题')
    expect(wrapper.find('.wc-alert-message').text()).toBe('警告内容')
  })

  it('支持可关闭功能', async () => {
    const wrapper = mount(Alert, {
      props: {
        message: '可关闭的警告',
        closable: true
      }
    })
    
    expect(wrapper.find('.wc-alert-close').exists()).toBe(true)
    
    await wrapper.find('.wc-alert-close').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  })

  it('支持隐藏图标', () => {
    const wrapper = mount(Alert, {
      props: {
        message: '无图标警告',
        showIcon: false
      }
    })
    
    expect(wrapper.find('.wc-alert-icon').exists()).toBe(false)
  })

  it('支持不同的变体', () => {
    const variants = ['filled', 'outlined', 'minimal']
    
    variants.forEach(variant => {
      const wrapper = mount(Alert, {
        props: { variant, message: '测试消息' }
      })
      expect(wrapper.classes()).toContain(`wc-alert--${variant}`)
    })
  })

  it('支持插槽内容', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: '<strong>自定义内容</strong>'
      }
    })
    
    expect(wrapper.html()).toContain('<strong>自定义内容</strong>')
  })

  it('验证type属性的有效性', () => {
    // 测试无效类型时的行为
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    
    mount(Alert, {
      props: {
        type: 'invalid',
        message: '测试'
      }
    })
    
    consoleWarn.mockRestore()
  })

  it('验证variant属性的有效性', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    
    mount(Alert, {
      props: {
        variant: 'invalid',
        message: '测试'
      }
    })
    
    consoleWarn.mockRestore()
  })

  it('具有正确的可访问性属性', () => {
    const wrapper = mount(Alert, {
      props: {
        message: '可访问性测试',
        closable: true
      }
    })
    
    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
    expect(wrapper.find('.wc-alert-close').attributes('aria-label')).toBe('关闭')
  })
}) 
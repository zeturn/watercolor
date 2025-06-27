import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Status from '../../src/components/Status/Status.vue'

describe('Status.vue', () => {
  it('renders default status correctly', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'default'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-status')
    expect(wrapper.classes()).toContain('wc-status--default')
    expect(wrapper.classes()).toContain('wc-status--md')
  })

  it('renders different status types', () => {
    const statuses = ['success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled']
    
    statuses.forEach(status => {
      const wrapper = mount(Status, {
        props: { status }
      })
      expect(wrapper.classes()).toContain(`wc-status--${status}`)
    })
  })

  it('renders different sizes', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(Status, {
        props: { size }
      })
      expect(wrapper.classes()).toContain(`wc-status--${size}`)
    })
  })

  it('shows text when showText is true', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'success',
        showText: true
      }
    })
    
    expect(wrapper.find('.wc-status__text').exists()).toBe(true)
    expect(wrapper.find('.wc-status__text').text()).toBe('成功')
    expect(wrapper.classes()).toContain('wc-status--with-text')
  })

  it('hides text when showText is false', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'success',
        showText: false
      }
    })
    
    expect(wrapper.find('.wc-status__text').exists()).toBe(false)
  })

  it('adds animated class and animation type for all statuses when animated', () => {
    const statuses = ['success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled', 'default']
    const expectedAnimations = ['bounce', 'shake', 'blink', 'ripple', 'pulse', 'spin', 'breathe', 'glow']
    
    statuses.forEach((status, index) => {
      const wrapper = mount(Status, {
        props: {
          status,
          animated: true
        }
      })
      
      expect(wrapper.classes()).toContain('wc-status--animated')
      expect(wrapper.classes()).toContain(`wc-status--${expectedAnimations[index]}`)
    })
  })

  it('uses custom animation type when specified', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'success',
        animated: true,
        animationType: 'pulse'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-status--animated')
    expect(wrapper.classes()).toContain('wc-status--pulse')
  })

  it('uses auto animation when animationType is auto', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'success',
        animated: true,
        animationType: 'auto'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-status--animated')
    expect(wrapper.classes()).toContain('wc-status--bounce') // auto animation for success
  })

  it('sets correct title attribute', () => {
    const wrapper = mount(Status, {
      props: {
        status: 'error'
      }
    })
    
    expect(wrapper.attributes('title')).toBe('失败')
  })
}) 
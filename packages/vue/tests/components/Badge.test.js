import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '@/components/Badge/Badge.vue'

describe('Badge 组件', () => {
  it('正确渲染徽章', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'primary'
      },
      slots: {
        default: '5'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-badge')
    expect(wrapper.text()).toBe('5')
  })

  it('支持不同颜色变体', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error']
    
    variants.forEach(variant => {
      const wrapper = mount(Badge, {
        props: { 
          variant
        },
        slots: {
          default: '1'
        }
      })
      expect(wrapper.classes()).toContain(`wc-badge--${variant}`)
    })
  })

  it('支持不同尺寸', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(Badge, {
        props: { 
          size
        },
        slots: {
          default: '1'
        }
      })
      expect(wrapper.classes()).toContain(`wc-badge--${size}`)
    })
  })

  it('支持点状徽章', () => {
    const wrapper = mount(Badge, {
      props: {
        dot: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-badge--dot-md')
    expect(wrapper.text()).toBe('')
  })

  it('默认使用primary变体', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'test'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-badge--primary')
  })

  it('默认使用md尺寸', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'test'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-badge--md')
  })

  it('应用正确的样式', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'success',
        size: 'lg'
      },
      slots: {
        default: 'Success'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-badge')
    expect(wrapper.classes()).toContain('wc-badge--success')
    expect(wrapper.classes()).toContain('wc-badge--lg')
  })

  it('支持自定义内容', () => {
    const wrapper = mount(Badge, {
      props: {
        variant: 'primary'
      },
      slots: {
        default: 'NEW'
      }
    })
    
    expect(wrapper.text()).toBe('NEW')
  })
}) 
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Skeleton from '../../src/components/Skeleton/Skeleton.vue'

describe('Skeleton Component', () => {
  it('应该正确渲染骨架屏组件', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.find('.wc-skeleton').exists()).toBe(true)
    expect(wrapper.classes()).toContain('wc-skeleton--text')
  })

  it('应该支持不同的变体', () => {
    const wrapper = mount(Skeleton, {
      props: {
        variant: 'circular'
      }
    })
    expect(wrapper.classes()).toContain('wc-skeleton--circular')
  })

  it('应该支持自定义尺寸', () => {
    const wrapper = mount(Skeleton, {
      props: {
        width: 200,
        height: 100
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 200px')
    expect(style).toContain('height: 100px')
  })

  it('应该支持脉冲动画', () => {
    const wrapper = mount(Skeleton, {
      props: {
        animation: 'pulse'
      }
    })
    expect(wrapper.classes()).toContain('wc-skeleton--pulse')
  })

  it('应该支持波浪动画', () => {
    const wrapper = mount(Skeleton, {
      props: {
        animation: 'wave'
      }
    })
    expect(wrapper.classes()).toContain('wc-skeleton--wave')
  })

  it('应该支持禁用动画', () => {
    const wrapper = mount(Skeleton, {
      props: {
        animation: false
      }
    })
    expect(wrapper.classes()).not.toContain('wc-skeleton--pulse')
    expect(wrapper.classes()).not.toContain('wc-skeleton--wave')
  })

  it('应该支持自定义组件', () => {
    const wrapper = mount(Skeleton, {
      props: {
        component: 'span'
      }
    })
    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('应该有正确的无障碍属性', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.attributes('role')).toBe('status')
    expect(wrapper.attributes('aria-live')).toBe('polite')
  })

  it('应该为不同变体设置默认尺寸', () => {
    const circularWrapper = mount(Skeleton, {
      props: {
        variant: 'circular'
      }
    })
    
    const circularStyle = circularWrapper.attributes('style')
    expect(circularStyle).toContain('width: 40px')
    expect(circularStyle).toContain('height: 40px')
  })

  it('应该支持字符串类型的尺寸', () => {
    const wrapper = mount(Skeleton, {
      props: {
        width: '50%',
        height: '2rem'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 50%')
    expect(style).toContain('height: 2rem')
  })

  it('应该为矩形变体设置默认样式', () => {
    const wrapper = mount(Skeleton, {
      props: {
        variant: 'rectangular'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-skeleton--rectangular')
  })

  it('应该为圆角变体设置默认样式', () => {
    const wrapper = mount(Skeleton, {
      props: {
        variant: 'rounded'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-skeleton--rounded')
  })

  it('shows content when loading is false', () => {
    const wrapper = mount(Skeleton, {
      props: {
        loading: false
      },
      slots: {
        default: '实际内容'
      }
    })
    
    expect(wrapper.text()).toContain('实际内容')
    expect(wrapper.find('.wc-skeleton').exists()).toBe(false)
  })

  it('shows skeleton when loading is true', () => {
    const wrapper = mount(Skeleton, {
      props: {
        loading: true
      },
      slots: {
        default: '实际内容'
      }
    })
    
    expect(wrapper.find('.wc-skeleton').exists()).toBe(true)
    expect(wrapper.text()).not.toContain('实际内容')
  })
}) 
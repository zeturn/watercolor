import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.vue'

describe('NumberAnimation Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders correctly', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 100
      }
    })
    
    expect(wrapper.find('.wc-number-animation').exists()).toBe(true)
  })

  it('animates to target value', async () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 100,
        duration: 1000,
        autoPlay: true
      }
    })
    
    // 等待动画开始
    await wrapper.vm.$nextTick()
    vi.advanceTimersByTime(500)
    await wrapper.vm.$nextTick()
    
    const displayedValue = parseInt(wrapper.text())
    expect(displayedValue).toBeGreaterThan(0)
    expect(displayedValue).toBeLessThan(100)
  })

  it('formats number with custom formatter', () => {
    const formatter = (value) => `$${value.toFixed(2)}`
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 1234.56,
        formatter
      }
    })
    
    expect(wrapper.text()).toMatch(/\$\d+\.\d{2}/)
  })

  it('applies prefix and suffix', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 50,
        prefix: '约',
        suffix: '%'
      }
    })
    
    expect(wrapper.text()).toContain('约')
    expect(wrapper.text()).toContain('%')
  })

  it('supports decimal places', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 123.456,
        decimals: 2
      }
    })
    
    expect(wrapper.text()).toMatch(/\d+\.\d{2}/)
  })

  it('supports thousand separator', async () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 1234567,
        separator: ',',
        autoPlay: false // 禁用自动播放，直接显示目标值
      }
    })
    
    // 手动设置当前值为目标值
    wrapper.vm.currentValue = 1234567
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toContain(',')
  })

  it('emits complete event when animation finishes', async () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 100,
        duration: 500,
        autoPlay: true
      }
    })
    
    // 等待动画开始
    await wrapper.vm.$nextTick()
    // 推进时间超过动画持续时间，确保动画完成
    vi.advanceTimersByTime(600)
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted()).toHaveProperty('complete')
  })

  it('applies easing function', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 100,
        easing: 'ease-out'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-number-animation--ease-out')
  })

  it('auto starts animation when autoPlay is true', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        value: 100,
        autoPlay: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-number-animation--playing')
  })
}) 
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Progress from '@/components/Progress/Progress.vue'

describe('Progress Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50
      }
    })

    expect(wrapper.find('.wc-progress-wrapper').exists()).toBe(true)
    expect(wrapper.find('.wc-progress').exists()).toBe(true)
    expect(wrapper.find('.wc-progress__bar').exists()).toBe(true)
  })

  it('displays correct progress value', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 75
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.attributes('style')).toContain('width: 75%')
  })

  it('shows label when provided', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        label: '加载进度'
      }
    })

    expect(wrapper.find('.wc-progress-label').exists()).toBe(true)
    expect(wrapper.find('.wc-progress-label').text()).toBe('加载进度')
  })

  it('shows percentage when showPercent is true', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 60,
        showPercent: true
      }
    })

    expect(wrapper.find('.wc-progress-percent').exists()).toBe(true)
    expect(wrapper.find('.wc-progress-percent').text()).toBe('60%')
  })

  it('applies correct color', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        color: 'success'
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.classes()).toContain('wc-progress__bar--success')
  })

  it('applies correct size', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        size: 'lg'
      }
    })

    expect(wrapper.find('.wc-progress--lg').exists()).toBe(true)
  })

  it('handles animated state', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50,
        animated: true
      }
    })

    expect(wrapper.find('.wc-progress__bar--animated').exists()).toBe(true)
  })

  it('handles zero value', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 0
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.attributes('style')).toContain('width: 0%')
  })

  it('handles maximum value', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 100
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.attributes('style')).toContain('width: 100%')
  })

  it('clamps value to valid range', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 150
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.attributes('style')).toContain('width: 100%')
  })

  it('handles negative values', () => {
    const wrapper = mount(Progress, {
      props: {
        value: -10
      }
    })

    const bar = wrapper.find('.wc-progress__bar')
    expect(bar.attributes('style')).toContain('width: 0%')
  })

  it('has proper background color', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 50
      }
    })

    const progress = wrapper.find('.wc-progress')
    expect(progress.exists()).toBe(true)
  })

  it('applies different colors correctly', () => {
    const colors = ['primary', 'success', 'warning', 'error']

    colors.forEach((prop) => {
      const wrapper = mount(Progress, {
        props: {
          value: 50,
          color: prop
        }
      })

      const bar = wrapper.find('.wc-progress__bar')
      expect(bar.classes()).toContain(`wc-progress__bar--${prop}`)
    })
  })

  it('applies different sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg']

    sizes.forEach(size => {
      const wrapper = mount(Progress, {
        props: {
          value: 50,
          size
        }
      })

      expect(wrapper.find(`.wc-progress--${size}`).exists()).toBe(true)
    })
  })

  it('rounds percentage display', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 33.7,
        showPercent: true
      }
    })

    expect(wrapper.find('.wc-progress-percent').text()).toBe('34%')
  })
}) 
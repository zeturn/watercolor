import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from '../../src/components/Slider/Slider.vue'

describe('Slider Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50
      }
    })

    expect(wrapper.find('.wc-slider').exists()).toBe(true)
    expect(wrapper.find('.wc-slider__track').exists()).toBe(true)
    expect(wrapper.find('.wc-slider__thumb').exists()).toBe(true)
  })

  it('displays current value when enabled', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 75,
        valueLabelDisplay: 'on'
      }
    })

    expect(wrapper.find('.wc-slider__value').text()).toBe('75')
  })

  it('emits update:modelValue when value changes', async () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100
      }
    })

    // 模拟点击滑块轨道
    const track = wrapper.find('.wc-slider__track')
    const trackElement = track.element
    trackElement.getBoundingClientRect = vi.fn(() => ({
      left: 0,
      width: 100
    }))

    await track.trigger('click', { clientX: 75 })
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('applies min and max values correctly', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 10,
        max: 90
      }
    })

    const thumb = wrapper.find('.wc-slider__thumb')
    expect(thumb.attributes('aria-valuemin')).toBe('10')
    expect(thumb.attributes('aria-valuemax')).toBe('90')
    expect(thumb.attributes('aria-valuenow')).toBe('50')
  })

  it('applies step value correctly', async () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        step: 10
      }
    })

    // 测试键盘交互
    const thumb = wrapper.find('.wc-slider__thumb')
    await thumb.trigger('keydown', { key: 'ArrowRight' })
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
  })

  it('applies disabled state correctly', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        disabled: true
      }
    })

    const thumb = wrapper.find('.wc-slider__thumb')
    expect(thumb.attributes('tabindex')).toBe('-1')
  })

  it('displays label when provided', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        label: '音量'
      }
    })

    expect(wrapper.find('.wc-slider__label').exists()).toBe(true)
    expect(wrapper.find('.wc-slider__label').text()).toBe('音量')
  })

  it('supports keyboard navigation', async () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        step: 1
      }
    })

    const thumb = wrapper.find('.wc-slider__thumb')
    
    // 测试向右箭头键
    await thumb.trigger('keydown', { key: 'ArrowRight' })
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    
    // 测试向左箭头键
    await thumb.trigger('keydown', { key: 'ArrowLeft' })
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(2)
  })

  it('supports Home and End keys', async () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100
      }
    })

    const thumb = wrapper.find('.wc-slider__thumb')
    
    // 测试Home键
    await thumb.trigger('keydown', { key: 'Home' })
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    
    // 测试End键
    await thumb.trigger('keydown', { key: 'End' })
    expect(wrapper.emitted()['update:modelValue']).toHaveLength(2)
  })

  it('has correct ARIA attributes', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100
      }
    })

    const thumb = wrapper.find('.wc-slider__thumb')
    expect(thumb.attributes('role')).toBe('slider')
    expect(thumb.attributes('aria-valuemin')).toBe('0')
    expect(thumb.attributes('aria-valuemax')).toBe('100')
    expect(thumb.attributes('aria-valuenow')).toBe('50')
  })

  it('calculates percentage correctly', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 25,
        min: 0,
        max: 100
      }
    })

    const activeTrack = wrapper.find('.wc-slider__track-active')
    expect(activeTrack.attributes('style')).toContain('width: 25%')
  })

  it('shows value label when display is on', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 60,
        valueLabelDisplay: 'on'
      }
    })

    expect(wrapper.find('.wc-slider__value').exists()).toBe(true)
    expect(wrapper.find('.wc-slider__value').text()).toBe('60')
  })

  it('hides value label when display is off', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 60,
        valueLabelDisplay: 'off'
      }
    })

    expect(wrapper.find('.wc-slider__value').exists()).toBe(false)
  })
}) 
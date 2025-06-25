import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CircularProgress from '@/components/CircularProgress/CircularProgress.vue'

describe('CircularProgress 组件', () => {
  it('正确渲染圆形进度条', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50
      }
    })
    
    expect(wrapper.find('.wc-circular-progress').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('circle').exists()).toBe(true)
  })

  it('显示进度值', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 75,
        showValue: true
      }
    })
    
    expect(wrapper.text()).toContain('75%')
  })

  it('支持不确定状态', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        variant: 'indeterminate'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-circular-progress--indeterminate')
  })

  it('支持不同颜色', () => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'error']
    
    colors.forEach(color => {
      const wrapper = mount(CircularProgress, {
        props: { 
          value: 50,
          color
        }
      })
      expect(wrapper.classes()).toContain(`wc-circular-progress--${color}`)
    })
  })

  it('支持不同尺寸', () => {
    const sizes = [24, 40, 64, 80]
    
    sizes.forEach(size => {
      const wrapper = mount(CircularProgress, {
        props: { 
          value: 50,
          size
        }
      })
      const svg = wrapper.find('svg')
      expect(svg.attributes('width')).toBe(size.toString())
      expect(svg.attributes('height')).toBe(size.toString())
    })
  })

  it('支持自定义尺寸', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        size: 120
      }
    })
    
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('120')
    expect(svg.attributes('height')).toBe('120')
  })

  it('支持自定义厚度', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        thickness: 8
      }
    })
    
    const circles = wrapper.findAll('circle')
    circles.forEach(circle => {
      expect(circle.attributes('stroke-width')).toBe('8')
    })
  })

  it('验证进度值范围', () => {
    // 测试props验证器
    expect(CircularProgress.props.value.validator(-10)).toBe(false)
    expect(CircularProgress.props.value.validator(150)).toBe(false)
    expect(CircularProgress.props.value.validator(50)).toBe(true)
  })

  it('支持determinate变体', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 80,
        variant: 'determinate'
      }
    })
    
    expect(wrapper.classes()).not.toContain('wc-circular-progress--indeterminate')
    const progressCircle = wrapper.find('.wc-circular-progress-circle')
    expect(progressCircle.exists()).toBe(true)
  })

  it('计算正确的stroke-dashoffset', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        variant: 'determinate',
        size: 40,
        thickness: 3.6
      }
    })
    
    const progressCircle = wrapper.find('.wc-circular-progress-circle')
    expect(progressCircle.attributes('stroke-dashoffset')).toBeTruthy()
  })

  it('不显示进度值', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        showValue: false
      }
    })
    
    expect(wrapper.find('.wc-circular-progress-value').exists()).toBe(false)
  })

  it('支持字符串尺寸', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        size: '60'
      }
    })
    
    const svg = wrapper.find('svg')
    expect(svg.attributes('width')).toBe('60')
    expect(svg.attributes('height')).toBe('60')
  })

  it('具有正确的可访问性属性', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 75
      }
    })
    
    expect(wrapper.attributes('role')).toBe('progressbar')
    expect(wrapper.attributes('aria-valuenow')).toBe('75')
    expect(wrapper.attributes('aria-valuemin')).toBe('0')
    expect(wrapper.attributes('aria-valuemax')).toBe('100')
  })

  it('包含正确的viewBox属性', () => {
    const wrapper = mount(CircularProgress, {
      props: {
        value: 50,
        size: 100
      }
    })
    
    const svg = wrapper.find('svg')
    expect(svg.attributes('viewBox')).toBe('0 0 100 100')
  })
}) 
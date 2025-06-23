import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Spinner from '../../src/components/Spinner/Spinner.vue'

describe('Spinner Component', () => {
  it('应该正确渲染加载器组件', () => {
    const wrapper = mount(Spinner)
    expect(wrapper.find('.wc-spinner').exists()).toBe(true)
  })

  it('应该支持自定义大小', () => {
    const wrapper = mount(Spinner, {
      props: {
        size: 60
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 60px')
    expect(style).toContain('height: 60px')
  })

  it('应该支持自定义颜色', () => {
    const wrapper = mount(Spinner, {
      props: {
        color: 'red'
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('border-top-color: red')
  })

  it('应该支持自定义边框厚度', () => {
    const wrapper = mount(Spinner, {
      props: {
        thickness: 6
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('border-width: 6px')
  })

  it('应该有默认样式', () => {
    const wrapper = mount(Spinner)
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 40px')
    expect(style).toContain('height: 40px')
    expect(style).toContain('border-width: 4px')
  })

  it('应该使用默认主题颜色', () => {
    const wrapper = mount(Spinner)
    
    const style = wrapper.attributes('style')
    expect(style).toContain('border-top-color: var(--wc-primary-500)')
  })

  it('应该支持组合属性', () => {
    const wrapper = mount(Spinner, {
      props: {
        size: 50,
        color: 'blue',
        thickness: 3
      }
    })
    
    const style = wrapper.attributes('style')
    expect(style).toContain('width: 50px')
    expect(style).toContain('height: 50px')
    expect(style).toContain('border-width: 3px')
    expect(style).toContain('border-top-color: blue')
  })

  it('应该有正确的CSS类', () => {
    const wrapper = mount(Spinner)
    expect(wrapper.classes()).toContain('wc-spinner')
  })

  it('应该是一个div元素', () => {
    const wrapper = mount(Spinner)
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('应该支持数字类型的尺寸属性', () => {
    const wrapper = mount(Spinner, {
      props: {
        size: 100
      }
    })
    
    expect(wrapper.vm.size).toBe(100)
  })

  it('应该支持数字类型的厚度属性', () => {
    const wrapper = mount(Spinner, {
      props: {
        thickness: 8
      }
    })
    
    expect(wrapper.vm.thickness).toBe(8)
  })

  it('应该支持字符串类型的颜色属性', () => {
    const wrapper = mount(Spinner, {
      props: {
        color: '#ff0000'
      }
    })
    
    expect(wrapper.vm.color).toBe('#ff0000')
  })

  it('applies variant correctly', () => {
    const wrapper = mount(Spinner, {
      props: {
        variant: 'dots'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-spinner--dots')
  })

  it('shows loading text when provided', () => {
    const wrapper = mount(Spinner, {
      props: {
        text: '加载中...'
      }
    })
    
    expect(wrapper.text()).toContain('加载中...')
  })

  it('applies custom speed', () => {
    const wrapper = mount(Spinner, {
      props: {
        speed: '2s'
      }
    })
    
    expect(wrapper.attributes('style')).toContain('--spinner-speed: 2s')
  })

  it('renders overlay when overlay prop is true', () => {
    const wrapper = mount(Spinner, {
      props: {
        overlay: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-spinner--overlay')
  })

  it('centers spinner when centered prop is true', () => {
    const wrapper = mount(Spinner, {
      props: {
        centered: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-spinner--centered')
  })

  it('renders inline when inline prop is true', () => {
    const wrapper = mount(Spinner, {
      props: {
        inline: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-spinner--inline')
  })

  it('hides when visible is false', () => {
    const wrapper = mount(Spinner, {
      props: {
        visible: false
      }
    })
    
    expect(wrapper.find('.wc-spinner').exists()).toBe(false)
  })

  it('renders custom slot content', () => {
    const wrapper = mount(Spinner, {
      slots: {
        default: '<span class="custom-text">自定义加载文本</span>'
      }
    })
    
    expect(wrapper.find('.custom-text').exists()).toBe(true)
  })
}) 
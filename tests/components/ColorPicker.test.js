import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker/ColorPicker.vue'

describe('ColorPicker 组件', () => {
  it('正确渲染颜色选择器', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000'
      }
    })
    
    expect(wrapper.find('.wc-color-picker').exists()).toBe(true)
    expect(wrapper.find('.wc-color-picker__input').exists()).toBe(true)
    expect(wrapper.find('.wc-color-picker__preview').exists()).toBe(true)
  })

  it('显示当前颜色', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#00ff00'
      }
    })
    
    const input = wrapper.find('input[type="color"]')
    expect(input.element.value).toBe('#00ff00')
  })

  it('支持禁用状态', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000',
        disabled: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-color-picker--disabled')
    const input = wrapper.find('input[type="color"]')
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('支持不同尺寸', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(ColorPicker, {
        props: { 
          modelValue: '#ff0000',
          size
        }
      })
      expect(wrapper.classes()).toContain(`wc-color-picker--${size}`)
    })
  })

  it('支持不同形状', () => {
    const shapes = ['circle', 'square', 'rounded']
    
    shapes.forEach(shape => {
      const wrapper = mount(ColorPicker, {
        props: { 
          modelValue: '#ff0000',
          shape
        }
      })
      expect(wrapper.classes()).toContain(`wc-color-picker--${shape}`)
    })
  })



  it('发出update:modelValue事件', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000'
      }
    })
    
    const input = wrapper.find('input[type="color"]')
    await input.setValue('#00ff00')
    await input.trigger('input')
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['#00ff00'])
  })

  it('禁用时不发出事件', async () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000',
        disabled: true
      }
    })
    
    const input = wrapper.find('input[type="color"]')
    await input.setValue('#00ff00')
    await input.trigger('input')
    
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })

  it('应用自定义类名', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000',
        className: 'custom-class'
      }
    })
    
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('使用默认值', () => {
    const wrapper = mount(ColorPicker)
    
    const input = wrapper.find('input[type="color"]')
    expect(input.element.value).toBe('#ffffff')
    expect(wrapper.classes()).toContain('wc-color-picker--md')
    expect(wrapper.classes()).toContain('wc-color-picker--circle')
  })

  it('正确设置预览样式', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff5500'
      }
    })
    
    const preview = wrapper.find('.wc-color-picker__preview')
    expect(preview.exists()).toBe(true)
  })

  it('是一个label元素', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000'
      }
    })
    
    expect(wrapper.element.tagName).toBe('LABEL')
  })

  it('input具有正确的type属性', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000'
      }
    })
    
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('color')
  })

  it('处理输入事件正确', async () => {
    const mockFn = vi.fn()
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000',
        'onUpdate:modelValue': mockFn
      }
    })
    
    const input = wrapper.find('input[type="color"]')
    const inputElement = input.element
    inputElement.value = '#00ff00'
    await input.trigger('input')
    
    expect(mockFn).toHaveBeenCalledWith('#00ff00')
  })

  it('组合所有样式类', () => {
    const wrapper = mount(ColorPicker, {
      props: {
        modelValue: '#ff0000',
        size: 'lg',
        shape: 'square',
        disabled: true,
        className: 'custom-picker'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-color-picker--lg')
    expect(wrapper.classes()).toContain('wc-color-picker--square')
    expect(wrapper.classes()).toContain('wc-color-picker--disabled')
    expect(wrapper.classes()).toContain('custom-picker')
  })
}) 
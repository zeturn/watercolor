import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from '../../src/components/Checkbox/Checkbox.vue'

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: '同意条款'
      }
    })
    
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('同意条款')
    expect(wrapper.find('.wc-checkbox__input').exists()).toBe(true)
    expect(wrapper.find('.wc-checkbox__checkmark').exists()).toBe(true)
  })

  it('emits update:modelValue on change', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        label: '复选框'
      }
    })
    
    // 需要手动设置checked状态，因为在测试环境中trigger('change')不会自动改变checked值
    const input = wrapper.find('input')
    input.element.checked = true
    await input.trigger('change')
    expect(wrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  it('applies checked state correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
        label: '已选中'
      }
    })
    
    expect(wrapper.find('input').element.checked).toBe(true)
    expect(wrapper.find('.wc-checkbox__checkmark--checked').exists()).toBe(true)
  })

  it('applies disabled state correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        label: '禁用复选框'
      }
    })
    
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('wc-checkbox--disabled')
  })

  it('supports indeterminate state', () => {
    const wrapper = mount(Checkbox, {
      props: {
        indeterminate: true,
        label: '中间状态'
      }
    })
    
    expect(wrapper.find('.wc-checkbox__checkmark--indeterminate').exists()).toBe(true)
    expect(wrapper.find('.indeterminate-icon').exists()).toBe(true)
  })

  it('applies color variant correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        color: 'primary',
        label: '主色复选框'
      }
    })
    
    expect(wrapper.find('.wc-checkbox__checkmark--primary').exists()).toBe(true)
  })

  it('applies size correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        size: 'lg',
        label: '大尺寸复选框'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-checkbox--lg')
    expect(wrapper.find('.wc-checkbox__checkmark--lg').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: '<span class="custom-label">自定义标签</span>'
      }
    })
    
    expect(wrapper.find('.custom-label').exists()).toBe(true)
    expect(wrapper.find('.checkbox-label').exists()).toBe(true)
  })

  it('supports array modelValue', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: ['option1'],
        value: 'option2',
        label: '选项2'
      }
    })
    
    expect(wrapper.find('input').element.checked).toBe(false)
    
    const input = wrapper.find('input')
    input.element.checked = true
    await input.trigger('change')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['option1', 'option2']])
  })

  it('removes value from array when unchecked', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: ['option1', 'option2'],
        value: 'option2',
        label: '选项2'
      }
    })
    
    expect(wrapper.find('input').element.checked).toBe(true)
    
    const input = wrapper.find('input')
    input.element.checked = false
    await input.trigger('change')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['option1']])
  })

  it('emits change event', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        label: '复选框'
      }
    })
    
    const input = wrapper.find('input')
    input.element.checked = true
    await input.trigger('change')
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0]).toEqual([true])
  })

  it('handles focus and blur events', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: '焦点测试'
      }
    })
    
    await wrapper.find('input').trigger('focus')
    expect(wrapper.classes()).toContain('wc-checkbox--focused')
    
    await wrapper.find('input').trigger('blur')
    expect(wrapper.classes()).not.toContain('wc-checkbox--focused')
  })

  it('does not emit events when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        disabled: true,
        modelValue: false,
        label: '禁用复选框'
      }
    })
    
    // 手动设置checked并触发change，模拟禁用状态下的操作尝试
    const input = wrapper.find('input')
    await input.trigger('change')
    
    // 因为在handleChange中有disabled检查，不应该发出事件
    expect(wrapper.emitted()['update:modelValue']).toBeFalsy()
  })

  it('shows checkmark icon when checked', () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
        label: '已选中'
      }
    })
    
    expect(wrapper.find('.checkmark-icon').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('supports different colors', () => {
    const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info']
    
    colors.forEach(color => {
      const wrapper = mount(Checkbox, {
        props: {
          color,
          label: `${color}颜色`
        }
      })
      expect(wrapper.find(`.wc-checkbox__checkmark--${color}`).exists()).toBe(true)
    })
  })

  it('supports different sizes', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(Checkbox, {
        props: {
          size,
          label: `${size}尺寸`
        }
      })
      expect(wrapper.classes()).toContain(`wc-checkbox--${size}`)
      expect(wrapper.find(`.wc-checkbox__checkmark--${size}`).exists()).toBe(true)
    })
  })
}) 
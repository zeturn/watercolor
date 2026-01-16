import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from '@/components/Radio/Radio.vue'

describe('Radio Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        label: '选项1'
      }
    })

    expect(wrapper.find('.wc-radio').exists()).toBe(true)
    expect(wrapper.find('.wc-radio__input').exists()).toBe(true)
    expect(wrapper.find('.wc-radio__button').exists()).toBe(true)
    expect(wrapper.find('.radio-label').exists()).toBe(true)
  })

  it('displays label text', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'test',
        label: '测试选项'
      }
    })

    expect(wrapper.text()).toContain('测试选项')
  })

  it('emits update:modelValue when selected', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        modelValue: null
      }
    })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['option1'])
  })

  it('emits change event', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        modelValue: null
      }
    })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted()['change'][0]).toEqual(['option1'])
  })

  it('handles checked state correctly', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        modelValue: 'option1'
      }
    })

    const input = wrapper.find('input')
    expect(input.element.checked).toBe(true)
    expect(wrapper.find('.wc-radio__button--checked').exists()).toBe(true)
    expect(wrapper.find('.radio-dot').exists()).toBe(true)
  })

  it('handles unchecked state correctly', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        modelValue: 'option2'
      }
    })

    const input = wrapper.find('input')
    expect(input.element.checked).toBe(false)
    expect(wrapper.find('.wc-radio__button--checked').exists()).toBe(false)
    expect(wrapper.find('.radio-dot').exists()).toBe(false)
  })

  it('applies disabled state', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        disabled: true
      }
    })

    const input = wrapper.find('input')
    expect(input.element.disabled).toBe(true)
    expect(wrapper.find('.wc-radio--disabled').exists()).toBe(true)
  })

  it('applies correct size classes', () => {
    const sizes = ['sm', 'md', 'lg']

    sizes.forEach(size => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test',
          size
        }
      })

      expect(wrapper.find(`.wc-radio--${size}`).exists()).toBe(true)
      expect(wrapper.find(`.wc-radio__button--${size}`).exists()).toBe(true)
    })
  })

  it('applies correct color classes', () => {
    const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info']

    colors.forEach(color => {
      const wrapper = mount(Radio, {
        props: {
          value: 'test',
          color
        }
      })

      expect(wrapper.find(`.wc-radio__button--${color}`).exists()).toBe(true)
    })
  })

  it('handles focus and blur events', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1'
      }
    })

    const input = wrapper.find('input')
    
    await input.trigger('focus')
    expect(wrapper.find('.wc-radio--focused').exists()).toBe(true)

    await input.trigger('blur')
    expect(wrapper.find('.wc-radio--focused').exists()).toBe(false)
  })

  it('sets correct name attribute', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        name: 'test-group'
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes('name')).toBe('test-group')
  })

  it('renders slot content', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1'
      },
      slots: {
        default: '自定义内容'
      }
    })

    expect(wrapper.text()).toContain('自定义内容')
  })

  it('has correct input type', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1'
      }
    })

    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('radio')
  })

  it('handles different value types', () => {
    const testCases = [
      { value: 'string', modelValue: 'string' },
      { value: 123, modelValue: 123 },
      { value: true, modelValue: true }
    ]

    testCases.forEach(({ value, modelValue }) => {
      const wrapper = mount(Radio, {
        props: {
          value,
          modelValue
        }
      })

      const input = wrapper.find('input')
      expect(input.element.checked).toBe(true)
    })
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        disabled: true,
        modelValue: null
      }
    })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
    expect(wrapper.emitted()).not.toHaveProperty('change')
  })
}) 
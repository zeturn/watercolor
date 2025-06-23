import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from '../../src/components/Switch/Switch.vue'

describe('Switch Component', () => {
  it('应该正确渲染Switch组件', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false
      }
    })

    expect(wrapper.find('.switch-wrapper').exists()).toBe(true)
    expect(wrapper.find('.switch').exists()).toBe(true)
  })

  it('切换时应该发出update:modelValue事件', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false
      }
    })

    await wrapper.find('.switch').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  it('应该正确应用选中状态', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true
      }
    })

    expect(wrapper.find('.switch').classes()).toContain('switch--checked')
  })

  it('应该正确应用禁用状态', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true
      }
    })

    expect(wrapper.find('.switch').classes()).toContain('switch--disabled')
    expect(wrapper.find('.switch').attributes('disabled')).toBeDefined()
  })

  it('应该正确应用颜色', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
        color: 'success'
      }
    })

    expect(wrapper.find('.switch').classes()).toContain('switch--color-success')
  })

  it('应该正确应用尺寸', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        size: 'lg'
      }
    })

    expect(wrapper.find('.switch').classes()).toContain('switch--size-lg')
  })

  it('应该显示标签', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: '开关标签'
      }
    })

    expect(wrapper.find('.switch-label').exists()).toBe(true)
    expect(wrapper.text()).toContain('开关标签')
  })

  it('应该显示描述文本', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        description: '这是开关描述'
      }
    })

    expect(wrapper.find('.switch-description').exists()).toBe(true)
    expect(wrapper.text()).toContain('这是开关描述')
  })

  it('应该发出change事件', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false
      }
    })

    await wrapper.find('.switch').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted().change[0]).toEqual([true])
  })

  it('禁用时不应该响应点击', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true
      }
    })

    await wrapper.find('.switch').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
  })

  it('应该显示必填标记', () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: '必填开关',
        required: true
      }
    })

    expect(wrapper.find('.switch-required').exists()).toBe(true)
    expect(wrapper.text()).toContain('*')
  })
}) 
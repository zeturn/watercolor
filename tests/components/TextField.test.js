import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TextField from '../../src/components/TextField/TextField.vue'

describe('TextField Component', () => {
  it('应该正确渲染文本字段', () => {
    const wrapper = mount(TextField, {
      props: {
        label: '姓名',
        modelValue: ''
      }
    })

    expect(wrapper.find('.wc-textfield').exists()).toBe(true)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('姓名')
  })

  it('应该更新modelValue', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: ''
      }
    })

    const input = wrapper.find('input')
    await input.setValue('test')
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['test'])
  })

  it('应该显示错误消息', () => {
    const wrapper = mount(TextField, {
      props: {
        label: '邮箱',
        error: '邮箱格式不正确',
        modelValue: 'invalid-email'
      }
    })
    
    expect(wrapper.text()).toContain('邮箱格式不正确')
    expect(wrapper.find('.wc-textfield__container').classes()).toContain('wc-textfield__container--error')
  })

  it('应该在聚焦时发出focus事件', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: ''
      }
    })

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
  })

  it('应该在失焦时发出blur事件', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: ''
      }
    })

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  it('应该正确应用变体', () => {
    const wrapper = mount(TextField, {
      props: {
        variant: 'filled',
        modelValue: ''
      }
    })

    expect(wrapper.find('.wc-textfield__container').classes()).toContain('wc-textfield__container--filled')
  })

  it('应该正确应用尺寸', () => {
    const wrapper = mount(TextField, {
      props: {
        size: 'lg',
        modelValue: ''
      }
    })

    expect(wrapper.find('.wc-textfield__container').classes()).toContain('wc-textfield__container--lg')
  })

  it('应该支持禁用状态', () => {
    const wrapper = mount(TextField, {
      props: {
        disabled: true,
        modelValue: ''
      }
    })

    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    expect(wrapper.find('.wc-textfield__container').classes()).toContain('wc-textfield__container--disabled')
  })

  it('应该支持必填标记', () => {
    const wrapper = mount(TextField, {
      props: {
        label: '必填字段',
        required: true,
        modelValue: ''
      }
    })

    expect(wrapper.find('.required-indicator').exists()).toBe(true)
    expect(wrapper.text()).toContain('*')
  })

  it('应该支持多行文本', () => {
    const wrapper = mount(TextField, {
      props: {
        multiline: true,
        rows: 3,
        modelValue: ''
      }
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('textarea').attributes('rows')).toBe('3')
  })

  it('应该显示帮助文本', () => {
    const wrapper = mount(TextField, {
      props: {
        helperText: '请输入您的姓名',
        modelValue: ''
      }
    })

    expect(wrapper.find('.helper-text-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('请输入您的姓名')
  })

  it('应该支持全宽度', () => {
    const wrapper = mount(TextField, {
      props: {
        fullWidth: true,
        modelValue: ''
      }
    })

    expect(wrapper.find('.wc-textfield__container').classes()).toContain('wc-textfield__container--full-width')
  })

  it('应该支持只读状态', () => {
    const wrapper = mount(TextField, {
      props: {
        readonly: true,
        modelValue: 'readonly text'
      }
    })

    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('应该支持起始装饰', () => {
    const wrapper = mount(TextField, {
      props: {
        startAdornment: '$',
        modelValue: ''
      }
    })

    expect(wrapper.find('.start-adornment').exists()).toBe(true)
    expect(wrapper.text()).toContain('$')
  })

  it('应该支持结束装饰', () => {
    const wrapper = mount(TextField, {
      props: {
        endAdornment: '.com',
        modelValue: ''
      }
    })

    expect(wrapper.find('.end-adornment').exists()).toBe(true)
    expect(wrapper.text()).toContain('.com')
  })

  it('应该支持键盘事件', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: ''
      }
    })

    await wrapper.find('input').trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted()).toHaveProperty('keydown')
  })
}) 
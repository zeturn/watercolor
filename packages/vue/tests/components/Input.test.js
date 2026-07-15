import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '@/components/Input/Input.vue'

describe('Input 组件', () => {
  it('正确渲染输入框', () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: '请输入内容'
      }
    })
    
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入内容')
  })

  it('支持双向绑定', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '初始值',
        'onUpdate:modelValue': (value) => wrapper.setProps({ modelValue: value })
      }
    })
    
    expect(wrapper.find('input').element.value).toBe('初始值')
    
    await wrapper.find('input').setValue('新值')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['新值'])
  })

  it('显示标签', () => {
    const wrapper = mount(Input, {
      props: {
        label: '用户名',
        required: true
      }
    })
    
    expect(wrapper.find('label').text()).toContain('用户名')
    expect(wrapper.find('label').text()).toContain('*')
  })

  it('支持不同类型', () => {
    const types = ['text', 'password', 'email', 'number']
    
    types.forEach(type => {
      const wrapper = mount(Input, {
        props: { type }
      })
      expect(wrapper.find('input').attributes('type')).toBe(type)
    })
  })

  it('支持禁用状态', () => {
    const wrapper = mount(Input, {
      props: { disabled: true }
    })
    
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('wc-input-container--disabled')
    expect(wrapper.find('input').classes()).toContain('wc-input--disabled')
  })

  it('支持只读状态', () => {
    const wrapper = mount(Input, {
      props: { readonly: true }
    })
    
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('显示错误信息', () => {
    const wrapper = mount(Input, {
      props: {
        error: '用户名不能为空'
      }
    })
    
    expect(wrapper.find('.wc-input-helper-text--error').text()).toBe('用户名不能为空')
    expect(wrapper.find('.wc-input-error-icon').exists()).toBe(true)
  })

  it('显示帮助文本', () => {
    const wrapper = mount(Input, {
      props: {
        helpText: '请输入6-20位字符'
      }
    })
    
    expect(wrapper.find('.wc-input-helper-text').text()).toBe('请输入6-20位字符')
  })

  it('错误信息优先于帮助文本', () => {
    const wrapper = mount(Input, {
      props: {
        error: '输入错误',
        helpText: '帮助文本'
      }
    })
    
    expect(wrapper.find('.wc-input-helper-text--error').text()).toBe('输入错误')
    expect(wrapper.findAll('.wc-input-helper-text')).toHaveLength(1)
  })

  it('支持不同尺寸', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(Input, {
        props: { size }
      })
      
      expect(wrapper.find('input').classes()).toContain(`wc-input--${size}`)
    })
  })

  it('触发focus和blur事件', async () => {
    const wrapper = mount(Input)
    
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
  })

  it('支持required属性', () => {
    const wrapper = mount(Input, {
      props: { required: true }
    })
    
    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })

  it('生成唯一的input id', () => {
    const wrapper1 = mount(Input, { props: { label: '输入1' } })
    const wrapper2 = mount(Input, { props: { label: '输入2' } })
    
    const id1 = wrapper1.find('input').attributes('id')
    const id2 = wrapper2.find('input').attributes('id')
    
    expect(id1).not.toBe(id2)
    expect(wrapper1.find('label').attributes('for')).toBe(id1)
    expect(wrapper2.find('label').attributes('for')).toBe(id2)
  })
})

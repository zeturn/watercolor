import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from '@/components/Switch/Switch.vue'

describe('Switch Component', () => {
  it('使用原生 switch 语义正确渲染', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('.wc-switch-wrapper').exists()).toBe(true)
    expect(wrapper.find('.wc-switch').exists()).toBe(true)
    expect(wrapper.find('input[role="switch"]').exists()).toBe(true)
  })

  it('切换时发出 model 与 change 事件', async () => {
    const wrapper = mount(Switch, { props: { modelValue: false } })
    await wrapper.find('input').setValue(true)
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
    expect(wrapper.emitted().change[0]).toEqual([true])
  })

  it('正确反映选中状态', () => {
    const wrapper = mount(Switch, { props: { modelValue: true } })
    expect(wrapper.find('input').element.checked).toBe(true)
    expect(wrapper.find('input').attributes('aria-checked')).toBe('true')
  })

  it('正确应用禁用状态且不发出事件', async () => {
    const wrapper = mount(Switch, { props: { disabled: true } })
    expect(wrapper.find('.wc-switch').classes()).toContain('wc-switch--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
  })

  it('正确应用语义颜色', () => {
    const wrapper = mount(Switch, { props: { color: 'success' } })
    expect(wrapper.find('.wc-switch').classes()).toContain('wc-switch--success')
  })

  it('正确应用尺寸', () => {
    const wrapper = mount(Switch, { props: { size: 'lg' } })
    expect(wrapper.find('.wc-switch').classes()).toContain('wc-switch--lg')
  })

  it('显示标签并关联输入', () => {
    const wrapper = mount(Switch, { props: { label: '开关标签' } })
    const label = wrapper.find('.wc-switch__label')
    expect(label.text()).toBe('开关标签')
    expect(label.attributes('for')).toBe(wrapper.find('input').attributes('id'))
  })

  it('显示描述文本', () => {
    const wrapper = mount(Switch, { props: { description: '这是开关描述' } })
    expect(wrapper.find('.wc-switch__description').text()).toBe('这是开关描述')
  })

  it('显示必填标记并传递 required', () => {
    const wrapper = mount(Switch, { props: { label: '必填开关', required: true } })
    expect(wrapper.find('.wc-switch__required').text()).toBe('*')
    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })
})

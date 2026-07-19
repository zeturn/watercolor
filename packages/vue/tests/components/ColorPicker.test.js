import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker/ColorPicker.vue'

function mountColorPicker(props = {}) {
  return mount(ColorPicker, { props })
}

describe('ColorPicker 组件', () => {
  it('渲染自定义触发器和预览，不再使用原生 color input', () => {
    const wrapper = mountColorPicker()

    expect(wrapper.classes()).toContain('wc-color-picker')
    expect(wrapper.classes()).toContain('wc-color-picker--md')
    expect(wrapper.classes()).toContain('wc-color-picker--circle')
    expect(wrapper.find('.wc-color-picker__trigger').exists()).toBe(true)
    expect(wrapper.find('.wc-color-picker__preview').exists()).toBe(true)
    expect(wrapper.find('input[type="color"]').exists()).toBe(false)
  })

  it('支持当前颜色、尺寸、形状和自定义类名', () => {
    const wrapper = mountColorPicker({
      modelValue: '#ff00ff',
      size: 'lg',
      shape: 'square',
      className: 'custom-picker'
    })

    expect(wrapper.classes()).toContain('wc-color-picker--lg')
    expect(wrapper.classes()).toContain('wc-color-picker--square')
    expect(wrapper.classes()).toContain('custom-picker')
    expect(wrapper.find('.wc-color-picker__preview').element.style.backgroundColor).toBe('rgb(255, 0, 255)')
  })

  it('归一化非法值和三位 hex 值', async () => {
    const wrapper = mountColorPicker({ modelValue: 'not-a-color' })
    expect(wrapper.find('.wc-color-picker__preview').element.style.backgroundColor).toBe('rgb(255, 255, 255)')

    await wrapper.setProps({ modelValue: '#abc' })
    expect(wrapper.find('.wc-color-picker__preview').element.style.backgroundColor).toBe('rgb(170, 187, 204)')
  })

  it('禁用时不会打开面板', async () => {
    const wrapper = mountColorPicker({ disabled: true })

    expect(wrapper.classes()).toContain('wc-color-picker--disabled')
    expect(wrapper.find('.wc-color-picker__trigger').attributes('disabled')).toBeDefined()

    await wrapper.find('.wc-color-picker__trigger').trigger('click')
    expect(wrapper.find('.wc-color-picker__popover').exists()).toBe(false)
  })

  it('点击后打开 Watercolor 面板并显示 hex 输入和色板', async () => {
    const wrapper = mountColorPicker({ modelValue: '#2563eb' })

    await wrapper.find('.wc-color-picker__trigger').trigger('click')

    expect(wrapper.find('.wc-color-picker__popover').exists()).toBe(true)
    expect(wrapper.find('.wc-color-picker__hex-input').element.value).toBe('#2563eb')
    expect(wrapper.findAll('.wc-color-picker__swatch')).toHaveLength(12)
    expect(wrapper.find('.wc-color-picker__swatch--selected').attributes('aria-label')).toBe('#2563eb')
  })

  it('选择色板时发出 update:modelValue', async () => {
    const wrapper = mountColorPicker({ modelValue: '#ffffff' })

    await wrapper.find('.wc-color-picker__trigger').trigger('click')
    await wrapper.find('[aria-label="#7c3aed"]').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['#7c3aed'])
  })

  it('只在 hex 输入有效时发出 update:modelValue', async () => {
    const mockFn = vi.fn()
    const wrapper = mountColorPicker({
      modelValue: '#ffffff',
      'onUpdate:modelValue': mockFn
    })

    await wrapper.find('.wc-color-picker__trigger').trigger('click')
    const input = wrapper.find('.wc-color-picker__hex-input')

    await input.setValue('nope')
    expect(mockFn).not.toHaveBeenCalled()

    await input.setValue('#00ff00')
    expect(mockFn).toHaveBeenCalledWith('#00ff00')
  })

  it('blur 时恢复草稿值', async () => {
    const wrapper = mountColorPicker({ modelValue: '#ffffff' })

    await wrapper.find('.wc-color-picker__trigger').trigger('click')
    const input = wrapper.find('.wc-color-picker__hex-input')
    await input.setValue('draft')
    expect(input.element.value).toBe('draft')

    await input.trigger('blur')
    expect(input.element.value).toBe('#ffffff')
  })
})

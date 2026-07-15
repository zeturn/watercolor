import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from '@/components/Slider/Slider.vue'

describe('Slider Component', () => {
  it('使用原生 range 正确渲染', () => {
    const wrapper = mount(Slider, { props: { modelValue: 50 } })
    const input = wrapper.find('input[type="range"]')
    expect(wrapper.find('.wc-slider').exists()).toBe(true)
    expect(input.exists()).toBe(true)
    expect(input.element.value).toBe('50')
  })

  it('显示标签并关联输入', () => {
    const wrapper = mount(Slider, { props: { modelValue: 50, label: '音量' } })
    expect(wrapper.find('.wc-slider__label').text()).toBe('音量')
    expect(wrapper.find('.wc-slider__label').attributes('for')).toBe(wrapper.find('input').attributes('id'))
  })

  it('传递 min max step 与无障碍名称', () => {
    const wrapper = mount(Slider, { props: { modelValue: 50, min: 10, max: 90, step: 5, label: '音量' } })
    const input = wrapper.find('input')
    expect(input.attributes('min')).toBe('10')
    expect(input.attributes('max')).toBe('90')
    expect(input.attributes('step')).toBe('5')
    expect(input.attributes('aria-label')).toBe('音量')
  })

  it('输入时发出 model 事件，提交时发出 change', async () => {
    const wrapper = mount(Slider, { props: { modelValue: 20 } })
    const input = wrapper.find('input')
    input.element.value = '65'
    await input.trigger('input')
    await input.trigger('change')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([65])
    expect(wrapper.emitted().change[0]).toEqual([65])
  })

  it('通过 CSS 变量表达进度而不写入颜色', () => {
    const wrapper = mount(Slider, { props: { modelValue: 25, min: 0, max: 100 } })
    expect(wrapper.find('input').attributes('style')).toContain('--wc-slider-percentage: 25%')
  })

  it('按需显示当前值', () => {
    const shown = mount(Slider, { props: { modelValue: 75, valueLabelDisplay: 'on' } })
    const hidden = mount(Slider, { props: { modelValue: 75, valueLabelDisplay: 'off' } })
    expect(shown.find('.wc-slider__value').text()).toBe('75')
    expect(hidden.find('.wc-slider__value').exists()).toBe(false)
  })

  it('正确应用禁用状态', () => {
    const wrapper = mount(Slider, { props: { modelValue: 50, disabled: true } })
    expect(wrapper.classes()).toContain('wc-slider--disabled')
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })
})

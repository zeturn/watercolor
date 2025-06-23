import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '../../src/components/Select/Select.vue'

describe('Select Component', () => {
  const defaultOptions = [
    { value: '1', label: '选项一' },
    { value: '2', label: '选项二' },
    { value: '3', label: '选项三' }
  ]

  it('renders correctly', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        placeholder: '请选择'
      }
    })

    expect(wrapper.find('.wc-select').exists()).toBe(true)
    expect(wrapper.find('.wc-select__placeholder').text()).toBe('请选择')
  })

  it('displays options when clicked', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    expect(wrapper.find('.wc-select__dropdown').exists()).toBe(true)
    expect(wrapper.findAll('.wc-select__option-text')).toHaveLength(3)
  })

  it('selects option correctly', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        modelValue: ''
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    await wrapper.findAll('.wc-select__option-text')[0].trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['1'])
  })

  it('shows selected value', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        modelValue: '1'
      }
    })

    expect(wrapper.find('.wc-select__value').text()).toBe('选项一')
  })

  it('applies size correctly', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        size: 'lg'
      }
    })

    expect(wrapper.find('.wc-select__container').classes()).toContain('wc-select__container--lg')
  })

  it('applies variant correctly', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        variant: 'filled'
      }
    })

    expect(wrapper.find('.wc-select__container').classes()).toContain('wc-select__container--filled')
  })

  it('supports multiple selection', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        multiple: true,
        modelValue: []
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    await wrapper.findAll('.wc-select__option-text')[0].trigger('click')
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([['1']])
  })

  it('shows error state', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        error: '这是一个错误'
      }
    })

    expect(wrapper.find('.wc-select__container').classes()).toContain('wc-select__container--error')
    expect(wrapper.find('.wc-select__error').text()).toBe('这是一个错误')
  })

  it('supports disabled state', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        disabled: true
      }
    })

    expect(wrapper.find('.wc-select__container').classes()).toContain('wc-select__container--disabled')
  })

  it('supports searchable options', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        searchable: true
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    expect(wrapper.find('.wc-select__search-input').exists()).toBe(true)
  })

  it('filters options when searching', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        searchable: true
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    await wrapper.find('.wc-select__search-input').setValue('一')
    
    // 需要触发更新
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.wc-select__option-text')).toHaveLength(1)
  })

  it('shows no options message when filtered', async () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        searchable: true
      }
    })

    await wrapper.find('.wc-select__container').trigger('click')
    await wrapper.find('.wc-select__search-input').setValue('不存在的选项')
    
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.wc-select__no-options').exists()).toBe(true)
  })

  it('displays label correctly', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        label: '选择器标签'
      }
    })

    expect(wrapper.find('.wc-select__label').text()).toBe('选择器标签')
  })

  it('shows required indicator', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        label: '必填字段',
        required: true
      }
    })

    expect(wrapper.find('.wc-select__required').exists()).toBe(true)
    expect(wrapper.find('.wc-select__required').text()).toBe('*')
  })

  it('shows helper text', () => {
    const wrapper = mount(Select, {
      props: {
        options: defaultOptions,
        helperText: '这是帮助文本'
      }
    })

    expect(wrapper.find('.wc-select__helper').text()).toBe('这是帮助文本')
  })
}) 
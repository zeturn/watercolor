import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Autocomplete from '../../src/components/Autocomplete/Autocomplete.vue'

describe('Autocomplete.vue', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]

  it('renders properly', () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        label: 'Test Autocomplete'
      }
    })
    expect(wrapper.find('.wc-autocomplete').exists()).toBe(true)
    expect(wrapper.find('.wc-autocomplete__label').text()).toContain('Test Autocomplete')
  })

  it('shows options when input is focused', async () => {
    const wrapper = mount(Autocomplete, {
      props: { options, minSearchLength: 0 }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.trigger('focus')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.find('.wc-autocomplete__dropdown').exists()).toBe(true)
    expect(wrapper.findAll('.wc-autocomplete__option')).toHaveLength(3)
  })

  it('filters options based on search query', async () => {
    const wrapper = mount(Autocomplete, {
      props: { options, minSearchLength: 0 }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.trigger('focus')
    await input.setValue('Option 1')
    await input.trigger('input')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.findAll('.wc-autocomplete__option')).toHaveLength(1)
    expect(wrapper.find('.wc-autocomplete__option-text').text()).toBe('Option 1')
  })

  it('emits update:modelValue when option is selected', async () => {
    const wrapper = mount(Autocomplete, {
      props: { options, minSearchLength: 0 }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.trigger('focus')
    await wrapper.vm.$nextTick()
    
    const firstOption = wrapper.findAll('.wc-autocomplete__option')[0]
    await firstOption.trigger('click')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([options[0]])
  })

  it('clears value when clear button is clicked', async () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        modelValue: options[0],
        clearable: true,
        minSearchLength: 0
      }
    })
    
    await wrapper.vm.$nextTick()
    const clearButton = wrapper.find('.wc-autocomplete__clear')
    expect(clearButton.exists()).toBe(true)
    
    await clearButton.trigger('click')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([null])
  })

  it('supports multiple selection', async () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        multiple: true,
        modelValue: [],
        minSearchLength: 0
      }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.trigger('focus')
    await wrapper.vm.$nextTick()
    
    const firstOption = wrapper.findAll('.wc-autocomplete__option')[0]
    await firstOption.trigger('click')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0][0]).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')[0][0][0]).toEqual(options[0])
  })

  it('shows error message when error prop is provided', () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        error: 'This field is required'
      }
    })
    
    expect(wrapper.find('.wc-autocomplete__error').text()).toBe('This field is required')
  })

  it('disables input when disabled prop is true', () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        disabled: true
      }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    expect(input.element.disabled).toBe(true)
  })

  it('supports freeSolo mode', async () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        freeSolo: true,
        minSearchLength: 0
      }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.setValue('Custom value')
    await input.trigger('input')
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['Custom value'])
  })

  it('respects minSearchLength prop', async () => {
    const wrapper = mount(Autocomplete, {
      props: {
        options,
        minSearchLength: 2
      }
    })
    
    const input = wrapper.find('.wc-autocomplete__input')
    await input.trigger('focus')
    await input.setValue('O')
    await input.trigger('input')
    await wrapper.vm.$nextTick()
    
    // When search length < minSearchLength, no options should be shown
    expect(wrapper.findAll('.wc-autocomplete__option')).toHaveLength(0)
    
    await input.setValue('Op')
    await input.trigger('input')
    await wrapper.vm.$nextTick()
    
    // When search length >= minSearchLength, options should be filtered
    expect(wrapper.findAll('.wc-autocomplete__option')).toHaveLength(3)
  })
})

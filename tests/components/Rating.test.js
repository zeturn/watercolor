import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Rating from '@/components/Rating/Rating.vue'

describe('Rating Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 3
      }
    })

    expect(wrapper.find('.rating').exists()).toBe(true)
    expect(wrapper.findAll('.rating-item')).toHaveLength(5)
    expect(wrapper.findAll('.rating-item.active')).toHaveLength(3)
  })

  it('displays correct number of stars', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0,
        max: 5
      }
    })

    expect(wrapper.findAll('.rating-item')).toHaveLength(5)
  })

  it('emits update:modelValue when star is clicked', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0
      }
    })

    await wrapper.findAll('.rating-item')[2].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([3])
  })

  it('emits change event when value changes', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0
      }
    })

    await wrapper.findAll('.rating-item')[3].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted()['change'][0]).toEqual([4])
  })

  it('applies readonly state correctly', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 2,
        readonly: true
      }
    })

    await wrapper.findAll('.rating-item')[4].trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
  })

  it('supports custom max value', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0,
        max: 10
      }
    })

    expect(wrapper.findAll('.rating-item')).toHaveLength(10)
  })

  it('highlights stars on hover', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0
      }
    })

    await wrapper.findAll('.rating-item')[3].trigger('mouseenter')
    
    // 检查内部状态
    expect(wrapper.vm.hovered).toBe(4)
    
    // 检查活跃的星星数量（包括悬停效果）
    const activeStars = wrapper.findAll('.rating-item.active')
    expect(activeStars).toHaveLength(4)
  })

  it('resets hover state on mouse leave', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 2
      }
    })

    await wrapper.findAll('.rating-item')[4].trigger('mouseenter')
    expect(wrapper.vm.hovered).toBe(5)

    await wrapper.findAll('.rating-item')[4].trigger('mouseleave')
    expect(wrapper.vm.hovered).toBe(0)
  })

  it('toggles value when clicking the same star', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 3
      }
    })

    // 点击同一个星星应该清零
    await wrapper.findAll('.rating-item')[2].trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([0])
  })

  it('has correct ARIA attributes', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 2
      }
    })

    expect(wrapper.find('.rating').attributes('role')).toBe('radiogroup')
    expect(wrapper.find('.rating').attributes('aria-label')).toBe('评分组件')
    
    const stars = wrapper.findAll('.rating-item')
    expect(stars[1].attributes('role')).toBe('radio')
    expect(stars[1].attributes('aria-checked')).toBe('true')
    expect(stars[2].attributes('aria-checked')).toBe('false')
  })

  it('disables interaction when readonly', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 3,
        readonly: true
      }
    })

    const stars = wrapper.findAll('.rating-item')
    stars.forEach(star => {
      expect(star.attributes('disabled')).toBeDefined()
    })
  })

  it('updates internal value when modelValue changes', async () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 2
      }
    })

    expect(wrapper.vm.internalValue).toBe(2)

    await wrapper.setProps({ modelValue: 4 })
    expect(wrapper.vm.internalValue).toBe(4)
  })

  it('shows correct star content', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0
      }
    })

    const stars = wrapper.findAll('.rating-item')
    stars.forEach(star => {
      expect(star.text()).toBe('★')
    })
  })

  it('handles zero value correctly', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 0
      }
    })

    expect(wrapper.findAll('.rating-item.active')).toHaveLength(0)
  })

  it('handles maximum value correctly', () => {
    const wrapper = mount(Rating, {
      props: {
        modelValue: 5,
        max: 5
      }
    })

    expect(wrapper.findAll('.rating-item.active')).toHaveLength(5)
  })
}) 
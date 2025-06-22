import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/Button/Button.vue'

describe('Button Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test Button'
      }
    })
    
    expect(wrapper.text()).toBe('Test Button')
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('handles click events', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, {
      props: {
        onClick
      },
      slots: {
        default: 'Click Me'
      }
    })

    await wrapper.find('button').trigger('click')
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('shows loading state', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'Loading Button'
      }
    })

    expect(wrapper.find('.wc-btn__loading').exists()).toBe(true)
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('applies variant classes correctly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary'
      },
      slots: {
        default: 'Secondary Button'
      }
    })

    expect(wrapper.find('button').classes()).toContain('wc-btn--secondary')
  })

  it('supports different sizes', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'lg'
      },
      slots: {
        default: 'Large Button'
      }
    })

    expect(wrapper.find('button').classes()).toContain('wc-btn--lg')
  })
}) 
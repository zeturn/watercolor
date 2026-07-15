import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button/Button.vue'

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

  it('renders properly', () => {
    const wrapper = mount(Button, { slots: { default: '测试按钮' } })
    expect(wrapper.text()).toContain('测试按钮')
  })

  it('applies correct variant class', () => {
    const wrapper = mount(Button, {
      props: { variant: 'primary' },
      slots: { default: '主要按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--primary')
  })

  it('applies correct size class', () => {
    const wrapper = mount(Button, {
      props: { size: 'lg' },
      slots: { default: '大按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--lg')
  })

  it('applies correct buttonStyle class', () => {
    const wrapper = mount(Button, {
      props: { buttonStyle: 'outlined' },
      slots: { default: '边框按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--style-outlined')
  })

  it('defaults to borderless buttonStyle', () => {
    const wrapper = mount(Button, {
      slots: { default: '默认按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--style-default')
  })

  it('applies default buttonStyle class', () => {
    const wrapper = mount(Button, {
      props: { buttonStyle: 'default' },
      slots: { default: '默认样式按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--style-default')
  })

  it('combines variant and buttonStyle classes correctly', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'success',
        buttonStyle: 'outlined'
      },
      slots: { default: '成功边框按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--success')
    expect(wrapper.classes()).toContain('wc-btn--style-outlined')
  })

  it('handles disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: '禁用按钮' }
    })
    expect(wrapper.classes()).toContain('wc-btn--disabled')
    expect(wrapper.element.disabled).toBe(true)
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(Button, {
      slots: { default: '点击按钮' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})

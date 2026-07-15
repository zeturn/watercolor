import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '@/components/Card/Card.vue'

describe('Card Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '卡片内容'
      }
    })

    expect(wrapper.text()).toContain('卡片内容')
    expect(wrapper.find('.wc-card-content').exists()).toBe(true)
    expect(wrapper.classes()).toContain('wc-card--minimal')
    expect(wrapper.classes()).not.toContain('wc-card--interactive')
  })

  it('shows title when provided', () => {
    const wrapper = mount(Card, {
      props: {
        title: '卡片标题'
      },
      slots: {
        default: '卡片内容'
      }
    })

    expect(wrapper.find('.wc-card__title').text()).toBe('卡片标题')
    expect(wrapper.find('.wc-card-header').exists()).toBe(true)
  })

  it('renders header slot', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<div class="custom-header">自定义头部</div>',
        default: '卡片内容'
      }
    })

    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.text()).toContain('自定义头部')
  })

  it('renders footer slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '卡片内容',
        footer: '<div class="custom-footer">自定义底部</div>'
      }
    })

    expect(wrapper.find('.custom-footer').exists()).toBe(true)
    expect(wrapper.find('.wc-card-footer').exists()).toBe(true)
  })

  it('applies variant classes correctly', () => {
    const wrapper = mount(Card, {
      props: {
        variant: 'outlined'
      },
      slots: {
        default: '边框卡片'
      }
    })

    expect(wrapper.classes()).toContain('wc-card--outlined')
  })

  it('applies color classes correctly', () => {
    const wrapper = mount(Card, {
      props: {
        color: 'primary'
      },
      slots: {
        default: '主色卡片'
      }
    })

    expect(wrapper.classes()).toContain('wc-card--primary')
  })

  it('applies size classes correctly', () => {
    const wrapper = mount(Card, {
      props: {
        size: 'large'
      },
      slots: {
        default: '大尺寸卡片'
      }
    })

    expect(wrapper.classes()).toContain('wc-card--large')
  })

  it('applies interactive state correctly', () => {
    const wrapper = mount(Card, {
      props: {
        interactive: true
      },
      slots: {
        default: '可交互卡片'
      }
    })

    expect(wrapper.classes()).toContain('wc-card--interactive')
  })

  it('applies noBorder correctly', () => {
    const wrapper = mount(Card, {
      props: {
        noBorder: true
      },
      slots: {
        default: '无边框卡片'
      }
    })

    expect(wrapper.classes()).toContain('wc-card--no-border')
  })

  it('applies custom className', () => {
    const wrapper = mount(Card, {
      props: {
        className: 'custom-card-class'
      },
      slots: {
        default: '自定义类名卡片'
      }
    })

    expect(wrapper.classes()).toContain('custom-card-class')
  })

  it('treats a click listener as an interactive card', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Card, {
      attrs: { onClick },
      slots: { default: '可点击卡片' }
    })

    expect(wrapper.classes()).toContain('wc-card--interactive')
    expect(wrapper.attributes('role')).toBe('button')
    expect(wrapper.attributes('tabindex')).toBe('0')

    await wrapper.trigger('keydown', { key: 'Enter' })
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

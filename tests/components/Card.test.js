import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../../src/components/Card/Card.vue'

describe('Card Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '卡片内容'
      }
    })
    
    expect(wrapper.text()).toContain('卡片内容')
    expect(wrapper.find('.wc-card-content').exists()).toBe(true)
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
}) 
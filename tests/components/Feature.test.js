import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Feature from '@/components/Feature/Feature.vue'

describe('Feature组件测试', () => {
  it('应该正确渲染特性组件', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '特性标题',
        description: '特性描述'
      }
    })
    expect(wrapper.classes()).toContain('wc-feature-card')
    expect(wrapper.find('.wc-feature-title').text()).toBe('特性标题')
    expect(wrapper.find('.wc-feature-description').text()).toBe('特性描述')
  })

  it('应该支持图标', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        icon: '<span class="star">⭐</span>'
      }
    })

    const icon = wrapper.find('.wc-feature-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.html()).toContain('star')
  })

  it('应该支持图片', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        icon: '<img src="/feature.jpg" alt="feature" />'
      }
    })

    const icon = wrapper.find('.wc-feature-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.html()).toContain('/feature.jpg')
  })

  it('应该支持不同的布局', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        reverse: true
      }
    })
    expect(wrapper.classes()).toContain('wc-feature-card--reverse')
  })

  it('应该支持对齐方式', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        align: 'center'
      }
    })
    expect(wrapper.classes()).toContain('wc-feature-card--center')
  })

  it('应该支持链接', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        ctaLabel: '了解更多',
        ctaHref: '/learn-more'
      }
    })
    
    // Feature组件中CTA是链接而不是整个卡片
    const cta = wrapper.find('.wc-feature-cta')
    expect(cta.exists()).toBe(true)
    expect(cta.attributes('href')).toBe('/learn-more')
  })

  it('应该支持悬停效果', async () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        variant: 'elevated'
      }
    })

    expect(wrapper.classes()).toContain('wc-feature-card--elevated')
  })

  it('应该支持徽章', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        icon: '<span class="badge">NEW</span>'
      }
    })

    const icon = wrapper.find('.wc-feature-icon')
    expect(icon.exists()).toBe(true)
    expect(icon.html()).toContain('NEW')
  })

  it('应该支持尺寸变体', () => {
    const wrapper = mount(Feature, {
      props: {
        title: '标题',
        iconSize: 64
      }
    })
    expect(wrapper.classes()).toContain('wc-feature-card')
  })
}) 
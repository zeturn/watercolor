import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from '../../src/components/Chip/Chip.vue'

describe('Chip 组件', () => {
  it('正确渲染标签组件', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '测试标签'
      }
    })
    
    expect(wrapper.find('.wc-chip').exists()).toBe(true)
    expect(wrapper.text()).toContain('测试标签')
  })

  it('支持不同变体', () => {
    const variants = ['filled', 'outlined', 'text']
    
    variants.forEach(variant => {
      const wrapper = mount(Chip, {
        props: { 
          label: '测试',
          variant
        }
      })
      expect(wrapper.classes()).toContain(`wc-chip--${variant}`)
    })
  })

  it('支持不同尺寸', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const wrapper = mount(Chip, {
        props: { 
          label: '测试',
          size
        }
      })
      expect(wrapper.classes()).toContain(`wc-chip--${size}`)
    })
  })

  it('支持不同颜色', () => {
    const colors = ['default', 'primary', 'secondary', 'success', 'warning', 'error']
    
    colors.forEach(color => {
      const wrapper = mount(Chip, {
        props: { 
          label: '测试',
          color
        }
      })
      expect(wrapper.classes()).toContain(`wc-chip--${color}`)
    })
  })

  it('支持可删除功能', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '可删除',
        deletable: true
      }
    })

    expect(wrapper.find('.wc-chip-delete').exists()).toBe(true)
  })

  it('删除按钮点击触发事件', async () => {
    const wrapper = mount(Chip, {
      props: {
        label: '可删除',
        deletable: true
      }
    })

    await wrapper.find('.wc-chip-delete').trigger('click')
    expect(wrapper.emitted('delete')).toBeTruthy()
  })

  it('支持可选择功能', async () => {
    const wrapper = mount(Chip, {
      props: {
        label: '可选择',
        clickable: true
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('显示图标', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '带图标'
      },
      slots: {
        avatar: '<span class="test-icon">🎯</span>'
      }
    })

    expect(wrapper.find('.wc-chip-avatar').exists()).toBe(true)
    expect(wrapper.find('.test-icon').exists()).toBe(true)
  })

  it('显示头像', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '带头像',
        avatar: 'https://example.com/avatar.jpg'
      }
    })

    expect(wrapper.find('.wc-chip-avatar').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg')
  })

  it('支持禁用状态', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '禁用状态',
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('wc-chip--disabled')
  })

  it('支持自定义内容插槽', () => {
    const wrapper = mount(Chip, {
      slots: {
        default: '<span class="custom-content">自定义内容</span>'
      }
    })

    expect(wrapper.find('.custom-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('自定义内容')
  })

  it('阻止删除按钮触发点击事件', async () => {
    const wrapper = mount(Chip, {
      props: {
        label: '测试',
        deletable: true,
        clickable: true
      }
    })

    // 点击删除按钮，应该只触发delete事件，不触发click事件
    await wrapper.find('.wc-chip-delete').trigger('click')
    
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('具有正确的可访问性属性', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '测试',
        deletable: true
      }
    })

    const deleteButton = wrapper.find('.wc-chip-delete')
    expect(deleteButton.attributes('aria-label')).toBe('删除')
    expect(deleteButton.attributes('type')).toBe('button')
  })

  it('支持自定义删除图标', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '测试',
        deletable: true,
        deleteIcon: '自定义删除'
      },
      slots: {
        deleteIcon: '<span class="custom-delete">×</span>'
      }
    })

    expect(wrapper.find('.custom-delete').exists()).toBe(true)
    expect(wrapper.find('.custom-delete').text()).toBe('×')
  })

  it('支持小标签变体', () => {
    const wrapper = mount(Chip, {
      props: {
        label: '小标签',
        size: 'sm',
        variant: 'outlined'
      }
    })

    expect(wrapper.classes()).toContain('wc-chip--sm')
    expect(wrapper.classes()).toContain('wc-chip--outlined')
  })
}) 
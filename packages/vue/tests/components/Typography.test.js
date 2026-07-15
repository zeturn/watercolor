import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Typography from '@/components/Typography/Typography.vue'

describe('Typography Component', () => {
  it('应该正确渲染排版组件', () => {
    const wrapper = mount(Typography, {
      slots: {
        default: '文本内容'
      }
    })

    expect(wrapper.text()).toContain('文本内容')
    expect(wrapper.element.tagName.toLowerCase()).toBe('p')
  })

  it('应该正确应用变体', () => {
    const wrapper = mount(Typography, {
      props: {
        variant: 'h1'
      },
      slots: {
        default: '标题文本'
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('h1')
    expect(wrapper.text()).toContain('标题文本')
    expect(wrapper.classes()).toContain('wc-typography--h1')
  })

  it('应该支持自定义组件', () => {
    const wrapper = mount(Typography, {
      props: {
        variant: 'body1',
        component: 'span'
      },
      slots: {
        default: 'span文本'
      }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('span')
  })

  it('应该正确应用颜色', () => {
    const wrapper = mount(Typography, {
      props: {
        color: 'primary'
      }
    })

    expect(wrapper.vm.color).toBe('primary')
    expect(wrapper.classes()).toContain('wc-typography--color-primary')
  })

  it('应该正确应用文本对齐', () => {
    const wrapper = mount(Typography, {
      props: {
        align: 'center'
      }
    })

    expect(wrapper.vm.align).toBe('center')
    expect(wrapper.classes()).toContain('wc-typography--align-center')
  })

  it('应该支持无换行', () => {
    const wrapper = mount(Typography, {
      props: {
        noWrap: true
      }
    })

    expect(wrapper.vm.noWrap).toBe(true)
    expect(wrapper.classes()).toContain('wc-typography--no-wrap')
  })

  it('应该支持底部间距', () => {
    const wrapper = mount(Typography, {
      props: {
        gutterBottom: true
      }
    })

    expect(wrapper.vm.gutterBottom).toBe(true)
    expect(wrapper.classes()).toContain('wc-typography--gutter-bottom')
  })

  it('应该设置正确的默认值', () => {
    const wrapper = mount(Typography)

    expect(wrapper.vm.variant).toBe('body1')
    expect(wrapper.vm.color).toBe('inherit')
    expect(wrapper.vm.align).toBe('inherit')
    expect(wrapper.vm.gutterBottom).toBe(false)
    expect(wrapper.vm.noWrap).toBe(false)
  })

  it('应该正确计算组件类型', () => {
    const wrapper = mount(Typography, {
      props: {
        variant: 'h2'
      }
    })

    expect(wrapper.vm.component).toBe('h2')
  })

  it('应该应用正确的样式', () => {
    const wrapper = mount(Typography, {
      props: {
        variant: 'h1'
      }
    })

    expect(wrapper.vm.typographyStyles).toBeDefined()
  })

  it('应该验证variant属性', () => {
    const validVariants = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'subtitle1', 'subtitle2',
      'body1', 'body2',
      'caption', 'overline',
      'button'
    ]

    validVariants.forEach(variant => {
      const wrapper = mount(Typography, {
        props: { variant }
      })
      expect(wrapper.vm.variant).toBe(variant)
    })
  })

  it('应该验证color属性', () => {
    const validColors = [
      'inherit', 'primary', 'secondary', 'success', 'warning', 'error',
      'textPrimary', 'textSecondary', 'textDisabled'
    ]

    validColors.forEach(color => {
      const wrapper = mount(Typography, {
        props: { color }
      })
      expect(wrapper.vm.color).toBe(color)
    })
  })

  it('应该验证align属性', () => {
    const validAligns = ['inherit', 'left', 'center', 'right', 'justify']

    validAligns.forEach(align => {
      const wrapper = mount(Typography, {
        props: { align }
      })
      expect(wrapper.vm.align).toBe(align)
    })
  })
})

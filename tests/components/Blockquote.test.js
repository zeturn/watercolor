import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Blockquote from '@/components/Blockquote/Blockquote.vue'

describe('Blockquote 组件', () => {
  it('正确渲染引用内容', () => {
    const wrapper = mount(Blockquote, {
      props: {
        cite: '张三'
      },
      slots: {
        default: '这是一段引用内容'
      }
    })
    
    expect(wrapper.find('blockquote').exists()).toBe(true)
    expect(wrapper.text()).toContain('这是一段引用内容')
    expect(wrapper.text()).toContain('张三')
  })

  it('支持插槽内容', () => {
    const wrapper = mount(Blockquote, {
      slots: {
        default: '自定义引用内容'
      }
    })
    
    expect(wrapper.text()).toContain('自定义引用内容')
  })

  it('支持引用来源', () => {
    const wrapper = mount(Blockquote, {
      props: {
        cite: '引用来源'
      },
      slots: {
        default: '引用内容'
      }
    })
    
    expect(wrapper.find('.quote-cite').exists()).toBe(true)
    expect(wrapper.find('.quote-cite').text()).toContain('引用来源')
  })

  it('支持不同变体', () => {
    const variants = ['default', 'minimal', 'card']
    
    variants.forEach(variant => {
      const wrapper = mount(Blockquote, {
        props: { 
          variant
        },
        slots: {
          default: '测试引用'
        }
      })
      // default变体不会添加额外类名，其他变体才会添加
      if (variant !== 'default') {
        expect(wrapper.classes()).toContain(`wc-blockquote--${variant}`)
      } else {
        expect(wrapper.classes()).toContain('wc-blockquote')
      }
    })
  })

  it('支持不同尺寸', () => {
    const sizes = ['small', 'medium', 'large']
    
    sizes.forEach(size => {
      const wrapper = mount(Blockquote, {
        props: { 
          size
        },
        slots: {
          default: '测试引用'
        }
      })
      // medium是默认尺寸，不会添加额外类名
      if (size !== 'medium') {
        expect(wrapper.classes()).toContain(`wc-blockquote--${size}`)
      } else {
        expect(wrapper.classes()).toContain('wc-blockquote')
      }
    })
  })

  it('支持颜色主题', () => {
    const colors = ['default', 'primary', 'success', 'warning', 'error', 'info']
    
    colors.forEach(color => {
      const wrapper = mount(Blockquote, {
        props: { 
          color
        },
        slots: {
          default: '测试引用'
        }
      })
      // default颜色不会添加额外类名
      if (color !== 'default') {
        expect(wrapper.classes()).toContain(`wc-blockquote--${color}`)
      } else {
        expect(wrapper.classes()).toContain('wc-blockquote')
      }
    })
  })

  it('显示默认内容', () => {
    const wrapper = mount(Blockquote)
    
    expect(wrapper.find('.quote-text').exists()).toBe(true)
    expect(wrapper.text()).toContain('这里是引用内容')
  })

  it('支持自定义类名', () => {
    const wrapper = mount(Blockquote, {
      props: {
        className: 'custom-blockquote'
      },
      slots: {
        default: '测试引用'
      }
    })
    
    expect(wrapper.classes()).toContain('custom-blockquote')
  })

  it('具有正确的语义标签', () => {
    const wrapper = mount(Blockquote, {
      slots: {
        default: '测试引用'
      }
    })
    
    expect(wrapper.find('blockquote').exists()).toBe(true)
    expect(wrapper.find('.quote-text').exists()).toBe(true)
  })

  it('支持noBorder属性', () => {
    const wrapper = mount(Blockquote, {
      props: {
        noBorder: false
      },
      slots: {
        default: '测试引用'
      }
    })
    
    // noBorder为false时不会添加no-border类，而是默认有边框
    expect(wrapper.classes()).not.toContain('wc-blockquote--no-border')
  })

  it('支持interactive属性', () => {
    const wrapper = mount(Blockquote, {
      props: {
        interactive: false
      },
      slots: {
        default: '测试引用'
      }
    })
    
    // interactive为false时不会添加interactive类
    expect(wrapper.classes()).not.toContain('wc-blockquote--interactive')
  })
}) 
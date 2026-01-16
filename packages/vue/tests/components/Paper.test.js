import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Paper from '@/components/Paper/Paper.vue'

describe('Paper Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Paper, {
      slots: {
        default: '纸张内容'
      }
    })
    
    expect(wrapper.text()).toContain('纸张内容')
    expect(wrapper.find('.wc-paper').exists()).toBe(true)
  })

  it('applies variant correctly', () => {
    const wrapper = mount(Paper, {
      props: {
        variant: 'outlined'
      },
      slots: {
        default: '边框纸张'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-paper--outlined')
  })

  it('applies elevation correctly', () => {
    const wrapper = mount(Paper, {
      props: {
        elevation: 4
      },
      slots: {
        default: '阴影纸张'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-paper--elevation-4')
  })

  it('applies rounded correctly', () => {
    const wrapper = mount(Paper, {
      props: {
        rounded: true
      },
      slots: {
        default: '圆角纸张'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-paper--rounded')
  })

  it('renders as custom element', () => {
    const wrapper = mount(Paper, {
      props: {
        component: 'section'
      },
      slots: {
        default: '自定义元素纸张'
      }
    })
    
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })
}) 
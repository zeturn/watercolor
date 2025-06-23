import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from '../../src/components/Modal/Modal.vue'

describe('Modal Component', () => {
  it('renders correctly when open', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true
      },
      slots: {
        default: '模态框内容'
      }
    })
    
    expect(wrapper.find('.wc-modal').exists()).toBe(true)
    expect(wrapper.text()).toContain('模态框内容')
  })

  it('is hidden when not open', () => {
    const wrapper = mount(Modal, {
      props: {
        open: false
      },
      slots: {
        default: '隐藏的模态框'
      }
    })
    
    expect(wrapper.find('.wc-modal').exists()).toBe(false)
  })

  it('shows overlay by default', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true
      }
    })
    
    expect(wrapper.find('.wc-modal__overlay').exists()).toBe(true)
  })

  it('hides overlay when showOverlay is false', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        showOverlay: false
      }
    })
    
    expect(wrapper.find('.wc-modal__overlay').exists()).toBe(false)
  })

  it('emits close event when overlay clicked and closeOnOverlay is true', async () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        closeOnOverlay: true
      }
    })
    
    await wrapper.find('.wc-modal__overlay').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('does not close when overlay clicked and closeOnOverlay is false', async () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        closeOnOverlay: false
      }
    })
    
    await wrapper.find('.wc-modal__overlay').trigger('click')
    expect(wrapper.emitted().close).toBeFalsy()
  })

  it('shows close button when closable', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        closable: true
      }
    })
    
    expect(wrapper.find('.wc-modal__close').exists()).toBe(true)
  })

  it('emits close event when close button clicked', async () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        closable: true
      }
    })
    
    await wrapper.find('.wc-modal__close').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('applies size correctly', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        size: 'lg'
      }
    })
    
    expect(wrapper.find('.wc-modal').classes()).toContain('wc-modal--lg')
  })

  it('applies position correctly', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        position: 'top'
      }
    })
    
    expect(wrapper.find('.wc-modal').classes()).toContain('wc-modal--top')
  })

  it('applies fullscreen mode', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        fullscreen: true
      }
    })
    
    expect(wrapper.find('.wc-modal').classes()).toContain('wc-modal--fullscreen')
  })

  it('prevents scrolling when open and lockScroll is true', () => {
    // 先重置body样式
    document.body.style.overflow = ''
    
    const wrapper = mount(Modal, {
      props: {
        open: true,
        lockScroll: true
      }
    })
    
    expect(document.body.style.overflow).toBe('hidden')
    
    wrapper.unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('applies z-index correctly', () => {
    const wrapper = mount(Modal, {
      props: {
        open: true,
        zIndex: 9999
      }
    })
    
    expect(wrapper.find('.wc-modal').attributes('style')).toContain('z-index: 9999')
  })
}) 
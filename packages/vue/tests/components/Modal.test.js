import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h, nextTick, ref } from 'vue'
import Modal from '@/components/Modal/Modal.vue'

const flushOverlay = () => new Promise(resolve => setTimeout(resolve, 0))

// 每次测试后清理 body，避免污染
afterEach(() => {
  document.body.innerHTML = ''
})

describe('Modal Component', () => {
  it('renders correctly when open', () => {
    mount(Modal, {
      props: { open: true },
      slots: { default: '模态框内容' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeTruthy()
    expect(document.body.textContent).toContain('模态框内容')
  })

  it('is hidden when not open', () => {
    mount(Modal, {
      props: { open: false },
      slots: { default: '隐藏的模态框' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeFalsy()
  })

  it('shows overlay by default', () => {
    mount(Modal, {
      props: { open: true },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal__overlay')).toBeTruthy()
  })

  it('hides overlay when showOverlay is false', () => {
    mount(Modal, {
      props: { open: true, showOverlay: false },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal__overlay')).toBeFalsy()
  })

  it('emits close event when overlay clicked and closeOnOverlay is true', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, closeOnOverlay: true },
      attachTo: document.body
    })
    const overlay = document.body.querySelector('.wc-modal__overlay')
    await wrapper.vm.$nextTick()
    await overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('does not close when overlay clicked and closeOnOverlay is false', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, closeOnOverlay: false },
      attachTo: document.body
    })
    const overlay = document.body.querySelector('.wc-modal__overlay')
    await wrapper.vm.$nextTick()
    await overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(wrapper.emitted('close')).toBeUndefined()
  })

  it('shows close button when closable', () => {
    mount(Modal, {
      props: { open: true, closable: true },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal__close')).toBeTruthy()
  })

  it('emits close event when close button clicked', async () => {
    const wrapper = mount(Modal, {
      props: { open: true, closable: true },
      attachTo: document.body
    })
    const closeBtn = document.body.querySelector('.wc-modal__close')
    await wrapper.vm.$nextTick()
    await closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('applies size correctly', () => {
    mount(Modal, {
      props: { open: true, size: 'lg' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal').classList.contains('wc-modal--lg')).toBe(true)
  })

  it('applies position correctly', () => {
    mount(Modal, {
      props: { open: true, position: 'top' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal-overlay').classList.contains('wc-modal-overlay--top')).toBe(true)
  })

  it('applies fullscreen mode', () => {
    mount(Modal, {
      props: { open: true, fullScreen: true },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal').classList.contains('wc-modal--fullscreen')).toBe(true)
  })

  it('prevents scrolling when open and lockScroll is true', async () => {
    document.body.style.overflow = ''
    const wrapper = mount(Modal, {
      props: { open: true, lockScroll: true },
      attachTo: document.body
    })
    await nextTick()
    await nextTick()
    await flushOverlay()
    expect(document.body.style.overflow).toBe('hidden')
    wrapper.unmount()
    expect(document.body.style.overflow).toBe('')
  })

  it('applies z-index correctly', () => {
    mount(Modal, {
      props: { open: true, zIndex: 9999 },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal-overlay').style.zIndex).toBe('9999')
  })
})

describe('Modal v-model/visible/open 兼容性', () => {
  it('renders when visible is true', () => {
    mount(Modal, {
      props: { visible: true },
      slots: { default: '内容' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeTruthy()
  })

  it('renders when modelValue is true (v-model)', () => {
    mount(Modal, {
      props: { modelValue: true },
      slots: { default: '内容' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeTruthy()
  })

  it('modelValue优先级高于visible/open', () => {
    mount(Modal, {
      props: { modelValue: false, visible: true, open: true },
      slots: { default: '内容' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeFalsy()
  })

  it('visible优先级高于open', () => {
    mount(Modal, {
      props: { visible: false, open: true },
      slots: { default: '内容' },
      attachTo: document.body
    })
    expect(document.body.querySelector('.wc-modal')).toBeFalsy()
  })

  it('emits update:modelValue when closed (v-model)', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closable: true },
      attachTo: document.body
    })
    const closeBtn = document.body.querySelector('.wc-modal__close')
    await wrapper.vm.$nextTick()
    await closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false])
  })

  it('closes on Escape through the shared overlay layer', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closable: true },
      attachTo: document.body
    })

    await nextTick()
    await flushOverlay()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))

    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false])
    expect(wrapper.emitted('close')).toBeTruthy()
    wrapper.unmount()
  })

  it('restores focus to the trigger after closing', async () => {
    const Example = defineComponent({
      setup() {
        const open = ref(false)
        return () => h('div', [
          h('button', { type: 'button', onClick: () => { open.value = true } }, 'Open modal'),
          h(Modal, {
            modelValue: open.value,
            'onUpdate:modelValue': (value) => { open.value = value },
            onClose: () => { open.value = false },
          }, { default: () => h('button', { type: 'button' }, 'Inside modal') })
        ])
      }
    })

    const wrapper = mount(Example, { attachTo: document.body })
    const trigger = wrapper.find('button')
    trigger.element.focus()
    await trigger.trigger('click')
    await nextTick()

    const closeBtn = document.body.querySelector('.wc-modal__close')
    closeBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await nextTick()

    await nextTick()
    expect(document.activeElement).toBe(trigger.element)
  })
})

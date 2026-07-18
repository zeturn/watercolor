import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HoverCard from '@/components/HoverCard/HoverCard.vue'

const flushTimers = () => new Promise(resolve => setTimeout(resolve, 0))

describe('HoverCard Component', () => {
  it('shows teleported card content on hover and hides on Escape', async () => {
    const wrapper = mount(HoverCard, {
      props: {
        triggerText: 'Hover me',
        delay: 0,
        hideDelay: 0,
        cardData: {
          title: 'Preview title',
          description: 'Preview description'
        }
      },
      attachTo: document.body
    })

    await wrapper.trigger('mouseenter')
    await flushTimers()

    expect(document.body.querySelector('.hover-card-popup')).toBeTruthy()
    expect(document.body.textContent).toContain('Preview title')

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await wrapper.vm.$nextTick()

    expect(document.body.querySelector('.hover-card-popup')).toBeFalsy()
    wrapper.unmount()
  })
})

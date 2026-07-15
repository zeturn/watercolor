import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Divider from '@/components/Divider/Divider.vue'

describe('Divider Component', () => {
  it('renders a semantic horizontal rule by default', () => {
    const wrapper = mount(Divider)

    expect(wrapper.element.tagName.toLowerCase()).toBe('hr')
    expect(wrapper.classes()).toContain('wc-divider--horizontal')
    expect(wrapper.classes()).toContain('wc-divider--solid')
  })

  it('renders text and explicit variants', () => {
    const wrapper = mount(Divider, {
      props: { variant: 'dashed' },
      slots: { default: 'Optional' }
    })

    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
    expect(wrapper.classes()).toContain('wc-divider--with-text')
    expect(wrapper.classes()).toContain('wc-divider--dashed')
    expect(wrapper.find('.wc-divider__text').text()).toBe('Optional')
  })
})

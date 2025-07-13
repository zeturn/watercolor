import { mount } from '@vue/test-utils'
import Paradox from '../../src/components/Paradox/Paradox.vue'

describe('Paradox.vue', () => {
  it('renders default content correctly', () => {
    const wrapper = mount(Paradox)
    expect(wrapper.text()).toContain('这句话是假。')
    expect(wrapper.attributes('title')).toBe('若此句为真，则为假；若此句为假，则为真。')
  })

  it('renders custom content', () => {
    const wrapper = mount(Paradox, {
      props: {
        content: '这是一个测试悖论。'
      }
    })
    expect(wrapper.text()).toContain('这是一个测试悖论。')
  })

  it('applies correct CSS classes for variants', () => {
    const wrapper = mount(Paradox, {
      props: {
        size: 'lg',
        variant: 'success',
        borderStyle: 'top',
        withQuotes: true,
        glow: true,
        gradient: true
      }
    })
    
    expect(wrapper.classes()).toContain('wc-paradox--lg')
    expect(wrapper.classes()).toContain('wc-paradox--success')
    expect(wrapper.classes()).toContain('wc-paradox--border-top')
    expect(wrapper.classes()).toContain('wc-paradox--with-quotes')
    expect(wrapper.classes()).toContain('wc-paradox--glow')
    expect(wrapper.classes()).toContain('wc-paradox--gradient')
  })

  it('handles hover effects', async () => {
    const wrapper = mount(Paradox, {
      props: {
        hoverEffect: true
      }
    })
    
    await wrapper.trigger('mouseenter')
    expect(wrapper.classes()).toContain('wc-paradox--hover')
    
    await wrapper.trigger('mouseleave')
    expect(wrapper.classes()).not.toContain('wc-paradox--hover')
  })

  it('applies animation classes correctly', () => {
    const wrapper = mount(Paradox, {
      props: {
        animated: true,
        transform: 'rotate',
        speed: 'fast'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-paradox--animated')
    expect(wrapper.classes()).toContain('wc-paradox--rotate')
    expect(wrapper.classes()).toContain('wc-paradox--fast')
  })

  it('accepts custom className', () => {
    const wrapper = mount(Paradox, {
      props: {
        className: 'custom-class'
      }
    })
    
    expect(wrapper.classes()).toContain('custom-class')
  })

  it('renders slot content when provided', () => {
    const wrapper = mount(Paradox, {
      slots: {
        default: 'Slot content'
      }
    })
    
    expect(wrapper.text()).toContain('Slot content')
  })
}) 
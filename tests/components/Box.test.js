import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Box from '@/components/Box/Box.vue'

describe('Box Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Box, {
      slots: {
        default: '盒子内容'
      }
    })
    
    expect(wrapper.text()).toContain('盒子内容')
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('applies padding correctly', () => {
    const wrapper = mount(Box, {
      props: {
        p: 4
      }
    })
    
    expect(wrapper.element.style.padding).toBe('1rem')
  })

  it('applies margin correctly', () => {
    const wrapper = mount(Box, {
      props: {
        m: 2
      }
    })
    
    expect(wrapper.element.style.margin).toBe('0.5rem')
  })

  it('applies background color correctly', () => {
    const wrapper = mount(Box, {
      props: {
        bgcolor: 'red'
      }
    })
    
    expect(wrapper.element.style.backgroundColor).toBe('red')
  })

  it('applies border correctly', () => {
    const wrapper = mount(Box, {
      props: {
        border: '1px solid black'
      }
    })
    
    expect(wrapper.element.style.border).toBe('1px solid black')
  })

  it('applies border radius correctly', () => {
    const wrapper = mount(Box, {
      props: {
        borderRadius: 8
      }
    })
    
    expect(wrapper.element.style.borderRadius).toBe('8px')
  })

  it('applies display property correctly', () => {
    const wrapper = mount(Box, {
      props: {
        display: 'flex'
      }
    })
    
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.element.style.display).toBe('flex')
  })

  it('applies multiple properties', () => {
    const wrapper = mount(Box, {
      props: {
        p: 4,
        m: 2,
        bgcolor: 'gray',
        border: '1px solid gray'
      }
    })
    
    expect(wrapper.element.style.padding).toBe('1rem')
    expect(wrapper.element.style.margin).toBe('0.5rem')
    expect(wrapper.element.style.backgroundColor).toBe('gray')
    expect(wrapper.element.style.border).toBe('1px solid gray')
  })

  it('applies custom element tag', () => {
    const wrapper = mount(Box, {
      props: {
        component: 'section'
      },
      slots: {
        default: '内容'
      }
    })
    
    expect(wrapper.element.tagName.toLowerCase()).toBe('section')
  })

  it('applies flexbox properties', () => {
    const wrapper = mount(Box, {
      props: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }
    })
    
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('justify-center')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.element.style.display).toBe('flex')
    expect(wrapper.element.style.justifyContent).toBe('center')
    expect(wrapper.element.style.alignItems).toBe('center')
    expect(wrapper.element.style.flexDirection).toBe('column')
  })

  it('applies width and height', () => {
    const wrapper = mount(Box, {
      props: {
        width: '100px',
        height: '200px'
      }
    })
    
    expect(wrapper.element.style.width).toBe('100px')
    expect(wrapper.element.style.height).toBe('200px')
  })

  it('applies directional padding', () => {
    const wrapper = mount(Box, {
      props: {
        pt: 2,
        pb: 4,
        pl: 1,
        pr: 3
      }
    })
    
    expect(wrapper.element.style.paddingTop).toBe('0.5rem')
    expect(wrapper.element.style.paddingBottom).toBe('1rem')
    expect(wrapper.element.style.paddingLeft).toBe('0.25rem')
    expect(wrapper.element.style.paddingRight).toBe('0.75rem')
  })

  it('applies directional margin', () => {
    const wrapper = mount(Box, {
      props: {
        mt: 1,
        mb: 2,
        ml: 3,
        mr: 4
      }
    })
    
    expect(wrapper.element.style.marginTop).toBe('0.25rem')
    expect(wrapper.element.style.marginBottom).toBe('0.5rem')
    expect(wrapper.element.style.marginLeft).toBe('0.75rem')
    expect(wrapper.element.style.marginRight).toBe('1rem')
  })

  it('applies color property', () => {
    const wrapper = mount(Box, {
      props: {
        color: 'red'
      }
    })
    
    expect(wrapper.element.style.color).toBe('red')
  })

  it('applies gap property', () => {
    const wrapper = mount(Box, {
      props: {
        gap: 4
      }
    })
    
    expect(wrapper.classes()).toContain('gap-4')
    expect(wrapper.element.style.gap).toBe('4px')
  })
}) 
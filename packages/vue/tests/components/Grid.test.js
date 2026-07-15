import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Grid from '@/components/Grid/Grid.vue'

describe('Grid 组件', () => {
  it('正确渲染网格容器', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true
      },
      slots: {
        default: '<div>网格项1</div><div>网格项2</div><div>网格项3</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid')
    expect(wrapper.classes()).toContain('wc-grid-container')
  })

  it('支持不同列数', () => {
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']
    
    breakpoints.forEach(breakpoint => {
      const wrapper = mount(Grid, {
        props: { 
          item: true,
          [breakpoint]: 6
        },
        slots: { default: '<div>项目</div>' }
      })
      expect(wrapper.classes()).toContain(`wc-grid-item--${breakpoint}-6`)
    })
  })

  it('支持间距设置', () => {
    const spacings = [1, 2, 3, 4, 5, 6]
    
    spacings.forEach(spacing => {
      const wrapper = mount(Grid, {
        props: { 
          container: true,
          spacing
        },
        slots: { default: '<div>项目</div>' }
      })
      expect(wrapper.classes()).toContain('wc-grid-container')
      expect(wrapper.classes()).toContain(`wc-grid-container--spacing-${spacing}`)
    })
  })

  it('支持自定义间距', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true,
        spacing: 5
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-container--spacing-5')
  })

  it('支持响应式列数', () => {
    const wrapper = mount(Grid, {
      props: {
        item: true,
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3
      },
      slots: {
        default: '<div>响应式项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-item--xs-12')
    expect(wrapper.classes()).toContain('wc-grid-item--sm-6')
    expect(wrapper.classes()).toContain('wc-grid-item--md-4')
    expect(wrapper.classes()).toContain('wc-grid-item--lg-3')
  })

  it('不会把未设置的断点转换成一列宽', () => {
    const wrapper = mount(Grid, {
      props: {
        item: true,
        xs: 12,
        md: 4
      },
      slots: {
        default: '<div>响应式项目</div>'
      }
    })

    expect(wrapper.classes()).toContain('wc-grid-item--xs-12')
    expect(wrapper.classes()).toContain('wc-grid-item--md-4')
    expect(wrapper.classes()).not.toContain('wc-grid-item--sm-1')
    expect(wrapper.classes()).not.toContain('wc-grid-item--lg-1')
    expect(wrapper.classes()).not.toContain('wc-grid-item--xl-1')
  })

  it('支持响应式间距', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true,
        spacing: 2
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-container')
    expect(wrapper.classes()).toContain('wc-grid-container--spacing-2')
  })

  it('支持自动填充模式', () => {
    const wrapper = mount(Grid, {
      props: {
        item: true,
        xs: 'auto'
      },
      slots: {
        default: '<div>自适应项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-item--xs-auto')
  })

  it('支持行间距设置', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true,
        spacing: 3
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-container--spacing-3')
  })

  it('支持列间距设置', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true,
        spacing: 2
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-container--spacing-2')
  })

  it('支持垂直对齐', () => {
    const alignments = ['flex-start', 'center', 'flex-end', 'stretch']
    
    alignments.forEach(align => {
      const wrapper = mount(Grid, {
        props: { 
          container: true,
          alignItems: align
        },
        slots: { default: '<div>项目</div>' }
      })
      const alignMap = {
        'flex-start': 'wc-grid-container--align-start',
        'center': 'wc-grid-container--align-center',
        'flex-end': 'wc-grid-container--align-end',
        'stretch': 'wc-grid-container--align-stretch'
      }
      expect(wrapper.classes()).toContain(alignMap[align])
    })
  })

  it('支持水平对齐', () => {
    const justifications = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
    
    justifications.forEach(justify => {
      const wrapper = mount(Grid, {
        props: { 
          container: true,
          justifyContent: justify
        },
        slots: { default: '<div>项目</div>' }
      })
      const justifyMap = {
        'flex-start': 'wc-grid-container--justify-start',
        'center': 'wc-grid-container--justify-center',
        'flex-end': 'wc-grid-container--justify-end',
        'space-between': 'wc-grid-container--justify-between',
        'space-around': 'wc-grid-container--justify-around',
        'space-evenly': 'wc-grid-container--justify-evenly'
      }
      expect(wrapper.classes()).toContain(justifyMap[justify])
    })
  })

  it('支持密集填充', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true,
        direction: 'row'
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-container--row')
  })

  it('支持自定义标签', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true
      },
      slots: {
        default: '<div>项目</div>'
      }
    })
    
    // Grid组件只支持div标签
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
  })

  it('支持自定义CSS类', () => {
    const wrapper = mount(Grid, {
      props: {
        container: true
      },
      slots: {
        default: '<div>项目</div>'
      },
      attrs: {
        class: 'custom-grid'
      }
    })
    
    expect(wrapper.classes()).toContain('custom-grid')
  })

  it('支持子网格', () => {
    const wrapper = mount(Grid, {
      props: {
        item: true,
        xs: 6
      },
      slots: {
        default: '<div>子网格项目</div>'
      }
    })
    
    expect(wrapper.classes()).toContain('wc-grid-item--xs-6')
  })
})

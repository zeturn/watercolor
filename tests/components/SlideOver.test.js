import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SlideOver from '../../src/components/SlideOver/SlideOver.vue'

describe('SlideOver组件测试', () => {
  it('应该正确渲染组件', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.vm.model).toBe(true)
  })

  it('应该正确处理modelValue属性', async () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: false
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.vm.model).toBe(false)

    await wrapper.setProps({ modelValue: true })
    expect(wrapper.vm.model).toBe(true)
  })

  it('应该支持placement属性', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true,
        placement: 'left'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.props('placement')).toBe('left')
  })

  it('应该支持right placement', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true,
        placement: 'right'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.props('placement')).toBe('right')
  })

  it('应该支持width属性 - 字符串值', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true,
        width: '500px'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.vm.panelStyle.width).toBe('500px')
  })

  it('应该支持width属性 - 数字值', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true,
        width: 600
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.vm.panelStyle.width).toBe('600px')
  })

  it('应该有正确的默认width', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.vm.panelStyle.width).toBe('400px')
  })

  it('应该支持close方法', async () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    await wrapper.vm.close()
    
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([false])
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('应该支持slot内容', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      slots: {
        default: '主要内容',
        header: '标题内容',
        footer: '底部内容'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.text()).toContain('主要内容')
    expect(wrapper.text()).toContain('标题内容')
    expect(wrapper.text()).toContain('底部内容')
  })

  it('应该有正确的组件名称', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.vm.$options.name).toBe('SlideOver')
  })

  it('应该正确发出事件', async () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    // 测试close方法发出的事件
    await wrapper.vm.close()
    
    const emitted = wrapper.emitted()
    expect(emitted).toHaveProperty('update:modelValue')
    expect(emitted).toHaveProperty('close')
    expect(emitted['update:modelValue'][0]).toEqual([false])
  })

  it('应该正确设置model计算属性', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.vm.model).toBe(true)
    
    // 测试model的setter
    wrapper.vm.model = false
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([false])
  })

  it('应该支持默认placement值', () => {
    const wrapper = mount(SlideOver, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })
    
    expect(wrapper.props('placement')).toBe('right')
  })
}) 
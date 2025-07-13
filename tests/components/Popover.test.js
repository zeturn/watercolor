import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Popover from '@/components/Popover/Popover.vue'

describe('Popover Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.find('.wc-popover-container').exists()).toBe(true)
    expect(wrapper.find('.wc-wc-popover-trigger').exists()).toBe(true)
  })

  it('displays trigger text', () => {
    const wrapper = mount(Popover, {
      props: {
        triggerText: '自定义触发器'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.find('.wc-wc-popover-trigger').text()).toBe('自定义触发器')
  })

  it('opens popover when trigger clicked', async () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.vm.isOpen).toBe(false)
    
    await wrapper.find('.wc-popover-trigger').trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
  })

  it('closes popover when trigger clicked again', async () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    await wrapper.find('.wc-popover-trigger').trigger('click')
    expect(wrapper.vm.isOpen).toBe(true)
    
    await wrapper.find('.wc-popover-trigger').trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
  })

  it('emits open event', async () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    await wrapper.find('.wc-popover-trigger').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('open')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([true])
  })

  it('emits close event', async () => {
    const wrapper = mount(Popover, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    wrapper.vm.close()
    await wrapper.vm.$nextTick()
    
    expect(wrapper.emitted()).toHaveProperty('close')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([false])
  })

  it('shows popover content when open', async () => {
    const wrapper = mount(Popover, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.text()).toContain('这是默认的弹出内容。')
  })

  it('supports custom content via slots', async () => {
    const wrapper = mount(Popover, {
      props: {
        modelValue: true
      },
      slots: {
        default: '自定义弹出内容'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.text()).toContain('自定义弹出内容')
  })

  it('supports custom trigger via slots', () => {
    const wrapper = mount(Popover, {
      slots: {
        trigger: '<button class="custom-trigger">自定义触发器</button>'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.find('.custom-trigger').exists()).toBe(true)
    expect(wrapper.find('.custom-trigger').text()).toBe('自定义触发器')
  })

  it('applies correct placement', () => {
    const placements = ['top', 'bottom', 'left', 'right']

    placements.forEach(placement => {
      const wrapper = mount(Popover, {
        props: {
          placement,
          modelValue: true
        },
        global: {
          stubs: {
            teleport: true
          }
        }
      })

      expect(wrapper.vm.placement).toBe(placement)
    })
  })

  it('handles offset prop', () => {
    const wrapper = mount(Popover, {
      props: {
        offset: 16
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.vm.offset).toBe(16)
  })

  it('provides open and close methods to trigger slot', () => {
    const wrapper = mount(Popover, {
      slots: {
        trigger: '<template #trigger="{ open, close }"><button @click="open" class="custom-open">打开</button></template>'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    // 测试是否能正确传递方法
    expect(wrapper.vm.open).toBeTypeOf('function')
    expect(wrapper.vm.close).toBeTypeOf('function')
  })

  it('sets correct aria attributes', () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    const trigger = wrapper.find('.wc-popover-trigger')
    expect(trigger.attributes('aria-expanded')).toBe('false')
  })

  it('updates aria-expanded when opened', async () => {
    const wrapper = mount(Popover, {
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    await wrapper.find('.wc-popover-trigger').trigger('click')
    const trigger = wrapper.find('.wc-popover-trigger')
    expect(trigger.attributes('aria-expanded')).toBe('true')
  })

  it('initializes with modelValue', () => {
    const wrapper = mount(Popover, {
      props: {
        modelValue: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.vm.isOpen).toBe(true)
  })
}) 
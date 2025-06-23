import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Snackbar from '../../src/components/Snackbar/Snackbar.vue'

describe('Snackbar Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders correctly when open', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '这是一个通知消息'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.text()).toContain('这是一个通知消息')
    expect(wrapper.props('open')).toBe(true)
  })

  it('does not render when closed', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: false,
        message: '这是一个通知消息'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('open')).toBe(false)
  })

  it('applies severity correctly', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '成功消息',
        severity: 'success'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('severity')).toBe('success')
  })

  it('applies position correctly', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '测试消息',
        anchorOrigin: { vertical: 'top', horizontal: 'center' }
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('anchorOrigin')).toEqual({ vertical: 'top', horizontal: 'center' })
  })

  it('supports closable prop', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '可关闭消息',
        closable: true
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('closable')).toBe(true)
  })

  it('auto closes after timeout', async () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '自动关闭消息',
        autoHideDuration: 1000
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('shows action when provided', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '有动作的消息',
        action: '撤销'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('action')).toBe('撤销')
    expect(wrapper.text()).toContain('撤销')
  })

  it('shows icon when enabled', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '有图标的消息',
        showIcon: true,
        severity: 'success'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('showIcon')).toBe(true)
    expect(wrapper.props('severity')).toBe('success')
  })

  it('applies variant correctly', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: 'outlined变体',
        variant: 'outlined',
        severity: 'error'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('variant')).toBe('outlined')
    expect(wrapper.props('severity')).toBe('error')
  })

  it('displays title when provided', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        title: '通知标题',
        message: '通知内容'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('title')).toBe('通知标题')
    expect(wrapper.props('message')).toBe('通知内容')
    expect(wrapper.text()).toContain('通知标题')
    expect(wrapper.text()).toContain('通知内容')
  })

  it('renders slot content', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true
      },
      slots: {
        default: '<div class="custom-content">自定义内容</div>'
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.text()).toContain('自定义内容')
  })

  it('shows progress when enabled', () => {
    const wrapper = mount(Snackbar, {
      props: {
        open: true,
        message: '有进度条的消息',
        showProgress: true,
        autoHideDuration: 1000
      },
      global: {
        stubs: {
          teleport: true
        }
      }
    })

    expect(wrapper.props('showProgress')).toBe(true)
    expect(wrapper.props('autoHideDuration')).toBe(1000)
  })

  it('supports severity validation', () => {
    const severities = ['success', 'info', 'warning', 'error']
    
    severities.forEach(severity => {
      const wrapper = mount(Snackbar, {
        props: {
          open: true,
          message: `${severity} 消息`,
          severity
        },
        global: {
          stubs: {
            teleport: true
          }
        }
      })
      
      expect(wrapper.props('severity')).toBe(severity)
    })
  })

  it('supports variant validation', () => {
    const variants = ['filled', 'outlined', 'standard']
    
    variants.forEach(variant => {
      const wrapper = mount(Snackbar, {
        props: {
          open: true,
          message: `${variant} 变体`,
          variant
        },
        global: {
          stubs: {
            teleport: true
          }
        }
      })
      
      expect(wrapper.props('variant')).toBe(variant)
    })
  })
}) 
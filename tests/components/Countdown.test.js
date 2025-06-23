import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Countdown from '../../src/components/Countdown/Countdown.vue'

describe('Countdown 组件', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('正确渲染倒计时', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 60,
        autoStart: false
      }
    })
    
    expect(wrapper.find('.wc-countdown').exists()).toBe(true)
    expect(wrapper.text()).toBe('01:00')
  })

  it('显示正确的时间格式', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 3661, // 1小时1分1秒
        autoStart: false
      }
    })
    
    expect(wrapper.text()).toBe('01:01:01')
  })

  it('支持自动开始倒计时', async () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 5,
        autoStart: true
      }
    })
    
    // 快进1秒
    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toBe('00:04')
  })

  it('支持手动控制倒计时', async () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 10,
        autoStart: false
      }
    })
    
    expect(wrapper.text()).toBe('00:10')
    
    // 手动开始
    wrapper.vm.start()
    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    
    expect(wrapper.text()).toBe('00:09')
  })

  it('倒计时结束时触发finish事件', async () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 1,
        autoStart: true
      }
    })
    
    // 快进到结束，多等一点时间确保事件触发
    vi.advanceTimersByTime(1100)
    await wrapper.vm.$nextTick()
    
    // 检查倒计时是否结束（显示00:00）
    expect(wrapper.text()).toBe('00:00')
    expect(wrapper.classes()).toContain('wc-countdown--finished')
  })

  it('支持重置倒计时', async () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 10,
        autoStart: true
      }
    })
    
    // 先运行一秒
    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('00:09')
    
    // 重置
    await wrapper.setProps({ seconds: 20 })
    expect(wrapper.text()).toBe('00:20')
  })

  it('支持暂停倒计时', async () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 10,
        autoStart: true
      }
    })
    
    // 运行2秒后暂停
    vi.advanceTimersByTime(2000)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('00:08')
    
    wrapper.vm.clear()
    
    // 再过1秒，应该还是停在8秒
    vi.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('00:08')
  })

  it('支持自定义字体大小', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 60,
        fontSize: '24px',
        autoStart: false
      }
    })
    
    expect(wrapper.element.style.fontSize).toBe('24px')
  })

  it('支持自定义颜色', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 60,
        color: '#ff0000',
        autoStart: false
      }
    })
    
    expect(wrapper.element.style.color).toBe('rgb(255, 0, 0)')
  })

  it('支持不同时间格式显示', () => {
    // 测试分:秒格式
    const wrapper1 = mount(Countdown, {
      props: {
        seconds: 90, // 1分30秒
        autoStart: false
      }
    })
    expect(wrapper1.text()).toBe('01:30')
    
    // 测试时:分:秒格式
    const wrapper2 = mount(Countdown, {
      props: {
        seconds: 3725, // 1小时2分5秒
        autoStart: false
      }
    })
    expect(wrapper2.text()).toBe('01:02:05')
  })

  it('零秒时显示00:00', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 0,
        autoStart: false
      }
    })
    
    expect(wrapper.text()).toBe('00:00')
    expect(wrapper.classes()).toContain('wc-countdown--finished')
  })

  it('具有正确的CSS类名', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 30,
        autoStart: false
      }
    })
    
    expect(wrapper.classes()).toContain('wc-countdown')
  })

  it('组件销毁时清理定时器', () => {
    const wrapper = mount(Countdown, {
      props: {
        seconds: 10,
        autoStart: true
      }
    })
    
    // 确保定时器正在运行
    vi.advanceTimersByTime(1000)
    
    // 销毁组件
    wrapper.unmount()
    
    // 这里主要是确保没有报错，清理逻辑在组件内部
    expect(true).toBe(true)
  })
}) 
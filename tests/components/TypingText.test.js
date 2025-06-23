import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TypingText from '../../src/components/TypingText/TypingText.vue'

describe('TypingText组件测试', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('应该正确渲染打字文本组件', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello World'
      }
    })
    expect(wrapper.find('.typing-wrapper').exists()).toBe(true)
    expect(wrapper.find('.typing-text').exists()).toBe(true)
  })

  it('应该显示光标', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        showCursor: true
      }
    })
    
    const cursor = wrapper.find('.typing-cursor')
    expect(cursor.exists()).toBe(true)
  })

  it('应该隐藏光标', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        showCursor: false
      }
    })
    
    const cursor = wrapper.find('.typing-cursor')
    expect(cursor.exists()).toBe(false)
  })

  it('应该支持自定义文本', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: '自定义文本内容'
      }
    })
    
    expect(wrapper.vm.text).toBe('自定义文本内容')
  })

  it('应该支持自定义打字速度', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        speed: 200
      }
    })
    
    expect(wrapper.vm.speed).toBe(200)
  })

  it('应该支持自定义暂停时间', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        pause: 2000
      }
    })
    
    expect(wrapper.vm.pause).toBe(2000)
  })

  it('应该支持循环模式', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        loop: true
      }
    })
    
    expect(wrapper.vm.loop).toBe(true)
  })

  it('应该支持擦除模式', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Hello',
        erase: true
      }
    })
    
    expect(wrapper.vm.erase).toBe(true)
  })

  it('应该初始化显示文本', () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Test'
      }
    })
    
    expect(wrapper.vm.displayText).toBe('')
  })

  it('应该正确设置默认props', () => {
    const wrapper = mount(TypingText)
    
    expect(wrapper.vm.text).toBe('Hello, Watercolor UI!')
    expect(wrapper.vm.speed).toBe(100)
    expect(wrapper.vm.pause).toBe(1500)
    expect(wrapper.vm.loop).toBe(false)
    expect(wrapper.vm.erase).toBe(false)
    expect(wrapper.vm.showCursor).toBe(true)
  })

  it('应该在属性变化时重新初始化动画器', async () => {
    const wrapper = mount(TypingText, {
      props: {
        text: 'Original'
      }
    })
    
    await wrapper.setProps({ text: 'Updated' })
    expect(wrapper.vm.text).toBe('Updated')
  })
}) 
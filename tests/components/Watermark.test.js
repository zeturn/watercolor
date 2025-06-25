import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Watermark from '@/components/Watermark/Watermark.vue'

// Mock canvas相关API
beforeEach(() => {
  global.HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
    font: '',
    fillStyle: '',
    textAlign: '',
    textBaseline: '',
    measureText: vi.fn(() => ({ width: 100 })),
    fillText: vi.fn(),
    clearRect: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
    drawImage: vi.fn()
  }))
  
  global.HTMLCanvasElement.prototype.toDataURL = vi.fn(() => 'data:image/png;base64,mock')
})

describe('Watermark组件测试', () => {
  it('应该正确渲染水印组件', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本'
      },
      slots: {
        default: '内容区域'
      }
    })
    
    expect(wrapper.find('.wc-watermark').exists()).toBe(true)
    expect(wrapper.text()).toContain('内容区域')
  })

  it('应该在没有内容时隐藏水印', () => {
    const wrapper = mount(Watermark, {
      slots: {
        default: '内容区域'
      }
    })
    
    expect(wrapper.find('.wc-watermark').exists()).toBe(false)
    expect(wrapper.text()).toContain('内容区域')
  })

  it('应该支持自定义字体大小', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        fontSize: 20
      }
    })
    
    expect(wrapper.vm.fontSize).toBe(20)
  })

  it('应该支持自定义字体颜色', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        fontColor: '#ff0000'
      }
    })
    
    expect(wrapper.vm.fontColor).toBe('#ff0000')
  })

  it('应该支持旋转', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        rotate: 45
      }
    })
    
    expect(wrapper.vm.rotate).toBe(45)
  })

  it('应该支持全屏模式', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        fullscreen: true
      }
    })
    
    expect(wrapper.vm.fullscreen).toBe(true)
  })

  it('应该支持图片水印', () => {
    const wrapper = mount(Watermark, {
      props: {
        image: 'test.png',
        imageWidth: 100,
        imageHeight: 100
      }
    })
    
    expect(wrapper.vm.image).toBe('test.png')
    expect(wrapper.vm.imageWidth).toBe(100)
    expect(wrapper.vm.imageHeight).toBe(100)
  })

  it('应该支持自定义间距', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        xGap: 100,
        yGap: 80
      }
    })
    
    expect(wrapper.vm.xGap).toBe(100)
    expect(wrapper.vm.yGap).toBe(80)
  })

  it('应该支持自定义偏移', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        xOffset: 50,
        yOffset: 30
      }
    })
    
    expect(wrapper.vm.xOffset).toBe(50)
    expect(wrapper.vm.yOffset).toBe(30)
  })

  it('应该支持层级设置', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        zIndex: 1000
      }
    })
    
    expect(wrapper.vm.zIndex).toBe(1000)
  })

  it('应该支持调试模式', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        debug: true
      }
    })
    
    expect(wrapper.vm.debug).toBe(true)
  })

  it('应该支持跨界显示', () => {
    const wrapper = mount(Watermark, {
      props: {
        content: '水印文本',
        cross: true
      }
    })
    
    expect(wrapper.vm.cross).toBe(true)
  })
}) 
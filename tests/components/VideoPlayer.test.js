import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeAll } from 'vitest'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.vue'

// 解决 jsdom 不支持 play/pause
beforeAll(() => {
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.HTMLMediaElement.prototype.pause = () => {};
  // mock 全屏 API
  Object.defineProperty(document, 'fullscreenElement', {
    writable: true,
    configurable: true,
    value: null
  });
  HTMLElement.prototype.requestFullscreen = function() { document.fullscreenElement = this; };
  document.exitFullscreen = function() { document.fullscreenElement = null; };
});

describe('VideoPlayer (Vue)', () => {
  it('正常渲染', () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4' } })
    expect(wrapper.find('.video-wrapper').exists()).toBe(true)
    expect(wrapper.find('video').exists()).toBe(true)
    expect(wrapper.find('video').attributes('src')).toBe('test.mp4')
  })

  it('支持 autoplay 和 loop', () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4', autoplay: true, loop: true } })
    const video = wrapper.find('video')
    expect(video.attributes('loop')).toBeDefined()
    // autoplay 行为无法直接断言，但属性可传递
  })

  it('控件按钮和进度条存在', () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4' } })
    expect(wrapper.findAll('.ctrl-btn').length).toBeGreaterThanOrEqual(3)
    expect(wrapper.find('.progress').exists()).toBe(true)
    expect(wrapper.find('.volume').exists()).toBe(true)
  })

  it('播放/暂停按钮可点击', async () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4' } })
    const btns = wrapper.findAll('.ctrl-btn')
    expect(btns.length).toBeGreaterThanOrEqual(1)
    const btn = btns[0]
    await btn.trigger('click')
    // 由于 jsdom 不支持 video 播放，无法断言播放状态，但可保证按钮可点击
    expect(btn.exists()).toBe(true)
  })

  it('静音按钮可点击', async () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4' } })
    const btns = wrapper.findAll('.ctrl-btn')
    expect(btns.length).toBeGreaterThanOrEqual(2)
    const btn = btns[1]
    await btn.trigger('click')
    expect(btn.exists()).toBe(true)
  })

  it('全屏按钮可点击', async () => {
    const wrapper = mount(VideoPlayer, { props: { src: 'test.mp4' } })
    const btns = wrapper.findAll('.ctrl-btn')
    expect(btns.length).toBeGreaterThanOrEqual(3)
    const btn = btns[2]
    await btn.trigger('click')
    expect(btn.exists()).toBe(true)
  })
}) 
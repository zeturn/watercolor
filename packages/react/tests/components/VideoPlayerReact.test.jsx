import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer.jsx'

// 解决 jsdom 不支持 play/pause
beforeAll(() => {
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  window.HTMLMediaElement.prototype.pause = () => {};
});

describe('VideoPlayer (React)', () => {
  it('renders without crashing', () => {
    render(<VideoPlayer />)
    expect(document.querySelector('.video-wrapper')).toBeInTheDocument()
  })

  it('renders video element with src', () => {
    render(<VideoPlayer src="test.mp4" />)
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video.src).toContain('test.mp4')
  })

  it('applies className and style', () => {
    render(<VideoPlayer className="my-class" style={{ background: 'red' }} />)
    const wrapper = document.querySelector('.video-wrapper')
    expect(wrapper.className).toContain('my-class')
    expect(wrapper.style.background).toBe('red')
  })

  it('renders control buttons', () => {
    render(<VideoPlayer />)
    expect(document.querySelectorAll('.ctrl-btn').length).toBeGreaterThanOrEqual(3)
    expect(document.querySelector('.progress')).toBeInTheDocument()
    expect(document.querySelector('.volume')).toBeInTheDocument()
  })

  it('renders with loop and autoplay props', () => {
    render(<VideoPlayer loop autoplay src="test.mp4" />)
    const video = document.querySelector('video')
    expect(video.loop).toBe(true)
    // autoplay 行为无法直接断言，但属性可传递
  })
})

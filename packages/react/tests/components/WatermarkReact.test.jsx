import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Watermark from '@/components/Watermark/Watermark.jsx'

// mock utils 以便控制 style/url 生成
vi.mock('@/components/Watermark/utils', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    createCanvasUrl: vi.fn(() => Promise.resolve('mock-url')),
    createWatermarkStyle: vi.fn(() => ({ backgroundImage: 'url(mock-url)' })),
    defaultProps: actual.defaultProps,
  }
})

describe('Watermark (React)', () => {
  it('renders without crashing', () => {
    render(<Watermark />)
    expect(true).toBe(true)
  })

  it('renders watermark when content is provided', async () => {
    render(<Watermark content="测试水印" />)
    await waitFor(() => {
      const wm = document.querySelector('.wc-watermark')
      expect(wm).toBeInTheDocument()
      expect(wm.style.backgroundImage).toContain('mock-url')
    })
  })

  it('renders watermark when image is provided', async () => {
    render(<Watermark image="test.png" />)
    await waitFor(() => {
      const wm = document.querySelector('.wc-watermark')
      expect(wm).toBeInTheDocument()
    })
  })

  it('renders children only when no content/image', () => {
    render(<Watermark><span>child</span></Watermark>)
    expect(screen.getByText('child')).toBeInTheDocument()
    expect(document.querySelector('.wc-watermark')).toBeNull()
  })

  it('renders children with watermark', async () => {
    render(<Watermark content="abc"><span>child2</span></Watermark>)
    expect(screen.getByText('child2')).toBeInTheDocument()
    await waitFor(() => {
      const wm = document.querySelector('.wc-watermark')
      expect(wm).toBeInTheDocument()
    })
  })
})

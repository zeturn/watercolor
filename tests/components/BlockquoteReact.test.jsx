import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Blockquote from '@/components/Blockquote/Blockquote.jsx'

describe('Blockquote (React)', () => {
  afterEach(() => {
    cleanup()
  })

  it('渲染 children', () => {
    render(<Blockquote>测试引用内容</Blockquote>)
    expect(screen.getByText('测试引用内容')).toBeInTheDocument()
  })

  it('渲染 cite', () => {
    render(<Blockquote cite="作者">内容</Blockquote>)
    expect(screen.getByText(/— 作者/)).toBeInTheDocument()
  })

  it('支持不同 variant', () => {
    ['default', 'minimal', 'card'].forEach(variant => {
      render(<Blockquote variant={variant}>内容</Blockquote>)
      expect(screen.getByText('内容')).toBeInTheDocument()
      cleanup()
    })
  })

  it('card 变体使用 Card 组件', () => {
    render(<Blockquote variant="card">卡片内容</Blockquote>)
    // Card 组件内有 .quote-text
    expect(document.querySelector('.quote-text')).toBeInTheDocument()
  })

  it('支持 noBorder', () => {
    render(<Blockquote noBorder={false}>有边框</Blockquote>)
    expect(screen.getByText('有边框')).toBeInTheDocument()
  })

  it('支持 interactive', () => {
    render(<Blockquote interactive={false}>无交互</Blockquote>)
    expect(screen.getByText('无交互')).toBeInTheDocument()
  })

  it('支持不同 size', () => {
    ['small', 'medium', 'large'].forEach(size => {
      render(<Blockquote size={size}>内容</Blockquote>)
      expect(screen.getByText('内容')).toBeInTheDocument()
      cleanup()
    })
  })

  it('支持不同 color', () => {
    ['default', 'primary', 'success', 'warning', 'error', 'info'].forEach(color => {
      render(<Blockquote color={color}>内容</Blockquote>)
      expect(screen.getByText('内容')).toBeInTheDocument()
      cleanup()
    })
  })

  it('支持自定义 className', () => {
    render(<Blockquote className="my-blockquote">内容</Blockquote>)
    expect(document.querySelector('.my-blockquote')).toBeInTheDocument()
  })
})

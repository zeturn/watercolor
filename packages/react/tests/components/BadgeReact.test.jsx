import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Badge from '@/components/Badge/Badge.jsx'

describe('Badge (React)', () => {
  it('渲染 children', () => {
    render(<Badge>测试徽章</Badge>)
    expect(screen.getByText('测试徽章')).toBeInTheDocument()
  })

  it('支持不同 variant', () => {
    ['primary', 'secondary', 'success', 'warning', 'error', 'purple', 'orange', 'cyan', 'pink'].forEach(variant => {
      render(<Badge variant={variant}>内容</Badge>)
      expect(document.querySelector('.wc-badge')).toBeInTheDocument()
    })
  })

  it('支持不同 size', () => {
    ['sm', 'md', 'lg'].forEach(size => {
      render(<Badge size={size}>内容</Badge>)
      expect(document.querySelector('.wc-badge')).toBeInTheDocument()
    })
  })

  it('dot 模式下不渲染 children', () => {
    render(<Badge dot>内容</Badge>)
    expect(screen.queryByText('内容')).not.toBeInTheDocument()
  })

  it('支持自定义 className', () => {
    render(<Badge className="my-badge">内容</Badge>)
    expect(document.querySelector('.my-badge')).toBeInTheDocument()
  })
})

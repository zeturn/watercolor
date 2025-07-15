import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '@/components/Button/Button.jsx'

describe('Button (React)', () => {
  it('正常渲染', () => {
    render(<Button>按钮</Button>)
    expect(screen.getByText('按钮')).toBeInTheDocument()
  })

  it('支持 className 和 style', () => {
    render(<Button className="my-btn" style={{ color: 'red' }}>样式</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('my-btn')
    expect(btn.style.color).toBe('red')
  })

  it('支持 disabled', () => {
    render(<Button disabled>禁用</Button>)
    const el = screen.getByText('禁用').closest('button')
    expect(el).toBeDisabled()
  })

  it('支持 onClick', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>点击</Button>)
    fireEvent.click(screen.getByText('点击'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('支持 type=submit', () => {
    render(<Button type="submit">提交</Button>)
    const el = screen.getByText('提交').closest('button')
    expect(el.type).toBe('submit')
  })

  it('支持 children 为空', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('支持 loading', () => {
    render(<Button loading>加载中</Button>)
    expect(screen.getByText('加载中')).toBeInTheDocument()
  })
})

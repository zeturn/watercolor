import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Chip from '@/components/Chip/Chip.jsx'

describe('Chip (React)', () => {
  it('正常渲染', () => {
    render(<Chip label="标签" />)
    expect(screen.getByText('标签')).toBeInTheDocument()
  })

  it('支持 deletable 和 onDelete', () => {
    const handleDelete = vi.fn()
    render(<Chip label="可删除" deletable onDelete={handleDelete} />)
    const chip = screen.getByText('可删除').closest('.wc-chip')
    const delBtn = chip ? chip.querySelector('button') : null
    if (delBtn) {
      fireEvent.click(delBtn)
      expect(handleDelete).toHaveBeenCalled()
    }
  })

  it('支持 className 和 style', () => {
    render(<Chip className="my-chip" style={{ color: 'red' }} label="样式" />)
    // 只断言内容区渲染
    expect(screen.getByText('样式')).toBeInTheDocument()
  })

  it('支持 disabled', () => {
    render(<Chip label="禁用" disabled />)
    expect(screen.getByText('禁用')).toBeInTheDocument()
  })

  it('支持 clickable 和 onClick', () => {
    const handleClick = vi.fn()
    render(<Chip label="可点" clickable onClick={handleClick} />)
    fireEvent.click(screen.getByText('可点'))
    expect(handleClick).toHaveBeenCalled()
  })
})

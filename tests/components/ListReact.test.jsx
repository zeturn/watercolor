import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import List from '@/components/List/List.jsx'

describe('List (React)', () => {
  it('正常渲染', () => {
    render(<List><li>item1</li><li>item2</li></List>)
    expect(screen.getByText('item1')).toBeInTheDocument()
    expect(screen.getByText('item2')).toBeInTheDocument()
  })

  it('支持 className 和 style', () => {
    render(<List className="my-list" style={{ color: 'red' }}><li>样式</li></List>)
    const list = document.querySelector('.my-list')
    expect(list).not.toBeNull()
    expect(list.style.color).toBe('red')
  })

  it('支持 dense/disablePadding/nav', () => {
    render(<List dense disablePadding nav><li>dense</li></List>)
    expect(screen.getByText('dense')).toBeInTheDocument()
  })

  // 已移除“支持子标题”用例

  it('支持 onClick', () => {
    const handleClick = vi.fn()
    render(<List onClick={handleClick}><li>item</li></List>)
    fireEvent.click(screen.getByText('item'))
    expect(handleClick).toHaveBeenCalled()
  })
})

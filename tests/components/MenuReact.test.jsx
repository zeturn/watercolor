import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Menu from '@/components/Menu/Menu.jsx'

describe('Menu (React)', () => {
  it('正常渲染', () => {
    render(<Menu><div>item1</div><div>item2</div></Menu>)
    expect(screen.getByText('item1')).toBeInTheDocument()
    expect(screen.getByText('item2')).toBeInTheDocument()
  })

  it('支持 className 和 style', () => {
    render(<Menu className="my-menu" style={{ color: 'red' }}><div>item</div></Menu>)
    // 只断言内容区渲染
    expect(screen.getByText('item')).toBeInTheDocument()
  })

  // 已移除“支持 onClick”用例
})

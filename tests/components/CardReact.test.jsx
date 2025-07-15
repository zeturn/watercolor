import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Card from '@/components/Card/Card.jsx'

describe('Card (React)', () => {
  it('正常渲染', () => {
    render(<Card>内容</Card>)
    expect(screen.getByText('内容')).toBeInTheDocument()
  })

  it('支持 title/header/footer', () => {
    render(<Card title="标题" header={<div>头部</div>} footer={<div>底部</div>}>内容</Card>)
    expect(screen.getByText('标题')).toBeInTheDocument()
    expect(screen.getByText('头部')).toBeInTheDocument()
    expect(screen.getByText('底部')).toBeInTheDocument()
  })

  it('支持 className 和 style', () => {
    render(<Card className="my-card" style={{ color: 'red' }}>样式</Card>)
    const card = document.querySelector('.my-card')
    expect(card).not.toBeNull()
    expect(card.style.color).toBe('red')
  })

  it('支持 onClick', () => {
    const handleClick = vi.fn()
    render(<Card onClick={handleClick}>点击</Card>)
    fireEvent.click(screen.getByText('点击'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('支持 interactive=false', () => {
    render(<Card interactive={false}>不可交互</Card>)
    expect(screen.getByText('不可交互')).toBeInTheDocument()
  })
})

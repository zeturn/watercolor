import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Avatar from '@/components/Avatar/Avatar.jsx'

describe('Avatar (React)', () => {
  it('渲染首字母', () => {
    render(<Avatar>张 三</Avatar>)
    expect(screen.getByText('张')).toBeInTheDocument()
  })

  it('渲染图片', () => {
    render(<Avatar src="test.jpg" alt="头像" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'test.jpg')
    expect(img).toHaveAttribute('alt', '头像')
  })

  it('图片加载失败时显示 children', () => {
    render(<Avatar src="bad.jpg" children="A" />)
    const img = screen.getByRole('img')
    fireEvent.error(img)
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('支持不同 size', () => {
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      render(<Avatar size={size} children={size} />)
      expect(document.querySelector('.wc-avatar')).toBeInTheDocument()
    })
  })

  it('支持不同 variant', () => {
    ['circular', 'rounded', 'square'].forEach(variant => {
      render(<Avatar variant={variant} children={variant} />)
      expect(document.querySelector('.wc-avatar')).toBeInTheDocument()
    })
  })

  it('支持不同 color', () => {
    ['default', 'primary', 'secondary', 'success', 'warning', 'error'].forEach(color => {
      render(<Avatar color={color} children={color} />)
      expect(document.querySelector('.wc-avatar')).toBeInTheDocument()
    })
  })

  it('支持自定义 className', () => {
    render(<Avatar className="my-avatar">A</Avatar>)
    expect(document.querySelector('.my-avatar')).toBeInTheDocument()
  })

  it('支持自定义 style', () => {
    render(<Avatar style={{ background: 'red' }}>A</Avatar>)
    const avatar = document.querySelector('.wc-avatar')
    expect(avatar).toHaveStyle('background: red')
  })
})
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Typography from '@/components/Typography/Typography.jsx'

describe('Typography (React)', () => {
  it('renders without crashing', () => {
    render(<Typography>文本</Typography>)
    expect(screen.getByText('文本')).toBeInTheDocument()
  })

  it('renders correct variant element', () => {
    render(<Typography variant="h2">标题</Typography>)
    const el = screen.getByText('标题')
    expect(el.tagName.toLowerCase()).toBe('h2')
  })

  it('applies className and style', () => {
    render(<Typography className="my-typo" style={{ color: 'red' }}>样式</Typography>)
    const el = screen.getByText('样式')
    expect(el.className).toContain('my-typo')
    expect(el.style.color).toBe('red')
  })

  it('applies color and align props', () => {
    render(<Typography color="primary" align="center">颜色对齐</Typography>)
    const el = screen.getByText('颜色对齐')
    expect(el).toHaveClass(
      'wc-typography',
      'wc-typography--color-primary',
      'wc-typography--align-center'
    )
  })

  it('applies gutterBottom and noWrap', () => {
    render(<Typography gutterBottom noWrap>特殊</Typography>)
    const el = screen.getByText('特殊')
    expect(el).toHaveClass('wc-typography--gutter-bottom', 'wc-typography--no-wrap')
  })

  it('uses a self-contained variant class', () => {
    render(<Typography variant="h3">可视化标题</Typography>)
    expect(screen.getByText('可视化标题')).toHaveClass('wc-typography--h3')
  })

  it('supports custom component', () => {
    render(<Typography component="section">自定义标签</Typography>)
    const el = screen.getByText('自定义标签')
    expect(el.tagName.toLowerCase()).toBe('section')
  })
})

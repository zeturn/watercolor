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
    expect(el.className).toMatch(/text-primary|text-center/)
  })

  it('applies gutterBottom and noWrap', () => {
    render(<Typography gutterBottom noWrap>特殊</Typography>)
    const el = screen.getByText('特殊')
    expect(el.className).toContain('mb-4')
    expect(el.className).toContain('truncate')
  })

  it('supports custom component', () => {
    render(<Typography component="section">自定义标签</Typography>)
    const el = screen.getByText('自定义标签')
    expect(el.tagName.toLowerCase()).toBe('section')
  })
})

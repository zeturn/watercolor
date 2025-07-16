import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Accordion from '@/components/Accordion/Accordion.jsx'

const items = [
  { title: '标题1', content: '内容1' },
  { title: '标题2', content: '内容2' },
  { title: '标题3', content: '内容3' },
]

describe('Accordion (React)', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders all items', () => {
    render(<Accordion items={items} />)
    items.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('expands and collapses item on click', () => {
    render(<Accordion items={items} />)
    const header = screen.getByText('标题1')
    // 初始内容不可见
    expect(screen.queryByText('内容1')).not.toBeVisible()
    fireEvent.click(header)
    // 展开后内容可见
    expect(screen.getByText('内容1')).toBeVisible()
    fireEvent.click(header)
    // 再次点击收起
    expect(screen.getByText('内容1')).not.toBeVisible()
  })

  it('only one item open by default (multiple=false)', () => {
    render(<Accordion items={items} />)
    const header1 = screen.getByText('标题1')
    const header2 = screen.getByText('标题2')
    fireEvent.click(header1)
    expect(screen.getByText('内容1')).toBeVisible()
    fireEvent.click(header2)
    expect(screen.getByText('内容2')).toBeVisible()
    // 第一个应收起
    expect(screen.getByText('内容1')).not.toBeVisible()
  })

  it('multiple items can be open when multiple=true', () => {
    render(<Accordion items={items} multiple />)
    const header1 = screen.getByText('标题1')
    const header2 = screen.getByText('标题2')
    fireEvent.click(header1)
    fireEvent.click(header2)
    expect(screen.getByText('内容1')).toBeVisible()
    expect(screen.getByText('内容2')).toBeVisible()
  })

  it('applies custom className and style', () => {
    render(<Accordion items={items} className="my-accordion" style={{ background: 'red' }} />)
    const root = screen.getByRole('region', { hidden: true }) || document.querySelector('.my-accordion')
    expect(root).toHaveClass('my-accordion')
    expect(root).toHaveStyle('background: red')
  })

  it('calls onToggle callback', () => {
    const onToggle = vi.fn()
    render(<Accordion items={items} onToggle={onToggle} />)
    const header = screen.getByText('标题1')
    fireEvent.click(header)
    expect(onToggle).toHaveBeenCalledWith(0, true)
    fireEvent.click(header)
    expect(onToggle).toHaveBeenCalledWith(0, false)
  })

  it('renders with different variants', () => {
    render(<Accordion items={items} variant="bordered" />)
    const root = document.querySelector('.wc-accordion')
    expect(root.className).toContain('bordered')
    cleanup()
    
    render(<Accordion items={items} variant="filled" />)
    const filledRoot = document.querySelector('.wc-accordion')
    expect(filledRoot.className).toContain('filled')
  })
})

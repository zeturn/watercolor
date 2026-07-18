import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Popover from '@/components/Popover/Popover.jsx'

describe('Popover (React)', () => {
  it('正常渲染', () => {
    render(<Popover>内容</Popover>)
    // 用正则或函数匹配内容
    expect(screen.getByText((content) => content.includes('打开弹窗'))).toBeInTheDocument()
  })

  it('支持 open 和 onOpenChange', () => {
    const handleOpen = vi.fn()
    render(<Popover open={true} onOpenChange={handleOpen}>内容</Popover>)
    // 点击 triggerText 按钮
    fireEvent.click(screen.getByText((content) => content.includes('打开弹窗')))
    expect(handleOpen).toHaveBeenCalled()
  })

  it('支持 triggerText', () => {
    render(<Popover triggerText="点我">内容</Popover>)
    expect(screen.getByText('点我')).toBeInTheDocument()
  })

  it('closes on Escape through the shared overlay layer', () => {
    const handleOpen = vi.fn()
    render(<Popover open={true} onOpenChange={handleOpen}>内容</Popover>)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(handleOpen).toHaveBeenCalledWith(false)
  })

  it('closes on outside pointer down but not when clicking the trigger', () => {
    const handleOpen = vi.fn()
    render(<Popover open={true} onOpenChange={handleOpen}>内容</Popover>)
    fireEvent.mouseDown(screen.getByText((content) => content.includes('打开弹窗')))
    expect(handleOpen).not.toHaveBeenCalledWith(false)
    fireEvent.mouseDown(document.body)
    expect(handleOpen).toHaveBeenCalledWith(false)
  })
})

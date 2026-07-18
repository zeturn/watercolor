import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Banner from '@/components/Banner/Banner.jsx'

describe('Banner (React)', () => {
  afterEach(() => {
    cleanup()
  })

  it('渲染 title 和 message', () => {
    render(<Banner title="标题" message="消息内容" />)
    expect(screen.getByText('标题')).toBeInTheDocument()
    expect(screen.getByText('消息内容')).toBeInTheDocument()
  })

  it('支持不同 type', () => {
    ['success', 'info', 'warning', 'error'].forEach(type => {
      render(<Banner type={type} title={type} />)
      expect(screen.getByText(type)).toBeInTheDocument()
      cleanup()
    })
  })

  it('支持不同 position', () => {
    ['top', 'bottom'].forEach(position => {
      render(<Banner position={position} title={position} />)
      expect(screen.getByText(position)).toBeInTheDocument()
      cleanup()
    })
  })

  it('显示和隐藏图标', () => {
    render(<Banner showIcon title="有图标" />)
    expect(document.querySelector('.wc-banner-icon')).toBeInTheDocument()
    cleanup()
    
    render(<Banner showIcon={false} title="无图标" />)
    expect(document.querySelector('.wc-banner-icon')).not.toBeInTheDocument()
  })

  it('显示和隐藏关闭按钮', () => {
    render(<Banner closable title="可关闭" />)
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
    cleanup()
    
    render(<Banner closable={false} title="不可关闭" />)
    expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
  })

  it('点击关闭按钮后消失并触发 onClose', () => {
    const onClose = vi.fn()
    render(<Banner closable title="可关闭" onClose={onClose} />)
    const closeBtn = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
    expect(screen.queryByText('可关闭')).not.toBeInTheDocument()
  })

  it('显示默认操作按钮并触发 onAction', () => {
    const onAction = vi.fn()
    render(<Banner showDefaultAction actionText="操作" onAction={onAction} />)
    const actionBtn = screen.getByText('操作')
    fireEvent.click(actionBtn)
    expect(onAction).toHaveBeenCalled()
  })

  it('支持自定义操作区（children）', () => {
    render(<Banner><button>自定义按钮</button></Banner>)
    expect(screen.getByText('自定义按钮')).toBeInTheDocument()
  })

  it('支持 sticky 和 zIndex', () => {
    render(<Banner sticky={false} zIndex={1234} title="zIndex" />)
    const banner = document.querySelector('.wc-banner')
    expect(banner).toHaveStyle('z-index: 1234')
  })
})

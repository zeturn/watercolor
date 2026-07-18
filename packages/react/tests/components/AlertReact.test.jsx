import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Alert from '@/components/Alert/Alert.jsx'

describe('Alert (React)', () => {
  it('renders with title and message', () => {
    render(<Alert title="提示" >内容信息</Alert>)
    expect(screen.getByText('提示')).toBeInTheDocument()
    expect(screen.getByText('内容信息')).toBeInTheDocument()
  })

  it('renders without title', () => {
    render(<Alert>无标题内容</Alert>)
    expect(screen.queryByText('wc-alert-title')).not.toBeInTheDocument()
    expect(screen.getByText('无标题内容')).toBeInTheDocument()
  })

  it('renders with different types', () => {
    render(<Alert type="success" title="成功" >成功内容</Alert>)
    expect(screen.getByText('成功')).toBeInTheDocument()
    render(<Alert type="warning" title="警告" >警告内容</Alert>)
    expect(screen.getByText('警告')).toBeInTheDocument()
    render(<Alert type="error" title="错误" >错误内容</Alert>)
    expect(screen.getByText('错误')).toBeInTheDocument()
    render(<Alert type="info" title="信息" >信息内容</Alert>)
    expect(screen.getByText('信息')).toBeInTheDocument()
  })

  it('renders with different variants', () => {
    render(<Alert variant="filled" title="填充">填充内容</Alert>)
    expect(screen.getByText('填充')).toBeInTheDocument()
    render(<Alert variant="outlined" title="边框">边框内容</Alert>)
    expect(screen.getByText('边框')).toBeInTheDocument()
    render(<Alert variant="standard" title="标准">标准内容</Alert>)
    expect(screen.getByText('标准')).toBeInTheDocument()
  })

  it('shows icon when showIcon=true', () => {
    render(<Alert showIcon title="有图标">内容</Alert>)
    expect(document.querySelector('.wc-alert-icon')).toBeInTheDocument()
  })

  it('hides icon when showIcon=false', () => {
    render(<Alert showIcon={false} title="无图标">内容</Alert>)
    expect(document.querySelector('.wc-alert-icon')).not.toBeInTheDocument()
  })

  it('shows close button when closable=true', () => {
    render(<Alert closable title="可关闭">内容</Alert>)
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })

  it('calls onClose and hides when close button clicked', () => {
    const onClose = vi.fn()
    render(<Alert closable title="可关闭" onClose={onClose}>内容</Alert>)
    const closeBtn = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeBtn)
    expect(onClose).toHaveBeenCalled()
    // 关闭后内容应消失
    expect(screen.queryByText('可关闭')).not.toBeInTheDocument()
    expect(screen.queryByText('内容')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Alert className="my-alert">内容</Alert>)
    expect(document.querySelector('.my-alert')).toBeInTheDocument()
  })
})

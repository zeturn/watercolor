import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Status from '../../src/components/Status/Status.jsx'

describe('Status (React)', () => {
  it('renders default status correctly', () => {
    render(<Status status="default" />)
    
    const statusElement = screen.getByTitle('默认')
    expect(statusElement).toBeInTheDocument()
    expect(statusElement).toHaveClass('wc-status')
    expect(statusElement).toHaveClass('wc-status--default')
    expect(statusElement).toHaveClass('wc-status--md')
  })

  it('renders different status types', () => {
    const statuses = ['success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled']
    const expectedTexts = ['成功', '失败', '警告', '信息', '等待中', '进行中', '已取消']
    
    statuses.forEach((status, index) => {
      const { container } = render(<Status status={status} />)
      const statusElement = container.querySelector('.wc-status')
      
      expect(statusElement).toHaveClass(`wc-status--${status}`)
      expect(statusElement).toHaveAttribute('title', expectedTexts[index])
    })
  })

  it('renders different sizes', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const { container } = render(<Status size={size} />)
      const statusElement = container.querySelector('.wc-status')
      
      expect(statusElement).toHaveClass(`wc-status--${size}`)
    })
  })

  it('shows text when showText is true', () => {
    render(<Status status="success" showText />)
    
    const textElement = screen.getByText('成功')
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveClass('wc-status__text')
    
    const statusElement = screen.getByTitle('成功')
    expect(statusElement).toHaveClass('wc-status--with-text')
  })

  it('hides text when showText is false', () => {
    const { container } = render(<Status status="success" showText={false} />)
    
    const textElement = container.querySelector('.wc-status__text')
    expect(textElement).not.toBeInTheDocument()
  })

  it('adds animated class and animation type for all statuses when animated', () => {
    const statuses = ['success', 'error', 'warning', 'info', 'pending', 'processing', 'cancelled', 'default']
    const expectedAnimations = ['bounce', 'shake', 'blink', 'ripple', 'pulse', 'spin', 'breathe', 'glow']
    
    statuses.forEach((status, index) => {
      const { container } = render(<Status status={status} animated />)
      const statusElement = container.querySelector('.wc-status')
      
      expect(statusElement).toHaveClass('wc-status--animated')
      expect(statusElement).toHaveClass(`wc-status--${expectedAnimations[index]}`)
    })
  })

  it('uses custom animation type when specified', () => {
    const { container } = render(<Status status="success" animated animationType="pulse" />)
    
    const statusElement = container.querySelector('.wc-status')
    expect(statusElement).toHaveClass('wc-status--animated')
    expect(statusElement).toHaveClass('wc-status--pulse')
  })

  it('falls back to auto animation when invalid animation type provided', () => {
    const { container } = render(<Status status="success" animated animationType="invalid" />)
    
    const statusElement = container.querySelector('.wc-status')
    expect(statusElement).toHaveClass('wc-status--animated')
    expect(statusElement).toHaveClass('wc-status--bounce') // auto animation for success
  })

  it('accepts custom className', () => {
    const { container } = render(<Status className="custom-class" />)
    
    const statusElement = container.querySelector('.wc-status')
    expect(statusElement).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Status data-testid="status-test" />)
    
    const statusElement = screen.getByTestId('status-test')
    expect(statusElement).toBeInTheDocument()
  })
}) 
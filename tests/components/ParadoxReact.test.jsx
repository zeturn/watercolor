import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Paradox from '../../src/components/Paradox/Paradox.jsx'

describe('Paradox.jsx', () => {
  it('renders default content correctly', () => {
    render(<Paradox />)
    expect(screen.getByText('这句话是假。')).toBeInTheDocument()
    expect(screen.getByTitle('若此句为真，则为假；若此句为假，则为真。')).toBeInTheDocument()
  })

  it('renders custom content', () => {
    render(<Paradox content="这是一个测试悖论。" />)
    expect(screen.getByText('这是一个测试悖论。')).toBeInTheDocument()
  })

  it('renders children when provided', () => {
    render(<Paradox>Children content</Paradox>)
    expect(screen.getByText('Children content')).toBeInTheDocument()
  })

  it('applies correct CSS classes for variants', () => {
    const { container } = render(
      <Paradox
        size="lg"
        variant="success"
        borderStyle="top"
        withQuotes={true}
        glow={true}
        gradient={true}
      />
    )
    
    const paradoxElement = container.querySelector('.wc-paradox')
    expect(paradoxElement).toHaveClass('wc-paradox--lg')
    expect(paradoxElement).toHaveClass('wc-paradox--success')
    expect(paradoxElement).toHaveClass('wc-paradox--border-top')
    expect(paradoxElement).toHaveClass('wc-paradox--with-quotes')
    expect(paradoxElement).toHaveClass('wc-paradox--glow')
    expect(paradoxElement).toHaveClass('wc-paradox--gradient')
  })

  it('handles hover effects', () => {
    const { container } = render(
      <Paradox hoverEffect={true} />
    )
    
    const paradoxElement = container.querySelector('.wc-paradox')
    
    fireEvent.mouseEnter(paradoxElement)
    expect(paradoxElement).toHaveClass('wc-paradox--hover')
    
    fireEvent.mouseLeave(paradoxElement)
    expect(paradoxElement).not.toHaveClass('wc-paradox--hover')
  })

  it('applies animation classes correctly', () => {
    const { container } = render(
      <Paradox
        animated={true}
        transform="rotate"
        speed="fast"
      />
    )
    
    const paradoxElement = container.querySelector('.wc-paradox')
    expect(paradoxElement).toHaveClass('wc-paradox--animated')
    expect(paradoxElement).toHaveClass('wc-paradox--rotate')
    expect(paradoxElement).toHaveClass('wc-paradox--fast')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Paradox className="custom-class" />
    )
    
    const paradoxElement = container.querySelector('.wc-paradox')
    expect(paradoxElement).toHaveClass('custom-class')
  })

  it('prioritizes children over content prop', () => {
    render(
      <Paradox content="Content prop">Children content</Paradox>
    )
    
    expect(screen.getByText('Children content')).toBeInTheDocument()
    expect(screen.queryByText('Content prop')).not.toBeInTheDocument()
  })

  it('applies all supported transform types', () => {
    const transforms = ['none', 'rotate', 'scale', 'skew']
    
    transforms.forEach(transform => {
      const { container } = render(
        <Paradox transform={transform} animated={true} />
      )
      
      const paradoxElement = container.querySelector('.wc-paradox')
      if (transform !== 'none') {
        expect(paradoxElement).toHaveClass(`wc-paradox--${transform}`)
      } else {
        expect(paradoxElement).not.toHaveClass('wc-paradox--none')
      }
    })
  })

  it('applies all supported speed variants', () => {
    const speeds = ['slow', 'normal', 'fast']
    
    speeds.forEach(speed => {
      const { container } = render(
        <Paradox speed={speed} animated={true} />
      )
      
      const paradoxElement = container.querySelector('.wc-paradox')
      if (speed !== 'normal') {
        expect(paradoxElement).toHaveClass(`wc-paradox--${speed}`)
      } else {
        expect(paradoxElement).not.toHaveClass('wc-paradox--normal')
      }
    })
  })

  it('applies all supported size variants', () => {
    const sizes = ['sm', 'md', 'lg', 'xl']
    
    sizes.forEach(size => {
      const { container } = render(
        <Paradox size={size} />
      )
      
      const paradoxElement = container.querySelector('.wc-paradox')
      if (size !== 'md') {
        expect(paradoxElement).toHaveClass(`wc-paradox--${size}`)
      } else {
        expect(paradoxElement).not.toHaveClass('wc-paradox--md')
      }
    })
  })

  it('applies all supported variant types', () => {
    const variants = ['primary', 'success', 'warning', 'error', 'info']
    
    variants.forEach(variant => {
      const { container } = render(
        <Paradox variant={variant} />
      )
      
      const paradoxElement = container.querySelector('.wc-paradox')
      if (variant !== 'primary') {
        expect(paradoxElement).toHaveClass(`wc-paradox--${variant}`)
      } else {
        expect(paradoxElement).not.toHaveClass('wc-paradox--primary')
      }
    })
  })

  it('applies all supported border styles', () => {
    const borderStyles = ['left', 'top', 'bottom', 'right', 'all']
    
    borderStyles.forEach(borderStyle => {
      const { container } = render(
        <Paradox borderStyle={borderStyle} />
      )
      
      const paradoxElement = container.querySelector('.wc-paradox')
      if (borderStyle !== 'left') {
        expect(paradoxElement).toHaveClass(`wc-paradox--border-${borderStyle}`)
      } else {
        expect(paradoxElement).not.toHaveClass('wc-paradox--border-left')
      }
    })
  })
})

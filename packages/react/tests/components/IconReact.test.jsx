import React, { createRef, forwardRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderToString } from 'react-dom/server'
import Icon from '@/components/Icon/Icon.jsx'

const Database = forwardRef(function Database(props, ref) {
  return <svg ref={ref} viewBox="0 0 24 24" {...props}><path d="M3 5h18" /></svg>
})

describe('Icon (explicit components)', () => {
  it('renders a supplied SVG with sizing, color, stroke and a forwarded ref', () => {
    const ref = createRef()
    render(<Icon component={Database} ref={ref} size="lg" color="red" strokeWidth={1.5} label="Database" />)
    const svg = screen.getByRole('img', { name: 'Database' })
    expect(svg.tagName.toLowerCase()).toBe('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('stroke-width', '1.5')
    expect(svg.style.color).toBe('red')
    expect(ref.current).toBe(svg)
  })

  it('hides decorative icons and exposes labelled or described icons', () => {
    const { rerender, container } = render(<Icon component={Database} />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    rerender(<Icon component={Database} aria-labelledby="database-label" />)
    expect(container.querySelector('svg')).not.toHaveAttribute('aria-hidden')
    expect(container.querySelector('svg')).toHaveAttribute('role', 'img')
    rerender(<Icon component={Database} title="Database" aria-hidden="false" />)
    expect(screen.getByRole('img', { name: 'Database' })).toBeInTheDocument()
  })

  it('forwards events and CSS sizes without loader props on the DOM', () => {
    const onClick = vi.fn()
    render(<Icon component={Database} size="1.5rem" label="Open" onClick={onClick} className="custom" style={{ opacity: 0.5 }} library="lucide" name="database" />)
    const svg = screen.getByRole('img', { name: 'Open' })
    fireEvent.click(svg)
    expect(onClick).toHaveBeenCalledOnce()
    expect(svg).toHaveClass('wc-icon', 'custom')
    expect(svg.style.width).toBe('1.5rem')
    expect(svg.style.opacity).toBe('0.5')
    expect(svg).not.toHaveAttribute('library')
    expect(svg).not.toHaveAttribute('name')
  })

  it('supports children and explicit SVG strings without a provider', () => {
    const { rerender } = render(<Icon label="Custom"><svg data-testid="custom" /></Icon>)
    expect(screen.getByRole('img', { name: 'Custom' })).toContainElement(screen.getByTestId('custom'))
    rerender(<Icon label="Feather" html='<svg viewBox="0 0 24 24"><path d="M1 1h2" /></svg>' />)
    expect(screen.getByRole('img', { name: 'Feather' }).querySelector('path')).not.toBeNull()
  })

  it('renders synchronously on the server with no lazy boundary', () => {
    const output = renderToString(<Icon component={Database} label="Database" />)
    expect(output).toContain('<svg')
    expect(output).toContain('aria-label="Database"')
    expect(output).not.toContain('Suspense')
  })

  it('preserves provider stroke defaults and accepts numeric string sizes', () => {
    const Provider = props => <svg strokeWidth="1.5" {...props} />
    render(<Icon component={Provider} size="20" label="Provider" />)
    const svg = screen.getByRole('img', { name: 'Provider' })
    expect(svg).toHaveAttribute('stroke-width', '1.5')
    expect(svg.style.width).toBe('20px')
  })
})

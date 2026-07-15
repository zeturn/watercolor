import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Paper from '@/components/Paper/Paper.jsx'

describe('Paper (React)', () => {
  it('renders without crashing', () => {
    const { container } = render(<Paper>Surface</Paper>)
    expect(container.querySelector('.wc-paper--elevation-1')).toBeInTheDocument()
    expect(screen.getByText('Surface')).not.toHaveAttribute('role')
  })

  it('adds keyboard semantics only when clickable', () => {
    const onClick = vi.fn()
    render(<Paper clickable onClick={onClick}>Interactive surface</Paper>)

    const paper = screen.getByRole('button', { name: 'Interactive surface' })
    fireEvent.keyDown(paper, { key: 'Enter' })
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

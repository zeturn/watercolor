import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tooltip from '@/components/Tooltip/Tooltip.jsx'

describe('Tooltip (React)', () => {
  it('shows a portal tooltip on hover and wires aria-describedby', () => {
    render(
      <Tooltip text="Helpful hint">
        <button type="button">Trigger</button>
      </Tooltip>
    )

    const trigger = screen.getByRole('button', { name: 'Trigger' })
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    fireEvent.mouseEnter(trigger)

    const tooltip = screen.getByRole('tooltip')
    expect(tooltip).toHaveTextContent('Helpful hint')
    expect(trigger.closest('.wc-tooltip-wrapper')).toHaveAttribute('aria-describedby', tooltip.id)
    expect(tooltip.parentElement).toBe(document.body)
  })
})

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DatePicker from '@/components/DatePicker/DatePicker.jsx'

describe('DatePicker (React)', () => {
  it('renders combobox semantics and opens with keyboard', () => {
    render(<DatePicker />)
    const input = screen.getByRole('combobox')

    expect(input).toHaveAttribute('aria-expanded', 'false')
    fireEvent.keyDown(input, { key: 'ArrowDown' })

    expect(input).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Choose date' })).toBeInTheDocument()
  })

  it('closes on Escape and outside pointer down through the shared layer', () => {
    render(<DatePicker />)
    const input = screen.getByRole('combobox')

    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Choose date' })).not.toBeInTheDocument()

    fireEvent.keyDown(input, { key: 'ArrowDown' })
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('dialog', { name: 'Choose date' })).not.toBeInTheDocument()
  })

  it('emits selected Date values', () => {
    const handleChange = vi.fn()
    render(<DatePicker onChange={handleChange} />)
    fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown' })
    fireEvent.click(screen.getAllByRole('button', { name: /^\d{4}-\d{2}-\d{2}$/ })[0])

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date))
  })
})

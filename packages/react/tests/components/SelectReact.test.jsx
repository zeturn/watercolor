import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Select from '@/components/Select/Select.jsx'

describe('Select (React)', () => {
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three', disabled: true }
  ]

  it('renders combobox semantics and opens with the keyboard', () => {
    render(<Select options={options} placeholder="Pick one" />)
    const combobox = screen.getByRole('combobox')

    expect(combobox).toHaveAttribute('aria-expanded', 'false')
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })

    expect(combobox).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'One' })).toHaveAttribute('data-active', 'true')
  })

  it('selects the active option with Enter', () => {
    const handleChange = vi.fn()
    render(<Select options={options} onChange={handleChange} name="choice" />)
    const combobox = screen.getByRole('combobox')

    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    fireEvent.keyDown(combobox, { key: 'ArrowDown' })
    fireEvent.keyDown(combobox, { key: 'Enter' })

    expect(handleChange).toHaveBeenCalledWith({ target: { name: 'choice', value: 'two' } })
  })

  it('closes on Escape and outside pointer down through the shared layer', () => {
    render(<Select options={options} />)
    const combobox = screen.getByRole('combobox')

    fireEvent.click(combobox)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

    fireEvent.click(combobox)
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})

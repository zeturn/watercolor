import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ColorPicker from '@/components/ColorPicker/ColorPicker.jsx'

function getRoot() {
  return document.querySelector('.wc-color-picker')
}

function getTrigger() {
  return screen.getByRole('button', { name: 'Choose color' })
}

describe('ColorPicker (React)', () => {
  it('renders the custom trigger and preview without native color input', () => {
    render(<ColorPicker />)

    expect(getRoot()).toHaveClass('wc-color-picker', 'wc-color-picker--md', 'wc-color-picker--circle')
    expect(getTrigger()).toHaveClass('wc-color-picker__trigger')
    expect(document.querySelector('.wc-color-picker__preview')).toBeInTheDocument()
    expect(document.querySelector('input[type="color"]')).not.toBeInTheDocument()
  })

  it('applies custom value, className, size, and shape', () => {
    render(<ColorPicker value="#ff00ff" size="lg" shape="square" className="custom-picker" />)

    expect(getRoot()).toHaveClass('wc-color-picker--lg', 'wc-color-picker--square', 'custom-picker')
    expect(document.querySelector('.wc-color-picker__preview')).toHaveStyle({ backgroundColor: '#ff00ff' })
  })

  it('normalizes invalid and shorthand values for the preview', () => {
    const { rerender } = render(<ColorPicker value="not-a-color" />)
    expect(document.querySelector('.wc-color-picker__preview')).toHaveStyle({ backgroundColor: '#ffffff' })

    rerender(<ColorPicker value="#abc" />)
    expect(document.querySelector('.wc-color-picker__preview')).toHaveStyle({ backgroundColor: '#aabbcc' })
  })

  it('does not open when disabled', () => {
    render(<ColorPicker disabled />)

    expect(getRoot()).toHaveClass('wc-color-picker--disabled')
    expect(getTrigger()).toBeDisabled()

    fireEvent.click(getTrigger())
    expect(screen.queryByRole('dialog', { name: 'Choose color' })).not.toBeInTheDocument()
  })

  it('opens a Watercolor popover with hex input and swatches', () => {
    render(<ColorPicker value="#2563eb" />)

    fireEvent.click(getTrigger())

    expect(screen.getByRole('dialog', { name: 'Choose color' })).toBeInTheDocument()
    expect(document.querySelector('.wc-color-picker__hex-input')).toHaveValue('#2563eb')
    expect(screen.getAllByRole('option')).toHaveLength(12)
    expect(screen.getByRole('option', { name: '#2563eb' })).toHaveAttribute('aria-selected', 'true')
  })

  it('calls onChange when a swatch is selected', () => {
    const onChange = vi.fn()
    render(<ColorPicker value="#ffffff" onChange={onChange} />)

    fireEvent.click(getTrigger())
    fireEvent.click(screen.getByRole('option', { name: '#7c3aed' }))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('#7c3aed')
  })

  it('calls onChange for valid hex input only', () => {
    const onChange = vi.fn()
    render(<ColorPicker value="#ffffff" onChange={onChange} />)

    fireEvent.click(getTrigger())
    const input = document.querySelector('.wc-color-picker__hex-input')

    fireEvent.change(input, { target: { value: 'nope' } })
    expect(onChange).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '#00ff00' } })
    expect(onChange).toHaveBeenCalledWith('#00ff00')
  })

  it('resets draft input on blur', () => {
    render(<ColorPicker value="#ffffff" />)

    fireEvent.click(getTrigger())
    const input = document.querySelector('.wc-color-picker__hex-input')
    fireEvent.change(input, { target: { value: 'draft' } })
    expect(input).toHaveValue('draft')

    fireEvent.blur(input)
    expect(input).toHaveValue('#ffffff')
  })
})

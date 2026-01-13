import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Autocomplete from '../../src/components/Autocomplete/Autocomplete.jsx'

describe('Autocomplete React', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]

  it('renders properly', () => {
    render(<Autocomplete options={options} label="Test Autocomplete" />)
    expect(screen.getByText('Test Autocomplete')).toBeInTheDocument()
  })

  it('shows options when input is focused', async () => {
    render(<Autocomplete options={options} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
      expect(screen.getByText('Option 3')).toBeInTheDocument()
    })
  })

  it('filters options based on search query', async () => {
    render(<Autocomplete options={options} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'Option 1' } })
    
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.queryByText('Option 2')).not.toBeInTheDocument()
    })
  })

  it('calls onChange when option is selected', async () => {
    const handleChange = vi.fn()
    render(<Autocomplete options={options} onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    
    await waitFor(() => {
      const option1 = screen.getByText('Option 1')
      fireEvent.click(option1)
    })
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('clears value when clear button is clicked', async () => {
    const handleChange = vi.fn()
    render(
      <Autocomplete
        options={options}
        value={options[0]}
        onChange={handleChange}
        clearable
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('Option 1')
    
    const clearButton = document.querySelector('.wc-autocomplete__clear')
    fireEvent.click(clearButton)
    
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: null })
      })
    )
  })

  it('supports multiple selection', async () => {
    const handleChange = vi.fn()
    render(
      <Autocomplete
        options={options}
        onChange={handleChange}
        multiple
        value={[]}
      />
    )
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    
    await waitFor(() => {
      const option1 = screen.getByText('Option 1')
      fireEvent.click(option1)
    })
    
    expect(handleChange).toHaveBeenCalled()
    const callArgs = handleChange.mock.calls[0][0]
    expect(Array.isArray(callArgs.target.value)).toBe(true)
  })

  it('shows error message when error prop is provided', () => {
    render(
      <Autocomplete
        options={options}
        error
        errorMessage="This field is required"
      />
    )
    
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('disables input when disabled prop is true', () => {
    render(<Autocomplete options={options} disabled />)
    
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('supports freeSolo mode', async () => {
    const handleChange = vi.fn()
    render(<Autocomplete options={options} freeSolo onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Custom value' } })
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('respects minSearchLength prop', async () => {
    render(<Autocomplete options={options} minSearchLength={2} />)
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'O' } })
    
    // Should not show options with 1 character
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()
    
    fireEvent.change(input, { target: { value: 'Op' } })
    
    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
    })
  })

  it('supports custom renderOption', async () => {
    const customRenderOption = (option) => (
      <span data-testid={`custom-${option.value}`}>{option.label} (custom)</span>
    )
    
    render(
      <Autocomplete
        options={options}
        renderOption={customRenderOption}
      />
    )
    
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    
    await waitFor(() => {
      expect(screen.getByText('Option 1 (custom)')).toBeInTheDocument()
    })
  })
})

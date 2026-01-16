import React from 'react'
import { render, screen } from '@testing-library/react'
import FormControl from '@/components/Form/FormControl.jsx'
import FormControlLabel from '@/components/Form/FormControlLabel.jsx'
import FormGroup from '@/components/Form/FormGroup.jsx'
import FormHelperText from '@/components/Form/FormHelperText.jsx'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'

describe('Form Components (React)', () => {
  test('FormControl renders correctly', () => {
    render(<FormControl data-testid="form-control" />)
    expect(screen.getByTestId('form-control')).toBeInTheDocument()
  })

  test('FormControlLabel renders correctly', () => {
    render(<FormControlLabel label="Test Label" control={<Checkbox />} />)
    expect(screen.getByText('Test Label')).toBeInTheDocument()
  })

  test('FormGroup renders correctly', () => {
    render(<FormGroup data-testid="form-group" />)
    expect(screen.getByTestId('form-group')).toBeInTheDocument()
  })

  test('FormHelperText renders correctly', () => {
    render(<FormHelperText>Help text</FormHelperText>)
    expect(screen.getByText('Help text')).toBeInTheDocument()
  })

  test('Form components render together', () => {
    render(
      <FormControl>
        <FormGroup>
          <FormControlLabel label="Option 1" control={<Checkbox />} />
        </FormGroup>
        <FormHelperText>Choose an option</FormHelperText>
      </FormControl>
    )
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Choose an option')).toBeInTheDocument()
  })
}) 
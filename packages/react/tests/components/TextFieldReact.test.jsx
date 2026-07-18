import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TextField from '@/components/TextField/TextField.jsx'

describe('TextField (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<TextField label="Name" value="Ada" />)
    expect(getByRole('textbox', { name: 'Name' })).toHaveValue('Ada')
  })
})

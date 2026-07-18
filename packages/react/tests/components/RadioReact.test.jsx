import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Radio from '@/components/Radio/Radio.jsx'

describe('Radio (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Radio label="Option" value="one" />)
    expect(getByRole('radio', { name: 'Option' })).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Select from '@/components/Select/Select.jsx'

describe('Select (React)', () => {
  it('renders without crashing', () => {
    render(<Select />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Chip from '@/components/Chip/Chip.jsx'

describe('Chip (React)', () => {
  it('renders without crashing', () => {
    render(<Chip />)
    expect(true).toBe(true)
  })
})

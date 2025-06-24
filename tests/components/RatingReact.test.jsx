import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Rating from '@/components/Rating/Rating.jsx'

describe('Rating (React)', () => {
  it('renders without crashing', () => {
    render(<Rating />)
    expect(true).toBe(true)
  })
})

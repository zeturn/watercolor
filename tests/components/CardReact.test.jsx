import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from '@/components/Card/Card.jsx'

describe('Card (React)', () => {
  it('renders without crashing', () => {
    render(<Card />)
    expect(true).toBe(true)
  })
})

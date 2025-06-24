import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Grid from '@/components/Grid/Grid.jsx'

describe('Grid (React)', () => {
  it('renders without crashing', () => {
    render(<Grid />)
    expect(true).toBe(true)
  })
})

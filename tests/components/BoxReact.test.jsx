import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Box from '@/components/Box/Box.jsx'

describe('Box (React)', () => {
  it('renders without crashing', () => {
    render(<Box />)
    expect(true).toBe(true)
  })
})

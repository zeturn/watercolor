import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Typography from '@/components/Typography/Typography.jsx'

describe('Typography (React)', () => {
  it('renders without crashing', () => {
    render(<Typography />)
    expect(true).toBe(true)
  })
})

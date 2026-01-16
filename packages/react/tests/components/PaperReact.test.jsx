import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Paper from '@/components/Paper/Paper.jsx'

describe('Paper (React)', () => {
  it('renders without crashing', () => {
    render(<Paper />)
    expect(true).toBe(true)
  })
})

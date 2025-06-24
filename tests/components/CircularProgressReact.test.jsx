import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CircularProgress from '@/components/CircularProgress/CircularProgress.jsx'

describe('CircularProgress (React)', () => {
  it('renders without crashing', () => {
    render(<CircularProgress />)
    expect(true).toBe(true)
  })
})

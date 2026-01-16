import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Progress from '@/components/Progress/Progress.jsx'

describe('Progress (React)', () => {
  it('renders without crashing', () => {
    render(<Progress />)
    expect(true).toBe(true)
  })
})

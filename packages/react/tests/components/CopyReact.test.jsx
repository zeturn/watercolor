import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Copy from '@/components/Copy/Copy.jsx'

describe('Copy (React)', () => {
  it('renders without crashing', () => {
    render(<Copy />)
    expect(true).toBe(true)
  })
})

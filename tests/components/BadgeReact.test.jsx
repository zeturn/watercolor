import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Badge from '@/components/Badge/Badge.jsx'

describe('Badge (React)', () => {
  it('renders without crashing', () => {
    render(<Badge />)
    expect(true).toBe(true)
  })
})

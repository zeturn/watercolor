import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Radio from '@/components/Radio/Radio.jsx'

describe('Radio (React)', () => {
  it('renders without crashing', () => {
    render(<Radio />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Switch from '@/components/Switch/Switch.jsx'

describe('Switch (React)', () => {
  it('renders without crashing', () => {
    render(<Switch />)
    expect(true).toBe(true)
  })
})

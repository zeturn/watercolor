import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '@/components/Button/Button.jsx'

describe('Button (React)', () => {
  it('renders without crashing', () => {
    render(<Button />)
    expect(true).toBe(true)
  })
})

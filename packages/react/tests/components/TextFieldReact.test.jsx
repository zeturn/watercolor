import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TextField from '@/components/TextField/TextField.jsx'

describe('TextField (React)', () => {
  it('renders without crashing', () => {
    render(<TextField />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Input from '@/components/Input/Input.jsx'

describe('Input (React)', () => {
  it('renders without crashing', () => {
    render(<Input />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import DatePicker from '@/components/DatePicker/DatePicker.jsx'

describe('DatePicker (React)', () => {
  it('renders without crashing', () => {
    render(<DatePicker />)
    expect(true).toBe(true)
  })
})

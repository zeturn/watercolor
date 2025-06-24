import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ColorPicker from '@/components/ColorPicker/ColorPicker.jsx'

describe('ColorPicker (React)', () => {
  it('renders without crashing', () => {
    render(<ColorPicker />)
    expect(true).toBe(true)
  })
})

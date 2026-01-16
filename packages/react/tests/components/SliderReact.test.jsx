import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Slider from '@/components/Slider/Slider.jsx'

describe('Slider (React)', () => {
  it('renders without crashing', () => {
    render(<Slider />)
    expect(true).toBe(true)
  })
})

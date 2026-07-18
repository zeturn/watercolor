import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Slider from '@/components/Slider/Slider.jsx'

describe('Slider (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Slider label="Volume" value={40} />)
    expect(getByRole('slider', { name: 'Volume' })).toHaveValue('40')
  })
})

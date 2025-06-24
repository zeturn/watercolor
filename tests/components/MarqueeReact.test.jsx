import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Marquee from '@/components/Marquee/Marquee.jsx'

describe('Marquee (React)', () => {
  it('renders without crashing', () => {
    render(<Marquee />)
    expect(true).toBe(true)
  })
})

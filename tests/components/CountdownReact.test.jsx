import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Countdown from '@/components/Countdown/Countdown.jsx'

describe('Countdown (React)', () => {
  it('renders without crashing', () => {
    render(<Countdown />)
    expect(true).toBe(true)
  })
})

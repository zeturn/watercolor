import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SlideOver from '@/components/SlideOver/SlideOver.jsx'

describe('SlideOver (React)', () => {
  it('renders without crashing', () => {
    render(<SlideOver />)
    expect(true).toBe(true)
  })
})

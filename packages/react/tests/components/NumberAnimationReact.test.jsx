import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.jsx'

describe('NumberAnimation (React)', () => {
  it('renders without crashing', () => {
    render(<NumberAnimation />)
    expect(true).toBe(true)
  })
})

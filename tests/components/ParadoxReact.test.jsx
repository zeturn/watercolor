import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Paradox from '@/components/Paradox/Paradox.jsx'

describe('Paradox (React)', () => {
  it('renders without crashing', () => {
    render(<Paradox />)
    expect(true).toBe(true)
  })
})

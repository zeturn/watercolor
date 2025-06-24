import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tooltip from '@/components/Tooltip/Tooltip.jsx'

describe('Tooltip (React)', () => {
  it('renders without crashing', () => {
    render(<Tooltip />)
    expect(true).toBe(true)
  })
})

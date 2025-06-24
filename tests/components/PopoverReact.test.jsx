import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Popover from '@/components/Popover/Popover.jsx'

describe('Popover (React)', () => {
  it('renders without crashing', () => {
    render(<Popover />)
    expect(true).toBe(true)
  })
})

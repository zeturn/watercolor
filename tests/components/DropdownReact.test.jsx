import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Dropdown from '@/components/Dropdown/Dropdown.jsx'

describe('Dropdown (React)', () => {
  it('renders without crashing', () => {
    render(<Dropdown />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Menu from '@/components/Menu/Menu.jsx'

describe('Menu (React)', () => {
  it('renders without crashing', () => {
    render(<Menu />)
    expect(true).toBe(true)
  })
})

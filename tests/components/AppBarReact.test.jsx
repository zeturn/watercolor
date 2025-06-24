import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AppBar from '@/components/AppBar/AppBar.jsx'

describe('AppBar (React)', () => {
  it('renders without crashing', () => {
    render(<AppBar />)
    expect(true).toBe(true)
  })
})

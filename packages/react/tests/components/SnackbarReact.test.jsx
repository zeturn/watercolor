import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Snackbar from '@/components/Snackbar/Snackbar.jsx'

describe('Snackbar (React)', () => {
  it('renders without crashing', () => {
    render(<Snackbar />)
    expect(true).toBe(true)
  })
})

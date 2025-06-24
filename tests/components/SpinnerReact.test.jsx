import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Spinner from '@/components/Spinner/Spinner.jsx'

describe('Spinner (React)', () => {
  it('renders without crashing', () => {
    render(<Spinner />)
    expect(true).toBe(true)
  })
})

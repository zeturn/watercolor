import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Feature from '@/components/Feature/Feature.jsx'

describe('Feature (React)', () => {
  it('renders without crashing', () => {
    render(<Feature />)
    expect(true).toBe(true)
  })
})

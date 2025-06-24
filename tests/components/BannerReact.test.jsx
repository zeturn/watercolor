import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Banner from '@/components/Banner/Banner.jsx'

describe('Banner (React)', () => {
  it('renders without crashing', () => {
    render(<Banner />)
    expect(true).toBe(true)
  })
})

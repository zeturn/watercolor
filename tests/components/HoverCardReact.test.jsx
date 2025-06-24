import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HoverCard from '@/components/HoverCard/HoverCard.jsx'

describe('HoverCard (React)', () => {
  it('renders without crashing', () => {
    render(<HoverCard />)
    expect(true).toBe(true)
  })
})

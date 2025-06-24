import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import List from '@/components/List/List.jsx'

describe('List (React)', () => {
  it('renders without crashing', () => {
    render(<List />)
    expect(true).toBe(true)
  })
})

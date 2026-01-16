import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Container from '@/components/Container/Container.jsx'

describe('Container (React)', () => {
  it('renders without crashing', () => {
    render(<Container />)
    expect(true).toBe(true)
  })
})

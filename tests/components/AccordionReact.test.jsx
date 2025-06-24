import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Accordion from '@/components/Accordion/Accordion.jsx'

describe('Accordion (React)', () => {
  it('renders without crashing', () => {
    render(<Accordion />)
    expect(true).toBe(true)
  })
})

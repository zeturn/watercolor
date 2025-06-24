import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Watermark from '@/components/Watermark/Watermark.jsx'

describe('Watermark (React)', () => {
  it('renders without crashing', () => {
    render(<Watermark />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Blockquote from '@/components/Blockquote/Blockquote.jsx'

describe('Blockquote (React)', () => {
  it('renders without crashing', () => {
    render(<Blockquote />)
    expect(true).toBe(true)
  })
})

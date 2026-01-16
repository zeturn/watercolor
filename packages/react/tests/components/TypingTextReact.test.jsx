import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TypingText from '@/components/TypingText/TypingText.jsx'

describe('TypingText (React)', () => {
  it('renders without crashing', () => {
    render(<TypingText />)
    expect(true).toBe(true)
  })
})

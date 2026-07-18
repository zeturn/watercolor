import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TypingText from '@/components/TypingText/TypingText.jsx'

describe('TypingText (React)', () => {
  it('renders without crashing', () => {
    const { container } = render(<TypingText text="Hello" showCursor />)
    expect(container.querySelector('.typing-wrapper')).toBeInTheDocument()
    expect(container.querySelector('.typing-cursor')).toBeInTheDocument()
  })
})

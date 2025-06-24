import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Avatar from '@/components/Avatar/Avatar.jsx'

describe('Avatar (React)', () => {
  it('渲染首字母', () => {
    render(<Avatar children="张 三" />)
    expect(screen.getByText('张')).toBeInTheDocument()
  })
})
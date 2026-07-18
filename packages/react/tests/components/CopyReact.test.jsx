import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Copy from '@/components/Copy/Copy.jsx'

describe('Copy (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Copy text="copy me" />)
    expect(getByRole('button', { name: /复制/ })).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import NumberAnimation from '@/components/NumberAnimation/NumberAnimation.jsx'

describe('NumberAnimation (React)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<NumberAnimation active={false} to={42} />)
    expect(getByText('42')).toBeInTheDocument()
  })
})

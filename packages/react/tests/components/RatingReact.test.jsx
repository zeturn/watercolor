import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Rating from '@/components/Rating/Rating.jsx'

describe('Rating (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Rating value={3} />)
    expect(getByRole('radiogroup', { name: '评分组件' })).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'

describe('Skeleton (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Skeleton />)
    expect(getByRole('status', { name: 'Loading' })).toBeInTheDocument()
  })
})

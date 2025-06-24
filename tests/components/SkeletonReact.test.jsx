import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skeleton from '@/components/Skeleton/Skeleton.jsx'

describe('Skeleton (React)', () => {
  it('renders without crashing', () => {
    render(<Skeleton />)
    expect(true).toBe(true)
  })
})

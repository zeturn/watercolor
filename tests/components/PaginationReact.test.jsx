import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pagination from '@/components/Pagination/Pagination.jsx'

describe('Pagination (React)', () => {
  it('renders without crashing', () => {
    render(<Pagination />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pagination from '@/components/Pagination/Pagination.jsx'

describe('Pagination (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Pagination total={30} pageSize={10} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })
})

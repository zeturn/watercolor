import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Table from '@/components/Table/Table.jsx'

describe('Table (React)', () => {
  it('renders without crashing', () => {
    render(<Table />)
    expect(true).toBe(true)
  })
})

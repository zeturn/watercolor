import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PricingTable from '@/components/PricingTable/PricingTable.jsx'

describe('PricingTable (React)', () => {
  it('renders without crashing', () => {
    render(<PricingTable />)
    expect(true).toBe(true)
  })
})

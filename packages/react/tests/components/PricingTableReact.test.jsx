import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PricingTable from '@/components/PricingTable/PricingTable.jsx'

describe('PricingTable (React)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<PricingTable plans={[{ name: 'Pro', price: '$9', features: ['A'], button: 'Buy' }]} />)
    expect(getByText('Pro')).toBeInTheDocument()
  })
})

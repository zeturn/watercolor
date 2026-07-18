import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tabs from '@/components/Tabs/Tabs.jsx'

describe('Tabs (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Tabs tabs={[{ title: 'One' }]} />)
    expect(getByRole('tab', { name: 'One' })).toBeInTheDocument()
  })
})

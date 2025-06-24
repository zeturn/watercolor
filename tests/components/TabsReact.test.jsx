import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tabs from '@/components/Tabs/Tabs.jsx'

describe('Tabs (React)', () => {
  it('renders without crashing', () => {
    render(<Tabs />)
    expect(true).toBe(true)
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

describe('Breadcrumb (React)', () => {
  it('renders without crashing', () => {
    render(<Breadcrumb />)
    expect(true).toBe(true)
  })
})

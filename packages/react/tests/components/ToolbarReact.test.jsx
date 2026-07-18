import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Toolbar from '@/components/Toolbar/Toolbar.jsx'

describe('Toolbar (React)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Toolbar>Actions</Toolbar>)
    expect(getByText('Actions')).toBeInTheDocument()
  })
})

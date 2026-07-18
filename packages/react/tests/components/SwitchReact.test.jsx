import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Switch from '@/components/Switch/Switch.jsx'

describe('Switch (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Switch label="Notifications" checked />)
    expect(getByRole('switch', { name: 'Notifications' })).toBeChecked()
  })
})

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Progress from '@/components/Progress/Progress.jsx'

describe('Progress (React)', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Progress value={42} label="Upload" />)
    expect(getByRole('progressbar', { name: 'Upload' })).toHaveAttribute('aria-valuenow', '42')
  })
})

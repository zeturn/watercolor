import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Alert from '@/components/Alert/Alert.jsx'

describe('Alert (React)', () => {
  it('renders without crashing', () => {
    render(<Alert />)
    expect(true).toBe(true)
  })
})

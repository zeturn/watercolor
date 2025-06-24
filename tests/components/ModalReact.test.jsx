import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Modal from '@/components/Modal/Modal.jsx'

describe('Modal (React)', () => {
  it('renders without crashing', () => {
    render(<Modal />)
    expect(true).toBe(true)
  })
})

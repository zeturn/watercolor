import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ImageGallery from '@/components/ImageGallery/ImageGallery.jsx'

describe('ImageGallery (React)', () => {
  it('renders without crashing', () => {
    render(<ImageGallery />)
    expect(true).toBe(true)
  })
})

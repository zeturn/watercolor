import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SlideOver from '@/components/SlideOver/SlideOver.jsx'

describe('SlideOver (React)', () => {
  it('renders without crashing', () => {
    render(<SlideOver open>Panel content</SlideOver>)
    expect(document.body.querySelector('[role="dialog"]')).toHaveTextContent('Panel content')
  })
})

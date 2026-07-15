import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Divider from '@/components/Divider/Divider.jsx'

describe('Divider (React)', () => {
  it('renders a semantic horizontal rule by default', () => {
    const { container } = render(<Divider />)
    const divider = container.querySelector('hr')

    expect(divider).toHaveClass('wc-divider--horizontal')
    expect(divider).toHaveClass('wc-divider--solid')
  })

  it('renders text and explicit variants', () => {
    render(<Divider variant="dashed">Optional</Divider>)

    expect(screen.getByText('Optional').parentElement).toHaveClass('wc-divider--with-text')
    expect(screen.getByText('Optional').parentElement).toHaveClass('wc-divider--dashed')
  })
})

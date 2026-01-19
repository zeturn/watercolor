import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Feature from '@/components/Feature/Feature.jsx'

describe('Feature (React)', () => {
  it('renders without crashing', () => {
    render(<Feature />)
    expect(true).toBe(true)
  })

  it('renders string icon without React child warnings', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const { container } = render(<Feature icon="🎨" title="T" description="D" />)

    expect(container.textContent).toContain('🎨')
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('renders html string icon via innerHTML', () => {
    const svg = '<svg data-testid="icon" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>'
    const { container } = render(<Feature icon={svg} title="T" description="D" />)
    const svgEl = container.querySelector('svg[data-testid="icon"]')
    expect(svgEl).toBeTruthy()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AppBar from '@/components/AppBar/AppBar.jsx'

describe('AppBar (React)', () => {
  it('renders without crashing', () => {
    render(<AppBar />)
    expect(true).toBe(true)
  })

  it('renders with default props', () => {
    render(<AppBar>Test Content</AppBar>)
    const appBar = screen.getByText('Test Content')
    expect(appBar).toBeInTheDocument()
    expect(appBar).toHaveClass('wc-appbar')
    expect(appBar).toHaveClass('wc-appbar--fixed')
    expect(appBar).toHaveClass('wc-appbar--default')
    expect(appBar).toHaveClass('wc-appbar--elevation-4')
    expect(appBar).toHaveClass('wc-appbar--elevation')
  })

  it('renders children content correctly', () => {
    const testContent = 'AppBar Test Content'
    render(<AppBar>{testContent}</AppBar>)
    expect(screen.getByText(testContent)).toBeInTheDocument()
  })

  it('applies custom position prop', () => {
    render(<AppBar position="absolute">Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveClass('wc-appbar--absolute')
  })

  it('applies custom color prop', () => {
    render(<AppBar color="secondary">Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveClass('wc-appbar--secondary')
  })

  it('applies custom elevation prop', () => {
    render(<AppBar elevation={8}>Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveClass('wc-appbar--elevation-8')
  })

  it('applies custom variant prop', () => {
    render(<AppBar variant="outlined">Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveClass('wc-appbar--outlined')
  })

  it('applies custom className', () => {
    const customClass = 'custom-appbar-class'
    render(<AppBar className={customClass}>Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveClass(customClass)
  })

  it('applies custom style', () => {
    const customStyle = { backgroundColor: 'red', height: '80px' }
    render(<AppBar style={customStyle}>Test</AppBar>)
    const appBar = screen.getByText('Test')
    expect(appBar).toHaveStyle('background-color: rgb(255, 0, 0)')
    expect(appBar).toHaveStyle('height: 80px')
  })

  it('passes through additional props', () => {
    render(<AppBar data-testid="appbar" id="test-appbar">Test</AppBar>)
    const appBar = screen.getByTestId('appbar')
    expect(appBar).toHaveAttribute('id', 'test-appbar')
  })

  it('combines multiple props correctly', () => {
    render(
      <AppBar 
        position="sticky" 
        color="transparent" 
        elevation={2} 
        variant="outlined"
        className="custom-class"
        style={{ padding: '10px' }}
      >
        Complex Test
      </AppBar>
    )
    const appBar = screen.getByText('Complex Test')
    expect(appBar).toHaveClass('wc-appbar--sticky')
    expect(appBar).toHaveClass('wc-appbar--transparent')
    expect(appBar).toHaveClass('wc-appbar--elevation-2')
    expect(appBar).toHaveClass('wc-appbar--outlined')
    expect(appBar).toHaveClass('custom-class')
    expect(appBar).toHaveStyle({ padding: '10px' })
  })

  it('handles empty children', () => {
    render(<AppBar />)
    const appBar = document.querySelector('.wc-appbar')
    expect(appBar).toBeInTheDocument()
    expect(appBar).toBeEmptyDOMElement()
  })

  it('handles complex children content', () => {
    render(
      <AppBar>
        <div data-testid="header">Header</div>
        <nav data-testid="navigation">Navigation</nav>
        <button data-testid="menu-button">Menu</button>
      </AppBar>
    )
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('menu-button')).toBeInTheDocument()
  })

  it('maintains proper CSS class structure', () => {
    render(<AppBar>Test</AppBar>)
    const appBar = screen.getByText('Test')
    const classList = appBar.className.split(' ')
    
    // 检查必需的类名
    expect(classList).toContain('wc-appbar')
    expect(classList).toContain('wc-appbar--fixed')
    expect(classList).toContain('wc-appbar--default')
    expect(classList).toContain('wc-appbar--elevation-4')
    expect(classList).toContain('wc-appbar--elevation')
  })
})

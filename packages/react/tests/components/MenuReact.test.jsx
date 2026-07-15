import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Menu from '@/components/Menu/Menu.jsx'

describe('Menu (React)', () => {
  it('renders without crashing', () => {
    render(<Menu />)
    expect(screen.getByRole('button', { name: /选择选项/ })).toHaveAttribute('aria-haspopup', 'menu')
  })

  it('renders accessible semantic item states', () => {
    render(
      <Menu
        items={[
          { label: 'Selected', selected: true },
          { label: 'Disabled', disabled: true },
          { divider: true },
          { label: 'Delete', danger: true }
        ]}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /选择选项/ }))

    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByRole('menuitem', { name: 'Selected' })).toHaveClass('wc-menu__item--selected')
    expect(screen.getByRole('menuitem', { name: 'Disabled' })).toBeDisabled()
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveClass('wc-menu__item--danger')
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })
})

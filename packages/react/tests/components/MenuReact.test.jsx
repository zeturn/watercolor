import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

  it('supports APG-style keyboard open, navigation, and Escape close', async () => {
    render(
      <Menu
        items={[
          { label: 'First' },
          { label: 'Second' }
        ]}
      />
    )

    const trigger = screen.getByRole('button', { name: /选择选项/ })
    trigger.focus()
    fireEvent.keyDown(trigger, { key: 'ArrowDown' })

    expect(screen.getByRole('menu')).toBeInTheDocument()
    await waitFor(() => expect(screen.getByRole('menuitem', { name: 'First' })).toHaveFocus())

    fireEvent.keyDown(screen.getByRole('menu'), { key: 'ArrowDown' })
    expect(screen.getByRole('menuitem', { name: 'Second' })).toHaveFocus()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})

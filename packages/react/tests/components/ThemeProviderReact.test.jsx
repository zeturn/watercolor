import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/ThemeReact.tsx'

function Probe () {
  const theme = useTheme()
  return (
    <button onClick={() => theme.setMode(theme.dark ? 'light' : 'dark')}>
      {theme.mode}:{theme.resolvedMode}
    </button>
  )
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
  })

  it('publishes mode state and keeps the legacy dark class in sync', () => {
    render(<ThemeProvider defaultMode="light"><Probe /></ThemeProvider>)
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})

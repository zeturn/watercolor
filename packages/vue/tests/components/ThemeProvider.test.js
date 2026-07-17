import { defineComponent, h } from 'vue'
import { fireEvent, render, screen } from '@testing-library/vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/ThemeVUE.ts'

const Probe = defineComponent({
  setup () {
    const theme = useTheme()
    return () => h('button', {
      onClick: () => theme.setMode(theme.dark.value ? 'light' : 'dark'),
    }, `${theme.mode.value}:${theme.resolvedMode.value}`)
  },
})

const createStorage = () => {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    clear: () => values.clear(),
    values,
  }
}

let storage

describe('ThemeProvider', () => {
  beforeEach(() => {
    storage = createStorage()
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
  })

  afterEach(() => vi.unstubAllGlobals())

  it('publishes mode state and keeps the legacy dark class in sync', async () => {
    render(ThemeProvider, {
      props: { defaultMode: 'light', storage },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(document.documentElement.classList.contains('light')).toBe(false)
    expect(document.documentElement.style.colorScheme).toBe('dark')
    expect(storage.getItem('wc-mode')).toBe('dark')
    expect(storage.getItem('wc-scheme')).toBeNull()
  })

  it('responds to controlled mode updates', async () => {
    storage.setItem('wc-mode', 'dark')
    const view = render(ThemeProvider, {
      props: { mode: 'light', storage },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await view.rerender({ mode: 'dark', storage })
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })

  it('keeps system mode while updating its resolved value', async () => {
    let dark = false
    let listener
    vi.stubGlobal('matchMedia', vi.fn(() => ({
      get matches () { return dark },
      addEventListener: (_event, next) => { listener = next },
      removeEventListener: vi.fn(),
    })))
    render(ThemeProvider, {
      props: { defaultMode: 'system', storage },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('system:light')
    dark = true
    listener()
    await Promise.resolve()
    expect(screen.getByRole('button')).toHaveTextContent('system:dark')
    expect(document.documentElement.dataset.theme).toBe('system')
    expect(document.documentElement.dataset.resolvedTheme).toBe('dark')
  })
})

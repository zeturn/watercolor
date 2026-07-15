import { defineComponent, h } from 'vue'
import { fireEvent, render, screen } from '@testing-library/vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeProvider, useTheme } from '../../src/ThemeVUE.ts'

const Probe = defineComponent({
  setup () {
    const theme = useTheme()
    return () => h('button', {
      onClick: () => theme.setMode(theme.dark.value ? 'light' : 'dark'),
    }, `${theme.mode.value}:${theme.resolvedMode.value}`)
  },
})

describe('ThemeProvider', () => {
  beforeEach(() => {
    document.documentElement.className = ''
    document.documentElement.removeAttribute('data-theme')
    document.documentElement.removeAttribute('data-resolved-theme')
  })

  it('publishes mode state and keeps the legacy dark class in sync', async () => {
    render(ThemeProvider, {
      props: { defaultMode: 'light' },
      slots: { default: () => h(Probe) },
    })
    expect(screen.getByRole('button')).toHaveTextContent('light:light')
    await fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('dark:dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})

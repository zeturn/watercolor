import React, { useEffect, useState } from 'react'
import Inline from '@/components/Inline/Inline.jsx'
import Page from '@/components/Page/Page.jsx'
import Stack from '@/components/Stack/Stack.jsx'
import { ThemeProvider, useTheme } from '@/ThemeReact.tsx'
import { applyThemeConfig, resetThemeConfig } from '@/utils/theme.ts'
import { pageModes } from '../.storybook/modes.js'
import './ThemeContract.css'

export default {
  title: 'Foundations/Theme contract',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'The single supported mode model: ThemeProvider + light, dark or system + useTheme().' } },
    chromatic: { modes: pageModes, cropToViewport: true },
  },
}

const options = ['light', 'dark', 'system']
const customTheme = {
  version: 2,
  tokens: {
    colors: { primary: { 400: '#c4b5fd', 500: '#a78bfa', 600: '#8b5cf6', 700: '#7c3aed' } },
    radius: { lg: '14px', xl: '18px', '2xl': '24px' },
  },
  modes: {
    light: { canvas: '#fffbff', actionHover: '#f5efff', actionSelected: '#eee5ff', accent: '#7c3aed' },
    dark: { canvas: '#120f18', actionHover: '#241d30', actionSelected: '#30243f', accent: '#c4b5fd' },
  },
}

function ContractContent () {
  const theme = useTheme()
  return (
    <main className="wc-theme-contract">
      <Page size="md" gutter="lg">
        <Stack gap="2xl">
          <Stack gap="lg">
            <p className="wc-theme-contract__kicker">Theme contract</p>
            <h1>One mode model.</h1>
            <p className="wc-theme-contract__copy">The provider owns DOM attributes, persistence and system preference. Components only consume semantic tokens.</p>
          </Stack>
          <Inline gap="xs" data-testid="theme-options">
            {options.map((option) => (
              <button
                className={`wc-theme-contract__option ${theme.mode === option ? 'is-selected' : ''}`}
                data-mode={option}
                key={option}
                onClick={() => theme.setMode(option)}
              >{option}</button>
            ))}
          </Inline>
          <p className="wc-theme-contract__status">Requested <strong data-theme-requested>{theme.mode}</strong> · resolved <strong data-theme-resolved>{theme.resolvedMode}</strong></p>
          <Stack gap="2xs">
            <div className="wc-theme-contract__sample">Transparent by default. Hover reveals a quiet surface.</div>
            <div className="wc-theme-contract__sample">No component-level dark mode branches.</div>
          </Stack>
        </Stack>
      </Page>
    </main>
  )
}

function ContractHarness ({ initialMode }) {
  const [mode, setMode] = useState(initialMode)
  return <ThemeProvider mode={mode} onModeChange={setMode}><ContractContent /></ThemeProvider>
}

function CustomContractHarness ({ initialMode }) {
  useEffect(() => {
    applyThemeConfig(customTheme)
    return () => resetThemeConfig()
  }, [])
  return <ContractHarness initialMode={initialMode} />
}

export const ProviderContract = {
  render: (_args, context) => <ContractHarness key={context.globals.theme} initialMode={context.globals.theme} />,
}

export const CustomThemeV2 = {
  render: (_args, context) => <CustomContractHarness key={context.globals.theme} initialMode={context.globals.theme} />,
}

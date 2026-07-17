import React, { useState } from 'react'
import Inline from '@/components/Inline/Inline.jsx'
import Page from '@/components/Page/Page.jsx'
import Stack from '@/components/Stack/Stack.jsx'
import { ThemeProvider, useTheme } from '@/ThemeReact.tsx'
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

export const ProviderContract = {
  render: (_args, context) => <ContractHarness key={context.globals.theme} initialMode={context.globals.theme} />,
}

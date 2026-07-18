import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Button,
  LocaleProvider,
  Page,
  Stack,
  ThemeProvider,
  Typography,
} from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

function App() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <LocaleProvider locale="en">
        <Page size="md" gutter="md">
          <Stack gap="lg">
            <Typography variant="h1">Watercolor React</Typography>
            <Typography color="secondary">Borderless defaults, theme.json when present.</Typography>
            <Button variant="primary">Create project</Button>
          </Stack>
        </Page>
      </LocaleProvider>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)


import { createApp } from 'vue'
import {
  Button,
  LocaleProvider,
  Page,
  Stack,
  ThemeProvider,
  Typography,
} from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'

const App = {
  components: { Button, LocaleProvider, Page, Stack, ThemeProvider, Typography },
  template: `
    <ThemeProvider theme-url="/theme.json" default-mode="system">
      <LocaleProvider locale="en">
        <Page size="md" gutter="md">
          <Stack gap="lg">
            <Typography variant="h1">Watercolor Vue</Typography>
            <Typography color="secondary">Borderless defaults, theme.json when present.</Typography>
            <Button variant="primary">Create project</Button>
          </Stack>
        </Page>
      </LocaleProvider>
    </ThemeProvider>
  `
}

createApp(App).mount('#app')


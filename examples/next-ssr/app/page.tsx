import {
  Page,
  Stack,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  ThemeProvider,
  LocaleProvider,
  Switch,
} from '@zeturn/watercolor-next'

// No `'use client'` directive is needed here: the published @zeturn/watercolor-next
// bundle already carries the `"use client"` boundary, so these components are
// valid React Server Component client references.
export default function Home() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <LocaleProvider>
        <Page size="md">
          <Container>
            <Stack gap="lg">
              <Typography variant="h1">Watercolor on Next.js</Typography>
              <Typography variant="body1">
                This page is a Server Component. The components below are hydrated
                on the client thanks to the RSC boundary shipped with
                @zeturn/watercolor-next.
              </Typography>
              <Card>
                <CardContent>
                  <Stack gap="sm">
                    <Button variant="primary">Primary action</Button>
                    <Button variant="outlined">Outlined action</Button>
                    <Switch defaultChecked />
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Container>
        </Page>
      </LocaleProvider>
    </ThemeProvider>
  )
}

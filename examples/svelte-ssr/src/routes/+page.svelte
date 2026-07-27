<script lang="ts">
  import {
    Page,
    Stack,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Switch,
    useTheme,
  } from '@zeturn/watercolor-svelte'

  const theme = useTheme()
</script>

<Page>
  <Container>
    <Stack gap="lg">
      <Typography variant="h1">Watercolor on SvelteKit</Typography>
      <Typography variant="body1">
        This page is server-side rendered by SvelteKit. The theme init script in
        +layout.svelte resolves the color mode before hydration, so there is no
        flash of the wrong theme.
      </Typography>
      <Card>
        <CardContent>
          <Stack gap="sm">
            <Button variant="primary">Primary action</Button>
            <Button variant="outlined">Outlined action</Button>
            <Switch checked={true} />
            <Button variant="text" onclick={() => theme.toggleMode()}>
              Toggle theme (current: {theme.resolvedMode})
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  </Container>
</Page>

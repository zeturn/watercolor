# @zeturn/watercolor-svelte

Watercolor UI components for Svelte 5 and SvelteKit.

## Install

```bash
npm install @zeturn/watercolor-svelte
```

## Use

```svelte
<script>
  import { Button, ThemeProvider } from '@zeturn/watercolor-svelte'
</script>

<ThemeProvider defaultMode="system">
  <Button variant="primary">Continue</Button>
</ThemeProvider>
```

The package provides the same public component names as the React, Vue, and Next.js packages.
It uses Svelte 5 runes, callback event props such as `onclick`, and bindable form values.

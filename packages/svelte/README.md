# @zeturn/watercolor-svelte

Watercolor UI components for Svelte 5 and SvelteKit.

## Install

```bash
npm install @zeturn/watercolor-svelte
```

## Use

```svelte
<script>
  import '@zeturn/watercolor-svelte/theme.css'
  import { Button, ThemeProvider } from '@zeturn/watercolor-svelte'
</script>

<ThemeProvider defaultMode="system">
  <Button variant="primary">Continue</Button>
</ThemeProvider>
```

Import `theme.css` once in your app entry or root layout; the package root does not import CSS automatically.

The package provides the same public component names as the React, Vue, and Next.js packages.
It uses Svelte 5 runes, callback event props such as `onclick`, and bindable form values.

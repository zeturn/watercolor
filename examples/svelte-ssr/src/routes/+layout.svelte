<script lang="ts">
  import type { Snippet } from 'svelte'
  import { createThemeInitScript } from '@zeturn/watercolor-core'
  import { ThemeProvider, LocaleProvider } from '@zeturn/watercolor-svelte'

  let { children }: { children?: Snippet } = $props()

  // Resolve the color mode before hydration to avoid a flash of the wrong theme.
  const themeInitScript = `<script>${createThemeInitScript({ defaultMode: 'system' })}<\/script>`
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html themeInitScript}
</svelte:head>

<ThemeProvider defaultMode="system" themeUrl="/theme.json">
  <LocaleProvider>
    {@render children?.()}
  </LocaleProvider>
</ThemeProvider>

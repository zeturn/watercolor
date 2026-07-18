# Nuxt SSR integration

Add the pre-paint theme script through Nuxt head configuration, then wrap the app with `ThemeProvider`.

```ts
// nuxt.config.ts
import { createThemeInitScript } from '@zeturn/watercolor-core'

export default defineNuxtConfig({
  css: ['@zeturn/watercolor-vue/style.css'],
  app: {
    head: {
      script: [
        {
          innerHTML: createThemeInitScript({ defaultMode: 'system' }),
          tagPosition: 'head',
        },
      ],
    },
  },
})
```

```vue
<!-- app.vue -->
<template>
  <ThemeProvider theme-url="/theme.json" default-mode="system">
    <NuxtPage />
  </ThemeProvider>
</template>

<script setup lang="ts">
import { ThemeProvider } from '@zeturn/watercolor-vue'
</script>
```


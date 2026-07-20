---
name: watercolor-ui
description: This skill should be used when building user interfaces, web apps, dashboards, forms, or component demos with the Watercolor UI component library (@zeturn/watercolor-react for React, @zeturn/watercolor-vue for Vue 3). It covers installation, theming, and the full component catalog so an agent can scaffold and extend UIs using Watercolor's ready-made, watercolor-styled components.
---

# Watercolor UI

Watercolor UI is a modern, minimal, watercolor-style cross-framework component library for
React 18/19 and Vue 3, published under the `@zeturn/watercolor-*` npm scope. This skill enables
an agent to scaffold and extend UIs using its prebuilt components instead of hand-rolling markup.

## When to use

- The user asks to build a UI, dashboard, form, or component demo and Watercolor UI is (or should be) the component library.
- The user mentions "watercolor", "@zeturn/watercolor", or wants a watercolor-styled UI.
- The user wants to add, theme, or restyle components from Watercolor.

## Installation

Two paths:

1. Guided installer (recommended for new projects):

   ```bash
   npm install watercolor-ui
   npx watercolor-ui --framework react                # or: --framework vue
   npx watercolor-ui --framework react --icons lucide  # add an optional icon pack
   ```

   The installer adds `@zeturn/watercolor-core`, the chosen platform package, and an optional
   icon pack. It has **no postinstall side effects** — it only changes dependencies when invoked explicitly.

2. Direct install:

   ```bash
   npm install @zeturn/watercolor-react @zeturn/watercolor-core
   # optional React icon packs:
   npm install @zeturn/watercolor-icons-{feather,heroicons-react,lucide-react,phosphor-react,tabler-react}
   # Vue equivalents:
   npm install @zeturn/watercolor-vue @zeturn/watercolor-icons-{heroicons-vue,lucide-vue,phosphor-vue,tabler-vue}
   ```

   Icon packs are optional and tree-shakeable; install only the ones actually used.

## Setup in the app entry

```tsx
import { ThemeProvider } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

// Wrap the app:
<ThemeProvider defaultMode="light">
  <App />
</ThemeProvider>
```

Activate the theme by setting `data-theme="watercolor"` on the root `<html>` element, e.g.
`<html lang="en" data-theme="watercolor">`.

## Using components

Import from the barrel or from deep paths (both are supported):

```tsx
import { Button, Card, TextField } from '@zeturn/watercolor-react'
// deep import (useful for finer tree-shaking):
import Button from '@zeturn/watercolor-react/components/Button'
```

Common shared props: `variant` (`'filled' | 'outlined' | 'text' | 'soft'`), `color`
(`'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'neutral'`),
`size` (`'sm' | 'md' | 'lg'`), `disabled`.

## Theming

- Override design tokens via CSS custom properties on `:root`, for example:

  ```css
  :root {
    --wc-color-primary: #3b82f6;
    --wc-color-secondary: #4ade80;
    --wc-color-primary-rgb: 59, 130, 246;
    --wc-color-secondary-rgb: 74, 222, 128;
  }
  ```

- The canonical theme token schema is published at `@zeturn/watercolor-core/theme-v2.schema.json`.
- `ThemeProvider` accepts `defaultMode="light" | "dark"`.

## Component categories

Actions · Form Inputs · Layout · Navigation · Feedback · Data Display · Overlay · Advanced
(about 70 components in total). The complete catalog with import paths, key props, and usage
snippets is in `references/components.md`.

## References

- `references/components.md` — full React component catalog (import paths, key props, snippets).
- Official docs: https://zeturn.github.io/watercolor/
- Storybook: https://zeturn.github.io/watercolor/react/

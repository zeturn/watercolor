# @zeturn/watercolor-next

Watercolor UI components for **Next.js** (App Router / React Server Components), built on top of
[`@zeturn/watercolor-react`](../react).

Because Next.js is a React meta-framework, this package does not re-implement any component. Instead it
re-exports the entire React API (`@zeturn/watercolor-next` exposes the exact same components, providers
and hooks as `@zeturn/watercolor-react`), and the build injects the `"use client"` directive so every
exported component is a valid React Server Component *client reference* out of the box.

## Install

```bash
npm install @zeturn/watercolor-next
```

`next`, `react` and `react-dom` are peer dependencies. Icon packs are optional — install only the
Watercolor wrapper you use, for example `@zeturn/watercolor-icons-lucide-react`.

## Usage

Import the stylesheet once, then use the components anywhere — including inside Server Components.

```tsx
// app/layout.tsx
import '@zeturn/watercolor-next/style.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
```

```tsx
// app/page.tsx
import { Page, Stack, Button, ThemeProvider } from '@zeturn/watercolor-next'

export default function Home() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <Page>
        <Stack>
          <Button variant="primary">Watercolor on Next.js</Button>
        </Stack>
      </Page>
    </ThemeProvider>
  )
}
```

Notice there is no `'use client'` directive in the page — the `"use client"` boundary already lives in
the published `@zeturn/watercolor-next` bundle.

## SSR pre-paint theming

To avoid a flash of the wrong color mode during hydration, add the theme init script to `<head>` using
`createThemeInitScript` from `@zeturn/watercolor-core`:

```tsx
import { createThemeInitScript } from '@zeturn/watercolor-core'
import '@zeturn/watercolor-next/style.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: createThemeInitScript({ defaultMode: 'system' }) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Docs

- https://zeturn.github.io/watercolor/
- React Storybook: https://zeturn.github.io/watercolor/react/

See `examples/next-ssr` for a minimal, runnable Next.js App Router project.

## License

ISC

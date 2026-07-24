# Next.js SSR integration

A minimal [Next.js App Router](https://nextjs.org/docs/app) project that uses
[`@zeturn/watercolor-next`](../../packages/next), the first-class Next.js entry
point for Watercolor UI.

Because `@zeturn/watercolor-next` re-exports the React components behind a built-in
`"use client"` boundary, you can drop components into **Server Components** without
adding `'use client'` yourself.

```tsx
// app/layout.tsx
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

```tsx
// app/page.tsx
import { Page, Stack, ThemeProvider, Button } from '@zeturn/watercolor-next'

export default function Home() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <Page><Stack><Button variant="primary">Watercolor on Next.js</Button></Stack></Page>
    </ThemeProvider>
  )
}
```

## Run it

This example depends on the workspace packages, so build them first from the repo root:

```bash
npm install
npm run build
```

Then, from this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

See `packages/next/README.md` for the full API and SSR pre-paint theming notes.

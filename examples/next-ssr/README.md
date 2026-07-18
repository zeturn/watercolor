# Next.js SSR integration

Use `createThemeInitScript` in the document `<head>` so the resolved mode is present before React hydrates.

```tsx
// app/layout.tsx
import { createThemeInitScript } from '@zeturn/watercolor-core'
import '@zeturn/watercolor-react/style.css'

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
'use client'

import { Page, Stack, ThemeProvider } from '@zeturn/watercolor-react'

export default function Home() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <Page><Stack>Watercolor on Next.js</Stack></Page>
    </ThemeProvider>
  )
}
```


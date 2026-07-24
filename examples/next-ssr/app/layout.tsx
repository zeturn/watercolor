import type { Metadata } from 'next'
import { createThemeInitScript } from '@zeturn/watercolor-core'
import '@zeturn/watercolor-next/style.css'

export const metadata: Metadata = {
  title: 'Watercolor UI — Next.js SSR',
  description: 'Minimal Next.js App Router example for @zeturn/watercolor-next',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resolve the color mode before React hydrates to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: createThemeInitScript({ defaultMode: 'system' }) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}

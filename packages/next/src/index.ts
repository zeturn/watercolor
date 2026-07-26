// @zeturn/watercolor-next — Next.js (App Router / React Server Components) entry point.
//
// Next.js is a React meta-framework, so this package is a thin, first-class
// wrapper around @zeturn/watercolor-react. Every component, provider and hook
// from the React package is re-exported here so the public API is identical to
// React and Vue (enforced by scripts/check-api-parity.mjs against
// api-manifest.json).
//
// The difference is the React Server Components boundary: the Vite build
// (see vite.config.js) prepends the `"use client"` directive to the produced
// bundle via a Rollup banner. That makes every exported component a *client
// reference* automatically, so consumers can drop them into Server Components
// without sprinkling `'use client'` everywhere. It also keeps working in the
// Pages Router and in plain React apps.
//
// For SSR theme pre-paint (avoiding a flash of the wrong mode), use
// `createThemeInitScript` from `@zeturn/watercolor-core` inside the document
// `<head>` and wrap the tree with `ThemeProvider` + `suppressHydrationWarning`
// on `<html>` — see examples/next-ssr.

export type * from '@zeturn/watercolor-react'
export * from '@zeturn/watercolor-react'

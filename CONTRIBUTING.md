# Contributing

Thanks for taking the time to contribute to Watercolor UI.

## Repo structure

- `packages/core`: cross-framework utilities
- `packages/vue`: Vue 3 components
- `packages/react`: React components
- `packages/next`: Next.js (App Router / RSC) wrapper re-exporting React behind a `"use client"` boundary
- `packages/svelte`: Svelte 5 components (runes, built with `@sveltejs/package`)
- `docs`: VitePress documentation

## Setup

```bash
npm install
```

## Useful commands

```bash
# build all packages
npm run build

# storybook
npm run storybook:vue
npm run storybook:react

# docs
npm run docs:dev

# tests
npm run test:vue
npm run test:react
npm run test:next
npm run test:svelte

# lint
npm run lint
```

## Guidelines

- Keep Vue/React/Next/Svelte APIs consistent when possible (prop names, defaults, variants). The Next package re-exports React, and all four frameworks are validated by `npm run audit:api` against `api-manifest.json`, so public exports must stay in sync.
- Prefer accessibility-friendly patterns: keyboard support, ARIA attributes, focus management.
- Avoid introducing browser-only globals (`window`, `document`, `localStorage`) in module top-level code; guard for SSR.

## Releasing

See [the release and integration guide](note/%E5%8F%91%E5%B8%83%E4%B8%8E%E9%9B%86%E6%88%90%E6%8C%87%E5%8D%97.md) and [QUICK_RELEASE.md](QUICK_RELEASE.md).

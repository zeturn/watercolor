# Contributing

Thanks for taking the time to contribute to Watercolor UI.

## Repo structure

- `packages/core`: cross-framework utilities
- `packages/vue`: Vue 3 components
- `packages/react`: React components
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

# lint
npm run lint
```

## Guidelines

- Keep Vue/React APIs consistent when possible (prop names, defaults, variants).
- Prefer accessibility-friendly patterns: keyboard support, ARIA attributes, focus management.
- Avoid introducing browser-only globals (`window`, `document`, `localStorage`) in module top-level code; guard for SSR.

## Releasing

See [note/PUBLISHING.md](note/PUBLISHING.md) and [QUICK_RELEASE.md](QUICK_RELEASE.md).

# watercolor-ui

This package is an installer for Watercolor UI.

## Usage

```bash
npm install watercolor-ui
```

Run the installer to install the core package and the selected platform package:

- `@zeturn/watercolor-core`
- `@zeturn/watercolor-react` or `@zeturn/watercolor-vue`
- One icon package (optional)

**Next.js (App Router):** install [`@zeturn/watercolor-next`](../next) separately — it re-exports
the React components behind a built-in `"use client"` RSC boundary, so the installer is not needed
for Next.js projects.

### Choose a platform

Use the CLI interactively:

```bash
npx watercolor-ui
```

Or choose the framework and optional icon pack explicitly:

```bash
npx watercolor-ui --framework react
npx watercolor-ui --framework vue --icons lucide
# Next.js (App Router) does not use the installer:
#   npm install @zeturn/watercolor-next
```

Installing `watercolor-ui` has no postinstall side effects. The CLI only changes
dependencies when you invoke it explicitly.

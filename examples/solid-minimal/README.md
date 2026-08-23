# Solid minimal example

Vite + SolidJS smoke-test example for Watercolor. It renders every public
component exported from `@zeturn/watercolor-solid` so conversion or
reactivity issues surface immediately.

The package is linked locally via `file:../../packages/solid`, so build the
workspace packages first:

```bash
# from repo root
npm run build -w packages/core -w packages/solid

# then in this directory
npm install
npm run build
npm run dev
```

The app imports `@zeturn/watercolor-solid/style.css`, wraps content with
`ThemeProvider defaultMode="system" themeUrl="/theme.json"`, and uses
`LocaleProvider` for localizable accessibility strings.

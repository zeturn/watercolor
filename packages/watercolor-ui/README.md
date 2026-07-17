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

### Choose a platform

Use the CLI interactively:

```bash
npx watercolor-ui
```

Or choose the framework and optional icon pack explicitly:

```bash
npx watercolor-ui --framework react
npx watercolor-ui --framework vue --icons lucide
```

Installing `watercolor-ui` has no postinstall side effects. The CLI only changes
dependencies when you invoke it explicitly.

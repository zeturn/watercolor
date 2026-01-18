# watercolor-ui

This package is an installer for Watercolor UI.

## Usage

```bash
npm install watercolor-ui
```

During installation, it will install the core package and the selected platform package:

- `@zeturn/watercolor-core`
- `@zeturn/watercolor-react` or `@zeturn/watercolor-vue`

### Control the selection

Set the framework explicitly if you want non-interactive installs:

```bash
WATERCOLOR_UI_FRAMEWORK=react npm install watercolor-ui
WATERCOLOR_UI_FRAMEWORK=vue npm install watercolor-ui
WATERCOLOR_UI_FRAMEWORK=both npm install watercolor-ui
```

You can also run the installer manually:

```bash
npx watercolor-ui --framework react
```

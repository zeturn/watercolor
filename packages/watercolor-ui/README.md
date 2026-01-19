# watercolor-ui

This package is an installer for Watercolor UI.

## Usage

```bash
npm install watercolor-ui
```

During installation, it will install the core package and the selected platform package:

- `@zeturn/watercolor-core`
- `@zeturn/watercolor-react` or `@zeturn/watercolor-vue`
- One icon package (optional)

### Control the selection

Set the framework explicitly if you want non-interactive installs:

```bash
WATERCOLOR_UI_FRAMEWORK=react npm install watercolor-ui
WATERCOLOR_UI_FRAMEWORK=vue npm install watercolor-ui
WATERCOLOR_UI_FRAMEWORK=both npm install watercolor-ui
```

Set the icon pack explicitly (defaults to none):

```bash
WATERCOLOR_UI_ICONS=feather npm install watercolor-ui
WATERCOLOR_UI_ICONS=heroicons npm install watercolor-ui
WATERCOLOR_UI_ICONS=lucide npm install watercolor-ui
WATERCOLOR_UI_ICONS=phosphor npm install watercolor-ui
WATERCOLOR_UI_ICONS=tabler npm install watercolor-ui
```

You can also run the installer manually:

```bash
npx watercolor-ui --framework react
npx watercolor-ui --icons lucide
```

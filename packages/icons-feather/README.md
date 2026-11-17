# @zeturn/watercolor-icons-feather

Import one static SVG string; no catalog enters the module graph.

```tsx
import Icon from '@zeturn/watercolor-react/Icon'
import databaseSvg from '@zeturn/watercolor-icons-feather/Database'

<Icon html={databaseSvg} label="Database" />
```

The root exports renderFeatherSvg(svg, options) for dimensions and stroke customization.
The old getFeatherSvg(name) API is available only at /legacy for Vue/Solid compatibility.
It loads the full upstream catalog and is outside the new React/Next dependency graph.

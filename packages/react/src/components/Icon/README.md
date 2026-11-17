# Icon

A presentation component for explicitly imported SVG components, children or SVG
markup. It imports no icon provider and creates no lazy loading boundaries.

```tsx
import Icon from '@zeturn/watercolor-react/Icon'
import DatabaseIcon from '@zeturn/watercolor-icons-lucide-react/Database'
import '@zeturn/watercolor-react/style.css'

<Icon component={DatabaseIcon} size={20} label="Database" />
```

Use `size` (`xs`, `sm`, `md`, `lg`, `xl`, a number or CSS length), `color`,
`strokeWidth`, `className` and `style` for presentation. Refs, events and SVG
attributes are forwarded to the supplied component. Provider-specific props such
as Phosphor `weight` retain the component's types.

Icons without an accessible name are decorative. Use `label`, `aria-label`,
`aria-labelledby` or `title` for meaningful icons. Inside a labelled button, keep
the icon decorative and put the accessible name on the button.

```tsx
import databaseSvg from '@zeturn/watercolor-icons-feather/Database'

<Icon html={databaseSvg} label="Database" />
<Icon label="Custom"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /></svg></Icon>
```

The former React `library/name` loader is removed. Import a leaf component and
pass `component` instead; do not pass an icon catalog namespace. For Next.js use
`@zeturn/watercolor-next/Icon` inside a Client Component when passing an imported
icon component. Root named imports remain supported.

See [the migration and build performance guide](../../../../../docs/guide/icon-performance.md).

# @zeturn/watercolor-icons-tabler-react

Independent React icon entries. This adapter imports no catalog at its root.

```tsx
import Icon from '@zeturn/watercolor-react/Icon'
import YourIcon from '@zeturn/watercolor-icons-tabler-react/IconDatabase'

<Icon component={YourIcon} label="Meaningful icon" />
```

React and @tabler/icons-react are peers. Install this adapter and its provider only when selected.
Use a single-icon subpath; the former getIcon(name) catalog lookup has been removed.
For finite application menus, createIconResolver accepts a small explicitly imported map.

See [migration and performance checks](../../docs/guide/icon-performance.md).

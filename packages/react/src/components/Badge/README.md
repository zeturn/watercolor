# Badge

## Introduction
The **Badge** component is a small status label that can display text or a dot to convey contextual information (counts, statuses, tags etc.).  
It supports multiple color themes, sizes and a *dot* mode, making it suitable for notifications, lists and UI indicators.

## Installation
Install Watercolor UI (which includes the Badge component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Badge } from 'watercolor-ui/react';

function Example() {
  return (
    <Badge variant="success" size="sm">
      New
    </Badge>
  );
}
```

### Vue 3
```vue
<script setup>
import { Badge } from 'watercolor-ui/vue';
</script>

<template>
  <Badge variant="success" size="sm">New</Badge>
</template>
```

### Dot mode
```jsx
<Badge variant="error" size="md" dot />
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "purple" \| "orange" \| "cyan" \| "pink"` | `'primary'` | Color theme of the badge. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Badge size. |
| `dot` | `boolean` | `false` | If `true`, renders a small colored dot instead of text. |
| `children / slot` | `string` \| `VNode` | — | Text or any custom content displayed inside the badge (ignored when `dot` is `true`). |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline style (React / Vue). |

> The React component passes any extra attributes (`...props`) to the underlying `<span>`.

## Events
The Badge is a purely presentational component and does not emit custom events.

## Styling
* Background colors rely on global CSS variables such as `--wc-primary-500`, `--wc-success-500` etc.  
* Text color uses `--wc-text-inverse`, ensuring readability on both light and dark themes.
* Dark-mode adaptation is automatic – simply toggle the `dark` class on the `<html>` element.

You can override palette variables or extend themes in `src/styles/index.css`.

## Notes
* When `dot` is enabled, size options control the diameter (8 px / 10 px / 12 px for *sm* / *md* / *lg*).
* Avoid long texts; badges are intended for short labels.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-06-29 
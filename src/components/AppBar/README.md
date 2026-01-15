
# AppBar

## Introduction
The **AppBar** component provides a top-level navigation bar typically used for application headers. It supports different positioning options, colors, elevation levels, and variants for flexible UI design.

## Installation
Install Watercolor UI (which includes the AppBar component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { AppBar } from 'watercolor-ui/react';

function Example() {
  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <div className="container flex items-center justify-between">
        <h1>My App</h1>
        <nav>Navigation Items</nav>
      </div>
    </AppBar>
  );
}
```

### Vue 3
```vue
<script setup>
import { AppBar } from 'watercolor-ui/vue';
</script>

<template>
  <AppBar position="fixed" color="primary" :elevation="4">
    <div class="container flex items-center justify-between">
      <h1>My App</h1>
      <nav>Navigation Items</nav>
    </div>
  </AppBar>
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `position` | `"fixed" \| "absolute" \| "sticky" \| "static" \| "relative"` | `'fixed'` | Positioning behavior of the AppBar. |
| `color` | `"primary" \| "secondary" \| "default" \| "transparent"` | `'primary'` | Color theme of the AppBar. |
| `elevation` | `number` (0-24) | `4` | Shadow depth level. |
| `variant` | `"elevation" \| "outlined"` | `'elevation'` | Visual style variant. |
| `children / slot` | `VNode` | — | Content to display inside the AppBar. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |

## Styling
* Background colors use CSS variables such as `--wc-primary-500`, `--wc-secondary-500`.
* Elevation creates box shadows for depth perception.
* Automatically adapts to dark mode when `dark` class is applied to `<html>`.

## Notes
* When using `position="fixed"`, ensure your page content has appropriate top padding to prevent overlap.
* The AppBar is responsive by default but does not include built-in responsive behavior for its children.
* Combine with Toolbar, IconButton, and Menu components for complete navigation solutions.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


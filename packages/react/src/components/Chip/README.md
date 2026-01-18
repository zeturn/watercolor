
# Chip

## Introduction
The **Chip** component is a compact element used to represent small pieces of information such as tags, categories, or selections. It supports avatars, delete actions, and various visual styles.

## Installation
Install Watercolor UI (which includes the Chip component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Chip } from 'watercolor-ui/react';

function Example() {
  return (
    <Chip label="React" variant="filled" color="primary" />
  );
}
```

### Vue 3
```vue
<script setup>
import { Chip } from 'watercolor-ui/vue';
</script>

<template>
  <Chip label="Vue" variant="filled" color="success" />
</template>
```

### With Avatar
```jsx
<Chip 
  label="John Doe" 
  avatar="https://example.com/avatar.jpg"
  variant="outlined" 
/>
```

### Deletable Chip
```jsx
<Chip 
  label="Removable" 
  deletable 
  onDelete={() => console.log('Deleted')}
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `label` | `string` | `''` | Text content of the chip. |
| `avatar` | `string` | `''` | URL for avatar image. |
| `deletable` | `boolean` | `false` | If `true`, shows delete icon. |
| `disabled` | `boolean` | `false` | If `true`, disables interaction. |
| `clickable` | `boolean` | `false` | If `true`, adds click interaction styling. |
| `variant` | `"filled" \| "outlined"` | `'filled'` | Visual style variant. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Chip size. |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "error"` | `'default'` | Color theme. |
| `deleteIcon` | `ReactNode \| VNode` | `null` | Custom delete icon element. |
| `children / slot` | `VNode` | — | Custom content (overrides label). |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClick` (React) / `click` (Vue) | `Event` | Fired when chip is clicked (if clickable). |
| `onDelete` (React) / `delete` (Vue) | `Event` | Fired when delete icon is clicked. |

## Styling
* Background colors use CSS variables such as `--wc-primary-500`.
* Automatically adapts to dark mode.
* Customize by overriding variables in `src/styles/index.css`.

## Notes
* Use `deletable` for removable tags in filter interfaces.
* Combine with avatar for user selections or contact lists.
* Keep labels concise for optimal visual design.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


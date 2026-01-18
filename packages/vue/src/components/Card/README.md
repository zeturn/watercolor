# Card

## Introduction
**Card** is a flexible container that groups related content and actions in a single surface. It supports multiple variants, colour themes, sizes and interactive hover effects.

## Installation
```bash
npm i watercolor-ui
```

> Import from `watercolor-ui/react` or `watercolor-ui/vue` depending on your framework.

## Usage

### React
```jsx
import { Card } from 'watercolor-ui/react';

export default function Demo() {
  return (
    <Card title="Card title" variant="elevated" color="primary">
      <p>Description or any custom content goes here.</p>
    </Card>
  );
}
```

### Vue 3
```vue
<script setup>
import { Card } from 'watercolor-ui/vue';
</script>

<template>
  <Card title="Card title" variant="outlined" size="large">
    <p>Description or any custom content goes here.</p>
  </Card>
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `title` | `string` | `''` | Optional title text shown in header. |
| `variant` | `'filled' \| 'outlined' \| 'minimal' \| 'elevated'` | `'filled'` | Visual style. |
| `color` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Background palette. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Padding scale. |
| `interactive` | `boolean` | `true` | Enables hover elevation / background. |
| `noBorder` | `boolean` | `true` | Removes border (outlined variant ignores this). |
| `header` (React) | `ReactNode` | — | Custom header content, overrides `title`. |
| `footer` | Slot / ReactNode | — | Footer area below content. |
| `onClick` | `(e) => void` | — | Click handler when `interactive` is `true`. |

## Slots (Vue)
* `header` – Custom header.  
* default – Main content.  
* `footer` – Footer content.

## Styling
* Background / colours rely on CSS variables such as `--wc-primary-50`, which switch automatically when the `dark` class is applied to `<html>`.  
* Root text colour uses `--wc-text-primary` and inherits in dark mode.  
* Hover styles are handled via `.wc-card--interactive` modifiers.

Override variables in `src/styles/index.css` or apply extra classes via `className / class`.

## Contribution
Pull requests & issues are welcome.

## License
ISC

## Reviewed by
Reviewed by @zeturn – 2025-06-29 
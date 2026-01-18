# Avatar

## Introduction
The **Avatar** component displays a user representation by showing either an image, initials extracted from a name, or any custom slot / React children.  
It supports multiple sizes, shapes (variants) and background color themes so you can fit almost any design requirement.

## Installation
Install Watercolor UI (which includes the Avatar component) through npm:

```bash
npm i watercolor-ui
```

> The component is exported for both **React** and **Vue 3**.  
> Refer to the corresponding entry point when importing.

## Usage

### React
```jsx
import { Avatar } from 'watercolor-ui/react';

export default function Example() {
  return (
    <Avatar
      src="https://example.com/avatar.jpg"
      alt="Jane Doe"
      size="lg"
      variant="circular"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { Avatar } from 'watercolor-ui/vue';
</script>

<template>
  <Avatar
    src="https://example.com/avatar.jpg"
    alt="Jane Doe"
    size="lg"
    variant="circular"
  />
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `src` | `string` | `''` | The image URL to display. When omitted or the image fails, the component falls back to text or slot/children. |
| `alt` | `string` | `''` | Alternative text for the image element. |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| number` | `'md'` | Pre-defined size or custom pixel value when a number is supplied. |
| `variant` | `"circular" \| "rounded" \| "square"` | `'circular'` | Shape of the avatar. |
| `color` | `"default" \| "primary" \| "secondary" \| "success" \| "warning" \| "error"` | `'default'` | Background color theme shown when there is no image. |
| `children / slot` | `string` | `''` | Text used to generate initials when `src` is empty or fails. |
| `className / class` | `string` | `''` | Extra CSS classes applied to the root element. |
| `style` | `object` | — | Inline style object for React / Vue. |

## Events
| Event | When | Arguments |
| ----- | ---- | --------- |
| `onError` (React) / `@error` (Vue) | The image fails to load. | `(event: Event)` |
| `onLoad` (React) / `@load` (Vue) | The image loads successfully. | `(event: Event)` |

## Styling
The component relies on CSS variables defined in `src/styles/index.css`.  
You can override any variable in your theme or add additional classes via the `className / class` prop.

The dark theme is applied automatically by toggling the `dark` class on the `<html>` (or `<body>`) element—no additional work required.

## Notes
* If the first character of `children` is a Chinese character, that character is rendered directly; otherwise, initials are generated (up to two characters).
* Provide a numeric `size` (e.g. `size={56}`) for precise control.

## Contribution
Feel free to open an issue or pull request if you find a bug or have a feature request.

## License
This component is released under the ISC License. 

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-06-29
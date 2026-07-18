
# Button

## Introduction
The **Button** component is a versatile interactive element that triggers actions when clicked. It supports multiple variants, styles, sizes, loading states, and icon placements, making it suitable for forms, toolbars, and general UI interactions.

## Installation
Install Watercolor UI (which includes the Button component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Button } from 'watercolor-ui/react';

function Example() {
  return (
    <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
      Click Me
    </Button>
  );
}
```

### Vue 3
```vue
<script setup>
import { Button } from 'watercolor-ui/vue';

const handleClick = () => {
  alert('Clicked!');
};
</script>

<template>
  <Button variant="primary" size="md" @click="handleClick">
    Click Me
  </Button>
</template>
```

### With Icons
```jsx
import { Button } from 'watercolor-ui/react';
import { Icon } from 'watercolor-ui/react';

<Button startIcon={<Icon name="plus" />} variant="success">
  Add Item
</Button>
```

### Loading State
```jsx
<Button loading variant="primary">
  Submitting...
</Button>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"primary" \| "secondary" \| "success" \| "warning" \| "error" \| "info" \| "default"` | `'primary'` | Color theme of the button. |
| `buttonStyle` | `"filled" \| "outlined" \| "text" \| "soft"` | `'filled'` | Visual style variant. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Button size. |
| `disabled` | `boolean` | `false` | If `true`, disables the button. |
| `loading` | `boolean` | `false` | If `true`, shows loading spinner and disables interaction. |
| `fullWidth` | `boolean` | `false` | If `true`, button takes full width of container. |
| `type` | `"button" \| "submit" \| "reset"` | `'button'` | HTML button type attribute. |
| `href` | `string` | `null` | If provided, renders as anchor tag. |
| `target` | `string` | `'_self'` | Link target (used with `href`). |
| `startIcon` | `ReactNode \| VNode` | `null` | Icon displayed before the button text. |
| `endIcon` | `ReactNode \| VNode` | `null` | Icon displayed after the button text. |
| `rounded` | `boolean` | `true` | If `true`, applies rounded corners. |
| `uppercase` | `boolean` | `false` | If `true`, transforms text to uppercase. |
| `ripple` | `boolean` | `true` | If `true`, enables ripple effect on click. |
| `children / slot` | `string \| VNode` | — | Button label or custom content. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClick` (React) / `click` (Vue) | `Event` | Fired when button is clicked. |
| `onMouseOver` / `mouseover` | `Event` | Fired when mouse enters button. |
| `onMouseOut` / `mouseout` | `Event` | Fired when mouse leaves button. |
| `onFocus` / `focus` | `Event` | Fired when button receives focus. |
| `onBlur` / `blur` | `Event` | Fired when button loses focus. |

## Styling
* Background colors use CSS variables such as `--wc-primary-500`, `--wc-success-500` etc.
* Automatically adapts to dark mode when `dark` class is applied to `<html>`.
* Customize by overriding variables in `src/styles/index.css`.

## Notes
* When `loading` is `true`, the button is automatically disabled.
* If `href` is provided, the component renders as an `<a>` tag instead of `<button>`.
* The ripple effect enhances user feedback on interaction.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


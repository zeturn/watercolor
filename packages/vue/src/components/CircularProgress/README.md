# CircularProgress

## Introduction
`CircularProgress` is a visual indicator for loading or progress in a circular form. It supports both **indeterminate** (spinning) and **determinate** (value-based) modes and is available for React and Vue with identical APIs.

## Installation
Install Watercolor UI (or copy the standalone component) via npm / yarn:

```bash
npm install @zeturn/watercolor-vue
# or
yarn add @zeturn/watercolor-vue
```

## Usage
Below are minimal examples for each framework.

### React
```jsx
import { CircularProgress } from '@zeturn/watercolor-react'

export default function Demo() {
  return (
    <CircularProgress variant="indeterminate" color="primary" size={40} />
  )
}
```

### Vue
```vue
<script setup>
import { CircularProgress } from '@zeturn/watercolor-vue'
</script>

<template>
  <CircularProgress variant="indeterminate" color="primary" :size="40" />
</template>
```

## Props
| Prop          | Type                                                                                                   | Default        | Description                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------ | -------------- | ----------------------------------------------------------------------------------------------- |
| `variant`     | `'indeterminate' \| 'determinate'`                                                                     | `'indeterminate'` | Loading style. `determinate` requires `value`; `indeterminate` shows a spinning animation.       |
| `value`       | `number` (0–100)                                                                                        | `0`            | Progress percentage for `determinate` variant. Ignored in `indeterminate` mode.                 |
| `size`        | `number \| string`                                                                                      | `40`           | Diameter in pixels (numeric) or any valid CSS value (string).                                    |
| `thickness`   | `number`                                                                                                | `3.6`          | Stroke width of the progress circle.                                                             |
| `color`       | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'inherit'`                           | `'primary'`    | Accent color. `inherit` makes the circle follow the current text color.                          |
| `showValue`   | `boolean`                                                                                               | `false`        | Whether to display the numeric percentage value inside the circle (determinate only).            |
| `className`   | `string` (React only)                                                                                   | `''`           | Additional CSS class names for the root element.                                                 |
| `...rest` / `v-bind` | Native HTML attributes                                                                          | —              | Spread onto the root `<div>` element.                                                            |

## Styling
The component relies on an accompanying `style.css` with BEM-like class names:

```css
.wc-circular-progress { /* root wrapper */ }
.wc-circular-progress-svg { /* svg container */ }
.wc-circular-progress-bg { /* background track */ }
.wc-circular-progress-circle { /* animated stroke */ }
.wc-circular-progress-value { /* percentage text */ }
```

Modifiers include:
- `wc-circular-progress--primary | --secondary | --success | --warning | --error | --inherit`
- `wc-circular-progress--indeterminate`
- `.dark` root selector for dark mode overrides

Override these classes or adjust CSS variables (e.g. `--wc-primary-500`) to match your theme.

## Accessibility
* Uses `role="progressbar"` with `aria-valuemin`, `aria-valuemax` and `aria-valuenow` (only in determinate mode).
* No keyboard interaction required.

## Notes
1. For `determinate` mode, ensure `value` stays between 0 and 100.
2. In `inherit` color mode, the circle inherits the current text color, making it easy to adapt to any context.
3. Dark mode is automatically supported via the `.dark` parent class.

## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
ISC © Watercolor UI

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
mm-dd-yyyy 

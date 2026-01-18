
# Box

## Introduction
The **Box** component is a versatile layout primitive that provides a convenient way to apply spacing, flexbox properties, colors, and sizing through props instead of writing custom CSS.

## Installation
Install Watercolor UI (which includes the Box component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Box } from 'watercolor-ui/react';

function Example() {
  return (
    <Box
      p={4}
      bgcolor="primary"
      color="white"
      borderRadius={8}
    >
      Content inside box
    </Box>
  );
}
```

### Vue 3
```vue
<script setup>
import { Box } from 'watercolor-ui/vue';
</script>

<template>
  <Box
    :p="4"
    bgcolor="primary"
    color="white"
    :borderRadius="8"
  >
    Content inside box
  </Box>
</template>
```

### Flexbox Layout
```jsx
<Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  gap={2}
>
  <div>Left</div>
  <div>Right</div>
</Box>
```

## Props

### Spacing
| Name | Type | Description |
| ---- | ---- | ----------- |
| `p` | `number \| string` | Padding (all sides). |
| `pt` | `number \| string` | Padding top. |
| `pr` | `number \| string` | Padding right. |
| `pb` | `number \| string` | Padding bottom. |
| `pl` | `number \| string` | Padding left. |
| `px` | `number \| string` | Padding horizontal (left & right). |
| `py` | `number \| string` | Padding vertical (top & bottom). |
| `m` | `number \| string` | Margin (all sides). |
| `mt` | `number \| string` | Margin top. |
| `mr` | `number \| string` | Margin right. |
| `mb` | `number \| string` | Margin bottom. |
| `ml` | `number \| string` | Margin left. |
| `mx` | `number \| string` | Margin horizontal (left & right). |
| `my` | `number \| string` | Margin vertical (top & bottom). |

### Flexbox & Layout
| Name | Type | Description |
| ---- | ---- | ----------- |
| `display` | `string` | CSS display property. |
| `flexDirection` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | Flex direction. |
| `justifyContent` | `string` | Flex justify-content. |
| `alignItems` | `string` | Flex align-items. |
| `flexWrap` | `"nowrap" \| "wrap" \| "wrap-reverse"` | Flex wrap behavior. |
| `gap` | `number \| string` | Gap between flex items. |

### Colors & Border
| Name | Type | Description |
| ---- | ---- | ----------- |
| `bgcolor` | `string` | Background color (CSS value or theme color). |
| `color` | `string` | Text color (CSS value or theme color). |
| `border` | `string` | Border shorthand. |
| `borderRadius` | `number \| string` | Border radius. |

### Size
| Name | Type | Description |
| ---- | ---- | ----------- |
| `width` | `string \| number` | Width. |
| `height` | `string \| number` | Height. |
| `minWidth` | `string \| number` | Minimum width. |
| `minHeight` | `string \| number` | Minimum height. |
| `maxWidth` | `string \| number` | Maximum width. |
| `maxHeight` | `string \| number` | Maximum height. |

### Other
| Name | Type | Description |
| ---- | ---- | ----------- |
| `component` | `string \| Component` | HTML element or component to render (default: `'div'`). |
| `className / class` | `string` | Additional CSS classes. |
| `style` | `object` | Additional inline styles. |

## Styling
* Spacing values are multiplied by a base unit (typically 8px).
* Theme color names (e.g., "primary", "success") are automatically resolved.
* All standard CSS values are supported.

## Notes
* Box is ideal for quick prototyping without writing custom CSS.
* Numeric spacing values are converted to pixels (e.g., `p={2}` → `padding: 16px`).
* Use `component` prop to render as different HTML elements (e.g., `component="section"`).

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


# Divider

Divider is a basic layout component used to visually separate content.

## Features

- 🎨 Multiple variants (`solid`, `dashed`, `dotted`)
- 📐 Horizontal and vertical orientations
- 📝 Optional inline text
- 🎯 `flexItem` support for flex containers
- 🔧 Theme variable support

## Usage

### React

```jsx
import { Divider } from '@zeturn/watercolor-react'

// Basic divider
<Divider />

// Dashed divider
<Divider variant="dashed" />

// Vertical divider
<Divider orientation="vertical" />

// Divider with text
<Divider>Or</Divider>

// Inside a flex container
<div style={{ display: 'flex' }}>
  <div>Content 1</div>
  <Divider orientation="vertical" flexItem />
  <div>Content 2</div>
</div>
```

### Vue

```vue
<template>
  <!-- Basic divider -->
  <Divider />

  <!-- Dashed divider -->
  <Divider variant="dashed" />

  <!-- Vertical divider -->
  <Divider orientation="vertical" />

  <!-- Divider with text -->
  <Divider>Or</Divider>

  <!-- Inside a flex container -->
  <div style="display: flex">
    <div>Content 1</div>
    <Divider orientation="vertical" flex-item />
    <div>Content 2</div>
  </div>
</template>

<script setup>
import { Divider } from '@zeturn/watercolor-vue'
</script>
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | String | `'solid'` | Divider style variant: `solid` / `dashed` / `dotted` |
| `orientation` | String | `'horizontal'` | Direction: `horizontal` / `vertical` |
| `flexItem` | Boolean | `false` | Whether it should behave as a flex item (useful in flex layouts) |
| `children` / `slot` | ReactNode / VNode | - | Text/content rendered inside the divider |

## Theme variables

- `--wc-divider-color`: Divider color (default: `--wc-border-color`)
- `--wc-spacing-md`: Outer spacing (default: 16px)
- `--wc-spacing-sm`: Inner spacing (default: 8px)
- `--wc-font-size-sm`: Text size (default: 14px)
- `--wc-text-secondary`: Text color (default: #666)

## CSS classes

- `.wc-divider`: Base
- `.wc-divider--solid`: Solid style
- `.wc-divider--dashed`: Dashed style
- `.wc-divider--dotted`: Dotted style
- `.wc-divider--horizontal`: Horizontal
- `.wc-divider--vertical`: Vertical
- `.wc-divider--flex-item`: Flex-item behavior
- `.wc-divider--with-text`: With text
- `.wc-divider__text`: Text element

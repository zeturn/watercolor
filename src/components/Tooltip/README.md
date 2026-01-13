# Tooltip

A lightweight tooltip component that displays informative text when hovering over an element.

## Features

- Multiple placement options (top, bottom, left, right)
- Smooth fade animations
- Simple and easy to use
- Lightweight and performant

## Basic Usage

### React

```jsx
import { Tooltip } from '@zeturn/watercolor'

function App() {
  return (
    <Tooltip text="This is a helpful tooltip" placement="top">
      <button>Hover me</button>
    </Tooltip>
  )
}
```

### Vue

```vue
<template>
  <Tooltip text="This is a helpful tooltip" placement="top">
    <button>Hover me</button>
  </Tooltip>
</template>

<script setup>
import { Tooltip } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | The tooltip content to display |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the tooltip relative to the target element |
| `children` | `ReactNode \| VNode` | - | The element that triggers the tooltip |
| `className` | `string` | `''` | Additional CSS classes |

## Placement Options

### Top Placement (Default)

```jsx
<Tooltip text="Tooltip on top" placement="top">
  <button>Top</button>
</Tooltip>
```

### Bottom Placement

```jsx
<Tooltip text="Tooltip on bottom" placement="bottom">
  <button>Bottom</button>
</Tooltip>
```

### Left Placement

```jsx
<Tooltip text="Tooltip on left" placement="left">
  <button>Left</button>
</Tooltip>
```

### Right Placement

```jsx
<Tooltip text="Tooltip on right" placement="right">
  <button>Right</button>
</Tooltip>
```

## Examples

### With Icon Button

```jsx
<Tooltip text="Settings">
  <button className="icon-btn">⚙️</button>
</Tooltip>
```

### With Disabled Element

```jsx
<Tooltip text="This action is not available">
  <button disabled>Disabled</button>
</Tooltip>
```

### Long Text Tooltip

```jsx
<Tooltip text="This is a longer tooltip with more detailed information">
  <span>Info</span>
</Tooltip>
```

## Styling

The component uses Watercolor's CSS classes for consistent styling:

- `wc-tooltip-wrapper` - Wrapper container
- `wc-tooltip` - Tooltip bubble
- Placement-specific classes for positioning

## Accessibility

- The tooltip appears on hover and focus
- Uses proper z-index for stacking
- Smooth animations for better UX

## Best Practices

1. **Keep it Short**: Tooltips should contain brief, helpful information
2. **Don't Duplicate**: Avoid repeating text that's already visible
3. **Placement**: Choose placement that doesn't obscure important content
4. **Timing**: Default timing works for most cases

## Notes

- The tooltip automatically positions itself based on the `placement` prop
- Uses CSS transitions for smooth show/hide animations
- The tooltip is positioned absolutely relative to its wrapper
- Validates placement prop and falls back to 'top' if invalid

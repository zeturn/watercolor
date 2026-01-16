# Typography

A comprehensive typography component that provides consistent text styling across your application.

## Features

- Multiple typography variants (h1-h6, body, caption, etc.)
- Color presets aligned with theme
- Text alignment options
- Responsive font sizing
- Dark mode support
- Semantic HTML elements

## Basic Usage

### React

```jsx
import { Typography } from '@zeturn/watercolor'

function App() {
  return (
    <Typography variant="h1">
      Welcome
    </Typography>
  )
}
```

### Vue

```vue
<template>
  <Typography variant="h1">
    Welcome
  </Typography>
</template>

<script setup>
import { Typography } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'subtitle1' \| 'subtitle2' \| 'body1' \| 'body2' \| 'caption' \| 'overline' \| 'button'` | `'body1'` | Typography variant |
| `component` | `string` | - | Override the HTML element |
| `color` | `'inherit' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'textPrimary' \| 'textSecondary' \| 'textDisabled'` | `'inherit'` | Text color |
| `align` | `'left' \| 'center' \| 'right' \| 'justify' \| 'inherit'` | `'inherit'` | Text alignment |
| `gutterBottom` | `boolean` | `false` | Add bottom margin |
| `noWrap` | `boolean` | `false` | Prevent text wrapping |
| `children` | `ReactNode \| VNode` | - | Content to display |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Variants

### Headings

```jsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
```

### Subtitles

```jsx
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>
```

### Body Text

```jsx
<Typography variant="body1">Regular body text</Typography>
<Typography variant="body2">Smaller body text</Typography>
```

### Special Variants

```jsx
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">Overline text</Typography>
<Typography variant="button">Button text</Typography>
```

## Color Options

### Theme Colors

```jsx
<Typography color="primary">Primary color</Typography>
<Typography color="secondary">Secondary color</Typography>
<Typography color="success">Success color</Typography>
<Typography color="warning">Warning color</Typography>
<Typography color="error">Error color</Typography>
```

### Text Colors

```jsx
<Typography color="textPrimary">Primary text</Typography>
<Typography color="textSecondary">Secondary text</Typography>
<Typography color="textDisabled">Disabled text</Typography>
```

## Alignment

```jsx
<Typography align="left">Left aligned</Typography>
<Typography align="center">Center aligned</Typography>
<Typography align="right">Right aligned</Typography>
<Typography align="justify">Justified text</Typography>
```

## Examples

### Page Title

```jsx
<Typography variant="h1" color="primary" gutterBottom>
  Welcome to Our App
</Typography>
```

### Section Header

```jsx
<Typography variant="h3" gutterBottom>
  Features
</Typography>
<Typography variant="body1" color="textSecondary">
  Discover what makes us different
</Typography>
```

### Card Content

```jsx
<div className="card">
  <Typography variant="h5" gutterBottom>
    Card Title
  </Typography>
  <Typography variant="body2" color="textSecondary">
    Card description goes here
  </Typography>
</div>
```

### Custom Component

```jsx
<Typography variant="h2" component="span">
  Renders as span with h2 styling
</Typography>
```

### No Wrap Text

```jsx
<Typography noWrap>
  This is a very long text that will not wrap to the next line
</Typography>
```

### Error Message

```jsx
<Typography variant="body2" color="error">
  Please enter a valid email address
</Typography>
```

### Success Message

```jsx
<Typography variant="body1" color="success">
  Your changes have been saved
</Typography>
```

## Typography Hierarchy

```jsx
<article>
  <Typography variant="h1" gutterBottom>
    Article Title
  </Typography>
  
  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
    By John Doe • March 15, 2026
  </Typography>
  
  <Typography variant="body1" gutterBottom>
    First paragraph of content...
  </Typography>
  
  <Typography variant="h3" gutterBottom>
    Section Heading
  </Typography>
  
  <Typography variant="body1">
    Section content...
  </Typography>
</article>
```

## Default HTML Elements

| Variant | Default Element |
|---------|----------------|
| `h1` | `<h1>` |
| `h2` | `<h2>` |
| `h3` | `<h3>` |
| `h4` | `<h4>` |
| `h5` | `<h5>` |
| `h6` | `<h6>` |
| `subtitle1` | `<h6>` |
| `subtitle2` | `<h6>` |
| `body1` | `<p>` |
| `body2` | `<p>` |
| `caption` | `<span>` |
| `overline` | `<span>` |
| `button` | `<span>` |

## Styling

The component uses Tailwind-style utility classes for consistent styling across the app.

## Accessibility

- Uses semantic HTML elements by default
- Supports custom component override
- Proper heading hierarchy
- Color contrast meets WCAG standards

## Responsive Design

Typography scales appropriately across different screen sizes using responsive Tailwind classes.

## Dark Mode

All color variants support dark mode with appropriate color adjustments.

## Best Practices

1. **Hierarchy**: Use proper heading hierarchy (h1 → h2 → h3)
2. **Consistency**: Stick to defined variants for consistency
3. **Color**: Use semantic color names
4. **Spacing**: Use `gutterBottom` for consistent spacing
5. **Accessibility**: Don't skip heading levels

## Notes

- Font sizes are predefined for consistency
- Line heights are automatically calculated per variant
- Supports both light and dark themes
- Can be customized via CSS variables


# Grid

## Introduction
The **Grid** component provides a responsive grid layout system based on flexbox, allowing you to create complex layouts with ease. It supports breakpoints and flexible column configurations.

## Installation
Install Watercolor UI (which includes the Grid component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Grid } from 'watercolor-ui/react';

function Example() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div>Column 1</div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>Column 2</div>
      </Grid>
    </Grid>
  );
}
```

### Vue 3
```vue
<script setup>
import { Grid } from 'watercolor-ui/vue';
</script>

<template>
  <Grid container :spacing="2">
    <Grid item :xs="12" :md="6">
      <div>Column 1</div>
    </Grid>
    <Grid item :xs="12" :md="6">
      <div>Column 2</div>
    </Grid>
  </Grid>
</template>
```

### Responsive Layout
```jsx
<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <div>Responsive Column</div>
  </Grid>
  {/* Repeat for more columns */}
</Grid>
```

## Props

### Grid Container Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `container` | `boolean` | `false` | If `true`, acts as a grid container. |
| `spacing` | `number` (0-10) | `0` | Spacing between items (in 8px units). |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `'row'` | Flex direction. |
| `justifyContent` | `"flex-start" \| "center" \| "flex-end" \| "space-between" \| "space-around" \| "space-evenly"` | `'flex-start'` | Horizontal alignment. |
| `alignItems` | `"flex-start" \| "center" \| "flex-end" \| "stretch" \| "baseline"` | `'stretch'` | Vertical alignment. |
| `className / class` | `string` | `''` | Additional CSS classes. |

### Grid Item Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `item` | `boolean` | `false` | If `true`, acts as a grid item. |
| `xs` | `number` (1-12) | — | Column span at extra small screens (0-640px). |
| `sm` | `number` (1-12) | — | Column span at small screens (640px+). |
| `md` | `number` (1-12) | — | Column span at medium screens (768px+). |
| `lg` | `number` (1-12) | — | Column span at large screens (1024px+). |
| `xl` | `number` (1-12) | — | Column span at extra large screens (1280px+). |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Spacing Values
| Value | Gap |
| ----- | --- |
| `1` | 8px |
| `2` | 16px |
| `3` | 24px |
| `4` | 32px |
| `5` | 40px |

## Grid System
* Based on 12-column layout
* Each breakpoint supports 1-12 columns
* Responsive by default
* Mobile-first design approach

## Examples

### Equal Width Columns
```jsx
<Grid container spacing={2}>
  <Grid item xs={4}>Column 1</Grid>
  <Grid item xs={4}>Column 2</Grid>
  <Grid item xs={4}>Column 3</Grid>
</Grid>
```

### Responsive Dashboard
```jsx
<Grid container spacing={3}>
  {/* Full width on mobile, half on tablet, third on desktop */}
  <Grid item xs={12} md={6} lg={4}>
    <Card>Widget 1</Card>
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <Card>Widget 2</Card>
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <Card>Widget 3</Card>
  </Grid>
</Grid>
```

### Nested Grids
```jsx
<Grid container spacing={2}>
  <Grid item xs={12} md={8}>
    <Grid container spacing={1}>
      <Grid item xs={6}>Nested 1</Grid>
      <Grid item xs={6}>Nested 2</Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={4}>
    Sidebar
  </Grid>
</Grid>
```

## Styling
* Uses flexbox for layout.
* Automatically adapts to screen size.
* Supports custom spacing between items.

## Notes
* Always use `container` prop on parent and `item` prop on children.
* Column numbers must add up to 12 for full-width rows.
* Unspecified breakpoints inherit from smaller breakpoints.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


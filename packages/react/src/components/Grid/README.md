
# Grid

## Introduction
The **Grid** component provides a responsive 12-column layout based on native CSS Grid. It supports mobile-first breakpoints and falls back to flexbox only for explicit column directions.

## Installation
Install Watercolor UI (which includes the Grid component):

```bash
npm install @zeturn/watercolor-react
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
| `spacing` | `number` (0-12) | `0` | Spacing between items (in 4px units). |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"` | `'row'` | Layout direction. |
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
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `5` | 20px |

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
* Uses native CSS Grid for the standard row layout.
* Automatically adapts to screen size.
* Supports custom spacing between items.

## Notes
* Always use `container` prop on parent and `item` prop on children.
* Column numbers must add up to 12 for full-width rows.
* Unspecified breakpoints inherit from smaller breakpoints.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13

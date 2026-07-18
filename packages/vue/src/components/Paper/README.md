
# Paper

## Introduction
The **Paper** component provides a surface with elevation (shadow) or outlined styling, creating visual hierarchy and depth in your UI. It's ideal for cards, panels, and content containers.

## Installation
Install Watercolor UI (which includes the Paper component):

```bash
npm install @zeturn/watercolor-vue
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Paper } from 'watercolor-ui/react';

function Example() {
  return (
    <Paper elevation={3}>
      <div style={{ padding: '20px' }}>
        Content with elevation
      </div>
    </Paper>
  );
}
```

### Vue 3
```vue
<script setup>
import { Paper } from 'watercolor-ui/vue';
</script>

<template>
  <Paper :elevation="3">
    <div style="padding: 20px">
      Content with elevation
    </div>
  </Paper>
</template>
```

### Outlined Variant
```jsx
<Paper variant="outlined">
  <div style={{ padding: '20px' }}>
    Content with border
  </div>
</Paper>
```

### Interactive Paper
```jsx
<Paper 
  elevation={2}
  hoverable
  clickable
  onClick={() => console.log('Clicked!')}
>
  <div style={{ padding: '20px' }}>
    Click me!
  </div>
</Paper>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"elevation" \| "outlined"` | `'elevation'` | Visual style variant. |
| `elevation` | `number` (0-24) | `1` | Shadow depth level (elevation variant only). |
| `square` | `boolean` | `false` | If `true`, removes border radius. |
| `hoverable` | `boolean` | `false` | If `true`, adds hover effect. |
| `clickable` | `boolean` | `false` | If `true`, adds pointer cursor and click styling. |
| `color` | `string` | `'default'` | Color theme (affects background). |
| `size` | `string` | `null` | Optional size variant. |
| `children` | `VNode` | — | Content inside the paper. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClick` / `click` | `Event` | Fired when paper is clicked (if clickable). |
| `onMouseEnter` / `mouseenter` | `Event` | Fired when mouse enters. |
| `onMouseLeave` / `mouseleave` | `Event` | Fired when mouse leaves. |

## Elevation Levels
* `0` - No shadow (flat)
* `1-4` - Subtle shadows (cards, buttons)
* `5-8` - Moderate shadows (dialogs, popovers)
* `9-16` - Strong shadows (floating elements)
* `17-24` - Very strong shadows (modals, overlays)

## Styling
* Uses CSS box-shadow for elevation.
* Automatically adapts to dark mode.
* Outlined variant uses border instead of shadow.

## Examples

### Card-like Paper
```jsx
<Paper elevation={2}>
  <div style={{ padding: '24px' }}>
    <h2>Card Title</h2>
    <p>Card content goes here.</p>
  </div>
</Paper>
```

### Clickable Card
```jsx
<Paper 
  elevation={1}
  hoverable
  clickable
  onClick={() => navigate('/details')}
>
  <div style={{ padding: '20px' }}>
    <h3>Product Name</h3>
    <p>Click to view details</p>
  </div>
</Paper>
```

### Flat Surface
```jsx
<Paper elevation={0} square>
  <div style={{ padding: '16px' }}>
    Flat surface without shadow or rounded corners
  </div>
</Paper>
```

## Notes
* Use elevation to create visual hierarchy.
* Higher elevation values indicate elements that are "closer" to the user.
* `outlined` variant is useful for subtle separation without shadows.
* Combine `hoverable` and `clickable` for interactive cards.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


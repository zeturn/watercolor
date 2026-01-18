
# Skeleton

## Introduction
The **Skeleton** component displays placeholder loading states while content is being fetched. It provides visual feedback that content is loading, improving perceived performance.

## Installation
Install Watercolor UI (which includes the Skeleton component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Skeleton } from 'watercolor-ui/react';

function Example() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return (
      <div>
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" width={150} />
        <Skeleton variant="rectangular" height={200} />
      </div>
    );
  }
  
  return <div>Loaded content...</div>;
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Skeleton } from 'watercolor-ui/vue';

const loading = ref(true);
</script>

<template>
  <div v-if="loading">
    <Skeleton variant="text" :width="200" />
    <Skeleton variant="text" :width="150" />
    <Skeleton variant="rectangular" :height="200" />
  </div>
  <div v-else>Loaded content...</div>
</template>
```

### Avatar Placeholder
```jsx
<Skeleton variant="circular" width={40} height={40} />
```

### Card Placeholder
```jsx
<div>
  <Skeleton variant="rectangular" height={200} />
  <Skeleton variant="text" width="80%" />
  <Skeleton variant="text" width="60%" />
</div>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"text" \| "rectangular" \| "rounded" \| "circular"` | `'text'` | Skeleton shape variant. |
| `animation` | `"pulse" \| "wave" \| false` | `'pulse'` | Animation type (false to disable). |
| `width` | `number \| string` | — | Skeleton width (auto-sized if not specified). |
| `height` | `number \| string` | — | Skeleton height (auto-sized if not specified). |
| `component` | `string \| Component` | `'div'` | HTML element to render. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |

## Variant Descriptions
| Variant | Use Case | Default Size |
| ------- | -------- | ------------ |
| `text` | Text lines | 100% width × 16px height |
| `rectangular` | Images, cards, blocks | 100% width × 118px height |
| `rounded` | Cards with rounded corners | 100% width × 118px height |
| `circular` | Avatars, icons | 40px × 40px |

## Animation Types
* **pulse**: Gentle opacity fade in/out
* **wave**: Shimmer effect moving left to right
* **false**: No animation (static)

## Styling
* Uses CSS variables for colors.
* Automatically adapts to dark mode.
* Smooth animations for loading states.

## Examples

### User Profile Skeleton
```jsx
<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Skeleton variant="circular" width={64} height={64} />
  <div style={{ flex: 1 }}>
    <Skeleton variant="text" width="60%" height={24} />
    <Skeleton variant="text" width="40%" height={16} />
  </div>
</div>
```

### Card List Skeleton
```jsx
{[1, 2, 3].map(i => (
  <div key={i} style={{ marginBottom: '16px' }}>
    <Skeleton variant="rectangular" height={120} />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="text" width="60%" />
  </div>
))}
```

### Table Skeleton
```jsx
<div>
  {[1, 2, 3, 4, 5].map(i => (
    <Skeleton key={i} variant="text" height={40} style={{ marginBottom: '8px' }} />
  ))}
</div>
```

## Notes
* Use skeletons to match the shape and layout of the actual content.
* Combine multiple skeletons to create complex loading states.
* Skeleton automatically adjusts colors for light/dark themes.
* Animation can be disabled for better performance on low-end devices.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


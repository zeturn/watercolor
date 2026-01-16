# SlideOver

A slide-over panel component that slides in from the edge of the screen, commonly used for navigation menus, filters, or detailed views.

## Features

- Slides in from left or right
- Smooth animations
- Overlay backdrop with click-to-close
- Customizable width and position
- Portal-based rendering
- Focus management

## Basic Usage

### React

```jsx
import { useState } from 'react'
import { SlideOver } from '@zeturn/watercolor'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Panel</button>
      
      <SlideOver
        open={open}
        onClose={() => setOpen(false)}
        title="Panel Title"
      >
        <p>Panel content goes here</p>
      </SlideOver>
    </>
  )
}
```

### Vue

```vue
<template>
  <div>
    <button @click="open = true">Open Panel</button>
    
    <SlideOver
      v-model="open"
      title="Panel Title"
    >
      <p>Panel content goes here</p>
    </SlideOver>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { SlideOver } from '@zeturn/watercolor'

const open = ref(false)
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls the visibility of the slide-over (React) |
| `modelValue` | `boolean` | - | Controls visibility using v-model (Vue) |
| `position` | `'left' \| 'right'` | `'right'` | Which side the panel slides from |
| `title` | `string` | `''` | Optional title displayed in the header |
| `width` | `string \| number` | `'400px'` | Width of the panel |
| `closeOnOverlay` | `boolean` | `true` | Whether clicking the backdrop closes the panel |
| `showCloseButton` | `boolean` | `true` | Whether to show the close button |
| `onClose` | `function` | - | Callback when the panel is closed |
| `onUpdateModelValue` | `function` | - | Vue v-model update callback |
| `children` | `ReactNode \| VNode` | - | Content of the slide-over panel |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Right Side Panel (Default)

```jsx
<SlideOver
  open={open}
  onClose={() => setOpen(false)}
  title="Settings"
>
  <div className="settings-content">
    {/* Settings options */}
  </div>
</SlideOver>
```

### Left Side Panel

```jsx
<SlideOver
  open={open}
  onClose={() => setOpen(false)}
  position="left"
  title="Navigation"
>
  <nav>
    {/* Navigation menu */}
  </nav>
</SlideOver>
```

### Custom Width

```jsx
<SlideOver
  open={open}
  onClose={() => setOpen(false)}
  width="600px"
  title="Wide Panel"
>
  <div>Content for a wider panel</div>
</SlideOver>
```

### Without Close Button

```jsx
<SlideOver
  open={open}
  onClose={() => setOpen(false)}
  showCloseButton={false}
>
  <div>
    <p>Custom close handling</p>
    <button onClick={() => setOpen(false)}>Close</button>
  </div>
</SlideOver>
```

### Prevent Backdrop Close

```jsx
<SlideOver
  open={open}
  onClose={() => setOpen(false)}
  closeOnOverlay={false}
>
  <div>Must use close button to dismiss</div>
</SlideOver>
```

### Filter Panel

```jsx
<SlideOver
  open={filtersOpen}
  onClose={() => setFiltersOpen(false)}
  title="Filters"
  width="350px"
>
  <form>
    <div className="filter-group">
      <label>Category</label>
      <select>...</select>
    </div>
    <div className="filter-group">
      <label>Price Range</label>
      <input type="range" />
    </div>
  </form>
</SlideOver>
```

### Shopping Cart

```jsx
<SlideOver
  open={cartOpen}
  onClose={() => setCartOpen(false)}
  title="Shopping Cart"
  width="450px"
>
  <div className="cart-items">
    {/* Cart items list */}
  </div>
  <div className="cart-footer">
    <button>Checkout</button>
  </div>
</SlideOver>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-slideover` - Main container
- `wc-slideover--left` / `wc-slideover--right` - Position variants
- `wc-slideover__overlay` - Backdrop overlay
- `wc-slideover__panel` - The panel content area
- `wc-slideover__header` - Header section
- `wc-slideover__body` - Body content area

## Accessibility

- Renders in a portal to avoid z-index issues
- Focuses the panel when opened
- Supports keyboard navigation
- Proper ARIA attributes
- ESC key closes the panel

## Animation

The panel uses smooth slide-in/slide-out animations:
- Slides from the specified side
- Backdrop fades in/out
- Configurable animation timing

## Best Practices

1. **Content Organization**: Keep the panel focused on a single task
2. **Width**: Choose appropriate width based on content needs
3. **Mobile**: Consider responsive behavior for smaller screens
4. **Navigation**: Provide clear ways to close or navigate
5. **Performance**: Portal rendering prevents layout issues

## Notes

- Uses React Portal / Vue Teleport for rendering
- Prevents body scroll when open
- Automatically handles z-index stacking
- Smooth animations with CSS transitions
- Supports both controlled and uncontrolled modes in React

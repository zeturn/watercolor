# Status

The Status component renders a small dot indicator for representing state. It supports multiple status types, sizes, and optional animations.

## Features

- 🎯 Multiple status types: default, success, error, warning, info, pending, processing, cancelled
- 📏 Three sizes: small (`sm`), medium (`md`), large (`lg`)
- ✨ Multiple animation effects: pulse, spin, bounce, blink, shake, breathe, ripple, glow
- 🏷️ Optional text label
- 🌓 Dark mode support
- ♿ Accessibility-friendly

## Basic usage

### Vue

```vue
<template>
  <div>
    <!-- Basic usage -->
    <Status status="success" />

    <!-- With text label and auto animation -->
    <Status status="processing" show-text animated />

    <!-- Custom size and explicit animation -->
    <Status status="error" size="lg" show-text animated animation-type="shake" />
  </div>
</template>

<script setup>
import { Status } from 'watercolor-ui'
</script>
```

### React

```jsx
import React from 'react'
import { Status } from 'watercolor-ui/react'

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Status status="success" />

      {/* With text label and auto animation */}
      <Status status="processing" showText animated />

      {/* Custom size and explicit animation */}
      <Status status="error" size="lg" showText animated animationType="shake" />
    </div>
  )
}
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `string` | `'default'` | Status type |
| `size` | `string` | `'md'` | Size |
| `showText` | `boolean` | `false` | Whether to show the status text label |
| `animated` | `boolean` | `false` | Whether to enable animation |
| `animationType` | `string` | `'auto'` | Animation type (see table below) |
| `className` | `string` | `''` | Extra CSS class names (React only) |

### Animation types

| Value | Description | Typical use |
|------|-------------|-------------|
| `auto` | Selects an animation based on status | Recommended default |
| `pulse` | Pulse (scale + opacity) | Pending / waiting |
| `spin` | Spin | Processing |
| `bounce` | Bounce | Success |
| `blink` | Blink | Warning |
| `shake` | Shake | Error |
| `breathe` | Slow pulse | Cancelled |
| `ripple` | Ripple | Info |
| `glow` | Glow | Default |

### Status types

| Value | Description | Color |
|------|-------------|-------|
| `default` | Default | Gray |
| `success` | Success | Green |
| `error` | Error / failure | Red |
| `warning` | Warning | Orange |
| `info` | Info | Blue |
| `pending` | Pending | Purple |
| `processing` | Processing | Cyan |
| `cancelled` | Cancelled | Gray |

### Sizes

| Value | Dot size | Text size |
|------|----------|----------|
| `sm` | 8px | 12px |
| `md` | 12px | 14px |
| `lg` | 16px | 16px |

## Animations

The component supports 8 different animation types.

### Auto mapping

When `animationType="auto"`, the component picks a sensible animation for each status:

- **success** → `bounce`
- **error** → `shake`
- **warning** → `blink`
- **info** → `ripple`
- **pending** → `pulse`
- **processing** → `spin`
- **cancelled** → `breathe`
- **default** → `glow`

### Custom animation

You can assign any animation type to any status:

```vue
<!-- Vue: use pulse animation for success -->
<Status status="success" animated animation-type="pulse" />
```

```jsx
/* React: use blink animation for error */
<Status status="error" animated animationType="blink" />
```

## Styling

### CSS variables

```css
.wc-status {
  --wc-primary-500: #3b82f6;
  --wc-success-500: #10b981;
  --wc-error-500: #ef4444;
  --wc-warning-500: #f59e0b;
  --wc-neutral-400: #9ca3af;
  --wc-purple-500: #8b5cf6;
  --wc-cyan-500: #06b6d4;
  --wc-text-primary: #374151;
}
```

### Custom styles

```css
/* Custom status color */
.wc-status--custom::before {
  background-color: #ff6b6b;
}

/* Custom animation */
.wc-status--custom-animated::before {
  animation: customPulse 1.5s infinite;
}

@keyframes customPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

## Accessibility

- The component provides a `title` attribute for status description
- Keyboard navigation friendly
- Screen reader friendly

## Best practices

1. **Consistency:** use status types consistently across your app
2. **Animation:**
   - Prefer `auto` for sensible defaults
   - Avoid too many animations in static lists
   - Respect user preferences (prefers-reduced-motion)
3. **Text labels:** enable when the meaning needs to be explicit
4. **Contrast:** ensure sufficient contrast against the background
5. **Sizing:** choose sizes appropriate to the context
6. **Performance:** be mindful when rendering many animated indicators

## Example scenarios

```vue
<!-- User presence -->
<div class="user-item">
  <Avatar :src="user.avatar" />
  <span>{{ user.name }}</span>
  <Status :status="user.isOnline ? 'success' : 'default'" size="sm" />
</div>

<!-- Task progress -->
<div class="task-item">
  <span>Data processing task</span>
  <Status status="processing" show-text animated />
</div>

<!-- Service health -->
<div class="service-status">
  <h3>System services</h3>
  <div class="status-list">
    <div>API <Status status="success" show-text /></div>
    <div>Database <Status status="warning" show-text /></div>
    <div>Cache <Status status="error" show-text /></div>
  </div>
</div>
```
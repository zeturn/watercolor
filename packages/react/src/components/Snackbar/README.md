
# Snackbar

## Introduction
The **Snackbar** component displays brief messages at the bottom (or other positions) of the screen. It's commonly used for notifications, confirmations, and temporary alerts that don't require user action.

## Installation
Install Watercolor UI (which includes the Snackbar component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Snackbar } from 'watercolor-ui/react';

function Example() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Show Snackbar</button>
      
      <Snackbar
        open={open}
        message="Action completed successfully!"
        severity="success"
        onClose={() => setOpen(false)}
        autoHideDuration={6000}
      />
    </>
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Snackbar } from 'watercolor-ui/vue';

const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = true">Show Snackbar</button>
  
  <Snackbar
    v-model="isOpen"
    message="Action completed successfully!"
    severity="success"
    :autoHideDuration="6000"
  />
</template>
```

### With Action Button
```jsx
<Snackbar
  open={open}
  message="Email deleted"
  severity="info"
  action="UNDO"
  onAction={() => console.log('Undo clicked')}
  onClose={() => setOpen(false)}
/>
```

### With Progress
```jsx
<Snackbar
  open={open}
  message="Processing your request..."
  severity="info"
  showProgress
  autoHideDuration={5000}
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `open` / `modelValue` | `boolean` | `false` | Controls snackbar visibility. |
| `message` | `string` | `''` | Message text to display. |
| `title` | `string` | `''` | Optional title text. |
| `severity` | `"success" \| "info" \| "warning" \| "error"` | `'info'` | Message severity type. |
| `variant` | `"filled" \| "outlined" \| "standard"` | `'filled'` | Visual style variant. |
| `autoHideDuration` | `number` | `6000` | Auto-hide delay in milliseconds (0 = no auto-hide). |
| `anchorOrigin` | `object` | `{vertical: 'bottom', horizontal: 'left'}` | Snackbar position. |
| `action` | `string` | `''` | Action button label. |
| `closable` | `boolean` | `true` | If `true`, shows close button. |
| `showIcon` | `boolean` | `true` | If `true`, shows severity icon. |
| `showProgress` | `boolean` | `false` | If `true`, shows progress indicator. |
| `children` | `VNode` | — | Custom content. |

## Anchor Origin Options
```javascript
{
  vertical: 'top' | 'bottom',
  horizontal: 'left' | 'center' | 'right'
}
```

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClose` / `close` | `void` | Fired when snackbar closes. |
| `onAction` / `action` | `void` | Fired when action button is clicked. |
| `onUpdateModelValue` / `update:modelValue` | `boolean` | Fired when visibility changes (Vue). |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Positioned above other content with high z-index.

## Notes
* Snackbar automatically hides after `autoHideDuration` milliseconds.
* Set `autoHideDuration={0}` to prevent auto-hide.
* Use `severity` to convey the importance and type of message.
* Multiple snackbars can be stacked using a queue system.

## Examples

### Success Notification
```jsx
<Snackbar
  open={saved}
  message="Changes saved successfully"
  severity="success"
  onClose={() => setSaved(false)}
/>
```

### Error Message
```jsx
<Snackbar
  open={error}
  message="Failed to connect to server"
  severity="error"
  closable
  autoHideDuration={0}
/>
```

### Positioned Snackbar
```jsx
<Snackbar
  open={open}
  message="Notification"
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
/>
```

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


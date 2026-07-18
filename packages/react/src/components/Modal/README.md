
# Modal

## Introduction
The **Modal** (also known as Dialog) component displays content in a layer above the main application. It's commonly used for alerts, confirmations, forms, and detailed information that requires user focus.

## Installation
Install Watercolor UI (which includes the Modal component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Modal } from 'watercolor-ui/react';

function Example() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmation"
        size="md"
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Modal } from 'watercolor-ui/vue';

const isOpen = ref(false);
</script>

<template>
  <button @click="isOpen = true">Open Modal</button>
  
  <Modal
    v-model:open="isOpen"
    title="Confirmation"
    size="md"
  >
    <p>Are you sure you want to proceed?</p>
  </Modal>
</template>
```

### With Custom Footer
```jsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete Item"
  footer={
    <>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="error" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>This action cannot be undone.</p>
</Modal>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `visible` / `open` | `boolean` | `false` | Controls modal visibility. |
| `onClose` | `function` | — | Callback fired when modal should close. |
| `title` | `string` | `''` | Modal title text. |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `'md'` | Modal width. |
| `maxWidth` | `string \| number` | `null` | Custom max width (CSS value). |
| `closable` | `boolean` | `true` | If `true`, shows close button. |
| `showCloseButton` | `boolean` | `true` | Alternative to `closable`. |
| `maskClosable` | `boolean` | `true` | If `true`, clicking overlay closes modal. |
| `closeOnOverlay` | `boolean` | `true` | Alternative to `maskClosable`. |
| `disableBackdropClick` | `boolean` | `false` | If `true`, prevents backdrop close. |
| `disableEscapeKeyDown` | `boolean` | `false` | If `true`, prevents Escape key close. |
| `centered` | `boolean` | `true` | If `true`, vertically centers modal. |
| `fullWidth` | `boolean` | `false` | If `true`, modal takes full width of size. |
| `fullScreen` | `boolean` | `false` | If `true`, modal fills entire screen. |
| `position` | `"top" \| "center" \| "bottom"` | `'center'` | Vertical positioning. |
| `scroll` | `"paper" \| "body"` | `'paper'` | Scroll behavior container. |
| `lockScroll` | `boolean` | `true` | If `true`, locks body scroll when open. |
| `zIndex` | `number` | `1000` | CSS z-index value. |
| `showOverlay` | `boolean` | `true` | If `true`, shows backdrop overlay. |
| `children` | `VNode` | — | Modal content. |
| `header` | `VNode` | — | Custom header content. |
| `footer` | `VNode` | — | Custom footer content. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClose` / `close` | `void` | Fired when modal should close. |

## Styling
* Uses CSS variables for backgrounds and borders.
* Automatically adapts to dark mode.
* Backdrop overlay provides visual focus.

## Notes
* Modal automatically manages focus trap for accessibility.
* Body scroll is locked by default when modal is open.
* Escape key closes modal unless `disableEscapeKeyDown` is true.
* Use `fullScreen` for mobile-friendly layouts.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


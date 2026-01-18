# Alert Component

## Introduction
`Alert` is a feedback component that displays important messages to users. It supports multiple severities (success, info, warning, error), optional icons, different visual variants, and a close action.

## Installation
Install from the Watercolor UI package:

```bash
npm install @waterui/alert
```

Or import directly from the monorepo:

```javascript
// React
import Alert from '@waterui/react'
// Vue
import AlertVue from '@waterui/vue'
```

## Usage
### React
```jsx
import Alert from '@waterui/alert'

export default function Demo() {
  return (
    <Alert type="success" title="Operation Successful" closable>
      Your changes have been saved successfully.
    </Alert>
  )
}
```

### Vue
```vue
<script setup>
import Alert from '@waterui/alert'
</script>

<template>
  <Alert type="warning" title="Heads-up!" :closable="true">
    You have unsaved changes.
  </Alert>
</template>
```

## Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `type` | `"success" \| "info" \| "warning" \| "error"` | `"info"` | Determines the alert severity. |
| `title` | `string` | `""` | Optional headline text shown above the message. |
| `children` / `message` | `string \| VNode` | `""` | The alert description or custom content. |
| `closable` | `boolean` | `false` | Whether the close button is shown. |
| `showIcon` | `boolean` | `false` | Whether to display the severity icon. |
| `variant` | `"filled" \| "outlined" \| "standard"` | `"standard"` | Visual style of the alert. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onClose` (React) / `close` (Vue) | `void` | Emitted when the close button is clicked. |

## Styling
Alert leverages semantic design tokens defined in `src/styles/index.css`. You can override
any CSS variable in a wrapper scope, e.g.

```css
/* Change success background */
:root {
  --wc-bg-success-subtle: #e6fffa;
}
```

Dark-mode values are handled automatically through the same variables. No extra styles are required.

## Notes
* The component is **layout-agnostic** — width is determined by its container.
* If no `title` is provided, the message content occupies the full height.

## Contribution
Feel free to submit issues or pull requests on GitHub. Please follow the coding conventions and include unit tests for new features.

## License
ISC © Watercolor UI Team

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
06-29-2025 
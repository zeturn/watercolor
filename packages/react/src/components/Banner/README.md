# Banner

## Introduction
The **Banner** component is a full-width notice bar that displays prominent information and optional actions.  
It can appear at the top or bottom of the viewport, supports success / info / warning / error color themes, and can be dismissible, sticky, and actionable.

## Installation
```bash
npm i watercolor-ui
```

> Watercolor UI provides both **React** and **Vue 3** versions – import from the respective entry.

## Usage

### React
```jsx
import { Banner } from 'watercolor-ui/react';

export default function Page() {
  return (
    <Banner
      type="success"
      title="Upgrade completed"
      message="Our system has been upgraded to the latest version."
      showDefaultAction
      actionText="Learn more"
      closable
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { Banner } from 'watercolor-ui/vue';
</script>

<template>
  <Banner
    type="warning"
    position="bottom"
    title="Cookie Policy"
    message="We use cookies to improve your experience."
    show-default-action
    action-text="Accept"
    :closable="true"
  />
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `type` | `"success" \| "info" \| "warning" \| "error"` | `'info'` | Color theme of the banner. |
| `position` | `"top" \| "bottom"` | `'top'` | Where the banner is rendered. |
| `title` | `string` | `''` | Optional heading text. |
| `message` | `string` | `''` | Main message (can be provided via slot / children). |
| `closable` | `boolean` | `true` | Show close button. |
| `showIcon` | `boolean` | `true` | Display leading icon. |
| `showDefaultAction` | `boolean` | `false` | If `true`, renders a default action button. |
| `actionText` | `string` | `'Action'` | Text of the default action button. |
| `sticky` | `boolean` | `true` | If `true`, uses `position: fixed` so it stays visible while scrolling. |
| `zIndex` | `number` | `1000` | z-index when sticky. |
| `onClose / @close` | `( ) => void` | — | Fired when the banner is dismissed. |
| `onAction / @action` | `( ) => void` | — | Fired when the default action button is clicked. |

## Styling
* Background colors come from palette variables like `--wc-success-600`, which automatically adapt when the `dark` class is present on the root.  
* Text color inherits `--wc-text-inverse` (set on `.wc-banner`).  
* Internal buttons use translucent white / black overlays that adjust in `.dark` mode via dedicated utility classes defined in the CSS.

You may override palettes by redefining CSS variables in your own theme.

## Notes
* Provide custom actions by placing elements inside the default slot (`children` in React).  
* When `sticky` is `false`, the banner behaves as a regular block element in normal flow.

## Contribution
Open issues or PRs to suggest improvements.

## License
ISC

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-06-29 
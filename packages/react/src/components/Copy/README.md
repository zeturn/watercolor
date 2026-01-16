# Copy

## Introduction
Copy is a utility component that allows users to copy any given text to the clipboard while providing visual feedback (icon, label, tooltip) about the operation's success or failure.

## Installation
Install the Watercolor UI library (or just copy the component) via npm / yarn:

```bash
npm install watercolor-ui
# or
yarn add watercolor-ui
```

## Usage
Below are minimal usage examples for both React and Vue. The API is the same across both frameworks.

### React
```jsx
import { Copy } from 'watercolor-ui'

export default function Demo() {
  return (
    <Copy text="Hello World!" variant="primary" />
  )
}
```

### Vue
```vue
<script setup>
import Copy from 'watercolor-ui/Copy.vue'
</script>

<template>
  <Copy text="Hello World!" variant="primary" />
</template>
```

## Props
| Prop            | Type                                                   | Default      | Description                                                                                                           |
| --------------- | ------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `text`          | `string`                                              | **required** | The text to be copied to the clipboard.                                                                               |
| `variant`       | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Visual style variant of the component.                                                                                |
| `size`          | `'sm' \| 'md' \| 'lg'`                                | `'md'`       | Size of the component.                                                                                                |
| `showLabel`     | `boolean`                                             | `true`       | Whether to display the label next to the icon.                                                                        |
| `showTooltip`   | `boolean`                                             | `true`       | Whether to show a tooltip after the copy operation.                                                                    |
| `copyLabel`     | `string`                                              | `'复制'`     | Label shown before the text is copied.                                                                                |
| `copiedLabel`   | `string`                                              | `'已复制'`   | Label shown after the text is successfully copied.                                                                    |
| `tooltipSuccess`| `string`                                              | `'复制成功!'`| Tooltip text to display on successful copy.                                                                           |
| `tooltipError`  | `string`                                              | `'复制失败'` | Tooltip text to display on failed copy.                                                                               |
| `resetDelay`    | `number`                                              | `2000`       | Time (in milliseconds) before the component resets its internal `copied` / `error` state.                             |
| `onCopy`        | `(copiedText: string) => void`                         | `() => {}`   | Callback executed when the text is successfully copied.                                                               |
| `onError`       | `(error: Error) => void`                               | `() => {}`   | Callback executed when the copy operation fails.                                                                      |
| `className`     | `string`                                              | `''`         | Additional CSS class names applied to the root element.                                                                |
| `children`      | `ReactNode` / Slot                                     | `undefined`  | Custom content to show instead of auto-rendered `text`.                                                               |
| `icon`          | `React.ComponentType` / `Vue Component`                | `undefined`  | A custom icon component. If provided, it replaces the default emoji-based icon.                                       |

## Events
| Event   | Description                                   |
| ------- | --------------------------------------------- |
| `onCopy`  | Emitted / invoked when text is copied successfully. Receives the copied text as the first argument. |
| `onError` | Emitted / invoked when copying fails. Receives an `Error` instance as the first argument.           |

## Styling
The component ships with an accompanying `style.css`. All public BEM-style class names are prefixed with `wc-copy`. Override them in your own stylesheet or use the following CSS variables / selectors:

```css
.wc-copy { /* root element */ }
.wc-copy--primary { /* variant modifier */ }
.wc-copy--sm { /* size modifier */ }
.wc-copy--copied { /* success state */ }
.wc-copy--error { /* error state */ }
.wc-copy-tooltip { /* tooltip */ }
```

Feel free to compose or extend these classes to match your design system.

## Notes
1. The component first tries the asynchronous Clipboard API (`navigator.clipboard.writeText`). If it is not available, it falls back to a `document.execCommand('copy')` approach.
2. If you disable `showTooltip`, you can still listen to `onCopy` / `onError` callbacks for status handling.
3. Remember to respect user privacy and security when interacting with the clipboard.

## Contribution
Contributions are welcome! Please open an issue or submit a pull request.

## License
MIT © Watercolor UI

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
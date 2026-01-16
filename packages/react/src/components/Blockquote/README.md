# Blockquote Component

## Introduction
`Blockquote` is used to display quoted text, commonly found in articles, comments, or hint messages. The component provides multiple sizes, color themes, and visual variants to help you quickly align with your brand design. Hover interaction is enabled by default.

## Installation
```bash
npm install watercolor-ui
# or
pnpm add watercolor-ui
```

## Usage
### React
```jsx
import React from 'react'
import { Blockquote } from 'watercolor-ui'

export default function Example() {
  return (
    <Blockquote cite="Steve Jobs">
      Stay hungry, stay foolish.
    </Blockquote>
  )
}
```

### Vue
```vue
<script setup>
import { Blockquote } from 'watercolor-ui'
</script>

<template>
  <Blockquote cite="Steve Jobs">
    Stay hungry, stay foolish.
  </Blockquote>
</template>
```

> The component ships with its own stylesheet. If you are using a custom build process you may tree-shake and import the CSS manually.

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cite` | `string` | `''` | Author/source text displayed at the bottom with a leading dash "—". |
| `variant` | `'default' \| 'minimal' \| 'card'` | `'default'` | Visual variant. The `card` variant re-uses the internal `Card` component to achieve a card-like look. |
| `noBorder` | `boolean` | `true` | Removes the left vertical border. |
| `interactive` | `boolean` | `true` | Enables hover interaction (background highlight). |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Component size affecting padding and font size. |
| `color` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Color theme applied to background and text. |
| `className` (React) / `class` (Vue) | `string` | `''` | Additional custom class names. |
| `...rest` | _DOM attributes_ | — | Remaining props are forwarded to the root element (`<blockquote>` or `<div>` when `variant="card"`). |

## Events
The component does not emit custom events. All native DOM events such as `onClick` / `@click` are forwarded to the root element.

## Styling
- Customize via global CSS variables or by overriding class names:
  - Root: `wc-blockquote`
  - Color modifiers: `wc-blockquote--primary`, `--success`, ...
  - Size modifiers: `wc-blockquote--small`, `--large`
  - Variant modifiers: `wc-blockquote--minimal`
- The palette relies on variables like `--wc-primary-500`; override them globally to match your brand colors.

## Notes
1. When `variant="card"` the component renders the `Card` component internally, so most props (e.g. `interactive`, `size`, `color`) are passed through to it.
2. Turning off `interactive` disables the hover effect—useful for static contexts.
3. When dark mode is active (add a `.dark` class to `<html>` or `<body>`), the component automatically adapts its colors.

## Contribution
Contributions are welcome!
1. `git clone` this repository and install dependencies.
2. Work inside `src/components/Blockquote`, run `pnpm storybook:react` for live preview.
3. Ensure `pnpm test` passes and ESLint rules are satisfied before opening a PR.

## License
MIT © watercolor-ui

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
mm-dd-yyyy 
# NumberAnimation

## Introduction
NumberAnimation is a lightweight component that animates numbers from a start value to a target value. It is useful for dashboards, counters, progress displays and any scenario where dynamic numeric information is required.

## Installation
```bash
npm install @zeturn/watercolor-react
```

## Usage
### React
```jsx
import { NumberAnimation } from '@zeturn/watercolor-react'

function Example() {
  return (
    <NumberAnimation
      from={0}
      to={12345}
      duration={3000}
      precision={0}
      showSeparator
      prefix="$"
    />
  );
}
```

### Vue
```vue
<script setup>
import { NumberAnimation } from '@zeturn/watercolor-vue'
</script>

<template>
  <NumberAnimation
    :from="0"
    :to="12345"
    :duration="3000"
    :precision="0"
    :show-separator="true"
    prefix="￥"
  />
</template>
```

## Props
| Prop Name      | Type                 | Default | Description                                                     |
|----------------|----------------------|---------|-----------------------------------------------------------------|
| from           | `number`             | `0`     | Start value.                                                    |
| to             | `number` _(required)_| —       | Target value.                                                   |
| active         | `boolean`            | `true`  | Whether the animation should start automatically.               |
| duration       | `number`             | `3000`  | Duration of the animation in milliseconds.                     |
| precision      | `number`             | `0`     | Decimal places to keep.                                         |
| showSeparator  | `boolean`            | `false` | Show thousands separator.                                       |
| separator      | `string`             | `","`  | Custom thousands separator character when `showSeparator` is `true`. |
| locale         | `string`             | `""`    | Locale used by `toLocaleString`. Empty string falls back to browser locale. |
| prefix         | `string`             | `""`    | String to prepend to the formatted number.                      |
| suffix         | `string`             | `""`    | String to append to the formatted number.                       |
| easing         | `"linear" \| "ease-in" \| "ease-out" \| "ease-in-out"` | `"linear"` | Transition timing function applied to the scale effect.         |
| formatter      | `(value: number) => string` | `null`  | Custom formatter. Overrides built-in formatting when provided.  |
| onFinish (React) / `@complete` (Vue) | `function` | — | Callback/event fired when the animation completes. |

## Events (Vue)
| Event Name | Payload   | Description                       |
|------------|-----------|-----------------------------------|
| complete   | `void`    | Emitted once when counting stops. |

## Styling
The component relies on CSS variables declared in `src/components/NumberAnimation/style.css`. Override them in your theme or within the `.dark` class for dark-mode customization.

Key variables:
```
--wc-number-animation-color
--wc-number-animation-highlight-color
--wc-number-animation-glow-color
```

## Notes
* When `active` is `false` the component will render the target value instantly.
* The component respects the user's `prefers-reduced-motion` system preference and will disable animation if required.

## Contribution
Feel free to submit pull requests or open issues on GitHub.

## License
ISC

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-06-2025 

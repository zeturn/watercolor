# Countdown

## Introduction
The **Countdown** component displays the remaining time in a human-readable format and counts down every second. It supports multiple sizes and theme colors, can start automatically or manually, and emits an event when the timer reaches zero. The API is identical in both **React** and **Vue 3** implementations so you can switch frameworks without changing your code.

## Installation
Install Watercolor UI (which bundles the Countdown component):

```bash
npm i watercolor-ui
```

> Import from the correct entry point:
> * `watercolor-ui/react` for React
> * `watercolor-ui/vue`  for Vue 3

## Usage

### React
```jsx
import { Countdown } from 'watercolor-ui/react';
import { useRef } from 'react';

export default function Example() {
  const ref = useRef();
  return (
    <>
      <Countdown ref={ref} seconds={60} color="primary" size="lg" />
      <button onClick={() => ref.current?.start()}>Restart</button>
    </>
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Countdown } from 'watercolor-ui/vue';

const cdRef = ref();
</script>

<template>
  <Countdown ref="cdRef" :seconds="60" color="primary" size="lg" />
  <button @click="cdRef.start()">Restart</button>
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `seconds` | `number` | — | Initial time in seconds. Must be >= 0. |
| `autoStart` | `boolean` | `true` | Whether the countdown starts automatically on mount / prop change. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Preset font-size classes. |
| `color` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'default'` | Theme color of the text. |
| `customColor` | `string` | `''` | Hex / rgb string overriding `color`. |
| `fontSize` | `string` | `''` | Applies inline `font-size` (e.g. `'32px'`, `'2rem'`). |
| `format` | `'simple' \| 'detailed' \| 'card'` | `'simple'` | Visual format – currently affects CSS classes only. |
| `warningTime` | `number \| null` | `null` | When remaining seconds ≤ this value, text turns to `warning` color. |
| `className` (React) / `class` (Vue) | `string` | `''` | Extra CSS classes appended to the root element. |

## Events
| Event | When | Arguments |
| ----- | ---- | --------- |
| `onFinish` (React) / `@finish` (Vue) | Countdown reaches zero | — |

## Methods
Using `ref`, both versions expose two imperative methods:
| Method | Description |
| ------ | ----------- |
| `start()` | Starts (or restarts) the timer if it is not running. |
| `clear()` | Stops the timer. |

## Styling
All styles live in `src/components/Countdown/style.css`. The component automatically adapts to dark mode via the global `dark` class. You can override theme colors with CSS variables or supply `customColor`.

## Notes
* Changing the `seconds` prop resets the timer.
* For accessibility, the component uses `tabular-nums` so digits align vertically.

## Contribution
Bug reports and pull requests are welcome!

## License
MIT

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
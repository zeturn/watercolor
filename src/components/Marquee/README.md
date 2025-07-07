# Marquee

## Introduction
The **Marquee** component creates an eye-catching scrolling text (or any custom content) similar to the classic HTML `<marquee>` tag, but fully modern, themeable, and accessible. Both **React** and **Vue 3** versions expose the same API so you can switch frameworks effortlessly.

## Installation
```
npm i watercolor-ui
```

> Import from the correct entry point:
> * `watercolor-ui/react` for React
> * `watercolor-ui/vue`   for Vue 3

## Usage

### React
```jsx
import { Marquee } from 'watercolor-ui/react';

export default function Example() {
  return (
    <Marquee
      text="🔥 Welcome to Watercolor UI — Modern React & Vue components!"
      speed={60}
      direction="left"
      variant="filled"
      pauseOnHover
      showGradient
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { Marquee } from 'watercolor-ui/vue';
</script>

<template>
  <Marquee
    text="🔥 Welcome to Watercolor UI — Modern React & Vue components!"
    :speed="60"
    direction="left"
    variant="filled"
    pause-on-hover
    show-gradient
  />
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `text` | `string` | `'This is a scrolling marquee text'` | Text displayed when no slot / children content is provided. |
| `speed` | `number` | `50` | Animation speed (1-200). Higher is faster. |
| `direction` | `'left' \| 'right' \| 'up' \| 'down'` | `'left'` | Scroll direction. |
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'gradient'` | `'default'` | Visual skin. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Pre-defined size (affects paddings & font-size). |
| `pauseOnHover` | `boolean` | `false` | Pause automatically when the mouse is over the marquee. |
| `loop` | `boolean` | `true` | Whether to run infinitely. |
| `showGradient` | `boolean` | `true` | Adds fading edges at the sides to hint overflow. |
| `showControls` | `boolean` | `false` | Shows play/pause, reverse, and speed buttons. |
| `allowReverse` | `boolean` | `true` | Enables the reverse-direction button. |
| `allowSpeedControl` | `boolean` | `true` | Enables the change-speed button. |
| `autoStart` | `boolean` | `true` | Starts automatically on mount. |
| `loading` | `boolean` | `false` | Displays a loading overlay and stops scrolling. |
| `height` | `string \| number` | `'auto'` | Fixed height (e.g. `'50px'`, `80`). |
| `backgroundColor` | `string` | `''` | Custom background color. |
| `textColor` | `string` | `''` | Custom text color. |
| `className` / `class` | `string` | `''` | Extra classes applied to the container element. |

## Events
| Event | When | Arguments |
| ----- | ---- | --------- |
| `onStart` / `@start` | Scrolling starts. | — |
| `onPause` / `@pause` | Marquee gets paused. | — |
| `onResume` / `@resume` | Marquee resumes after being paused. | — |
| `onComplete` / `@complete` | One full loop completes (when `loop=false`). | — |
| `onDirectionChange` / `@direction-change` | Direction toggles via control button. | `(direction: string)` |
| `onSpeedChange` / `@speed-change` | Speed changes via control button. | `(speed: number)` |

## Styling
All styling rules are located in `src/components/Marquee/style.css` and rely on CSS variables so you can theme the component easily. The `.dark` class on the root element activates dark-theme colors automatically—no extra steps required.

## Notes
* Any custom React children / Vue slot content (images, icons, etc.) will be duplicated once to keep the animation seamless. Ensure it's light-weight for the best performance.
* Extremely long texts may impact performance on very small viewports; tune `speed` or consider slicing content.

## Contribution
Spotted a bug or have an idea? Feel free to open an issue or PR!

## License
MIT

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
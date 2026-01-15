
# Slider

## Introduction
The **Slider** component allows users to select a value from a continuous range. It's ideal for settings like volume, brightness, or any numeric input within defined bounds.

## Installation
Install Watercolor UI (which includes the Slider component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Slider } from 'watercolor-ui/react';

function Example() {
  const [value, setValue] = useState(50);
  
  return (
    <Slider
      value={value}
      onChange={setValue}
      min={0}
      max={100}
      label="Volume"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Slider } from 'watercolor-ui/vue';

const volume = ref(50);
</script>

<template>
  <Slider
    v-model="volume"
    :min="0"
    :max="100"
    label="Volume"
  />
</template>
```

### With Step
```jsx
<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={10}
  label="Brightness"
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `number` | — | Current slider value (controlled). |
| `defaultValue` | `number` | `0` | Initial value (uncontrolled). |
| `onChange` | `function` | — | Callback fired when value changes. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `100` | Maximum value. |
| `step` | `number` | `1` | Step increment. |
| `disabled` | `boolean` | `false` | If `true`, disables the slider. |
| `label` | `string` | `''` | Label text displayed above slider. |
| `valueLabelDisplay` | `"on" \| "off" \| "auto"` | `'off'` | Controls value label visibility. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `number` | Fired when slider value changes. |

## Styling
* Uses CSS variables, primarily `--wc-primary-500` for the track.
* Automatically adapts to dark mode.
* Smooth visual feedback on interaction.

## Notes
* The slider fills from left to right based on the current value.
* Use `step` to control granularity of value changes.
* Fully accessible with ARIA attributes.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


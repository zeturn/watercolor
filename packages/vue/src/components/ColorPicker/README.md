# ColorPicker

## Introduction
The **ColorPicker** component allows users to select a color from the browser-native color palette while providing a live preview of the picked value. It comes in three preset sizes and three shapes so it can adapt to different design needs. Both **React** and **Vue 3** implementations share the same API, making it effortless to switch between frameworks.

## Installation
Install Watercolor UI (which includes the ColorPicker component) via npm:

```bash
npm i watercolor-ui
```

> The component is exported for both **React** and **Vue 3**. Make sure to import from the correct entry point.

## Usage

### React
```jsx
import { ColorPicker } from 'watercolor-ui/react';
import { useState } from 'react';

export default function Example() {
  const [color, setColor] = useState('#409eff');

  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      size="md"
      shape="circle"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { ColorPicker } from 'watercolor-ui/vue';

const color = ref('#409eff');
</script>

<template>
  <ColorPicker v-model="color" size="md" shape="circle" />
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` (React) / `modelValue` (Vue) | `string` | `"#ffffff"` | Hex color value for the picker. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Preset size of the preview box. |
| `shape` | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Visual shape of the preview box. |
| `disabled` | `boolean` | `false` | Disables interaction with the picker. |
| `className` (React) / `class-name` (Vue) | `string` | `''` | Extra CSS classes applied to the root element. |

## Events
| Event | When | Arguments |
| ----- | ---- | --------- |
| `onChange` (React) / `@update:modelValue` (Vue) | The selected color changes. | `(color: string)` |

## Styling
The component relies on the CSS declarations found in `src/components/ColorPicker/style.css`. You can override the preview border, shadow, or size by adding your own classes via `className / class-name`.

Dark mode is handled automatically: when the `dark` class is present on the root element, the component swaps to a darker border and shadow. No additional configuration is required.

## Notes
* The component validates size and shape props internally—invalid values fall back to their defaults.
* Because it uses the native `<input type="color">`, the appearance of the color dialog may vary across operating systems and browsers.

## Contribution
Found a bug or have an improvement idea? Feel free to open an issue or create a pull request.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
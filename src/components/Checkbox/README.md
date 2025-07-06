# Checkbox

## Introduction
`Checkbox` is a highly-customisable input component that supports checked, indeterminate and disabled states. It follows the same visual language across React and Vue implementations and comes with built-in accessibility attributes.

## Installation
Install the Watercolor UI library (or copy the single file) via npm / yarn:

```bash
npm install watercolor-ui
# or
yarn add watercolor-ui
```

## Usage
Below is a minimal usage example for both React and Vue. The API is identical across frameworks.

### React
```jsx
import { Checkbox } from 'watercolor-ui'

export default function Demo() {
  const [checked, setChecked] = React.useState(false)

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="I agree to the terms"
    />
  )
}
```

### Vue
```vue
<script setup>
import Checkbox from 'watercolor-ui/Checkbox.vue'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <Checkbox v-model:checked="checked" label="I agree to the terms" />
</template>
```

## Props
| Prop            | Type                                                                                   | Default   | Description                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `checked`       | `boolean`                                                                              | `false`   | Whether the checkbox is currently checked.                                                                                    |
| `indeterminate` | `boolean`                                                                              | `false`   | Displays a mixed state (useful for "select all" patterns).                                                                    |
| `disabled`      | `boolean`                                                                              | `false`   | Disables the input and prevents user interaction.                                                                             |
| `required`      | `boolean`                                                                              | `false`   | Adds the `required` attribute to the underlying `<input>` element.                                                            |
| `size`          | `'sm' \| 'md' \| 'lg'`                                                                  | `'md'`    | Visual size of the control.                                                                                                   |
| `color`         | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'`               | `'primary'` | Accent color applied when checked / indeterminate.                                                                            |
| `label`         | `string`                                                                               | `''`      | The label text displayed next to the checkbox.                                                                                |
| `labelPlacement`| `'start' \| 'end'`                                                                     | `'end'`   | Position of the label relative to the checkbox icon.                                                                          |
| `value`         | `any`                                                                                  | `true`    | Value associated with the checkbox when submitted in a form.                                                                  |
| `name`          | `string`                                                                               | —         | Name attribute for form integration.                                                                                          |
| `onChange`      | `(event: { target: { name: string; value: any; checked: boolean } }) => void`           | —         | Callback fired when the checked state changes.                                                                                |
| `className`     | `string`                                                                               | `''`      | Extra class names appended to the root element.                                                                               |
| `...props`      | `HTMLInputProps`                                                                       | —         | Additional props are spread onto the native `<input>` element.                                                                |

## Events
| Event      | Description                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| `onChange` | Fired whenever the user toggles the checkbox. The callback receives a synthetic event with `target.checked` boolean. |

## Styling
The component ships with an accompanying `style.css`. Major public class names follow the BEM convention and are prefixed with `wc-checkbox`.

```css
.wc-checkbox { /* root label element */ }
.wc-checkbox__input { /* the hidden native <input> */ }
.wc-checkbox__checkmark { /* box around the icon */ }
.wc-checkbox--checked { /* modifier: checked */ }
.wc-checkbox--indeterminate { /* modifier: indeterminate */ }
.wc-checkbox--disabled { /* modifier: disabled */ }
.wc-checkbox--sm / --md / --lg { /* size modifiers */ }
.wc-checkbox--label-start / --label-end { /* label position modifiers */ }
```

You can override these classes or leverage CSS variables (e.g. `--wc-primary-500`) to adapt the component to your theme.

## Accessibility
* Uses a real `<input type="checkbox">` element under the hood.
* Sets `aria-checked="mixed"` when in indeterminate state.
* Supports `required` and `disabled` attributes.

## Notes
1. The `indeterminate` state is visual-only; you must manage it in your own state logic.
2. All props not listed above are forwarded to the underlying `<input>` element, allowing native HTML attributes like `id`, `data-*`, etc.

## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
MIT © Watercolor UI

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
mm-dd-yyyy 
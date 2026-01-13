````markdown
# TextField

## Introduction
The **TextField** component is a versatile text input field that supports various input types, validation, adornments, and multi-line editing. It provides consistent styling and behavior for form data collection.

## Installation
Install Watercolor UI (which includes the TextField component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { TextField } from 'watercolor-ui/react';

function Example() {
  const [value, setValue] = useState('');
  
  return (
    <TextField
      label="Email"
      type="email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your email"
      required
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { TextField } from 'watercolor-ui/vue';

const email = ref('');
</script>

<template>
  <TextField
    label="Email"
    type="email"
    v-model="email"
    placeholder="Enter your email"
    required
  />
</template>
```

### With Adornments
```jsx
<TextField
  label="Amount"
  startAdornment={<span>$</span>}
  endAdornment={<span>.00</span>}
/>
```

### Multi-line
```jsx
<TextField
  label="Description"
  multiline
  rows={4}
  placeholder="Enter description..."
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string` | `''` | The input value. |
| `onChange` | `function` | — | Callback fired when value changes. |
| `type` | `string` | `'text'` | HTML input type (text, email, password, etc.). |
| `label` | `string` | `''` | Label text displayed above the input. |
| `placeholder` | `string` | `''` | Placeholder text. |
| `helperText` | `string` | `''` | Helper text displayed below the input. |
| `error` | `string` | `''` | Error message (displays in red). |
| `required` | `boolean` | `false` | If `true`, marks field as required. |
| `disabled` | `boolean` | `false` | If `true`, disables the input. |
| `readonly` | `boolean` | `false` | If `true`, makes input read-only. |
| `autoFocus` | `boolean` | `false` | If `true`, auto-focuses on mount. |
| `fullWidth` | `boolean` | `false` | If `true`, takes full container width. |
| `multiline` | `boolean` | `false` | If `true`, renders textarea. |
| `rows` | `number` | `4` | Number of rows for multiline. |
| `maxRows` | `number` | — | Maximum rows for multiline. |
| `minRows` | `number` | — | Minimum rows for multiline. |
| `variant` | `"filled" \| "outlined" \| "standard"` | `'filled'` | Visual style variant. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Input size. |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `'primary'` | Theme color. |
| `startAdornment` | `ReactNode \| VNode` | `null` | Element displayed at start of input. |
| `endAdornment` | `ReactNode \| VNode` | `null` | Element displayed at end of input. |
| `maxLength` | `number` | — | Maximum character length. |
| `minLength` | `number` | — | Minimum character length. |
| `pattern` | `string` | — | Regex pattern for validation. |
| `autoComplete` | `string` | `'off'` | HTML autocomplete attribute. |
| `name` | `string` | `''` | Input name attribute. |
| `id` | `string` | `''` | Input id attribute. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `Event` | Fired when value changes. |
| `onFocus` / `focus` | `Event` | Fired when input receives focus. |
| `onBlur` / `blur` | `Event` | Fired when input loses focus. |
| `onKeyDown` / `keydown` | `Event` | Fired on key down. |
| `onKeyUp` / `keyup` | `Event` | Fired on key up. |
| `onKeyPress` / `keypress` | `Event` | Fired on key press. |

## Styling
* Uses CSS variables for theme colors and spacing.
* Automatically adapts to dark mode.
* Error states are highlighted in red.

## Notes
* Use `error` prop to display validation messages.
* Combine with form validation libraries for complex forms.
* The `multiline` variant automatically adjusts height based on content.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13
````

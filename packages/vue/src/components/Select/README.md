
# Select

## Introduction
The **Select** component provides a dropdown menu for selecting one or multiple options from a list. It supports search, custom rendering, and various visual styles.

## Installation
Install Watercolor UI (which includes the Select component):

```bash
npm install @zeturn/watercolor-vue
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Select } from 'watercolor-ui/react';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' }
];

function Example() {
  const [value, setValue] = useState('');
  
  return (
    <Select
      label="Framework"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a framework"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Select } from 'watercolor-ui/vue';

const framework = ref('');
const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' }
];
</script>

<template>
  <Select
    label="Framework"
    :options="options"
    v-model="framework"
    placeholder="Select a framework"
  />
</template>
```

### Multiple Selection
```jsx
<Select
  multiple
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string \| array` | `''` | Selected value(s). |
| `onChange` | `function` | — | Callback fired when selection changes. |
| `options` | `array` | `[]` | Array of option objects `{value, label}`. |
| `placeholder` | `string` | `'Select an option'` | Placeholder text. |
| `label` | `string` | `''` | Label text displayed above select. |
| `helperText` | `string` | `''` | Helper text below select. |
| `error` | `boolean` | `false` | If `true`, shows error state. |
| `errorMessage` | `string` | `''` | Error message text. |
| `required` | `boolean` | `false` | If `true`, marks as required. |
| `disabled` | `boolean` | `false` | If `true`, disables the select. |
| `multiple` | `boolean` | `false` | If `true`, allows multiple selections. |
| `clearable` | `boolean` | `false` | If `true`, shows clear button. |
| `fullWidth` | `boolean` | `false` | If `true`, takes full container width. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Select size. |
| `variant` | `"filled" \| "outlined" \| "standard"` | `'filled'` | Visual style variant. |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `'primary'` | Theme color. |
| `maxHeight` | `number` | `200` | Maximum height of dropdown in pixels. |
| `name` | `string` | `''` | Name attribute. |
| `id` | `string` | `''` | ID attribute. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |
| `renderOption` | `function` | — | Custom option renderer. |
| `renderValue` | `function` | — | Custom value renderer. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `value` | Fired when selection changes. |
| `onFocus` / `focus` | `Event` | Fired when select receives focus. |
| `onBlur` / `blur` | `Event` | Fired when select loses focus. |
| `onSearch` / `search` | `string` | Fired when user searches (if searchable). |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Error states are highlighted in red.

## Notes
* Use `multiple` prop for multi-select functionality.
* Options array requires `{value, label}` structure.
* Custom rendering can be achieved with `renderOption` and `renderValue`.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


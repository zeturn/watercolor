````markdown
# Autocomplete

## Introduction
The **Autocomplete** component combines a text input with a dropdown menu of suggestions, enabling users to quickly find and select from a large list of options. It supports free-form input, multiple selections, and custom filtering.

## Installation
Install Watercolor UI (which includes the Autocomplete component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Autocomplete } from 'watercolor-ui/react';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' }
];

function Example() {
  const [value, setValue] = useState(null);
  
  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      options={options}
      label="Framework"
      placeholder="Type to search..."
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Autocomplete } from 'watercolor-ui/vue';

const framework = ref(null);
const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' }
];
</script>

<template>
  <Autocomplete
    v-model="framework"
    :options="options"
    label="Framework"
    placeholder="Type to search..."
  />
</template>
```

### Multiple Selection
```jsx
<Autocomplete
  multiple
  value={selectedValues}
  onChange={setSelectedValues}
  options={options}
/>
```

### Free Solo (Allow Custom Input)
```jsx
<Autocomplete
  freeSolo
  value={value}
  onChange={setValue}
  options={options}
  placeholder="Type anything..."
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `object \| array \| string` | `null` | Selected value(s). |
| `onChange` | `function` | — | Callback fired when selection changes. |
| `options` | `array` | `[]` | Array of available options. |
| `placeholder` | `string` | `'Type to search...'` | Input placeholder text. |
| `label` | `string` | `''` | Label text displayed above input. |
| `helperText` | `string` | `''` | Helper text below input. |
| `error` | `boolean` | `false` | If `true`, shows error state. |
| `errorMessage` | `string` | `''` | Error message text. |
| `required` | `boolean` | `false` | If `true`, marks as required. |
| `disabled` | `boolean` | `false` | If `true`, disables the component. |
| `readonly` | `boolean` | `false` | If `true`, makes input read-only. |
| `multiple` | `boolean` | `false` | If `true`, allows multiple selections. |
| `freeSolo` | `boolean` | `false` | If `true`, allows custom input values. |
| `clearable` | `boolean` | `true` | If `true`, shows clear button. |
| `fullWidth` | `boolean` | `false` | If `true`, takes full container width. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Component size. |
| `variant` | `"filled" \| "outlined" \| "standard"` | `'outlined'` | Visual style variant. |
| `minSearchLength` | `number` | `0` | Minimum characters before showing suggestions. |
| `noOptionsText` | `string` | `'No options found'` | Text shown when no options match. |
| `name` | `string` | `''` | Name attribute. |
| `id` | `string` | `''` | ID attribute. |
| `className / class` | `string` | `''` | Additional CSS classes. |
| `style` | `object` | — | Inline styles. |
| `filterOptions` | `function` | — | Custom filter function. |
| `renderOption` | `function` | — | Custom option renderer. |
| `renderInput` | `function` | — | Custom input renderer. |
| `getOptionLabel` | `function` | — | Function to get option label. |
| `getOptionValue` | `function` | — | Function to get option value. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `value` | Fired when selection changes. |
| `onInputChange` / `input-change` | `string` | Fired when input text changes. |
| `onFocus` / `focus` | `Event` | Fired when input receives focus. |
| `onBlur` / `blur` | `Event` | Fired when input loses focus. |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Dropdown positioning is handled automatically.

## Notes
* Use `freeSolo` to allow users to enter custom values not in the options list.
* `multiple` mode displays selected items as chips.
* Custom filtering can be implemented with the `filterOptions` prop.
* Keyboard navigation is fully supported (arrow keys, Enter, Escape).

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13
````

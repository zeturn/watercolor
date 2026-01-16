# DatePicker

## Introduction
The **DatePicker** allows users to select a calendar date. The Vue version provides a custom dropdown calendar while the React implementation leverages the native `<input type="date">`, but both share the same public API (props & events) and styling so they can be swapped without changes to consumer code.

## Installation
Install via npm together with the Watercolor UI library:

```bash
npm i watercolor-ui
```

> Import from the correct framework entry point:
> * `watercolor-ui/react` for React
> * `watercolor-ui/vue` for Vue 3

## Usage

### React
```jsx
import { DatePicker } from 'watercolor-ui/react';
import { useState } from 'react';

export default function Example() {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      size="md"
      variant="default"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { DatePicker } from 'watercolor-ui/vue';

const date = ref(new Date());
</script>

<template>
  <DatePicker v-model="date" size="md" variant="default" />
</template>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` (React) / `modelValue` (Vue) | `Date \| string | null` | `null` | Current selected date. Accepts a `Date` object or ISO date string. |
| `placeholder` | `string` | `'请选择日期'` | Placeholder text for the input. |
| `format` | `string` | `'YYYY-MM-DD'` | Display format (Vue) / output format (React converts internally). |
| `disabled` | `boolean` | `false` | Disables the picker. |
| `showToday` | `boolean` | `true` | Whether to show the "Today" button (Vue only – ignored in React). |
| `minDate` | `Date \| string | null` | `null` | Minimum selectable date. |
| `maxDate` | `Date \| string | null` | `null` | Maximum selectable date. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Pre-defined size of the input wrapper. |
| `variant` | `'default' \| 'outlined' \| 'filled'` | `'default'` | Visual variant. |
| `className` (React) / `class` (Vue) | `string` | `''` | Extra CSS classes for the wrapper. |

## Events
| Event | When | Arguments |
| ----- | ---- | --------- |
| `onChange` (React) / `@change` (Vue) | User picks/clears a date. | `(date: Date \| null)` |
| `@update:modelValue` (Vue) | v-model two-way binding. | `(date: Date \| null)` |

## Styling
All visual styles are defined in `src/components/DatePicker/style.css` and reused by both frameworks. The component automatically adapts to dark mode via the global `dark` class—no extra work required. You can further customise it by overriding CSS variables or supplying additional classes via `className / class`.

## Notes
* The React version uses the native date input and therefore inherits the browser's date-picker UI.
* `format` affects the displayed string only. The underlying `Date` object is always emitted.
* Always pass valid `Date` objects or ISO-8601 strings to avoid parsing issues.

## Contribution
Issues and pull requests are welcome!

## License
MIT

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
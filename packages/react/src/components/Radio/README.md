
# Radio

## Introduction
The **Radio** component allows users to select a single option from a set. It works in conjunction with **RadioGroup** to manage selections and provide accessible radio button functionality.

## Installation
Install Watercolor UI (which includes the Radio component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Radio, RadioGroup } from 'watercolor-ui/react';

function Example() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      label="Choose an option"
    >
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Radio, RadioGroup } from 'watercolor-ui/vue';

const selected = ref('option1');
</script>

<template>
  <RadioGroup v-model="selected" label="Choose an option">
    <Radio value="option1" label="Option 1" />
    <Radio value="option2" label="Option 2" />
    <Radio value="option3" label="Option 3" />
  </RadioGroup>
</template>
```

### Horizontal Layout
```jsx
<RadioGroup value={value} onChange={setValue} row>
  <Radio value="yes" label="Yes" />
  <Radio value="no" label="No" />
</RadioGroup>
```

## RadioGroup Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string` | — | Currently selected value. |
| `onChange` | `function` | — | Callback fired when selection changes. |
| `name` | `string` | — | Name attribute for all radio inputs. |
| `disabled` | `boolean` | `false` | If `true`, disables all radios. |
| `label` | `string` | `''` | Label text for the group. |
| `row` | `boolean` | `false` | If `true`, arranges radios horizontally. |
| `required` | `boolean` | `false` | If `true`, marks group as required. |
| `error` | `string` | `''` | Error message text. |
| `helperText` | `string` | `''` | Helper text displayed below group. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Size of radio buttons. |
| `color` | `"primary" \| "secondary" \| "success" \| "warning" \| "error"` | `'primary'` | Theme color. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Radio Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string` | — | Value of this radio option. |
| `label` | `string` | `''` | Label text for the radio. |
| `disabled` | `boolean` | `false` | If `true`, disables this radio. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` (React) / `change` (Vue) | `string` | Fired when a radio is selected. |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Smooth animations on selection.

## Notes
* Always use Radio components inside a RadioGroup.
* RadioGroup manages the selected state automatically.
* Only one radio can be selected at a time within a group.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


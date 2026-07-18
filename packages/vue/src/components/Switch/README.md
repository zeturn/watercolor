
# Switch

## Introduction
The **Switch** component is a toggle control for binary on/off states. It provides an accessible and visually appealing alternative to checkboxes for boolean selections.

## Installation
Install Watercolor UI (which includes the Switch component):

```bash
npm install @zeturn/watercolor-vue
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Switch } from 'watercolor-ui/react';

function Example() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
      label="Enable notifications"
      color="primary"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Switch } from 'watercolor-ui/vue';

const enabled = ref(false);
</script>

<template>
  <Switch
    v-model="enabled"
    label="Enable notifications"
    color="primary"
  />
</template>
```

### With Description
```jsx
<Switch
  checked={darkMode}
  onChange={setDarkMode}
  label="Dark Mode"
  description="Enable dark theme for better night viewing"
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `checked` | `boolean` | `false` | If `true`, switch is in "on" state. |
| `onChange` | `function` | — | Callback fired when state changes. |
| `label` | `string` | `''` | Label text displayed above switch. |
| `description` | `string` | `''` | Description text displayed below switch. |
| `disabled` | `boolean` | `false` | If `true`, disables the switch. |
| `required` | `boolean` | `false` | If `true`, marks as required. |
| `color` | `"primary" \| "success" \| "warning" \| "error" \| "purple" \| "orange" \| "cyan" \| "pink"` | `'primary'` | Color theme when checked. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Switch size. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` (React) / `change` (Vue) | `boolean` | Fired when switch state changes. |

## Styling
* Uses CSS variables for theme colors.
* Automatically adapts to dark mode.
* Smooth transition animations on state change.

## Notes
* Switch components are more appropriate than checkboxes for immediate actions.
* Use labels and descriptions to clarify the switch's purpose.
* The component is fully accessible with ARIA attributes.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


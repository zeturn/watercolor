
# Tabs

## Introduction
The **Tabs** component organizes content into separate panels, allowing users to switch between different views. It supports multiple visual variants and keyboard navigation.

## Installation
Install Watercolor UI (which includes the Tabs component):

```bash
npm install watercolor-ui
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Tabs } from 'watercolor-ui/react';

const tabs = [
  { label: 'Profile', content: <div>Profile Content</div> },
  { label: 'Settings', content: <div>Settings Content</div> },
  { label: 'Messages', content: <div>Messages Content</div> }
];

function Example() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <Tabs
      tabs={tabs}
      activeIndex={activeIndex}
      onChange={setActiveIndex}
      variant="default"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Tabs } from 'watercolor-ui/vue';

const activeTab = ref(0);
const tabs = [
  { label: 'Profile', content: 'Profile Content' },
  { label: 'Settings', content: 'Settings Content' },
  { label: 'Messages', content: 'Messages Content' }
];
</script>

<template>
  <Tabs
    :tabs="tabs"
    v-model:activeIndex="activeTab"
    variant="default"
  />
</template>
```

### Variants
```jsx
{/* Default variant with border */}
<Tabs tabs={tabs} variant="default" />

{/* Pills variant with rounded backgrounds */}
<Tabs tabs={tabs} variant="pills" />

{/* Underline variant with bottom border */}
<Tabs tabs={tabs} variant="underline" />
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `tabs` | `array` | `[]` | Array of tab objects `{label, content, icon, disabled}`. |
| `activeIndex` | `number` | `0` | Currently active tab index (controlled). |
| `onChange` | `function` | — | Callback fired when tab changes `(index, tab) => {}`. |
| `variant` | `"default" \| "pills" \| "underline"` | `'default'` | Visual style variant. |
| `children` | `VNode` | — | Custom tab content (overrides tabs array). |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Tab Object Structure
```javascript
{
  label: 'Tab Label',           // Required: Tab text
  content: <div>Content</div>,  // Tab panel content
  icon: <Icon name="home" />,   // Optional: Icon
  disabled: false               // Optional: Disable tab
}
```

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `(index, tab)` | Fired when active tab changes. |

## Styling
* Uses CSS variables for colors and spacing.
* Automatically adapts to dark mode.
* Active tab is highlighted based on variant.

## Notes
* Keyboard navigation: Arrow keys to move between tabs, Enter/Space to activate.
* Disabled tabs cannot be selected or focused.
* For complex content, consider lazy-loading tab panels.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the MIT License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


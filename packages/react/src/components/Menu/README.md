
## Introduction
The **Menu** component displays a list of choices that appears when triggered by a button or other element. It supports various placements, variants, and can include icons, dividers, and custom content.

## Installation
Install Watercolor UI (which includes the Menu component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Menu } from 'watercolor-ui/react';

const menuItems = [
  { label: 'Profile', value: 'profile', icon: '👤' },
  { label: 'Settings', value: 'settings', icon: '⚙️' },
  { divider: true },
  { label: 'Logout', value: 'logout', icon: '🚪' }
];

function Example() {
  const handleSelect = (item) => {
    console.log('Selected:', item);
  };
  
  return (
    <Menu
      items={menuItems}
      triggerText="Account"
      onSelect={handleSelect}
      placement="bottom-start"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { Menu } from 'watercolor-ui/vue';

const menuItems = [
  { label: 'Profile', value: 'profile', icon: '👤' },
  { label: 'Settings', value: 'settings', icon: '⚙️' },
  { divider: true },
  { label: 'Logout', value: 'logout', icon: '🚪' }
];

const handleSelect = (item) => {
  console.log('Selected:', item);
};
</script>

<template>
  <Menu
    :items="menuItems"
    triggerText="Account"
    @select="handleSelect"
    placement="bottom-start"
  />
</template>
```

### Custom Trigger
```jsx
<Menu
  items={menuItems}
  triggerContent={<Button>Custom Trigger</Button>}
  onSelect={handleSelect}
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `items` | `array` | `[]` | Array of menu item objects. |
| `triggerText` | `string` | `'选择选项'` | Text for default trigger button. |
| `triggerContent` | `VNode` | — | Custom trigger element. |
| `menuContent` | `VNode` | — | Custom menu content. |
| `placement` | `"top" \| "bottom" \| "left" \| "right" \| "bottom-start" \| "bottom-end"` | `'bottom-start'` | Menu positioning relative to trigger. |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Menu size. |
| `variant` | `"default" \| "card"` | `'default'` | Visual style variant. |
| `disabled` | `boolean` | `false` | If `true`, disables the menu. |
| `trigger` | `"click" \| "hover"` | `'click'` | Trigger interaction type. |
| `illustration` | `string` | `''` | Image URL for card variant. |
| `illustrationAlt` | `string` | `'示意图'` | Alt text for illustration. |
| `cardTitle` | `string` | `''` | Title for card variant. |
| `cardDescription` | `string` | `''` | Description for card variant. |
| `children` | `VNode` | — | Custom content. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Menu Item Structure
```javascript
{
  label: 'Item Label',     // Item text
  value: 'item-value',     // Item value
  icon: '🏠',              // Optional icon
  disabled: false,         // Optional: disable item
  divider: true           // Optional: render as divider
}
```

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onSelect` / `select` | `(item, index)` | Fired when menu item is selected. |
| `onOpen` / `open` | `void` | Fired when menu opens. |
| `onClose` / `close` | `void` | Fired when menu closes. |

## Styling
* Uses CSS variables for colors and spacing.
* Automatically adapts to dark mode.
* Menu automatically positions to avoid viewport edges.

## Notes
* Menu closes when an item is clicked or when clicking outside.
* Use `divider: true` in items array to render separator lines.
* Card variant is useful for feature-rich menu displays.
* Keyboard navigation supported (Arrow keys, Enter, Escape).

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13

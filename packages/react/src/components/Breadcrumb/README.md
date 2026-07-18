
# Breadcrumb

## Introduction
The **Breadcrumb** component provides navigation hierarchy, showing users their current location within the application and allowing them to navigate back to parent pages.

## Installation
Install Watercolor UI (which includes the Breadcrumb component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Breadcrumb } from 'watercolor-ui/react';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' }
];

function Example() {
  return (
    <Breadcrumb
      items={items}
      separator="/"
      onItemClick={(item, index) => console.log(item)}
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { Breadcrumb } from 'watercolor-ui/vue';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' }
];

const handleItemClick = (item, index) => {
  console.log(item);
};
</script>

<template>
  <Breadcrumb
    :items="items"
    separator="/"
    @item-click="handleItemClick"
  />
</template>
```

### With Icons
```jsx
const items = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'Reports' }
];

<Breadcrumb items={items} />
```

### With Home Icon
```jsx
<Breadcrumb
  items={items}
  showHome
  homeIcon="🏠"
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `items` | `array` | `[]` | Array of breadcrumb item objects. |
| `separator` | `string \| VNode` | `'/'` | Separator between items. |
| `variant` | `"default" \| "compact"` | `'default'` | Visual style variant. |
| `showHome` | `boolean` | `false` | If `true`, prepends home icon. |
| `homeIcon` | `string \| VNode` | `'🏠'` | Home icon content. |
| `maxItems` | `number` | `0` | Max items before collapsing (0 = no limit). |
| `onItemClick` | `function` | — | Callback when item is clicked `(item, index) => {}`. |

## Item Object Structure
```javascript
{
  label: 'Item Label',    // Required: Item text
  href: '/path',          // Optional: Link URL
  icon: '🏠',             // Optional: Icon before label
  disabled: false         // Optional: Disable item
}
```

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onItemClick` / `item-click` | `(item, index)` | Fired when a breadcrumb item is clicked. |

## Styling
* Uses CSS variables for colors and spacing.
* Automatically adapts to dark mode.
* Last item is not clickable (current page).

## Notes
* The last item in the array is treated as the current page and is not interactive.
* Use `href` for standard links or handle `onItemClick` for custom navigation.
* Use `maxItems` to collapse long breadcrumb trails with ellipsis.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


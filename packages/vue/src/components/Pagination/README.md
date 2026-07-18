
# Pagination

## Introduction
The **Pagination** component provides navigation between pages of data, with support for various display options, sizes, and boundary/sibling page controls.

## Installation
Install Watercolor UI (which includes the Pagination component):

```bash
npm install @zeturn/watercolor-vue
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Pagination } from 'watercolor-ui/react';

function Example() {
  const [page, setPage] = useState(1);
  
  return (
    <Pagination
      value={page}
      onChange={setPage}
      total={100}
      pageSize={10}
      size="md"
    />
  );
}
```

### Vue 3
```vue
<script setup>
import { ref } from 'vue';
import { Pagination } from 'watercolor-ui/vue';

const currentPage = ref(1);
const totalItems = 100;
</script>

<template>
  <Pagination
    v-model="currentPage"
    :total="totalItems"
    :pageSize="10"
    size="md"
  />
</template>
```

### With Custom Sibling Count
```jsx
<Pagination
  value={page}
  onChange={setPage}
  total={200}
  pageSize={10}
  siblingCount={2}
  boundaryCount={1}
/>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `number` | `1` | Current page number (controlled). |
| `onChange` | `function` | — | Callback fired when page changes `(page) => {}`. |
| `total` | `number` | — | Total number of items. |
| `pageSize` | `number` | `10` | Number of items per page. |
| `siblingCount` | `number` | `1` | Number of sibling pages to show on each side. |
| `boundaryCount` | `number` | `1` | Number of pages to show at start and end. |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `'md'` | Pagination size. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| `onChange` / `change` | `number` | Fired when page changes. |

## Styling
* Uses CSS variables for colors and spacing.
* Automatically adapts to dark mode.
* Active page is highlighted.

## Notes
* Total pages are calculated automatically from `total` and `pageSize`.
* Ellipsis (...) appears when there are too many pages to display.
* Use `siblingCount` to control how many pages appear around the current page.
* Use `boundaryCount` to control how many pages appear at the start and end.

## Examples

### Basic Usage
```jsx
// Shows pages: « 1 2 3 4 5 6 7 8 9 10 »
<Pagination value={1} onChange={setPage} total={100} pageSize={10} />
```

### With Many Pages
```jsx
// Shows pages: « 1 ... 5 6 7 ... 20 »
<Pagination 
  value={6} 
  onChange={setPage} 
  total={200} 
  pageSize={10}
  siblingCount={1}
  boundaryCount={1}
/>
```

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


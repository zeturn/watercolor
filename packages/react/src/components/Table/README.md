
# Table

## Introduction
The **Table** component displays data in a structured tabular format with support for sorting, selection, sticky headers, and various visual styles. It includes sub-components for organizing table structure.

## Installation
Install Watercolor UI (which includes the Table component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Table, TableHead, TableBody, TableRow, TableCell } from 'watercolor-ui/react';

function Example() {
  return (
    <Table hover striped>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

### Vue 3
```vue
<script setup>
import { Table, TableHead, TableBody, TableRow, TableCell } from 'watercolor-ui/vue';

const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
];
</script>

<template>
  <Table hover striped>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow v-for="user in users" :key="user.email">
        <TableCell>{{ user.name }}</TableCell>
        <TableCell>{{ user.email }}</TableCell>
        <TableCell>{{ user.role }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```

## Table Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `"sm" \| "md" \| "lg"` | `'md'` | Table size/density. |
| `stickyHeader` | `boolean` | `false` | If `true`, header stays visible on scroll. |
| `dense` | `boolean` | `false` | If `true`, reduces padding for compact display. |
| `hover` | `boolean` | `false` | If `true`, rows highlight on hover. |
| `striped` | `boolean` | `false` | If `true`, alternates row background colors. |
| `children` | `VNode` | — | Table content (TableHead, TableBody). |
| `className / class` | `string` | `''` | Additional CSS classes. |

## TableRow Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `hover` | `boolean` | — | Override table-level hover behavior. |
| `selected` | `boolean` | `false` | If `true`, highlights row as selected. |
| `clickable` | `boolean` | `false` | If `true`, shows pointer cursor. |
| `onClick` / `click` | `function` | — | Callback when row is clicked. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## TableCell Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `align` | `"left" \| "center" \| "right"` | `'left'` | Text alignment. |
| `component` | `string` | `'td'` | HTML element to render (td or th). |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Styling
* Uses CSS variables for borders and backgrounds.
* Automatically adapts to dark mode.
* Sticky headers work with overflow containers.

## Notes
* Use `stickyHeader` with a max-height container for scrollable tables.
* TableCell automatically detects if it's in TableHead to render as `<th>`.
* Combine with Pagination for large datasets.

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13



# Container

## Introduction
The **Container** component provides a responsive container with centered content and maximum width constraints. It's commonly used as a page wrapper to maintain consistent content width across different screen sizes.

## Installation
Install Watercolor UI (which includes the Container component):

```bash
npm install @zeturn/watercolor-react
```

> Both **React** and **Vue 3** versions are provided – import from the appropriate entry point.

## Usage

### React
```jsx
import { Container } from 'watercolor-ui/react';

function Example() {
  return (
    <Container maxWidth="lg">
      <h1>Page Content</h1>
      <p>This content is centered and constrained to a maximum width.</p>
    </Container>
  );
}
```

### Vue 3
```vue
<script setup>
import { Container } from 'watercolor-ui/vue';
</script>

<template>
  <Container maxWidth="lg">
    <h1>Page Content</h1>
    <p>This content is centered and constrained to a maximum width.</p>
  </Container>
</template>
```

### Fluid Container
```jsx
<Container fluid>
  <p>This container takes full width with padding.</p>
</Container>
```

### Fixed Width
```jsx
<Container fixed maxWidth="md">
  <p>This container has a fixed width based on the maxWidth breakpoint.</p>
</Container>
```

## Props
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `maxWidth` | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| false` | `'lg'` | Maximum width breakpoint. |
| `fluid` | `boolean` | `false` | If `true`, removes max-width constraint. |
| `fixed` | `boolean` | `false` | If `true`, uses fixed width instead of max-width. |
| `children` | `VNode` | — | Container content. |
| `className / class` | `string` | `''` | Additional CSS classes. |

## Max Width Values
| Value | Width |
| ----- | ----- |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |
| `false` | No max-width |

## Styling
* Automatically centers content with margin auto.
* Includes responsive padding.
* Adapts to different screen sizes.

## Notes
* Use `fluid` for full-width layouts with padding.
* Use `maxWidth` to constrain content width on large screens.
* Container is responsive and adjusts to viewport size.

## Examples

### Basic Page Layout
```jsx
<Container maxWidth="lg">
  <header>Header</header>
  <main>Main Content</main>
  <footer>Footer</footer>
</Container>
```

### Full Width Section
```jsx
<div>
  <Container>
    <h1>Normal Container</h1>
  </Container>
  
  <Container fluid>
    <h1>Full Width Section</h1>
  </Container>
  
  <Container maxWidth="sm">
    <h1>Narrow Container</h1>
  </Container>
</div>
```

## Contribution
Feel free to open issues or PRs to enhance the component.

## License
Released under the ISC License.

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
2025-01-13


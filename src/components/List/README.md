# List

A flexible list component for displaying collections of content with support for dense mode and customizable padding.

## Features

- Dense mode for compact lists
- Customizable padding
- Context API for child components
- Semantic HTML with proper roles
- Supports nested lists
- Flexible styling

## Basic Usage

### React

```jsx
import { List, ListItem } from '@zeturn/watercolor'

function App() {
  return (
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>
  )
}
```

### Vue

```vue
<template>
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
</template>

<script setup>
import { List, ListItem } from '@zeturn/watercolor'
</script>
```

## Props

### List

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dense` | `boolean` | `false` | Use compact spacing |
| `disablePadding` | `boolean` | `false` | Remove padding |
| `subheader` | `string` | `''` | Optional subheader |
| `children` | `ReactNode \| VNode` | - | List items |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Basic List

```jsx
<List>
  <ListItem>Home</ListItem>
  <ListItem>About</ListItem>
  <ListItem>Contact</ListItem>
</List>
```

### Dense List

```jsx
<List dense>
  <ListItem>Compact item 1</ListItem>
  <ListItem>Compact item 2</ListItem>
  <ListItem>Compact item 3</ListItem>
</List>
```

### No Padding

```jsx
<List disablePadding>
  <ListItem>No padding item 1</ListItem>
  <ListItem>No padding item 2</ListItem>
</List>
```

### Navigation List

```jsx
<List>
  <ListItem button>
    <Icon name="home" />
    Home
  </ListItem>
  <ListItem button>
    <Icon name="user" />
    Profile
  </ListItem>
  <ListItem button>
    <Icon name="settings" />
    Settings
  </ListItem>
</List>
```

### Menu List

```jsx
<List>
  <ListItem>File</ListItem>
  <ListItem>Edit</ListItem>
  <ListItem>View</ListItem>
  <ListItem divider />
  <ListItem>Help</ListItem>
</List>
```

### Settings List

```jsx
<List>
  <ListItem>
    <strong>Notifications</strong>
    <Switch checked={notifications} />
  </ListItem>
  <ListItem>
    <strong>Dark Mode</strong>
    <Switch checked={darkMode} />
  </ListItem>
  <ListItem>
    <strong>Auto-save</strong>
    <Switch checked={autoSave} />
  </ListItem>
</List>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-list` - Base list class
- `wc-list--dense` - Dense mode
- `wc-list--no-padding` - No padding variant

## Accessibility

- Uses `role="list"` for semantic structure
- Compatible with screen readers
- Proper keyboard navigation when used with interactive items
- Context passed to child components

## Best Practices

1. **Consistency**: Use dense mode consistently within a section
2. **Padding**: Use `disablePadding` when list is in a container with its own padding
3. **Interactive**: Combine with clickable list items for navigation
4. **Grouping**: Use multiple lists with subheaders for logical grouping

## Notes

- Provides context to child ListItem components
- Dense mode affects all child components
- Works with dividers and other list-related components
- Supports both vertical and horizontal layouts with custom CSS

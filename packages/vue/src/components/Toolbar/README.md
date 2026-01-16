# Toolbar

A toolbar component for grouping action buttons and controls in a horizontal layout.

## Features

- Multiple variants (regular, dense)
- Gutter control
- Flexible content layout
- Responsive design
- Commonly used with AppBar

## Basic Usage

### React

```jsx
import { Toolbar } from '@zeturn/watercolor'

function App() {
  return (
    <Toolbar>
      <button>Action 1</button>
      <button>Action 2</button>
      <button>Action 3</button>
    </Toolbar>
  )
}
```

### Vue

```vue
<template>
  <Toolbar>
    <button>Action 1</button>
    <button>Action 2</button>
    <button>Action 3</button>
  </Toolbar>
</template>

<script setup>
import { Toolbar } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'regular' \| 'dense'` | `'regular'` | Toolbar height variant |
| `disableGutters` | `boolean` | `false` | Remove horizontal padding |
| `children` | `ReactNode \| VNode` | - | Toolbar content |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Variants

### Regular (Default)

```jsx
<Toolbar>
  <h1>Title</h1>
  <button>Action</button>
</Toolbar>
```

### Dense

```jsx
<Toolbar variant="dense">
  <h2>Compact Title</h2>
  <button>Action</button>
</Toolbar>
```

## Examples

### App Header

```jsx
<AppBar>
  <Toolbar>
    <Icon name="menu" />
    <h1>My App</h1>
    <div style={{ flexGrow: 1 }} />
    <button>Login</button>
  </Toolbar>
</AppBar>
```

### With Navigation

```jsx
<Toolbar>
  <button>← Back</button>
  <h2>Page Title</h2>
  <div style={{ flexGrow: 1 }} />
  <button>Save</button>
  <button>Cancel</button>
</Toolbar>
```

### Editor Toolbar

```jsx
<Toolbar>
  <button><Icon name="bold" /></button>
  <button><Icon name="italic" /></button>
  <button><Icon name="underline" /></button>
  <span className="divider" />
  <button><Icon name="link" /></button>
  <button><Icon name="image" /></button>
</Toolbar>
```

### Search Bar

```jsx
<Toolbar>
  <Input 
    placeholder="Search..." 
    startAdornment={<Icon name="search" />}
  />
  <button>Filter</button>
  <button>Sort</button>
</Toolbar>
```

### Action Buttons

```jsx
<Toolbar>
  <button>New</button>
  <button>Edit</button>
  <button>Delete</button>
  <div style={{ flexGrow: 1 }} />
  <button>Settings</button>
</Toolbar>
```

### No Gutters

```jsx
<Toolbar disableGutters>
  <button>Full Width Content</button>
</Toolbar>
```

### With Logo and Menu

```jsx
<Toolbar>
  <img src="/logo.png" alt="Logo" className="logo" />
  <div style={{ flexGrow: 1 }} />
  <nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <button>Sign Up</button>
</Toolbar>
```

## Common Patterns

### Spacer

Use a flex-grow div to push content apart:

```jsx
<Toolbar>
  <div>Left content</div>
  <div style={{ flexGrow: 1 }} />
  <div>Right content</div>
</Toolbar>
```

### Icon Buttons

```jsx
<Toolbar>
  <IconButton><Icon name="menu" /></IconButton>
  <h1>Title</h1>
  <div style={{ flexGrow: 1 }} />
  <IconButton><Icon name="search" /></IconButton>
  <IconButton><Icon name="notifications" /></IconButton>
  <IconButton><Icon name="user" /></IconButton>
</Toolbar>
```

### Mobile Menu

```jsx
<Toolbar>
  <IconButton onClick={toggleMenu}>
    <Icon name="menu" />
  </IconButton>
  <h1>Mobile App</h1>
</Toolbar>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-toolbar` - Base toolbar class
- `wc-toolbar--regular` - Regular height
- `wc-toolbar--dense` - Compact height
- `wc-toolbar--no-gutters` - No padding variant

### Custom Styling

```css
.wc-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  min-height: 64px;
}

.wc-toolbar--dense {
  min-height: 48px;
}
```

## Layout

Toolbar uses flexbox for layout:
- Items align center vertically by default
- Horizontal flow
- Use flexGrow to create spacers
- Responsive to content

## Best Practices

1. **Consistency**: Use the same variant throughout your app
2. **Spacing**: Use flexGrow divs to separate logical groups
3. **Icons**: Use icon buttons for toolbar actions
4. **Mobile**: Consider dense variant for mobile
5. **Accessibility**: Ensure buttons have proper labels

## Use Cases

- App headers and navigation bars
- Editor toolbars
- Data table actions
- Form action buttons
- Admin panels
- Dashboard headers

## Notes

- Commonly used inside AppBar component
- Provides horizontal layout for controls
- Dense variant saves vertical space
- DisableGutters useful when toolbar is in a container with its own padding
- Works well with IconButton components

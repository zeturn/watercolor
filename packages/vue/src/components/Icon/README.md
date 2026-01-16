# Icon

A flexible icon component that supports multiple icon libraries with dynamic loading and consistent styling.

## Features

- Multiple icon library support (Lucide, Tabler, Phosphor)
- Dynamic icon loading
- Semantic size options
- Color customization
- Custom HTML icons
- Fallback mechanism
- Performance optimized with lazy loading

## Supported Libraries

- **Lucide** (default) - Modern, customizable icons
- **Tabler** - Clean, minimal icons  
- **Phosphor** - Versatile icon family

## Basic Usage

### React

```jsx
import { Icon } from '@zeturn/watercolor'

function App() {
  return (
    <Icon library="lucide" name="home" size="md" />
  )
}
```

### Vue

```vue
<template>
  <Icon library="lucide" name="home" size="md" />
</template>

<script setup>
import { Icon } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `library` | `'lucide' \| 'tabler' \| 'phosphor'` | `'lucide'` | Icon library to use |
| `name` | `string` | `''` | Icon name from the library |
| `html` | `string` | `''` | Custom HTML/SVG for icon |
| `size` | `number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `24` | Icon size |
| `color` | `string` | `'currentColor'` | Icon color |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Size Options

| Size | Pixels |
|------|--------|
| `xs` | 16px |
| `sm` | 20px |
| `md` | 24px |
| `lg` | 32px |
| `xl` | 48px |

## Examples

### Lucide Icons

```jsx
<Icon library="lucide" name="home" size="md" />
<Icon library="lucide" name="user" size="lg" />
<Icon library="lucide" name="settings" size="sm" />
```

### Tabler Icons

```jsx
<Icon library="tabler" name="home" size="md" />
<Icon library="tabler" name="search" size="lg" />
```

### Phosphor Icons

```jsx
<Icon library="phosphor" name="House" size="md" />
<Icon library="phosphor" name="User" size="lg" />
```

### Custom Sizes

```jsx
<Icon library="lucide" name="star" size={32} />
<Icon library="lucide" name="heart" size={48} />
```

### Custom Colors

```jsx
<Icon library="lucide" name="check" color="#00ff00" />
<Icon library="lucide" name="error" color="red" />
<Icon library="lucide" name="info" color="var(--wc-primary-500)" />
```

### Custom HTML Icon

```jsx
<Icon 
  html='<svg viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7z"/></svg>'
  size={24}
  color="blue"
/>
```

### With Text

```jsx
<div className="icon-label">
  <Icon library="lucide" name="mail" size="sm" />
  <span>Messages</span>
</div>
```

### In Button

```jsx
<button className="icon-button">
  <Icon library="lucide" name="trash" size="md" color="red" />
  Delete
</button>
```

### Navigation Menu

```jsx
<nav>
  <a href="/home">
    <Icon library="lucide" name="home" size="md" />
    Home
  </a>
  <a href="/profile">
    <Icon library="lucide" name="user" size="md" />
    Profile
  </a>
  <a href="/settings">
    <Icon library="lucide" name="settings" size="md" />
    Settings
  </a>
</nav>
```

## Styling

```css
.wc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## Performance

The component uses lazy loading for icon libraries:
- Icons are loaded only when needed
- Fallback to stub icon if loading fails
- Minimal bundle size impact

## Best Practices

1. **Consistent Library**: Use one library throughout your app
2. **Semantic Sizes**: Use semantic sizes (xs, sm, md) for consistency
3. **Color**: Use CSS variables or theme colors
4. **Accessibility**: Add aria-labels when icons convey meaning

## Notes

- Icons are loaded dynamically to reduce initial bundle size
- Heroicons support is currently disabled
- Falls back to a placeholder if icon cannot be loaded
- Uses Suspense for loading states

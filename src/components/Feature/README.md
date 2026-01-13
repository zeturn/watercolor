# Feature

A feature card component for showcasing product features, services, or highlights in an attractive layout.

## Features

- Multiple size options
- Alignment control (left, center, right)
- Background variants
- Icon support
- Vertical or horizontal layout
- Reverse layout option
- Call-to-action button
- Clickable cards
- Dark mode support

## Basic Usage

### React

```jsx
import { Feature } from '@zeturn/watercolor'

function App() {
  return (
    <Feature
      title="Awesome Feature"
      description="Feature description goes here."
      icon="✨"
    />
  )
}
```

### Vue

```vue
<template>
  <Feature
    title="Awesome Feature"
    description="Feature description goes here."
    icon="✨"
  />
</template>

<script setup>
import { Feature } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Awesome Feature'` | Feature title |
| `description` | `string` | `'Feature description goes here.'` | Feature description |
| `icon` | `string \| ReactNode` | `''` | Icon (emoji, SVG, or component) |
| `iconSize` | `number` | `48` | Icon size in pixels |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Feature card size |
| `align` | `'left' \| 'center' \| 'right'` | `'left'` | Content alignment |
| `background` | `'default' \| 'subtle' \| 'bold'` | `'default'` | Background style |
| `bgColor` | `string` | `''` | Custom background color |
| `reverse` | `boolean` | `false` | Reverse icon and content order |
| `vertical` | `boolean` | `false` | Vertical layout |
| `ctaLabel` | `string` | `''` | Call-to-action button label |
| `ctaHref` | `string` | `'#'` | CTA link URL |
| `onClick` | `function` | - | Click handler for card |
| `onCtaClick` | `function` | - | Click handler for CTA |
| `children` | `ReactNode \| VNode` | - | Custom content (overrides description) |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Size Options

```jsx
<Feature size="sm" title="Small" description="Compact feature card" icon="📦" />
<Feature size="md" title="Medium" description="Standard feature card" icon="📦" />
<Feature size="lg" title="Large" description="Large feature card" icon="📦" />
```

## Alignment

```jsx
<Feature align="left" title="Left" description="Left aligned" icon="⬅️" />
<Feature align="center" title="Center" description="Center aligned" icon="⏺️" />
<Feature align="right" title="Right" description="Right aligned" icon="➡️" />
```

## Background Variants

```jsx
<Feature background="default" title="Default" description="Default background" />
<Feature background="subtle" title="Subtle" description="Subtle background" />
<Feature background="bold" title="Bold" description="Bold background" />
```

## Layout Options

### Horizontal (Default)

```jsx
<Feature
  icon="🚀"
  title="Fast Performance"
  description="Lightning-fast load times"
/>
```

### Vertical

```jsx
<Feature
  vertical
  icon="🚀"
  title="Fast Performance"
  description="Lightning-fast load times"
/>
```

### Reverse

```jsx
<Feature
  reverse
  icon="🚀"
  title="Fast Performance"
  description="Lightning-fast load times"
/>
```

## Examples

### Product Features

```jsx
<div className="features-grid">
  <Feature
    icon="⚡"
    title="Lightning Fast"
    description="Optimized for speed and performance"
    align="center"
  />
  <Feature
    icon="🔒"
    title="Secure"
    description="Enterprise-grade security"
    align="center"
  />
  <Feature
    icon="🎨"
    title="Beautiful"
    description="Stunning user interface"
    align="center"
  />
</div>
```

### With CTA Button

```jsx
<Feature
  icon="📱"
  title="Mobile Ready"
  description="Works seamlessly on all devices"
  ctaLabel="Learn More"
  ctaHref="/mobile"
  onCtaClick={(e) => console.log('CTA clicked')}
/>
```

### Clickable Card

```jsx
<Feature
  icon="🔍"
  title="Advanced Search"
  description="Find anything in seconds"
  onClick={() => navigate('/search')}
  background="subtle"
/>
```

### Custom Icon Component

```jsx
<Feature
  icon={<Icon library="lucide" name="zap" size={48} />}
  title="Power Features"
  description="All the tools you need"
/>
```

### Custom Background Color

```jsx
<Feature
  icon="💎"
  title="Premium"
  description="Exclusive premium features"
  bgColor="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  align="center"
/>
```

### Vertical Feature List

```jsx
<div className="feature-list">
  <Feature
    vertical
    icon="✅"
    title="Easy Setup"
    description="Get started in minutes with our simple setup process"
    size="sm"
  />
  <Feature
    vertical
    icon="🚀"
    title="Fast Deployment"
    description="Deploy your application with a single command"
    size="sm"
  />
  <Feature
    vertical
    icon="📊"
    title="Analytics"
    description="Track and analyze your performance metrics"
    size="sm"
  />
</div>
```

### Service Cards

```jsx
<div className="services">
  <Feature
    icon="💻"
    title="Web Development"
    description="Custom web applications built with modern technologies"
    ctaLabel="View Services"
    background="bold"
    align="center"
    vertical
  />
  <Feature
    icon="📱"
    title="Mobile Apps"
    description="Native and cross-platform mobile applications"
    ctaLabel="View Services"
    background="bold"
    align="center"
    vertical
  />
</div>
```

### Large Icon Feature

```jsx
<Feature
  icon="🎯"
  iconSize={96}
  title="Precision Targeting"
  description="Reach your exact audience with advanced targeting options"
  size="lg"
  align="center"
  vertical
/>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-feature` - Base feature card
- `wc-feature--sm`, `wc-feature--md`, `wc-feature--lg` - Size variants
- `wc-feature--left`, `wc-feature--center`, `wc-feature--right` - Alignment
- `wc-feature--vertical` - Vertical layout
- `wc-feature--reverse` - Reversed layout
- `wc-feature-icon` - Icon container
- `wc-feature-content` - Content container
- `wc-feature-cta` - Call-to-action button

## Use Cases

- Product feature highlights
- Service showcases
- Benefits sections
- Process steps
- Value propositions
- Landing page features
- About page highlights

## Best Practices

1. **Icons**: Use consistent icon style across features
2. **Length**: Keep titles short and descriptions concise
3. **Grid**: Use CSS Grid or Flexbox for feature grids
4. **Alignment**: Center alignment works well for feature grids
5. **CTA**: Use sparingly, only for important actions

## Accessibility

- Semantic HTML structure
- Clickable cards have proper cursor
- CTA links are keyboard accessible
- Proper heading hierarchy
- Alt text for icon images (when using img)

## Notes

- Icons can be emojis, SVG strings, or React/Vue components
- Background color can be solid color or gradient
- Click handler makes entire card clickable
- CTA click handler is separate from card click
- Supports both light and dark modes
- Vertical layout stacks icon on top of content

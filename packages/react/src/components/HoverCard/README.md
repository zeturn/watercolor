# HoverCard

An interactive card component that appears when hovering over a trigger element, displaying additional information or actions.

## Features

- Multiple variants (default, outlined, filled, minimal)
- Size options for both trigger and card
- Position control (top, bottom, left, right)
- Configurable delays
- Custom trigger and card content
- Arrow indicator
- Action buttons support
- Touch support

## Basic Usage

### React

```jsx
import { HoverCard } from '@zeturn/watercolor'

function App() {
  return (
    <HoverCard
      triggerText="Hover me"
      cardData={{
        title: "Card Title",
        description: "Card description",
        image: "/image.jpg"
      }}
    />
  )
}
```

### Vue

```vue
<template>
  <HoverCard
    trigger-text="Hover me"
    :card-data="{
      title: 'Card Title',
      description: 'Card description',
      image: '/image.jpg'
    }"
  />
</template>

<script setup>
import { HoverCard } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `triggerText` | `string` | `'Hover me'` | Text for default trigger |
| `cardData` | `object` | `{}` | Data for card content |
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'minimal'` | `'default'` | Card style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Trigger size |
| `cardSize` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Card size |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Card position |
| `delay` | `number` | `300` | Show delay in ms |
| `hideDelay` | `number` | `100` | Hide delay in ms |
| `showArrow` | `boolean` | `true` | Show position arrow |
| `disabled` | `boolean` | `false` | Disable hover card |
| `onShow` | `function` | - | Callback when card shows |
| `onHide` | `function` | - | Callback when card hides |
| `onAction` | `function` | - | Callback for action buttons |
| `children` | `ReactNode \| VNode` | - | Custom trigger content |
| `card` | `ReactNode \| VNode` | - | Custom card content |
| `className` | `string` | `''` | Additional CSS classes |

## Card Data Structure

```typescript
{
  title?: string
  description?: string
  image?: string
  avatar?: string
  meta?: string
  actions?: Array<{
    label: string
    onClick?: function
  }>
}
```

## Variants

### Default

```jsx
<HoverCard
  variant="default"
  triggerText="Default"
  cardData={{ title: "Title", description: "Description" }}
/>
```

### Outlined

```jsx
<HoverCard
  variant="outlined"
  triggerText="Outlined"
  cardData={{ title: "Title", description: "Description" }}
/>
```

### Filled

```jsx
<HoverCard
  variant="filled"
  triggerText="Filled"
  cardData={{ title: "Title", description: "Description" }}
/>
```

### Minimal

```jsx
<HoverCard
  variant="minimal"
  triggerText="Minimal"
  cardData={{ title: "Title", description: "Description" }}
/>
```

## Examples

### User Profile Card

```jsx
<HoverCard
  triggerText="@username"
  position="bottom"
  cardData={{
    avatar: "/user-avatar.jpg",
    title: "John Doe",
    description: "Software Engineer at Company",
    meta: "Joined March 2025",
    actions: [
      { label: "Follow", onClick: handleFollow },
      { label: "Message", onClick: handleMessage }
    ]
  }}
/>
```

### Product Preview

```jsx
<HoverCard
  triggerText="View Product"
  cardSize="lg"
  cardData={{
    image: "/product.jpg",
    title: "Product Name",
    description: "Product description and features",
    meta: "$99.99",
    actions: [
      { label: "Add to Cart", onClick: addToCart },
      { label: "Details", onClick: viewDetails }
    ]
  }}
/>
```

### Link Preview

```jsx
<HoverCard
  triggerText="example.com"
  position="top"
  cardData={{
    image: "/preview.jpg",
    title: "Website Title",
    description: "Website description and preview",
    meta: "example.com"
  }}
/>
```

### Custom Trigger

```jsx
<HoverCard
  cardData={{
    title: "Additional Info",
    description: "More details here"
  }}
>
  <button className="custom-trigger">
    <Icon name="info" />
    Learn More
  </button>
</HoverCard>
```

### Custom Card Content

```jsx
<HoverCard
  triggerText="Custom Card"
  card={
    <div className="custom-card">
      <h3>Custom Content</h3>
      <p>Any custom React content</p>
      <button>Action</button>
    </div>
  }
/>
```

### Team Member Card

```jsx
<HoverCard
  cardData={{
    avatar: "/team-member.jpg",
    title: "Jane Smith",
    description: "Lead Designer",
    meta: "jane@example.com",
    actions: [
      { label: "Email", onClick: sendEmail },
      { label: "Profile", onClick: viewProfile }
    ]
  }}
>
  <Avatar src="/team-member.jpg" />
</HoverCard>
```

### Article Preview

```jsx
<HoverCard
  position="right"
  cardSize="lg"
  cardData={{
    image: "/article-thumb.jpg",
    title: "Article Title",
    description: "Article excerpt and summary...",
    meta: "5 min read • Published 2 days ago"
  }}
>
  <a href="/article">Read Article</a>
</HoverCard>
```

### Repository Info

```jsx
<HoverCard
  triggerText="username/repo"
  cardData={{
    title: "Repository Name",
    description: "Repository description and details",
    meta: "⭐ 1.2k   🍴 350   TypeScript",
    actions: [
      { label: "Star", onClick: starRepo },
      { label: "Fork", onClick: forkRepo }
    ]
  }}
/>
```

## Position Options

```jsx
<HoverCard position="top" triggerText="Top" cardData={...} />
<HoverCard position="bottom" triggerText="Bottom" cardData={...} />
<HoverCard position="left" triggerText="Left" cardData={...} />
<HoverCard position="right" triggerText="Right" cardData={...} />
```

## Timing

```jsx
<HoverCard
  delay={500}        // Wait 500ms before showing
  hideDelay={200}    // Wait 200ms before hiding
  triggerText="Delayed"
  cardData={...}
/>
```

## Disabled State

```jsx
<HoverCard
  disabled
  triggerText="Disabled"
  cardData={...}
/>
```

## Styling

The component uses Watercolor's CSS classes:

- `hover-card-container` - Main container
- `hover-card-popup` - Floating card
- Variant classes: `hover-card-default`, `hover-card-outlined`, etc.
- Size classes for trigger and card

## Accessibility

- Hover and focus support
- Touch device support
- Keyboard accessible
- ARIA attributes
- Respects user motion preferences

## Best Practices

1. **Delays**: Use appropriate delays for good UX
2. **Position**: Choose positions that won't overflow viewport
3. **Content**: Keep card content concise
4. **Actions**: Limit to 1-3 action buttons
5. **Mobile**: Test touch interactions

## Use Cases

- User profile previews
- Link previews
- Product quick views
- Team member information
- Repository details
- Article previews
- Tooltip-style cards with actions

## Notes

- Shows on hover or touch
- Automatically hides when cursor leaves
- Supports both data-driven and custom content
- Actions are clickable buttons in the card
- Arrow indicator points to trigger element
- Responsive to container size

# Feed

A timeline or feed component for displaying chronological content, comments, or activity streams.

## Features

- Timeline and list variants
- Avatar support
- Nested items (children/replies)
- Customizable colors
- Dot and line styling
- Click handlers
- Hierarchical display
- Responsive design

## Basic Usage

### React

```jsx
import { Feed } from '@zeturn/watercolor'

function App() {
  const items = [
    {
      id: 1,
      author: "John Doe",
      time: "2 hours ago",
      text: "Just published a new article!",
      avatar: "/john.jpg"
    },
    {
      id: 2,
      author: "Jane Smith",
      time: "5 hours ago",
      text: "Working on an exciting new feature",
      avatar: "/jane.jpg"
    }
  ]

  return <Feed items={items} />
}
```

### Vue

```vue
<template>
  <Feed :items="items" />
</template>

<script setup>
import { Feed } from '@zeturn/watercolor'

const items = [
  {
    id: 1,
    author: "John Doe",
    time: "2 hours ago",
    text: "Just published a new article!",
    avatar: "/john.jpg"
  }
]
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `array` | `[]` | Array of feed items |
| `variant` | `'timeline' \| 'list'` | `'timeline'` | Display variant |
| `showAvatar` | `boolean` | `true` | Show user avatars |
| `color` | `string` | `'var(--wc-primary-500)'` | Timeline color |
| `dotSize` | `number \| string` | `12` | Dot size (px or string) |
| `lineWidth` | `number \| string` | `2` | Line width (px or string) |
| `onItemClick` | `function` | - | Click handler for items |
| `className` | `string` | `''` | Additional CSS classes |

## Item Structure

```typescript
{
  id?: string | number
  author: string
  time: string
  text: string
  avatar?: string
  children?: Array<FeedItem>  // Nested items
}
```

## Variants

### Timeline (Default)

```jsx
<Feed 
  variant="timeline"
  items={items}
/>
```

### List

```jsx
<Feed 
  variant="list"
  items={items}
/>
```

## Examples

### Activity Feed

```jsx
const activities = [
  {
    id: 1,
    author: "Alice Johnson",
    time: "10 minutes ago",
    text: "Created a new project",
    avatar: "/alice.jpg"
  },
  {
    id: 2,
    author: "Bob Wilson",
    time: "1 hour ago",
    text: "Uploaded 5 new files",
    avatar: "/bob.jpg"
  },
  {
    id: 3,
    author: "Carol Brown",
    time: "3 hours ago",
    text: "Commented on the design review",
    avatar: "/carol.jpg"
  }
]

<Feed items={activities} />
```

### Comment Thread

```jsx
const comments = [
  {
    id: 1,
    author: "John",
    time: "2 days ago",
    text: "Great article! Very helpful.",
    avatar: "/john.jpg",
    children: [
      {
        id: 11,
        author: "Author",
        time: "2 days ago",
        text: "Thank you! Glad it helped.",
        avatar: "/author.jpg"
      }
    ]
  },
  {
    id: 2,
    author: "Jane",
    time: "1 day ago",
    text: "I have a question about the implementation...",
    avatar: "/jane.jpg",
    children: [
      {
        id: 21,
        author: "Author",
        time: "1 day ago",
        text: "Happy to help! What's your question?",
        avatar: "/author.jpg"
      },
      {
        id: 22,
        author: "Jane",
        time: "1 day ago",
        text: "How do I handle edge cases?",
        avatar: "/jane.jpg"
      }
    ]
  }
]

<Feed items={comments} />
```

### Project Timeline

```jsx
const timeline = [
  {
    id: 1,
    author: "Project Manager",
    time: "January 2026",
    text: "Project kickoff meeting completed",
    avatar: "/pm.jpg"
  },
  {
    id: 2,
    author: "Design Team",
    time: "February 2026",
    text: "Initial designs approved",
    avatar: "/design.jpg"
  },
  {
    id: 3,
    author: "Dev Team",
    time: "March 2026",
    text: "First milestone reached",
    avatar: "/dev.jpg"
  }
]

<Feed 
  items={timeline}
  color="var(--wc-success-500)"
/>
```

### Without Avatars

```jsx
<Feed 
  items={items}
  showAvatar={false}
/>
```

### Custom Styling

```jsx
<Feed 
  items={items}
  color="#ff6b6b"
  dotSize={16}
  lineWidth={3}
/>
```

### With Click Handler

```jsx
<Feed 
  items={items}
  onItemClick={(item) => {
    console.log('Clicked:', item)
    // Navigate or show details
  }}
/>
```

### Social Feed

```jsx
const posts = [
  {
    id: 1,
    author: "Sarah Smith",
    time: "30 minutes ago",
    text: "Just launched our new website! 🎉",
    avatar: "/sarah.jpg"
  },
  {
    id: 2,
    author: "Mike Davis",
    time: "2 hours ago",
    text: "Thanks everyone for the birthday wishes! ❤️",
    avatar: "/mike.jpg",
    children: [
      {
        author: "Emma Wilson",
        time: "2 hours ago",
        text: "Happy birthday! 🎂",
        avatar: "/emma.jpg"
      },
      {
        author: "Tom Brown",
        time: "1 hour ago",
        text: "Have a great day!",
        avatar: "/tom.jpg"
      }
    ]
  }
]

<Feed items={posts} variant="list" />
```

### Notification Feed

```jsx
const notifications = [
  {
    id: 1,
    author: "System",
    time: "Just now",
    text: "Your password was changed successfully",
    avatar: "/system.jpg"
  },
  {
    id: 2,
    author: "Admin",
    time: "1 hour ago",
    text: "New features are now available",
    avatar: "/admin.jpg"
  }
]

<Feed 
  items={notifications}
  color="var(--wc-info-500)"
/>
```

### Changelog Feed

```jsx
const changes = [
  {
    id: 1,
    author: "v2.0.0",
    time: "March 2026",
    text: "Major update with new features and improvements",
    children: [
      {
        author: "Feature",
        time: "",
        text: "Added dark mode support"
      },
      {
        author: "Feature",
        time: "",
        text: "New component library"
      },
      {
        author: "Fix",
        time: "",
        text: "Resolved performance issues"
      }
    ]
  },
  {
    id: 2,
    author: "v1.5.0",
    time: "February 2026",
    text: "Minor update and bug fixes"
  }
]

<Feed items={changes} showAvatar={false} />
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-feed-list` - Feed container
- `wc-feed-item` - Individual feed item
- `wc-feed-avatar` - Avatar container
- `wc-feed-content` - Content area
- `wc-feed-header` - Header with author and time
- `wc-feed-author` - Author name
- `wc-feed-time` - Timestamp
- `wc-feed-text` - Item text content
- `wc-feed-children` - Nested items container

### Custom Styling with CSS Variables

The component uses CSS variables for easy customization:

```css
.my-feed {
  --feed-color: #your-color;
  --feed-dot-size: 14px;
  --feed-line-width: 2px;
}
```

## Nested Items

Nested items (children) create a hierarchical structure:

```jsx
const threadedData = [
  {
    author: "Parent",
    text: "Parent item",
    children: [
      {
        author: "Child 1",
        text: "First reply"
      },
      {
        author: "Child 2",
        text: "Second reply",
        children: [
          {
            author: "Grandchild",
            text: "Nested reply"
          }
        ]
      }
    ]
  }
]
```

## Use Cases

- Activity feeds
- Comment threads
- Project timelines
- Social media feeds
- Notification lists
- Changelog displays
- Conversation threads
- Event histories

## Best Practices

1. **Timestamps**: Use relative time (e.g., "2 hours ago")
2. **Avatars**: Provide fallback images
3. **Nesting**: Limit nesting depth for readability
4. **Colors**: Use theme colors for consistency
5. **Click Handlers**: Provide clear feedback on interaction

## Accessibility

- Semantic HTML structure
- Proper list markup
- Clickable items are keyboard accessible
- Avatar images have alt text
- Readable color contrasts

## Notes

- Supports unlimited nesting levels
- Timeline connector lines automatically adjust
- Avatar images are optional
- Color, dot size, and line width can be customized
- Click handler receives the entire item object
- Works with both absolute and relative timestamps

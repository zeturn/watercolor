# Popover

A popover component that displays content in a floating panel positioned relative to a trigger element.

## Features

- Multiple placement options (top, bottom, left, right)
- Controlled and uncontrolled modes
- Custom trigger element
- Automatic positioning
- Offset customization
- Portal rendering
- Click outside to close

## Basic Usage

### React

```jsx
import { Popover } from '@zeturn/watercolor'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      trigger={<button>Open</button>}
      placement="bottom"
    >
      <div>Popover content</div>
    </Popover>
  )
}
```

### Vue

```vue
<template>
  <Popover
    v-model:open="open"
    placement="bottom"
  >
    <template #trigger>
      <button>Open</button>
    </template>
    <div>Popover content</div>
  </Popover>
</template>

<script setup>
import { ref } from 'vue'
import { Popover } from '@zeturn/watercolor'

const open = ref(false)
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `function` | - | Callback when open state changes |
| `trigger` | `ReactNode \| VNode` | - | Element that triggers the popover |
| `triggerText` | `string` | `'打开弹窗'` | Default trigger text |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Popover position |
| `offset` | `number` | `8` | Distance from trigger (px) |
| `children` | `ReactNode \| VNode` | - | Popover content |
| `className` | `string` | `''` | Additional CSS classes |

## Placement Options

### Bottom (Default)

```jsx
<Popover placement="bottom" trigger={<button>Bottom</button>}>
  Content below
</Popover>
```

### Top

```jsx
<Popover placement="top" trigger={<button>Top</button>}>
  Content above
</Popover>
```

### Left

```jsx
<Popover placement="left" trigger={<button>Left</button>}>
  Content to the left
</Popover>
```

### Right

```jsx
<Popover placement="right" trigger={<button>Right</button>}>
  Content to the right
</Popover>
```

## Examples

### User Menu

```jsx
<Popover
  trigger={
    <button className="user-button">
      <Avatar src={user.avatar} />
    </button>
  }
  placement="bottom"
>
  <div className="user-menu">
    <div className="user-info">
      <strong>{user.name}</strong>
      <span>{user.email}</span>
    </div>
    <button>Profile</button>
    <button>Settings</button>
    <button>Logout</button>
  </div>
</Popover>
```

### Help Tooltip

```jsx
<Popover
  trigger={<Icon name="help-circle" />}
  placement="top"
>
  <div className="help-content">
    <h4>Need Help?</h4>
    <p>Click here to learn more about this feature.</p>
  </div>
</Popover>
```

### Color Picker

```jsx
<Popover
  trigger={
    <div 
      className="color-swatch" 
      style={{ background: selectedColor }}
    />
  }
>
  <ColorPicker 
    value={selectedColor}
    onChange={setSelectedColor}
  />
</Popover>
```

### Action Menu

```jsx
<Popover
  trigger={<button>Actions</button>}
  placement="bottom"
>
  <div className="action-menu">
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDuplicate}>Duplicate</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
</Popover>
```

### Date Picker Trigger

```jsx
<Popover
  trigger={
    <Input 
      value={selectedDate} 
      readOnly 
      placeholder="Select date"
    />
  }
>
  <DatePicker 
    value={selectedDate}
    onChange={setSelectedDate}
  />
</Popover>
```

### Share Menu

```jsx
<Popover
  trigger={<button>Share</button>}
>
  <div className="share-menu">
    <h4>Share this</h4>
    <button><Icon name="twitter" /> Twitter</button>
    <button><Icon name="facebook" /> Facebook</button>
    <button><Icon name="linkedin" /> LinkedIn</button>
    <button><Icon name="link" /> Copy Link</button>
  </div>
</Popover>
```

### Custom Offset

```jsx
<Popover
  trigger={<button>Open</button>}
  offset={16}
>
  Larger offset from trigger
</Popover>
```

## Controlled Mode

```jsx
const [open, setOpen] = useState(false)

<div>
  <Popover
    open={open}
    onOpenChange={setOpen}
    trigger={<button>Controlled</button>}
  >
    <div>
      Popover content
      <button onClick={() => setOpen(false)}>Close</button>
    </div>
  </Popover>
</div>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-popover` - Main popover container
- `wc-popover-trigger` - Trigger element wrapper
- `wc-popover-content` - Content panel
- Placement classes for positioning

## Positioning

The popover automatically positions itself relative to the trigger element using JavaScript:
- Calculates trigger element position
- Applies appropriate offset
- Centers content relative to trigger
- Updates position on scroll

## Accessibility

- Properly associates trigger with content
- Supports keyboard navigation
- Click outside to close
- ESC key to close (can be added)
- ARIA attributes for screen readers

## Best Practices

1. **Trigger**: Provide clear, clickable triggers
2. **Placement**: Choose placement that won't overflow viewport
3. **Content**: Keep popover content focused and concise
4. **Close**: Provide clear way to close the popover
5. **Mobile**: Test on mobile devices for touch interaction

## Notes

- Renders content in a portal to avoid z-index issues
- Automatically repositions on window scroll/resize
- Supports both controlled and uncontrolled modes
- Closes when clicking outside the popover
- Positions are calculated dynamically based on trigger location

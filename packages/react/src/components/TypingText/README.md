# TypingText

An animated text component that simulates a typewriter effect, displaying text character by character.

## Features

- Smooth typing animation
- Customizable typing speed
- Cursor blink effect
- Loop support
- Pause between iterations
- Callback when typing completes

## Basic Usage

### React

```jsx
import { TypingText } from '@zeturn/watercolor'

function App() {
  return (
    <TypingText text="Hello, World!" />
  )
}
```

### Vue

```vue
<template>
  <TypingText text="Hello, World!" />
</template>

<script setup>
import { TypingText } from '@zeturn/watercolor'
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string \| string[]` | `''` | Text to display or array of texts to cycle through |
| `speed` | `number` | `100` | Typing speed in milliseconds per character |
| `delay` | `number` | `0` | Initial delay before typing starts (ms) |
| `loop` | `boolean` | `false` | Whether to repeat the animation |
| `pauseTime` | `number` | `1000` | Pause duration between loops (ms) |
| `showCursor` | `boolean` | `true` | Whether to show the blinking cursor |
| `cursor` | `string` | `'\|'` | Character to use as cursor |
| `onComplete` | `function` | - | Callback when typing animation completes |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Basic Typing Animation

```jsx
<TypingText text="Welcome to our website!" />
```

### Custom Speed

```jsx
<TypingText 
  text="Fast typing animation" 
  speed={50}
/>

<TypingText 
  text="Slow typing animation" 
  speed={200}
/>
```

### Multiple Texts with Loop

```jsx
<TypingText 
  text={[
    "Welcome to Watercolor",
    "Beautiful UI Components",
    "Easy to Use"
  ]}
  loop={true}
  pauseTime={2000}
/>
```

### Without Cursor

```jsx
<TypingText 
  text="Simple text animation" 
  showCursor={false}
/>
```

### Custom Cursor

```jsx
<TypingText 
  text="Custom cursor style" 
  cursor="_"
/>
```

### With Delay

```jsx
<TypingText 
  text="This appears after 2 seconds" 
  delay={2000}
/>
```

### With Completion Callback

```jsx
<TypingText 
  text="Loading complete!" 
  onComplete={() => {
    console.log('Typing finished!')
    // Show next UI element
  }}
/>
```

### Hero Section

```jsx
<div className="hero">
  <h1>
    <TypingText 
      text={[
        "Build Amazing Products",
        "Design Beautiful Interfaces",
        "Create Delightful Experiences"
      ]}
      loop={true}
      speed={80}
      pauseTime={3000}
    />
  </h1>
</div>
```

### Code Terminal Effect

```jsx
<div className="terminal">
  <TypingText 
    text="$ npm install @zeturn/watercolor"
    speed={50}
    cursor="_"
    showCursor={true}
  />
</div>
```

### Notification Text

```jsx
<TypingText 
  text="Your file has been saved successfully"
  speed={60}
  showCursor={false}
  onComplete={() => setShowCheckmark(true)}
/>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-typing-text` - Main container
- `wc-typing-text__content` - Text content
- `wc-typing-text__cursor` - Blinking cursor
- `wc-typing-text__cursor--blink` - Cursor animation

### Custom Styling

```css
.wc-typing-text {
  font-family: monospace;
  font-size: 1.5rem;
}

.wc-typing-text__cursor {
  color: var(--wc-primary-500);
}
```

## Animation Timing

The component provides fine-grained control over animation timing:

```jsx
<TypingText 
  text="Precise timing control"
  speed={100}        // Time per character
  delay={500}        // Initial delay
  pauseTime={2000}   // Pause between loops
/>
```

## Multiple Text Cycle

When providing an array of texts:

```jsx
<TypingText 
  text={['First text', 'Second text', 'Third text']}
  loop={true}
/>
```

The component will:
1. Type the first text
2. Pause
3. Clear the text
4. Type the next text
5. Repeat

## Accessibility

- Uses semantic HTML
- Screen readers will read the final text
- Respects user's motion preferences (can be enhanced)

## Best Practices

1. **Speed**: 50-150ms works well for most use cases
2. **Text Length**: Keep texts concise for better effect
3. **Loop**: Use sparingly to avoid distraction
4. **Cursor**: Match your design aesthetic
5. **Completion**: Use callbacks for sequential animations

## Performance Considerations

- Uses efficient character-by-character rendering
- Minimal re-renders
- Cleans up timers properly
- Lightweight animation implementation

## Use Cases

- Hero sections and landing pages
- Terminal/CLI simulations
- Notification messages
- Loading states with messages
- Creative text reveals
- Interactive storytelling
- Code demonstrations

## Notes

- The animation can be restarted by changing the `text` prop
- Loop mode continuously cycles through all texts
- The cursor blinks independently of the typing animation
- Component cleans up all timers on unmount

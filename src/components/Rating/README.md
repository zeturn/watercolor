# Rating

A star rating component for collecting user feedback and displaying ratings.

## Features

- Customizable maximum stars
- Interactive or read-only modes
- Hover preview
- Click to rate
- Unselect by clicking again
- Keyboard accessible
- Dark mode support

## Basic Usage

### React

```jsx
import { Rating } from '@zeturn/watercolor'

function App() {
  const [rating, setRating] = useState(0)

  return (
    <Rating 
      value={rating}
      onChange={(value) => setRating(value)}
    />
  )
}
```

### Vue

```vue
<template>
  <Rating 
    v-model="rating"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Rating } from '@zeturn/watercolor'

const rating = ref(0)
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current rating value |
| `max` | `number` | `5` | Maximum number of stars |
| `readOnly` | `boolean` | `false` | Whether rating is read-only |
| `onChange` | `function` | - | Callback when rating changes |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

## Examples

### Basic Rating

```jsx
<Rating value={3} onChange={setValue} />
```

### Read-Only Rating

```jsx
<Rating value={4.5} readOnly />
```

### Custom Maximum Stars

```jsx
<Rating value={7} max={10} onChange={setValue} />
```

### With Label

```jsx
<div className="rating-group">
  <label>Rate this product:</label>
  <Rating value={rating} onChange={setRating} />
  <span>{rating} / 5</span>
</div>
```

### Product Rating

```jsx
<div className="product-card">
  <h3>Product Name</h3>
  <Rating value={4} readOnly />
  <p>(128 reviews)</p>
</div>
```

### Review Form

```jsx
<form>
  <div className="form-group">
    <label>Overall Rating *</label>
    <Rating value={overallRating} onChange={setOverallRating} />
  </div>
  
  <div className="form-group">
    <label>Quality *</label>
    <Rating value={qualityRating} onChange={setQualityRating} />
  </div>
  
  <div className="form-group">
    <label>Value *</label>
    <Rating value={valueRating} onChange={setValueRating} />
  </div>
</form>
```

### Clearable Rating

```jsx
const [rating, setRating] = useState(0)

<div>
  <Rating value={rating} onChange={setRating} />
  {rating > 0 && (
    <button onClick={() => setRating(0)}>Clear</button>
  )}
</div>
```

### Rating with Description

```jsx
const descriptions = {
  1: 'Poor',
  2: 'Fair', 
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent'
}

<div>
  <Rating value={rating} onChange={setRating} />
  <p>{descriptions[rating] || 'Not rated'}</p>
</div>
```

### Average Rating Display

```jsx
<div className="rating-summary">
  <div className="average">4.2</div>
  <Rating value={4.2} readOnly />
  <div className="count">Based on 256 reviews</div>
</div>
```

### Detailed Rating Breakdown

```jsx
<div className="ratings-breakdown">
  <div className="rating-row">
    <span>5 stars</span>
    <Rating value={5} max={5} readOnly />
    <span>150</span>
  </div>
  <div className="rating-row">
    <span>4 stars</span>
    <Rating value={4} max={5} readOnly />
    <span>80</span>
  </div>
  <div className="rating-row">
    <span>3 stars</span>
    <Rating value={3} max={5} readOnly />
    <span>20</span>
  </div>
  <div className="rating-row">
    <span>2 stars</span>
    <Rating value={2} max={5} readOnly />
    <span>5</span>
  </div>
  <div className="rating-row">
    <span>1 star</span>
    <Rating value={1} max={5} readOnly />
    <span>1</span>
  </div>
</div>
```

## Behavior

### Interactive Mode

- Hover over stars to preview rating
- Click to set rating
- Click the same star again to unset (return to 0)
- Stars highlight on hover

### Read-Only Mode

- Displays current rating
- No hover effects
- Not clickable
- Useful for showing existing ratings

## Styling

The component uses Watercolor's CSS classes:

- `wc-rating` - Container
- `wc-rating-item` - Individual star button
- `wc-rating-item.active` - Active/filled star

### Custom Styling

```css
.wc-rating-item {
  font-size: 2rem; /* Larger stars */
}

.wc-rating-item.active {
  color: gold; /* Custom color */
}
```

## Accessibility

- Uses proper ARIA attributes (`role="radiogroup"`, `role="radio"`)
- Each star has `aria-checked` state
- Keyboard navigation support
- Screen reader friendly
- Disabled state for read-only

## Use Cases

- Product reviews
- Service ratings
- Content feedback
- User testimonials
- Skill level indicators
- Satisfaction surveys
- App store ratings

## Best Practices

1. **Labels**: Provide clear context for what is being rated
2. **Read-Only**: Use read-only mode for displaying existing ratings
3. **Feedback**: Show the numeric value or description alongside
4. **Required**: Mark as required in forms when necessary
5. **Validation**: Validate that a rating has been selected before submission

## Notes

- Default is 5 stars (customizable with `max` prop)
- Returns 0 when no rating is selected
- Clicking the active star deselects it
- Automatically injects required CSS styles
- Supports dark mode
- Hover effect shows preview of selection

# Input

A versatile input component with support for various variants, adornments, validation states, and multiline text.

## Features

- Multiple variants (filled, outlined, standard)
- Size options (sm, md, lg)
- Start and end adornments
- Error states with helper text
- Multiline support (textarea)
- Full width option
- Auto focus
- Validation support
- Label support

## Basic Usage

### React

```jsx
import { Input } from '@zeturn/watercolor'

function App() {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter text"
    />
  )
}
```

### Vue

```vue
<template>
  <Input
    v-model="value"
    placeholder="Enter text"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@zeturn/watercolor'

const value = ref('')
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Input value |
| `onChange` | `function` | - | Change handler |
| `type` | `string` | `'text'` | Input type (text, password, email, etc.) |
| `placeholder` | `string` | `''` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `readonly` | `boolean` | `false` | Whether input is read-only |
| `required` | `boolean` | `false` | Whether input is required |
| `autoFocus` | `boolean` | `false` | Auto focus on mount |
| `maxLength` | `number` | - | Maximum character length |
| `minLength` | `number` | - | Minimum character length |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `variant` | `'filled' \| 'outlined' \| 'standard'` | `'filled'` | Input variant |
| `color` | `'primary' \| 'secondary'` | `'primary'` | Color theme |
| `error` | `boolean` | `false` | Error state |
| `helperText` | `string` | `''` | Helper or error text |
| `label` | `string` | `''` | Input label |
| `startAdornment` | `ReactNode \| VNode` | - | Element before input |
| `endAdornment` | `ReactNode \| VNode` | - | Element after input |
| `fullWidth` | `boolean` | `false` | Full width input |
| `multiline` | `boolean` | `false` | Textarea mode |
| `rows` | `number` | `4` | Rows for multiline |
| `autoComplete` | `string` | `'off'` | Autocomplete attribute |
| `name` | `string` | `''` | Input name |
| `id` | `string` | - | Input ID |
| `className` | `string` | `''` | Additional CSS classes |

## Variants

### Filled (Default)

```jsx
<Input variant="filled" placeholder="Filled input" />
```

### Outlined

```jsx
<Input variant="outlined" placeholder="Outlined input" />
```

### Standard

```jsx
<Input variant="standard" placeholder="Standard input" />
```

## Sizes

```jsx
<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />
```

## With Label

```jsx
<Input 
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>
```

## With Helper Text

```jsx
<Input 
  label="Username"
  placeholder="Enter username"
  helperText="Must be at least 3 characters"
/>
```

## Error State

```jsx
<Input 
  label="Email"
  value={email}
  error={!isValid}
  helperText={!isValid ? "Invalid email format" : ""}
/>
```

## With Adornments

### Start Adornment

```jsx
<Input 
  placeholder="Amount"
  startAdornment={<span>$</span>}
/>
```

### End Adornment

```jsx
<Input 
  type="password"
  placeholder="Password"
  endAdornment={
    <button onClick={toggleShow}>
      {show ? '👁️' : '👁️‍🗨️'}
    </button>
  }
/>
```

### Both Adornments

```jsx
<Input 
  placeholder="Website"
  startAdornment={<span>https://</span>}
  endAdornment={<span>.com</span>}
/>
```

## Multiline (Textarea)

```jsx
<Input 
  multiline
  rows={6}
  placeholder="Enter your message"
  label="Message"
/>
```

## Input Types

### Text

```jsx
<Input type="text" placeholder="Text input" />
```

### Password

```jsx
<Input type="password" placeholder="Enter password" />
```

### Email

```jsx
<Input type="email" placeholder="Enter email" />
```

### Number

```jsx
<Input type="number" placeholder="Enter amount" />
```

### Search

```jsx
<Input 
  type="search"
  placeholder="Search..."
  startAdornment={<span>🔍</span>}
/>
```

## Full Width

```jsx
<Input 
  fullWidth
  placeholder="Full width input"
/>
```

## Disabled State

```jsx
<Input 
  disabled
  value="Cannot edit"
  placeholder="Disabled input"
/>
```

## Readonly State

```jsx
<Input 
  readonly
  value="Read-only value"
/>
```

## Form Examples

### Login Form

```jsx
<form>
  <Input 
    label="Email"
    type="email"
    fullWidth
    required
  />
  <Input 
    label="Password"
    type="password"
    fullWidth
    required
  />
</form>
```

### Search with Icon

```jsx
<Input 
  placeholder="Search..."
  startAdornment={
    <Icon library="lucide" name="search" size="sm" />
  }
  fullWidth
/>
```

### Price Input

```jsx
<Input 
  type="number"
  startAdornment={<span>$</span>}
  endAdornment={<span>USD</span>}
  placeholder="0.00"
/>
```

### Contact Form

```jsx
<div className="form">
  <Input 
    label="Name"
    fullWidth
    required
  />
  <Input 
    label="Email"
    type="email"
    fullWidth
    required
  />
  <Input 
    label="Message"
    multiline
    rows={6}
    fullWidth
    required
  />
</div>
```

## Validation

```jsx
const [email, setEmail] = useState('')
const [error, setError] = useState(false)

const validateEmail = (value) => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  setError(!isValid)
}

<Input 
  label="Email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value)
    validateEmail(e.target.value)
  }}
  error={error}
  helperText={error ? "Please enter a valid email" : ""}
/>
```

## Styling

The component uses Watercolor's CSS classes:

- `wc-input` - Base input class
- `wc-input--sm`, `wc-input--md`, `wc-input--lg` - Size variants
- `wc-input--filled`, `wc-input--outlined`, `wc-input--standard` - Style variants
- `wc-input--error` - Error state
- `wc-input--disabled` - Disabled state
- `wc-input--focused` - Focus state

## Accessibility

- Proper label association
- ARIA attributes for errors
- Focus management
- Keyboard navigation
- Screen reader support

## Best Practices

1. **Labels**: Always provide labels for accessibility
2. **Helper Text**: Guide users with helpful hints
3. **Validation**: Show clear error messages
4. **Types**: Use appropriate input types
5. **Required**: Mark required fields clearly

## Notes

- Auto-generates IDs if not provided
- Tracks focus and value states internally
- Supports controlled and uncontrolled modes
- Helper text appears below the input
- Full width adapts to container width

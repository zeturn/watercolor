# Form Components

A collection of form-related components for building consistent, accessible forms with proper state management and styling.

## Components

- **FormControl** - Wrapper for form inputs with label, helper text, and error state
- **FormControlLabel** - Label component for checkboxes, radios, and switches
- **FormGroup** - Container for grouping related form controls
- **FormHelperText** - Helper or error text for form fields

## FormControl

Provides context and styling for form inputs.

### Basic Usage

```jsx
import { FormControl } from '@zeturn/watercolor'

<FormControl>
  <label>Email</label>
  <input type="email" />
  <FormHelperText>Enter your email address</FormHelperText>
</FormControl>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable all child controls |
| `error` | `boolean` | `false` | Error state |
| `required` | `boolean` | `false` | Required field indicator |
| `variant` | `'outlined' \| 'filled' \| 'standard'` | `'outlined'` | Input variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Control size |
| `fullWidth` | `boolean` | `false` | Full width |
| `margin` | `'none' \| 'dense' \| 'normal'` | `'normal'` | Margin spacing |
| `className` | `string` | `''` | Additional CSS classes |

### Examples

#### Basic Form Control

```jsx
<FormControl>
  <label>Username</label>
  <Input placeholder="Enter username" />
</FormControl>
```

#### With Error State

```jsx
<FormControl error={hasError}>
  <label>Email</label>
  <Input type="email" value={email} onChange={setEmail} />
  <FormHelperText>{hasError ? "Invalid email" : ""}</FormHelperText>
</FormControl>
```

#### Required Field

```jsx
<FormControl required>
  <label>Password</label>
  <Input type="password" />
  <FormHelperText>Password is required</FormHelperText>
</FormControl>
```

#### Disabled State

```jsx
<FormControl disabled>
  <label>Disabled Field</label>
  <Input value="Cannot edit" />
</FormControl>
```

#### Full Width

```jsx
<FormControl fullWidth>
  <label>Full Width Input</label>
  <Input placeholder="Spans entire width" />
</FormControl>
```

## FormControlLabel

Label component for checkbox, radio, and switch inputs.

### Basic Usage

```jsx
import { FormControlLabel, Checkbox } from '@zeturn/watercolor'

<FormControlLabel
  control={<Checkbox />}
  label="Accept terms and conditions"
/>
```

### Examples

#### With Checkbox

```jsx
<FormControlLabel
  control={<Checkbox checked={agreed} onChange={setAgreed} />}
  label="I agree to the terms"
/>
```

#### With Radio

```jsx
<FormControlLabel
  control={<Radio checked={selected === 'option1'} />}
  label="Option 1"
/>
```

#### With Switch

```jsx
<FormControlLabel
  control={<Switch checked={enabled} onChange={setEnabled} />}
  label="Enable notifications"
/>
```

#### Disabled

```jsx
<FormControlLabel
  control={<Checkbox disabled />}
  label="Disabled option"
  disabled
/>
```

## FormGroup

Container for grouping related form controls.

### Basic Usage

```jsx
import { FormGroup, FormControlLabel, Checkbox } from '@zeturn/watercolor'

<FormGroup>
  <FormControlLabel control={<Checkbox />} label="Option 1" />
  <FormControlLabel control={<Checkbox />} label="Option 2" />
  <FormControlLabel control={<Checkbox />} label="Option 3" />
</FormGroup>
```

### Examples

#### Checkbox Group

```jsx
<FormControl>
  <label>Select your interests</label>
  <FormGroup>
    <FormControlLabel 
      control={<Checkbox checked={interests.coding} />}
      label="Coding"
    />
    <FormControlLabel 
      control={<Checkbox checked={interests.design} />}
      label="Design"
    />
    <FormControlLabel 
      control={<Checkbox checked={interests.music} />}
      label="Music"
    />
  </FormGroup>
</FormControl>
```

#### Radio Group

```jsx
<FormControl>
  <label>Choose payment method</label>
  <FormGroup>
    <FormControlLabel 
      control={<Radio checked={payment === 'card'} />}
      label="Credit Card"
    />
    <FormControlLabel 
      control={<Radio checked={payment === 'paypal'} />}
      label="PayPal"
    />
    <FormControlLabel 
      control={<Radio checked={payment === 'crypto'} />}
      label="Cryptocurrency"
    />
  </FormGroup>
</FormControl>
```

#### Switch Group

```jsx
<FormControl>
  <label>Notification Settings</label>
  <FormGroup>
    <FormControlLabel 
      control={<Switch checked={settings.email} />}
      label="Email notifications"
    />
    <FormControlLabel 
      control={<Switch checked={settings.sms} />}
      label="SMS notifications"
    />
    <FormControlLabel 
      control={<Switch checked={settings.push} />}
      label="Push notifications"
    />
  </FormGroup>
</FormControl>
```

## FormHelperText

Helper or error text for form fields.

### Basic Usage

```jsx
<FormControl>
  <Input />
  <FormHelperText>Enter at least 8 characters</FormHelperText>
</FormControl>
```

### Examples

#### Helper Text

```jsx
<FormControl>
  <label>Password</label>
  <Input type="password" />
  <FormHelperText>Must be at least 8 characters</FormHelperText>
</FormControl>
```

#### Error Text

```jsx
<FormControl error>
  <label>Email</label>
  <Input type="email" />
  <FormHelperText>Invalid email format</FormHelperText>
</FormControl>
```

## Complete Form Examples

### Registration Form

```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState({})

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth required error={!!errors.username}>
        <label>Username</label>
        <Input
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
        />
        <FormHelperText>{errors.username || "Choose a unique username"}</FormHelperText>
      </FormControl>

      <FormControl fullWidth required error={!!errors.email}>
        <label>Email</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <FormHelperText>{errors.email || "We'll never share your email"}</FormHelperText>
      </FormControl>

      <FormControl fullWidth required error={!!errors.password}>
        <label>Password</label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <FormHelperText>{errors.password || "At least 8 characters"}</FormHelperText>
      </FormControl>

      <FormControl required error={!!errors.agreeTerms}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
            />
          }
          label="I agree to the terms and conditions"
        />
        <FormHelperText>{errors.agreeTerms}</FormHelperText>
      </FormControl>

      <button type="submit">Register</button>
    </form>
  )
}
```

### Survey Form

```jsx
<form>
  <FormControl fullWidth>
    <label>How satisfied are you with our service?</label>
    <FormGroup>
      <FormControlLabel control={<Radio />} label="Very Satisfied" />
      <FormControlLabel control={<Radio />} label="Satisfied" />
      <FormControlLabel control={<Radio />} label="Neutral" />
      <FormControlLabel control={<Radio />} label="Dissatisfied" />
      <FormControlLabel control={<Radio />} label="Very Dissatisfied" />
    </FormGroup>
  </FormControl>

  <FormControl fullWidth>
    <label>What features do you use? (Select all that apply)</label>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Feature A" />
      <FormControlLabel control={<Checkbox />} label="Feature B" />
      <FormControlLabel control={<Checkbox />} label="Feature C" />
      <FormControlLabel control={<Checkbox />} label="Feature D" />
    </FormGroup>
  </FormControl>

  <FormControl fullWidth>
    <label>Additional Comments</label>
    <Input multiline rows={4} />
    <FormHelperText>Optional feedback</FormHelperText>
  </FormControl>

  <button type="submit">Submit Survey</button>
</form>
```

### Settings Form

```jsx
<form>
  <FormControl>
    <label>Privacy Settings</label>
    <FormGroup>
      <FormControlLabel 
        control={<Switch checked={settings.profilePublic} />}
        label="Public Profile"
      />
      <FormControlLabel 
        control={<Switch checked={settings.showEmail} />}
        label="Show Email"
      />
      <FormControlLabel 
        control={<Switch checked={settings.allowMessages} />}
        label="Allow Messages"
      />
    </FormGroup>
  </FormControl>

  <FormControl>
    <label>Email Preferences</label>
    <FormGroup>
      <FormControlLabel 
        control={<Checkbox checked={prefs.newsletter} />}
        label="Newsletter"
      />
      <FormControlLabel 
        control={<Checkbox checked={prefs.updates} />}
        label="Product Updates"
      />
      <FormControlLabel 
        control={<Checkbox checked={prefs.promotions} />}
        label="Promotions"
      />
    </FormGroup>
  </FormControl>

  <button type="submit">Save Settings</button>
</form>
```

## Styling

The components use Watercolor's CSS classes:

- `form-control` - FormControl wrapper
- `form-control--error` - Error state
- `form-control--disabled` - Disabled state
- `form-control--full-width` - Full width
- `form-control-label` - Label wrapper
- `form-group` - Group container
- `form-helper-text` - Helper text

## Context API

FormControl uses React Context to pass state to child components:

```javascript
{
  disabled: boolean,
  error: boolean,
  required: boolean,
  variant: string,
  size: string
}
```

Child components can access this context to inherit parent state.

## Accessibility

- Proper label association
- ARIA attributes
- Error announcements
- Required field indicators
- Keyboard navigation
- Focus management

## Best Practices

1. **Labels**: Always provide clear labels
2. **Helper Text**: Use helper text for guidance
3. **Errors**: Show clear, actionable error messages
4. **Required**: Mark required fields clearly
5. **Grouping**: Use FormGroup for related controls
6. **Validation**: Validate on blur or submit

## Notes

- FormControl provides context to child components
- Error state cascades to child inputs
- Required indicator can be styled with CSS
- Full width makes controls span container
- Margin prop controls vertical spacing
- All components work together seamlessly

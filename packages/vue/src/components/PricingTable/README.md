# PricingTable Component

## Introduction
The **PricingTable** component displays a set of pricing plans in a responsive grid layout. Each plan card supports a name, price, a list of features and a call-to-action button. It is available for both **React** and **Vue** implementations and automatically adapts to light/dark themes via CSS variables.

## Installation
```bash
npm install @zeturn/watercolor-vue
```

## Usage
### React
```jsx
import { PricingTable } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

const plans = [
  {
    name: 'Basic',
    price: '$9 / mo',
    features: ['1 project', '100 MB storage', 'Community support'],
    button: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29 / mo',
    features: ['10 projects', '1 GB storage', 'Email support'],
    button: 'Upgrade',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Unlimited projects', 'Priority support', 'Dedicated manager'],
    button: 'Contact Sales',
  },
]

export default function Demo () {
  return <PricingTable plans={plans} columns={3} />
}
```

### Vue
```vue
<script setup>
import { PricingTable } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'

const plans = [
  {
    name: 'Basic',
    price: '$9 / mo',
    features: ['1 project', '100 MB storage', 'Community support'],
    button: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$29 / mo',
    features: ['10 projects', '1 GB storage', 'Email support'],
    button: 'Upgrade',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    features: ['Unlimited projects', 'Priority support', 'Dedicated manager'],
    button: 'Contact Sales',
  },
]
</script>

<template>
  <PricingTable :plans="plans" :columns="3" />
</template>
```

## Props
| Prop Name | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `plans` | `Array<Plan>` | `[]` | Array of plan objects to render. |
| `columns` | `Number` | `3` | Number of columns in the grid. |
| `className` _(React)_ | `string` | `''` | Extra class names to apply to the root element. |

### Plan object shape
| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| `name` | `string` | ✓ | Plan title. |
| `price` | `string` | ✓ | Price displayed for the plan. |
| `features` | `string[]` | — | List of features included. |
| `button` | `string` | — | Text for the CTA button (defaults to "选择"). |
| `popular` | `boolean` | — | Highlights the plan card if `true`. |

## Events
The component is **presentational** only and does not emit any custom events. You may listen to the native `click` event on the plan buttons if needed.

## Styling
The component ships with `style.css` that defines light and dark theme variables. You can override any CSS variable to match your design system:
```css
:root {
  --wc-primary-500: #3b82f6; /* Primary brand color */
}
```
You can also add your own classes via the `className` (React) or `class` (Vue) prop.

## Notes
* When `popular` is set on a plan, the card border becomes thicker and uses the primary color.
* The grid is responsive; update the `columns` prop or use media queries to adjust layout on different breakpoints.

## Contribution
Feel free to open issues or pull requests to suggest improvements or new features.

## License
ISC

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
mm-dd-yyyy 

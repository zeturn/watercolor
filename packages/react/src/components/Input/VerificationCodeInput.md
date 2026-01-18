# VerificationCodeInput

## Introduction
A flexible, lightweight verification code (OTP) input component that lets users enter a fixed-length code—commonly used for SMS, email or 2-factor authentication flows. It supports both React and Vue versions with identical props and events so you can switch frameworks without breaking the API.

## Installation
```bash
npm install @watercolor-ui/watercolor
```
(Or import directly from the package if you already have **Watercolor UI** installed.)

## Usage
### React
```jsx
import { VerificationCodeInput } from 'watercolor';

function App() {
  const [code, setCode] = useState('');

  return (
    <VerificationCodeInput
      length={6}
      value={code}
      onChange={setCode}
      onComplete={(v) => console.log('completed', v)}
      autoFocus
    />
  );
}
```

### Vue 3
```vue
<script setup>
import VerificationCodeInput from 'watercolor/dist/components/Input/VerificationCodeInput.vue';
import { ref } from 'vue';

const code = ref('');
</script>

<template>
  <VerificationCodeInput
    v-model="code"
    :length="6"
    :auto-focus="true"
    @complete="(v) => console.log('completed', v)"
  />
</template>
```

## Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| length | `number` | `6` | Total number of input boxes. |
| value / modelValue | `string` | `''` | Controlled value of the code. (React: `value`, Vue: `v-model` / `modelValue`) |
| autoFocus | `boolean` | `false` | Automatically focus the first box on mount. |
| className | `string` | `''` | (React only) Extra class names for the root container. |

## Events
| Event | Payload | Description |
| ----- | ------- | ----------- |
| onChange / `update:modelValue` | `string` | Fires whenever any box changes. Provides the full current code. |
| onComplete / `complete` | `string` | Fires once the code reaches the specified length. |

## Styling
The component inherits Watercolor UI input variables so it seamlessly adapts to light & dark mode:

* `--input-bg`
* `--input-text`
* `--input-radius`
* `--input-transition`

Override them globally or add custom CSS targeting `.wc-input-code` / `.wc-input-code__box`.

```css
/* example: make boxes rounded */
.wc-input-code__box {
  border-radius: var(--wc-radius-full);
}
```

## Notes
1. Only alphanumeric characters are accepted; letters are automatically upper-cased.
2. Pasting a full code will populate the boxes instantly and trigger **complete** if length matches.
3. `Backspace` navigates to the previous box when the current one is empty for an intuitive UX.

## Contribution
PRs and issues are welcome! Please follow the project's ESLint / Prettier rules and add unit tests where applicable.

## License
ISC License © Watercolor UI team

## Reviewer
Reviewed by: [@zeturn](https://github.com/zeturn)
07-07-2025 
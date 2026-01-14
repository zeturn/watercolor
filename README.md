# Watercolor UI

<div align="center">

![Watercolor UI Logo](https://github.com/zeturn/watercolor/blob/main/public/img/watercolorui.png)

A modern minimalist cross-framework component library for Vue 3 and React 18+.

[![npm version](https://badge.fury.io/js/watercolor-ui.svg)](https://badge.fury.io/js/watercolor-ui)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![React 18](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Ready-FF4785?logo=storybook)](https://storybook.js.org/)

[Quick Start](#quick-start) • [Documentation](https://hollowdata.com) • [Live Demo](https://zeturn.github.io/watercolor/vue/) • [Components](#component-overview) • [Changelog](CHANGELOG.md)

</div>

## Features

- Watercolor design language with soft, modern visuals
- Cross-framework support for Vue 3 and React 18+
- File-based theme system with CSS variables
- Dark mode utilities built in
- TypeScript-first API with full type definitions
- Tree-shakable builds with optimized bundle size
- Storybook docs for interactive component demos
- 60+ components covering common UI patterns

## Quick Start

### Requirements

- Node.js >= 16
- npm >= 8 (or pnpm/yarn)

### Install

```bash
npm install watercolor-ui
# or
yarn add watercolor-ui
# or
pnpm add watercolor-ui
```

### Styles

```js
// main.js or main.ts
import 'watercolor-ui/dist/style.css'
```

### Vue Usage

```vue
<template>
  <div class="app">
    <ButtonVue variant="primary" size="md">Primary Button</ButtonVue>
    <InputVue v-model="name" label="Name" placeholder="Enter your name" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonVue, InputVue } from 'watercolor-ui'

const name = ref('')
</script>
```

### React Usage

```jsx
import React, { useState } from 'react'
import { ButtonReact, InputReact } from 'watercolor-ui'

export default function App() {
  const [name, setName] = useState('')

  return (
    <div className="app">
      <ButtonReact variant="primary" size="md">Primary Button</ButtonReact>
      <InputReact
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
```

## Theme Customization

Watercolor UI automatically loads `/theme.config.json` at runtime if present. You can also load or set themes programmatically.

### Theme Config File

Create `theme.config.json` in your project root:

```json
{
  "primary": {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a"
  },
  "secondary": {
    "50": "#f3f4ff",
    "100": "#e5e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81"
  },
  "fonts": {
    "chinese": "Noto Sans SC",
    "english": "Inter",
    "fallback": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  }
}
```

### Programmatic Theme Control

```js
import { loadThemeConfig, setTheme, applyFontTheme } from 'watercolor-ui'

await loadThemeConfig('/theme.config.json')

setTheme({
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  }
})

applyFontTheme('modern')
```

### Dark Mode

```js
import { toggleDarkMode, isDarkMode } from 'watercolor-ui'

toggleDarkMode(true)
const enabled = isDarkMode()
```

## Component Overview

Watercolor UI provides 60+ components across form, layout, feedback, and data display categories.

### Form Components

| Component | Vue | React | Description |
|------|:---:|:-----:|------|
| Button | ✅ | ✅ | Button component with multiple variants and states |
| IconButton | ✅ | ✅ | Icon button |
| Fab | ✅ | ✅ | Floating action button |
| TextField | ✅ | ✅ | Text input field |
| Input | ✅ | ✅ | Basic input component |
| Select | ✅ | ✅ | Select dropdown |
| Checkbox | ✅ | ✅ | Checkbox |
| Radio | ✅ | ✅ | Radio button |
| RadioGroup | ✅ | ✅ | Radio button group |
| Switch | ✅ | ✅ | Toggle switch |
| Slider | ✅ | ✅ | Slider |
| FileInput | ✅ | ✅ | File upload |
| DatePicker | ✅ | ✅ | Date picker |
| ColorPicker | ✅ | ✅ | Color picker |
| VerificationCodeInput | ✅ | ✅ | Verification code input |

### Layout Components

| Component | Vue | React | Description |
|------|:---:|:-----:|------|
| Container | ✅ | ✅ | Container component |
| Box | ✅ | ✅ | Box layout |
| Grid | ✅ | ✅ | Grid layout |
| Paper | ✅ | ✅ | Paper container |

### Feedback Components

| Component | Vue | React | Description |
|------|:---:|:-----:|------|
| Alert | ✅ | ✅ | Alert message |
| Snackbar | ✅ | ✅ | Toast notification |
| Tooltip | ✅ | ✅ | Tooltip |
| Progress | ✅ | ✅ | Progress indicator |
| Skeleton | ✅ | ✅ | Loading skeleton |
| Spinner | ✅ | ✅ | Loading spinner |

### Data Display Components

| Component | Vue | React | Description |
|------|:---:|:-----:|------|
| Table | ✅ | ✅ | Data table |
| List | ✅ | ✅ | List |
| Card | ✅ | ✅ | Card container |
| Avatar | ✅ | ✅ | Avatar |
| Badge | ✅ | ✅ | Badge |
| Chip | ✅ | ✅ | Chip |
| Typography | ✅ | ✅ | Typography |
| Rating | ✅ | ✅ | Star rating |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build

# Storybook
npm run storybook:vue
npm run storybook:react

# Tests
npm run test

# Lint
npm run lint
```

## Project Links

- Documentation: https://hollowdata.com
- Live Demo: https://zeturn.github.io/watercolor/vue/
- Issues: https://github.com/zeturn/watercolor/issues

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Made with ❤️ by the Watercolor UI team

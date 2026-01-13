# Watercolor UI

<div align="center">

![Watercolor UI Logo](https://github.com/zeturn/watercolor/blob/main/public/img/watercolorui.png)

A modern minimalist cross-framework component library supporting Vue 3 and React 18+, perfect alternative to Material-UI.

[![npm version](https://badge.fury.io/js/watercolor-ui.svg)](https://badge.fury.io/js/watercolor-ui)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![React 18](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Ready-FF4785?logo=storybook)](https://storybook.js.org/)

[🚀 Quick Start](#-quick-start) • [📚 Documentation](https://watercolor-ui.dev) • [🎨 Live Demo](https://zeturn.github.io/watercolor/vue/) • [🔧 Components](#-component-overview)

</div>

## ✨ Features

- 🎨 **Watercolor Design Language** - Modern watercolor-style design, soft and elegant
- 🌙 **Dark Mode Support** - Complete dark mode support with automatic switching
- 🎯 **Cross-Framework Compatible** - Supports both Vue 3 and React 18+
- 🔄 **Material-UI Compatibility Layer** - Complete Material-UI API compatibility for zero-cost migration
- 🎭 **Theme System** - Fully customizable color system and theme presets
- 🛠️ **TypeScript First** - Complete type support and IntelliSense
- 📚 **Storybook Documentation** - Complete component documentation and interactive demos
- 🚀 **Zero-Config Migration** - Seamless migration from Material-UI with minimal code changes
- ⚡ **Performance Optimized** - Tree-shaking optimization with excellent runtime performance
- 🌐 **Internationalization** - Built-in multi-language support
- 🎁 **Rich Components** - 60+ high-quality components covering all common use cases
- 🎪 **Flat Design** - Ultra-minimal flat design without shadows or borders, pure HTML+CSS

## 🚀 Quick Start

### Installation

```bash
npm install watercolor-ui
# or
yarn add watercolor-ui
# or
pnpm add watercolor-ui
```

### Style Configuration

Make sure to import styles in your project entry file:

```js
// main.js or main.ts
import 'watercolor-ui/dist/style.css'
```

### Usage

#### 🎯 Migration from Material-UI (Recommended)

The simplest migration approach is using our compatibility layer with minimal code changes:

```javascript
// Replace all Material-UI imports with Watercolor compatibility layer
// import { Button, TextField, Card, Container, Typography } from '@mui/material'
import { Button, TextField, Card, Container, Typography } from 'watercolor-ui/mui-compat'

// No other code changes needed, API is fully compatible!
```

#### 🔗 Vue 3 Usage

```vue
<template>
  <div class="app">
    <!-- Button Component -->
    <ButtonVue 
      variant="primary" 
      size="md"
      :loading="isLoading"
      @click="handleClick"
    >
      {{ isLoading ? 'Loading...' : 'Click Button' }}
    </ButtonVue>
    
    <!-- Input Component -->
    <InputVue 
      v-model="form.username"
      label="Username"
      placeholder="Enter username"
      :required="true"
      :error="errors.username"
      helper-text="Username must be at least 3 characters"
    />
    
    <!-- Card Component -->
    <CardVue 
      title="User Information" 
      variant="elevated"
      padding="lg"
    >
      <p>{{ form.username || 'No username yet' }}</p>
      
      <template #footer>
        <div class="flex gap-2">
          <ButtonVue variant="secondary" size="sm">Cancel</ButtonVue>
          <ButtonVue variant="primary" size="sm">Save</ButtonVue>
        </div>
      </template>
    </CardVue>

    <!-- Table Component -->
    <TableVue :data="tableData" :columns="tableColumns" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { 
  ButtonVue, 
  InputVue, 
  CardVue, 
  TableVue 
} from 'watercolor-ui'

const isLoading = ref(false)
const form = reactive({
  username: ''
})
const errors = reactive({
  username: ''
})

const tableData = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
])

const tableColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
]

const handleClick = async () => {
  isLoading.value = true
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
}
</script>
```

#### ⚛️ React Usage

```jsx
import React, { useState } from 'react'
import { 
  ButtonReact, 
  InputReact, 
  CardReact, 
  TableReact,
  themeVUE,
  useToast
} from 'watercolor-ui'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({ username: '' })
  const [errors, setErrors] = useState({})
  
  const theme = themeVUE()
  const toast = useToast()

  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]

  const tableColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' }
  ]

  const handleClick = async () => {
    setIsLoading(true)
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Operation successful!')
    } catch (error) {
      toast.error('Operation failed: ' + error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    
    // Simple validation
    if (name === 'username' && value.length < 3) {
      setErrors(prev => ({ ...prev, username: 'Username must be at least 3 characters' }))
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="app p-6 space-y-6">
      {/* Button Component */}
      <ButtonReact 
        variant="primary" 
        size="md"
        loading={isLoading}
        onClick={handleClick}
      >
        {isLoading ? 'Loading...' : 'Click Button'}
      </ButtonReact>
      
      {/* Input Component */}
      <InputReact 
        name="username"
        value={form.username}
        onChange={handleInputChange}
        label="Username"
        placeholder="Enter username"
        required
        error={errors.username}
        helperText="Username must be at least 3 characters"
      />
      
      {/* Card Component */}
      <CardReact 
        title="User Information" 
        variant="elevated"
        padding="lg"
        footer={
          <div className="flex gap-2">
            <ButtonReact variant="secondary" size="sm">Cancel</ButtonReact>
            <ButtonReact variant="primary" size="sm">Save</ButtonReact>
          </div>
        }
      >
        <p>{form.username || 'No username yet'}</p>
      </CardReact>

      {/* Table Component */}
      <TableReact data={tableData} columns={tableColumns} />
    </div>
  )
}

export default App
```

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/watercolor-ui/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        // Watercolor UI theme color variables
        primary: {
          50: 'rgb(var(--wc-primary-50) / <alpha-value>)',
          100: 'rgb(var(--wc-primary-100) / <alpha-value>)',
          200: 'rgb(var(--wc-primary-200) / <alpha-value>)',
          300: 'rgb(var(--wc-primary-300) / <alpha-value>)',
          400: 'rgb(var(--wc-primary-400) / <alpha-value>)',
          500: 'rgb(var(--wc-primary-500) / <alpha-value>)',
          600: 'rgb(var(--wc-primary-600) / <alpha-value>)',
          700: 'rgb(var(--wc-primary-700) / <alpha-value>)',
          800: 'rgb(var(--wc-primary-800) / <alpha-value>)',
          900: 'rgb(var(--wc-primary-900) / <alpha-value>)',
          950: 'rgb(var(--wc-primary-950) / <alpha-value>)',
        },
        secondary: {
          50: 'rgb(var(--wc-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--wc-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--wc-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--wc-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--wc-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--wc-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--wc-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--wc-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--wc-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--wc-secondary-900) / <alpha-value>)',
          950: 'rgb(var(--wc-secondary-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
```

## 🎨 Theme Customization

### 📁 File-Based Theme System

Watercolor UI now uses a **file-based theme system** for maximum flexibility. Create a `theme.config.json` file in your project root:

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

### 🎭 Programmatic Theme Control

```js
import { setTheme, loadThemeConfig } from 'watercolor-ui'

// Method 1: Load from file (recommended)
await loadThemeConfig()  // Loads /theme.config.json
await loadThemeConfig('/custom-theme.json')  // Custom path

// Method 2: Direct theme setting
setTheme({
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Primary color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  secondary: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',  // Secondary color
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917'
  },
  fonts: {
    chinese: 'PingFang SC',
    english: 'SF Pro Display',
    fallback: 'system-ui, sans-serif'
  }
})
```

### 🔄 Dynamic Theme Switching

```js
// Switch between different theme files
await loadThemeConfig('/themes/blue.json')    // Blue theme
await loadThemeConfig('/themes/green.json')   // Green theme  
await loadThemeConfig('/themes/orange.json')  // Orange theme
await loadThemeConfig('/themes/brand.json')   // Brand theme
```

### 🌙 Dark Mode

```js
import { 
  toggleDarkMode, 
  isDarkMode, 
  setDarkMode,
  useDarkMode // React Hook
} from 'watercolor-ui'

// Toggle dark mode
toggleDarkMode()

// Set dark mode
setDarkMode(true)   // Enable dark mode
setDarkMode(false)  // Disable dark mode

// Check current mode
const darkModeEnabled = isDarkMode()

// React Hook usage
function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode()
  
  return (
    <ButtonReact onClick={() => setIsDark(!isDark)}>
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </ButtonReact>
  )
}
```

## 📦 Component Overview

Watercolor UI provides **60+** high-quality components, completely covering all modern web application use cases:

### 🎛️ Form Components

| Component | Vue | React | Material-UI Compatible | Description |
|------|:---:|:-----:|:----------------:|------|
| Button | ✅ | ✅ | ✅ | Button component with multiple variants and states |
| IconButton | ✅ | ✅ | ✅ | Icon button |
| Fab | ✅ | ✅ | ✅ | Floating action button |
| TextField | ✅ | ✅ | ✅ | Text input field |
| Input | ✅ | ✅ | ✅ | Basic input component |
| Select | ✅ | ✅ | ✅ | Select dropdown |
| Checkbox | ✅ | ✅ | ✅ | Checkbox |
| Radio | ✅ | ✅ | ✅ | Radio button |
| RadioGroup | ✅ | ✅ | ✅ | Radio button group |
| Switch | ✅ | ✅ | ✅ | Toggle switch |
| Slider | ✅ | ✅ | ✅ | Slider |
| FileInput | ✅ | ✅ | ⭕ | File upload |
| DatePicker | ✅ | ✅ | ⭕ | Date picker |
| ColorPicker | ✅ | ✅ | ⭕ | Color picker |
| VerificationCodeInput | ✅ | ✅ | ⭕ | Verification code input |

### 🏗️ Layout Components

| Component | Vue | React | Material-UI Compatible | Description |
|------|:---:|:-----:|:----------------:|------|
| Container | ✅ | ✅ | ✅ | Container component |
| Box | ✅ | ✅ | ✅ | Box layout |
| Grid | ✅ | ✅ | ✅ | Grid layout |
| Paper | ✅ | ✅ | ✅ | Paper container |

### 💬 Feedback Components

| Component | Vue | React | Material-UI Compatible | Description |
|------|:---:|:-----:|:----------------:|------|
| Alert | ✅ | ✅ | ✅ | Alert message |
| Snackbar | ✅ | ✅ | ✅ | Toast notification |
| Tooltip | ✅ | ✅ | ✅ | Tooltip |
| Progress | ✅ | ✅ | ✅ | Progress indicator |
| Skeleton | ✅ | ✅ | ✅ | Loading skeleton |
| Spinner | ✅ | ✅ | ⭕ | Loading spinner |

### 📊 Data Display Components

| Component | Vue | React | Material-UI Compatible | Description |
|------|:---:|:-----:|:----------------:|------|
| Table | ✅ | ✅ | ✅ | Data table |
| List | ✅ | ✅ | ✅ | List |
| Card | ✅ | ✅ | ✅ | Card container |
| Avatar | ✅ | ✅ | ✅ | Avatar |
| Badge | ✅ | ✅ | ✅ | Badge |
| Chip | ✅ | ✅ | ✅ | Chip |
| Typography | ✅ | ✅ | ✅ | Typography |
| Rating | ✅ | ✅ | ⭕ | Star rating |

## 🎪 Design Philosophy

Watercolor UI follows an **ultra-minimal flat design** philosophy:

- **No Shadows**: Pure flat design without any drop shadows or elevations
- **No Borders**: Clean interfaces using background colors for separation
- **Pure CSS**: All styling done with pure HTML+CSS, no complex animations
- **Theme-Driven**: Complete reliance on CSS variables for theming
- **Accessibility First**: Full keyboard navigation and screen reader support

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Start Storybook
npm run storybook

# Run tests
npm test

# Lint code
npm run lint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome all contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 🎯 Roadmap

- [ ] More component variants
- [ ] Advanced theme system
- [ ] Better accessibility
- [ ] More framework support (Angular, Svelte)
- [ ] Component playground
- [ ] Design tokens

---

Made with ❤️ by the Watercolor UI team
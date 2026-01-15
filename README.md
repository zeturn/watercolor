# Watercolor UI

<div align="center">

<img src="public/img/watercolorui.png" width="140" alt="Watercolor UI" />

Modern, minimalist, watercolor-inspired UI components for **Vue 3** and **React 18+** — built with **TypeScript**.

[![npm version](https://badge.fury.io/js/watercolor-ui.svg)](https://badge.fury.io/js/watercolor-ui)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![React 18](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Ready-FF4785?logo=storybook)](https://storybook.js.org/)

[🚀 Quick Start](#-quick-start) · [📚 Docs](https://zeturn.github.io/watercolor/docs/) · [🧩 Vue Storybook](https://zeturn.github.io/watercolor/vue/) · [⚛️ React Storybook](https://zeturn.github.io/watercolor/react/) · [📝 Changelog](CHANGELOG.md)

</div>

## ✨ Features

- One design language, two frameworks (Vue + React)
- CSS Variables theming + built-in dark mode
- TypeScript-first APIs with generated type definitions
- Tree-shaking friendly builds
- Storybook for interactive previews and usage docs

## 📚 Documentation

- Landing page: https://zeturn.github.io/watercolor/
- VitePress docs (component docs hub): https://zeturn.github.io/watercolor/docs/
- Vue Storybook: https://zeturn.github.io/watercolor/vue/
- React Storybook: https://zeturn.github.io/watercolor/react/

## 🚀 Quick Start

### Requirements

- Node.js >= 16
- npm >= 8 (or pnpm / yarn)

### Install

```bash
npm i watercolor-ui
# or
pnpm add watercolor-ui
# or
yarn add watercolor-ui
```

### Styles

```ts
import 'watercolor-ui/style.css'
```

### Vue (recommended: framework entry)

```vue
<template>
  <div style="padding: 24px">
    <Button variant="primary" size="md">Primary</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'watercolor-ui/vue'
</script>
```

### React (recommended: framework entry)

```tsx
import { Button } from 'watercolor-ui/react'

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <Button variant="primary" size="md">Primary</Button>
    </div>
  )
}
```

## 🎨 Theming & Dark Mode

Watercolor UI supports a file-based theme config. Place a `theme.config.json` in your app root and load it at runtime.

```ts
import { loadThemeConfig, toggleDarkMode } from 'watercolor-ui'

await loadThemeConfig('/theme.config.json')
toggleDarkMode(true)
```

## 🧑‍💻 Development

```bash
npm install

# dev
npm run dev

# build
npm run build

# storybook
npm run storybook:vue
npm run storybook:react

# tests / lint
npm run test -- --run
npm run lint
```

## 📦 Release

- Quick release guide: [QUICK_RELEASE.md](QUICK_RELEASE.md)
- Full publishing guide: [note/PUBLISHING.md](note/PUBLISHING.md)

## 🔗 Links

- Issues: https://github.com/zeturn/watercolor/issues
- Repository: https://github.com/zeturn/watercolor

## License

MIT — see [LICENSE](LICENSE).

---

Made with ❤️ by the Watercolor UI team

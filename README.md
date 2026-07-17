# Watercolor UI

<div align="center">

<img src="public/img/watercolorui.png" width="140" alt="Watercolor UI" />

Modern, minimalist, watercolor-inspired UI components for **Vue 3.5+** and **React 18/19** — built with **TypeScript**.

[![npm version](https://img.shields.io/npm/v/@zeturn/watercolor-vue?label=vue)](https://www.npmjs.com/package/@zeturn/watercolor-vue)
[![npm version](https://img.shields.io/npm/v/@zeturn/watercolor-react?label=react)](https://www.npmjs.com/package/@zeturn/watercolor-react)
[![ISC license](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

[🚀 Quick Start](#-quick-start) · [📚 Docs](https://zeturn.github.io/watercolor/) · [🧩 Vue Storybook](https://zeturn.github.io/watercolor/vue/) · [⚛️ React Storybook](https://zeturn.github.io/watercolor/react/) · [📝 Changelog](CHANGELOG.md)

</div>

## ✨ Features

- One design language, two frameworks (Vue + React)
- CSS Variables theming + built-in dark mode
- TypeScript-first APIs
- Tree-shaking friendly builds
- Optional icon packs (install only what you use)

## 📚 Documentation

- Docs: https://zeturn.github.io/watercolor/
- Vue Storybook: https://zeturn.github.io/watercolor/vue/
- React Storybook: https://zeturn.github.io/watercolor/react/

## 🚀 Quick Start

### Install

**Vue 3.5+**

```bash
npm install @zeturn/watercolor-vue
```

**React 18 / 19**

```bash
npm install @zeturn/watercolor-react
```

### Usage

Import styles once in your app entry, then import components as needed.

```ts
// Vue
import '@zeturn/watercolor-vue/style.css'
// React
// import '@zeturn/watercolor-react/style.css'
```

```ts
// Vue
import { Button } from '@zeturn/watercolor-vue'
// React
// import { Button } from '@zeturn/watercolor-react'
```

### Theme v2

The default Watercolor theme works without configuration. Use `ThemeProvider` for light, dark, and system modes; optionally load a strict Theme v2 JSON for brand tokens.

```tsx
import { ThemeProvider, loadThemeConfig } from '@zeturn/watercolor-react'

await loadThemeConfig('/theme.json')

<ThemeProvider defaultMode="system">
  <App />
</ThemeProvider>
```

Theme loading is explicit and safely falls back to the default borderless Watercolor design. See the theming guide for SSR pre-paint helpers.

### Icons (optional)

The `Icon` component supports multiple libraries through opt-in Watercolor icon
packages. The React and Vue packages do not install any icon pack by default.

- React: `@zeturn/watercolor-icons-lucide-react`, `-heroicons-react`, `-tabler-react`, or `-phosphor-react`
- Vue: `@zeturn/watercolor-icons-lucide-vue`, `-heroicons-vue`, `-tabler-vue`, or `-phosphor-vue`
- Both frameworks can use `@zeturn/watercolor-icons-feather`.

**Example**:
```bash
npm install @zeturn/watercolor-icons-lucide-react
# or: npm install @zeturn/watercolor-icons-lucide-vue
```

## 🤝 Contributing

See [note/组件开发与规范.md](note/%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E4%B8%8E%E8%A7%84%E8%8C%83.md) and [note/发布与集成指南.md](note/%E5%8F%91%E5%B8%83%E4%B8%8E%E9%9B%86%E6%88%90%E6%8C%87%E5%8D%97.md).

## 📄 License

ISC — see [LICENSE](LICENSE).

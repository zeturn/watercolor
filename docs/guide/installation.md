# 安装指南

Watercolor UI 提供了 Vue和 React 两个独立版本的包。请根据您的技术栈选择相应的安装方式。

## 先决条件

- **Node.js**: >= 16.0.0
- **包管理器**: npm, pnpm, 或 yarn

## Vue 3 项目

### 安装

使用您喜欢的包管理器安装 `@zeturn/watercolor-vue`：

::: code-group

```bash [npm]
npm install @zeturn/watercolor-vue
```

```bash [pnpm]
pnpm add @zeturn/watercolor-vue
```

```bash [yarn]
yarn add @zeturn/watercolor-vue
```

:::

### 引入样式

在您的入口文件（通常是 `main.ts` 或 `main.js`）中引入 CSS 样式文件：

```typescript
import '@zeturn/watercolor-vue/style.css'
```

或者，如果您使用 Vite/Webpack 等构建工具，且配置了自动导入样式，这步可能是可选的，但显式引入最稳妥。

## React 项目

### 安装

安装 `@zeturn/watercolor-react`：

::: code-group

```bash [npm]
npm install @zeturn/watercolor-react
```

```bash [pnpm]
pnpm add @zeturn/watercolor-react
```

```bash [yarn]
yarn add @zeturn/watercolor-react
```

:::

### 引入样式

在您的应用根组件或入口文件（如 `App.tsx` 或 `main.tsx`）中引入样式：

```typescript
import '@zeturn/watercolor-react/style.css'
```

## Peer Dependencies（重要）

- `@zeturn/watercolor-vue` 需要 `vue@^3`
- `@zeturn/watercolor-react` 需要 `react@^18`、`react-dom@^18`

如果你的项目版本不匹配，可能出现类型错误或运行时异常。

## SSR 使用说明

主题相关的工具函数（例如 `loadThemeConfig` / `toggleDarkMode`）会访问浏览器 DOM。
在 Next.js / Nuxt 等 SSR 场景中，请只在客户端执行（例如 `onMounted` / `useEffect` 里）。

## TypeScript 支持

Watercolor UI 使用 TypeScript 编写，自带类型定义文件，无需额外安装 `@types/...` 包。

## 图标库（可选，按需安装）

⚠️ **重要说明**：从 v1.1.18 开始，图标库已从主包中移除，改为**完全可选**的依赖。这意味着：

- ✅ 安装 `@zeturn/watercolor-react` 或 `@zeturn/watercolor-vue` **不会**自动下载任何图标包
- ✅ 你只需要安装你实际使用的图标库
- ✅ 如果不使用 `Icon` 组件，则无需安装任何图标库

`Icon` 组件支持多种图标库。只需安装你需要的那一个（或几个）：

### React 项目可选安装

```bash
# Lucide（推荐）
npm install lucide-react

# Heroicons
npm install @heroicons/react

# Tabler
npm install @tabler/icons-react

# Phosphor
npm install @phosphor-icons/react

# 或使用 Watercolor 的预包装版本（版本锁定）
npm install @zeturn/watercolor-icons-lucide-react
npm install @zeturn/watercolor-icons-heroicons-react
npm install @zeturn/watercolor-icons-tabler-react
npm install @zeturn/watercolor-icons-phosphor-react
```

### Vue 项目可选安装

```bash
# Lucide（推荐）
npm install lucide-vue-next

# Heroicons
npm install @heroicons/vue

# Tabler
npm install @tabler/icons-vue

# Phosphor
npm install @phosphor-icons/vue

# 或使用 Watercolor 的预包装版本（版本锁定）
npm install @zeturn/watercolor-icons-lucide-vue
npm install @zeturn/watercolor-icons-heroicons-vue
npm install @zeturn/watercolor-icons-tabler-vue
npm install @zeturn/watercolor-icons-phosphor-vue
```

### Feather Icons（React/Vue 通用）

```bash
npm install @zeturn/watercolor-icons-feather
```

> **提示**：如果你在 `Icon` 组件中使用了某个 `library`，但没有安装对应的图标包，组件会显示占位符并在控制台发出警告。

### React 项目可选安装

```bash
# Lucide（推荐）
npm install lucide-react

# Heroicons
npm install @heroicons/react

# Tabler
npm install @tabler/icons-react

# Phosphor
npm install @phosphor-icons/react

# 或使用 Watercolor 的预包装版本（版本锁定）
npm install @zeturn/watercolor-icons-lucide-react
npm install @zeturn/watercolor-icons-heroicons-react
npm install @zeturn/watercolor-icons-tabler-react
npm install @zeturn/watercolor-icons-phosphor-react
```

### Vue 项目可选安装

```bash
# Lucide（推荐）
npm install lucide-vue-next

# Heroicons
npm install @heroicons/vue

# Tabler
npm install @tabler/icons-vue

# Phosphor
npm install @phosphor-icons/vue

# 或使用 Watercolor 的预包装版本（版本锁定）
npm install @zeturn/watercolor-icons-lucide-vue
npm install @zeturn/watercolor-icons-heroicons-vue
npm install @zeturn/watercolor-icons-tabler-vue
npm install @zeturn/watercolor-icons-phosphor-vue
```

### Feather Icons（React/Vue 通用）

```bash
npm install @zeturn/watercolor-icons-feather
```

> **提示**：如果你在 `Icon` 组件中使用了某个 `library`，但没有安装对应的图标包，组件会显示占位符并在控制台发出警告。

## 字体配置（推荐）

为了获得最佳的"水彩"视觉体验，我们推荐在您的 `index.html` 中引入以下字体：

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

或者您可以在 CSS 中定义自己的字体栈。

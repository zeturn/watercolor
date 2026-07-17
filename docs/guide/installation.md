# 安装指南

Watercolor UI 分为独立的 React 包和 Vue 包。先选框架，再决定是否按需安装图标库。

## 环境要求

- Node.js `^20.19.0 || >=22.12.0`
- npm `>=8`
- React 项目需要 `react@^18 || ^19`、`react-dom@^18 || ^19`
- Vue 项目需要 `vue@^3.5`

## React 安装

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

在入口文件中引入样式：

```tsx
import '@zeturn/watercolor-react/style.css'
```

## Vue 安装

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

在入口文件中引入样式：

```ts
import '@zeturn/watercolor-vue/style.css'
```

## TypeScript

两个包都已经内置类型定义，不需要额外安装 `@types/watercolor-*`。

## SSR 项目

主题配置加载会访问浏览器环境。在 Next.js、Nuxt 等 SSR 场景里，请只在客户端调用：

- `loadThemeConfig`

模式切换应由根部的 `ThemeProvider` 管理。`loadThemeConfig` 推荐放在：

- React: `useEffect`
- Vue: `onMounted`

## 图标库按需安装

主包不会静态捆绑所有图标依赖。只有你实际安装和调用的图标库才会参与解析。

### React 可选图标包

```bash
npm install lucide-react

# 或安装 Watercolor 维护的版本锁定包
npm install @zeturn/watercolor-icons-lucide-react
npm install @zeturn/watercolor-icons-heroicons-react
npm install @zeturn/watercolor-icons-tabler-react
npm install @zeturn/watercolor-icons-phosphor-react
```

### Vue 可选图标包

```bash
npm install lucide-vue-next

# 或安装 Watercolor 维护的版本锁定包
npm install @zeturn/watercolor-icons-lucide-vue
npm install @zeturn/watercolor-icons-heroicons-vue
npm install @zeturn/watercolor-icons-tabler-vue
npm install @zeturn/watercolor-icons-phosphor-vue
```

### Feather

```bash
npm install @zeturn/watercolor-icons-feather
```

如果 `Icon` 组件指定了某个 `library`，但你没有安装对应依赖，组件会回退为占位渲染。

## 推荐字体

如果你想更接近 Watercolor 默认的展示风格，可以在 HTML 中引入：

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
```

## 下一步

- 看 [使用指南](/guide/usage)
- 看 [主题与图标](/guide/theming)
- 从 [组件总览](/components/) 进入具体组件页面

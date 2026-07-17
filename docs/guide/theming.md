# 主题与图标

Watercolor 只有一条推荐的主题管理路径：在应用根部使用 `ThemeProvider`，在组件中通过 `useTheme()` 读取或更新主题。

## 模式模型

`mode` 只接受三个值：

- `light`：固定浅色。
- `dark`：固定深色。
- `system`：跟随 `prefers-color-scheme`，并在系统设置变化时自动更新。

`useTheme()` 同时提供 `mode` 和 `resolvedMode`。当 `mode` 为 `system` 时，`resolvedMode` 仍会明确返回当前生效的 `light` 或 `dark`。

## React

```tsx
import { ThemeProvider, useTheme } from '@zeturn/watercolor-react'

function ThemeControls() {
  const { mode, resolvedMode, setMode } = useTheme()

  return (
    <div>
      <span>{mode} → {resolvedMode}</span>
      <button onClick={() => setMode('light')}>Light</button>
      <button onClick={() => setMode('dark')}>Dark</button>
      <button onClick={() => setMode('system')}>System</button>
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider defaultMode="system">
      <ThemeControls />
    </ThemeProvider>
  )
}
```

受控模式可以使用 `mode` 和 `onModeChange`：

```tsx
<ThemeProvider mode={mode} onModeChange={(next) => setMode(next)}>
  <App />
</ThemeProvider>
```

## Vue

在 Provider 的后代组件中调用 `useTheme()`：

```vue
<!-- ThemeControls.vue -->
<script setup>
import { useTheme } from '@zeturn/watercolor-vue'

const theme = useTheme()
</script>

<template>
  <span>{{ theme.mode.value }} → {{ theme.resolvedMode.value }}</span>
  <button @click="theme.setMode('light')">Light</button>
  <button @click="theme.setMode('dark')">Dark</button>
  <button @click="theme.setMode('system')">System</button>
</template>
```

然后在应用根部提供主题：

```vue
<!-- App.vue -->
<script setup>
import { ThemeProvider } from '@zeturn/watercolor-vue'
import ThemeControls from './ThemeControls.vue'
</script>

<template>
  <ThemeProvider default-mode="system">
    <ThemeControls />
  </ThemeProvider>
</template>
```

受控模式可以直接使用 `v-model:mode`。

## DOM 与持久化契约

Provider 会同步维护：

- `data-theme="light | dark | system"`
- `data-resolved-theme="light | dark"`
- `color-scheme`
- `wc-mode` localStorage 项

`.dark` 和 `.light` class 当前仍会同步输出，供既有项目兼容；新代码不要依赖它们判断状态。请读取 `useTheme().resolvedMode`。

如果需要多个独立应用共享同一页面，可以通过 `storageKey` 自定义持久化 key。

## 避免首次渲染闪烁

- SPA 应在应用根节点最外层挂载 `ThemeProvider`，不要等页面渲染后再切换 class。
- SSR 应让服务端输出的 `data-theme` 与客户端初始 `defaultMode` 一致。
- 如果主题来自用户 cookie，优先在服务端写入对应属性；不要在组件挂载完成后才读取。
- `system` 模式的暗色 token 由 CSS media query 直接生效，Provider 随后同步 `data-resolved-theme`。

## 品牌主题加载

模式与品牌色是两个维度。`ThemeProvider` 管理明暗模式；`loadThemeConfig` 或 `applyTheme` 管理品牌 token。

```ts
import { loadThemeConfig } from '@zeturn/watercolor-react'

await loadThemeConfig('/theme.config.json')
```

`loadThemeConfig` 依赖浏览器环境，SSR 项目应只在客户端调用。

旧项目仍可暂时调用 `toggleDarkMode` 等兼容入口，但它们已弃用。替换方法见[主题 API 迁移指南](/guide/theme-migration)。

## 图标接入策略

`Icon` 支持多个图标库，但不会在主包中静态打入全部图标依赖。推荐按需安装。

### React

```bash
npm install @zeturn/watercolor-react lucide-react
```

```tsx
import { Icon } from '@zeturn/watercolor-react'

<Icon library="lucide" name="search" />
```

### Vue

```bash
npm install @zeturn/watercolor-vue lucide-vue-next
```

```vue
<script setup>
import { Icon } from '@zeturn/watercolor-vue'
</script>

<template>
  <Icon library="lucide" name="search" />
</template>
```

支持 Lucide、Heroicons、Tabler、Phosphor 和 Feather。业务项目尽量统一使用一到两套图标，并在设计系统层约定 `size`、`strokeWidth` 和颜色语义。

# 主题与图标

这一页集中说明 Watercolor UI 的主题切换、深色模式和图标接入策略。

## 主题加载

Watercolor UI 可以在浏览器环境中读取 `/theme.config.json`。你可以在应用启动后主动加载：

### React

```tsx
import { useEffect } from 'react'
import { loadThemeConfig } from '@zeturn/watercolor-react'

export function AppThemeBootstrap() {
  useEffect(() => {
    loadThemeConfig('/theme.config.json')
  }, [])

  return null
}
```

### Vue

```vue
<script setup>
import { onMounted } from 'vue'
import { loadThemeConfig } from '@zeturn/watercolor-vue'

onMounted(() => {
  loadThemeConfig('/theme.config.json')
})
</script>
```

## 深色模式

如果你的应用已经通过 `html.dark` 或 `body.dark` 管理深色模式，Watercolor UI 组件会自动跟随。

你也可以直接使用工具函数：

```ts
import { toggleDarkMode } from '@zeturn/watercolor-react'

toggleDarkMode(true)
```

## SSR 注意事项

以下函数依赖浏览器 DOM，请只在客户端调用：

- `loadThemeConfig`
- `toggleDarkMode`

在 Next.js 中建议放进 `useEffect`，在 Nuxt / Vue 中建议放进 `onMounted`。

## 图标接入策略

`Icon` 组件支持多个图标库，但不会在主包里静态打进所有图标依赖。推荐按需安装。

### React

```bash
npm install @zeturn/watercolor-react
npm install lucide-react
```

```tsx
import { Icon } from '@zeturn/watercolor-react'

<Icon library="lucide" name="search" />
```

### Vue

```bash
npm install @zeturn/watercolor-vue
npm install lucide-vue-next
```

```vue
<script setup>
import { Icon } from '@zeturn/watercolor-vue'
</script>

<template>
  <Icon library="lucide" name="search" />
</template>
```

## 支持的图标库

- Lucide
- Heroicons
- Tabler
- Phosphor
- Feather

如果你更希望锁定和 Watercolor 一起测试过的图标版本，也可以安装对应的 `@zeturn/watercolor-icons-*` 包。

## 推荐实践

- 默认优先 Lucide，命名稳定，可读性也最好。
- 业务项目里尽量统一只使用 1 到 2 套图标库。
- 不要在每个页面重复注册或重复引入图标资源。
- 在设计系统层统一 `size`、`strokeWidth`、`color` 约定。

## 主题文件建议

如果你打算提供 `/theme.config.json`，建议至少包含：

- 主色与语义色
- 圆角或边框策略
- 阴影强度
- 深浅模式的基础配色

这样组件库和你的品牌视觉才能保持一致。

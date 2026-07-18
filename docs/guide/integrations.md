# 集成示例

示例位于仓库 `examples/`：

- `examples/react-minimal`：Vite + React 最小应用。
- `examples/vue-minimal`：Vite + Vue 最小应用。
- `examples/next-ssr`：Next.js SSR 预绘制主题脚本示例。
- `examples/nuxt-ssr`：Nuxt SSR 预绘制主题脚本示例。

## 运行示例

```bash
cd examples/react-minimal
npm install
npm run build
```

```bash
cd examples/vue-minimal
npm install
npm run build
```

最小示例都包含 `public/theme.json`。如果删除这个文件或让请求失败，Provider 会保留默认无边框 Watercolor 样式；这也是推荐的生产兜底行为。

## React 最小应用

```tsx
import { ThemeProvider, LocaleProvider, Page, Stack, Button } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

export function App() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <LocaleProvider locale="en">
        <Page size="md" gutter="md">
          <Stack gap="lg">
            <Button variant="primary">Create project</Button>
          </Stack>
        </Page>
      </LocaleProvider>
    </ThemeProvider>
  )
}
```

## Vue 最小应用

```vue
<template>
  <ThemeProvider theme-url="/theme.json" default-mode="system">
    <LocaleProvider locale="en">
      <Page size="md" gutter="md">
        <Stack gap="lg">
          <Button variant="primary">Create project</Button>
        </Stack>
      </Page>
    </LocaleProvider>
  </ThemeProvider>
</template>
```

## SSR

SSR 应用应在 `<head>` 中加入 `createThemeInitScript({ defaultMode: 'system' })`，避免 system dark 首屏和 hydration 不一致。

如果服务端已经知道用户偏好，例如从 cookie 得到 `dark`，请把同一个模式同时传给初始化脚本和 Provider。不要在服务端请求远程 `themeUrl` 后再让客户端用不同配置覆盖首屏；需要远程主题时，应把校验后的主题 CSS 序列化到 `<head>`，或接受客户端加载后的渐进增强。

## 推荐验收

集成完成后建议跑：

- 生产构建。
- light/dark/system 三种模式。
- 删除 `theme.json` 的回退场景。
- 远程 `theme.json` 返回错误的场景。
- 键盘 Tab、Escape、outside click。
- 中文、英文、长文本和 200% zoom。

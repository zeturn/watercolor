# 集成示例

示例位于仓库 `examples/`：

- `examples/react-minimal`：Vite + React 最小应用。
- `examples/vue-minimal`：Vite + Vue 最小应用。
- `examples/next-ssr`：Next.js SSR 预绘制主题脚本示例。
- `examples/nuxt-ssr`：Nuxt SSR 预绘制主题脚本示例。

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


# Watercolor examples

这些示例用于验证“第一次安装 Watercolor”时的真实体验。它们刻意保持小而完整：默认无边框 Watercolor 样式可以直接工作；如果提供 `public/theme.json`，Provider 会自动加载自定义 Theme v2。

## Examples

- `react-minimal`：Vite + React 19。
- `vue-minimal`：Vite + Vue 3.5。
- `next-ssr`：Next.js App Router SSR 主题预绘制说明。
- `nuxt-ssr`：Nuxt 3 SSR 主题预绘制说明。

## Run locally

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

SSR 示例目前是集成片段，不包含完整脚手架。完整说明见 `docs/guide/integrations.md`。

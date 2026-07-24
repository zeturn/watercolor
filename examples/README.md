# Watercolor examples

这些示例用于验证“第一次安装 Watercolor”时的真实体验。它们刻意保持小而完整：默认无边框 Watercolor 样式可以直接工作；如果提供 `public/theme.json`，Provider 会自动加载自定义 Theme v2。

## Examples

- `react-minimal`：Vite + React 19。
- `vue-minimal`：Vite + Vue 3.5。
- `next-ssr`：可运行的 Next.js App Router 示例，演示 SSR 主题预绘制（依赖 workspace 包）。
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

`next-ssr` 现在是一个可运行示例（需先从仓库根目录 `npm install && npm run build` 构建 workspace 包）。`nuxt-ssr` 目前仍是集成片段。完整说明见站点文档的 SSR 与主题章节。

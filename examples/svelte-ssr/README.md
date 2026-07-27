# Watercolor SvelteKit SSR example

可运行的 SvelteKit 示例，演示 `@zeturn/watercolor-svelte` 的：

- SSR 主题预绘制：`+layout.svelte` 中通过 `createThemeInitScript` 在 hydration 前解析颜色模式，避免主题闪烁。
- `ThemeProvider` / `LocaleProvider` 上下文注入与 `useTheme()` 消费。
- `static/theme.json` 自定义 Theme v2 自动加载。

## 运行

先在仓库根目录构建 workspace 包：

```bash
npm install
npm run build
```

然后：

```bash
cd examples/svelte-ssr
npm install
npm run dev
```

## 关键点

- `src/routes/+layout.svelte`：`<svelte:head>` 内注入主题初始化脚本（SSR 输出到初始 HTML），并包裹 `ThemeProvider`/`LocaleProvider`。
- `src/routes/+page.svelte`：使用 Svelte 5 runes 语法消费组件与 `useTheme()`。
- 组件事件使用 Svelte 5 回调 props（如 `onclick`），双向绑定使用 `bind:value` / `bind:checked`。

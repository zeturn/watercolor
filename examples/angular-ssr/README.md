# Watercolor Angular SSR example

可运行的 Angular（standalone + signals + SSR）示例，演示 `@zeturn/watercolor-angular` 的：

- SSR 主题预绘制：`src/server.ts` 中通过 `createThemeInitScript` 把主题初始化脚本注入 SSR HTML 的 `<head>`，在 hydration 前解析颜色模式，避免主题闪烁。
- `ThemeProvider` / `LocaleProvider` 依赖注入与模板引用（`#theme`）消费。
- `public/theme.json` 自定义 Theme v2 自动加载。

## 运行

先在仓库根目录构建 workspace 包：

```bash
npm install
npm run build
```

然后：

```bash
cd examples/angular-ssr
npm install
npm run dev
```

生产 SSR：

```bash
npm run build
npm run serve:ssr
```

## 关键点

- `src/app/app.component.ts`：使用 `wc-*` 选择器的 standalone 组件，事件为输出（如 `(clicked)`），双向绑定使用 `[(checked)]` / `[(value)]`。
- `src/server.ts`：Express + `AngularNodeAppEngine`，对 HTML 响应注入 `createThemeInitScript` 输出。
- `src/styles.css`：引入 `@zeturn/watercolor-angular/theme.css` 主题变量。

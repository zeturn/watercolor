# 生产检查清单

这份清单用于发布业务应用或验证 Watercolor 集成是否健康。它不是组件库内部 release gate 的替代品，而是给消费方项目的落地标准。

## 安装与构建

- React 项目安装 `@zeturn/watercolor-react`，Vue 项目安装 `@zeturn/watercolor-vue`。
- 样式只在应用入口引入一次。
- 未使用图标时不安装任何图标 wrapper；使用图标时只安装需要的一套。
- 项目能通过 `npm run build` 或对应框架的生产构建。
- SSR 项目确认服务端和客户端使用同一个 `defaultMode`。

## Theme v2

- 没有自定义 `theme.json` 时，默认 Watercolor 样式可以直接用于产品页面。
- 使用 `theme.json` 时，配置包含 `version: 2` 并通过 schema 校验。
- 自定义主题至少检查这些对比度：
  - `textPrimary / canvas`
  - `textSecondary / canvas`
  - `accent / onAccent`
  - `danger / canvas`
  - `focusRing / canvas`
- SSR 应用在 `<head>` 放置 `createThemeInitScript({ defaultMode: 'system' })`。
- Provider 自动加载远程主题时，错误态不会破坏默认主题。

## 页面组合

- 页面结构优先使用 `Page`、`Stack`、`Inline`、`Split`。
- 常驻内容不过度加边框、阴影和装饰背景。
- hover、focus、selected、open 等状态有清楚但克制的反馈。
- 长文本、中文、英文和数字混排没有溢出。
- 200% zoom 下核心流程仍可完成。

## 可访问性

- 所有表单控件都有可访问名称。
- Icon-only button 有 `aria-label`。
- Modal、Menu、Select、DatePicker、Popover 等浮层支持 Escape 和外部点击策略。
- 键盘 Tab 顺序符合页面阅读顺序。
- focus ring 在键盘操作时可见。
- `prefers-reduced-motion` 下无装饰性入场动画。
- `forced-colors` 下文字和焦点仍可辨认。
- 不在组件内部写死业务语言的 aria 文案；需要本地化时使用 `LocaleProvider`。

## 文档与示例

- README 的安装命令和当前发布版本一致。
- `examples/react-minimal` 和 `examples/vue-minimal` 能直接安装并构建。
- Next/Nuxt SSR 示例说明了 pre-paint 初始化方式。
- Storybook 中公开组件至少有一个基础 story。
- 组件行为差异记录在 React/Vue 契约矩阵中。

## 发布前建议

在 Watercolor 仓库内发布新版本前，至少运行：

```bash
npm run lint
npm run typecheck
npm test -- --run
npm run audit:docs-examples
npm run test:package
npm run build-storybook:react
npm run build-storybook:vue
npm run visual:recipes
npm run visual:a11y
npm run docs:build
```

业务项目可以把其中的 `visual:*` 换成自己的视觉回归工具，但不要省略 a11y 和生产构建。

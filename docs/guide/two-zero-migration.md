# 2.0 迁移指南与 codemod 方案

Watercolor 1.2.x 是 2.0 前的稳定线。2.0 会把已经在 1.2 中移除/冻结的旧入口彻底定型，不再保留兼容层。

## 已完成的迁移方向

- Theme v2 取代旧 theme manager。
- 默认样式收敛为无边框、扁平、低阴影 Watercolor。
- React/Vue 共享交互契约，弹层基础行为不再由每个组件自行实现。
- ESM-only 包契约固定。
- LocaleProvider 取代组件内部硬编码 aria 文案。

## 需要替换的旧写法

| 旧写法 | 新写法 |
| --- | --- |
| `toggleDarkMode()` | `<ThemeProvider defaultMode="system">` + `useTheme().toggleMode()` |
| `createThemeManager()` | `ThemeProvider` / `createThemeController()` |
| 组件内 `isDarkMode` prop | semantic tokens + Theme v2 mode |
| 写死中文 `aria-label` | `LocaleProvider messages` |
| 自定义弹层 document listener | shared overlay adapter |

## codemod 方案

2.0 前建议提供一个 `@zeturn/watercolor-codemod`：

1. 扫描并替换 `toggleDarkMode`、`createThemeManager` 导入。
2. 标记组件级 `isDarkMode` prop。
3. 标记自定义 `aria-label="关闭"` 等硬编码文案。
4. 将常见 Provider 包裹迁移为：

```tsx
<ThemeProvider defaultMode="system" themeUrl="/theme.json">
  <LocaleProvider locale="en">
    <App />
  </LocaleProvider>
</ThemeProvider>
```

codemod 不会自动修改业务主题 token；它只做安全、机械、可审阅的迁移。


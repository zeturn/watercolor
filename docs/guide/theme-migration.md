# 主题 API 迁移

本次收口不会立即删除旧 API。兼容入口仍然工作，但会在开发环境中只警告一次，并计划在下一个大版本移除。

## API 对照

| 旧写法 | 推荐替换 |
| --- | --- |
| `toggleDarkMode(true)` | `useTheme().setMode('dark')` |
| `toggleDarkMode(false)` | `useTheme().setMode('light')` |
| `isDarkMode()` | `useTheme().dark` 或 `resolvedMode === 'dark'` |
| `applyCSSTheme('default')` | `applyTheme('default')` |
| `createThemeManager(...)` | `createThemeController(...)`；框架应用优先使用 `ThemeProvider` |
| `localStorage['wc-scheme']` | `localStorage['wc-mode']` |
| 读取 `.dark` class | 读取 `useTheme().resolvedMode` |

## React 迁移

```diff
- import { toggleDarkMode } from '@zeturn/watercolor-react'
- toggleDarkMode(true)
+ import { useTheme } from '@zeturn/watercolor-react'
+ const { setMode } = useTheme()
+ setMode('dark')
```

确保组件位于 Provider 内：

```tsx
<ThemeProvider defaultMode="system">
  <App />
</ThemeProvider>
```

## Vue 迁移

```diff
- import { toggleDarkMode } from '@zeturn/watercolor-vue'
- toggleDarkMode(true)
+ import { useTheme } from '@zeturn/watercolor-vue'
+ const theme = useTheme()
+ theme.setMode('dark')
```

## storage 自动迁移

如果 `wc-mode` 不存在而旧的 `wc-scheme` 为 `light` 或 `dark`，Theme Controller 会读取旧值并写入新的 `wc-mode`。旧 key 暂时保留，方便旧版本应用回滚，但 Watercolor 不再更新它。

迁移完成后可以由业务代码在合适的版本清理 `wc-scheme`。

## class 兼容期

Provider 当前仍会同步 `.dark` 与 `.light`，因此现有业务 CSS 不会立刻失效。新样式应优先使用 Watercolor 语义 token；必须判断模式时，使用 `data-resolved-theme` 或 `useTheme()`。

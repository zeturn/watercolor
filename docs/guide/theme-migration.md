# 迁移到 Theme v2

Watercolor 1.2 删除旧主题双轨 API，配置文件也升级为严格的 `version: 2` schema。

## API 替换

| 已删除 | Theme v2 |
| --- | --- |
| `toggleDarkMode(true)` | `useTheme().setMode('dark')` |
| `isDarkMode()` | `useTheme().dark` 或 `resolvedMode === 'dark'` |
| `createThemeManager()` | `ThemeProvider` 或 `createThemeController()` |
| `applyCSSTheme()` / `applyTheme()` / `setTheme()` | `applyThemeConfig()` |
| `setFonts()` / `applyFontTheme()` | Theme v2 `tokens.fonts` |
| `PaperUtils.themeUtils` | `useTheme()` |

Controller 现在是纯创建并显式启动：

```ts
const controller = createThemeController({ initialMode: 'system' })
controller.start()
```

框架应用应优先使用 Provider。

## JSON 迁移

旧配置：

```json
{ "primary": { "600": "#7c3aed" }, "radius": { "lg": "12px" } }
```

Theme v2：

```json
{
  "version": 2,
  "tokens": {
    "colors": { "primary": { "600": "#7c3aed" } },
    "radius": { "lg": "12px" }
  }
}
```

旧扁平 JSON 会返回校验错误，不会被部分应用。仓库提供的 `theme-v2.schema.json` 可用于编辑器提示和 CI 校验。

## 存储

正式 key 为 `wc-mode`。1.x 期间仍会从旧 `wc-scheme` 一次性读取并迁移，但不会继续写入；该兼容读取将在 2.0 删除。

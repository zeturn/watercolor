# Theme v2 与图标

Watercolor 默认主题不需要任何配置：组件使用安静的无边框表面、语义文字颜色，以及仅在 hover、selected 和 focus 时出现的反馈。

Theme v2 将两个职责严格分开：

- `ThemeProvider` 管理 `light / dark / system` 模式。
- `applyThemeConfig` 或 `loadThemeConfig` 应用可选的品牌设计 Token。

模式切换不会重新应用或覆盖品牌主题。

## 默认 Watercolor

只挂载 Provider，不加载 JSON，即可使用完整默认主题：

```tsx
import { ThemeProvider } from '@zeturn/watercolor-react'

<ThemeProvider defaultMode="system">
  <App />
</ThemeProvider>
```

```vue
<ThemeProvider default-mode="system">
  <App />
</ThemeProvider>
```

## Theme v2 JSON

配置必须包含 `version: 2`。它可以覆盖调色板、字体、圆角、动效，以及 light/dark 语义 Token；缺失项继承 Watercolor 默认值。

```json
{
  "$schema": "./node_modules/@zeturn/watercolor-core/theme-v2.schema.json",
  "version": 2,
  "tokens": {
    "colors": {
      "primary": { "500": "#a78bfa", "600": "#8b5cf6", "700": "#7c3aed" }
    },
    "radius": { "lg": "14px", "xl": "18px" }
  },
  "modes": {
    "light": { "canvas": "#fffbff", "actionHover": "#f5efff", "accent": "#7c3aed" },
    "dark": { "canvas": "#120f18", "actionHover": "#241d30", "accent": "#c4b5fd" }
  }
}
```

Theme v2 不接受选择器、任意 CSS 或组件级覆写。无效配置不会被部分应用。
当 `canvas` 与十六进制 `textPrimary` 的对比度低于 4.5:1 时，校验结果会在 `warnings` 中提示，但不会阻止应用；发布自定义主题前应处理这些可访问性警告。

## 加载配置

打包 JSON 时使用同步 API：

```ts
import theme from './theme.json'
import { applyThemeConfig } from '@zeturn/watercolor-react'

const result = applyThemeConfig(theme)
if (!result.ok) console.error(result.errors)
```

显式加载远程配置：

```ts
import { loadThemeConfig } from '@zeturn/watercolor-vue'

const result = await loadThemeConfig('/theme.json')
if (!result.ok) console.error(result.errors)
```

Watercolor 不会自动请求 `/theme.json`。请求失败、JSON 损坏或校验失败时，当前主题保持不变。使用 `resetThemeConfig()` 可移除配置层写入的变量并恢复默认 Watercolor。

## 模式控制

React：

```tsx
function ThemeControls() {
  const { mode, resolvedMode, setMode, toggleMode } = useTheme()
  return <button onClick={toggleMode}>{mode} → {resolvedMode}</button>
}

<ThemeProvider
  mode={mode}
  onModeChange={setMode}
  onResolvedModeChange={(resolved) => console.log(resolved)}
>
  <ThemeControls />
</ThemeProvider>
```

Vue 的 `useTheme()` 只能在 Provider 后代中调用：

```vue
<ThemeProvider v-model:mode="mode" @resolved-mode-change="onResolvedModeChange">
  <ThemeControls />
</ThemeProvider>
```

`data-theme` 保存请求模式，`data-resolved-theme` 保存实际生效的 light/dark。`.light`、`.dark` 和 `color-scheme` 会同步输出。

## SSR 与首屏无闪烁

将初始化脚本放进 `<head>`，并保证它在 Watercolor CSS 和应用内容绘制前执行：

```ts
import { createThemeInitScript, serializeThemeConfig } from '@zeturn/watercolor-react'

const initScript = createThemeInitScript({ defaultMode: 'system' })
const serialized = serializeThemeConfig(theme)
```

Next.js App Router：

```tsx
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {serialized.ok && <style data-watercolor-theme>{serialized.css}</style>}
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body><ThemeProvider defaultMode="system">{children}</ThemeProvider></body>
    </html>
  )
}
```

Nuxt 3 可在服务端插件中调用相同 helper，并通过 `useHead()` 写入 `style` 和 `script`。使用 CSP 时，把应用生成的 nonce 同时传给 `<style>` 和 `<script>` 标签；helper 本身不读取或生成 nonce。

如果服务端能从 cookie 得到用户模式，应把同一模式同时传给初始化脚本和 Provider。Provider 创建和 SSR render 阶段不会修改 DOM。

## 图标

推荐按需安装一套图标库：

```bash
npm install lucide-react
# 或 npm install lucide-vue-next
```

```tsx
import { Icon } from '@zeturn/watercolor-react'
<Icon library="lucide" name="search" />
```

支持 Lucide、Heroicons、Tabler、Phosphor 和 Feather。业务项目应统一图标尺寸、描边宽度和颜色语义。

---
title: CodeBlock
---

# CodeBlock

## 使用说明

<!-- AUTO-GENERATED:GUIDE:START -->

用于展示代码片段、配置示例和轻量 diff，适合文档、开发者工具和调试界面。

### 适合用在

- 品牌化展示和内容呈现
- 列表项视觉增强
- 与 Card、Typography、Button 组合构建营销或信息模块

### 导入与最小示例

::: code-group

```tsx [React]
import { CodeBlock } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

export function Example() {
  return <CodeBlock language="json" code={`{\n  "theme": "watercolor"\n}`} />
}
```

```vue [Vue]
<script setup>
import { CodeBlock } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>

<template>
  <CodeBlock language="json" :code="`{\n  &quot;theme&quot;: &quot;watercolor&quot;\n}`" />
</template>
```

:::

### 集成建议

- 样式文件只在应用入口引入一次。
- 业务状态、接口请求和权限控制放在页面或容器层处理，不要堆进展示组件。
- 如果这一页有 Storybook 预览，优先先看顶部预览，再对照下方 Props 和 Events。

### 使用提示

- 重要交互建议同时处理 loading、disabled 和成功/失败反馈，不要只处理点击事件本身。

<!-- AUTO-GENERATED:GUIDE:END -->


## Quick Summary

<!-- AUTO-GENERATED:SUMMARY:START -->

> Auto-extracted from the component README tables (may show only the first few rows).

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `code` | `string` | `''` | Code string to display. |
| `language` | `string` | `'text'` | Language hint. Built-in aliases include `js`, `jsx`, `ts`, `tsx`, `py`, `bash`, `zsh`, `diff`, `json`, `css`, and `shell`. |
| `title` | `string` | `''` | Optional title shown in the header. When omitted, the language label is used as the title. |
| `showLanguage` | `boolean` | `true` | Whether to show the language label. |
| `showLineNumbers` | `boolean` | `true` | Whether to show line numbers. |
| `showCopyButton` | `boolean` | `true` | Whether to show the icon-only copy button. The button uses `title` / `aria-label` for copy text. |
| `diff` | `boolean` | `false` | Enables diff row parsing. Lines starting with `+` are added, lines starting with `-` are removed. |
| `wrap` | `boolean` | `false` | Allows long lines to wrap instead of scrolling horizontally. |
| `maxHeight` | `string` | `''` | Optional max height for the scrollable code area. |
| `className` | `string` | `''` | Additional CSS class names applied to the root element. |

### Events

| Event | Description |
| --- | --- |
| `copy` | Emitted after the code is copied successfully. Receives the copied code string. |

<!-- AUTO-GENERATED:SUMMARY:END -->



## Introduction

CodeBlock displays read-only code snippets in a quiet Watercolor surface. It supports a language label, copy action, line numbers, lightweight syntax highlighting, wrapping, max height, and diff-style added / removed rows.

It is intended for documentation, developer tools, settings screens, and debug views. It is not a code editor.

## Installation

```bash
npm install @zeturn/watercolor-vue
```

Import the package stylesheet once in your application entry:

```ts
import '@zeturn/watercolor-vue/style.css'
```

## Usage

```vue
<script setup>
import { CodeBlock } from '@zeturn/watercolor-vue'

const themeCode = `{
  "theme": "watercolor",
  "mode": "system"
}`
</script>

<template>
  <CodeBlock
    title="theme.json"
    language="json"
    :code="themeCode"
  />
</template>
```

## Diff

```vue
<script setup>
const patchCode = `-  "shadow": "0 12px 32px rgba(0, 0, 0, 0.18)"
+  "shadow": "none"`
</script>

<template>
  <CodeBlock title="theme.patch" language="diff" diff :code="patchCode" />
</template>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `code` | `string` | `''` | Code string to display. |
| `language` | `string` | `'text'` | Language hint. Built-in aliases include `js`, `jsx`, `ts`, `tsx`, `py`, `bash`, `zsh`, `diff`, `json`, `css`, and `shell`. |
| `title` | `string` | `''` | Optional title shown in the header. When omitted, the language label is used as the title. |
| `showLanguage` | `boolean` | `true` | Whether to show the language label. |
| `showLineNumbers` | `boolean` | `true` | Whether to show line numbers. |
| `showCopyButton` | `boolean` | `true` | Whether to show the icon-only copy button. The button uses `title` / `aria-label` for copy text. |
| `diff` | `boolean` | `false` | Enables diff row parsing. Lines starting with `+` are added, lines starting with `-` are removed. |
| `wrap` | `boolean` | `false` | Allows long lines to wrap instead of scrolling horizontally. |
| `maxHeight` | `string` | `''` | Optional max height for the scrollable code area. |
| `className` | `string` | `''` | Additional CSS class names applied to the root element. |

## Events

| Event | Description |
| --- | --- |
| `copy` | Emitted after the code is copied successfully. Receives the copied code string. |

## Notes

- Syntax highlighting is intentionally lightweight and dependency-free. It covers common token types for JavaScript, TypeScript, Python, JSON, CSS, Shell, and Diff.
- For large documentation sites that need exact language grammars, CodeBlock can later be paired with a dedicated highlighter while keeping the same Watercolor shell.
- The copy button is icon-only by default to keep the header visually quiet.

## License

ISC © Watercolor UI

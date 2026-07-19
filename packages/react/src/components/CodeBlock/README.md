# CodeBlock

## Introduction

CodeBlock displays read-only code snippets in a quiet Watercolor surface. It supports a language label, copy action, line numbers, lightweight syntax highlighting, wrapping, max height, and diff-style added / removed rows.

It is intended for documentation, developer tools, settings screens, and debug views. It is not a code editor.

## Installation

```bash
npm install @zeturn/watercolor-react
```

Import the package stylesheet once in your application entry:

```tsx
import '@zeturn/watercolor-react/style.css'
```

## Usage

```tsx
import { CodeBlock } from '@zeturn/watercolor-react'

export default function Demo() {
  return (
    <CodeBlock
      title="theme.json"
      language="json"
      code={`{
  "theme": "watercolor",
  "mode": "system"
}`}
    />
  )
}
```

## Diff

```tsx
<CodeBlock
  title="theme.patch"
  language="diff"
  diff
  code={`-  "shadow": "0 12px 32px rgba(0, 0, 0, 0.18)"
+  "shadow": "none"`}
/>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `code` | `string` | `''` | Code string to display. |
| `language` | `string` | `'text'` | Language hint. Built-in aliases include `js`, `jsx`, `ts`, `tsx`, `py`, `bash`, `zsh`, `diff`, `json`, `css`, and `shell`. |
| `title` | `ReactNode` | `undefined` | Optional title shown in the header. When omitted, the language label is used as the title. |
| `showLanguage` | `boolean` | `true` | Whether to show the language label. |
| `showLineNumbers` | `boolean` | `true` | Whether to show line numbers. |
| `showCopyButton` | `boolean` | `true` | Whether to show the icon-only copy button. The button uses `title` / `aria-label` for copy text. |
| `diff` | `boolean` | `false` | Enables diff row parsing. Lines starting with `+` are added, lines starting with `-` are removed. |
| `wrap` | `boolean` | `false` | Allows long lines to wrap instead of scrolling horizontally. |
| `maxHeight` | `string \| number` | `undefined` | Optional max height for the scrollable code area. |
| `onCopy` | `(code: string) => void` | `undefined` | Called after the code is copied successfully. |
| `className` | `string` | `''` | Additional CSS class names applied to the root element. |

## Notes

- Syntax highlighting is intentionally lightweight and dependency-free. It covers common token types for JavaScript, TypeScript, Python, JSON, CSS, Shell, and Diff.
- For large documentation sites that need exact language grammars, CodeBlock can later be paired with a dedicated highlighter while keeping the same Watercolor shell.
- The copy button is icon-only by default to keep the header visually quiet.

## License

ISC © Watercolor UI


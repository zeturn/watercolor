import React from 'react'
import CodeBlock from '@/components/CodeBlock/CodeBlock.jsx'

const pythonCode = `from dataclasses import dataclass

@dataclass
class ThemeToken:
    name: str
    value: str

def resolve_tokens(tokens: list[ThemeToken]) -> dict[str, str]:
    return {token.name: token.value for token in tokens}

print(resolve_tokens([
    ThemeToken("canvas", "#ffffff"),
    ThemeToken("accent", "#0f7cff"),
]))`

const jsonCode = `{
  "theme": "watercolor",
  "mode": "system",
  "tokens": {
    "canvas": "#ffffff",
    "text": "#202123",
    "accent": "#0f7cff",
    "radius": "12px"
  }
}`

const diffCode = `--- before/theme.json
+++ after/theme.json
 {
-  "radius": "8px",
-  "shadow": "0 12px 32px rgba(0, 0, 0, 0.18)",
+  "radius": "12px",
+  "shadow": "none",
   "interaction": {
-    "hover": "border",
+    "hover": "filled",
     "focus": "ring"
   }
 }`

const longLineCode = `const prompt = "Watercolor should stay quiet by default: typography first, icon second, surfaces only when interaction asks for them.";`

export default {
  title: 'Components/CodeBlock (React)',
  component: CodeBlock,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: { type: 'select' },
      options: ['text', 'javascript', 'typescript', 'python', 'json', 'css', 'shell', 'diff'],
    },
    showLanguage: { control: 'boolean' },
    showLineNumbers: { control: 'boolean' },
    showCopyButton: { control: 'boolean' },
    diff: { control: 'boolean' },
    wrap: { control: 'boolean' },
    maxHeight: { control: 'text' },
    onCopy: { action: 'copy' },
  },
  args: {
    showLanguage: true,
    showLineNumbers: true,
    showCopyButton: true,
    wrap: false,
  },
}

export const Python = {
  args: {
    title: 'Theme resolver',
    language: 'python',
    code: pythonCode,
  },
}

export const JSON = {
  args: {
    title: 'theme.json',
    language: 'json',
    code: jsonCode,
  },
}

export const Diff = {
  args: {
    title: 'Minimal surface patch',
    language: 'diff',
    diff: true,
    code: diffCode,
  },
}

export const Wrapped = {
  args: {
    title: 'Long prompt',
    language: 'javascript',
    wrap: true,
    code: longLineCode,
  },
}


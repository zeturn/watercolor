// Docs 文档数据 - 动态路由 /docs/:sectionId （多语言）

const SUPPORTED_LANGS = ['zh-CN', 'en-US', 'ja-JP']
const FALLBACK_LANG = 'zh-CN'

function normLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : FALLBACK_LANG
}

// 分组、侧边栏标题与正文内容，按语言组织
const docsI18n = {
  'zh-CN': {
    sections: [
      {
        group: '入门',
        items: [
          { id: 'intro', label: '介绍' },
          { id: 'install', label: '安装' },
          { id: 'quick-start', label: '快速开始' },
          { id: 'usage', label: '基本用法' },
        ],
      },
      {
        group: '核心概念',
        items: [
          { id: 'theming', label: '主题系统' },
          { id: 'customization', label: '自定义样式' },
          { id: 'dark-mode', label: '暗黑模式' },
          { id: 'accessibility', label: '无障碍支持' },
        ],
      },
      {
        group: '进阶',
        items: [
          { id: 'ssr', label: 'SSR 支持' },
          { id: 'tree-shaking', label: 'Tree Shaking' },
          { id: 'migration', label: '迁移指南' },
          { id: 'contributing', label: '贡献指南' },
        ],
      },
    ],
    content: {
      intro: `## 什么是 Watercolor UI？

Watercolor UI 是一个**现代、极简、水彩风格**的跨框架 UI 组件库，同时支持 **Vue 3.5+** 和 **React 18/19**。

### 核心特性

- **双框架支持**: 一套设计语言同时覆盖 Vue 3 和 React 18/19
- **超扁平设计哲学**: 无阴影、无边框的极简水彩风格
- **Tree-shaking 友好**: 按需导入，最小化打包体积
- **完全无障碍**: 键盘导航、ARIA 属性、屏幕阅读器支持
- **SSR 安全**: 避免在模块顶层使用浏览器 API
- **纯 CSS 驱动**: 使用原生 CSS 变量系统，零 JS 运行时开销

### 设计理念

Watercolor 的名字来源于"水彩画"——轻盈、透明、层次丰富。我们追求的是一种**超扁平 (Ultra-flat)** 的视觉语言：

- 去除一切不必要的装饰（阴影、边框、渐变）
- 用色彩和间距构建层次感
- 保持组件的纯粹性和通用性

### 组件数量

目前包含 **60+ 个精心设计的组件**，覆盖以下场景：

| 类别 | 数量 | 示例 |
|------|------|------|
| 表单组件 | 18 | Button, TextField, Select, Checkbox... |
| 布局组件 | 4 | Container, Box, Grid, Paper |
| 导航组件 | 7 | AppBar, Toolbar, Menu, Tabs... |
| 反馈组件 | 9 | Alert, Snackbar, Modal, Tooltip... |
| 数据展示 | 16 | Typography, Table, Avatar, Card... |
| 高级组件 | 15+ | Popover, ImageGallery, VideoPlayer... |`,

      install: `## 安装 Watercolor UI

### 方式一：使用智能安装器（推荐）

\`\`\`bash
npm install @zeturn/watercolor-ui
# 或
yarn add @zeturn/watercolor-ui
# 或
pnpm add @zeturn/watercolor-ui
\`\`\`

安装器会自动检测你的项目环境并引导选择框架和图标库。

### 方式二：手动安装

#### React 项目

\`\`\`bash
npm install @zeturn/watercolor-react @zeturn/watercolor-core
\`\`\`

#### Vue 项目

\`\`\`bash
npm install @zeturn/watercolor-vue @zeturn/watercolor-core
\`\`\`

### Node 版本要求

- \`^20.19.0\`
- 或 \`>=22.12.0\``,

      'quick-start': `## 快速开始

### React 项目中使用

\`\`\`jsx
import React from 'react'
import { Button, TextField, Container } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

function App() {
  return (
    <Container maxWidth="md">
      <h1>Hello Watercolor!</h1>
      <TextField label="你的名字" placeholder="请输入..." />
      <Button variant="filled">点击我</Button>
    </Container>
  )
}
\`\`\`

### Vue 项目中使用

\`\`\`vue
<template>
  <Container max-width="md">
    <h1>Hello Watercolor!</h1>
    <TextField label="你的名字" placeholder="请输入..." />
    <Button variant="filled">点击我</Button>
  </Container>
</template>

<script setup>
import { Button, TextField, Container } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### 按需导入

所有组件都支持按需导入，确保最优的打包体积：

\`\`\`jsx
// 只导入你需要的组件
import { Button } from '@zeturn/watercolor-react/components/Button'
// 而不是 import * from '@zeturn/watercolor-react'
\`\`\``,

      usage: `## 基本用法

### Button 按钮

\`\`\`jsx
// 基础按钮
<Button>默认按钮</Button>

// 不同变体
<Button variant="filled">填充按钮</Button>
<Button variant="outlined">轮廓按钮</Button>
<Button variant="text">文字按钮</Button>

// 不同尺寸
<Button size="sm">小号</Button>
<Button size="md">中号</Button>
<Button size="lg">大号</Button>

// 禁用状态
<Button disabled>禁用状态</Button>
\`\`\`

### TextField 文本输入

\`\`\`jsx
<TextField
  label="邮箱地址"
  type="email"
  placeholder="your@email.com"
  helperText="我们不会分享你的邮箱"
/>
\`\`\`

### Card 卡片

\`\`\`jsx
<Card>
  <CardHeader title="卡片标题" subtitle="副标题描述" />
  <CardBody>
    这里是卡片内容区域...
  </CardBody>
  <CardActions>
    <Button variant="text">操作</Button>
  </CardActions>
</Card>
\`\`\``,

      theming: `## 主题系统

Watercolor 的默认主题不需要任何配置即可工作：无边框、少阴影，并用 hover / focus / selected 等状态背景建立层次。需要品牌化时，使用 **Theme v2 JSON** 覆盖语义 token，而不是改组件内部样式。

### React

\`\`\`tsx
import { ThemeProvider, useTheme } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

export function Root() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <App />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { mode, setMode, resolvedMode } = useTheme()
  return <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{resolvedMode}</button>
}
\`\`\`

### Vue

\`\`\`vue
<script setup>
import { ThemeProvider, useTheme } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>

<template>
  <ThemeProvider theme-url="/theme.json" default-mode="system">
    <App />
  </ThemeProvider>
</template>
\`\`\`

### Theme v2 JSON

\`\`\`json
{
  "version": 2,
  "tokens": {
    "light": {
      "canvas": "#ffffff",
      "textPrimary": "#171717",
      "accent": "#2563eb",
      "onAccent": "#ffffff",
      "danger": "#dc2626",
      "focusRing": "#3b82f6"
    },
    "dark": {
      "canvas": "#050505",
      "textPrimary": "#f5f5f5",
      "accent": "#60a5fa",
      "onAccent": "#06111f",
      "danger": "#f87171",
      "focusRing": "#93c5fd"
    }
  }
}
\`\`\`

### 稳定 token 策略

Theme v2 冻结以下 mode token 名称，1.x 内不做破坏性重命名：\`canvas\`, \`surfaceSubtle\`, \`surfaceRaised\`, \`surfaceOverlay\`, \`actionHover\`, \`actionActive\`, \`actionSelected\`, \`actionSelectedHover\`, \`actionDisabled\`, \`textPrimary\`, \`textSecondary\`, \`textTertiary\`, \`textDisabled\`, \`textInverse\`, \`borderDefault\`, \`borderStrong\`, \`borderSubtle\`, \`onAccent\`, \`accent\`, \`accentHover\`, \`accentActive\`, \`accentSubtle\`, \`danger\`, \`dangerHover\`, \`dangerSubtle\`, \`backdrop\`, \`shadowSm\`, \`shadowMd\`, \`shadowLg\`, \`shadowXl\`, \`focusRing\`。

strict theme audit 会校验关键对比度：\`textPrimary\` / \`canvas\`、\`accent\` / \`onAccent\`、\`danger\`、\`focusRing\`。如果 \`theme.json\` 缺失、加载失败或校验失败，Provider 会回退到默认 Watercolor 样式。`,

      customization: `## 自定义样式

### 覆盖 CSS 变量

最简单的方式是直接覆盖 CSS 变量：

\`\`\`css
/* 在你的全局样式中 */
:root {
  /* 自定义颜色 */
  --wc-primary-500: #ec4899;

  /* 自定义圆角 */
  --wc-radius-sm: 4px;
  --wc-radius-md: 8px;
  --wc-radius-lg: 12px;

  /* 自定义字体 */
  --wc-font-sans: 'Your Font', sans-serif;
}
\`\`\`

### 使用 className 扩展

每个组件都接受标准的 \`className\` prop：

\`\`\`jsx
<Button className="my-custom-button">
  自定义样式
</Button>

<style>
.my-custom-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
</style>
\`\`\`

### 使用 style prop

\`\`\`jsx
<Button style={{ borderRadius: '9999px' }}>
  圆角按钮
</Button>
\`\`\``,

      'dark-mode': `## 暗黑模式

Watercolor 使用 \`data-resolved-theme\` 表达最终解析后的主题。CSS 只读取 \`data-resolved-theme="dark"\`，避免 \`.dark\`、\`data-theme\` 和系统媒体查询重复映射导致 SSR hydration 风险。

### system 模式

\`\`\`tsx
<ThemeProvider defaultMode="system" initialResolvedMode="light">
  <App />
</ThemeProvider>
\`\`\`

\`defaultMode="system"\` 会在客户端跟随 \`prefers-color-scheme\`。SSR 场景建议传入 \`initialResolvedMode\` 或使用预绘制脚本，让服务端首屏和客户端解析结果一致。

### 局部主题

\`\`\`tsx
<section ref={panelRef}>
  <ThemeProvider target={panelRef.current} defaultMode="dark">
    <SettingsPanel />
  </ThemeProvider>
</section>
\`\`\`

\`target\` 可以把 mode 和 scoped Theme v2 token 都挂到同一个目标节点。Provider 卸载时会恢复目标节点上原有的主题属性。`,

      accessibility: `## 无障碍支持 (Accessibility)

Watercolor UI 将无障碍作为核心设计原则之一。

### 内置支持

所有组件默认包含：

- 键盘导航 - Tab / Shift+Tab / Enter / Space / Escape
- ARIA 属性 - role, aria-label, aria-expanded 等
- 焦点管理 - 可见的焦点环 (focus-visible)
- 颜色对比度 - 符合 WCAG AA 标准
- 屏幕阅读器优化 - 语义化 HTML 结构
- 减少动画 - 尊重 prefers-reduced-motion

### 最佳实践

\`\`\`jsx
// 为图标按钮添加标签
<IconButton aria-label="关闭对话框">
  <CloseIcon />
</IconButton>

// 为表单字段添加关联标签
<TextField
  id="email"
  label="Email"
  aria-describedby="email-hint"
/>
<span id="email-hint">我们不会发送垃圾邮件</span>

// 正确使用 role
<div role="alert" aria-live="polite">
  操作成功！
</div>
\`\`\``,

      ssr: `## SSR 支持

Watercolor UI 完全兼容服务端渲染（SSR）。

### Next.js (React)

\`\`\`jsx
// pages/_app.js or app/layout.js
import '@zeturn/watercolor-react/style.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
\`\`\`

### Nuxt 3 (Vue)

\`\`\`vue
<!-- nuxt.config.ts or plugins/watercolor.client.ts -->
<script setup lang="ts">
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### 注意事项

- 所有组件避免在模块顶层访问 \`window\` / \`document\`
- CSS 变量在 SSR 时会正确输出
- 动态主题切换建议在客户端初始化后进行`,

      'tree-shaking': `## Tree Shaking

Watercolor UI 的架构天然支持 Tree-shaking。

### 推荐的导入方式

\`\`\`jsx
// 推荐：按需导入单个组件
import { Button } from '@zeturn/watercolor-react/components/Button'
import { TextField } from '@zeturn/watercolor-react/components/TextField'

// 可行：从入口文件导入（ESM 会 tree-shake）
import { Button, TextField } from '@zeturn/watercolor-react'

// 不推荐：导入全部
import * as WC from '@zeturn/watercolor-react'
\`\`\`

### 打包体积对比

| 导入方式 | Gzip 后大小 |
|----------|-------------|
| 仅 Button | ~2 KB |
| 10 个常用组件 | ~15 KB |
| 全部组件 | ~45 KB |

### 样式也支持按需加载

\`\`\`css
/* 默认推荐导入框架包样式；高级用法再按组件拆分 */
@import '@zeturn/watercolor-react/style.css';
@import '@zeturn/watercolor-react/components/Button/style.css';
\`\`\``,

      migration: `## 迁移指南

### 从 Tailwind CSS 迁移

如果你之前使用 Tailwind CSS 直接写样式：

\`\`\`diff
- <button class="bg-blue-500 text-white px-4 py-2 rounded-lg
-   hover:bg-blue-600 transition-colors">
-   Click me
- </button>
+ <Button variant="filled">
+   Click me
+ </Button>
\`\`\`

### 从其他 UI 库迁移

| 其他库 | Watercolor 对应 |
|--------|----------------|
| MUI Button | \`<Button>\` |
| Ant Design Input | \`<TextField>\` |
| Chakra UI Box | \`<Box>\` |
| Radix Dialog | \`<Modal>\` |
| Headless UI Menu | \`<Menu>\` |

### v1.1.x 主要变更

- 移除 Tailwind CSS 依赖，改用原生 CSS
- 图标库改为可选的 peerDependencies
- 新增主题控制器 API
- 改进 SSR 兼容性`,

      contributing: `## 贡献指南

感谢你对 Watercolor UI 的兴趣！

### 开发环境搭建

\`\`\`bash
# 克隆仓库
git clone https://github.com/zeturn/watercolor.git
cd watercolor

# 安装依赖
npm install

# 启动开发模式
npm run dev

# 启动 Storybook
npm run storybook

# 发布前文档与示例检查
npm run audit:docs-examples
\`\`\`

### 项目结构

\`\`\`
watercolor/
├── packages/
│   ├── core/          # 核心逻辑和样式
│   ├── vue/           # Vue 组件实现
│   └── react/         # React 组件实现
├── site/              # 官网和文档源
├── docs/              # GitHub Pages 构建产物
└── scripts/           # 构建脚本
\`\`\`

### 提交规范

我们使用 Conventional Commits：

- \`feat:\` 新功能
- \`fix:\` Bug 修复
- \`docs:\` 文档更新
- \`style:\` 代码格式调整
- \`refactor:\` 重构
- \`test:\` 测试相关
- \`chore:\` 构建/工具变更

### 开发新组件

1. 在 \`packages/core/src/components/\` 创建工具函数
2. 在 \`packages/vue/src/components/\` 创建 Vue 实现
3. 在 \`packages/react/src/components/\` 创建 React 实现
4. 编写 Storybook stories
5. 添加单元测试
6. 更新文档`,
    },
  },

  'en-US': {
    sections: [
      {
        group: 'Getting Started',
        items: [
          { id: 'intro', label: 'Introduction' },
          { id: 'install', label: 'Installation' },
          { id: 'quick-start', label: 'Quick Start' },
          { id: 'usage', label: 'Basic Usage' },
        ],
      },
      {
        group: 'Core Concepts',
        items: [
          { id: 'theming', label: 'Theme System' },
          { id: 'customization', label: 'Customization' },
          { id: 'dark-mode', label: 'Dark Mode' },
          { id: 'accessibility', label: 'Accessibility' },
        ],
      },
      {
        group: 'Advanced',
        items: [
          { id: 'ssr', label: 'SSR Support' },
          { id: 'tree-shaking', label: 'Tree Shaking' },
          { id: 'migration', label: 'Migration' },
          { id: 'contributing', label: 'Contributing' },
        ],
      },
    ],
    content: {
      intro: `## What is Watercolor UI?

Watercolor UI is a **modern, minimal, watercolor-style** cross-framework UI component library that supports both **Vue 3.5+** and **React 18/19**.

### Core Features

- **Dual-framework support**: One design language covering both Vue 3 and React 18/19
- **Ultra-flat design philosophy**: Minimal watercolor style with no shadows or borders
- **Tree-shaking friendly**: Import on demand to minimize bundle size
- **Fully accessible**: Keyboard navigation, ARIA attributes, screen reader support
- **SSR-safe**: Avoids browser APIs at module top level
- **Pure CSS driven**: Uses native CSS variable system with zero JS runtime overhead

### Design Philosophy

The name "Watercolor" comes from watercolor painting — light, translucent, and layered. We pursue an **ultra-flat** visual language:

- Remove all unnecessary decoration (shadows, borders, gradients)
- Build hierarchy with color and spacing
- Keep components pure and universal

### Component Count

Currently includes **60+ carefully designed components**, covering the following scenarios:

| Category | Count | Examples |
|----------|-------|----------|
| Form | 18 | Button, TextField, Select, Checkbox... |
| Layout | 4 | Container, Box, Grid, Paper |
| Navigation | 7 | AppBar, Toolbar, Menu, Tabs... |
| Feedback | 9 | Alert, Snackbar, Modal, Tooltip... |
| Data Display | 16 | Typography, Table, Avatar, Card... |
| Advanced | 15+ | Popover, ImageGallery, VideoPlayer... |`,

      install: `## Install Watercolor UI

### Option 1: Smart Installer (Recommended)

\`\`\`bash
npm install @zeturn/watercolor-ui
# or
yarn add @zeturn/watercolor-ui
# or
pnpm add @zeturn/watercolor-ui
\`\`\`

The installer automatically detects your project environment and guides you to choose a framework and icon library.

### Option 2: Manual Installation

#### React project

\`\`\`bash
npm install @zeturn/watercolor-react @zeturn/watercolor-core
\`\`\`

#### Vue project

\`\`\`bash
npm install @zeturn/watercolor-vue @zeturn/watercolor-core
\`\`\`

### Node Version Requirements

- \`^20.19.0\`
- or \`>=22.12.0\``,

      'quick-start': `## Quick Start

### Using in a React project

\`\`\`jsx
import React from 'react'
import { Button, TextField, Container } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

function App() {
  return (
    <Container maxWidth="md">
      <h1>Hello Watercolor!</h1>
      <TextField label="Your name" placeholder="Enter..." />
      <Button variant="filled">Click me</Button>
    </Container>
  )
}
\`\`\`

### Using in a Vue project

\`\`\`vue
<template>
  <Container max-width="md">
    <h1>Hello Watercolor!</h1>
    <TextField label="Your name" placeholder="Enter..." />
    <Button variant="filled">Click me</Button>
  </Container>
</template>

<script setup>
import { Button, TextField, Container } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### Import on demand

All components support on-demand imports to ensure the optimal bundle size:

\`\`\`jsx
// Import only the components you need
import { Button } from '@zeturn/watercolor-react/components/Button'
// Instead of import * from '@zeturn/watercolor-react'
\`\`\``,

      usage: `## Basic Usage

### Button

\`\`\`jsx
// Basic button
<Button>Default Button</Button>

// Variants
<Button variant="filled">Filled Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="text">Text Button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled
<Button disabled>Disabled</Button>
\`\`\`

### TextField

\`\`\`jsx
<TextField
  label="Email address"
  type="email"
  placeholder="your@email.com"
  helperText="We will never share your email"
/>
\`\`\`

### Card

\`\`\`jsx
<Card>
  <CardHeader title="Card title" subtitle="Subtitle description" />
  <CardBody>
    Card content goes here...
  </CardBody>
  <CardActions>
    <Button variant="text">Action</Button>
  </CardActions>
</Card>
\`\`\``,

      theming: `## Theme System

Watercolor's default theme works without any configuration: no borders, few shadows, and uses hover / focus / selected state backgrounds to build hierarchy. For branding, override semantic tokens with a **Theme v2 JSON** instead of changing component internals.

### React

\`\`\`tsx
import { ThemeProvider, useTheme } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

export function Root() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <App />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { mode, setMode, resolvedMode } = useTheme()
  return <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{resolvedMode}</button>
}
\`\`\`

### Vue

\`\`\`vue
<script setup>
import { ThemeProvider, useTheme } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>

<template>
  <ThemeProvider theme-url="/theme.json" default-mode="system">
    <App />
  </ThemeProvider>
</template>
\`\`\`

### Theme v2 JSON

\`\`\`json
{
  "version": 2,
  "tokens": {
    "light": {
      "canvas": "#ffffff",
      "textPrimary": "#171717",
      "accent": "#2563eb",
      "onAccent": "#ffffff",
      "danger": "#dc2626",
      "focusRing": "#3b82f6"
    },
    "dark": {
      "canvas": "#050505",
      "textPrimary": "#f5f5f5",
      "accent": "#60a5fa",
      "onAccent": "#06111f",
      "danger": "#f87171",
      "focusRing": "#93c5fd"
    }
  }
}
\`\`\`

### Stable token strategy

Theme v2 freezes the following mode token names and will not introduce breaking renames within 1.x: \`canvas\`, \`surfaceSubtle\`, \`surfaceRaised\`, \`surfaceOverlay\`, \`actionHover\`, \`actionActive\`, \`actionSelected\`, \`actionSelectedHover\`, \`actionDisabled\`, \`textPrimary\`, \`textSecondary\`, \`textTertiary\`, \`textDisabled\`, \`textInverse\`, \`borderDefault\`, \`borderStrong\`, \`borderSubtle\`, \`onAccent\`, \`accent\`, \`accentHover\`, \`accentActive\`, \`accentSubtle\`, \`danger\`, \`dangerHover\`, \`dangerSubtle\`, \`backdrop\`, \`shadowSm\`, \`shadowMd\`, \`shadowLg\`, \`shadowXl\`, \`focusRing\`.

The strict theme audit validates key contrast ratios: \`textPrimary\` / \`canvas\`, \`accent\` / \`onAccent\`, \`danger\`, \`focusRing\`. If \`theme.json\` is missing, fails to load, or fails validation, the Provider falls back to the default Watercolor styles.`,

      customization: `## Customization

### Override CSS variables

The simplest way is to override CSS variables directly:

\`\`\`css
/* In your global styles */
:root {
  /* Custom colors */
  --wc-primary-500: #ec4899;

  /* Custom border radius */
  --wc-radius-sm: 4px;
  --wc-radius-md: 8px;
  --wc-radius-lg: 12px;

  /* Custom font */
  --wc-font-sans: 'Your Font', sans-serif;
}
\`\`\`

### Extend with className

Every component accepts a standard \`className\` prop:

\`\`\`jsx
<Button className="my-custom-button">
  Custom style
</Button>

<style>
.my-custom-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
</style>
\`\`\`

### Use the style prop

\`\`\`jsx
<Button style={{ borderRadius: '9999px' }}>
  Rounded Button
</Button>
\`\`\``,

      'dark-mode': `## Dark Mode

Watercolor uses \`data-resolved-theme\` to express the final resolved theme. CSS only reads \`data-resolved-theme="dark"\`, avoiding the duplicated mapping of \`.dark\`, \`data-theme\`, and system media queries that causes SSR hydration risks.

### system mode

\`\`\`tsx
<ThemeProvider defaultMode="system" initialResolvedMode="light">
  <App />
</ThemeProvider>
\`\`\`

\`defaultMode="system"\` follows \`prefers-color-scheme\` on the client. For SSR scenarios, it is recommended to pass \`initialResolvedMode\` or use a pre-paint script so that the server's first render matches the client's resolved result.

### Scoped theme

\`\`\`tsx
<section ref={panelRef}>
  <ThemeProvider target={panelRef.current} defaultMode="dark">
    <SettingsPanel />
  </ThemeProvider>
</section>
\`\`\`

\`target\` attaches both the mode and scoped Theme v2 tokens to the same target node. When the Provider unmounts, it restores the original theme attributes on the target node.`,

      accessibility: `## Accessibility

Watercolor UI treats accessibility as one of its core design principles.

### Built-in support

All components include by default:

- Keyboard navigation — Tab / Shift+Tab / Enter / Space / Escape
- ARIA attributes — role, aria-label, aria-expanded, etc.
- Focus management — visible focus ring (focus-visible)
- Color contrast — meets WCAG AA standard
- Screen reader optimization — semantic HTML structure
- Reduced motion — respects prefers-reduced-motion

### Best practices

\`\`\`jsx
// Add a label to icon buttons
<IconButton aria-label="Close dialog">
  <CloseIcon />
</IconButton>

// Associate labels with form fields
<TextField
  id="email"
  label="Email"
  aria-describedby="email-hint"
/>
<span id="email-hint">We will never send spam</span>

// Use role correctly
<div role="alert" aria-live="polite">
  Success!
</div>
\`\`\``,

      ssr: `## SSR Support

Watercolor UI is fully compatible with server-side rendering (SSR).

### Next.js (React)

\`\`\`jsx
// pages/_app.js or app/layout.js
import '@zeturn/watercolor-react/style.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
\`\`\`

### Nuxt 3 (Vue)

\`\`\`vue
<!-- nuxt.config.ts or plugins/watercolor.client.ts -->
<script setup lang="ts">
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### Notes

- All components avoid accessing \`window\` / \`document\` at module top level
- CSS variables are correctly output during SSR
- Dynamic theme switching is recommended after client-side initialization`,

      'tree-shaking': `## Tree Shaking

Watercolor UI's architecture natively supports tree-shaking.

### Recommended import

\`\`\`jsx
// Recommended: import individual components on demand
import { Button } from '@zeturn/watercolor-react/components/Button'
import { TextField } from '@zeturn/watercolor-react/components/TextField'

// Acceptable: import from entry file (ESM will tree-shake)
import { Button, TextField } from '@zeturn/watercolor-react'

// Not recommended: import everything
import * as WC from '@zeturn/watercolor-react'
\`\`\`

### Bundle size comparison

| Import method | Gzipped size |
|---------------|--------------|
| Button only | ~2 KB |
| 10 common components | ~15 KB |
| All components | ~45 KB |

### Styles also support on-demand loading

\`\`\`css
/* Default: import the framework package styles; split per component only for advanced use */
@import '@zeturn/watercolor-react/style.css';
@import '@zeturn/watercolor-react/components/Button/style.css';
\`\`\``,

      migration: `## Migration Guide

### Migrate from Tailwind CSS

If you previously wrote styles directly with Tailwind CSS:

\`\`\`diff
- <button class="bg-blue-500 text-white px-4 py-2 rounded-lg
-   hover:bg-blue-600 transition-colors">
-   Click me
- </button>
+ <Button variant="filled">
+   Click me
+ </Button>
\`\`\`

### Migrate from other UI libraries

| Library | Watercolor equivalent |
|---------|----------------------|
| MUI Button | \`<Button>\` |
| Ant Design Input | \`<TextField>\` |
| Chakra UI Box | \`<Box>\` |
| Radix Dialog | \`<Modal>\` |
| Headless UI Menu | \`<Menu>\` |

### v1.1.x major changes

- Removed Tailwind CSS dependency in favor of native CSS
- Icon library changed to optional peerDependencies
- Added theme controller API
- Improved SSR compatibility`,

      contributing: `## Contributing Guide

Thank you for your interest in Watercolor UI!

### Setting up the dev environment

\`\`\`bash
# Clone the repository
git clone https://github.com/zeturn/watercolor.git
cd watercolor

# Install dependencies
npm install

# Start dev mode
npm run dev

# Start Storybook
npm run storybook

# Docs and examples check before publishing
npm run audit:docs-examples
\`\`\`

### Project structure

\`\`\`
watercolor/
├── packages/
│   ├── core/          # Core logic and styles
│   ├── vue/           # Vue component implementation
│   └── react/         # React component implementation
├── site/              # Official site and docs source
├── docs/              # GitHub Pages build output
└── scripts/           # Build scripts
\`\`\`

### Commit conventions

We use Conventional Commits:

- \`feat:\` new feature
- \`fix:\` bug fix
- \`docs:\` documentation update
- \`style:\` code formatting
- \`refactor:\` refactoring
- \`test:\` tests
- \`chore:\` build/tooling changes

### Develop a new component

1. Create a utility function in \`packages/core/src/components/\`
2. Create the Vue implementation in \`packages/vue/src/components/\`
3. Create the React implementation in \`packages/react/src/components/\`
4. Write Storybook stories
5. Add unit tests
6. Update documentation`,
    },
  },

  'ja-JP': {
    sections: [
      {
        group: 'はじめに',
        items: [
          { id: 'intro', label: '紹介' },
          { id: 'install', label: 'インストール' },
          { id: 'quick-start', label: 'クイックスタート' },
          { id: 'usage', label: '基本的な使い方' },
        ],
      },
      {
        group: 'コアコンセプト',
        items: [
          { id: 'theming', label: 'テーマシステム' },
          { id: 'customization', label: 'カスタマイズ' },
          { id: 'dark-mode', label: 'ダークモード' },
          { id: 'accessibility', label: 'アクセシビリティ' },
        ],
      },
      {
        group: '発展的',
        items: [
          { id: 'ssr', label: 'SSR 対応' },
          { id: 'tree-shaking', label: 'Tree Shaking' },
          { id: 'migration', label: '移行ガイド' },
          { id: 'contributing', label: 'コントリビューション' },
        ],
      },
    ],
    content: {
      intro: `## Watercolor UI とは？

Watercolor UI は、**モダンでミニマルな水彩風**のクロスフレームワーク UI コンポーネントライブラリです。**Vue 3.5+** と **React 18/19** の両方をサポートしています。

### 主な特徴

- **デュアルフレームワーク対応**: 1 つのデザイン言語で Vue 3 と React 18/19 の両方をカバー
- **超フラットなデザイン哲学**: 影や枠線のないミニマルな水彩スタイル
- **Tree-shaking 対応**: 必要な分だけインポートしてバンドルサイズを最小化
- **完全なアクセシビリティ**: キーボード操作、ARIA 属性、スクリーンリーダー対応
- **SSR セーフ**: モジュールのトップレベルでブラウザ API を使用しない
- **純 CSS 駆動**: ネイティブな CSS 変数システムを使用し、JS の実行時オーバーヘッドはゼロ

### デザイン理念

Watercolor という名前は「水彩画」に由来しています——軽やかで、透明感があり、階層豊か。私たちは**超フラット (Ultra-flat)** な視覚言語を追求しています：

- 不要な装飾（影、枠線、グラデーション）をすべて削ぎ落とす
- 色と余白で階層感を構築する
- コンポーネントの純粋さと汎用性を保つ

### コンポーネント数

現在 **60 以上の丁寧に設計されたコンポーネント** を含み、以下のシーンをカバーしています：

| カテゴリ | 数 | 例 |
|----------|----|----|
| フォーム | 18 | Button, TextField, Select, Checkbox... |
| レイアウト | 4 | Container, Box, Grid, Paper |
| ナビゲーション | 7 | AppBar, Toolbar, Menu, Tabs... |
| フィードバック | 9 | Alert, Snackbar, Modal, Tooltip... |
| データ表示 | 16 | Typography, Table, Avatar, Card... |
| 高度なコンポーネント | 15+ | Popover, ImageGallery, VideoPlayer... |`,

      install: `## Watercolor UI をインストール

### 方法 1：スマートインストーラー（推奨）

\`\`\`bash
npm install @zeturn/watercolor-ui
# または
yarn add @zeturn/watercolor-ui
# または
pnpm add @zeturn/watercolor-ui
\`\`\`

インストーラーはプロジェクト環境を自動検出し、フレームワークとアイコンライブラリの選択を案内します。

### 方法 2：手動インストール

#### React プロジェクト

\`\`\`bash
npm install @zeturn/watercolor-react @zeturn/watercolor-core
\`\`\`

#### Vue プロジェクト

\`\`\`bash
npm install @zeturn/watercolor-vue @zeturn/watercolor-core
\`\`\`

### Node バージョン要件

- \`^20.19.0\`
- または \`>=22.12.0\``,

      'quick-start': `## クイックスタート

### React プロジェクトで使う

\`\`\`jsx
import React from 'react'
import { Button, TextField, Container } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

function App() {
  return (
    <Container maxWidth="md">
      <h1>Hello Watercolor!</h1>
      <TextField label="あなたの名前" placeholder="入力してください..." />
      <Button variant="filled">クリック</Button>
    </Container>
  )
}
\`\`\`

### Vue プロジェクトで使う

\`\`\`vue
<template>
  <Container max-width="md">
    <h1>Hello Watercolor!</h1>
    <TextField label="あなたの名前" placeholder="入力してください..." />
    <Button variant="filled">クリック</Button>
  </Container>
</template>

<script setup>
import { Button, TextField, Container } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### 必要な分だけインポート

すべてのコンポーネントはオンデマンド インポートに対応しており、最適なバンドルサイズを確保します：

\`\`\`jsx
// 必要なコンポーネントだけをインポート
import { Button } from '@zeturn/watercolor-react/components/Button'
// import * from '@zeturn/watercolor-react' ではなく
\`\`\``,

      usage: `## 基本的な使い方

### Button ボタン

\`\`\`jsx
// 基本のボタン
<Button>デフォルトボタン</Button>

// バリアント
<Button variant="filled">塗りつぶしボタン</Button>
<Button variant="outlined">アウトラインボタン</Button>
<Button variant="text">テキストボタン</Button>

// サイズ
<Button size="sm">小</Button>
<Button size="md">中</Button>
<Button size="lg">大</Button>

// 無効状態
<Button disabled>無効</Button>
\`\`\`

### TextField テキスト入力

\`\`\`jsx
<TextField
  label="メールアドレス"
  type="email"
  placeholder="your@email.com"
  helperText="メールアドレスを共有することはありません"
/>
\`\`\`

### Card カード

\`\`\`jsx
<Card>
  <CardHeader title="カードのタイトル" subtitle="サブタイトルの説明" />
  <CardBody>
    ここはカードの本文エリアです...
  </CardBody>
  <CardActions>
    <Button variant="text">アクション</Button>
  </CardActions>
</Card>
\`\`\``,

      theming: `## テーマシステム

Watercolor のデフォルトテーマは設定不要で動作します：枠線なし、影は最小限で、hover / focus / selected などの状態の背景で階層を構成します。ブランディングが必要な場合は、コンポーネント内部のスタイルを変更するのではなく、**Theme v2 JSON** でセマンティックなトークンを上書きしてください。

### React

\`\`\`tsx
import { ThemeProvider, useTheme } from '@zeturn/watercolor-react'
import '@zeturn/watercolor-react/style.css'

export function Root() {
  return (
    <ThemeProvider defaultMode="system" themeUrl="/theme.json">
      <App />
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { mode, setMode, resolvedMode } = useTheme()
  return <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{resolvedMode}</button>
}
\`\`\`

### Vue

\`\`\`vue
<script setup>
import { ThemeProvider, useTheme } from '@zeturn/watercolor-vue'
import '@zeturn/watercolor-vue/style.css'
</script>

<template>
  <ThemeProvider theme-url="/theme.json" default-mode="system">
    <App />
  </ThemeProvider>
</template>
\`\`\`

### Theme v2 JSON

\`\`\`json
{
  "version": 2,
  "tokens": {
    "light": {
      "canvas": "#ffffff",
      "textPrimary": "#171717",
      "accent": "#2563eb",
      "onAccent": "#ffffff",
      "danger": "#dc2626",
      "focusRing": "#3b82f6"
    },
    "dark": {
      "canvas": "#050505",
      "textPrimary": "#f5f5f5",
      "accent": "#60a5fa",
      "onAccent": "#06111f",
      "danger": "#f87171",
      "focusRing": "#93c5fd"
    }
  }
}
\`\`\`

### 安定トークン方針

Theme v2 は以下の mode トークン名を凍結し、1.x 内での破壊的なリネームは行いません：\`canvas\`, \`surfaceSubtle\`, \`surfaceRaised\`, \`surfaceOverlay\`, \`actionHover\`, \`actionActive\`, \`actionSelected\`, \`actionSelectedHover\`, \`actionDisabled\`, \`textPrimary\`, \`textSecondary\`, \`textTertiary\`, \`textDisabled\`, \`textInverse\`, \`borderDefault\`, \`borderStrong\`, \`borderSubtle\`, \`onAccent\`, \`accent\`, \`accentHover\`, \`accentActive\`, \`accentSubtle\`, \`danger\`, \`dangerHover\`, \`dangerSubtle\`, \`backdrop\`, \`shadowSm\`, \`shadowMd\`, \`shadowLg\`, \`shadowXl\`, \`focusRing\`。

strict テーマ監査は重要なコントラスト比を検証します：\`textPrimary\` / \`canvas\`、\`accent\` / \`onAccent\`、\`danger\`、\`focusRing\`。\`theme.json\` が存在しない、読み込みに失敗した、または検証に失敗した場合、Provider はデフォルトの Watercolor スタイルにフォールバックします。`,

      customization: `## スタイルのカスタマイズ

### CSS 変数を上書きする

最も簡単な方法は CSS 変数を直接上書きすることです：

\`\`\`css
/* グローバルスタイルの中で */
:root {
  /* カスタムカラー */
  --wc-primary-500: #ec4899;

  /* カスタム角丸 */
  --wc-radius-sm: 4px;
  --wc-radius-md: 8px;
  --wc-radius-lg: 12px;

  /* カスタムフォント */
  --wc-font-sans: 'Your Font', sans-serif;
}
\`\`\`

### className で拡張する

すべてのコンポーネントは標準の \`className\` prop を受け取ります：

\`\`\`jsx
<Button className="my-custom-button">
  カスタムスタイル
</Button>

<style>
.my-custom-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
</style>
\`\`\`

### style prop を使う

\`\`\`jsx
<Button style={{ borderRadius: '9999px' }}>
  角丸ボタン
</Button>
\`\`\``,

      'dark-mode': `## ダークモード

Watercolor は最終的に解決されたテーマを \`data-resolved-theme\` で表現します。CSS は \`data-resolved-theme="dark"\` のみを読み取り、\`.dark\`、\`data-theme\`、システムのメディアクエリの重複マッピングによる SSR ハイドレーションのリスクを回避します。

### system モード

\`\`\`tsx
<ThemeProvider defaultMode="system" initialResolvedMode="light">
  <App />
</ThemeProvider>
\`\`\`

\`defaultMode="system"\` はクライアント側で \`prefers-color-scheme\` に追従します。SSR のシナリオでは、サーバーの初回描画とクライアントの解決結果が一致するよう、\`initialResolvedMode\` を渡すかプリペイント スクリプトを使用することをお勧めします。

### スコープされたテーマ

\`\`\`tsx
<section ref={panelRef}>
  <ThemeProvider target={panelRef.current} defaultMode="dark">
    <SettingsPanel />
  </ThemeProvider>
</section>
\`\`\`

\`target\` は mode とスコープされた Theme v2 トークンの両方を同じターゲットノードに配置します。Provider がアンマウントされると、ターゲットノード上の元のテーマ属性を復元します。`,

      accessibility: `## アクセシビリティ (Accessibility)

Watercolor UI はアクセシビリティを中核となる設計原則の 1 つとしています。

### 組み込みサポート

すべてのコンポーネントにデフォルトで含まれます：

- キーボード操作 — Tab / Shift+Tab / Enter / Space / Escape
- ARIA 属性 — role, aria-label, aria-expanded など
- フォーカス管理 — 視認可能なフォーカスリング (focus-visible)
- 色のコントラスト — WCAG AA 準拠
- スクリーンリーダー最適化 — セマンティックな HTML 構造
- モーション削減 — prefers-reduced-motion を尊重

### ベストプラクティス

\`\`\`jsx
// アイコンボタンにラベルを付ける
<IconButton aria-label="ダイアログを閉じる">
  <CloseIcon />
</IconButton>

// フォームフィールドに関連ラベルを付ける
<TextField
  id="email"
  label="メール"
  aria-describedby="email-hint"
/>
<span id="email-hint">スパムメールは送信しません</span>

// role を正しく使う
<div role="alert" aria-live="polite">
  操作が成功しました！
</div>
\`\`\``,

      ssr: `## SSR 対応

Watercolor UI はサーバーサイドレンダリング (SSR) に完全対応しています。

### Next.js (React)

\`\`\`jsx
// pages/_app.js または app/layout.js
import '@zeturn/watercolor-react/style.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
\`\`\`

### Nuxt 3 (Vue)

\`\`\`vue
<!-- nuxt.config.ts または plugins/watercolor.client.ts -->
<script setup lang="ts">
import '@zeturn/watercolor-vue/style.css'
</script>
\`\`\`

### 注意点

- すべてのコンポーネントはモジュールのトップレベルで \`window\` / \`document\` にアクセスしない
- CSS 変数は SSR 時に正しく出力される
- 動的なテーマ切り替えはクライアント側の初期化後に行うことをお勧めします`,

      'tree-shaking': `## Tree Shaking

Watercolor UI のアーキテクチャはツリーシェイキングにネイティブに対応しています。

### 推奨するインポート方法

\`\`\`jsx
// 推奨：必要なコンポーネントを個別にインポート
import { Button } from '@zeturn/watercolor-react/components/Button'
import { TextField } from '@zeturn/watercolor-react/components/TextField'

// 可：エントリファイルからインポート（ESM がツリーシェイクする）
import { Button, TextField } from '@zeturn/watercolor-react'

// 非推奨：すべてをインポート
import * as WC from '@zeturn/watercolor-react'
\`\`\`

### バンドルサイズ比較

| インポート方法 | Gzip 後サイズ |
|----------------|----------------|
| Button のみ | 約 2 KB |
| よく使う 10 コンポーネント | 約 15 KB |
| すべてのコンポーネント | 約 45 KB |

### スタイルもオンデマンド読み込みに対応

\`\`\`css
/* デフォルト：フレームワークパッケージのスタイルをインポート；高度な使い方でのみコンポーネント単位で分割 */
@import '@zeturn/watercolor-react/style.css';
@import '@zeturn/watercolor-react/components/Button/style.css';
\`\`\``,

      migration: `## 移行ガイド

### Tailwind CSS からの移行

これまで Tailwind CSS で直接スタイルを書いていた場合：

\`\`\`diff
- <button class="bg-blue-500 text-white px-4 py-2 rounded-lg
-   hover:bg-blue-600 transition-colors">
-   Click me
- </button>
+ <Button variant="filled">
+   Click me
+ </Button>
\`\`\`

### その他の UI ライブラリからの移行

| ライブラリ | Watercolor の対応物 |
|------------|----------------------|
| MUI Button | \`<Button>\` |
| Ant Design Input | \`<TextField>\` |
| Chakra UI Box | \`<Box>\` |
| Radix Dialog | \`<Modal>\` |
| Headless UI Menu | \`<Menu>\` |

### v1.1.x の主な変更

- Tailwind CSS への依存を削除し、ネイティブ CSS に変更
- アイコンライブラリをオプションの peerDependencies に変更
- テーマコントローラー API を追加
- SSR 互換性を改善`,

      contributing: `## コントリビューション ガイド

Watercolor UI に興味をお持ちいただきありがとうございます！

### 開発環境のセットアップ

\`\`\`bash
# リポジトリをクローン
git clone https://github.com/zeturn/watercolor.git
cd watercolor

# 依存関係をインストール
npm install

# 開発モードを起動
npm run dev

# Storybook を起動
npm run storybook

# 公開前のドキュメントとサンプルのチェック
npm run audit:docs-examples
\`\`\`

### プロジェクト構成

\`\`\`
watercolor/
├── packages/
│   ├── core/          # コアロジックとスタイル
│   ├── vue/           # Vue コンポーネント実装
│   └── react/         # React コンポーネント実装
├── site/              # 公式サイトとドキュメントソース
├── docs/              # GitHub Pages のビルド成果物
└── scripts/           # ビルドスクリプト
\`\`\`

### コミット規約

私たちは Conventional Commits を使用しています：

- \`feat:\` 新機能
- \`fix:\` バグ修正
- \`docs:\` ドキュメント更新
- \`style:\` コードフォーマット調整
- \`refactor:\` リファクタリング
- \`test:\` テスト関連
- \`chore:\` ビルド/ツールの変更

### 新しいコンポーネントを開発する

1. \`packages/core/src/components/\` にユーティリティ関数を作成
2. \`packages/vue/src/components/\` に Vue 実装を作成
3. \`packages/react/src/components/\` に React 実装を作成
4. Storybook stories を作成
5. ユニットテストを追加
6. ドキュメントを更新`,
    },
  },
}

// 获取侧边栏分组（含 label/group，按语言）
export function getDocSections(lang) {
  return docsI18n[normLang(lang)].sections
}

// 扁平化所有文档段落（含 group，按语言）
export function getAllDocSections(lang) {
  const l = normLang(lang)
  return docsI18n[l].sections.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })))
}

export function getDocById(id, lang) {
  const l = normLang(lang)
  const item = getAllDocSections(l).find((s) => s.id === id)
  if (!item) return null
  return { ...item, content: docsI18n[l].content[id] || '' }
}

export function getAdjacentDocs(id, lang) {
  const all = getAllDocSections(lang)
  const index = all.findIndex((s) => s.id === id)
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  }
}

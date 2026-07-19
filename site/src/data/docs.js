// Docs 文档数据 - 动态路由 /docs/:sectionId

export const docSections = [
  {
    group: '入门',
    items: [
      { id: 'intro', label: '介绍' },
      { id: 'install', label: '安装' },
      { id: 'quick-start', label: '快速开始' },
      { id: 'usage', label: '基本用法' },
    ]
  },
  {
    group: '核心概念',
    items: [
      { id: 'theming', label: '主题系统' },
      { id: 'customization', label: '自定义样式' },
      { id: 'dark-mode', label: '暗黑模式' },
      { id: 'accessibility', label: '无障碍支持' },
    ]
  },
  {
    group: '进阶',
    items: [
      { id: 'ssr', label: 'SSR 支持' },
      { id: 'tree-shaking', label: 'Tree Shaking' },
      { id: 'migration', label: '迁移指南' },
      { id: 'contributing', label: '贡献指南' },
    ]
  },
]

// 扁平化所有文档段落
export const allDocSections = docSections.flatMap(g => g.items.map(i => ({ ...i, group: g.group })))

export function getDocById(id) {
  const item = allDocSections.find(s => s.id === id)
  if (!item) return null
  return { ...item, content: docContent[id] || '' }
}

export function getAdjacentDocs(id) {
  const index = allDocSections.findIndex(s => s.id === id)
  return {
    prev: index > 0 ? allDocSections[index - 1] : null,
    next: index < allDocSections.length - 1 ? allDocSections[index + 1] : null,
  }
}

// 文档内容 (Markdown 风格)
const docContent = {
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

Theme v2 冻结以下 mode token 名称，1.x 内不做破坏性重命名：\`canvas\`, \`surfaceSubtle\`, \`surfaceRaised\`, \`surfaceOverlay\`, \`actionHover\`, \`actionActive\`, \`actionSelected\`, \`actionSelectedHover\`, \`actionDisabled\`, \`textPrimary\`, \`textSecondary\`, \`textTertiary\`, \`textDisabled\`, \`textInverse\`, \`borderDefault\`, \`borderStrong\`, \`borderSubtle\`, \`onAccent\`, \`accent\`, \`accentHover\`, \`accentActive\`, \`accentSubtle\`, \`danger\`, \`dangerHover\`, \`dangerSubtle\`, \`backdrop\`, \`shadowSm\`, \`shadowMd\`, \`shadowLg\`, \`shadowXl\`, \`focusRing\`.

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
}

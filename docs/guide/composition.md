# 组合布局

Watercolor 的页面结构默认由四个无视觉样式的原语组成。它们只负责宽度、间距、对齐与响应式流动，不决定颜色、边框、圆角或阴影。

| 原语 | 职责 | 常见用途 |
| --- | --- | --- |
| `Page` | 内容宽度与页面 gutter | 页面外壳、正文区 |
| `Stack` | 垂直节奏 | 表单、设置分组、纵向列表 |
| `Inline` | 水平对齐与换行 | 操作区、元信息、筛选项 |
| `Split` | 双区域比例与断点折叠 | 侧栏 + 主内容、列表 + 详情 |

```tsx
<Page as="main" size="xl" gutter="lg">
  <Stack gap="2xl">
    <Inline as="header" justify="between">
      <h1>Projects</h1>
      <Button>New project</Button>
    </Inline>
    <Split ratio="sidebar" collapse="md">
      <nav>...</nav>
      <section>...</section>
    </Split>
  </Stack>
</Page>
```

## 组件边界

- 新页面优先使用 `Page / Stack / Inline / Split`。
- `Grid` 用于重复的二维集合，例如图库或多列指标，而不是整个页面骨架。
- `Box` 是局部逃生口，只在一次性的 CSS 属性比语义原语更清楚时使用。
- `Container` 保留给既有页面兼容；新页面外壳使用 `Page`。后续大版本再评估移除，不在当前版本制造破坏性变更。

组合原语应保持“无样式”：产品视觉由文字层级、图标和交互状态表达；背景主要出现在 hover、selected、输入区域与临时浮层中。

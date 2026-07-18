# 页面 Recipes

Watercolor 的默认风格不是“给每个模块套一张卡片”，而是让页面主要由文字、图标、间距和少量交互背景组成。组合页面时优先使用 `Page`、`Stack`、`Inline`、`Split` 建立结构，再把 `Button`、`TextField`、`Tabs`、`Modal` 等组件放进去。

## 设计原则

- 页面先有清晰的信息层级，再考虑组件数量。
- 常驻区域尽量无边框、无阴影；hover、selected、focus、open 才出现背景或焦点反馈。
- 用 `Stack` 控制纵向节奏，用 `Inline` 控制一行内的对齐和换行。
- 用 `Split` 做侧栏、列表详情、设置页，不要手写一堆不一致的 CSS grid。
- 表单区域可以有轻微分组，但不要把每一行都装进重边框容器。

## 推荐结构

```tsx
import { Button, Inline, Page, Stack, Typography } from '@zeturn/watercolor-react'

export function ProductPage() {
  return (
    <Page as="main" size="lg" gutter="lg">
      <Stack gap="2xl">
        <Inline as="header" justify="between" align="start" gap="lg">
          <Stack gap="xs">
            <Typography variant="overline">Workspace</Typography>
            <Typography variant="h1">Good morning.</Typography>
            <Typography color="secondary">
              A calm overview of the work that needs attention today.
            </Typography>
          </Stack>
          <Button>New project</Button>
        </Inline>

        <Stack as="section" gap="md">
          <Typography variant="h2">Recent activity</Typography>
          {/* rows, lists, feeds, tables */}
        </Stack>
      </Stack>
    </Page>
  )
}
```

```vue
<script setup>
import { Button, Inline, Page, Stack, Typography } from '@zeturn/watercolor-vue'
</script>

<template>
  <Page as="main" size="lg" gutter="lg">
    <Stack gap="2xl">
      <Inline as="header" justify="between" align="start" gap="lg">
        <Stack gap="xs">
          <Typography variant="overline">Workspace</Typography>
          <Typography variant="h1">Good morning.</Typography>
          <Typography color="secondary">
            A calm overview of the work that needs attention today.
          </Typography>
        </Stack>
        <Button>New project</Button>
      </Inline>

      <Stack as="section" gap="md">
        <Typography variant="h2">Recent activity</Typography>
      </Stack>
    </Stack>
  </Page>
</template>
```

## 四个标准页面

Storybook 中的 `Recipes/Product pages` 是 Watercolor 组合层的参考基准：

- Dashboard：顶部栏、侧栏、指标、动态列表。
- Settings：左侧设置导航、右侧表单分组、开关控制。
- List detail：列表详情双栏、长文本阅读区。
- Form page：新建项目表单、分组字段、底部动作。

这些 recipes 会进入视觉矩阵，覆盖 light/dark、desktop/mobile、hover、focus、disabled、error、open、RTL、200% zoom、forced-colors 和 reduced-motion。

## 什么时候使用 Card

`Card` 适合内容确实需要成为可移动、可复用、可点击的对象，例如价格方案、图库项目、外部资源预览。不要把页面上的每个小段落都变成 Card；如果只是为了分隔内容，优先用间距、标题层级和弱背景。

## 表单建议

- 每个输入都要有可见 label 或明确的 `aria-label`。
- 错误信息紧跟字段或字段组。
- 复杂表单用 `Stack` 分成语义 section。
- `Switch`、`Checkbox`、`Radio` 的业务说明可以放在旁边，但控件自身仍应有可访问名称。

## 从示例开始

仓库提供最小示例：

- `examples/react-minimal`
- `examples/vue-minimal`
- `examples/next-ssr`
- `examples/nuxt-ssr`

完整集成方式见 [集成示例](/guide/integrations)。

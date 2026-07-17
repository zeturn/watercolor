# 使用指南

Watercolor UI 适合直接接入 React 18/19 和 Vue 3.5+ 项目。为了让组件使用更稳定，建议先统一入口样式、主题方案和图标策略，再开始逐个接入组件。

## 推荐接入顺序

1. 安装对应框架包。
2. 在应用入口只引入一次全局样式。
3. 确认是否需要深色模式和主题配置。
4. 如果要使用 `Icon`，再按需安装图标包。
5. 从基础组件开始接入，例如 `Button`、`Card`、`Input`、`Alert`。

## 入口引入

### React

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@zeturn/watercolor-react/style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Vue

```ts
import { createApp } from 'vue'
import App from './App.vue'
import '@zeturn/watercolor-vue/style.css'

createApp(App).mount('#app')
```

> 样式建议只在入口文件引入一次，不要在每个页面或组件中重复引入。

## 常见使用方式

### 1. 基础展示组件

适合先接入这些组件快速建立视觉风格：

- `Button`
- `Card`
- `Typography`
- `Badge`
- `Alert`
- `Chip`

React 示例：

```tsx
import { Alert, Badge, Button, Card, Typography } from '@zeturn/watercolor-react'

export function DashboardHeader() {
  return (
    <Card title="项目概览" subTitle="今日状态">
      <Typography variant="body1">
        当前版本已经完成 React 19、Vue 3.5 和 Vite 8 支持。
      </Typography>
      <Badge color="success">已上线</Badge>
      <Alert type="success" title="发布成功">
        所有构建和测试均已通过。
      </Alert>
      <Button variant="primary">查看详情</Button>
    </Card>
  )
}
```

Vue 示例：

```vue
<script setup>
import { Alert, Badge, Button, Card, Typography } from '@zeturn/watercolor-vue'
</script>

<template>
  <Card title="项目概览" sub-title="今日状态">
    <Typography variant="body1">
      当前版本已经完成 React 19、Vue 3.5 和 Vite 8 支持。
    </Typography>
    <Badge color="success">已上线</Badge>
    <Alert type="success" title="发布成功">
      所有构建和测试均已通过。
    </Alert>
    <Button variant="primary">查看详情</Button>
  </Card>
</template>
```

### 2. 表单与输入组件

Watercolor UI 的表单组件通常都支持受控值、禁用态、错误态和辅助说明。推荐把状态统一放在业务层，不要让组件页自己维护业务校验逻辑。

React 示例：

```tsx
import { useState } from 'react'
import { Button, Input, Select, TextField } from '@zeturn/watercolor-react'

export function ProfileForm() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('designer')

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <Input
        label="姓名"
        value={name}
        onChange={(event) => setName(event.target.value)}
        helperText="建议填写真实姓名"
        fullWidth
      />

      <Select
        label="角色"
        value={role}
        onChange={(event) => setRole(event.target.value)}
        options={[
          { label: '设计师', value: 'designer' },
          { label: '工程师', value: 'engineer' },
        ]}
        fullWidth
      />

      <TextField
        label="简介"
        multiline
        rows={4}
        placeholder="输入你的个人简介"
        fullWidth
      />

      <Button variant="primary">保存</Button>
    </div>
  )
}
```

Vue 示例：

```vue
<script setup>
import { ref } from 'vue'
import { Button, Input, Select, TextField } from '@zeturn/watercolor-vue'

const name = ref('')
const role = ref('designer')
const options = [
  { label: '设计师', value: 'designer' },
  { label: '工程师', value: 'engineer' },
]
</script>

<template>
  <div style="display: grid; gap: 16px;">
    <Input
      v-model="name"
      label="姓名"
      helper-text="建议填写真实姓名"
      full-width
    />

    <Select
      v-model="role"
      label="角色"
      :options="options"
      full-width
    />

    <TextField
      label="简介"
      multiline
      :rows="4"
      placeholder="输入你的个人简介"
      full-width
    />

    <Button variant="primary">保存</Button>
  </div>
</template>
```

### 3. 叠层与浮层组件

`Modal`、`Popover`、`Tooltip`、`SlideOver`、`HoverCard` 这类组件建议统一由页面状态控制打开和关闭，不要把异步请求直接耦合到内部显示逻辑里。

React 示例：

```tsx
import { useState } from 'react'
import { Button, Modal } from '@zeturn/watercolor-react'

export function ConfirmAction() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="warning" onClick={() => setOpen(true)}>
        删除项目
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="确认删除">
        删除后将无法恢复，请谨慎操作。
      </Modal>
    </>
  )
}
```

### 4. 数据展示组件

`Table`、`List`、`Feed`、`PricingTable` 适合与接口数据配合使用。推荐做法是：

- 先在业务层完成数据格式转换。
- 再把已经整理好的数组传给组件。
- 加上空态、加载态和错误态，而不是只渲染成功场景。

## Icon 的推荐用法

Watercolor UI 的 `Icon` 组件不会强绑所有图标库。只有你实际安装并使用的图标库才会参与运行时解析。

React：

```tsx
import { Button, Icon } from '@zeturn/watercolor-react'

export function SaveButton() {
  return (
    <Button
      variant="primary"
      startIcon={<Icon library="lucide" name="save" />}
    >
      保存
    </Button>
  )
}
```

Vue：

```vue
<script setup>
import { Button, Icon } from '@zeturn/watercolor-vue'
</script>

<template>
  <Button variant="primary">
    <template #startIcon>
      <Icon library="lucide" name="save" />
    </template>
    保存
  </Button>
</template>
```

如果指定了某个 `library`，但没有安装对应包，`Icon` 会渲染占位内容。更详细的安装方式见 [安装指南](/guide/installation)。

## 主题、深色模式与品牌化

你可以直接使用默认视觉风格，也可以在应用根部接入主题管理：

```tsx
import { ThemeProvider } from '@zeturn/watercolor-react'

<ThemeProvider defaultMode="system">
  <App />
</ThemeProvider>
```

组件内通过 `useTheme().setMode('light' | 'dark' | 'system')` 切换模式。品牌配置仍可通过 `loadThemeConfig` 在客户端加载。

更完整的主题说明见 [主题与图标](/guide/theming)。

## 组件文档怎么读

每个组件文档页现在都按同样结构组织：

1. 组件定位与适用场景。
2. React / Vue 的导入方式。
3. React / Vue 的最小可运行示例。
4. 常见使用建议。
5. Props / Events 快速摘要。
6. 组件 README 里的完整 API 与更多示例。

这样你可以先看顶部的统一说明，再决定是否继续往下读完整 API。

## 常见问题

### 样式没有生效

优先检查以下几项：

- 是否已经在入口引入 `@zeturn/watercolor-react/style.css` 或 `@zeturn/watercolor-vue/style.css`
- 是否被业务侧的 reset / utility CSS 覆盖
- 是否把样式错误地放到了局部作用域里

### 事件类型报错

React 包已经提供更宽松的类型入口，常见事件回调不应该再被误推成必填。如果仍有问题，请确认消费项目没有锁定旧版本。

### 图标不显示

- 检查 `library` 是否写对
- 检查是否安装了对应图标包
- 检查打包器是否把动态图标包排除了

## 下一步

- 先看 [组件总览](/components/)
- 再根据业务场景进入对应组件页
- 如果你要做品牌化主题，继续看 [主题与图标](/guide/theming)

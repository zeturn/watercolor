# Divider 分割线组件

分割线是一个基础布局组件，用于视觉分隔和内容区分。

## 功能特性

- 🎨 多种变体支持（solid、dashed、dotted）
- 📐 支持水平和垂直方向
- 📝 支持在分割线中显示文字
- 🎯 flexItem 支持在 flex 容器中自适应
- 🔧 完整的主题变量支持

## 使用示例

### React

```jsx
import Divider from '@/components/Divider/Divider'

// 基础分割线
<Divider />

// 虚线分割线
<Divider variant="dashed" />

// 垂直分割线
<Divider orientation="vertical" />

// 带文字的分割线
<Divider>或者</Divider>

// 在 flex 容器中使用
<div style={{ display: 'flex' }}>
  <div>内容1</div>
  <Divider orientation="vertical" flexItem />
  <div>内容2</div>
</div>
```

### Vue

```vue
<template>
  <!-- 基础分割线 -->
  <Divider />

  <!-- 虚线分割线 -->
  <Divider variant="dashed" />

  <!-- 垂直分割线 -->
  <Divider orientation="vertical" />

  <!-- 带文字的分割线 -->
  <Divider>或者</Divider>

  <!-- 在 flex 容器中使用 -->
  <div style="display: flex">
    <div>内容1</div>
    <Divider orientation="vertical" flex-item />
    <div>内容2</div>
  </div>
</template>

<script setup>
import Divider from '@/components/Divider/Divider.vue'
</script>
```

## Props

| 属性 | 类型 | 默认值 | 说明 |
|-----|-----|--------|------|
| `variant` | String | `'solid'` | 分割线变体，可选值：`solid` / `dashed` / `dotted` |
| `orientation` | String | `'horizontal'` | 方向，可选值：`horizontal` / `vertical` |
| `flexItem` | Boolean | `false` | 是否作为 flex 项目，用于在 flex 容器中自适应 |
| `children` / `slot` | ReactNode / VNode | - | 分割线中的文字内容 |

## 主题变量

- `--wc-divider-color`: 分割线颜色（默认：`--wc-border-color`）
- `--wc-spacing-md`: 外间距（默认：16px）
- `--wc-spacing-sm`: 内间距（默认：8px）
- `--wc-font-size-sm`: 文字大小（默认：14px）
- `--wc-text-secondary`: 文字颜色（默认：#666）

## 样式类

- `.wc-divider`: 基础类
- `.wc-divider--solid`: 实线样式
- `.wc-divider--dashed`: 虚线样式
- `.wc-divider--dotted`: 点线样式
- `.wc-divider--horizontal`: 水平方向
- `.wc-divider--vertical`: 垂直方向
- `.wc-divider--flex-item`: flex 自适应
- `.wc-divider--with-text`: 带文字样式
- `.wc-divider__text`: 文字内容样式

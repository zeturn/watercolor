# Paradox 悖论组件

一个用于显示具有哲学意味的矛盾文本的组件，带有悬停提示功能。

## 功能特性

- 🎭 显示悖论文本，带有悬停提示
- 🎨 多种样式变体和尺寸选项
- ✨ 动画效果和变换
- 🌈 颜色主题支持
- 📱 响应式设计
- ♿ 可访问性支持
- 🌙 深色模式支持

## Props

### 基础 Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `content` | `string` | `'这句话是假。'` | 显示的悖论文本 |
| `tooltip` | `string` | `'若此句为真，则为假；若此句为假，则为真。'` | 鼠标悬停提示 |
| `className` | `string` | `''` | 自定义CSS类名 |

### 动画 Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `animated` | `boolean` | `false` | 是否启用动画 |
| `transform` | `'none' \| 'rotate' \| 'scale' \| 'skew'` | `'none'` | 变换类型 |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | 动画速度 |
| `hoverEffect` | `boolean` | `false` | 是否启用悬停效果 |
| `infinite` | `boolean` | `false` | 是否无限循环 |

### 样式 Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | 尺寸变体 |
| `variant` | `'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | 样式变体 |
| `borderStyle` | `'left' \| 'top' \| 'bottom' \| 'right' \| 'all'` | `'left'` | 边框样式 |
| `withQuotes` | `boolean` | `false` | 是否显示引用符号 |
| `glow` | `boolean` | `false` | 是否启用发光效果 |
| `gradient` | `boolean` | `false` | 是否启用渐变背景 |

## 使用示例

### Vue 版本

```vue
<template>
  <!-- 基础用法 -->
  <Paradox 
    content="这句话是假的。"
    tooltip="说谎者悖论"
  />
  
  <!-- 带样式的悖论 -->
  <Paradox 
    content="我知道我什么都不知道。"
    tooltip="苏格拉底悖论"
    variant="success"
    size="lg"
    withQuotes
  />
  
  <!-- 动画效果 -->
  <Paradox 
    content="只有变化是永恒的。"
    animated
    infinite
    hoverEffect
  />
</template>

<script setup>
import Paradox from '@/components/Paradox/Paradox.vue'
</script>
```

### React 版本

```jsx
import Paradox from '@/components/Paradox/Paradox.jsx'

function App() {
  return (
    <div>
      {/* 基础用法 */}
      <Paradox 
        content="这句话是假的。"
        tooltip="说谎者悖论"
      />
      
      {/* 带样式的悖论 */}
      <Paradox 
        content="我知道我什么都不知道。"
        tooltip="苏格拉底悖论"
        variant="success"
        size="lg"
        withQuotes
      />
      
      {/* 动画效果 */}
      <Paradox 
        content="只有变化是永恒的。"
        animated
        infinite
        hoverEffect
      />
    </div>
  )
}
```

## 样式变体

### 尺寸变体

- `sm`: 小尺寸
- `md`: 中等尺寸（默认）
- `lg`: 大尺寸
- `xl`: 超大尺寸

### 颜色变体

- `primary`: 主要（默认）
- `success`: 成功
- `warning`: 警告
- `error`: 错误
- `info`: 信息

### 边框样式

- `left`: 左边框（默认）
- `top`: 上边框
- `bottom`: 下边框
- `right`: 右边框
- `all`: 全边框

## 特殊效果

### 引用符号

```vue
<Paradox 
  content="这是一句悖论。"
  withQuotes
/>
```

### 发光效果

```vue
<Paradox 
  content="这是一句悖论。"
  glow
/>
```

### 渐变背景

```vue
<Paradox 
  content="这是一句悖论。"
  gradient
/>
```

## 动画效果

### 基础动画

```vue
<Paradox 
  content="这是一句悖论。"
  animated
  infinite
/>
```

### 变换效果

```vue
<Paradox 
  content="这是一句悖论。"
  transform="rotate"
  animated
/>
```

### 悬停效果

```vue
<Paradox 
  content="这是一句悖论。"
  hoverEffect
/>
```

## 工具函数

组件还提供了一些工具函数：

```javascript
import { 
  getRandomParadox, 
  getParadoxCategories,
  getParadoxesByCategory 
} from '@/components/Paradox/utils.js'

// 获取随机悖论
const paradox = getRandomParadox('classic')

// 获取所有类别
const categories = getParadoxCategories()

// 根据类别获取悖论列表
const paradoxes = getParadoxesByCategory('philosophical')
```

## 可访问性

- 支持键盘导航
- 提供语义化的 HTML 结构
- 支持屏幕阅读器
- 高对比度模式支持
- 减少动画模式支持

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT License 
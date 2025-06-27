# Status 状态指示器

Status 组件是一个用于显示状态的圆点指示器，支持多种状态类型、尺寸和动画效果。

## 特性

- 🎯 多种状态类型：默认、成功、失败、警告、信息、等待中、进行中、已取消
- 📏 三种尺寸：小（sm）、中（md）、大（lg）
- ✨ 多种动画效果：脉冲、旋转、跳动、闪烁、震动、呼吸、扩散、发光
- 🏷️ 可选文本标签
- 🌓 深色模式支持
- ♿ 无障碍支持

## 基本用法

### Vue

```vue
<template>
  <div>
    <!-- 基本用法 -->
    <Status status="success" />
    
    <!-- 带文本标签和自动动画 -->
    <Status status="processing" show-text animated />
    
    <!-- 自定义尺寸和指定动画类型 -->
    <Status status="error" size="lg" show-text animated animation-type="shake" />
  </div>
</template>

<script setup>
import { Status } from 'watercolor-ui'
</script>
```

### React

```jsx
import React from 'react'
import { Status } from 'watercolor-ui/react'

function App() {
  return (
    <div>
      {/* 基本用法 */}
      <Status status="success" />
      
      {/* 带文本标签和自动动画 */}
      <Status status="processing" showText animated />
      
      {/* 自定义尺寸和指定动画类型 */}
      <Status status="error" size="lg" showText animated animationType="shake" />
    </div>
  )
}
```

## API

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `status` | `string` | `'default'` | 状态类型 |
| `size` | `string` | `'md'` | 尺寸 |
| `showText` | `boolean` | `false` | 是否显示状态文本 |
| `animated` | `boolean` | `false` | 是否启用动画效果 |
| `animationType` | `string` | `'auto'` | 动画类型，可选值见下表 |
| `className` | `string` | `''` | 额外的CSS类名（仅React） |

### 动画类型

| 值 | 描述 | 适用场景 |
|----|------|----------|
| `auto` | 根据状态自动选择动画 | 默认推荐 |
| `pulse` | 脉冲动画（缩放+透明度） | 等待状态 |
| `spin` | 旋转动画 | 处理中状态 |
| `bounce` | 跳动动画 | 成功状态 |
| `blink` | 闪烁动画 | 警告状态 |
| `shake` | 震动动画 | 错误状态 |
| `breathe` | 呼吸动画（缓慢脉冲） | 取消状态 |
| `ripple` | 扩散动画 | 信息状态 |
| `glow` | 发光动画 | 默认状态 |

### 状态类型

| 值 | 描述 | 颜色 |
|----|------|------|
| `default` | 默认状态 | 灰色 |
| `success` | 成功状态 | 绿色 |
| `error` | 错误/失败状态 | 红色 |
| `warning` | 警告状态 | 橙色 |
| `info` | 信息状态 | 蓝色 |
| `pending` | 等待中状态 | 紫色 |
| `processing` | 进行中状态 | 青色 |
| `cancelled` | 已取消状态 | 灰色 |

### 尺寸选项

| 值 | 圆点大小 | 文字大小 |
|----|----------|----------|
| `sm` | 8px | 12px |
| `md` | 12px | 14px |
| `lg` | 16px | 16px |

## 动画效果

Status组件支持8种不同的动画效果：

### 自动动画映射
当 `animationType="auto"` 时，组件会根据状态自动选择最适合的动画：

- **success** → `bounce`：成功时的欢快跳动
- **error** → `shake`：错误时的紧急震动
- **warning** → `blink`：警告时的注意闪烁
- **info** → `ripple`：信息时的扩散效果
- **pending** → `pulse`：等待时的脉冲呼吸
- **processing** → `spin`：处理时的旋转加载
- **cancelled** → `breathe`：取消时的缓慢呼吸
- **default** → `glow`：默认时的柔和发光

### 自定义动画
你也可以为任何状态指定特定的动画类型：

```vue
<!-- Vue: 为成功状态使用脉冲动画 -->
<Status status="success" animated animation-type="pulse" />
```

```jsx
/* React: 为错误状态使用闪烁动画 */
<Status status="error" animated animationType="blink" />
```

## 样式定制

### CSS 变量

```css
.wc-status {
  --wc-primary-500: #3b82f6;
  --wc-success-500: #10b981;
  --wc-error-500: #ef4444;
  --wc-warning-500: #f59e0b;
  --wc-neutral-400: #9ca3af;
  --wc-purple-500: #8b5cf6;
  --wc-cyan-500: #06b6d4;
  --wc-text-primary: #374151;
}
```

### 自定义样式

```css
/* 自定义状态颜色 */
.wc-status--custom::before {
  background-color: #ff6b6b;
}

/* 自定义动画 */
.wc-status--custom-animated::before {
  animation: customPulse 1.5s infinite;
}

@keyframes customPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
```

## 无障碍支持

- 组件包含 `title` 属性，提供状态描述
- 支持键盘导航
- 兼容屏幕阅读器

## 最佳实践

1. **状态一致性**：在整个应用中保持状态类型的一致使用
2. **动画使用**：
   - 使用 `auto` 模式获得最佳的视觉效果
   - 避免在静态列表中使用过多动画
   - 考虑用户的动画偏好（prefers-reduced-motion）
3. **文本标签**：在需要明确说明状态含义时启用文本显示
4. **颜色对比**：确保状态颜色在背景上有足够的对比度
5. **尺寸选择**：根据使用场景选择合适的尺寸
6. **性能考虑**：在大量状态指示器同时显示时，谨慎使用动画

## 示例场景

```vue
<!-- 用户状态 -->
<div class="user-item">
  <Avatar :src="user.avatar" />
  <span>{{ user.name }}</span>
  <Status :status="user.isOnline ? 'success' : 'default'" size="sm" />
</div>

<!-- 任务进度 -->
<div class="task-item">
  <span>数据处理任务</span>
  <Status status="processing" show-text animated />
</div>

<!-- 服务状态 -->
<div class="service-status">
  <h3>系统服务</h3>
  <div class="status-list">
    <div>API 服务 <Status status="success" show-text /></div>
    <div>数据库 <Status status="warning" show-text /></div>
    <div>缓存服务 <Status status="error" show-text /></div>
  </div>
</div>
``` 
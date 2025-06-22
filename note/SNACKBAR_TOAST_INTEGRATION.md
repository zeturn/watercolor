# Snackbar 与 Toast 组件整合说明

## 概述

我们已成功将 Toast 组件的功能整合到 Snackbar 组件中，保留 Snackbar 作为主要组件名称，同时最大限度地保留了两个组件的所有功能特性。

## 整合的功能特性

### 从 Toast 组件整合的功能

1. **标题支持** (`title` 属性)
   - 支持设置通知标题
   - 标题与消息内容分离显示

2. **图标显示控制** (`showIcon` 属性)
   - 可以控制是否显示图标
   - 图标根据严重程度自动选择

3. **进度条** (`showProgress` 属性)
   - 显示自动关闭倒计时进度
   - 支持动态进度动画

4. **增强的颜色方案**
   - 整合了 Toast 的浅色背景样式
   - 支持更丰富的颜色变体

5. **更多位置选项**
   - 支持 6 种位置：top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
   - 通过 `anchorOrigin` 属性配置

### 保留的 Snackbar 原有功能

1. **多种严重程度**
   - success, info, warning, error

2. **多种变体样式**
   - filled（填充）
   - outlined（轮廓，增强了边框样式）
   - standard（标准）

3. **动作按钮**
   - 支持自定义动作
   - 事件回调

4. **自动关闭**
   - 可配置自动关闭时间
   - 支持持久显示

5. **高级功能**
   - 队列管理
   - 堆叠显示
   - 响应式设计

## API 变化

### 新增属性

```javascript
// 新增属性
title: String           // 通知标题
showIcon: Boolean       // 是否显示图标（默认 true）
showProgress: Boolean   // 是否显示进度条（默认 false）
```

### 增强属性

```javascript
// 增强的位置配置
anchorOrigin: {
  vertical: 'top' | 'bottom',      // 垂直位置
  horizontal: 'left' | 'center' | 'right'  // 水平位置
}

// 增强的变体样式
variant: 'filled' | 'outlined' | 'standard'
```

## 使用示例

### 基本使用

```vue
<template>
  <Snackbar
    :open="showSnackbar"
    title="操作成功"
    message="您的数据已保存"
    severity="success"
    :showIcon="true"
    @close="handleClose"
  />
</template>
```

### 带进度条

```vue
<template>
  <Snackbar
    :open="showSnackbar"
    title="文件上传中"
    message="正在上传文件，请稍候..."
    severity="info"
    :showProgress="true"
    :autoHideDuration="8000"
    @close="handleClose"
  />
</template>
```

### 不同位置

```vue
<template>
  <Snackbar
    :open="showSnackbar"
    message="右上角通知"
    :anchorOrigin="{ vertical: 'top', horizontal: 'right' }"
    severity="warning"
    @close="handleClose"
  />
</template>
```

### 轮廓样式（类似原 Toast）

```vue
<template>
  <Snackbar
    :open="showSnackbar"
    title="重要提醒"
    message="这是轮廓样式的通知"
    severity="error"
    variant="outlined"
    @close="handleClose"
  />
</template>
```

## 迁移指南

### 从 Toast 迁移到 Snackbar

如果您之前使用的是 Toast 组件，可以按照以下方式迁移：

**Toast 组件（旧）：**
```vue
<Toast
  message="通知消息"
  title="标题"
  type="success"
  position="top-right"
  :duration="4000"
  :closable="true"
  :showIcon="true"
/>
```

**Snackbar 组件（新）：**
```vue
<Snackbar
  :open="true"
  message="通知消息"
  title="标题"
  severity="success"
  :anchorOrigin="{ vertical: 'top', horizontal: 'right' }"
  :autoHideDuration="4000"
  :closable="true"
  :showIcon="true"
  @close="handleClose"
/>
```

### 属性映射表

| Toast 属性 | Snackbar 属性 | 说明 |
|-----------|--------------|------|
| `type` | `severity` | 严重程度类型 |
| `position` | `anchorOrigin` | 位置配置，需要转换格式 |
| `duration` | `autoHideDuration` | 自动关闭时间 |
| `closable` | `closable` | 是否可关闭（保持一致） |
| `showIcon` | `showIcon` | 是否显示图标（保持一致） |
| `title` | `title` | 标题（保持一致） |
| `message` | `message` | 消息内容（保持一致） |

### 位置转换

| Toast position | Snackbar anchorOrigin |
|----------------|----------------------|
| `"top-left"` | `{ vertical: 'top', horizontal: 'left' }` |
| `"top-right"` | `{ vertical: 'top', horizontal: 'right' }` |
| `"bottom-left"` | `{ vertical: 'bottom', horizontal: 'left' }` |
| `"bottom-right"` | `{ vertical: 'bottom', horizontal: 'right' }` |

## 样式更新

1. **CSS 变量更新**
   - 增加了更多颜色变量
   - 支持浅色和深色背景

2. **新的 CSS 类**
   - `.wc-snackbar--toast-style` - Toast 风格样式
   - 更多的动画和过渡效果

3. **响应式改进**
   - 更好的移动端适配
   - 优化的动画性能

## 向后兼容性

- ✅ 现有的 Snackbar 组件 API 完全向后兼容
- ✅ 现有的样式和功能保持不变
- ✅ 新功能都是可选的，不会影响现有代码
- ❌ Toast 组件已被移除，需要迁移到 Snackbar

## 文件变更

### 删除的文件
- `src/components/Toast/Toast.jsx`
- `src/components/Toast/Toast.vue`
- `src/components/Toast/utils.js`
- `src/components/Toast/style.css`
- `stories/Toast.stories.js`

### 更新的文件
- `src/components/Snackbar/Snackbar.jsx` - 增强功能
- `src/components/Snackbar/Snackbar.vue` - 增强功能
- `src/components/Snackbar/utils.js` - 整合 Toast 工具函数
- `src/components/Snackbar/style.css` - 整合 Toast 样式
- `stories/Snackbar.stories.js` - 新增功能演示
- `src/index.ts` - 移除 Toast 导出
- `src/entry-vue.ts` - 移除 Toast 导出
- `src/entry-react.ts` - 移除 Toast 导出

## 优势

1. **统一的 API** - 只需要学习一个组件
2. **功能更丰富** - 合并了两个组件的所有功能
3. **更好的维护性** - 减少了代码重复
4. **更强的扩展性** - 更容易添加新功能
5. **更好的性能** - 减少了包体积

## 总结

通过这次整合，我们成功创建了一个功能强大、灵活易用的通知组件。新的 Snackbar 组件不仅保留了原有的所有功能，还增加了 Toast 组件的优秀特性，为开发者提供了更好的使用体验。 
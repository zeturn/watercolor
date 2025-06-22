# Navigation 组件重构说明

## 概述

将原本在 `Navigation` 文件夹中的导航相关组件拆分到各自独立的文件夹中，以便更好地组织代码和维护。

## 重构后的组件结构

### AppBar 组件
- **位置**: `src/components/AppBar/`
- **文件**:
  - `AppBar.jsx` - React 组件
  - `AppBar.vue` - Vue 组件
  - `utils.js` - 共用工具函数
  - `style.css` - 专用样式文件
- **功能**: 创建顶部应用栏，支持多种位置、颜色和阴影效果

### Menu 组件
- **位置**: `src/components/Menu/`
- **文件**:
  - `Menu.jsx` - React 组件
  - `Menu.vue` - Vue 组件
  - `utils.js` - 共用工具函数
  - `style.css` - 专用样式文件
- **功能**: 创建下拉菜单，支持多种位置和阴影效果

### MenuItem 组件
- **位置**: `src/components/MenuItem/`
- **文件**:
  - `MenuItem.jsx` - React 组件
  - `MenuItem.vue` - Vue 组件
  - `utils.js` - 共用工具函数
  - `style.css` - 专用样式文件
- **功能**: 创建菜单项，支持禁用、密集模式、分割线和选中状态

### Toolbar 组件
- **位置**: `src/components/Toolbar/`
- **文件**:
  - `Toolbar.jsx` - React 组件
  - `Toolbar.vue` - Vue 组件
  - `utils.js` - 共用工具函数
  - `style.css` - 专用样式文件
- **功能**: 创建工具栏，通常与 AppBar 组件一起使用

## 共用逻辑抽取

### 工具函数 (utils.js)
每个组件都有自己的 `utils.js` 文件，包含：
- 样式类名映射对象
- 类名计算函数
- 特定业务逻辑函数（如位置计算、事件处理等）

### 样式文件 (style.css)
每个组件都有专用的 CSS 文件，使用 Tailwind CSS 类：
- 基础样式类
- 变体样式类
- 状态样式类
- 响应式样式类

## Storybook 文档

为每个组件创建了对应的 Story 文件，包含：
- **位置**: `stories/`
- **文件**:
  - `AppBar.stories.js`
  - `Menu.stories.js`
  - `MenuItem.stories.js`
  - `Toolbar.stories.js`
- **特性**:
  - 包含 `autodocs` 标签，自动生成文档
  - 多个示例展示不同的使用场景
  - 详细的参数控制和说明

## 使用方式

### 导入组件
```javascript
// React
import AppBar from '../src/components/AppBar/AppBar.jsx'
import Menu from '../src/components/Menu/Menu.jsx'
import MenuItem from '../src/components/MenuItem/MenuItem.jsx'
import Toolbar from '../src/components/Toolbar/Toolbar.jsx'

// Vue
import AppBar from '../src/components/AppBar/AppBar.vue'
import Menu from '../src/components/Menu/Menu.vue'
import MenuItem from '../src/components/MenuItem/MenuItem.vue'
import Toolbar from '../src/components/Toolbar/Toolbar.vue'
```

### 基本使用示例
```vue
<template>
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <div class="flex-1">
        <h1 class="text-xl font-semibold">应用标题</h1>
      </div>
      <Button @click="openMenu">菜单</Button>
    </Toolbar>
  </AppBar>

  <Menu :open="menuOpen" :anchorEl="menuAnchor" @close="closeMenu">
    <MenuItem @click="handleAction1">操作 1</MenuItem>
    <MenuItem @click="handleAction2">操作 2</MenuItem>
  </Menu>
</template>
```

## 重构优势

1. **更好的代码组织**: 每个组件都有自己的文件夹，便于维护
2. **共用逻辑提取**: 避免代码重复，提高可维护性
3. **样式隔离**: 每个组件有独立的样式文件
4. **文档完整**: 每个组件都有详细的 Storybook 文档
5. **类型安全**: 通过工具函数确保参数的正确性
6. **易于扩展**: 新功能可以轻松添加到对应的工具函数中 
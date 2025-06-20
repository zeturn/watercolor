# Watercolor 定制配色系统文档

## 🎨 配色方案概述

Watercolor UI 配色系统采用科学的层次化设计，以**蓝紫色**为主色调，**荧光绿色**为次色调，**明亮黄色**为强调色，并提供丰富的扩展调色板来满足各种设计需求。

### 核心色彩结构

#### 🔵 主色调 (Primary) - 蓝紫色
- **主色**: `#3D5AFE`
- **用途**: 主要交互元素、品牌色彩、重要按钮
- **色彩特点**: 专业、现代、科技感与创新感并存

#### 🟢 次色调 (Secondary) - 荧光绿色
- **主色**: `#76FF03`  
- **用途**: 辅助元素、次要按钮、成功状态
- **色彩特点**: 高能量、极具活力、未来科技感

#### 🟡 强调色 (Accent) - 明亮黄色
- **主色**: `#FFCC16`
- **用途**: 重点突出、行动召唤、关键提示
- **色彩特点**: 明亮、活力、高度吸引注意力

## 📚 完整色彩规范

### 核心色彩系统
```css
/* 主色调 - 蓝紫色 */
--wc-primary-50: #F0F2FF;
--wc-primary-100: #D8E0FE;
--wc-primary-200: #B1C0FE;
--wc-primary-300: #8A9FFE;
--wc-primary-400: #6D85FE;
--wc-primary-500: #3D5AFE;  /* 主色 */
--wc-primary-600: #2C43DA;
--wc-primary-700: #1E30B6;
--wc-primary-800: #132093;
--wc-primary-900: #0B1579;

/* 次色调 - 荧光绿色 */
--wc-secondary-50: #F0FFF4;
--wc-secondary-100: #EEFFCC;
--wc-secondary-200: #D8FF9A;
--wc-secondary-300: #BDFF67;
--wc-secondary-400: #A2FF41;
--wc-secondary-500: #76FF03;  /* 主色 */
--wc-secondary-600: #59DB02;
--wc-secondary-700: #40B701;
--wc-secondary-800: #2C9300;
--wc-secondary-900: #1D7A00;

/* 强调色 - 明亮黄色 */
--wc-accent-50: #FFFEF0;
--wc-accent-100: #FFF9D0;
--wc-accent-200: #FFF0A1;
--wc-accent-300: #FFE673;
--wc-accent-400: #FFDC50;
--wc-accent-500: #FFCC16;  /* 主色 */
--wc-accent-600: #DBAA10;
--wc-accent-700: #B78A0B;
--wc-accent-800: #936B07;
--wc-accent-900: #7A5504;
```

### 语义色彩系统
```css
/* 成功色 - 荧光绿色 */
--wc-success-500: #76FF03;

/* 信息色 - 天蓝色 */
--wc-info-500: #0EA5E9;

/* 警告色 - 明亮黄色 */
--wc-warning-500: #FFCC16;

/* 危险色 - 红色 */
--wc-danger-500: #EF4444;
```

### 扩展调色板
```css
/* 紫色调色板 */
--wc-purple-500: #A855F7;

/* 粉色调色板 */
--wc-pink-500: #EC4899;

/* 青色调色板 */
--wc-teal-500: #14B8A6;

/* 靛蓝调色板 */
--wc-indigo-500: #6366F1;
```

## 🎯 使用指南

### 主题应用
```javascript
import { applyTheme } from '@/utils/theme'

// 应用自定义配色主题
applyTheme('custom')
```

### 基础用法
```vue
<template>
  <!-- 主色调按钮 -->
  <button class="bg-primary-500 hover:bg-primary-600 text-white">
    主要操作
  </button>
  
  <!-- 次色调按钮 -->
  <button class="bg-secondary-500 hover:bg-secondary-600 text-white">
    次要操作  
  </button>
  
  <!-- 强调色按钮 -->
  <button class="bg-accent-500 hover:bg-accent-600 text-white">
    重要提示
  </button>
  
  <!-- 扩展色彩 -->
  <div class="bg-purple-100 text-purple-800 p-4">
    紫色主题卡片
  </div>
</template>
```

### CSS 变量使用
```css
.custom-element {
  background-color: var(--wc-primary-500);
  color: var(--wc-primary-50);
  border: 1px solid var(--wc-primary-300);
}

.accent-highlight {
  background-color: var(--wc-accent-100);
  color: var(--wc-accent-800);
}
```

## 🎨 设计原则

### 色彩层次
1. **主色调 (Primary)**: 品牌色彩，最重要的交互元素
2. **次色调 (Secondary)**: 辅助色彩，支持性功能
3. **强调色 (Accent)**: 突出色彩，吸引注意力
4. **语义色彩**: 传达状态和反馈信息
5. **扩展色彩**: 增强视觉层次和表现力

### 配色搭配建议

#### 和谐组合
- 主色 + 次色: 蓝紫荧光绿搭配，未来科技感
- 主色 + 强调色: 蓝紫明黄对比，专业与活力并存
- 次色 + 强调色: 荧光绿明黄组合，极具视觉冲击力

#### 应用场景
- **品牌展示**: 主色为主，强调色点缀
- **数据面板**: 主色 + 次色 + 扩展色彩
- **表单界面**: 主色操作 + 语义色反馈
- **内容展示**: 中性色为主，彩色点缀

## 🚀 高级定制

### 动态色彩调整
```javascript
import { setTheme } from '@/utils/theme'

// 动态调整主色调
setTheme({
  primary: {
    500: '#1E40AF',  // 深蓝色
    600: '#1E3A8A',
  },
  accent: {
    500: '#F97316',  // 橙色
    600: '#EA580C',
  }
})
```

### 新增色彩扩展
```javascript
// 添加新的色彩类别
setTheme({
  // 自定义品牌色
  brand: {
    50: '#FFF7ED',
    500: '#FF6B35',
    900: '#7C2D12',
  }
})
```

### 深色模式适配
系统自动生成深色模式适配色彩，确保在暗色背景下的可读性和美观性。

## 📖 最佳实践

1. **保持一致性**: 在同类元素中使用相同的色彩层级
2. **合理对比**: 确保文本和背景有足够的对比度
3. **语义明确**: 使用语义色彩传达正确的状态信息
4. **适度使用**: 避免过度使用高饱和度色彩
5. **渐进增强**: 从基础色彩开始，逐步添加装饰色彩

这套配色系统为您的应用提供了完整、灵活、美观的色彩解决方案。通过合理运用这些色彩，可以创造出专业且富有表现力的用户界面。 
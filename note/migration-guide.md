# Material-UI 到 Watercolor UI 迁移指南

欢迎使用 Watercolor UI！本指南将帮助您从 Material-UI (@mui/material) 平滑过渡到我们的组件库。

## 🎯 迁移策略

我们提供三种迁移方式，您可以选择最适合您项目的方案：

### 1. 兼容层迁移（推荐首选）

最简单的迁移方式，只需要修改导入语句：

```javascript
// 之前
import { Button, TextField, Container } from '@mui/material'

// 现在
import { Button, TextField, Container } from 'watercolor-ui/mui-compat'
```

**优势：**
- 零代码修改
- 立即可用
- 完整的 TypeScript 支持

### 2. 渐进式组件替换

逐步将组件替换为原生 Watercolor 组件：

```javascript
// 阶段 1: 使用兼容层
import { Button } from 'watercolor-ui/mui-compat'

// 阶段 2: 替换为原生组件
import { Button } from 'watercolor-ui'
// 注意：可能需要调整 props 名称
```

### 3. 完整重构

完全采用 Watercolor 设计系统，获得最佳性能和定制能力。

## 📦 安装和设置

### 1. 安装 Watercolor UI

```bash
npm install watercolor-ui
# 或
yarn add watercolor-ui
```

### 2. 替换导入语句

在您的项目中，使用查找替换功能：

```javascript
// 查找
from '@mui/material'
// 替换为
from 'watercolor-ui/mui-compat'
```

### 3. 样式系统

确保导入 Watercolor 的样式：

```javascript
// 在您的主入口文件中
import 'watercolor-ui/styles'
```

## 🔄 组件映射表

| Material-UI 组件 | Watercolor 兼容组件 | 状态 |
|-----------------|-------------------|------|
| `Accordion` | `Accordion` | ✅ 完全兼容 |
| `Alert` | `Alert` | ✅ 完全兼容 |
| `Avatar` | `Avatar` | ✅ 完全兼容 |
| `Badge` | `Badge` | ✅ 完全兼容 |
| `Banner` | `Banner` | ✅ 完全兼容 |
| `Blockquote` | `Blockquote` | ✅ 完全兼容 |
| `Box` | `Box` | ✅ 完全兼容 |
| `Breadcrumbs` | `Breadcrumb` | ⚠️ 轻微差异 |
| `Button` | `Button` | ✅ 完全兼容 |
| `Card` | `Card` | ✅ 完全兼容 |
| `Checkbox` | `Checkbox` | ✅ 完全兼容 |
| `Chip` | `Chip` | ✅ 完全兼容 |
| `CircularProgress` | `CircularProgress` | ✅ 完全兼容 |
| `Container` | `Container` | ✅ 完全兼容 |
| `Dialog` | `Dialog` | ✅ 完全兼容 |
| `Fab` | `Fab` | ✅ 完全兼容 |
| `FormControl` | `FormControl` | ✅ 完全兼容 |
| `FormControlLabel` | `FormControlLabel` | ✅ 完全兼容 |
| `FormGroup` | `FormGroup` | ✅ 完全兼容 |
| `FormHelperText` | `FormHelperText` | ✅ 完全兼容 |
| `Grid` | `Grid` | ✅ 完全兼容 |
| `IconButton` | `IconButton` | ✅ 完全兼容 |
| `Input` | `Input` | ✅ 完全兼容 |
| `List` | `List` | ✅ 完全兼容 |
| `ListItem` | `ListItem` | ✅ 完全兼容 |
| `ListItemIcon` | `ListItemIcon` | ✅ 完全兼容 |
| `ListItemText` | `ListItemText` | ✅ 完全兼容 |
| `Menu` | `Menu` | ✅ 完全兼容 |
| `MenuItem` | `MenuItem` | ✅ 完全兼容 |
| `Pagination` | `Pagination` | ✅ 完全兼容 |
| `Paper` | `Paper` | ✅ 完全兼容 |
| `Radio` | `Radio` | ✅ 完全兼容 |
| `RadioGroup` | `RadioGroup` | ✅ 完全兼容 |
| `Rating` | `Rating` | ✅ 完全兼容 |
| `Select` | `Select` | ✅ 完全兼容 |
| `Skeleton` | `Skeleton` | ✅ 完全兼容 |
| `Slider` | `Slider` | ✅ 完全兼容 |
| `Snackbar` | `Snackbar` | ✅ 完全兼容 |
| `Switch` | `Switch` | ✅ 完全兼容 |
| `Tabs` | `Tabs` | ✅ 完全兼容 |
| `Table` | `Table` | ✅ 完全兼容 |
| `TextField` | `TextField` | ✅ 完全兼容 |
| `Tooltip` | `Tooltip` | ✅ 完全兼容 |
| `Typography` | `Typography` | ✅ 完全兼容 |
| `Toolbar` | `Toolbar` | ✅ 完全兼容 |

## 🚀 快速开始示例

### 登录表单迁移

**Material-UI 版本：**
```vue
<template>
  <Container maxWidth="sm">
    <Paper elevation={3}>
      <TextField label="邮箱" fullWidth />
      <TextField label="密码" type="password" fullWidth />
      <Button variant="contained" fullWidth>登录</Button>
    </Paper>
  </Container>
</template>

<script>
import { Container, Paper, TextField, Button } from '@mui/material'
</script>
```

**Watercolor 兼容版本：**
```vue
<template>
  <!-- 模板代码完全相同！ -->
  <Container maxWidth="sm">
    <Paper elevation={3}>
      <TextField label="邮箱" fullWidth />
      <TextField label="密码" type="password" fullWidth />
      <Button variant="contained" fullWidth>登录</Button>
    </Paper>
  </Container>
</template>

<script>
// 只需要修改导入语句
import { Container, Paper, TextField, Button } from 'watercolor-ui/mui-compat'
</script>
```

## 🎨 主题系统

### Material-UI 主题

```javascript
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})
```

### Watercolor 兼容主题

```javascript
import { createTheme, ThemeProvider } from 'watercolor-ui/mui-compat'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

// 用法完全相同
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## ⚡ 性能优化

### 1. 按需导入

```javascript
// 推荐：按需导入
import { Button } from 'watercolor-ui/mui-compat'

// 避免：全量导入
import * as WatercolorUI from 'watercolor-ui/mui-compat'
```

### 2. Tree Shaking

确保您的构建工具支持 Tree Shaking：

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true,
    sideEffects: false
  }
}
```

## 🔧 高级配置

### 自定义主题

```javascript
// 扩展默认主题
import { createTheme } from 'watercolor-ui/mui-compat'

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Watercolor 主色调
      light: '#818cf8',
      dark: '#4f46e5'
    },
    secondary: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706'
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif'
  }
})
```

### 响应式断点

```javascript
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  }
})
```

## 🐛 常见问题和解决方案

### 1. 样式不一致

**问题：** 组件样式与 Material-UI 不完全一致

**解决方案：**
```css
/* 添加自定义样式覆盖 */
.watercolor-button {
  @apply your-custom-styles;
}
```

### 2. TypeScript 类型错误

**问题：** 类型定义不匹配

**解决方案：**
```typescript
// 更新 tsconfig.json
{
  "compilerOptions": {
    "types": ["watercolor-ui"]
  }
}
```

### 3. 构建错误

**问题：** Webpack 或 Vite 构建失败

**解决方案：**
```javascript
// vite.config.js
export default {
  optimizeDeps: {
    include: ['watercolor-ui']
  }
}
```

## 📚 迁移检查清单

- [ ] 安装 `watercolor-ui`
- [ ] 替换所有 `@mui/material` 导入为 `watercolor-ui/mui-compat`
- [ ] 导入 Watercolor 样式文件
- [ ] 测试所有使用组件的页面
- [ ] 检查自定义主题配置
- [ ] 验证响应式布局
- [ ] 运行单元测试
- [ ] 进行用户验收测试

## 🎉 迁移完成后

恭喜！您已经成功迁移到 Watercolor UI。现在您可以：

1. **享受更好的性能** - Watercolor 针对现代浏览器优化
2. **探索新功能** - 我们提供了 Material-UI 没有的额外组件
3. **深度定制** - 基于 Tailwind CSS 的设计系统提供无限可能
4. **逐步优化** - 考虑将兼容层组件替换为原生 Watercolor 组件

## 🆘 需要帮助？

- 📖 查看 [完整文档](./README.md)
- 🌟 浏览 [Storybook 示例](./stories)
- 🐛 [报告问题](https://github.com/your-repo/watercolor-ui/issues)
- 💬 [讨论区](https://github.com/your-repo/watercolor-ui/discussions)

---

**Happy coding with Watercolor UI! 🎨✨** 
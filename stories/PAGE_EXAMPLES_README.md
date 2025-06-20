# Watercolor UI 页面示例

这里包含了使用 Watercolor UI 组件库构建的完整页面示例，展示了如何将单个组件组合成功能完整的用户界面。

## 📄 可用页面示例

### 1. 页面示例 (`PageExamples.stories.js`)
这是主要的页面示例集合，包含：

#### 🔐 登录页面 (LoginPage)
- **功能**: 完整的用户登录界面
- **组件使用**: 
  - `ContainerVue` - 页面容器布局
  - `CardVue` - 登录表单卡片
  - `TextFieldVue` - 邮箱和密码输入
  - `ButtonVue` - 登录按钮和链接
  - `CheckboxVue` - "记住我"选项
  - `AlertVue` - 错误提示
  - `TypographyVue` - 文本样式
- **特性**: 
  - 响应式设计
  - 表单验证
  - 加载状态
  - 美观的渐变背景
  - 错误处理

#### 📝 注册页面 (RegisterPage)
- **功能**: 用户注册界面
- **组件使用**:
  - 表单布局组件 (`ContainerVue`, `BoxVue`, `CardVue`)
  - 多种输入组件 (`TextFieldVue`, `CheckboxVue`)
  - 密码强度指示器 (`ProgressVue`)
  - 状态提示 (`AlertVue`)
- **特性**:
  - 双列表单布局
  - 实时密码强度检测
  - 服务条款同意
  - 多种验证状态

#### 📖 文章页面 (ArticlePage)
- **功能**: 博客文章阅读界面
- **组件使用**:
  - 面包屑导航 (`BreadcrumbVue`)
  - 标签系统 (`ChipVue`)
  - 作者信息 (`AvatarVue`, `TypographyVue`)
  - 互动按钮 (`ButtonVue`)
  - 阅读进度 (`ProgressVue`)
- **特性**:
  - 文章元信息显示
  - 社交互动功能
  - 响应式侧边栏
  - 阅读进度跟踪

#### 🏠 首页 (HomePage)
- **功能**: 产品官网首页
- **组件使用**:
  - 导航栏 (`AppBarVue`, `ToolbarVue`)
  - 栅格布局 (`GridVue`)
  - 特性展示卡片 (`CardVue`)
  - 浮动操作按钮 (`FabVue`)
- **特性**:
  - 现代化英雄区域
  - 特性展示网格
  - 渐变背景效果
  - 响应式导航

### 2. 仪表板页面 (`Dashboard.stories.js`)

#### 📊 数据仪表板 (Dashboard)
- **功能**: 管理后台仪表板
- **组件使用**:
  - 数据表格 (`TableVue`, `TableHeadVue`, `TableBodyVue`, `TableRowVue`, `TableCellVue`)
  - 统计卡片 (`CardVue`, `ProgressVue`, `ChipVue`)
  - 用户头像 (`AvatarVue`)
  - 状态徽章 (`BadgeVue`)
- **特性**:
  - 实时数据展示
  - 项目进度跟踪
  - 订单管理表格
  - 快速操作面板
  - 用户权限显示

## 🎨 设计特色

### 响应式设计
- 所有页面都采用响应式设计
- 在手机、平板、桌面端都有良好的显示效果
- 使用 `GridVue` 和 `ContainerVue` 实现灵活布局

### 现代化UI
- 渐变背景和阴影效果
- 圆角卡片设计
- 一致的颜色系统
- 优雅的动画过渡

### 交互性
- 表单验证和状态反馈
- 加载状态指示
- 悬停效果
- 点击交互

## 🛠️ 技术实现

### Vue 3 Composition API
所有示例都使用 Vue 3 的 Composition API：
```javascript
setup() {
  const formData = ref({...})
  const isLoading = ref(false)
  
  const handleSubmit = () => {
    // 处理逻辑
  }
  
  return {
    formData,
    isLoading,
    handleSubmit
  }
}
```

### 组件组合
展示了如何将 Watercolor UI 的基础组件组合成复杂的页面：
- 布局组件：`ContainerVue`, `BoxVue`, `GridVue`
- 表单组件：`TextFieldVue`, `CheckboxVue`, `ButtonVue`
- 展示组件：`CardVue`, `TypographyVue`, `ChipVue`
- 导航组件：`AppBarVue`, `BreadcrumbVue`

### 状态管理
使用 `ref` 和 `computed` 管理组件状态：
- 表单数据
- 加载状态
- 用户交互状态
- 计算属性（如密码强度）

## 🚀 如何使用

1. **在 Storybook 中查看**: 运行 Storybook 并导航到"页面示例"分类
2. **作为模板使用**: 复制代码并根据需求修改
3. **学习组件组合**: 查看如何将多个组件组合成完整功能
4. **响应式测试**: 在不同屏幕尺寸下测试页面效果

## 📚 最佳实践

### 组件导入
```javascript
import ContainerVue from '../src/components/Container/Container.vue'
import ButtonVue from '../src/components/Button/Button.vue'
```

### 样式应用
使用 Tailwind CSS 类名进行样式设计：
```html
<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
```

### 响应式布局
```html
<GridVue container spacing="lg">
  <GridVue item xs="12" md="6" lg="4">
    <!-- 内容 -->
  </GridVue>
</GridVue>
```

这些页面示例为您提供了使用 Watercolor UI 构建现代 Web 应用的完整参考。您可以直接使用这些模板，或者以此为基础进行自定义开发。 
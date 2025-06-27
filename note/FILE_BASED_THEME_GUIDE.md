# Watercolor UI - 基于文件的主题系统

## 概述

Watercolor UI 现在采用基于文件的主题系统，通过 `theme.config.json` 文件来定义主题，而不是使用内置的预设主题（如 forest、sunset 等）。这使得主题自定义更加灵活和强大。

## 主要变化

### ✅ 新的文件驱动主题系统
- 所有主题配置通过 `theme.config.json` 文件定义
- 支持完全自定义的颜色配置
- 自动加载和应用主题配置
- 支持字体、圆角等扩展配置

### ❌ 移除的内置主题
- `theme-ocean` (海洋蓝主题)
- `theme-forest` (森林绿主题) 
- `theme-sunset` (夕阳橙主题)
- `theme-violet` (紫罗兰主题)
- `theme-rose` (玫瑰粉主题)

## 使用方法

### 1. 创建主题配置文件

在项目根目录创建或修改 `theme.config.json` 文件：

```json
{
  "primary": {
    "50": "#eff6ff",
    "100": "#dbeafe", 
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a"
  },
  "secondary": {
    "50": "#f3f4ff",
    "100": "#e5e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81"
  },
  "fonts": {
    "chinese": "Noto Sans SC",
    "english": "Inter",
    "fallback": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
  }
}
```

### 2. 应用主题

主题会自动加载和应用，你也可以手动触发：

```javascript
import { loadThemeConfig } from 'watercolor-ui/theme'

// 加载默认配置文件
await loadThemeConfig()

// 或加载自定义路径的配置文件
await loadThemeConfig('/custom-theme.json')
```

## 配置选项

### 颜色配置

支持以下颜色系统：

- `primary` - 主色调（必需）
- `secondary` - 次色调（可选）
- `neutral` - 中性色（可选）
- `success` - 成功色（可选）
- `warning` - 警告色（可选）
- `error` - 错误色（可选）
- `info` - 信息色（可选）

每种颜色支持 50-900 的色阶：

```json
{
  "primary": {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",  // 主要色值
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a"
  }
}
```

### 字体配置

```json
{
  "fonts": {
    "chinese": "PingFang SC",
    "english": "Inter", 
    "fallback": "system-ui, sans-serif"
  }
}
```

### 圆角配置

```json
{
  "radius": {
    "sm": "0.125rem",
    "md": "0.25rem", 
    "lg": "0.5rem",
    "xl": "0.75rem",
    "2xl": "1rem",
    "full": "9999px"
  }
}
```

## 迁移指南

### 从内置主题迁移

如果之前使用内置主题，需要进行以下更改：

#### 旧方式（已弃用）
```javascript
import { applyTheme } from 'watercolor-ui/theme'

applyTheme('forest')  // ❌ 不再支持
applyTheme('sunset')  // ❌ 不再支持
```

#### 新方式
1. 将喜欢的主题配置保存到 `theme.config.json`
2. 使用文件驱动的主题系统

```javascript
import { loadThemeConfig } from 'watercolor-ui/theme'

// ✅ 自动加载配置文件
await loadThemeConfig()
```

### 主题配置示例

#### 森林绿主题配置
```json
{
  "primary": {
    "50": "#F6FFED",
    "100": "#D9F7BE",
    "200": "#B7EB8F", 
    "300": "#95DE64",
    "400": "#73D13D",
    "500": "#52C41A",
    "600": "#389E0D",
    "700": "#237804",
    "800": "#135200",
    "900": "#092B00"
  },
  "secondary": {
    "50": "#F9FFED",
    "100": "#EAFF99",
    "200": "#DEFF66",
    "300": "#D4FF33", 
    "400": "#CBFF00",
    "500": "#A6CC00",
    "600": "#7D9900",
    "700": "#546600",
    "800": "#2B3300",
    "900": "#0F1100"
  }
}
```

#### 夕阳橙主题配置
```json
{
  "primary": {
    "50": "#FFF7E6",
    "100": "#FFE7BA",
    "200": "#FFD591",
    "300": "#FFC069",
    "400": "#FFA940", 
    "500": "#FA8C16",
    "600": "#D46B08",
    "700": "#AD4E00",
    "800": "#873800",
    "900": "#612500"
  },
  "secondary": {
    "50": "#FFF2E8",
    "100": "#FFD8BF",
    "200": "#FFBB96",
    "300": "#FF9C6E",
    "400": "#FF7A45",
    "500": "#FF4D4F",
    "600": "#CF1322", 
    "700": "#A8071A",
    "800": "#820014",
    "900": "#5C0011"
  }
}
```

## 最佳实践

### 1. 版本控制
将 `theme.config.json` 文件加入版本控制，确保团队使用一致的主题。

### 2. 环境配置
可以为不同环境使用不同的主题配置文件：

```javascript
// 开发环境
await loadThemeConfig('/themes/dev.json')

// 生产环境  
await loadThemeConfig('/themes/prod.json')
```

### 3. 动态主题切换
支持运行时动态切换主题：

```javascript
// 切换到夜间主题
await loadThemeConfig('/themes/dark.json')

// 切换到品牌主题
await loadThemeConfig('/themes/brand.json')
```

### 4. 渐进式采用
可以只定义部分颜色，其余使用默认值：

```json
{
  "primary": {
    "500": "#your-brand-color"
  }
}
```

## 故障排除

### 主题未生效
1. 检查 `theme.config.json` 文件是否存在且格式正确
2. 确保文件路径正确
3. 查看浏览器控制台是否有错误信息

### 颜色不显示
1. 确保颜色值格式正确（使用十六进制格式）
2. 检查是否定义了必需的 `primary` 颜色
3. 验证色阶值是否完整（建议至少定义 500）

### 字体未应用
1. 确保字体名称正确
2. 检查字体是否已加载
3. 提供合适的 fallback 字体

## 技术细节

### CSS 变量
主题系统会自动设置对应的 CSS 变量：

```css
:root {
  --wc-primary-50: #eff6ff;
  --wc-primary-100: #dbeafe;
  /* ... */
  --wc-primary-500: #3b82f6;
  /* ... */
  --wc-secondary-500: #6366f1;
}
```

### 自动加载
系统会在浏览器环境下自动尝试加载 `/theme.config.json`：

```javascript
// 在浏览器环境下自动执行
if (typeof window !== 'undefined') {
  loadThemeConfig()
}
```

这确保了主题配置的自动应用，无需手动调用。 
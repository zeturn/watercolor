# Watercolor UI 字体主题系统

## 概述

Watercolor UI 提供了一个强大的字体主题系统，允许您在一个地方统一管理整个应用的中文和英文字体，而无需在每个组件中单独设置。

## 功能特性

- 🎨 **统一管理** - 在theme中统一设置中英文字体
- 🌍 **多语言支持** - 分别配置中文和英文字体
- 🎯 **预设主题** - 提供多种精心设计的字体组合
- 🔧 **自定义配置** - 支持完全自定义的字体设置
- 📱 **响应式** - 自动适配不同设备和系统
- ⚡ **即时生效** - 字体更改立即应用到整个应用

## 快速开始

### 1. 基本使用

```javascript
import { applyFontTheme, setFonts } from 'watercolor-ui/theme'

// 应用预设字体主题
applyFontTheme('modern')

// 或者自定义字体配置
setFonts({
  chinese: 'PingFang SC',
  english: 'SF Pro Display',
  fallback: 'sans-serif'
})
```

### 2. 预设字体主题

```javascript
// 系统默认字体
applyFontTheme('system')

// 中文友好字体组合
applyFontTheme('chinese')

// 现代英文字体
applyFontTheme('modern')

// 优雅字体组合
applyFontTheme('elegant')

// 可读性优先
applyFontTheme('readable')

// 苹果风格
applyFontTheme('apple')

// Google字体
applyFontTheme('google')
```

## 预设字体主题详情

| 主题名称 | 中文字体 | 英文字体 | 适用场景 |
|---------|---------|---------|---------|
| `system` | system-ui | system-ui | 系统原生外观 |
| `chinese` | PingFang SC | SF Pro Display | 中文内容为主的应用 |
| `modern` | Noto Sans SC | Inter | 现代化界面设计 |
| `elegant` | Source Han Sans | Poppins | 优雅精致的设计 |
| `readable` | IBM Plex Sans SC | IBM Plex Sans | 阅读性要求高的应用 |
| `apple` | PingFang SC | SF Pro Display | 苹果生态系统风格 |
| `google` | Noto Sans SC | Roboto | Google Material Design风格 |

## 高级用法

### 1. 与主题系统结合

```javascript
import { setTheme } from 'watercolor-ui/theme'

// 同时设置颜色主题和字体主题
setTheme({
  primary: { 500: '#3b82f6' },
  fonts: {
    chinese: 'PingFang SC',
    english: 'Inter',
    fallback: 'sans-serif'
  }
})
```

### 2. 响应式字体设置

```javascript
// 根据设备类型设置不同字体
const isMobile = window.innerWidth < 768

if (isMobile) {
  applyFontTheme('system')  // 移动设备使用系统字体
} else {
  applyFontTheme('modern')  // 桌面设备使用现代字体
}
```

### 3. 字体加载检测

```javascript
// 检测字体是否加载完成
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    applyFontTheme('modern')
  })
} else {
  // 降级方案
  applyFontTheme('system')
}
```

## CSS变量

字体主题系统会自动设置以下CSS变量：

```css
:root {
  --wc-font-family: /* 完整的字体栈 */
  --wc-font-chinese: /* 中文字体 */
  --wc-font-english: /* 英文字体 */
}
```

您可以在自定义CSS中使用这些变量：

```css
.my-custom-component {
  font-family: var(--wc-font-family);
}

.chinese-text {
  font-family: var(--wc-font-chinese), var(--wc-font-family);
}

.english-text {
  font-family: var(--wc-font-english), var(--wc-font-family);
}
```

## 字体工具类

Watercolor UI 还提供了一些实用的字体工具类：

```html
<!-- 使用中文字体 -->
<div class="font-chinese">中文内容</div>

<!-- 使用英文字体 -->
<div class="font-english">English Content</div>

<!-- 使用系统字体 -->
<div class="font-system">System Font</div>
```

## 最佳实践

### 1. 字体选择原则

- **可读性第一** - 选择在目标设备上具有良好可读性的字体
- **品牌一致性** - 字体应该与品牌形象保持一致
- **性能考虑** - 避免加载过多的Web字体影响性能
- **系统兼容** - 提供合适的降级字体

### 2. 中英文字体搭配

```javascript
// 推荐的中英文字体搭配
const goodCombinations = [
  { chinese: 'PingFang SC', english: 'SF Pro Display' },
  { chinese: 'Microsoft YaHei', english: 'Segoe UI' },
  { chinese: 'Noto Sans SC', english: 'Roboto' },
  { chinese: 'Source Han Sans', english: 'Source Sans Pro' }
]
```

### 3. 性能优化

```javascript
// 预加载字体
const fontPreloader = (fontFamily) => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'font'
  link.href = `path/to/${fontFamily}.woff2`
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}

// 然后应用字体主题
fontPreloader('Inter')
setTimeout(() => {
  applyFontTheme('modern')
}, 100)
```

## 故障排除

### 常见问题

1. **字体不生效**
   - 检查字体是否正确安装或加载
   - 确认CSS变量是否正确设置
   - 查看浏览器控制台是否有错误

2. **中英文字体混乱**
   - 确保字体栈设置正确
   - 检查字体的Unicode范围支持

3. **性能问题**
   - 减少Web字体的使用
   - 使用字体子集功能
   - 启用字体预加载

### 调试工具

```javascript
import { getCurrentFonts } from 'watercolor-ui/theme'

// 获取当前字体配置
console.log(getCurrentFonts())

// 检查CSS变量
const root = document.documentElement
console.log(root.style.getPropertyValue('--wc-font-family'))
```

## 示例项目

查看 [Theme.stories.js](./stories/Theme.stories.js) 中的 `FontThemes` story 来了解完整的使用示例和交互式演示。 
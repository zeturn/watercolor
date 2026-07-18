# 可访问性、国际化与视觉冻结

Watercolor 1.2.4 把 2.0 前的稳定性要求放进 CI：默认主题、交互、可访问性、视觉模式和包体大小都必须通过自动检查。

## LocaleProvider

React:

```tsx
import { LocaleProvider } from '@zeturn/watercolor-react'

<LocaleProvider
  locale="zh-CN"
  messages={{
    close: '关闭',
    closeDialog: '关闭对话框',
    tabList: '内容分组',
    rating: '评分',
    ratingValue: (value, max) => `${value} / ${max}`,
  }}
>
  <App />
</LocaleProvider>
```

Vue:

```vue
<LocaleProvider
  locale="zh-CN"
  :messages="{
    close: '关闭',
    closeDialog: '关闭对话框',
    tabList: '内容分组',
    rating: '评分',
    ratingValue: (value, max) => `${value} / ${max}`,
  }"
>
  <App />
</LocaleProvider>
```

组件内部不能写死中文 `aria-label`。如果组件需要新增屏幕阅读器文案，必须先加入 `WatercolorLocaleMessages`，并在 React/Vue 两边使用同名 message。

## CI 检查

1.2.4 的 release gate 会阻止这些回退：

- Storybook axe 可访问性违规。
- React/Vue Storybook 在 light/dark/mobile/system/reduced-motion/forced-colors/RTL/200% zoom 下出现渲染错误、横向溢出或主题解析错误。
- 组件源码重新出现中文 `aria-label`。
- bundle gzip 体积超过预算。
- Theme v2、组合层、API parity、clean-room tarball 安装回退。

## 动效策略

默认关闭装饰性入场动画。允许保留：

- loading / progress。
- 必要状态反馈。
- Modal、SlideOver、Tooltip、Snackbar 等特殊浮层的轻量过渡。

当用户启用 `prefers-reduced-motion: reduce` 时，Watercolor 会将 motion token 与 CSS transition/animation 时间压到 `0ms`。

## 视觉冻结范围

视觉检查覆盖：

- React / Vue。
- light / dark / system。
- desktop / mobile。
- reduced motion。
- forced colors。
- RTL。
- 200% zoom。
- 默认组件页面和关键 recipes。


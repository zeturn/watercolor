# Storybook 指南

> 本文档适用于 Watercolor UI 组件库的 Storybook 配置、组件文档编写、常见问题排查与最佳实践，支持 Vue3/Vite 与 React18/Vite 双端开发。

---

## 1. 文档说明

Watercolor UI 推荐全员使用 Storybook 进行组件开发、文档编写与交互演示，支持多端、主题切换、自动化文档生成等现代化需求。

---

## 2. 基础配置与目录结构

### 2.1 安装依赖
```bash
# Vue 端
npx sb init --type vue3
# React 端
npx sb init --type react
```

### 2.2 启动 Storybook
```bash
npm run storybook
# 或
yarn storybook
```

### 2.3 目录结构建议
- stories-vue/  —— Vue 组件 stories
- stories-react/ —— React 组件 stories
- 每个组件建议单独一个 stories 文件，便于维护

---

## 3. Vue 端常见问题与解决方案

### 3.1 Canvas 渲染出 [object Object]
- 现象：组件未正常渲染，Canvas 区域仅显示 `[object Object]`，无明显报错。
- 原因：装饰器中直接将 story 作为组件传递，未执行 story()。
- 错误写法：
  ```js
  return {
    setup() {
      return () => h('div', wrapperProps, h(story))
    }
  }
  ```
- 正确写法：
  ```js
  import { h } from 'vue'
  export const decorators = [
    (story, context) => {
      const theme = context.globals.theme
      return {
        setup() {
          return () =>
            h(
              'div',
              { class: `p-4 min-h-screen ${theme === 'dark' ? 'bg-neutral-900 text-neutral-100' : 'bg-neutral-0 text-neutral-900'}` },
              [h(story())]
            )
        },
      }
    },
  ]
  ```
- 原理说明：story 是返回组件的函数，必须执行 story() 得到组件选项对象/VNode，h() 才能正确渲染。

### 3.2 全局样式 import 顺序
- CSS 中的 @import 必须在其他声明之前，避免 Vite 报错。

### 3.3 文档格式建议
- 推荐使用 MDX 或 CSF 格式，便于自动生成 API 文档。

---

## 4. React 端配置与最佳实践

### 4.1 基础配置
- 推荐使用 CSF（Component Story Format）编写 stories。
- 支持 args/controls 自动生成属性面板。

### 4.2 装饰器用法
- 可用装饰器统一包裹主题、全局样式、上下文等。
- 示例：
  ```jsx
  import React from 'react'
  export const decorators = [
    (Story, context) => (
      <div style={{ padding: 24, background: context.globals.theme === 'dark' ? '#222' : '#fff' }}>
        <Story />
      </div>
    )
  ]
  ```

### 4.3 组件文档与交互
- 每个组件建议编写详细 stories，覆盖常用用法、边界情况、交互演示。
- 使用 `parameters` 配置文档说明、设计稿链接等。

---

## 5. 高级用法

### 5.1 多主题切换
- 利用 `globals` 和 `decorators` 实现主题切换控件。
- 参考官方 [Theming](https://storybook.js.org/docs/react/configure/theming) 文档。

### 5.2 组件快照测试
- 可集成 Storyshots 进行 UI 快照回归测试。

### 5.3 自动化文档生成
- 支持自动生成 Props 表、事件说明、插槽说明（Vue）、API 参考。

---

## 6. 常见问题与调试

| 问题 | 解决方案 |
|------|----------|
| Canvas 区域 [object Object] | 检查装饰器是否正确调用 story() |
| 样式未生效 | 检查全局样式导入顺序、变量覆盖 |
| 控制面板不显示 | 检查 stories 格式是否为 CSF/MDX |
| 组件交互异常 | 检查 args/controls 配置 |

---

## 7. 团队协作与最佳实践

- 每个组件都应有 stories，覆盖常用场景和边界用例。
- 推荐使用 MDX/CSF 格式，便于自动化和团队协作。
- Storybook 可作为设计/开发/测试/文档的统一平台。
- 及时同步主线分支，避免 stories 冲突。

---

## 8. 参考与扩展阅读
- [Storybook 官方文档](https://storybook.js.org/)
- [Watercolor UI 组件 stories-vue/ stories-react/ 示例]
- [MDX 格式文档](https://storybook.js.org/docs/writing-docs/mdx)

---

**Watercolor UI - 让组件文档与演示更高效！📚✨** 
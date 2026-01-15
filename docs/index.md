---
layout: home
title: Watercolor UI Docs

hero:
  name: Watercolor UI
  text: 组件文档集（AI 友好）
  tagline: 自动从 src/components 的 README 同步生成，并内嵌 Storybook 预览。
  actions:
    - theme: brand
      text: 浏览组件
      link: /components/
    - theme: alt
      text: Vue Storybook
      link: ../vue/
    - theme: alt
      text: React Storybook
      link: ../react/

features:
  - title: 树形导航
    details: 先看组件列表，再进入组件详情；侧边栏按字母分组。
  - title: 组件预览
    details: 每个组件页内嵌 Vue/React 的 Storybook Docs iframe。
  - title: AI 检索友好
    details: 统一入口、可搜索、结构稳定，方便 RAG/Agent 使用。
  - title: 与源码同步
    details: 构建时自动生成，不需要手动维护重复文档。
---

:::tip
想让文档更适合 AI：推荐保持组件 README 的「安装 / 用法 / Props / Events / 注意事项」结构一致。
:::

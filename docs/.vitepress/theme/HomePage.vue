<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <div class="wc-home">
    <div class="page">
      <div class="soft-bg blue"></div>
      <div class="soft-bg green"></div>
      <div class="soft-bg yellow"></div>

      <header>
        <a :href="withBase('/')" class="logo">
          <div class="logo-mark">W</div>
          Watercolor UI
        </a>
        <div class="nav-links">
          <a :href="withBase('/guide/installation')" class="nav-link">使用指南</a>
          <a :href="withBase('/components/')" class="nav-link">组件文档</a>
          <a :href="withBase('/guide/usage')" class="nav-link">设计理念</a>
        </div>
        <a href="https://github.com/zeturn/watercolor" class="gh-link" target="_blank" rel="noreferrer">
          <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
      </header>

      <main class="hero">
        <div>
          <h1 class="hero-title">清爽、规整、低干扰的 <span>组件文档</span></h1>
          <p class="hero-subtitle">
            Watercolor UI 面向 Vue 3 与 React。我们更关注布局秩序、留白与可维护的设计语言，
            用浅色标准色作为辅助，让信息层级更清晰。
          </p>
          <div class="cta-buttons">
            <a :href="withBase('/guide/installation')" class="btn primary">开始使用</a>
            <a :href="withBase('/components/')" class="btn">组件列表</a>
            <a :href="withBase('/guide/usage')" class="btn">设计规范</a>
          </div>
        </div>
        <div class="hero-panel">
          <div class="panel-row blue">
            <div>Vue 3 组件</div>
            <span>轻量、清晰、易组合</span>
          </div>
          <div class="panel-row green">
            <div>React 组件</div>
            <span>一致的 API 与风格</span>
          </div>
          <div class="panel-row yellow">
            <div>TypeScript</div>
            <span>类型友好、自动补全</span>
          </div>
          <div class="panel-row red">
            <div>Design Tokens</div>
            <span>可扩展、可替换</span>
          </div>
        </div>
      </main>

      <section class="section">
        <h2 class="section-title">为什么适合你的项目</h2>
        <div class="features-grid">
          <div class="feature-card blue">
            <div class="feature-title">结构清晰</div>
            <div class="feature-desc">页面结构和导航保持一致，减少学习成本，快速找到需要的组件。</div>
          </div>
          <div class="feature-card green">
            <div class="feature-title">低干扰配色</div>
            <div class="feature-desc">以白灰为底，浅色标准色点缀，确保内容被优先阅读。</div>
          </div>
          <div class="feature-card yellow">
            <div class="feature-title">轻量可维护</div>
            <div class="feature-desc">组件文档从源码同步生成，保持更新节奏一致。</div>
          </div>
          <div class="feature-card red">
            <div class="feature-title">多端一致</div>
            <div class="feature-desc">Vue 与 React 的体验统一，方便跨团队协作。</div>
          </div>
        </div>
      </section>
    </div>

    <footer>
      <p>© 2024 Watercolor UI. Released under the MIT License.</p>
      <p>Made by <a href="https://github.com/zeturn" target="_blank" rel="noreferrer">Zeturn</a></p>
    </footer>
  </div>
</template>

---
layout: false
title: Watercolor UI - Vue 3 & React 组件库
description: Watercolor UI 是一个面向 Vue 3 与 React 的轻量组件库，强调清晰、低干扰、可维护的视觉语言。
head:
  - [link, { rel: "preconnect", href: "https://fonts.googleapis.com" }]
  - [link, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }]
  - [link, { href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap", rel: "stylesheet" }]
---

<script setup>
import { withBase } from 'vitepress'
</script>

<style>
:root {
    --wc-bg: #f6f7f8;
    --wc-card: #ffffff;
    --wc-text: #1f2937;
    --wc-muted: #6b7280;
    --wc-blue: #eaf2ff;
    --wc-green: #eaf7f0;
    --wc-yellow: #fff6d9;
    --wc-red: #fdeeee;
    --wc-gray: #f1f3f5;
    --wc-border: rgba(15, 23, 42, 0.06);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Source Sans 3', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(180deg, #ffffff 0%, var(--wc-bg) 100%);
    color: var(--wc-text);
    min-height: 100vh;
    overflow-x: hidden;
}

.page {
    position: relative;
    min-height: 100vh;
}

.soft-bg {
    position: absolute;
    z-index: -1;
    border-radius: 32px;
    filter: blur(0);
    opacity: 0.7;
}

.soft-bg.blue {
    width: 38vw;
    height: 38vw;
    top: -6vw;
    left: -8vw;
    background: var(--wc-blue);
}

.soft-bg.green {
    width: 26vw;
    height: 26vw;
    top: 18vw;
    right: -6vw;
    background: var(--wc-green);
}

.soft-bg.yellow {
    width: 24vw;
    height: 24vw;
    bottom: -6vw;
    left: 12vw;
    background: var(--wc-yellow);
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem 6%;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--wc-text);
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 0.2px;
}

.logo-mark {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--wc-gray);
    display: grid;
    place-items: center;
    font-weight: 700;
    color: var(--wc-text);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--wc-muted);
    font-size: 0.95rem;
    font-weight: 500;
}

.nav-link:hover {
    color: var(--wc-text);
}

.gh-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: var(--wc-gray);
    border-radius: 10px;
    text-decoration: none;
    color: var(--wc-text);
    font-size: 0.9rem;
    font-weight: 600;
}

.hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 3rem;
    align-items: center;
    padding: 4.2rem 6% 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.hero-title {
    font-size: clamp(2.6rem, 4vw, 3.6rem);
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 1.4rem;
}

.hero-title span {
    display: inline-block;
    background: var(--wc-blue);
    padding: 0 12px 4px;
    border-radius: 14px;
}

.hero-subtitle {
    font-size: 1.1rem;
    color: var(--wc-muted);
    line-height: 1.8;
    margin-bottom: 2.4rem;
}

.cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.btn {
    padding: 12px 22px;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--wc-text);
    background: var(--wc-gray);
}

.btn.primary {
    background: var(--wc-blue);
}

.hero-panel {
    background: var(--wc-card);
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    display: grid;
    gap: 14px;
}

.panel-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border-radius: 12px;
    background: var(--wc-gray);
    font-size: 0.95rem;
    color: var(--wc-text);
}

.panel-row span {
    color: var(--wc-muted);
    font-size: 0.85rem;
}

.panel-row.blue {
    background: var(--wc-blue);
}

.panel-row.green {
    background: var(--wc-green);
}

.panel-row.yellow {
    background: var(--wc-yellow);
}

.panel-row.red {
    background: var(--wc-red);
}

.section {
    padding: 3.5rem 6% 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
}

.feature-card {
    border-radius: 16px;
    padding: 20px;
    background: var(--wc-card);
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
}

.feature-card.blue {
    background: var(--wc-blue);
}

.feature-card.green {
    background: var(--wc-green);
}

.feature-card.yellow {
    background: var(--wc-yellow);
}

.feature-card.red {
    background: var(--wc-red);
}

.feature-title {
    font-weight: 600;
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
}

.feature-desc {
    color: var(--wc-muted);
    line-height: 1.7;
    font-size: 0.95rem;
}

footer {
    text-align: center;
    padding: 3.5rem 20px;
    color: var(--wc-muted);
    font-size: 0.9rem;
}

footer a {
    color: var(--wc-text);
    text-decoration: none;
    font-weight: 600;
}

@media (max-width: 900px) {
    header {
        flex-direction: column;
        gap: 1rem;
    }

    .hero {
        grid-template-columns: 1fr;
    }

    .nav-links {
        gap: 1.2rem;
    }
}

@media (max-width: 640px) {
    .hero {
        padding: 3rem 6% 2.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
}
</style>

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
        <a href="https://github.com/zeturn/WaterColor-UI" class="gh-link" target="_blank" rel="noreferrer">
            <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
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

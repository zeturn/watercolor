---
layout: false
title: WaterColor UI - Vue 3 & React 水彩风格组件库
description: WaterColor UI 是一个基于水彩设计理念的现代化 UI 组件库，完美支持 Vue 3 和 React。
head:
  - [link, { rel: "preconnect", href: "https://fonts.googleapis.com" }]
  - [link, { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }]
  - [link, { href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap", rel: "stylesheet" }]
---

<style>
:root {
    --primary-color: #5D56A9; /* 更深沉的紫色 */
    --secondary-color: #9D95E3;
    --text-primary: #2C3E50;
    --text-secondary: #5F6C7B;
    --bg-color: #FAFBFC;
    --card-bg: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    background-color: var(--bg-color);
    /* 移除复杂的径向渐变背景，改用更干净的纹理或纯色 */
    background-image: linear-gradient(to bottom, #FAFBFC, #F3F5F9);
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--text-primary);
    line-height: 1.6;
}

/* 抽象水彩背景装饰 - 降低透明度，使其更优雅 */
.watercolor-splash {
    position: absolute;
    z-index: -1;
    filter: blur(80px); /* 增加模糊度使得光晕更柔和 */
    opacity: 0.08; /* 大幅降低透明度，只保留淡淡的氛围 */
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph 20s infinite alternate;
}

.splash-1 {
    top: -10%;
    left: -10%;
    width: 60vw;
    height: 60vw;
    background: #5D56A9;
    animation-duration: 35s;
}

.splash-2 {
    bottom: -10%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    background: #FD79A8;
    animation-duration: 40s;
}

.splash-3 {
    top: 40%;
    left: 20%;
    width: 50vw;
    height: 50vw;
    background: #4A90E2;
    animation-duration: 30s;
}

@keyframes morph {
    0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: rotate(0deg); }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(10deg); }
}

/* 顶部导航 */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0,0,0,0.03); /* 微弱的分割线增加结构感 */
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-mark {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #5D56A9, #FD79A8);
    border-radius: 8px; /* 方形圆角显得更稳重 */
    display: grid;
    place-items: center;
    color: white;
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    box-shadow: 0 4px 10px rgba(93, 86, 169, 0.2);
}

.nav-links {
    display: flex;
    gap: 2.5rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    transition: color 0.3s;
    font-size: 0.95rem;
    letter-spacing: 0.02em;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    display: none; /* 移除下划线动画，保持简洁 */
}

.gh-link {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #F1F3F5;
    color: var(--text-primary);
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid transparent;
}

.gh-link:hover {
    background-color: #E9ECEF;
    border-color: #DEE2E6;
    transform: none; /* 移除位移 */
}

/* Hero 区域 */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 6rem 20px 4rem;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
}

h1 {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
    letter-spacing: -0.02em;
}

h1 span {
    background: linear-gradient(135deg, #5D56A9, #FD79A8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-style: italic;
    padding-right: 0.1em; /* 防止斜体被切 */
}

.subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 680px;
    margin-bottom: 3rem;
    font-weight: 400;
    line-height: 1.7;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
}

.btn {
    padding: 12px 28px;
    border-radius: 6px; /* 更小的圆角，显得更专业 */
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.btn-vue {
    background: #42b883;
    color: white;
    border: 1px solid #3aa876;
}

.btn-react {
    background: #3498db; /* 调整为更深沉的蓝色 */
    color: white;
    border: 1px solid #2980b9;
}

.btn-doc {
    background: white;
    color: var(--text-primary);
    border: 1px solid #E2E8F0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
}

.btn-vue:hover {
     background: #3aa876;
}

.btn-react:hover {
    background: #2980b9;
}

.btn-doc:hover {
    border-color: #CBD5E0;
    background-color: #FAFAFA;
}

/* 特性区域 */
.features-section {
    padding: 5rem 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: #FFFFFF;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid #EAECEF; /* 实体边框代替玻璃拟态 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: #E2E8F0;
}

.icon-box {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F8F9FA;
    width: 56px;
    height: 56px;
    border-radius: 10px;
    color: var(--primary-color);
}

.feature-title {
    font-family: 'Lato', sans-serif; /* 标题改回无衬线字体，除了大标题外更易读 */
    font-size: 1.25rem;
    margin-bottom: 0.8rem;
    color: var(--text-primary);
    font-weight: 700;
}

.feature-desc {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
}

/* 底部 */
footer {
    text-align: center;
    padding: 3rem 20px;
    margin-top: 4rem;
    border-top: 1px solid #EAECEF;
    background: #FFFFFF;
}

.footer p {
    color: #9CA3AF;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.footer a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.2s;
}

.footer a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2.8rem;
    }
    
    .subtitle {
        font-size: 1.1rem;
    }
    
    nav {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        gap: 1.5rem;
    }
}
</style>

<div class="watercolor-splash splash-1"></div>
<div class="watercolor-splash splash-2"></div>
<div class="watercolor-splash splash-3"></div>

<nav>
    <a href="#" class="logo">
        <div class="logo-mark">W</div>
        WaterColor UI
    </a>
    <div class="nav-links">
        <a href="../vue/" class="nav-link">Vue 组件</a>
        <a href="../react/" class="nav-link">React 组件</a>
        <a href="./components/" class="nav-link">文档中心</a>
    </div>
    <a href="https://github.com/zeturn/WaterColor-UI" class="gh-link" target="_blank">
        <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        GitHub
    </a>
</nav>

<div class="hero">
    <h1>Coding like <br><span>WaterColor</span> Painting</h1>
    <p class="subtitle">
        不仅仅是 UI 组件库，更是一种优雅的开发体验。<br>
        融合艺术美感与现代技术栈，为 Vue 3 和 React 开发者精心打造。
    </p>
    <div class="cta-buttons">
        <a href="../vue/" class="btn btn-vue">Vue 3 文档</a>
        <a href="../react/" class="btn btn-react">React 文档</a>
        <a href="./components/" class="btn btn-doc">设计指南</a>
    </div>
</div>

<div class="features-section">
    <div class="features-grid">
        <div class="feature-card">
            <div class="icon-box">🎨</div>
            <h3 class="feature-title">艺术级设计</h3>
            <p class="feature-desc">独特的水彩设计语言，摆脱千篇一律的 Material 或 Ant Design 风格，让您的应用脱颖而出。</p>
        </div>
        <div class="feature-card">
            <div class="icon-box">⚡</div>
            <h3 class="feature-title">双栈支持</h3>
            <p class="feature-desc">使用同一套设计理念，同时支持 Vue 3 和 React。无论您使用哪个框架，体验始终如一。</p>
        </div>
        <div class="feature-card">
            <div class="icon-box">🛡️</div>
            <h3 class="feature-title">TypeScript 全覆盖</h3>
            <p class="feature-desc">完全使用 TypeScript 编写，提供完整的类型定义文件，让开发过程更加智能、安全。</p>
        </div>
        <div class="feature-card">
            <div class="icon-box">🧩</div>
            <h3 class="feature-title">轻量模块化</h3>
            <p class="feature-desc">支持按需加载，Tree-shaking 友好，确保您的应用体积保持轻盈，加载速度飞快。</p>
        </div>
        <div class="feature-card">
            <div class="icon-box">♿</div>
            <h3 class="feature-title">无障碍访问</h3>
            <p class="feature-desc">遵循 WAI-ARIA 标准，确保所有组件对屏幕阅读器友好，让每个人都能使用您的产品。</p>
        </div>
        <div class="feature-card">
            <div class="icon-box">🌙</div>
            <h3 class="feature-title">主题定制</h3>
            <p class="feature-desc">内置强大的主题系统，支持深色模式以及精细的 Design Tokens 定制，满足品牌化需求。</p>
        </div>
    </div>
</div>

<footer class="footer">
    <p>© 2024 WaterColor UI. Released under the MIT License.</p>
    <p>Made with ❤️ by <a href="https://github.com/zeturn" target="_blank">Zeturn</a></p>
</footer>

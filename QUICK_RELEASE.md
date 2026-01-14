# 🚀 快速发布新版本

## 最简单的发布方式（推荐）

```bash
# 1. 更新版本号（自动更新 package.json）
npm version patch  # 小更新：1.0.1 -> 1.0.2
# 或
npm version minor  # 新功能：1.0.1 -> 1.1.0
# 或
npm version major  # 重大更新：1.0.1 -> 2.0.0

# 2. 更新 CHANGELOG.md（手动编辑添加更新内容）
vim CHANGELOG.md

# 3. 提交更改
git add .
git commit -m "chore: release v1.0.2"

# 4. 推送标签（这会触发自动发布）
git push origin main --tags
```

## 自动发布会做什么？

推送标签后，GitHub Actions 会自动：

1. ✅ 运行代码检查和测试
2. ✅ 构建项目
3. ✅ 发布到 GitHub Packages（`@zeturn/watercolor-ui`）
4. ✅ 发布到 npm（`watercolor-ui`，需要配置 NPM_TOKEN）
5. ✅ 创建 GitHub Release

## 查看发布状态

访问：https://github.com/zeturn/watercolor/actions

## 需要配置的 Secret（仅首次）

### 发布到 npm（可选）

1. 前往 [npmjs.com](https://www.npmjs.com/settings/YOUR_USERNAME/tokens)
2. 创建 "Automation" 类型的 token
3. 在 GitHub 仓库设置 Secret：
   - 进入：https://github.com/zeturn/watercolor/settings/secrets/actions
   - 新建 Secret，名称：`NPM_TOKEN`
   - 值：你的 npm token

### 发布到 GitHub Packages

无需配置，`GITHUB_TOKEN` 自动提供 ✅

## 用户如何安装？

### 从 npm 安装（推荐）
```bash
npm install watercolor-ui
```

### 从 GitHub Packages 安装
```bash
# 配置 .npmrc
echo "@zeturn:registry=https://npm.pkg.github.com" >> .npmrc

# 安装
npm install @zeturn/watercolor-ui
```

## 详细文档

查看 [PUBLISHING.md](PUBLISHING.md) 了解完整的发布指南。

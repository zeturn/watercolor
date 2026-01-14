# 发布指南

本文档介绍如何将 Watercolor UI 发布到 npm 和 GitHub Packages。

## 📦 自动发布（推荐）

### 使用 GitHub Actions 自动发布

项目已配置 GitHub Actions 自动发布工作流，当推送版本标签时会自动触发发布。

#### 发布步骤

1. **更新版本号和 CHANGELOG**

```bash
# 更新版本号（选择其一）
npm version patch  # 1.0.1 -> 1.0.2
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.0.1 -> 2.0.0

# 或手动编辑 package.json 和 CHANGELOG.md
```

2. **提交更改**

```bash
git add .
git commit -m "chore: release v1.0.2"
```

3. **创建并推送标签**

```bash
# 创建标签（与 package.json 中的版本一致）
git tag v1.0.2

# 推送代码和标签
git push origin main
git push origin v1.0.2
```

4. **自动发布**

推送标签后，GitHub Actions 会自动：
- ✅ 运行测试
- ✅ 构建项目
- ✅ 发布到 GitHub Packages
- ✅ 发布到 npm（需要配置 NPM_TOKEN）
- ✅ 创建 GitHub Release

### 查看发布状态

访问项目的 Actions 页面查看发布进度：
https://github.com/zeturn/watercolor/actions

## 🔧 配置 GitHub Secrets

### 发布到 npm（可选）

如果需要同时发布到 npm，需要配置 NPM_TOKEN：

1. 在 [npmjs.com](https://www.npmjs.com) 创建访问令牌
2. 进入仓库的 Settings > Secrets and variables > Actions
3. 创建名为 `NPM_TOKEN` 的 secret
4. 粘贴你的 npm access token

### 发布到 GitHub Packages（自动）

GitHub Packages 使用 `GITHUB_TOKEN`，这是自动提供的，无需手动配置。

## 📥 从 GitHub Packages 安装

### 配置 npm 客户端

用户需要配置 `.npmrc` 文件来从 GitHub Packages 安装：

```bash
# 在项目根目录或用户目录创建 .npmrc 文件
echo "@zeturn:registry=https://npm.pkg.github.com" >> .npmrc
```

### 使用 Personal Access Token

```bash
# 创建 GitHub Personal Access Token (需要 read:packages 权限)
# 然后配置认证
npm login --scope=@zeturn --registry=https://npm.pkg.github.com
```

或者在 `.npmrc` 中添加：

```
@zeturn:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 安装包

```bash
npm install @zeturn/watercolor-ui
```

## 🚀 手动发布

如果需要手动发布，可以按照以下步骤操作：

### 发布到 GitHub Packages

```bash
# 1. 构建项目
npm run build

# 2. 修改 package.json，添加作用域和发布配置
# 临时修改 "name": "watercolor-ui" 为 "name": "@zeturn/watercolor-ui"
# 添加 "publishConfig": { "registry": "https://npm.pkg.github.com" }

# 3. 登录 GitHub Packages
npm login --scope=@zeturn --registry=https://npm.pkg.github.com
# Username: 你的GitHub用户名
# Password: 你的GitHub Personal Access Token
# Email: 你的邮箱

# 4. 发布
npm publish

# 5. 恢复 package.json 的修改
```

### 发布到 npm

```bash
# 1. 构建项目
npm run build

# 2. 登录 npm
npm login

# 3. 发布
npm publish

# 或使用项目脚本
npm run release:patch  # 补丁版本
npm run release:minor  # 次要版本
npm run release:major  # 主要版本
```

## 📋 发布检查清单

在发布前，确保完成以下检查：

- [ ] 所有测试通过 `npm test`
- [ ] 代码检查通过 `npm run lint`
- [ ] 构建成功 `npm run build`
- [ ] 发布检查通过 `npm run check-publish`
- [ ] CHANGELOG.md 已更新
- [ ] package.json 版本号已更新
- [ ] README.md 文档是最新的
- [ ] 所有必需文件包含在 `files` 字段中
- [ ] Git 工作区是干净的（无未提交的更改）

## 🔍 验证发布

### 验证 GitHub Packages

```bash
# 查看包信息
npm view @zeturn/watercolor-ui --registry=https://npm.pkg.github.com

# 查看特定版本
npm view @zeturn/watercolor-ui@1.0.1 --registry=https://npm.pkg.github.com
```

访问包页面：
https://github.com/zeturn/watercolor/packages

### 验证 npm

```bash
# 查看包信息
npm view watercolor-ui

# 查看特定版本
npm view watercolor-ui@1.0.1
```

访问包页面：
https://www.npmjs.com/package/watercolor-ui

## 🛠️ 故障排除

### 发布失败：权限不足

确保：
- GitHub Token 有 `write:packages` 权限
- npm Token 有发布权限
- 你是仓库的所有者或协作者

### 发布失败：版本已存在

```bash
# 增加版本号
npm version patch
git push && git push --tags
```

### 无法从 GitHub Packages 安装

确保：
- 已正确配置 `.npmrc`
- GitHub Token 有 `read:packages` 权限
- 包名包含正确的作用域 `@zeturn/watercolor-ui`

## 📚 相关链接

- [GitHub Packages 文档](https://docs.github.com/en/packages)
- [npm 发布文档](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [语义化版本](https://semver.org/lang/zh-CN/)

## 🎯 版本命名规范

遵循语义化版本（Semantic Versioning）：

- **主版本号（MAJOR）**: 不兼容的 API 修改
- **次版本号（MINOR）**: 向下兼容的功能性新增
- **修订号（PATCH）**: 向下兼容的问题修正

示例：
- `v1.0.0` -> `v1.0.1` (bug 修复)
- `v1.0.1` -> `v1.1.0` (新功能)
- `v1.1.0` -> `v2.0.0` (破坏性更改)

# 🚀 CI 自动发布配置指南

## ✅ 当前状态

- ✅ GitHub Actions 工作流已配置 (`.github/workflows/publish.yml`)
- ✅ 发布脚本已创建 (`release.sh`)
- ⏳ **需要配置 NPM_TOKEN**

## 🔧 立即配置（3个步骤）

### 步骤 1: 获取 npm Access Token

1. **访问 npm tokens 页面**
   ```
   https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   ```
   或直接访问: https://www.npmjs.com/settings/tokens

2. **创建新 Token**
   - 点击 "Generate New Token"
   - 选择 "**Automation**" 类型（重要！）
   - Token 名称可以写: `watercolor-ui-ci`
   - 复制生成的 token（类似: `npm_xxxxxxxxxxxxxxxxxx`）
   
   ⚠️ **重要**: Token 只显示一次，请立即复制保存！

### 步骤 2: 在 GitHub 添加 Secret

1. **打开仓库 Secrets 设置**
   ```
   https://github.com/zeturn/watercolor/settings/secrets/actions/new
   ```

2. **添加 Secret**
   - Name: `NPM_TOKEN` （必须完全一致）
   - Secret: 粘贴刚才复制的 npm token
   - 点击 "Add secret"

3. **验证 Secret 已添加**
   - 访问: https://github.com/zeturn/watercolor/settings/secrets/actions
   - 应该能看到 `NPM_TOKEN` 在列表中

### 步骤 3: 发布新版本

配置完成后，你可以用以下任一方式发布：

#### 方式 A: 使用发布脚本（推荐）

```bash
# 补丁版本 (1.0.1 -> 1.0.2)
./release.sh patch

# 次要版本 (1.0.1 -> 1.1.0)
./release.sh minor

# 主要版本 (1.0.1 -> 2.0.0)
./release.sh major
```

脚本会自动：
- ✅ 检查工作区状态
- ✅ 更新版本号
- ✅ 提示你更新 CHANGELOG
- ✅ 提交更改
- ✅ 创建标签
- ✅ 推送到 GitHub
- ✅ 触发自动发布

#### 方式 B: 手动命令

```bash
# 1. 更新版本号
npm version patch  # 或 minor/major

# 2. 编辑 CHANGELOG.md
vim CHANGELOG.md

# 3. 提交更改
git add package.json CHANGELOG.md
git commit -m "chore: release v1.0.2"

# 4. 推送（会触发 CI）
git push origin main --tags
```

## 🔍 验证发布

### 查看 CI 运行状态
访问: https://github.com/zeturn/watercolor/actions

你会看到 "Publish to GitHub Packages and npm" 工作流正在运行。

### 发布完成后

大约 3-5 分钟后，你的包会出现在：

1. **npm**
   ```bash
   npm view watercolor-ui
   ```
   网页: https://www.npmjs.com/package/watercolor-ui

2. **GitHub Packages**
   ```bash
   npm view @zeturn/watercolor-ui --registry=https://npm.pkg.github.com
   ```
   网页: https://github.com/zeturn/watercolor/packages

3. **GitHub Release**
   网页: https://github.com/zeturn/watercolor/releases

## 🎯 快速测试

配置 NPM_TOKEN 后，立即测试发布：

```bash
# 1. 运行发布脚本
./release.sh patch

# 2. 等待 3-5 分钟

# 3. 检查 npm
npm view watercolor-ui version

# 应该显示新版本号 1.0.2
```

## ❓ 常见问题

### Q: NPM_TOKEN 在哪里获取？
A: https://www.npmjs.com/settings/tokens → Generate New Token → 选择 "Automation"

### Q: 为什么选择 "Automation" 类型？
A: 这种类型的 token 适合 CI/CD 使用，且有更长的有效期。

### Q: 如果忘记添加 NPM_TOKEN 会怎样？
A: CI 会发布到 GitHub Packages，但跳过 npm 发布（工作流有 `continue-on-error: true`）

### Q: 可以只发布到 GitHub Packages 吗？
A: 可以！不配置 NPM_TOKEN 的话，就只会发布到 GitHub Packages。

### Q: 如何回滚版本？
A: npm 不支持删除已发布的版本。建议发布新的修复版本。

## 📚 相关文档

- [完整发布指南](PUBLISHING.md)
- [快速发布指南](QUICK_RELEASE.md)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [npm tokens 文档](https://docs.npmjs.com/about-access-tokens)

---

**配置 NPM_TOKEN 后，你就可以一键发布了！** 🎉

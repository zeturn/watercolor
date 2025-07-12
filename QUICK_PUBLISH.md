# 🚀 Watercolor UI 快速发布指南

## 📦 一键发布

### 自动发布（推荐）
```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm run release:patch

# 次要版本 (1.0.0 -> 1.1.0)
npm run release:minor

# 主要版本 (1.0.0 -> 2.0.0)
npm run release:major
```

## 🔧 手动发布步骤

### 1. 准备工作
```bash
# 登录npm（如果未登录）
npm login

# 检查当前状态
npm run check-publish
```

### 2. 更新版本号
```bash
# 补丁版本
npm version patch

# 次要版本
npm version minor

# 主要版本
npm version major
```

### 3. 构建和检查
```bash
# 构建项目
npm run build

# 检查发布文件
npm run check-publish

# 预览打包内容
npm pack
```

### 4. 发布
```bash
# 发布到npm
npm publish

# 推送到GitHub
git push --follow-tags
```

## 📋 发布清单

### ✅ 必要文件
- [x] `dist/watercolor-ui.css` - 样式文件
- [x] `dist/watercolor-ui.es.js` - ES模块
- [x] `dist/watercolor-ui.umd.js` - UMD模块
- [x] `dist/index.d.ts` - TypeScript类型定义
- [x] `README.md` - 文档
- [x] `package.json` - 包配置
- [x] `.npmignore` - 排除文件配置

### 📦 包信息
- **包名**: `watercolor-ui`
- **入口文件**: `dist/watercolor-ui.umd.js`
- **ES模块**: `dist/watercolor-ui.es.js`
- **类型定义**: `dist/index.d.ts`
- **样式文件**: `dist/watercolor-ui.css`

## 🎯 发布后验证

### 1. 检查npm页面
访问: https://www.npmjs.com/package/watercolor-ui

### 2. 测试安装
```bash
# 创建测试目录
mkdir test-install && cd test-install

# 安装包
npm install watercolor-ui

# 测试导入
node -e "console.log(require('watercolor-ui'))"
```

### 3. 更新文档
- [ ] 更新GitHub README
- [ ] 更新官网文档
- [ ] 发布更新日志

## 🚨 常见问题

### 版本已存在
```bash
npm version patch --force
```

### 未登录npm
```bash
npm login
```

### 权限不足
- 确保是包的维护者
- 联系包所有者添加权限

### 发布失败
```bash
# 清理缓存
npm cache clean --force

# 重新构建
npm run build

# 重新发布
npm publish
```

## 📞 支持

如果遇到问题，请联系：
- 邮箱: support@watercolor-ui.dev
- GitHub Issues: https://github.com/zeturn/watercolor/issues 
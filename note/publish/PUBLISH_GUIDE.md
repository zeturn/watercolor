# Watercolor UI 发布指南

## 📦 发布前准备

### 1. 检查必要文件
```bash
npm run check-publish
```

### 2. 确保已登录npm
```bash
npm login
```

### 3. 检查当前版本
```bash
npm version
```

## 🚀 发布步骤

### 1. 更新版本号
根据更新类型选择合适的版本号：

```bash
# 补丁版本 (1.0.0 -> 1.0.1) - 修复bug
npm version patch

# 次要版本 (1.0.0 -> 1.1.0) - 新功能
npm version minor

# 主要版本 (1.0.0 -> 2.0.0) - 破坏性更改
npm version major
```

### 2. 预览打包内容
```bash
npm pack
```
这会创建一个 `.tgz` 文件，可以解压查看将要发布的内容。

### 3. 发布到npm
```bash
npm publish
```

### 4. 发布到GitHub (可选)
```bash
git push --follow-tags
```

## 📋 发布清单

### 必要文件
- ✅ `dist/watercolor-ui.css` - 样式文件
- ✅ `dist/watercolor-ui.es.js` - ES模块
- ✅ `dist/watercolor-ui.umd.js` - UMD模块
- ✅ `dist/index.d.ts` - TypeScript类型定义
- ✅ `README.md` - 文档
- ✅ `package.json` - 包配置
- ✅ `.npmignore` - 排除文件配置

### 包信息
- **包名**: `watercolor-ui`
- **版本**: 当前版本号
- **入口文件**: `dist/watercolor-ui.umd.js`
- **ES模块**: `dist/watercolor-ui.es.js`
- **类型定义**: `dist/index.d.ts`
- **样式文件**: `dist/watercolor-ui.css`

## 🔧 故障排除

### 常见问题

1. **版本已存在**
   ```bash
   npm version patch --force
   ```

2. **未登录npm**
   ```bash
   npm login
   ```

3. **权限不足**
   - 确保是包的维护者
   - 联系包所有者添加权限

4. **发布失败**
   ```bash
   # 清理缓存
   npm cache clean --force
   
   # 重新构建
   npm run build
   
   # 重新发布
   npm publish
   ```

## 📊 发布后验证

### 1. 检查npm页面
访问: https://www.npmjs.com/package/watercolor-ui

### 2. 测试安装
```bash
# 创建测试目录
mkdir test-install
cd test-install

# 安装包
npm install watercolor-ui

# 测试导入
node -e "console.log(require('watercolor-ui'))"
```

### 3. 更新文档
- 更新GitHub README
- 更新官网文档
- 发布更新日志

## 🎯 最佳实践

1. **版本管理**
   - 使用语义化版本号
   - 在发布前测试所有功能
   - 更新CHANGELOG.md

2. **质量保证**
   - 运行所有测试: `npm test`
   - 检查代码质量: `npm run lint`
   - 构建测试: `npm run build`

3. **文档更新**
   - 更新README.md
   - 更新组件文档
   - 更新示例代码

4. **发布后**
   - 监控下载量
   - 关注用户反馈
   - 及时修复问题

## 📞 支持

如果遇到发布问题，请联系：
- 邮箱: support@watercolor-ui.dev
- GitHub Issues: https://github.com/zeturn/watercolor/issues 
# WatercolorUI Landing Page 部署指南

## 自动部署（推荐）

### 使用 GitHub Actions

1. 确保仓库已启用 GitHub Pages
   - 进入仓库设置 → Pages
   - Source 选择 "GitHub Actions"

2. 推送代码到 main 分支
   ```bash
   git add .
   git commit -m "Add landing page"
   git push origin main
   ```

3. 查看部署状态
   - 进入 Actions 标签页查看工作流执行状态
   - 部署完成后访问 `https://your-username.github.io/watercolor/`

## 手动部署

### 本地构建

1. 进入 landing-page 目录
   ```bash
   cd landing-page
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 构建项目
   ```bash
   npm run build
   ```

4. 检查构建结果
   ```bash
   ls dist/
   ```

### 部署到 GitHub Pages

1. 将 `dist` 目录中的所有文件复制到仓库根目录
2. 提交并推送更改
   ```bash
   git add .
   git commit -m "Deploy landing page"
   git push origin main
   ```

## 目录结构

部署后的目录结构应该是：

```
watercolor/
├── index.html          # Landing page 入口
├── assets/             # 静态资源
├── react/              # React Storybook
├── vue/                # Vue Storybook
└── ...                 # 其他文件
```

## 验证部署

1. 访问 `https://your-username.github.io/watercolor/`
2. 检查页面是否正常加载
3. 测试导航链接是否正常工作
4. 验证响应式设计在不同设备上的表现

## 故障排除

### 页面无法访问
- 检查 GitHub Pages 是否已启用
- 确认部署分支和目录设置正确
- 查看 Actions 日志是否有错误

### 样式或功能异常
- 检查浏览器控制台是否有错误
- 确认所有静态资源路径正确
- 验证 WatercolorUI 组件是否正确导入

### 构建失败
- 检查 Node.js 版本（需要 16+）
- 确认所有依赖已正确安装
- 查看构建日志中的具体错误信息 
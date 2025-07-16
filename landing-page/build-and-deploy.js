#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始构建 WatercolorUI Landing Page...');

try {
  // 1. 安装依赖
  console.log('📦 安装依赖...');
  execSync('npm install', { stdio: 'inherit' });

  // 2. 构建项目
  console.log('🔨 构建项目...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. 检查构建结果
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('构建失败：dist 目录不存在');
  }

  const files = fs.readdirSync(distPath);
  if (files.length === 0) {
    throw new Error('构建失败：dist 目录为空');
  }

  console.log('✅ 构建成功！');
  console.log('📁 构建文件：', files.join(', '));
  console.log('');
  console.log('🎯 部署说明：');
  console.log('1. 将 dist 目录中的所有文件复制到 GitHub Pages 的根目录');
  console.log('2. 确保 index.html 在根目录中');
  console.log('3. 访问 https://beansdesign.github.io/watercolor/ 查看效果');
  console.log('');
  console.log('💡 提示：如果使用 GitHub Actions 自动部署，可以配置工作流来自动构建和部署此页面');

} catch (error) {
  console.error('❌ 构建失败：', error.message);
  process.exit(1);
} 
#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 开始部署 WatercolorUI Landing Page...');

const sourceDir = path.join(__dirname, 'landing-page/dist');
const targetDir = __dirname;

async function deploy() {
  try {
    // 检查源目录是否存在
    if (!fs.existsSync(sourceDir)) {
      throw new Error('构建目录不存在，请先运行 npm run build');
    }

    // 备份现有的 index.html（如果存在）
    const existingIndex = path.join(targetDir, 'index.html');
    if (fs.existsSync(existingIndex)) {
      const backupPath = path.join(targetDir, 'index.html.backup');
      await fs.copy(existingIndex, backupPath);
      console.log('📋 已备份现有的 index.html');
    }

    // 复制所有文件到根目录
    await fs.copy(sourceDir, targetDir, { overwrite: true });
    console.log('✅ 文件复制完成');

    // 检查部署结果
    const deployedFiles = fs.readdirSync(targetDir);
    const hasIndexHtml = deployedFiles.includes('index.html');
    const hasAssets = deployedFiles.includes('assets');

    if (!hasIndexHtml) {
      throw new Error('部署失败：index.html 文件不存在');
    }

    if (!hasAssets) {
      throw new Error('部署失败：assets 目录不存在');
    }

    console.log('🎯 部署成功！');
    console.log('📁 部署的文件：', deployedFiles.filter(f => f !== 'index.html.backup').join(', '));
    console.log('');
    console.log('🌐 访问地址：https://beansdesign.github.io/watercolor/');
    console.log('');
    console.log('💡 提示：');
    console.log('- 确保 GitHub Pages 已启用');
    console.log('- 推送更改到远程仓库');
    console.log('- 等待几分钟让 GitHub Pages 更新');

  } catch (error) {
    console.error('❌ 部署失败：', error.message);
    process.exit(1);
  }
}

deploy(); 
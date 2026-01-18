#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

console.log('🔍 检查发布文件...')

// 检查必要的文件
const requiredFiles = [
  'packages/react/dist/watercolor-react.css',
  'packages/react/dist/watercolor-react.es.js',
  'packages/react/dist/watercolor-react.umd.js',
  'packages/react/dist/index.d.ts',
  'packages/react/package.json',
  
  'packages/vue/dist/watercolor-vue.css',
  'packages/vue/dist/watercolor-vue.es.js',
  'packages/vue/dist/watercolor-vue.umd.js',
  'packages/vue/dist/index.d.ts',
  'packages/vue/package.json',
  
  'packages/core/dist/core.es.js',
  'packages/core/dist/core.umd.js',
  'packages/core/package.json',

  'packages/watercolor-ui/package.json',
  'packages/watercolor-ui/scripts/installer.js',
  'packages/watercolor-ui/scripts/postinstall.js',
  'packages/watercolor-ui/bin/watercolor-ui.js',
  'packages/watercolor-ui/README.md',

  'README.md',
  'package.json'
]

const missingFiles = []

for (const file of requiredFiles) {
  const filePath = path.join(rootDir, file)
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file)
  }
}

if (missingFiles.length > 0) {
  console.error('❌ 缺少以下必要文件:')
  missingFiles.forEach(file => console.error(`  - ${file}`))
  process.exit(1)
}

// 检查package.json中的必要字段
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'))
const requiredFields = ['name', 'version', 'description', 'main', 'module', 'types', 'files']

const missingFields = requiredFields.filter(field => !packageJson[field])

if (missingFields.length > 0) {
  console.error('❌ package.json缺少以下字段:')
  missingFields.forEach(field => console.error(`  - ${field}`))
  process.exit(1)
}

// 检查文件大小
const distFiles = [
  { name: 'watercolor-ui.css', maxSize: 500 }, // 500KB
  { name: 'watercolor-ui.es.js', maxSize: 800 }, // 800KB
  { name: 'watercolor-ui.umd.js', maxSize: 600 }, // 600KB
  { name: 'watercolor-react.es.js', maxSize: 800 }, // 800KB
  { name: 'watercolor-react.umd.js', maxSize: 600 }, // 600KB
  { name: 'watercolor-vue.es.js', maxSize: 800 }, // 800KB
  { name: 'watercolor-vue.umd.js', maxSize: 600 } // 600KB
]

for (const file of distFiles) {
  const filePath = path.join(rootDir, 'dist', file.name)
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    const sizeInKB = stats.size / 1024
    if (sizeInKB > file.maxSize) {
      console.warn(`⚠️  ${file.name} 文件过大: ${sizeInKB.toFixed(2)}KB (建议 < ${file.maxSize}KB)`)
    }
  }
}

console.log('✅ 所有检查通过！')
console.log('📦 准备发布到npm...')
console.log('')
console.log('📋 发布清单:')
console.log('  - 主文件: dist/watercolor-ui.umd.js')
console.log('  - ES模块: dist/watercolor-ui.es.js')
console.log('  - 样式文件: dist/watercolor-ui.css')
console.log('  - 类型定义: dist/index.d.ts')
console.log('  - 文档: README.md')
console.log('')
console.log('🚀 运行以下命令发布:')
console.log('  npm publish')
console.log('')
console.log('💡 提示:')
console.log('  - 确保已登录npm: npm login')
console.log('  - 检查版本号: npm version patch/minor/major')
console.log('  - 预览打包内容: npm pack') 

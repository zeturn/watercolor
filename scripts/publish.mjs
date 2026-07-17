#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

console.log('🚀 Watercolor UI 发布脚本')
console.log('========================')

// 获取命令行参数
const args = process.argv.slice(2)
const versionType = args[0] || 'patch' // patch, minor, major

if (!['patch', 'minor', 'major'].includes(versionType)) {
  console.error('❌ 无效的版本类型。请使用: patch, minor, major')
  process.exit(1)
}

try {
  // 1. 检查当前状态
  console.log('\n📋 检查当前状态...')
  const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim()
  if (branch !== 'main') throw new Error(`Releases must start from main, received ${branch || '<detached>'}.`)
  const dirty = execSync('git status --porcelain', { encoding: 'utf8' }).trim()
  if (dirty) throw new Error('Working tree must be clean before release. Commit the intended changes first.')
  
  // 2. 运行测试
  console.log('\n🧪 运行测试...')
  execSync('npm test -- --run', { stdio: 'inherit' })
  
  // 3. 检查代码质量
  console.log('\n🔍 检查代码质量...')
  execSync('npm run lint', { stdio: 'inherit' })
  execSync('npm run typecheck', { stdio: 'inherit' })
  execSync('npm run audit:theme', { stdio: 'inherit' })
  execSync('npm run audit:composition', { stdio: 'inherit' })
  execSync('npm run audit:visual', { stdio: 'inherit' })
  execSync('npm run audit:api', { stdio: 'inherit' })
  execSync('npm run typecheck:public-api', { stdio: 'inherit' })
  
  // 4. 构建项目
  console.log('\n🔨 构建项目...')
  execSync('npm run build', { stdio: 'inherit' })
  
  // 5. 检查发布文件
  console.log('\n✅ 检查发布文件...')
  execSync('npm run check-publish', { stdio: 'inherit' })
  execSync('npm run test:package-theme', { stdio: 'inherit' })
  
  // 6. 更新版本号
  console.log(`\n📦 更新版本号 (${versionType})...`)
  execSync(`npm version ${versionType} --no-git-tag-version`, { stdio: 'inherit' })
  try {
    execSync(`npm version ${versionType} --workspaces --no-git-tag-version`, { stdio: 'inherit' })
  } catch (e) {
    console.warn('Workspace version update warning:', e.message)
  }

  // 7. 读取新的版本号
  const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'))
  const newVersion = packageJson.version
  
  console.log(`\n🎉 新版本: ${newVersion}`)
  
  // 8. 创建Git标签
  console.log('\n🏷️ 创建Git标签...')
  execSync('git add package.json package-lock.json packages/*/package.json', { stdio: 'inherit' })
  execSync(`git commit -m "chore: release v${newVersion}"`, { stdio: 'inherit' })
  execSync(`git tag v${newVersion}`, { stdio: 'inherit' })
  
  // 9. 发布到npm (由 GitHub Actions 接管)
  console.log('\n📤 触发 GitHub Actions 发布流程...')
  // execSync('npm publish --workspaces --access public', { stdio: 'inherit' })
  
  // 10. 推送到GitHub
  console.log('\n📤 推送到GitHub...')
  execSync('git push origin main', { stdio: 'inherit' })
  execSync('git push origin --tags', { stdio: 'inherit' })
  
  console.log('\n🎉 发布成功！')
  console.log(`📦 包名: watercolor-ui@${newVersion}`)
  console.log(`🌐 npm页面: https://www.npmjs.com/package/watercolor-ui`)
  console.log(`📚 文档: https://hollowdata.com`)
  
} catch (error) {
  console.error('\n❌ 发布失败:', error.message)
  console.log('\nSee note/发布与集成指南.md. Do not bypass the tagged release gate with a local npm publish.')
  process.exit(1)
}

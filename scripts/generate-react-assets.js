const fs = require('fs')
const path = require('path')

// 根目录根据当前脚本所处位置推断
const ROOT = path.resolve(__dirname, '..')
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components')
const STORY_DIR = path.join(ROOT, 'stories-react')
const TEST_DIR = path.join(ROOT, 'tests', 'components')

// 若目录不存在先创建
if (!fs.existsSync(STORY_DIR)) fs.mkdirSync(STORY_DIR)
// tests/components 已经存在，无需确认

/**
 * 生成 Storybook story 内容
 * @param {string} name 组件名
 */
function genStoryContent (name) {
  return `import ${name} from '@/components/${name}/${name}.jsx'

export default {
  title: 'Components/${name} (React)',
  component: ${name},
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}
`
}

/**
 * 生成 Vitest 基础测试内容
 * @param {string} name 组件名
 */
function genTestContent (name) {
  return `import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ${name} from '@/components/${name}/${name}.jsx'

// 该测试仅验证组件能够正常渲染（不抛异常）
describe('${name} (React)', () => {
  it('renders without crashing', () => {
    const { container } = render(<${name} />)
    expect(container.firstElementChild).toBeTruthy()
  })
})
`
}

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 遍历组件目录
 */
for (const dir of fs.readdirSync(COMPONENTS_DIR)) {
  const jsxPath = path.join(COMPONENTS_DIR, dir, `${dir}.jsx`)
  if (!fs.existsSync(jsxPath)) continue // 该文件夹不是 React 组件

  const componentName = pascalCase(dir)
  const storyPath = path.join(STORY_DIR, `${componentName}.stories.jsx`)
  if (!fs.existsSync(storyPath)) {
    fs.writeFileSync(storyPath, genStoryContent(componentName))
    console.log('生成 Story:', path.relative(ROOT, storyPath))
  }

  const testPath = path.join(TEST_DIR, `${componentName}React.test.jsx`)
  if (!fs.existsSync(testPath)) {
    fs.writeFileSync(testPath, genTestContent(componentName))
    console.log('生成测试 :', path.relative(ROOT, testPath))
  }
} 

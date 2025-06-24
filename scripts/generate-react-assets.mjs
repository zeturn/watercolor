import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, '..')
const COMPONENTS_DIR = path.join(ROOT, 'src', 'components')
const STORY_DIR = path.join(ROOT, 'stories-react')
const TEST_DIR = path.join(ROOT, 'tests', 'components')

if (!fs.existsSync(STORY_DIR)) fs.mkdirSync(STORY_DIR)

function genStoryContent(name) {
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

function genTestContent(name) {
  return `import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ${name} from '@/components/${name}/${name}.jsx'

describe('${name} (React)', () => {
  it('renders without crashing', () => {
    render(<${name} />)
    expect(true).toBe(true)
  })
})
`
}

function pascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

for (const dir of fs.readdirSync(COMPONENTS_DIR)) {
  const jsxPath = path.join(COMPONENTS_DIR, dir, `${dir}.jsx`)
  if (!fs.existsSync(jsxPath)) continue

  const componentName = pascalCase(dir)
  const storyPath = path.join(STORY_DIR, `${componentName}.stories.jsx`)
  if (!fs.existsSync(storyPath)) {
    fs.writeFileSync(storyPath, genStoryContent(componentName), 'utf8')
    console.log('生成 Story:', path.relative(ROOT, storyPath))
  }

  const testPath = path.join(TEST_DIR, `${componentName}React.test.jsx`)
  if (!fs.existsSync(testPath)) {
    fs.writeFileSync(testPath, genTestContent(componentName), 'utf8')
    console.log('生成测试 :', path.relative(ROOT, testPath))
  }
} 
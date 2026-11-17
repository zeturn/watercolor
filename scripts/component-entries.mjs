import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

export function componentEntries(framework) {
  const directory = path.join(root, 'packages', framework)
  const source = fs.readFileSync(path.join(root, 'packages/react/src/index.ts'), 'utf8')
  const publicTypes = fs.readFileSync(path.join(root, 'packages/react/index.d.ts'), 'utf8')
  const generated = path.join(directory, '.generated')
  fs.mkdirSync(generated, { recursive: true })
  const entry = { index: path.join(directory, 'src/index.ts') }
  const names = []
  for (const match of source.matchAll(/export\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g)) {
    for (const raw of match[1].split(',')) {
      const [original, alias] = raw.trim().split(/\s+as\s+/)
      const name = alias || original
      if (!name || original.startsWith('type ')) continue
      names.push(name)
      const target = framework === 'react' ? `../src/${match[2].replace(/^\.\//, '')}` : `@zeturn/watercolor-react/${name}`
      const imported = framework === 'react' ? original : name
      const code = `export { ${imported} as default, ${imported} as ${name} } from '${target}'\n`
      const file = path.join(generated, `${name}.js`)
      if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== code) fs.writeFileSync(file, code)
      entry[name] = file
    }
  }
  return {
    entry,
    declarations: {
      name: 'watercolor-public-component-types',
      closeBundle() {
        const dist = path.join(directory, 'dist')
        fs.mkdirSync(path.join(dist, 'entries'), { recursive: true })
        fs.writeFileSync(path.join(dist, 'index.d.ts'), framework === 'react' ? "export * from '../index.js'\n" : "export * from '@zeturn/watercolor-react'\n")
        for (const name of names) {
          const target = framework === 'react' ? '../../index.js' : `@zeturn/watercolor-react/${name}`
          let code = `export { ${name}, ${name} as default } from '${target}'\n`
          if (framework === 'next') code += `export type * from '${target}'\n`
          else if (publicTypes.includes(`interface ${name}Props `)) code += `export type { ${name}Props } from '${target}'\n`
          fs.writeFileSync(path.join(dist, 'entries', `${name}.d.ts`), code)
        }
      },
    },
  }
}

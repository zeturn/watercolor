import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { build } from 'vite'

const root = process.cwd()
const require = createRequire(path.join(root, 'package.json'))
const upstream = path.dirname(require.resolve('feather-icons/package.json'))
await build({ configFile: false, root, build: {
  emptyOutDir: true,
  lib: { entry: { index: path.join(root, 'src/index.ts'), legacy: path.join(root, 'src/legacy.ts') }, formats: ['es'],
    fileName: (_format, name) => name === 'index' ? 'watercolor-icons-feather.es.js' : 'legacy.js' },
  rollupOptions: { external: ['feather-icons'] },
} })
const dist = path.join(root, 'dist')
fs.copyFileSync(path.join(upstream, 'LICENSE'), path.join(dist, 'FEATHER-LICENSE'))
fs.writeFileSync(path.join(dist, 'index.d.ts'), 'export interface FeatherSvgOptions { width?: number; height?: number; strokeWidth?: number }\nexport declare function renderFeatherSvg(svg: string, options?: FeatherSvgOptions): string\n')
fs.writeFileSync(path.join(dist, 'legacy.d.ts'), "import type { FeatherSvgOptions } from './index.js'\n/** @deprecated Explicitly import an SVG subpath instead. */\nexport declare function getFeatherSvg(name: string, options?: FeatherSvgOptions): Promise<string>\n")
fs.mkdirSync(path.join(dist, 'icons'), { recursive: true })
const files = fs.readdirSync(path.join(upstream, 'dist/icons')).filter((file) => file.endsWith('.svg'))
for (const file of files) {
  const name = file.slice(0, -4).split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')
  const svg = fs.readFileSync(path.join(upstream, 'dist/icons', file), 'utf8')
  fs.writeFileSync(path.join(dist, 'icons', `${name}.js`), `const svg = ${JSON.stringify(svg)}; export { svg as default, svg as ${name} };\n`)
  fs.writeFileSync(path.join(dist, 'icons', `${name}.d.ts`), `declare const svg: string; export { svg as default, svg as ${name} };\n`)
}
console.log(`Feather: ${files.length} static SVG entries; legacy catalog is isolated at /legacy.`)

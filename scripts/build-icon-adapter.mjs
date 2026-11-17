import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { build } from 'vite'

const directory = process.cwd()
const pkg = JSON.parse(fs.readFileSync(path.join(directory, 'package.json'), 'utf8'))
const provider = pkg.name.match(/watercolor-icons-(.+)-react$/)?.[1]
const upstreams = { lucide: 'lucide-react', tabler: '@tabler/icons-react', heroicons: '@heroicons/react', phosphor: '@phosphor-icons/react' }
const upstream = upstreams[provider]
if (!upstream) throw new Error(`Unsupported icon adapter: ${pkg.name}`)
const require = createRequire(path.join(directory, 'package.json'))
const upstreamRoot = path.dirname(require.resolve(`${upstream}/package.json`))
const dist = path.join(directory, 'dist')

await build({
  configFile: false,
  root: directory,
  build: {
    emptyOutDir: true,
    lib: { entry: path.join(directory, 'src/index.ts'), formats: ['es'], fileName: () => path.basename(pkg.main) },
  },
})

const source = fs.readFileSync(path.join(directory, 'src/index.ts'), 'utf8')
fs.writeFileSync(path.join(dist, 'index.d.ts'),
  'export declare function createIconResolver<T>(icons: Readonly<Record<string, T>>): (name: string) => T | undefined\n\n' +
  source.slice(source.indexOf('export type AdapterIconProps')))

const manifest = {}
const pascal = (name) => name.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('')
function emit(name, specifier, symbol = 'default', publicName = name.split('/').at(-1)) {
  if (!/^[A-Za-z_$][\w$]*$/.test(publicName)) publicName = `Icon${publicName}`
  const destination = path.join(dist, 'icons', `${name}.js`)
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, `export { ${symbol} as default, ${symbol} as ${publicName} } from '${specifier}'\n`)
  const rootTypes = path.posix.relative(path.posix.dirname(`icons/${name}.d.ts`), 'index.js')
  fs.writeFileSync(destination.replace(/\.js$/, '.d.ts'),
    `import type { ForwardRefExoticComponent, RefAttributes } from 'react'\n` +
    `import type { AdapterIconProps } from '${rootTypes.startsWith('.') ? rootTypes : `./${rootTypes}`}'\n` +
    `declare const Icon: ForwardRefExoticComponent<AdapterIconProps & RefAttributes<SVGSVGElement>>\n` +
    `export { Icon as default, Icon as ${publicName} }\n`)
  manifest[name] = specifier
}

if (provider === 'lucide' || provider === 'tabler') {
  const relative = 'dist/esm/icons'
  for (const file of fs.readdirSync(path.join(upstreamRoot, relative)).sort()) {
    if (!file.endsWith('.mjs')) continue
    const stem = file.slice(0, -4)
    const name = provider === 'lucide' ? pascal(stem) : stem
    emit(name, `${upstream}/${relative}/${file}`)
  }
} else if (provider === 'heroicons') {
  for (const variant of ['24/outline', '24/solid', '20/solid', '16/solid']) {
    for (const file of fs.readdirSync(path.join(upstreamRoot, variant, 'esm')).sort()) {
      if (!file.endsWith('Icon.js')) continue
      const name = file.slice(0, -3)
      emit(`${variant}/${name}`, `${upstream}/${variant}/${name}`, 'default', name)
    }
  }
} else {
  for (const file of fs.readdirSync(path.join(upstreamRoot, 'dist/csr')).sort()) {
    if (!file.endsWith('.es.js')) continue
    const name = file.slice(0, -6)
    emit(name, `${upstream}/${name}`, name)
  }
}

if (!Object.keys(manifest).length) throw new Error(`No leaf icon modules found in ${upstream}`)
fs.writeFileSync(path.join(dist, 'icon-manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(`${pkg.name}: ${Object.keys(manifest).length} independent icon entries; root imports no catalog.`)

import fs from 'node:fs'
import path from 'node:path'
import { build } from 'vite'

const [root, mode] = process.argv.slice(2)
await build({
  root,
  configFile: false,
  logLevel: 'warn',
  build: { outDir: `dist/${mode}`, emptyOutDir: true },
  plugins: [{
    name: 'record-consumer-module-graph',
    generateBundle() {
      fs.writeFileSync(path.join(root, `modules-${mode}.json`), JSON.stringify([...this.getModuleIds()]))
    },
  }],
})

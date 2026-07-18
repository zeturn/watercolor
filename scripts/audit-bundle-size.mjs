#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

const root = process.cwd()
const budgets = [
  { file: 'packages/core/dist/core.es.js', gzipKb: 75 },
  { file: 'packages/react/dist/watercolor-react.es.js', gzipKb: 55 },
  { file: 'packages/react/dist/watercolor-react.css', gzipKb: 32 },
  { file: 'packages/vue/dist/watercolor-vue.es.js', gzipKb: 55 },
  { file: 'packages/vue/dist/watercolor-vue.css', gzipKb: 34 },
]

const results = budgets.map((budget) => {
  const absolute = path.join(root, budget.file)
  if (!fs.existsSync(absolute)) return { ...budget, missing: true }
  const raw = fs.readFileSync(absolute)
  const gzipKb = zlib.gzipSync(raw).length / 1024
  return { ...budget, actualGzipKb: Number(gzipKb.toFixed(2)) }
})

const failures = results.filter((result) => result.missing || result.actualGzipKb > result.gzipKb)
if (failures.length) {
  console.error(`Bundle size budget failed:\n${failures.map((result) => {
    if (result.missing) return `- ${result.file}: missing build artifact`
    return `- ${result.file}: ${result.actualGzipKb} KiB gzip > ${result.gzipKb} KiB budget`
  }).join('\n')}`)
  process.exit(1)
}

console.table(results.map((result) => ({
  file: result.file,
  gzip: `${result.actualGzipKb} KiB`,
  budget: `${result.gzipKb} KiB`,
})))
console.log('Bundle size budget OK.')


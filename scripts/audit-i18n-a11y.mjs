#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const scannedRoots = ['packages/react/src', 'packages/vue/src']
const errors = []

function walk(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) return walk(file)
    return file
  })
}

for (const scannedRoot of scannedRoots) {
  for (const file of walk(path.join(root, scannedRoot))) {
    if (!/\.(jsx?|tsx?|vue)$/.test(file)) continue
    const relative = path.relative(root, file)
    const lines = fs.readFileSync(file, 'utf8').split('\n')
    lines.forEach((line, index) => {
      if (/\baria-label\s*=\s*["'][^"']*[\u4e00-\u9fff]/.test(line)) {
        errors.push(`${relative}:${index + 1}: hardcoded Chinese aria-label`)
      }
      if (/\baria-label\s*=\s*{`[^`]*[\u4e00-\u9fff]/.test(line) || /\baria-label\s*=\s*"`[^`]*[\u4e00-\u9fff]/.test(line)) {
        errors.push(`${relative}:${index + 1}: hardcoded Chinese aria-label template`)
      }
      if (/\baria-label\s*=\s*{[^}]*["'`][^"'`]*[\u4e00-\u9fff]/.test(line)) {
        errors.push(`${relative}:${index + 1}: hardcoded Chinese aria-label expression`)
      }
    })
  }
}

if (errors.length) {
  console.error(`i18n/a11y audit failed:\n${errors.map((error) => `- ${error}`).join('\n')}`)
  process.exit(1)
}

console.log('i18n/a11y audit OK: no hardcoded Chinese aria-labels in React/Vue source.')


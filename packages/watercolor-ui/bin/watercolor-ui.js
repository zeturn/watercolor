#!/usr/bin/env node

const { runInstaller } = require('../scripts/installer')

const args = process.argv.slice(2)
const frameworkFlag = args.find(arg => arg.startsWith('--framework='))
const frameworkArgIndex = args.findIndex(arg => arg === '--framework')

let frameworkOverride = null
if (frameworkFlag) {
  frameworkOverride = frameworkFlag.split('=')[1]
} else if (frameworkArgIndex !== -1 && args[frameworkArgIndex + 1]) {
  frameworkOverride = args[frameworkArgIndex + 1]
}

runInstaller({ frameworkOverride, interactive: true }).catch(error => {
  console.warn('[watercolor-ui] Installer error:', error.message)
})

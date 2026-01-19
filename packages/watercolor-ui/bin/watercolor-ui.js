#!/usr/bin/env node

const { runInstaller } = require('../scripts/installer')

const args = process.argv.slice(2)
const frameworkFlag = args.find(arg => arg.startsWith('--framework='))
const frameworkArgIndex = args.findIndex(arg => arg === '--framework')
const iconsFlag = args.find(arg => arg.startsWith('--icons='))
const iconsArgIndex = args.findIndex(arg => arg === '--icons')

let frameworkOverride = null
if (frameworkFlag) {
  frameworkOverride = frameworkFlag.split('=')[1]
} else if (frameworkArgIndex !== -1 && args[frameworkArgIndex + 1]) {
  frameworkOverride = args[frameworkArgIndex + 1]
}

let iconOverride = null
if (iconsFlag) {
  iconOverride = iconsFlag.split('=')[1]
} else if (iconsArgIndex !== -1 && args[iconsArgIndex + 1]) {
  iconOverride = args[iconsArgIndex + 1]
}

runInstaller({ frameworkOverride, iconOverride, interactive: true }).catch(error => {
  console.warn('[watercolor-ui] Installer error:', error.message)
})

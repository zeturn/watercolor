const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')
const readline = require('readline')
const { version: WATERCOLOR_VERSION } = require('../package.json')

const watercolorPackage = name => `${name}@${WATERCOLOR_VERSION}`
const PACKAGE_CORE = watercolorPackage('@zeturn/watercolor-core')
const PACKAGE_REACT = watercolorPackage('@zeturn/watercolor-react')
const PACKAGE_VUE = watercolorPackage('@zeturn/watercolor-vue')
const ICON_PACKAGES = {
  feather: watercolorPackage('@zeturn/watercolor-icons-feather'),
  heroicons: {
    react: watercolorPackage('@zeturn/watercolor-icons-heroicons-react'),
    vue: watercolorPackage('@zeturn/watercolor-icons-heroicons-vue')
  },
  lucide: {
    react: watercolorPackage('@zeturn/watercolor-icons-lucide-react'),
    vue: watercolorPackage('@zeturn/watercolor-icons-lucide-vue')
  },
  phosphor: {
    react: watercolorPackage('@zeturn/watercolor-icons-phosphor-react'),
    vue: watercolorPackage('@zeturn/watercolor-icons-phosphor-vue')
  },
  tabler: {
    react: watercolorPackage('@zeturn/watercolor-icons-tabler-react'),
    vue: watercolorPackage('@zeturn/watercolor-icons-tabler-vue')
  }
}
const packageName = specifier => specifier.slice(0, specifier.lastIndexOf('@'))
const ROOT_PACKAGE_NAME = 'watercolor-ui-root'

function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent || ''
  if (userAgent.includes('pnpm')) return 'pnpm'
  if (userAgent.includes('yarn')) return 'yarn'
  return 'npm'
}

function readPackageJson(projectRoot) {
  const pkgPath = path.join(projectRoot, 'package.json')
  if (!fs.existsSync(pkgPath)) return null
  try {
    return JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  } catch (error) {
    console.warn('[watercolor-ui] Failed to read package.json:', error.message)
    return null
  }
}

function detectFramework(pkg) {
  if (!pkg) return null
  const deps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
    ...(pkg.peerDependencies || {})
  }

  const hasReact = Boolean(deps.react || deps['react-dom'] || deps[packageName(PACKAGE_REACT)])
  const hasVue = Boolean(deps.vue || deps[packageName(PACKAGE_VUE)])

  if (hasReact && hasVue) return 'both'
  if (hasReact) return 'react'
  if (hasVue) return 'vue'
  return null
}

function detectIconPack(pkg) {
  if (!pkg) return null
  const deps = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
    ...(pkg.peerDependencies || {})
  }

  const detected = []
  if (deps[packageName(ICON_PACKAGES.feather)]) detected.push('feather')
  if (deps[packageName(ICON_PACKAGES.heroicons.react)] || deps[packageName(ICON_PACKAGES.heroicons.vue)]) detected.push('heroicons')
  if (deps[packageName(ICON_PACKAGES.lucide.react)] || deps[packageName(ICON_PACKAGES.lucide.vue)]) detected.push('lucide')
  if (deps[packageName(ICON_PACKAGES.phosphor.react)] || deps[packageName(ICON_PACKAGES.phosphor.vue)]) detected.push('phosphor')
  if (deps[packageName(ICON_PACKAGES.tabler.react)] || deps[packageName(ICON_PACKAGES.tabler.vue)]) detected.push('tabler')

  if (detected.length === 1) return detected[0]
  return null
}

function normalizeFramework(value) {
  if (!value) return null
  const normalized = String(value).trim().toLowerCase()
  if (['react', 'vue', 'both'].includes(normalized)) return normalized
  if (['skip', 'none', 'false', '0'].includes(normalized)) return 'skip'
  return null
}

function normalizeIconPack(value) {
  if (!value) return null
  const normalized = String(value).trim().toLowerCase()
  if (['feather', 'heroicons', 'lucide', 'phosphor', 'tabler'].includes(normalized)) return normalized
  if (['skip', 'none', 'false', '0'].includes(normalized)) return 'none'
  return null
}

function promptFramework() {
  console.log('[watercolor-ui] Available UI packages:')
  console.log('  1) React (@zeturn/watercolor-react)')
  console.log('  2) Vue (@zeturn/watercolor-vue)')
  console.log('  3) Both (React + Vue)')
  console.log('  4) Skip')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = 'Select UI package (1-4 or react/vue/both/skip): '

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close()
      const trimmed = String(answer || '').trim()
      const mapped = {
        '1': 'react',
        '2': 'vue',
        '3': 'both',
        '4': 'skip'
      }[trimmed]
      const choice = normalizeFramework(mapped || trimmed)
      resolve(choice || 'skip')
    })
  })
}

function promptIconPack() {
  console.log('[watercolor-ui] Available icon packages:')
  console.log('  1) None')
  console.log('  2) Feather')
  console.log('  3) Heroicons')
  console.log('  4) Lucide')
  console.log('  5) Phosphor')
  console.log('  6) Tabler')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = 'Select icon pack (1-6 or none/feather/heroicons/lucide/phosphor/tabler): '

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close()
      const trimmed = String(answer || '').trim()
      const mapped = {
        '1': 'none',
        '2': 'feather',
        '3': 'heroicons',
        '4': 'lucide',
        '5': 'phosphor',
        '6': 'tabler'
      }[trimmed]
      const choice = normalizeIconPack(mapped || trimmed)
      resolve(choice || 'none')
    })
  })
}

function buildInstallCommand(pkgManager, packages) {
  if (pkgManager === 'pnpm') return { command: 'pnpm', args: ['add', ...packages] }
  if (pkgManager === 'yarn') return { command: 'yarn', args: ['add', ...packages] }
  return { command: 'npm', args: ['install', ...packages] }
}

function installPackages(projectRoot, packages) {
  if (packages.length === 0) return true
  const pkgManager = getPackageManager()
  const { command, args } = buildInstallCommand(pkgManager, packages)

  console.log(`[watercolor-ui] Installing with ${pkgManager}: ${packages.join(', ')}`)

  const result = spawnSync(command, args, {
    cwd: projectRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      WATERCOLOR_UI_SKIP_INSTALL: '1'
    }
  })

  return result.status === 0
}

async function resolveFramework({ frameworkOverride, projectRoot, interactive }) {
  const envChoice = normalizeFramework(frameworkOverride || process.env.WATERCOLOR_UI_FRAMEWORK)
  if (envChoice === 'skip') return 'skip'
  if (envChoice) return envChoice

  const pkg = readPackageJson(projectRoot)
  const detected = detectFramework(pkg)

  if (detected && detected !== 'both') return detected
  if (detected === 'both') {
    if (!interactive) return 'both'
    const choice = await promptFramework()
    return choice
  }

  if (!interactive) return 'skip'
  return await promptFramework()
}

async function resolveIconPack({ iconOverride, projectRoot, interactive }) {
  const envChoice = normalizeIconPack(iconOverride || process.env.WATERCOLOR_UI_ICONS)
  if (envChoice) return envChoice

  const pkg = readPackageJson(projectRoot)
  const detected = detectIconPack(pkg)

  if (detected) return detected
  if (!interactive) return 'none'
  return await promptIconPack()
}

function resolveIconPackages(iconPack, framework) {
  if (!iconPack || iconPack === 'none') return []
  if (iconPack === 'feather') return [ICON_PACKAGES.feather]

  const pack = ICON_PACKAGES[iconPack]
  if (!pack) return []

  if (framework === 'react') return [pack.react]
  if (framework === 'vue') return [pack.vue]
  if (framework === 'both') return [pack.react, pack.vue]
  return []
}

async function runInstaller({ frameworkOverride, iconOverride, interactive } = {}) {
  if (process.env.WATERCOLOR_UI_SKIP_INSTALL === '1') return

  const projectRoot = process.env.INIT_CWD || process.cwd()
  const pkg = readPackageJson(projectRoot)

  if (!pkg) {
    console.log('[watercolor-ui] No package.json found, skipping install.')
    return
  }

  if (pkg.name === ROOT_PACKAGE_NAME) {
    console.log('[watercolor-ui] Detected monorepo root, skipping install.')
    return
  }

  const isInteractive = typeof interactive === 'boolean'
    ? interactive
    : Boolean(process.stdin.isTTY && process.stdout.isTTY)

  const framework = await resolveFramework({
    frameworkOverride,
    projectRoot,
    interactive: isInteractive
  })

  if (!framework || framework === 'skip') {
    console.log('[watercolor-ui] Skipped installer. Set WATERCOLOR_UI_FRAMEWORK=react|vue|both to auto-install.')
    return
  }

  const packages = [PACKAGE_CORE]
  if (framework === 'react' || framework === 'both') packages.push(PACKAGE_REACT)
  if (framework === 'vue' || framework === 'both') packages.push(PACKAGE_VUE)

  const iconPack = await resolveIconPack({
    iconOverride: iconOverride || process.env.WATERCOLOR_UI_ICONS,
    projectRoot,
    interactive: isInteractive
  })

  packages.push(...resolveIconPackages(iconPack, framework))

  const ok = installPackages(projectRoot, packages)
  if (!ok) {
    console.warn('[watercolor-ui] Installation failed. Please install manually:')
    console.warn(`  npm install ${packages.join(' ')}`)
  }
}

module.exports = {
  runInstaller
}

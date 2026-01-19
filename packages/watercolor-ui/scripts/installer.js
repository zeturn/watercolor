const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')
const readline = require('readline')

const PACKAGE_CORE = '@zeturn/watercolor-core'
const PACKAGE_REACT = '@zeturn/watercolor-react'
const PACKAGE_VUE = '@zeturn/watercolor-vue'
const ICON_PACKAGES = {
  feather: '@zeturn/watercolor-icons-feather',
  heroicons: {
    react: '@zeturn/watercolor-icons-heroicons-react',
    vue: '@zeturn/watercolor-icons-heroicons-vue'
  },
  lucide: {
    react: '@zeturn/watercolor-icons-lucide-react',
    vue: '@zeturn/watercolor-icons-lucide-vue'
  },
  phosphor: {
    react: '@zeturn/watercolor-icons-phosphor-react',
    vue: '@zeturn/watercolor-icons-phosphor-vue'
  },
  tabler: {
    react: '@zeturn/watercolor-icons-tabler-react',
    vue: '@zeturn/watercolor-icons-tabler-vue'
  }
}
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

  const hasReact = Boolean(deps.react || deps['react-dom'] || deps[PACKAGE_REACT])
  const hasVue = Boolean(deps.vue || deps[PACKAGE_VUE])

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
  if (deps[ICON_PACKAGES.feather]) detected.push('feather')
  if (deps[ICON_PACKAGES.heroicons.react] || deps[ICON_PACKAGES.heroicons.vue]) detected.push('heroicons')
  if (deps[ICON_PACKAGES.lucide.react] || deps[ICON_PACKAGES.lucide.vue]) detected.push('lucide')
  if (deps[ICON_PACKAGES.phosphor.react] || deps[ICON_PACKAGES.phosphor.vue]) detected.push('phosphor')
  if (deps[ICON_PACKAGES.tabler.react] || deps[ICON_PACKAGES.tabler.vue]) detected.push('tabler')

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
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = 'Select framework to install (react/vue/both/skip): '

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close()
      const choice = normalizeFramework(answer)
      resolve(choice || 'skip')
    })
  })
}

function promptIconPack() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const question = 'Select icon pack (none/feather/heroicons/lucide/phosphor/tabler): '

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close()
      const choice = normalizeIconPack(answer)
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

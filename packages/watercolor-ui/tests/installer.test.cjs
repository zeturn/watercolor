const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { spawnSync } = require('node:child_process')
const { buildInstallPlan, writeConfiguration } = require('../scripts/installer')

test('none installs core and React with no adapter', () => {
  const plan = buildInstallPlan('react', 'none')
  assert.equal(plan.packages.length, 2)
  assert.equal(plan.iconProvider, 'none')
  assert.ok(plan.packages.every((name) => !name.includes('icons-')))
})

test('a provider selects exactly its own adapter', () => {
  const plan = buildInstallPlan('react', 'lucide')
  assert.equal(plan.packages.length, 3)
  assert.equal(plan.packages.filter((name) => name.includes('icons-')).length, 1)
  assert.match(plan.packages[2], /watercolor-icons-lucide-react@/)
})

test('configuration records explicit imports and preserves other settings', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-installer-'))
  try {
    fs.writeFileSync(path.join(directory, 'watercolor.config.json'), '{"theme":"brand"}')
    writeConfiguration(directory, buildInstallPlan('react', 'lucide'))
    const result = JSON.parse(fs.readFileSync(path.join(directory, 'watercolor.config.json'), 'utf8'))
    assert.equal(result.iconProvider, 'lucide')
    assert.equal(result.iconImports, 'explicit')
    assert.equal(result.theme, 'brand')
  } finally {
    assert.equal(path.dirname(directory), path.resolve(os.tmpdir()))
    assert.ok(path.basename(directory).startsWith('watercolor-installer-'))
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

test('CLI dry-run prints a plan without installing or writing configuration', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'watercolor-installer-'))
  try {
    fs.writeFileSync(path.join(directory, 'package.json'), '{"private":true}')
    const result = spawnSync(process.execPath, [path.resolve(__dirname, '../bin/watercolor-ui.js'), '--framework', 'react', '--icons', 'none', '--dry-run'], {
      cwd: directory, encoding: 'utf8', env: { ...process.env, INIT_CWD: directory, WATERCOLOR_UI_SKIP_INSTALL: '0' },
    })
    assert.equal(result.status, 0, result.stderr)
    assert.match(result.stdout, /icons: none/)
    assert.ok(!fs.existsSync(path.join(directory, 'node_modules')))
    assert.ok(!fs.existsSync(path.join(directory, 'watercolor.config.json')))
  } finally {
    assert.equal(path.dirname(directory), path.resolve(os.tmpdir()))
    assert.ok(path.basename(directory).startsWith('watercolor-installer-'))
    fs.rmSync(directory, { recursive: true, force: true })
  }
})

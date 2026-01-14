# 🚀 Quick release guide

## The simplest way to release (recommended)

```bash
# 1. Bump version (updates package.json automatically)
npm version patch  # small change: 1.0.1 -> 1.0.2
# or
npm version minor  # new feature: 1.0.1 -> 1.1.0
# or
npm version major  # breaking change: 1.0.1 -> 2.0.0

# 2. Update CHANGELOG.md (edit manually)
vim CHANGELOG.md

# 3. Commit changes
git add .
git commit -m "chore: release v1.0.2"

# 4. Push tags (this triggers the publish workflow)
git push origin main --tags
```

## What the automation does

After the tag is pushed, GitHub Actions will automatically:

1. ✅ Run lint/tests
2. ✅ Build the project
3. ✅ Publish to GitHub Packages (`@zeturn/watercolor-ui`)
4. ✅ Publish to npm (`watercolor-ui`, requires `NPM_TOKEN`)
5. ✅ Create a GitHub Release

## Check release status

Visit: https://github.com/zeturn/watercolor/actions

## One-time secret setup

### Publish to npm (optional)

1. Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Create an **Automation** token
3. Add a GitHub Actions secret:
   - https://github.com/zeturn/watercolor/settings/secrets/actions
   - Name: `NPM_TOKEN`
   - Value: your npm token

### Publish to GitHub Packages

No setup required—`GITHUB_TOKEN` is provided automatically ✅

## How do users install?

### Install from npm (recommended)
```bash
npm install watercolor-ui
```

### Install from GitHub Packages
```bash
# Configure .npmrc
echo "@zeturn:registry=https://npm.pkg.github.com" >> .npmrc

# Install
npm install @zeturn/watercolor-ui
```

## Full documentation

See [PUBLISHING.md](PUBLISHING.md) for the full publishing guide.

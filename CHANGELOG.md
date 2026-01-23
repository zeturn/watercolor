# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.18] - 2026-01-23

### Changed
- 🎯 **Breaking Change**: Icon libraries are now fully optional peer dependencies
- ⚡ Installing `@zeturn/watercolor-react` or `@zeturn/watercolor-vue` no longer downloads all icon packages automatically
- 📦 Reduced default installation size significantly
- 🎨 Removed Tailwind CSS dependency - all styles now use native CSS

### Fixed
- 🔧 Fixed issue where users were forced to download all icon packages even when only needing one
- 🔧 Icon libraries (`lucide-react`, `@heroicons/react`, `@tabler/icons-react`, `@phosphor-icons/react`) moved to `peerDependenciesMeta` with `optional: true` in React package
- 🔧 Icon libraries (`lucide-vue-next`, `@heroicons/vue`, `@tabler/icons-vue`, `@phosphor-icons/vue`) moved to `peerDependenciesMeta` with `optional: true` in Vue package
- 🔧 Removed `@apply` directives from Toolbar component to eliminate Tailwind CSS dependency
- 🔧 Fixed compatibility issues with Tailwind CSS v4's stricter `@apply` parsing rules
- 🔧 Watercolor UI is now completely framework-independent and doesn't require Tailwind CSS

### Documentation
- 📝 Updated installation guide to clarify icon libraries are optional
- 📝 Added clear instructions for installing only needed icon packages
- 📝 Updated README with simplified icon installation examples

### Migration Guide
If you're upgrading from v1.1.17 or earlier and using icon components, you need to manually install the icon library you're using:

**React projects:**
```bash
npm install lucide-react  # if using Lucide
npm install @heroicons/react  # if using Heroicons
npm install @tabler/icons-react  # if using Tabler
npm install @phosphor-icons/react  # if using Phosphor
```

**Vue projects:**
```bash
npm install lucide-vue-next  # if using Lucide
npm install @heroicons/vue  # if using Heroicons
npm install @tabler/icons-vue  # if using Tabler
npm install @phosphor-icons/vue  # if using Phosphor
```

## [1.1.17] - 2026-01-17

### Fixed
- 🔧 Fixed missing test scripts (test:react, test:vue)
- 🔧 Fixed Storybook build errors by removing non-existent staticDirs configuration
- 🔧 Fixed incorrect React component import in Vue Button story

### Changed
- Bump package version to 1.1.17

## [1.1.16] - 2026-01-16

### Changed
- Bump package version to 1.1.16
- 📄 Migrated landing page to VitePress
- 🗑️ Removed legacy index.html
- 🔧 Updated CI/CD configuration for VitePress deployment

### Documentation
- Update README quick start examples and simplify sections
- Add changelog link to README

## [1.0.5] - 2026-01-14

### Fixed
- 🔧 Fix CI workflow: install dependencies to prevent publish failures
- 🔧 Improve the automated release workflow and documentation

### Added
- ✅ GitHub Actions CI/CD auto-publish workflow
- ✅ Automated publishing to GitHub Packages
- ✅ Automated publishing to npm
- ✅ Automated GitHub Release creation

### Documentation
- 📝 Add CI setup guide (CI_SETUP.md)
- 📝 Add publishing guide (PUBLISHING.md)
- 📝 Add quick release guide (QUICK_RELEASE.md)
- 📝 Add automated release script (release.sh)
- 📝 Update README.md with GitHub Packages install instructions

## [1.0.2] - 2026-01-14

### Added
- ✅ GitHub Actions CI/CD auto-publish workflow
- ✅ Automated publishing to GitHub Packages
- ✅ Automated publishing to npm
- ✅ Automated GitHub Release creation

### Documentation
- 📝 Add publishing guide (PUBLISHING.md)
- 📝 Add quick release guide (QUICK_RELEASE.md)
- 📝 Update README.md with GitHub Packages install instructions

## [1.0.1] - 2026-01-13

### Fixed
- Fixed CSS output filename to match package.json configuration
- Removed debug console.log statements from production code
- Fixed README documentation link typo

### Changed
- Updated build configuration for proper asset naming

## [1.0.0] - 2024-12-01

### Added
- Initial release of Watercolor UI
- 60+ cross-framework components for Vue 3 and React 18+
- Complete theme system with file-based configuration
- Dark mode support
- TypeScript support with full type definitions
- Storybook documentation for all components
- Comprehensive component test coverage

### Components
- **Input Components**: Button, TextField, Select, Checkbox, Radio, Switch, Slider, DatePicker, ColorPicker, FileInput, Autocomplete, VerificationCodeInput
- **Layout Components**: Container, Box, Grid, Paper
- **Feedback Components**: Alert, Snackbar, Tooltip, Progress, Skeleton, CircularProgress, Banner
- **Data Display Components**: Table, List, Card, Avatar, Badge, Chip, Typography, Rating, Accordion, Divider, Breadcrumb
- **Navigation Components**: AppBar, Toolbar, Menu, Tabs, Pagination
- **Advanced Components**: Modal, Popover, HoverCard, SlideOver, ImageGallery, VideoPlayer, Watermark, NumberAnimation, TypingText, PricingTable, Feature, Feed, Status, Copy

### Features
- Pure HTML+CSS implementation with no dependencies on heavy UI frameworks
- Ultra-minimal flat design philosophy (no shadows, no borders)
- Full keyboard navigation and screen reader support
- Tree-shaking optimization for optimal bundle size
- Multi-language support
- Extensive icon library integration (Heroicons, Phosphor Icons, Tabler Icons, Lucide, Feather Icons)

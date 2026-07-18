# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.3] - 2026-07-18

### Added
- Added a shared interaction core for overlay layers, focus restoration, focus traps, scroll locking, Escape/outside click handling, nested overlay ordering, and viewport collision positioning.
- Added React and Vue interaction adapters so Portal/Teleport, floating positioning, and overlay lifecycle behavior are implemented consistently across frameworks.
- Added a documented React/Vue interaction contract matrix for overlay, keyboard, focus, controlled/uncontrolled, SSR, and nested-overlay behavior.
- Added shared-contract tests for Modal, SlideOver, Popover, Tooltip, HoverCard, Menu, Select, Autocomplete, and DatePicker behavior.

### Changed
- Migrated Modal, SlideOver, Menu, Select, Autocomplete, DatePicker, Popover, HoverCard, and Tooltip away from duplicated component-local overlay logic.
- Improved Menu and Select keyboard behavior to follow the expected composite-widget model more closely.
- Replaced empty or distorted React component smoke tests with meaningful render and accessibility assertions.

### Fixed
- Fixed stale overlay listeners from detached DOM layers by pruning disconnected layer entries before handling global events.
- Fixed Vue MenuItem export cleanup by removing the obsolete TODO marker.
- Fixed React List public props coverage by keeping published behavior under active tests instead of placeholder assertions.

## [1.2.2] - 2026-07-18

### Added
- Added React and Vue `ThemeProvider` support for `config`, `themeUrl`, `target`, `initialResolvedMode`, `onThemeLoad`, and `onThemeError`.
- Added Provider-managed remote Theme v2 loading with AbortSignal cancellation, last-request-wins concurrency, scoped target support, and unmount restoration.
- Added strict Theme v2 schema/runtime drift audit, contrast warnings for text/canvas, accent/on-accent, danger, and focus ring, and a documented token stability policy.

### Changed
- Made Watercolor dark-mode CSS consume `data-resolved-theme` only, while keeping `.light` and `.dark` as integration signals.
- Documented that Watercolor defaults to light styling without a Provider and only follows system theme when Provider or SSR initialization is used.

### Fixed
- Prevented stale remote theme requests from mutating DOM after a newer Provider request wins.
- Restored Provider-owned DOM attributes and theme variables on unmount, including pre-existing inline variables on the same target.

## [1.2.1] - 2026-07-17

### Added
- Added clean-room npm tarball consumers that install, import, typecheck, and bundle the core, React, and Vue packages.
- Added a cross-framework public API manifest audit and real workspace lint/typecheck commands.
- Added a release gate that validates source quality, package contracts, Storybooks, visual recipes, and tag/version alignment before publishing.

### Changed
- Published core, React, Vue, and icon packages as explicit ESM-only packages instead of exposing UMD files through a misleading `require` condition.
- Made all Watercolor icon wrappers opt-in optional peers of the React and Vue packages.
- Replaced unbounded internal dependency ranges with release-matched versions.
- Expanded React public declarations with component-specific props for the core component set and verified Vue props, events, and slots declarations.
- Consolidated documentation deployment on VitePress and aligned canonical URLs and license metadata.
- Made the `watercolor-ui` installer explicit instead of mutating consumer projects during `postinstall`.

### Fixed
- Prevented published declaration files from referencing workspace-only `core/src` paths.
- Reworked publish checks to inspect the actual package tarballs, exports, dependencies, declarations, and version set.
- Prevented release scripts from silently staging unrelated working-tree files.

## [1.2.0] - 2026-07-17

### Added
- Added strict Theme v2 design-token JSON validation, schema, object/URL loading, reset, and SSR serialization APIs.
- Added a pure mode controller with explicit lifecycle, system preference tracking, cross-tab synchronization, and `wc-mode` persistence.
- Added React and Vue Theme providers with controlled/uncontrolled modes, resolved-mode notifications, SSR-safe rendering, and hydration coverage.
- Added a pre-paint initialization helper for flash-free light, dark, and system mode startup.
- Added unstyled `Page`, `Stack`, `Inline`, and `Split` composition primitives and responsive reference recipes.

### Changed
- Made the borderless Watercolor visual language the complete default when no custom theme is loaded.
- Kept custom brand tokens stable across light, dark, and system mode changes.
- Expanded CI with Theme v2 contracts, public type checks, package-consumer smoke tests, and a 316-capture cross-framework Storybook visual matrix.
- Cleaned build output before every core, React, and Vue package build so removed declarations cannot leak into releases.

### Removed
- Removed `toggleDarkMode`, `isDarkMode`, `createThemeManager`, legacy theme/font application helpers, and Paper `themeUtils`.
- Removed component-level `isDarkMode` props and theme branches; components now consume semantic tokens only.

### Fixed
- Fixed responsive composition widths and default FileInput/List overflow in both frameworks.
- Fixed SSR first-paint mode consistency, provider hydration, listener cleanup, and legacy storage migration.

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

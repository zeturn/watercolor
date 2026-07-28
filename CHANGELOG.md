# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.12] - 2026-07-28

### Added
- Added a first-class `@zeturn/watercolor-angular` package for **Angular** (standalone components + signals), implementing the complete public component set (80+ exports) with `input()`/`model()`/`output()` signal APIs, `ThemeProvider`/`LocaleProvider` injection providers, and `useTheme`/`useLocale` helpers.
- Added a runnable `examples/angular-ssr` Angular SSR example with pre-paint theming via `createThemeInitScript` injected in `server.ts`.
- Added `angular` to the cross-framework API parity manifest (`api-manifest.json`) so the Angular package is validated against the shared public exports.
- Wired `test:angular`, `lint`, and `typecheck` for `packages/angular` into the root scripts.
- Added a first-class `@zeturn/watercolor-svelte` package for **Svelte 5 / SvelteKit**, implementing the complete public component set (80+ exports) with Svelte 5 runes, `ThemeProvider`/`LocaleProvider` context providers, and `useTheme`/`useLocale` helpers.
- Added a runnable `examples/svelte-ssr` SvelteKit example with SSR pre-paint theming via `createThemeInitScript`.
- Added `svelte` to the cross-framework API parity manifest (`api-manifest.json`) so the Svelte package is validated against the shared public exports.
- Wired `test:svelte`, `lint`, and `typecheck` for `packages/svelte` into the root scripts.

### Fixed
- Updated `check-api-parity.mjs` Vue typed-contract markers to accept the new `vue-tsc` declaration format (`ExtractPropTypes<...>`-based) alongside the legacy `$props:`/`$emit:` markers.
- Fixed Vue declaration generation (`*.vue.d.ts`) under `vite-plugin-dts@5` by explicitly opting into the `vue` processor and installing the `@vue/language-core` peer, restoring the `audit:api` typed-contract checks.

## [1.2.8] - 2026-07-22

### Added
- Added a first-class `@zeturn/watercolor-next` package for **Next.js (App Router / React Server Components)**. It re-exports the full React API and injects the `"use client"` RSC boundary, so components can be used directly inside Server Components without adding `'use client'` yourself.
- Added a runnable `examples/next-ssr` Next.js App Router example with SSR pre-paint theming via `createThemeInitScript`.
- Added `next` to the cross-framework API parity manifest (`api-manifest.json`) so the Next package is validated against the React/Vue exports.
- Wired `test:next`, `lint`, `typecheck`, `typecheck:theme`, and `typecheck:public-api` into the root scripts.

### Changed
- Documented three-platform support (Vue 3.5+, React 18/19, and Next.js App Router) across the README, CONTRIBUTING, release guide, and developer docs.

## [1.2.7] - 2026-07-18

### Added
- Added a minimal visual strict audit for high-risk components so default states stay borderless and shadowless unless a state or explicit variant needs emphasis.
- Added release gates that reject generated React smoke tests using `expect(true)` and docs that regress to legacy install/import guidance.

### Changed
- Shared Provider `themeUrl` loading through core so React and Vue keep the same AbortSignal and last-request-wins behavior while only owning framework lifecycle wiring.
- Synchronized the local release script with the GitHub publish gate by adding docs/examples, visual, a11y, Storybook, docs build, and bundle checks.
- Tightened icon wrapper module types across React and Vue wrappers without falling back to `ComponentType<any>` or broad `any` module access.
- Updated component README and story guidance to use `@zeturn/watercolor-react` and `@zeturn/watercolor-vue` package imports.

### Fixed
- Replaced empty generated React test templates with a real rendered-output assertion.

## [1.2.6] - 2026-07-18

### Changed
- Tightened the React public declaration file so exported components use explicit props instead of a generic `WatercolorComponent`.
- Narrowed `@zeturn/watercolor-core` root exports to the stable theme, composition, and interaction APIs.
- Inlined React/Vue component utility helpers so framework packages no longer import private `@zeturn/watercolor-core/src/*` paths.
- Expanded the shared floating placement contract to support `*-start` and `*-end` alignments.

### Added
- Added release gates that fail on generic React component declarations, core root utility namespace exports, or private core source imports from framework packages.

## [1.2.5] - 2026-07-18

### Added
- Added page recipe guidance for composing product pages with `Page`, `Stack`, `Inline`, and `Split` instead of heavy container styling.
- Added a production checklist covering installation, Theme v2, composition, accessibility, docs, and release verification.
- Added example READMEs for React, Vue, Next SSR, and Nuxt SSR onboarding paths.
- Added a docs/examples audit that checks sidebar links, onboarding docs, minimal example ThemeProvider usage, Theme v2 JSON files, and example dependency versions.

### Changed
- Updated README and integration docs to present Provider-managed `themeUrl` loading as the recommended Theme v2 onboarding path.
- Wired the docs/examples audit into CI and the release gate so examples stay aligned with the package version.

## [1.2.4] - 2026-07-18

### Added
- Added Storybook axe checks for React and Vue and wired the accessibility gate into CI and release publishing.
- Added a shared LocaleProvider/messages contract for React and Vue so component aria labels and status text can be localized consistently.
- Added visual checks for reduced motion, forced colors, RTL, 200% zoom, keyboard focus, and key component states across React and Vue.
- Added integration docs and minimal React, Vue, Next SSR, and Nuxt SSR examples for the 1.2 line.
- Added bundle size budgets for core, React, and Vue publish artifacts.

### Changed
- Tightened the default Watercolor palette contrast while preserving the flat, low-chrome visual style.
- Disabled unnecessary decorative motion under `prefers-reduced-motion` and added forced-colors/RTL base support.
- Removed Banner's default shadow and kept focus treatment visible only when it communicates interaction state.

### Fixed
- Replaced hardcoded Chinese aria labels across React and Vue components with locale messages.
- Fixed missing accessible names in progress, color picker, verification code, switch, video, recipe icon buttons, and form-control stories.
- Fixed Slider keyboard focus visibility in both frameworks.
- Fixed several Storybook recipe and component semantics issues surfaced by axe and visual checks.

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

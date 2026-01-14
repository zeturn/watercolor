# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.16] - 2026-01-14

### Changed
- Bump package version to 1.1.16

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

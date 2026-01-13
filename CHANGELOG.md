# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- Material-UI compatibility layer for zero-cost migration
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

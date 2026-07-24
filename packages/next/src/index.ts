// @zeturn/watercolor-next — Next.js (App Router / React Server Components) entry point.
//
// Next.js is a React meta-framework, so this package is a thin, first-class
// wrapper around @zeturn/watercolor-react. Every component, provider and hook
// from the React package is re-exported here so the public API is identical to
// React and Vue (enforced by scripts/check-api-parity.mjs against
// api-manifest.json).
//
// The difference is the React Server Components boundary: the Vite build
// (see vite.config.js) prepends the `"use client"` directive to the produced
// bundle via a Rollup banner. That makes every exported component a *client
// reference* automatically, so consumers can drop them into Server Components
// without sprinkling `'use client'` everywhere. It also keeps working in the
// Pages Router and in plain React apps.
//
// For SSR theme pre-paint (avoiding a flash of the wrong mode), use
// `createThemeInitScript` from `@zeturn/watercolor-core` inside the document
// `<head>` and wrap the tree with `ThemeProvider` + `suppressHydrationWarning`
// on `<html>` — see examples/next-ssr.

export type * from '@zeturn/watercolor-react'

export { default as Accordion } from '@zeturn/watercolor-react'
export { default as Alert } from '@zeturn/watercolor-react'
export { default as AppBar } from '@zeturn/watercolor-react'
export { default as Autocomplete } from '@zeturn/watercolor-react'
export { default as Avatar } from '@zeturn/watercolor-react'
export { default as Badge } from '@zeturn/watercolor-react'
export { default as Banner } from '@zeturn/watercolor-react'
export { default as Blockquote } from '@zeturn/watercolor-react'
export { default as Box } from '@zeturn/watercolor-react'
export { default as Breadcrumb } from '@zeturn/watercolor-react'
export { default as Button } from '@zeturn/watercolor-react'
export { default as Card } from '@zeturn/watercolor-react'
export { default as CardActions } from '@zeturn/watercolor-react'
export { default as CardContent } from '@zeturn/watercolor-react'
export { default as Checkbox } from '@zeturn/watercolor-react'
export { default as Chip } from '@zeturn/watercolor-react'
export { default as CircularProgress } from '@zeturn/watercolor-react'
export { default as ColorPicker } from '@zeturn/watercolor-react'
export { default as CodeBlock } from '@zeturn/watercolor-react'
export { default as Container } from '@zeturn/watercolor-react'
export { default as Copy } from '@zeturn/watercolor-react'
export { default as DatePicker } from '@zeturn/watercolor-react'
export { default as Fab } from '@zeturn/watercolor-react'
export { default as Feature } from '@zeturn/watercolor-react'
export { default as Feed } from '@zeturn/watercolor-react'
export { default as FileInput } from '@zeturn/watercolor-react'
export { default as FormControl } from '@zeturn/watercolor-react'
export { default as FormControlLabel } from '@zeturn/watercolor-react'
export { default as FormGroup } from '@zeturn/watercolor-react'
export { default as FormHelperText } from '@zeturn/watercolor-react'
export { default as Grid } from '@zeturn/watercolor-react'
export { default as HoverCard } from '@zeturn/watercolor-react'
export { default as Icon } from '@zeturn/watercolor-react'
export { default as IconButton } from '@zeturn/watercolor-react'
export { default as ImageGallery } from '@zeturn/watercolor-react'
export { default as Inline } from '@zeturn/watercolor-react'
export { default as Input } from '@zeturn/watercolor-react'
export { default as List } from '@zeturn/watercolor-react'
export { default as ListItem } from '@zeturn/watercolor-react'
export { default as ListItemIcon } from '@zeturn/watercolor-react'
export { default as ListItemText } from '@zeturn/watercolor-react'
export { default as Menu } from '@zeturn/watercolor-react'
export { default as Modal } from '@zeturn/watercolor-react'
export { default as NumberAnimation } from '@zeturn/watercolor-react'
export { default as Pagination } from '@zeturn/watercolor-react'
export { default as Page } from '@zeturn/watercolor-react'
export { default as Paper } from '@zeturn/watercolor-react'
export { default as Popover } from '@zeturn/watercolor-react'
export { default as PricingTable } from '@zeturn/watercolor-react'
export { default as Progress } from '@zeturn/watercolor-react'
export { default as Radio } from '@zeturn/watercolor-react'
export { default as RadioGroup } from '@zeturn/watercolor-react'
export { default as Rating } from '@zeturn/watercolor-react'
export { default as Select } from '@zeturn/watercolor-react'
export { default as Skeleton } from '@zeturn/watercolor-react'
export { default as SlideOver } from '@zeturn/watercolor-react'
export { default as Slider } from '@zeturn/watercolor-react'
export { default as Snackbar } from '@zeturn/watercolor-react'
export { default as Split } from '@zeturn/watercolor-react'
export { default as Stack } from '@zeturn/watercolor-react'
export { default as Status } from '@zeturn/watercolor-react'
export { default as Switch } from '@zeturn/watercolor-react'
export { default as Table, TableBody, TableCell, TableHead, TableRow } from '@zeturn/watercolor-react'
export { default as Tabs } from '@zeturn/watercolor-react'
export { default as TextField } from '@zeturn/watercolor-react'
export { default as Toolbar } from '@zeturn/watercolor-react'
export { default as Tooltip } from '@zeturn/watercolor-react'
export { default as TypingText } from '@zeturn/watercolor-react'
export { default as Typography } from '@zeturn/watercolor-react'
export { default as VerificationCodeInput } from '@zeturn/watercolor-react'
export { default as VideoPlayer } from '@zeturn/watercolor-react'
export { default as Watermark } from '@zeturn/watercolor-react'

export { ThemeProvider, useTheme } from '@zeturn/watercolor-react'
export { LocaleProvider, defaultLocaleMessages, useLocale } from '@zeturn/watercolor-react'

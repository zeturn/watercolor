import { describe, it, expect } from 'vitest'
import * as WatercolorNext from '../src/index'
import * as WatercolorReact from '@zeturn/watercolor-react'

// The Next.js package must expose the exact same public surface as the React
// package so the cross-framework API contract (api-manifest.json) stays in
// parity. This smoke test guards that the wrapper actually re-exports the
// expected components, providers and hooks.
describe('@zeturn/watercolor-next public API', () => {
  const expected = [
    'Accordion', 'Alert', 'AppBar', 'Autocomplete', 'Avatar', 'Badge', 'Banner',
    'Blockquote', 'Box', 'Breadcrumb', 'Button', 'Card', 'CardActions', 'CardContent',
    'Checkbox', 'Chip', 'CircularProgress', 'ColorPicker', 'CodeBlock', 'Container',
    'Copy', 'DatePicker', 'Fab', 'Feature', 'Feed', 'FileInput', 'FormControl',
    'FormControlLabel', 'FormGroup', 'FormHelperText', 'Grid', 'HoverCard', 'Icon',
    'IconButton', 'ImageGallery', 'Inline', 'Input', 'List', 'ListItem', 'ListItemIcon',
    'ListItemText', 'Menu', 'Modal', 'NumberAnimation', 'Pagination', 'Page', 'Paper',
    'Popover', 'PricingTable', 'Progress', 'Radio', 'RadioGroup', 'Rating', 'Select',
    'Skeleton', 'SlideOver', 'Slider', 'Snackbar', 'Split', 'Stack', 'Status', 'Switch',
    'Table', 'TableBody', 'TableCell', 'TableHead', 'TableRow', 'Tabs', 'TextField',
    'Toolbar', 'Tooltip', 'TypingText', 'Typography', 'VerificationCodeInput',
    'VideoPlayer', 'Watermark',
    'ThemeProvider', 'LocaleProvider', 'defaultLocaleMessages', 'useLocale', 'useTheme',
  ]

  for (const name of expected) {
    it(`exports ${name}`, () => {
      expect((WatercolorNext as Record<string, unknown>)[name]).toBeDefined()
    })
  }

  it('exports the same set of names as the React package', () => {
    const nextNames = Object.keys(WatercolorNext).sort()
    expect(nextNames).toEqual(Object.keys(WatercolorReact).sort())
  })
})

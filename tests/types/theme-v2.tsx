import React from 'react'
import {
  ThemeProvider,
  applyThemeConfig,
  createThemeInitScript,
  serializeThemeConfig,
  type ThemeContextValue,
  type ThemeProviderProps,
  type WatercolorThemeConfig,
} from '@zeturn/watercolor-react'
import {
  ThemeProvider as VueThemeProvider,
  applyThemeConfig as applyVueThemeConfig,
  type ThemeStore,
} from '@zeturn/watercolor-vue'

const theme = {
  version: 2,
  tokens: { colors: { primary: { 600: '#7c3aed' } } },
  modes: { light: { canvas: '#fff' }, dark: { canvas: '#111' } },
} satisfies WatercolorThemeConfig

const result = applyThemeConfig(theme)
const vueResult = applyVueThemeConfig(theme)
const serialized = serializeThemeConfig(theme)
const script: string = createThemeInitScript({ defaultMode: 'system' })
const target = document.createElement('section')
const props: ThemeProviderProps = {
  config: theme,
  defaultMode: 'system',
  themeUrl: '/theme.json',
  target,
  initialResolvedMode: 'dark',
  onModeChange: (_mode) => {},
  onThemeLoad: (_result) => {},
  onThemeError: (_result) => {},
}
const context = null as unknown as ThemeContextValue
const vueStore = null as unknown as ThemeStore

const provider = <ThemeProvider {...props}><div /></ThemeProvider>

void [result, vueResult, serialized, script, context.toggleMode, vueStore.toggleMode, provider, VueThemeProvider]

import { defineComponent, onBeforeUnmount, onMounted } from 'vue'
import Inline from '../src/components/Inline/Inline.vue'
import Page from '../src/components/Page/Page.vue'
import Stack from '../src/components/Stack/Stack.vue'
import { ThemeProvider, useTheme } from '../src/ThemeVUE.ts'
import { applyThemeConfig, resetThemeConfig } from '../src/utils/theme.ts'
import { pageModes } from '../.storybook/modes.js'
import './ThemeContract.css'

const customTheme = {
  version: 2,
  tokens: {
    colors: { primary: { 400: '#c4b5fd', 500: '#a78bfa', 600: '#8b5cf6', 700: '#7c3aed' } },
    radius: { lg: '14px', xl: '18px', '2xl': '24px' },
  },
  modes: {
    light: { canvas: '#fffbff', actionHover: '#f5efff', actionSelected: '#eee5ff', accent: '#7c3aed' },
    dark: { canvas: '#120f18', actionHover: '#241d30', actionSelected: '#30243f', accent: '#c4b5fd' },
  },
}

export default {
  title: 'Foundations/Theme contract',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'The single supported mode model: ThemeProvider + light, dark or system + useTheme().' } },
    chromatic: { modes: pageModes, cropToViewport: true }
  }
}

const ContractContent = defineComponent({
  components: { Inline, Page, Stack },
  setup () {
    const theme = useTheme()
    return { mode: theme.mode, resolvedMode: theme.resolvedMode, setMode: theme.setMode }
  },
  data: () => ({ options: ['light', 'dark', 'system'] }),
  template: `
    <main class="wc-theme-contract"><Page size="md" gutter="lg"><Stack gap="2xl">
      <Stack gap="lg"><p class="wc-theme-contract__kicker">Theme contract</p><h1>One mode model.</h1><p class="wc-theme-contract__copy">The provider owns DOM attributes, persistence and system preference. Components only consume semantic tokens.</p></Stack>
      <Inline gap="xs" data-testid="theme-options"><button v-for="option in options" :key="option" class="wc-theme-contract__option" :class="{ 'is-selected': mode === option }" :data-mode="option" @click="setMode(option)">{{ option }}</button></Inline>
      <p class="wc-theme-contract__status">Requested <strong data-theme-requested>{{ mode }}</strong> · resolved <strong data-theme-resolved>{{ resolvedMode }}</strong></p>
      <Stack gap="2xs"><div class="wc-theme-contract__sample">Transparent by default. Hover reveals a quiet surface.</div><div class="wc-theme-contract__sample">No component-level dark mode branches.</div></Stack>
    </Stack></Page></main>`
})

export const ProviderContract = {
  render: (_args, context) => ({
    components: { ContractContent, ThemeProvider },
    data: () => ({ mode: context.globals.theme }),
    template: '<ThemeProvider v-model:mode="mode"><ContractContent /></ThemeProvider>'
  })
}

export const CustomThemeV2 = {
  render: (_args, context) => ({
    components: { ContractContent, ThemeProvider },
    setup () {
      onMounted(() => applyThemeConfig(customTheme))
      onBeforeUnmount(() => resetThemeConfig())
      return { initialMode: context.globals.theme }
    },
    data: () => ({ mode: context.globals.theme }),
    template: '<ThemeProvider v-model:mode="mode"><ContractContent /></ThemeProvider>'
  })
}

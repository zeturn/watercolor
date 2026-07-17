import Inline from '../src/components/Inline/Inline.vue'
import Page from '../src/components/Page/Page.vue'
import Split from '../src/components/Split/Split.vue'
import Stack from '../src/components/Stack/Stack.vue'
import { pageModes } from '../.storybook/modes.js'
import './Composition.css'

export default {
  title: 'Foundations/Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Unstyled page structure. These primitives only control width, spacing, alignment and responsive flow; color and surface treatment belong to product components.'
      }
    },
    chromatic: { modes: pageModes, cropToViewport: true }
  }
}

const shared = { Inline, Page, Split, Stack }

export const Overview = {
  render: () => ({
    components: shared,
    data: () => ({
      principles: [
        ['Page', 'Centers content and owns the page gutter.'],
        ['Stack', 'Creates vertical rhythm with one spacing scale.'],
        ['Inline', 'Aligns actions, metadata and controls; wrapping is explicit.'],
        ['Split', 'Creates two regions and collapses at a named breakpoint.']
      ],
      topics: ['Typography', 'Spacing', 'Icons', 'Hover state', 'Responsive flow']
    }),
    template: `
      <main class="wc-composition-demo">
        <Page size="xl" gutter="lg"><Stack gap="3xl">
          <Stack as="header" gap="lg"><p class="wc-composition-kicker">Watercolor foundations</p><h1>Structure without decoration.</h1><p class="wc-composition-lede">The composition layer makes pages predictable without adding cards, dividers, borders or theme decisions.</p></Stack>
          <Split ratio="sidebar" gap="3xl" align="start" collapse="md"><Stack gap="sm" class="wc-composition-section"><h2>Four primitives</h2><p class="wc-composition-copy">Use the smallest primitive that describes the relationship between its children.</p></Stack><Stack gap="2xs"><div v-for="item in principles" :key="item[0]" class="wc-composition-item"><strong>{{ item[0] }}</strong><span>{{ item[1] }}</span></div></Stack></Split>
          <Stack gap="lg" class="wc-composition-section"><h2>Inline flow</h2><Inline gap="xs"><span v-for="item in topics" :key="item" class="wc-composition-chip">{{ item }}</span></Inline></Stack>
        </Stack></Page>
      </main>`
  })
}

export const ComponentBoundaries = {
  render: () => ({
    components: shared,
    data: () => ({
      rows: [
        ['Page / Stack / Inline / Split', 'Default choice for page structure and spacing.'],
        ['Grid', 'Use for repeated two-dimensional collections such as galleries or dashboards.'],
        ['Box', 'Use as a local escape hatch when a one-off CSS property is genuinely clearer.'],
        ['Container', 'Compatibility API for existing screens; use Page for new page shells.']
      ]
    }),
    template: `
      <main class="wc-composition-demo"><Page size="md" gutter="lg"><Stack gap="2xl"><Stack gap="sm"><p class="wc-composition-kicker">Usage boundaries</p><h1>Choose by responsibility.</h1></Stack><Stack gap="2xs"><Split v-for="item in rows" :key="item[0]" ratio="sidebar" gap="lg" collapse="sm" class="wc-composition-guide-row"><code>{{ item[0] }}</code><p>{{ item[1] }}</p></Split></Stack></Stack></Page></main>`
  })
}

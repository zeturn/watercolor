import React from 'react'
import Inline from '@/components/Inline/Inline.jsx'
import Page from '@/components/Page/Page.jsx'
import Split from '@/components/Split/Split.jsx'
import Stack from '@/components/Stack/Stack.jsx'
import { pageModes } from '../.storybook/modes.js'
import './Composition.css'

export default {
  title: 'Foundations/Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Unstyled page structure. These primitives only control width, spacing, alignment and responsive flow; color and surface treatment belong to product components.',
      },
    },
    chromatic: { modes: pageModes, cropToViewport: true },
  },
}

const principles = [
  ['Page', 'Centers content and owns the page gutter.'],
  ['Stack', 'Creates vertical rhythm with one spacing scale.'],
  ['Inline', 'Aligns actions, metadata and controls; wrapping is explicit.'],
  ['Split', 'Creates two regions and collapses at a named breakpoint.'],
]

export const Overview = {
  render: () => (
    <main className="wc-composition-demo">
      <Page size="xl" gutter="lg">
        <Stack gap="3xl">
          <Stack as="header" gap="lg">
            <p className="wc-composition-kicker">Watercolor foundations</p>
            <h1>Structure without decoration.</h1>
            <p className="wc-composition-lede">The composition layer makes pages predictable without adding cards, dividers, borders or theme decisions.</p>
          </Stack>

          <Split ratio="sidebar" gap="3xl" align="start" collapse="md">
            <Stack gap="sm" className="wc-composition-section">
              <h2>Four primitives</h2>
              <p className="wc-composition-copy">Use the smallest primitive that describes the relationship between its children.</p>
            </Stack>
            <Stack gap="2xs">
              {principles.map(([name, description]) => (
                <div className="wc-composition-item" key={name}>
                  <strong>{name}</strong><span>{description}</span>
                </div>
              ))}
            </Stack>
          </Split>

          <Stack gap="lg" className="wc-composition-section">
            <h2>Inline flow</h2>
            <Inline gap="xs">
              {['Typography', 'Spacing', 'Icons', 'Hover state', 'Responsive flow'].map((item) => <span className="wc-composition-chip" key={item}>{item}</span>)}
            </Inline>
          </Stack>
        </Stack>
      </Page>
    </main>
  ),
}

export const ComponentBoundaries = {
  render: () => (
    <main className="wc-composition-demo">
      <Page size="md" gutter="lg">
        <Stack gap="2xl">
          <Stack gap="sm"><p className="wc-composition-kicker">Usage boundaries</p><h1>Choose by responsibility.</h1></Stack>
          <Stack gap="2xs">
            {[
              ['Page / Stack / Inline / Split', 'Default choice for page structure and spacing.'],
              ['Grid', 'Use for repeated two-dimensional collections such as galleries or dashboards.'],
              ['Box', 'Use as a local escape hatch when a one-off CSS property is genuinely clearer.'],
              ['Container', 'Compatibility API for existing screens; use Page for new page shells.'],
            ].map(([name, description]) => <Split ratio="sidebar" gap="lg" collapse="sm" className="wc-composition-guide-row" key={name}><code>{name}</code><p>{description}</p></Split>)}
          </Stack>
        </Stack>
      </Page>
    </main>
  ),
}

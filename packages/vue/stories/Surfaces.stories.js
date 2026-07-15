import Box from '../src/components/Box/Box.vue'
import Card from '../src/components/Card/Card.vue'
import Container from '../src/components/Container/Container.vue'
import Divider from '../src/components/Divider/Divider.vue'
import Icon from '../src/components/Icon/Icon.vue'
import Paper from '../src/components/Paper/Paper.vue'
import './Surfaces.css'

export default {
  title: 'Foundations/Surfaces',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Quiet layout and surface hierarchy using explicit containment only where it adds meaning.'
      }
    }
  }
}

export const Hierarchy = {
  render: () => ({
    components: { Box, Card, Container, Divider, Icon, Paper },
    template: `
      <main class="wc-surfaces-page">
        <Container max-width="lg">
          <header class="wc-surfaces-intro">
            <p class="wc-surfaces-eyebrow">Watercolor surfaces</p>
            <h1 class="wc-surfaces-title">Hierarchy without decoration.</h1>
            <p class="wc-surfaces-description">
              Whitespace groups ordinary content. Backgrounds and shadows appear only for interaction or genuine elevation.
            </p>
          </header>

          <section aria-labelledby="card-treatment">
            <h2 id="card-treatment" class="wc-surfaces-section-title">Card treatment</h2>
            <Box display="grid" class="wc-surfaces-grid">
              <Card class-name="wc-surfaces-card" variant="minimal">
                <Icon class="wc-surfaces-card-icon" name="align-left" :size="22" />
                <h3 class="wc-surfaces-card-title">Quiet default</h3>
                <p class="wc-surfaces-card-copy">No border or background. Spacing is enough to establish the group.</p>
              </Card>
              <Card class-name="wc-surfaces-card wc-surfaces-force-hover" variant="minimal" interactive>
                <Icon class="wc-surfaces-card-icon" name="mouse-pointer-2" :size="22" />
                <h3 class="wc-surfaces-card-title">Interactive hover</h3>
                <p class="wc-surfaces-card-copy">A soft surface appears only when the region becomes actionable.</p>
              </Card>
              <Card class-name="wc-surfaces-card" variant="filled">
                <Icon class="wc-surfaces-card-icon" name="panel-top" :size="22" />
                <h3 class="wc-surfaces-card-title">Explicit containment</h3>
                <p class="wc-surfaces-card-copy">A filled surface remains available when the content truly needs a boundary.</p>
              </Card>
            </Box>
          </section>

          <section class="wc-surfaces-section wc-surfaces-hierarchy" aria-labelledby="surface-hierarchy">
            <div>
              <h2 id="surface-hierarchy" class="wc-surfaces-section-title">Structural separation</h2>
              <div class="wc-surfaces-settings">
                <div class="wc-surfaces-setting-row"><span class="wc-surfaces-setting-label">Appearance</span><span class="wc-surfaces-setting-value">System</span></div>
                <Divider />
                <div class="wc-surfaces-setting-row"><span class="wc-surfaces-setting-label">Language</span><span class="wc-surfaces-setting-value">English</span></div>
                <Divider />
                <div class="wc-surfaces-setting-row"><span class="wc-surfaces-setting-label">Motion</span><span class="wc-surfaces-setting-value">Reduced when requested</span></div>
              </div>
            </div>
            <div>
              <h2 class="wc-surfaces-section-title">True elevation</h2>
              <Paper :elevation="3" class-name="wc-surfaces-popover">
                <p class="wc-surfaces-popover-label">Floating context</p>
                <p class="wc-surfaces-popover-copy">Shadow is reserved for content that sits above the page, such as menus and popovers.</p>
              </Paper>
            </div>
          </section>
        </Container>
      </main>
    `
  })
}

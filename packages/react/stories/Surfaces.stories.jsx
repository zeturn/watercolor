import Box from '@/components/Box/Box.jsx'
import Card from '@/components/Card/Card.jsx'
import Container from '@/components/Container/Container.jsx'
import Divider from '@/components/Divider/Divider.jsx'
import Icon from '@/components/Icon/Icon.jsx'
import Paper from '@/components/Paper/Paper.jsx'
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
  render: () => (
    <main className="wc-surfaces-page">
      <Container maxWidth="lg">
        <header className="wc-surfaces-intro">
          <p className="wc-surfaces-eyebrow">Watercolor surfaces</p>
          <h1 className="wc-surfaces-title">Hierarchy without decoration.</h1>
          <p className="wc-surfaces-description">
            Whitespace groups ordinary content. Backgrounds and shadows appear only for interaction or genuine elevation.
          </p>
        </header>

        <section aria-labelledby="card-treatment">
          <h2 id="card-treatment" className="wc-surfaces-section-title">Card treatment</h2>
          <Box display="grid" className="wc-surfaces-grid">
            <Card className="wc-surfaces-card" variant="minimal">
              <Icon className="wc-surfaces-card-icon" name="align-left" size={22} />
              <h3 className="wc-surfaces-card-title">Quiet default</h3>
              <p className="wc-surfaces-card-copy">No border or background. Spacing is enough to establish the group.</p>
            </Card>
            <Card className="wc-surfaces-card wc-surfaces-force-hover" variant="minimal" interactive>
              <Icon className="wc-surfaces-card-icon" name="mouse-pointer-2" size={22} />
              <h3 className="wc-surfaces-card-title">Interactive hover</h3>
              <p className="wc-surfaces-card-copy">A soft surface appears only when the region becomes actionable.</p>
            </Card>
            <Card className="wc-surfaces-card" variant="filled">
              <Icon className="wc-surfaces-card-icon" name="panel-top" size={22} />
              <h3 className="wc-surfaces-card-title">Explicit containment</h3>
              <p className="wc-surfaces-card-copy">A filled surface remains available when the content truly needs a boundary.</p>
            </Card>
          </Box>
        </section>

        <section className="wc-surfaces-section wc-surfaces-hierarchy" aria-labelledby="surface-hierarchy">
          <div>
            <h2 id="surface-hierarchy" className="wc-surfaces-section-title">Structural separation</h2>
            <div className="wc-surfaces-settings">
              <div className="wc-surfaces-setting-row"><span className="wc-surfaces-setting-label">Appearance</span><span className="wc-surfaces-setting-value">System</span></div>
              <Divider />
              <div className="wc-surfaces-setting-row"><span className="wc-surfaces-setting-label">Language</span><span className="wc-surfaces-setting-value">English</span></div>
              <Divider />
              <div className="wc-surfaces-setting-row"><span className="wc-surfaces-setting-label">Motion</span><span className="wc-surfaces-setting-value">Reduced when requested</span></div>
            </div>
          </div>
          <div>
            <h2 className="wc-surfaces-section-title">True elevation</h2>
            <Paper elevation={3} className="wc-surfaces-popover">
              <p className="wc-surfaces-popover-label">Floating context</p>
              <p className="wc-surfaces-popover-copy">Shadow is reserved for content that sits above the page, such as menus and popovers.</p>
            </Paper>
          </div>
        </section>
      </Container>
    </main>
  )
}

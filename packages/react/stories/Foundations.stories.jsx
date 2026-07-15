import Grid from '@/components/Grid/Grid.jsx'
import Typography from '@/components/Typography/Typography.jsx'
import Icon from '@/components/Icon/Icon.jsx'
import List from '@/components/List/List.jsx'
import ListItem from '@/components/List/ListItem.jsx'
import ListItemIcon from '@/components/List/ListItemIcon.jsx'
import './Foundations.css'

const pageStyle = {
  minHeight: '100vh',
  boxSizing: 'border-box',
  padding: 'clamp(24px, 5vw, 72px)',
  background: 'var(--wc-bg-canvas)',
  color: 'var(--wc-text-primary)'
}

const contentStyle = {
  width: 'min(1120px, 100%)',
  margin: '0 auto'
}

const actions = [
  { icon: 'plus', title: 'Start a project', detail: 'Create a focused workspace' },
  { icon: 'activity', title: 'Review activity', detail: 'See what changed recently' },
  { icon: 'users', title: 'Invite teammates', detail: 'Bring people into the work' }
]

const recentItems = [
  { icon: 'message-square', title: 'Product direction notes', detail: 'Edited by you', meta: '12 min' },
  { icon: 'file-text', title: 'Typography foundations', detail: 'Design system', meta: 'Yesterday' },
  { icon: 'layout-grid', title: 'Workspace composition', detail: 'UI exploration', meta: 'Mon' },
  { icon: 'sparkles', title: 'Theme architecture', detail: 'Implementation plan', meta: 'Fri' }
]

export default {
  title: 'Foundations/Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Typography and Grid composed without Tailwind or host utility classes.'
      }
    }
  }
}

export const Dashboard = {
  render: () => (
    <main className="wc-foundations-page">
      <div className="wc-foundations-shell">
        <header className="wc-foundations-toolbar">
          <button className="wc-foundations-icon-button" type="button" aria-label="Open navigation">
            <Icon name="menu" size={20} />
          </button>
          <nav className="wc-foundations-tabs" aria-label="Workspace views">
            <button className="wc-foundations-tab" type="button" role="tab" aria-selected="true">Home</button>
            <button className="wc-foundations-tab" type="button" role="tab" aria-selected="false">Work</button>
          </nav>
          <button className="wc-foundations-icon-button" type="button" aria-label="Open profile">
            <Icon name="circle-user-round" size={20} />
          </button>
        </header>

        <section className="wc-foundations-hero">
          <Typography variant="overline" color="primary" gutterBottom>Watercolor workspace</Typography>
          <Typography variant="h3" color="textPrimary" gutterBottom>What would you like to make?</Typography>
          <Typography variant="body1" color="textSecondary">
            Quiet by default. Interaction appears only when you need it.
          </Typography>
        </section>

        <Grid container spacing={2} aria-label="Quick actions">
          {actions.map((action) => (
            <Grid key={action.title} item xs={12} md={4}>
              <ListItem button className="wc-foundations-action">
                <ListItemIcon><Icon name={action.icon} size={22} /></ListItemIcon>
                <span className="wc-foundations-copy">
                  <Typography component="span" variant="subtitle2" color="textPrimary">{action.title}</Typography>
                  <Typography component="span" variant="body2" color="textSecondary">{action.detail}</Typography>
                </span>
              </ListItem>
            </Grid>
          ))}
        </Grid>

        <section className="wc-foundations-section">
          <div className="wc-foundations-section-heading">
            <Typography component="span" variant="subtitle2" color="textPrimary">Recent work</Typography>
            <button className="wc-foundations-icon-button" type="button" aria-label="Search recent work">
              <Icon name="search" size={19} />
            </button>
          </div>
          <List disablePadding aria-label="Recent work">
            {recentItems.map((item) => (
              <ListItem key={item.title} button className="wc-foundations-recent">
                <ListItemIcon><Icon name={item.icon} size={20} /></ListItemIcon>
                <span className="wc-foundations-copy">
                  <Typography component="span" variant="body1" color="textPrimary">{item.title}</Typography>
                  <Typography component="span" variant="caption" color="textSecondary">{item.detail}</Typography>
                </span>
                <Typography component="span" variant="caption" color="textSecondary" className="wc-foundations-row-meta">{item.meta}</Typography>
                <Icon name="chevron-right" size={18} color="var(--wc-text-tertiary)" />
              </ListItem>
            ))}
          </List>
        </section>

        <form className="wc-foundations-composer" onSubmit={(event) => event.preventDefault()}>
          <button className="wc-foundations-icon-button" type="button" aria-label="Add attachment">
            <Icon name="plus" size={21} />
          </button>
          <input className="wc-foundations-input" aria-label="Ask Watercolor" placeholder="Ask Watercolor" />
          <button className="wc-foundations-icon-button" type="button" aria-label="Use voice input">
            <Icon name="mic" size={20} />
          </button>
          <button className="wc-foundations-send" type="submit" aria-label="Send">
            <Icon name="arrow-up" size={20} />
          </button>
        </form>
      </div>
    </main>
  )
}

export const TypeScale = {
  render: () => (
    <main style={pageStyle}>
      <div style={{ ...contentStyle, maxWidth: '860px' }}>
        {[
          ['h1', 'Display / H1'],
          ['h2', 'Page title / H2'],
          ['h3', 'Section title / H3'],
          ['h4', 'Feature title / H4'],
          ['h5', 'Card group / H5'],
          ['h6', 'Card title / H6'],
          ['subtitle1', 'Primary subtitle'],
          ['subtitle2', 'Secondary subtitle'],
          ['body1', 'Body text for comfortable reading and longer descriptions.'],
          ['body2', 'Compact body text for application interfaces and supporting information.'],
          ['caption', 'Caption · Updated just now'],
          ['overline', 'Overline label']
        ].map(([variant, label]) => (
          <div key={variant} style={{ padding: '18px 0', borderBottom: '1px solid var(--wc-border-subtle)' }}>
            <Typography variant={variant} color="textPrimary">{label}</Typography>
          </div>
        ))}
      </div>
    </main>
  )
}

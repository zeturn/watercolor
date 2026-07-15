import Grid from '../src/components/Grid/Grid.vue'
import Typography from '../src/components/Typography/Typography.vue'
import Icon from '../src/components/Icon/Icon.vue'
import List from '../src/components/List/List.vue'
import ListItem from '../src/components/List/ListItem.vue'
import ListItemIcon from '../src/components/List/ListItemIcon.vue'
import './Foundations.css'

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
  render: () => ({
    components: { Grid, Typography, Icon, List, ListItem, ListItemIcon },
    data: () => ({
      actions: [
        { icon: 'plus', title: 'Start a project', detail: 'Create a focused workspace' },
        { icon: 'activity', title: 'Review activity', detail: 'See what changed recently' },
        { icon: 'users', title: 'Invite teammates', detail: 'Bring people into the work' }
      ],
      recentItems: [
        { icon: 'message-square', title: 'Product direction notes', detail: 'Edited by you', meta: '12 min' },
        { icon: 'file-text', title: 'Typography foundations', detail: 'Design system', meta: 'Yesterday' },
        { icon: 'layout-grid', title: 'Workspace composition', detail: 'UI exploration', meta: 'Mon' },
        { icon: 'sparkles', title: 'Theme architecture', detail: 'Implementation plan', meta: 'Fri' }
      ]
    }),
    template: `
      <main class="wc-foundations-page">
        <div class="wc-foundations-shell">
          <header class="wc-foundations-toolbar">
            <button class="wc-foundations-icon-button" type="button" aria-label="Open navigation">
              <Icon name="menu" :size="20" />
            </button>
            <nav class="wc-foundations-tabs" aria-label="Workspace views">
              <button class="wc-foundations-tab" type="button" role="tab" aria-selected="true">Home</button>
              <button class="wc-foundations-tab" type="button" role="tab" aria-selected="false">Work</button>
            </nav>
            <button class="wc-foundations-icon-button" type="button" aria-label="Open profile">
              <Icon name="circle-user-round" :size="20" />
            </button>
          </header>

          <section class="wc-foundations-hero">
            <Typography variant="overline" color="primary" gutterBottom>Watercolor workspace</Typography>
            <Typography variant="h3" color="textPrimary" gutterBottom>What would you like to make?</Typography>
            <Typography variant="body1" color="textSecondary">
              Quiet by default. Interaction appears only when you need it.
            </Typography>
          </section>

          <Grid container :spacing="2" aria-label="Quick actions">
            <Grid v-for="action in actions" :key="action.title" item :xs="12" :md="4">
              <ListItem button class-name="wc-foundations-action">
                <ListItemIcon><Icon :name="action.icon" :size="22" /></ListItemIcon>
                <span class="wc-foundations-copy">
                  <Typography component="span" variant="subtitle2" color="textPrimary">{{ action.title }}</Typography>
                  <Typography component="span" variant="body2" color="textSecondary">{{ action.detail }}</Typography>
                </span>
              </ListItem>
            </Grid>
          </Grid>

          <section class="wc-foundations-section">
            <div class="wc-foundations-section-heading">
              <Typography component="span" variant="subtitle2" color="textPrimary">Recent work</Typography>
              <button class="wc-foundations-icon-button" type="button" aria-label="Search recent work">
                <Icon name="search" :size="19" />
              </button>
            </div>
            <List component="div" disablePadding aria-label="Recent work">
              <ListItem v-for="item in recentItems" :key="item.title" button class-name="wc-foundations-recent">
                <ListItemIcon><Icon :name="item.icon" :size="20" /></ListItemIcon>
                <span class="wc-foundations-copy">
                  <Typography component="span" variant="body1" color="textPrimary">{{ item.title }}</Typography>
                  <Typography component="span" variant="caption" color="textSecondary">{{ item.detail }}</Typography>
                </span>
                <Typography component="span" variant="caption" color="textSecondary" class="wc-foundations-row-meta">{{ item.meta }}</Typography>
                <Icon name="chevron-right" :size="18" color="var(--wc-text-tertiary)" />
              </ListItem>
            </List>
          </section>

          <form class="wc-foundations-composer" @submit.prevent>
            <button class="wc-foundations-icon-button" type="button" aria-label="Add attachment">
              <Icon name="plus" :size="21" />
            </button>
            <input class="wc-foundations-input" aria-label="Ask Watercolor" placeholder="Ask Watercolor" />
            <button class="wc-foundations-icon-button" type="button" aria-label="Use voice input">
              <Icon name="mic" :size="20" />
            </button>
            <button class="wc-foundations-send" type="submit" aria-label="Send">
              <Icon name="arrow-up" :size="20" />
            </button>
          </form>
        </div>
      </main>
    `
  })
}

export const TypeScale = {
  render: () => ({
    components: { Typography },
    data: () => ({
      samples: [
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
      ]
    }),
    template: `
      <main style="min-height: 100vh; box-sizing: border-box; padding: clamp(24px, 5vw, 72px); background: var(--wc-bg-canvas); color: var(--wc-text-primary);">
        <div style="width: min(860px, 100%); margin: 0 auto;">
          <div v-for="sample in samples" :key="sample[0]" style="padding: 18px 0; border-bottom: 1px solid var(--wc-border-subtle);">
            <Typography :variant="sample[0]" color="textPrimary">{{ sample[1] }}</Typography>
          </div>
        </div>
      </main>
    `
  })
}

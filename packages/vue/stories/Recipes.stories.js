import Button from '../src/components/Button/Button.vue'
import Icon from '../src/components/Icon/Icon.vue'
import Switch from '../src/components/Switch/Switch.vue'
import TextField from '../src/components/TextField/TextField.vue'
import './Recipes.css'

export default {
  title: 'Recipes/Product pages',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Page recipes built from quiet surfaces, typography, icons and hover states.' } }
  }
}

const shared = { Button, Icon, Switch, TextField }

export const Dashboard = {
  render: () => ({
    components: shared,
    data: () => ({
      metrics: [['Active projects', '24', '+3 this month'], ['Tasks completed', '184', '12 today'], ['Team members', '16', '2 invited'], ['Response time', '1.8h', '18% faster']],
      activity: [['Maya updated the onboarding flow', 'Design system · 12 minutes ago'], ['Alex resolved 8 accessibility issues', 'Website refresh · 1 hour ago'], ['Quarterly research plan was shared', 'Customer insights · Yesterday']]
    }),
    template: `
      <main class="wc-recipe">
        <header class="wc-recipe-topbar"><div class="wc-recipe-brand"><span class="wc-recipe-mark">W</span>Watercolor</div><div class="wc-recipe-user"><button class="wc-recipe-icon-button" aria-label="Notifications"><Icon name="bell" :size="18" /></button><span class="wc-recipe-avatar">HZ</span></div></header>
        <div class="wc-recipe-layout">
          <aside class="wc-recipe-sidebar"><nav class="wc-recipe-nav"><button class="wc-recipe-nav-item is-active"><Icon name="home" :size="18" /><span>Overview</span></button><button class="wc-recipe-nav-item"><Icon name="folder" :size="18" /><span>Projects</span></button><button class="wc-recipe-nav-item"><Icon name="users" :size="18" /><span>Team</span></button><button class="wc-recipe-nav-item"><Icon name="activity" :size="18" /><span>Activity</span></button><div class="wc-recipe-nav-label">Workspace</div><button class="wc-recipe-nav-item"><Icon name="settings" :size="18" /><span>Settings</span></button><button class="wc-recipe-nav-item"><Icon name="help-circle" :size="18" /><span>Help</span></button></nav></aside>
          <section class="wc-recipe-main"><div class="wc-recipe-content">
            <header class="wc-recipe-header"><div><p class="wc-recipe-eyebrow">Wednesday, July 15</p><h1>Good morning, Henry.</h1><p class="wc-recipe-lede">A calm overview of the work that needs your attention today.</p></div><Button size="sm"><template #startIcon><Icon name="plus" :size="16" /></template>New project</Button></header>
            <section class="wc-recipe-section"><div class="wc-recipe-section-head"><h2>Workspace health</h2><span class="wc-recipe-muted">Last 30 days</span></div><div class="wc-recipe-metrics"><div v-for="metric in metrics" :key="metric[0]" class="wc-recipe-metric"><div class="wc-recipe-metric-label">{{ metric[0] }}</div><div class="wc-recipe-metric-value">{{ metric[1] }}</div><div class="wc-recipe-metric-delta">{{ metric[2] }}</div></div></div></section>
            <section class="wc-recipe-section"><div class="wc-recipe-section-head"><h2>Recent activity</h2><Button variant="text" size="sm">View all</Button></div><div class="wc-recipe-activity"><div v-for="item in activity" :key="item[0]" class="wc-recipe-row"><span class="wc-recipe-dot" /><div class="wc-recipe-row-main"><div class="wc-recipe-row-title">{{ item[0] }}</div><div class="wc-recipe-row-copy">{{ item[1] }}</div></div><button class="wc-recipe-icon-button"><Icon name="more-horizontal" :size="18" /></button></div></div></section>
          </div></section>
        </div>
      </main>`
  })
}

export const Settings = {
  render: () => ({
    components: shared,
    data: () => ({ weekly: true, mentions: true }),
    template: `
      <main class="wc-recipe">
        <header class="wc-recipe-topbar"><div class="wc-recipe-brand"><span class="wc-recipe-mark">W</span>Workspace settings</div><div class="wc-recipe-user"><button class="wc-recipe-icon-button"><Icon name="help-circle" :size="18" /></button><span class="wc-recipe-avatar">HZ</span></div></header>
        <section class="wc-recipe-main"><div class="wc-recipe-content"><header class="wc-recipe-header"><div><p class="wc-recipe-eyebrow">Preferences</p><h1>Settings</h1><p class="wc-recipe-lede">Manage the workspace without turning every choice into a card.</p></div></header>
          <div class="wc-recipe-settings"><nav class="wc-recipe-settings-menu wc-recipe-nav"><button class="wc-recipe-nav-item is-active">Profile</button><button class="wc-recipe-nav-item">Notifications</button><button class="wc-recipe-nav-item">Appearance</button><button class="wc-recipe-nav-item">Security</button></nav>
            <div class="wc-recipe-settings-form"><section class="wc-recipe-setting-group"><div><h2 class="wc-recipe-setting-title">Profile</h2><p class="wc-recipe-setting-copy">How you appear to other workspace members.</p></div><div class="wc-recipe-field-grid"><TextField full-width label="Display name" model-value="Henry Zhao" /><TextField full-width label="Role" model-value="Product designer" /></div><TextField full-width label="Bio" multiline :rows="3" model-value="Building tools that feel calm and obvious." /></section>
              <section class="wc-recipe-setting-group"><div><h2 class="wc-recipe-setting-title">Notifications</h2><p class="wc-recipe-setting-copy">Choose which updates are worth interrupting you for.</p></div><div class="wc-recipe-setting-control"><div><div class="wc-recipe-row-title">Weekly summary</div><div class="wc-recipe-row-copy">A quiet digest every Monday</div></div><Switch v-model="weekly" /></div><div class="wc-recipe-setting-control"><div><div class="wc-recipe-row-title">Mentions and replies</div><div class="wc-recipe-row-copy">Notify me when a teammate needs me</div></div><Switch v-model="mentions" /></div></section>
              <div class="wc-recipe-form-actions"><Button variant="text">Cancel</Button><Button>Save changes</Button></div>
            </div>
          </div>
        </div></section>
      </main>`
  })
}

export const ListDetail = {
  render: () => ({
    components: shared,
    data: () => ({ notes: [['Design critique notes', 'Today', 'Decisions and open questions from the weekly review.'], ['Research synthesis', 'Mon', 'Patterns from eight customer interviews.'], ['Launch checklist', 'Jul 10', 'Owners, milestones and the remaining risks.'], ['API naming', 'Jul 8', 'A smaller vocabulary for the public surface.']] }),
    template: `
      <main class="wc-recipe"><header class="wc-recipe-topbar"><div class="wc-recipe-brand"><span class="wc-recipe-mark">W</span>Notes</div><div class="wc-recipe-user"><button class="wc-recipe-icon-button"><Icon name="search" :size="18" /></button><span class="wc-recipe-avatar">HZ</span></div></header>
        <div class="wc-recipe-split"><aside class="wc-recipe-list"><div class="wc-recipe-list-head"><p class="wc-recipe-eyebrow">Shared workspace</p><h1>Notes</h1></div><div class="wc-recipe-list-items"><button v-for="(note, index) in notes" :key="note[0]" class="wc-recipe-list-item" :class="{ 'is-active': index === 0 }"><div class="wc-recipe-list-item-top"><span class="wc-recipe-list-item-title">{{ note[0] }}</span><span class="wc-recipe-list-item-time">{{ note[1] }}</span></div><div class="wc-recipe-list-item-copy">{{ note[2] }}</div></button></div></aside>
          <article class="wc-recipe-detail"><div class="wc-recipe-detail-inner"><p class="wc-recipe-eyebrow">Product design</p><h1>Design critique notes</h1><div class="wc-recipe-detail-meta"><span>Updated 12 minutes ago</span><span>4 collaborators</span></div><div class="wc-recipe-detail-body"><p>The new direction feels calmer because hierarchy now comes from spacing and typography. Persistent containers have been removed from navigation and summary content.</p><h2>Decisions</h2><p>Keep the canvas visually continuous. Use a subtle background only for hover, selection, inputs and temporary floating surfaces. Reserve borders for fields where the boundary carries meaning.</p><h2>Next review</h2><p>Test the four core page recipes in both themes and at compact widths before applying the pattern to specialized components.</p></div></div></article>
        </div>
      </main>`
  })
}

export const FormPage = {
  render: () => ({
    components: shared,
    data: () => ({ privateProject: false }),
    template: `
      <main class="wc-recipe"><div class="wc-recipe-form-page"><p class="wc-recipe-eyebrow">New workspace</p><h1>Create a project</h1><p class="wc-recipe-lede">Collect just enough information to get the team moving.</p>
        <form class="wc-recipe-form" @submit.prevent><section class="wc-recipe-form-section"><h2>Project details</h2><p>Names and context can be changed later.</p><TextField full-width required label="Project name" placeholder="Website refresh" /><TextField full-width label="Description" multiline :rows="4" placeholder="What does success look like?" /></section><section class="wc-recipe-form-section"><h2>Ownership</h2><p>Give teammates a clear place to start.</p><div class="wc-recipe-field-grid"><TextField full-width label="Team" model-value="Product design" /><TextField full-width label="Project lead" model-value="Maya Chen" /></div><div class="wc-recipe-setting-control"><div><div class="wc-recipe-row-title">Private project</div><div class="wc-recipe-row-copy">Only invited members can access it</div></div><Switch v-model="privateProject" /></div></section><div class="wc-recipe-form-actions"><Button type="button" variant="text">Save draft</Button><Button type="submit">Create project</Button></div></form>
      </div></main>`
  })
}

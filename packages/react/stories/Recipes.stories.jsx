import React, { useState } from 'react'
import Button from '@/components/Button/Button.jsx'
import Icon from '@/components/Icon/Icon.jsx'
import Switch from '@/components/Switch/Switch.jsx'
import TextField from '@/components/TextField/TextField.jsx'
import './Recipes.css'

export default {
  title: 'Recipes/Product pages',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Page recipes built from quiet surfaces, typography, icons and hover states.' } },
  },
}

const I = ({ name, size = 18 }) => <Icon name={name} size={size} />

function Topbar ({ title = 'Watercolor' }) {
  return (
    <header className="wc-recipe-topbar">
      <div className="wc-recipe-brand"><span className="wc-recipe-mark">W</span>{title}</div>
      <div className="wc-recipe-user">
        <button className="wc-recipe-icon-button" aria-label="Notifications"><I name="bell" /></button>
        <span className="wc-recipe-avatar">HZ</span>
      </div>
    </header>
  )
}

const nav = [
  ['home', 'Overview'], ['folder', 'Projects'], ['users', 'Team'], ['activity', 'Activity'],
]

function Sidebar ({ active = 'Overview' }) {
  return (
    <aside className="wc-recipe-sidebar">
      <nav className="wc-recipe-nav">
        {nav.map(([icon, label]) => (
          <button key={label} className={`wc-recipe-nav-item ${label === active ? 'is-active' : ''}`}>
            <I name={icon} /><span>{label}</span>
          </button>
        ))}
        <div className="wc-recipe-nav-label">Workspace</div>
        <button className="wc-recipe-nav-item"><I name="settings" /><span>Settings</span></button>
        <button className="wc-recipe-nav-item"><I name="help-circle" /><span>Help</span></button>
      </nav>
    </aside>
  )
}

export const Dashboard = {
  render: () => (
    <main className="wc-recipe">
      <Topbar />
      <div className="wc-recipe-layout">
        <Sidebar />
        <section className="wc-recipe-main">
          <div className="wc-recipe-content">
            <header className="wc-recipe-header">
              <div><p className="wc-recipe-eyebrow">Wednesday, July 15</p><h1>Good morning, Henry.</h1><p className="wc-recipe-lede">A calm overview of the work that needs your attention today.</p></div>
              <Button size="sm" startIcon={<I name="plus" size={16} />}>New project</Button>
            </header>
            <section className="wc-recipe-section">
              <div className="wc-recipe-section-head"><h2>Workspace health</h2><span className="wc-recipe-muted">Last 30 days</span></div>
              <div className="wc-recipe-metrics">
                {[['Active projects', '24', '+3 this month'], ['Tasks completed', '184', '12 today'], ['Team members', '16', '2 invited'], ['Response time', '1.8h', '18% faster']].map(([label, value, delta]) => (
                  <div className="wc-recipe-metric" key={label}><div className="wc-recipe-metric-label">{label}</div><div className="wc-recipe-metric-value">{value}</div><div className="wc-recipe-metric-delta">{delta}</div></div>
                ))}
              </div>
            </section>
            <section className="wc-recipe-section">
              <div className="wc-recipe-section-head"><h2>Recent activity</h2><Button variant="text" size="sm">View all</Button></div>
              <div className="wc-recipe-activity">
                {[['Maya updated the onboarding flow', 'Design system · 12 minutes ago'], ['Alex resolved 8 accessibility issues', 'Website refresh · 1 hour ago'], ['Quarterly research plan was shared', 'Customer insights · Yesterday']].map(([title, copy]) => (
                  <div className="wc-recipe-row" key={title}><span className="wc-recipe-dot" /><div className="wc-recipe-row-main"><div className="wc-recipe-row-title">{title}</div><div className="wc-recipe-row-copy">{copy}</div></div><button className="wc-recipe-icon-button"><I name="more-horizontal" /></button></div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  ),
}

export const Settings = {
  render: () => {
    const [weekly, setWeekly] = useState(true)
    const [mentions, setMentions] = useState(true)
    return (
      <main className="wc-recipe">
        <Topbar title="Workspace settings" />
        <section className="wc-recipe-main"><div className="wc-recipe-content">
          <header className="wc-recipe-header"><div><p className="wc-recipe-eyebrow">Preferences</p><h1>Settings</h1><p className="wc-recipe-lede">Manage the workspace without turning every choice into a card.</p></div></header>
          <div className="wc-recipe-settings">
            <nav className="wc-recipe-settings-menu wc-recipe-nav">
              {['Profile', 'Notifications', 'Appearance', 'Security'].map((label, index) => <button className={`wc-recipe-nav-item ${index === 0 ? 'is-active' : ''}`} key={label}>{label}</button>)}
            </nav>
            <div className="wc-recipe-settings-form">
              <section className="wc-recipe-setting-group"><div><h2 className="wc-recipe-setting-title">Profile</h2><p className="wc-recipe-setting-copy">How you appear to other workspace members.</p></div><div className="wc-recipe-field-grid"><TextField fullWidth label="Display name" value="Henry Zhao" /><TextField fullWidth label="Role" value="Product designer" /></div><TextField fullWidth label="Bio" multiline rows={3} value="Building tools that feel calm and obvious." /></section>
              <section className="wc-recipe-setting-group"><div><h2 className="wc-recipe-setting-title">Notifications</h2><p className="wc-recipe-setting-copy">Choose which updates are worth interrupting you for.</p></div><div className="wc-recipe-setting-control"><div><div className="wc-recipe-row-title">Weekly summary</div><div className="wc-recipe-row-copy">A quiet digest every Monday</div></div><Switch checked={weekly} onChange={setWeekly} /></div><div className="wc-recipe-setting-control"><div><div className="wc-recipe-row-title">Mentions and replies</div><div className="wc-recipe-row-copy">Notify me when a teammate needs me</div></div><Switch checked={mentions} onChange={setMentions} /></div></section>
              <div className="wc-recipe-form-actions"><Button variant="text">Cancel</Button><Button>Save changes</Button></div>
            </div>
          </div>
        </div></section>
      </main>
    )
  },
}

const notes = [
  ['Design critique notes', 'Today', 'Decisions and open questions from the weekly review.'],
  ['Research synthesis', 'Mon', 'Patterns from eight customer interviews.'],
  ['Launch checklist', 'Jul 10', 'Owners, milestones and the remaining risks.'],
  ['API naming', 'Jul 8', 'A smaller vocabulary for the public surface.'],
]

export const ListDetail = {
  render: () => (
    <main className="wc-recipe">
      <Topbar title="Notes" />
      <div className="wc-recipe-split">
        <aside className="wc-recipe-list"><div className="wc-recipe-list-head"><p className="wc-recipe-eyebrow">Shared workspace</p><h1>Notes</h1></div><div className="wc-recipe-list-items">{notes.map(([title, time, copy], index) => <button key={title} className={`wc-recipe-list-item ${index === 0 ? 'is-active' : ''}`}><div className="wc-recipe-list-item-top"><span className="wc-recipe-list-item-title">{title}</span><span className="wc-recipe-list-item-time">{time}</span></div><div className="wc-recipe-list-item-copy">{copy}</div></button>)}</div></aside>
        <article className="wc-recipe-detail"><div className="wc-recipe-detail-inner"><p className="wc-recipe-eyebrow">Product design</p><h1>Design critique notes</h1><div className="wc-recipe-detail-meta"><span>Updated 12 minutes ago</span><span>4 collaborators</span></div><div className="wc-recipe-detail-body"><p>The new direction feels calmer because hierarchy now comes from spacing and typography. Persistent containers have been removed from navigation and summary content.</p><h2>Decisions</h2><p>Keep the canvas visually continuous. Use a subtle background only for hover, selection, inputs and temporary floating surfaces. Reserve borders for fields where the boundary carries meaning.</p><h2>Next review</h2><p>Test the four core page recipes in both themes and at compact widths before applying the pattern to specialized components.</p></div></div></article>
      </div>
    </main>
  ),
}

export const FormPage = {
  render: () => {
    const [privateProject, setPrivateProject] = useState(false)
    return (
      <main className="wc-recipe"><div className="wc-recipe-form-page"><p className="wc-recipe-eyebrow">New workspace</p><h1>Create a project</h1><p className="wc-recipe-lede">Collect just enough information to get the team moving.</p><form className="wc-recipe-form"><section className="wc-recipe-form-section"><h2>Project details</h2><p>Names and context can be changed later.</p><TextField fullWidth required label="Project name" placeholder="Website refresh" /><TextField fullWidth label="Description" multiline rows={4} placeholder="What does success look like?" /></section><section className="wc-recipe-form-section"><h2>Ownership</h2><p>Give teammates a clear place to start.</p><div className="wc-recipe-field-grid"><TextField fullWidth label="Team" value="Product design" /><TextField fullWidth label="Project lead" value="Maya Chen" /></div><div className="wc-recipe-setting-control"><div><div className="wc-recipe-row-title">Private project</div><div className="wc-recipe-row-copy">Only invited members can access it</div></div><Switch checked={privateProject} onChange={setPrivateProject} /></div></section><div className="wc-recipe-form-actions"><Button type="button" variant="text">Save draft</Button><Button type="submit">Create project</Button></div></form></div></main>
    )
  },
}

import Button from '@/components/Button/Button.jsx'
import IconButton from '@/components/Button/IconButton.jsx'
import Icon from '@/components/Icon/Icon.jsx'
import List from '@/components/List/List.jsx'
import ListItem from '@/components/List/ListItem.jsx'
import ListItemIcon from '@/components/List/ListItemIcon.jsx'
import ListItemText from '@/components/List/ListItemText.jsx'
import Menu from '@/components/Menu/Menu.jsx'
import './Interaction.css'

const menuItems = [
  { key: 'rename', label: 'Rename', icon: '✎' },
  { key: 'favorite', label: 'Add to favorites', icon: '☆', selected: true },
  { key: 'share', label: 'Share', icon: '↗' },
  { divider: true },
  { key: 'delete', label: 'Delete', icon: '×', danger: true }
]

const navItems = [
  { icon: 'message-square', title: 'Conversations', detail: 'Continue recent work' },
  { icon: 'folder', title: 'Projects', detail: 'Organize shared context', selected: true },
  { icon: 'clock-3', title: 'Scheduled', detail: 'No upcoming tasks' },
  { icon: 'archive', title: 'Archive', detail: 'Unavailable in this workspace', disabled: true }
]

export default {
  title: 'Foundations/Interaction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The shared interaction language for quiet, borderless Watercolor interfaces.'
      }
    }
  }
}

export const QuietStates = {
  render: () => (
    <main className="wc-interaction-page">
      <div className="wc-interaction-shell">
        <header className="wc-interaction-intro">
          <p className="wc-interaction-eyebrow">Watercolor interaction</p>
          <h1 className="wc-interaction-title">Quiet until it matters.</h1>
          <p className="wc-interaction-description">
            Text and icons carry the interface. Surfaces appear only to explain hover, selection, focus, or hierarchy.
          </p>
        </header>

        <section aria-labelledby="button-states">
          <h2 id="button-states" className="wc-interaction-section-title">Button states</h2>
          <div className="wc-interaction-states">
            <div className="wc-interaction-state"><span className="wc-interaction-label">Default</span><div className="wc-interaction-control"><Button startIcon="＋">New project</Button></div></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Hover</span><div className="wc-interaction-control"><Button className="wc-interaction-force-hover" startIcon="＋">New project</Button></div></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Focus</span><div className="wc-interaction-control"><Button className="wc-interaction-force-focus" startIcon="＋">New project</Button></div></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Disabled</span><div className="wc-interaction-control"><Button startIcon="＋" disabled>New project</Button></div></div>
          </div>
        </section>

        <section className="wc-interaction-section" aria-labelledby="icon-states">
          <h2 id="icon-states" className="wc-interaction-section-title">Icon button states</h2>
          <div className="wc-interaction-states">
            <div className="wc-interaction-state"><span className="wc-interaction-label">Default</span><IconButton aria-label="Settings"><Icon name="settings" size={20} /></IconButton></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Hover</span><IconButton className="wc-interaction-force-hover" aria-label="Settings"><Icon name="settings" size={20} /></IconButton></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Focus</span><IconButton className="wc-interaction-force-focus" aria-label="Settings"><Icon name="settings" size={20} /></IconButton></div>
            <div className="wc-interaction-state"><span className="wc-interaction-label">Disabled</span><IconButton disabled aria-label="Settings"><Icon name="settings" size={20} /></IconButton></div>
          </div>
        </section>

        <section className="wc-interaction-section wc-interaction-example" aria-label="Composed interaction examples">
          <div>
            <h2 className="wc-interaction-section-title">Navigation list</h2>
            <List className="wc-interaction-list" disablePadding>
              {navItems.map((item) => (
                <ListItem key={item.title} button selected={item.selected} disabled={item.disabled}>
                  <ListItemIcon><Icon name={item.icon} size={20} /></ListItemIcon>
                  <ListItemText primary={item.title} secondary={item.detail} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className="wc-interaction-menu-area">
            <h2 className="wc-interaction-section-title">Menu</h2>
            <p className="wc-interaction-note">Open the menu to inspect hover, selected, and danger states.</p>
            <Menu triggerText="Project actions" items={menuItems} />
          </div>
        </section>
      </div>
    </main>
  )
}

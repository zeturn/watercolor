import Button from '../src/components/Button/Button.vue'
import IconButton from '../src/components/Button/IconButton.vue'
import Icon from '../src/components/Icon/Icon.vue'
import List from '../src/components/List/List.vue'
import ListItem from '../src/components/List/ListItem.vue'
import ListItemIcon from '../src/components/List/ListItemIcon.vue'
import ListItemText from '../src/components/List/ListItemText.vue'
import Menu from '../src/components/Menu/Menu.vue'
import './Interaction.css'

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
  render: () => ({
    components: { Button, IconButton, Icon, List, ListItem, ListItemIcon, ListItemText, Menu },
    data: () => ({
      menuItems: [
        { key: 'rename', label: 'Rename', icon: '✎' },
        { key: 'favorite', label: 'Add to favorites', icon: '☆', selected: true },
        { key: 'share', label: 'Share', icon: '↗' },
        { divider: true },
        { key: 'delete', label: 'Delete', icon: '×', danger: true }
      ],
      navItems: [
        { icon: 'message-square', title: 'Conversations', detail: 'Continue recent work' },
        { icon: 'folder', title: 'Projects', detail: 'Organize shared context', selected: true },
        { icon: 'clock-3', title: 'Scheduled', detail: 'No upcoming tasks' },
        { icon: 'archive', title: 'Archive', detail: 'Unavailable in this workspace', disabled: true }
      ]
    }),
    template: `
      <main class="wc-interaction-page">
        <div class="wc-interaction-shell">
          <header class="wc-interaction-intro">
            <p class="wc-interaction-eyebrow">Watercolor interaction</p>
            <h1 class="wc-interaction-title">Quiet until it matters.</h1>
            <p class="wc-interaction-description">
              Text and icons carry the interface. Surfaces appear only to explain hover, selection, focus, or hierarchy.
            </p>
          </header>

          <section aria-labelledby="button-states">
            <h2 id="button-states" class="wc-interaction-section-title">Button states</h2>
            <div class="wc-interaction-states">
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Default</span>
                <div class="wc-interaction-control"><Button start-icon="＋">New project</Button></div>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Hover</span>
                <div class="wc-interaction-control"><Button class="wc-interaction-force-hover" start-icon="＋">New project</Button></div>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Focus</span>
                <div class="wc-interaction-control"><Button class="wc-interaction-force-focus" start-icon="＋">New project</Button></div>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Disabled</span>
                <div class="wc-interaction-control"><Button start-icon="＋" disabled>New project</Button></div>
              </div>
            </div>
          </section>

          <section class="wc-interaction-section" aria-labelledby="icon-states">
            <h2 id="icon-states" class="wc-interaction-section-title">Icon button states</h2>
            <div class="wc-interaction-states">
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Default</span>
                <IconButton aria-label="Settings"><Icon name="settings" :size="20" /></IconButton>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Hover</span>
                <IconButton class="wc-interaction-force-hover" aria-label="Settings"><Icon name="settings" :size="20" /></IconButton>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Focus</span>
                <IconButton class="wc-interaction-force-focus" aria-label="Settings"><Icon name="settings" :size="20" /></IconButton>
              </div>
              <div class="wc-interaction-state">
                <span class="wc-interaction-label">Disabled</span>
                <IconButton disabled aria-label="Settings"><Icon name="settings" :size="20" /></IconButton>
              </div>
            </div>
          </section>

          <section class="wc-interaction-section wc-interaction-example" aria-label="Composed interaction examples">
            <div>
              <h2 class="wc-interaction-section-title">Navigation list</h2>
              <List component="div" class="wc-interaction-list" disable-padding>
                <ListItem
                  v-for="item in navItems"
                  :key="item.title"
                  button
                  :selected="item.selected"
                  :disabled="item.disabled"
                >
                  <ListItemIcon><Icon :name="item.icon" :size="20" /></ListItemIcon>
                  <ListItemText :primary="item.title" :secondary="item.detail" />
                </ListItem>
              </List>
            </div>
            <div class="wc-interaction-menu-area">
              <h2 class="wc-interaction-section-title">Menu</h2>
              <p class="wc-interaction-note">Open the menu to inspect hover, selected, and danger states.</p>
              <Menu trigger-text="Project actions" :items="menuItems" />
            </div>
          </section>
        </div>
      </main>
    `
  })
}

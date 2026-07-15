import Accordion from '../src/components/Accordion/Accordion.vue'
import AppBar from '../src/components/AppBar/AppBar.vue'
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb.vue'
import HoverCard from '../src/components/HoverCard/HoverCard.vue'
import Modal from '../src/components/Modal/Modal.vue'
import Pagination from '../src/components/Pagination/Pagination.vue'
import Popover from '../src/components/Popover/Popover.vue'
import SlideOver from '../src/components/SlideOver/SlideOver.vue'
import Tabs from '../src/components/Tabs/Tabs.vue'
import Tooltip from '../src/components/Tooltip/Tooltip.vue'
import './Navigation.css'

export default {
  title: 'Foundations/Navigation',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet navigation and floating layers with structure revealed by interaction.' } }
  }
}

export const QuietNavigation = {
  render: () => ({
    components: { Accordion, AppBar, Breadcrumb, HoverCard, Modal, Pagination, Popover, SlideOver, Tabs, Tooltip },
    data: () => ({
      activeTab: 0,
      currentPage: 3,
      modalOpen: false,
      slideOpen: false,
      tabs: [
        { title: 'Overview', key: 'overview' },
        { title: 'Activity', key: 'activity' },
        { title: 'Members', key: 'members' }
      ],
      breadcrumbs: [
        { label: 'Workspace' },
        { label: 'Design system' },
        { label: 'Navigation' }
      ],
      accordionItems: [
        { title: 'Why are borders removed?', content: 'Spacing, type, and interaction states carry the hierarchy before decoration is added.' },
        { title: 'When does a surface appear?', content: 'Hover, selection, expansion, and floating context reveal the surface only when it helps.' },
        { title: 'What remains explicit?', content: 'Focus rings, modal backdrops, and raised-layer shadows stay visible for clarity and accessibility.' }
      ],
      hoverData: {
        title: 'Quiet interaction',
        description: 'Hover previews use one raised surface, clear typography, and no permanent outline.',
        meta: ['Preview', 'Semantic tokens']
      }
    }),
    template: `
      <main class="wc-navigation-page">
        <div class="wc-navigation-shell">
          <header class="wc-navigation-intro">
            <p class="wc-navigation-eyebrow">Watercolor navigation</p>
            <h1 class="wc-navigation-title">Structure without chrome.</h1>
            <p class="wc-navigation-description">Navigation stays typographic and calm. Selection uses a soft surface; floating context uses depth only while it is open.</p>
          </header>

          <section class="wc-navigation-section" aria-labelledby="bar-navigation">
            <h2 id="bar-navigation" class="wc-navigation-section-title">BAR & PATH</h2>
            <AppBar position="static" color="transparent" :elevation="0" class="wc-navigation-demo-bar">
              <span class="wc-navigation-bar-title">Watercolor</span>
              <span class="wc-navigation-bar-spacer" />
              <Tooltip text="Workspace settings" placement="bottom"><button class="wc-navigation-action">Settings</button></Tooltip>
            </AppBar>
            <div style="margin-top: 20px"><Breadcrumb :items="breadcrumbs" separator="›" /></div>
          </section>

          <section class="wc-navigation-section" aria-labelledby="selection-navigation">
            <h2 id="selection-navigation" class="wc-navigation-section-title">SELECTION & DISCLOSURE</h2>
            <div class="wc-navigation-grid">
              <div class="wc-navigation-block">
                <p class="wc-navigation-label">Tabs</p>
                <Tabs v-model="activeTab" :tabs="tabs"><p class="wc-navigation-tab-copy">{{ tabs[activeTab].title }} keeps the current context visible without introducing a permanent divider.</p></Tabs>
              </div>
              <div class="wc-navigation-block">
                <p class="wc-navigation-label">Accordion</p>
                <Accordion :items="accordionItems" />
              </div>
              <div class="wc-navigation-block">
                <p class="wc-navigation-label">Pagination</p>
                <Pagination v-model="currentPage" :current-page="currentPage" :total="120" :page-size="10" />
              </div>
              <div class="wc-navigation-block">
                <p class="wc-navigation-label">Context</p>
                <div class="wc-navigation-actions">
                  <Popover trigger-text="Open popover"><p class="wc-navigation-popover-copy">A raised surface appears only while context is requested.</p></Popover>
                  <HoverCard trigger-text="Preview details" :card-data="hoverData" position="bottom" />
                  <Tooltip text="Short, secondary guidance" placement="bottom"><button class="wc-navigation-action">Hover for help</button></Tooltip>
                </div>
              </div>
            </div>
          </section>

          <section class="wc-navigation-section" aria-labelledby="overlay-navigation">
            <h2 id="overlay-navigation" class="wc-navigation-section-title">FOCUSED LAYERS</h2>
            <div class="wc-navigation-actions">
              <button class="wc-navigation-action" @click="modalOpen = true">Open modal</button>
              <button class="wc-navigation-action" @click="slideOpen = true">Open side panel</button>
            </div>
          </section>
        </div>

        <Modal v-model="modalOpen" title="Focused decision"><p class="wc-navigation-modal-copy">The backdrop reduces distraction while the raised surface remains borderless.</p></Modal>
        <SlideOver v-model="slideOpen"><template #header><strong>Workspace details</strong></template><p class="wc-navigation-modal-copy">Side panels use the same surface, spacing, close action, and backdrop logic as dialogs.</p></SlideOver>
      </main>
    `
  })
}

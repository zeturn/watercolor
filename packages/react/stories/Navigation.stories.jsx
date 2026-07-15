import React, { useState } from 'react'
import Accordion from '@/components/Accordion/Accordion.jsx'
import AppBar from '@/components/AppBar/AppBar.jsx'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'
import HoverCard from '@/components/HoverCard/HoverCard.jsx'
import Modal from '@/components/Modal/Modal.jsx'
import Pagination from '@/components/Pagination/Pagination.jsx'
import Popover from '@/components/Popover/Popover.jsx'
import SlideOver from '@/components/SlideOver/SlideOver.jsx'
import Tabs from '@/components/Tabs/Tabs.jsx'
import Tooltip from '@/components/Tooltip/Tooltip.jsx'
import './Navigation.css'

export default {
  title: 'Foundations/Navigation',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet navigation and floating layers with structure revealed by interaction.' } }
  }
}

const tabs = [
  { title: 'Overview', key: 'overview' },
  { title: 'Activity', key: 'activity' },
  { title: 'Members', key: 'members' }
]

const breadcrumbs = [
  { label: 'Workspace' },
  { label: 'Design system' },
  { label: 'Navigation' }
]

const accordionItems = [
  { title: 'Why are borders removed?', content: 'Spacing, type, and interaction states carry the hierarchy before decoration is added.' },
  { title: 'When does a surface appear?', content: 'Hover, selection, expansion, and floating context reveal the surface only when it helps.' },
  { title: 'What remains explicit?', content: 'Focus rings, modal backdrops, and raised-layer shadows stay visible for clarity and accessibility.' }
]

const hoverData = {
  title: 'Quiet interaction',
  description: 'Hover previews use one raised surface, clear typography, and no permanent outline.',
  meta: ['Preview', 'Semantic tokens']
}

export const QuietNavigation = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0)
    const [currentPage, setCurrentPage] = useState(3)
    const [modalOpen, setModalOpen] = useState(false)
    const [slideOpen, setSlideOpen] = useState(false)

    return (
      <main className="wc-navigation-page">
        <div className="wc-navigation-shell">
          <header className="wc-navigation-intro">
            <p className="wc-navigation-eyebrow">Watercolor navigation</p>
            <h1 className="wc-navigation-title">Structure without chrome.</h1>
            <p className="wc-navigation-description">Navigation stays typographic and calm. Selection uses a soft surface; floating context uses depth only while it is open.</p>
          </header>

          <section className="wc-navigation-section" aria-labelledby="bar-navigation">
            <h2 id="bar-navigation" className="wc-navigation-section-title">BAR & PATH</h2>
            <AppBar position="static" color="transparent" elevation={0} className="wc-navigation-demo-bar">
              <span className="wc-navigation-bar-title">Watercolor</span>
              <span className="wc-navigation-bar-spacer" />
              <Tooltip text="Workspace settings" placement="bottom"><button className="wc-navigation-action">Settings</button></Tooltip>
            </AppBar>
            <div style={{ marginTop: 20 }}><Breadcrumb items={breadcrumbs} separator="›" /></div>
          </section>

          <section className="wc-navigation-section" aria-labelledby="selection-navigation">
            <h2 id="selection-navigation" className="wc-navigation-section-title">SELECTION & DISCLOSURE</h2>
            <div className="wc-navigation-grid">
              <div className="wc-navigation-block">
                <p className="wc-navigation-label">Tabs</p>
                <Tabs tabs={tabs} activeIndex={activeTab} onChange={setActiveTab}><p className="wc-navigation-tab-copy">{tabs[activeTab].title} keeps the current context visible without introducing a permanent divider.</p></Tabs>
              </div>
              <div className="wc-navigation-block">
                <p className="wc-navigation-label">Accordion</p>
                <Accordion items={accordionItems} />
              </div>
              <div className="wc-navigation-block">
                <p className="wc-navigation-label">Pagination</p>
                <Pagination value={currentPage} onChange={setCurrentPage} total={120} pageSize={10} />
              </div>
              <div className="wc-navigation-block">
                <p className="wc-navigation-label">Context</p>
                <div className="wc-navigation-actions">
                  <Popover triggerText="Open popover"><p className="wc-navigation-popover-copy">A raised surface appears only while context is requested.</p></Popover>
                  <HoverCard triggerText="Preview details" cardData={hoverData} position="bottom" />
                  <Tooltip text="Short, secondary guidance" placement="bottom"><button className="wc-navigation-action">Hover for help</button></Tooltip>
                </div>
              </div>
            </div>
          </section>

          <section className="wc-navigation-section" aria-labelledby="overlay-navigation">
            <h2 id="overlay-navigation" className="wc-navigation-section-title">FOCUSED LAYERS</h2>
            <div className="wc-navigation-actions">
              <button className="wc-navigation-action" onClick={() => setModalOpen(true)}>Open modal</button>
              <button className="wc-navigation-action" onClick={() => setSlideOpen(true)}>Open side panel</button>
            </div>
          </section>
        </div>

        <Modal visible={modalOpen} onClose={() => setModalOpen(false)} title="Focused decision"><p className="wc-navigation-modal-copy">The backdrop reduces distraction while the raised surface remains borderless.</p></Modal>
        <SlideOver open={slideOpen} onClose={() => setSlideOpen(false)} header={<strong>Workspace details</strong>}><p className="wc-navigation-modal-copy">Side panels use the same surface, spacing, close action, and backdrop logic as dialogs.</p></SlideOver>
      </main>
    )
  }
}

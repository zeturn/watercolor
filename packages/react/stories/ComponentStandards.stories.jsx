import './DesignSystem.css'
import './ComponentStandards.css'

const componentStates = [
  ['Default', 'Quiet. Text and icon only unless the component is an input surface.', '--wc-state-default-bg', 'Button, Menu, Tabs, List'],
  ['Hover', 'Reveal affordance with background only. Do not add borders or shadows.', '--wc-state-hover-bg', 'Button, Select, Menu, List, Table, Tabs'],
  ['Focus', 'Keyboard focus uses a 2px ring. Hover color is not a focus substitute.', '--wc-state-focus-ring', 'All interactive controls'],
  ['Active', 'Use a short pressed background change; no scale animation by default.', '--wc-state-active-bg', 'Button, row, tab, menu item'],
  ['Selected', 'Selected state uses a quiet tint and stronger text.', '--wc-state-selected-bg', 'Tabs, Menu, Select, Table, List'],
  ['Disabled', 'Remove pointer affordance and use disabled foreground.', '--wc-state-disabled-fg', 'All controls'],
  ['Loading', 'Reserve motion for progress feedback only.', 'aria-busy / data-loading', 'Button, Table, List, Modal action'],
  ['Error', 'Use danger near the failing control plus message. Do not color whole pages red.', '--wc-state-error-ring', 'Input, Select, Table row, Modal form'],
  ['Open / expanded', 'Floating layers may use overlay surface and shadow.', '--wc-state-open-shadow', 'Select, Menu, Modal'],
  ['Empty', 'Use calm copy, optional icon, and one primary recovery action.', '--wc-state-empty-fg', 'Table, List, Select']
]

const densitySpecs = [
  ['Small', '32px', 'Dense admin tables and secondary actions', 'sm'],
  ['Medium', '40px', 'Default product controls', 'md'],
  ['Large', '48px', 'Primary page actions and forms', 'lg'],
  ['Touch', '44px min', 'Mobile icon and row targets', 'touch']
]

const rowRhythm = [
  ['Compact row', '36px min', 'Dense menus, select options, compact lists', 'compact'],
  ['Default row', '44px min', 'Default list, table, mobile-safe menu item', 'default'],
  ['Comfortable row', '52px min', 'Settings pages, two-line list item', 'comfortable'],
  ['Selected row', 'selected tint', 'Use tint; avoid permanent outlines', 'selected']
]

const overlayRules = [
  ['Anchor', 'Trigger keeps focus and receives restored focus on close.'],
  ['Layer', 'Overlay surface, radius xl, shadow allowed because it floats.'],
  ['Collision', 'Flip / shift before clipping content. Keep at least 8px viewport gutter.'],
  ['Nested', 'Nested overlays share stack, Escape closes the topmost layer first.']
]

export default {
  title: 'Design System/Component Standards',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Watercolor component state and composition standards for React and Vue parity.'
      }
    }
  }
}

export const StateContract = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Component states</p>
          <h1 className="wc-ds-title">One state language across core components.</h1>
          <p className="wc-ds-lede">
            Button, Input, Select, Menu, Table, Modal, Tabs, and List should expose the same
            visual contract: quiet by default, background on intent, ring on focus, shadow only for floating layers.
          </p>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">State matrix</h2>
          <div className="wc-cs-matrix">
            {componentStates.map(([state, rule, token, scope]) => (
              <div className="wc-cs-state-row" data-state={state.toLowerCase().split(' ')[0]} key={state}>
                <span className="wc-cs-state-name">{state}</span>
                <span>{rule}</span>
                <span className="wc-cs-token">{token}</span>
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const DensityAndRhythm = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Density</p>
          <h1 className="wc-ds-title">Controls and rows share a rhythm.</h1>
          <p className="wc-ds-lede">
            Density is a product decision, not a per-component guess. Keep control heights,
            list rows, menu items, and table rows aligned.
          </p>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">Button density</h2>
          <div className="wc-cs-density">
            {densitySpecs.map(([name, size, use, key]) => (
              <article className="wc-cs-density-item" key={name}>
                <button className="wc-cs-button-demo" data-size={key} data-variant={key === 'lg' ? 'filled' : undefined}>{name}</button>
                <strong>{size}</strong>
                <span>{use}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">List and table rhythm</h2>
          <div className="wc-cs-rhythm-table">
            {rowRhythm.map(([name, size, rule, state]) => (
              <div className="wc-cs-spec-row" data-density={state} data-state={state} key={name}>
                <span className="wc-cs-spec-name">{name}</span>
                <span>{rule}</span>
                <span className="wc-cs-token">{size}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const FormAndFieldRhythm = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Forms</p>
          <h1 className="wc-ds-title">Fields are calm until they need attention.</h1>
          <p className="wc-ds-lede">
            Inputs and selects use subtle surfaces by default. Focus and error are the only
            persistent outlines in the default visual language.
          </p>
        </section>

        <section className="wc-cs-form-grid">
          <label className="wc-cs-field">
            <span className="wc-cs-label">Default field</span>
            <span className="wc-cs-input">Placeholder text</span>
            <span className="wc-cs-helper">Helper text is 12px and quiet.</span>
          </label>
          <label className="wc-cs-field">
            <span className="wc-cs-label">Focused field</span>
            <span className="wc-cs-input" data-state="focus">Keyboard focus ring</span>
            <span className="wc-cs-helper">Focus is visible without adding decoration.</span>
          </label>
          <label className="wc-cs-field">
            <span className="wc-cs-label">Error field</span>
            <span className="wc-cs-input" data-state="error">Invalid value</span>
            <span className="wc-cs-helper" data-state="error">Explain the error next to the field.</span>
          </label>
          <label className="wc-cs-field">
            <span className="wc-cs-label">Disabled field</span>
            <span className="wc-cs-input" data-state="disabled">Unavailable</span>
            <span className="wc-cs-helper">Disabled text and background reduce affordance.</span>
          </label>
        </section>
      </div>
    </main>
  )
}

export const OverlayAndMenuAnatomy = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Overlays</p>
          <h1 className="wc-ds-title">Floating layers get the only default shadow.</h1>
          <p className="wc-ds-lede">
            Modal, Menu, and Select share placement, stack, focus return, outside click,
            and Escape behavior through the interaction kernel.
          </p>
        </section>

        <section className="wc-ds-grid wc-ds-grid--two">
          <article className="wc-cs-overlay-stage">
            <button className="wc-cs-button-demo wc-cs-anchor" data-size="md">Trigger</button>
            <div className="wc-cs-popover">
              <div className="wc-cs-anatomy-row" data-state="hover"><span>⌘</span><span>New item</span><span>⌘N</span></div>
              <div className="wc-cs-anatomy-row" data-state="selected"><span>✓</span><span>Selected item</span><span /></div>
              <div className="wc-cs-anatomy-row"><span>⌫</span><span>Archive</span><span /></div>
            </div>
          </article>
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Placement contract</span>
            <h2 className="wc-ds-rule-title">Overlay rules</h2>
            <ul className="wc-ds-checklist">
              {overlayRules.map(([name, rule]) => <li key={name}><strong>{name}</strong> — {rule}</li>)}
            </ul>
          </article>
        </section>
      </div>
    </main>
  )
}

export const EmptyLoadingErrorPatterns = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Feedback patterns</p>
          <h1 className="wc-ds-title">Empty, loading, and error states stay useful.</h1>
          <p className="wc-ds-lede">
            These states should explain what happened and provide the smallest useful next action.
          </p>
        </section>

        <section className="wc-cs-patterns">
          <article className="wc-cs-pattern" data-state="empty">
            <strong>No projects yet</strong>
            <span>Create a project to start tracking work.</span>
            <button className="wc-cs-button-demo" data-size="md" data-state="hover">Create project</button>
          </article>
          <article className="wc-cs-pattern" data-state="loading">
            <strong>Loading workspace</strong>
            <span>Use progress motion only while data is genuinely pending.</span>
          </article>
          <article className="wc-cs-pattern" data-state="error">
            <strong>Couldn’t save changes</strong>
            <span>Keep the message close to the failed action.</span>
            <button className="wc-cs-button-demo" data-size="md">Try again</button>
          </article>
        </section>
      </div>
    </main>
  )
}

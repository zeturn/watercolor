import './DesignSystem.css'

const principles = [
  ['01', 'Structure before decoration', '页面先用 Page、Stack、Inline、Split 建立信息节奏，再放入具体组件。不要先套 Card。'],
  ['02', 'Text and icons carry the interface', '默认界面主要由文字、图标、留白和排列表达层级；背景只在必要状态出现。'],
  ['03', 'Chrome appears on interaction', 'hover、selected、focus、open、error 才出现背景、焦点环或浮层阴影。默认态保持安静。'],
  ['04', 'One rhythm, many pages', '页面、表单、列表、工具栏都使用同一组 spacing token，不在业务里随手写间距。'],
  ['05', 'Surfaces are semantic', 'canvas 是页面，subtle 是输入/弱分组，overlay 是临时浮层；shadow 只给真正漂浮的层。'],
  ['06', 'Responsive is a rule, not a patch', '宽度收缩时先折叠 Split，再让 Inline wrap，最后减少 gutter，不临时挤压内容。']
]

const spacing = [
  ['2xs', '4px', 'icon 与短文本、badge 内部'],
  ['xs', '8px', 'label 到 input、caption 到标题'],
  ['sm', '12px', 'toolbar items、list compact row'],
  ['md', '16px', '默认字段间距、普通 stack'],
  ['lg', '24px', 'section 内部块间距'],
  ['xl', '32px', 'section 到主要内容'],
  ['2xl', '48px', '页面大区块'],
  ['3xl', '72px', 'hero 到主体、长页面章节']
]

const typeRows = [
  ['Display', 'h1', 'What’s on your mind?', '页面唯一主问题 / landing hero'],
  ['Page title', 'h2', 'Workspace overview', '产品页标题'],
  ['Section title', 'h3', 'Recent activity', '区块标题'],
  ['Body', 'body', 'Use body text for readable product copy and descriptions.', '说明文字'],
  ['Caption', 'caption', 'Updated 12 minutes ago', '元信息 / 辅助信息']
]

const surfaces = [
  ['Canvas', 'The page background. It should do almost nothing.', 'default', 'no border'],
  ['Hover', 'A row, button, or nav item becomes visible only under intent.', 'hover', 'background only'],
  ['Selected', 'Selection uses a quiet tint, not a permanent border.', 'selected', 'subtle fill'],
  ['Overlay', 'Menus, popovers, modals may float above the page.', 'open', 'shadow allowed']
]

const checklist = [
  'Page owns max-width and gutters. Do not duplicate page padding inside every section.',
  'Stack owns vertical rhythm. Prefer gap tokens over margins between siblings.',
  'Inline owns toolbar and row alignment. Let it wrap unless truncation is intentional.',
  'Split owns two-column product layouts. Collapse by sm / md / lg, not by one-off CSS.',
  'Card is reserved for portable objects. Use headings and whitespace for normal grouping.',
  'Default state has no border or shadow. Exceptions must be focus, error, overlay, media, or explicit variant.'
]

const paletteGroups = [
  ['Primary', 'primary', 'Brand actions, focus, active navigation', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]],
  ['Neutral', 'neutral', 'Canvas, text, subtle surfaces, dividers', [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]],
  ['Success', 'success', 'Positive status only', [50, 100, 300, 500, 700, 900]],
  ['Warning', 'warning', 'Attention without danger', [50, 100, 300, 500, 700, 900]],
  ['Error', 'error', 'Destructive and validation states', [50, 100, 300, 500, 700, 900]],
  ['Info', 'info', 'Informational status', [50, 100, 300, 500, 700, 900]]
]

const semanticColors = [
  ['Canvas', '--wc-surface-canvas', 'Page background'],
  ['Subtle', '--wc-surface-subtle', 'Inputs, weak grouping, skeletons'],
  ['Overlay', '--wc-surface-overlay', 'Modal, popover, menu surfaces'],
  ['Text primary', '--wc-text-primary', 'Main reading text'],
  ['Text secondary', '--wc-text-secondary', 'Descriptions and helper copy'],
  ['Text tertiary', '--wc-text-tertiary', 'Metadata and quiet hints'],
  ['Accent', '--wc-accent', 'Primary action and active state'],
  ['Focus ring', '--wc-focus-ring', 'Keyboard focus only'],
  ['Danger', '--wc-danger', 'Error and destructive intent'],
  ['Border subtle', '--wc-border-subtle', 'Rare dividers and high-contrast fallback']
]

const fontFamilies = [
  ['System', '--wc-font-family', 'Default product UI'],
  ['Chinese', '--wc-font-chinese', 'Optional CJK override'],
  ['English', '--wc-font-english', 'Optional Latin override'],
  ['Mono', '--wc-font-mono', 'Code, numeric counters, technical values']
]

const typeScaleFull = [
  ['xs', '12px', 'Captions, dense metadata', '--wc-font-size-xs'],
  ['sm', '14px', 'Secondary UI, compact rows', '--wc-font-size-sm'],
  ['md', '16px', 'Default body and controls', '--wc-font-size-md'],
  ['lg', '18px', 'Large body, section lead', '--wc-font-size-lg'],
  ['xl', '20px', 'Small title', '--wc-font-size-xl'],
  ['2xl', '24px', 'Section title', '--wc-font-size-2xl'],
  ['3xl', '30px', 'Page subsection title', '--wc-font-size-3xl'],
  ['4xl', '36px', 'Page title', '--wc-font-size-4xl'],
  ['5xl', '48px', 'Large title', '--wc-font-size-5xl'],
  ['6xl', '64px', 'Hero display', '--wc-font-size-6xl']
]

const fontWeights = [
  ['Regular', '400', 'Body and long reading'],
  ['Medium', '500', 'Controls and compact labels'],
  ['Semibold', '600', 'Titles and important UI'],
  ['Bold', '700', 'Rare emphasis, badges, eyebrow labels']
]

const radiusScale = [
  ['none', '0', 'Reset / sharp alignment'],
  ['xs', '2px', 'Tiny decoration only'],
  ['sm', '4px', 'Small media and skeletons'],
  ['md', '6px', 'Checkboxes, chips, small controls'],
  ['lg', '8px', 'Buttons and compact fields'],
  ['xl', '12px', 'Inputs and list affordances'],
  ['2xl', '16px', 'Cards only when needed'],
  ['3xl', '24px', 'Large examples and hero panels'],
  ['full', '9999px', 'Pills, avatars, icon buttons']
]

const motionTokens = [
  ['fast', '--wc-motion-fast', '120ms', 'Hover, color, small state feedback'],
  ['normal', '--wc-motion-normal', '180ms', 'Open/close and progress movement'],
  ['ease', '--wc-ease-standard', 'cubic-bezier(.2, 0, 0, 1)', 'Default easing'],
  ['reduced motion', 'prefers-reduced-motion', '0ms', 'Disable decorative motion']
]

const contentWidths = [
  ['sm', '40rem', 'Narrow reading / auth forms'],
  ['md', '48rem', 'Documentation and settings'],
  ['lg', '65rem', 'Default product pages'],
  ['xl', '80rem', 'Dashboard and data pages'],
  ['full', 'none', 'Canvas apps and controlled shells']
]

const stateRules = [
  ['Default', 'No border. No shadow. Transparent unless the component is an input.', 'text + icon + spacing'],
  ['Hover', 'Reveal affordance with action hover background.', 'background only'],
  ['Focus', 'Use focus ring. Do not use hover color as a focus substitute.', '2px ring'],
  ['Selected', 'Use selected tint and stronger text. Avoid permanent outlines.', 'subtle fill'],
  ['Disabled', 'Reduce contrast and remove pointer affordance.', 'disabled tokens'],
  ['Error', 'Use danger color close to the failing field or action.', 'danger + message'],
  ['Open', 'Overlay surface and shadow are allowed because the layer floats.', 'overlay + shadow']
]

export default {
  title: 'Design System/Standards',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Watercolor layout and visual standards for the restrained, borderless default style.'
      }
    }
  }
}

export const Overview = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Watercolor Design Standard</p>
          <h1 className="wc-ds-title">Quiet layout, clear hierarchy.</h1>
          <p className="wc-ds-lede">
            The default Watercolor interface is intentionally low chrome: text, icons, space,
            and interaction states do the work. Borders and shadows are exceptions, not structure.
          </p>
        </section>

        <section className="wc-ds-section" aria-labelledby="principles-title">
          <h2 id="principles-title" className="wc-ds-section-title">Core principles</h2>
          <div className="wc-ds-grid">
            {principles.map(([number, title, copy]) => (
              <article className="wc-ds-rule" key={number}>
                <span className="wc-ds-rule-kicker">{number}</span>
                <h3 className="wc-ds-rule-title">{title}</h3>
                <p className="wc-ds-rule-copy">{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const SpacingAndRhythm = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Spacing</p>
          <h1 className="wc-ds-title">One spacing scale.</h1>
          <p className="wc-ds-lede">
            Use spacing tokens to create rhythm. The page should feel composed, not boxed.
          </p>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">Token usage</h2>
          <div className="wc-ds-token-table" role="table" aria-label="Spacing token usage">
            {spacing.map(([name, value, usage]) => (
              <div className="wc-ds-token-row" role="row" key={name}>
                <span className="wc-ds-token-name">gap {name}</span>
                <span className="wc-ds-token-value">{value}</span>
                <span className="wc-ds-token-use">{usage}</span>
                <span
                  className="wc-ds-space-bar"
                  aria-hidden="true"
                  style={{ width: `var(--wc-space-${name})` }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const ColorSystem = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Color</p>
          <h1 className="wc-ds-title">Color is semantic first.</h1>
          <p className="wc-ds-lede">
            Primitive palettes exist, but product UI should consume semantic tokens.
            The default interface stays neutral; accent appears where action or focus needs it.
          </p>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">Semantic color roles</h2>
          <div className="wc-ds-semantic-grid">
            {semanticColors.map(([name, token, use]) => (
              <article className="wc-ds-color-role" key={token}>
                <span className="wc-ds-color-chip" style={{ background: `var(${token})` }} />
                <span className="wc-ds-token-name">{name}</span>
                <code className="wc-ds-code">{token}</code>
                <span className="wc-ds-token-use">{use}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">Primitive palettes</h2>
          <p className="wc-ds-section-note">Use primitives to author themes; components should prefer semantic aliases.</p>
          <div className="wc-ds-palette-stack">
            {paletteGroups.map(([label, prefix, use, grades]) => (
              <article className="wc-ds-palette-row" key={prefix}>
                <div>
                  <h3 className="wc-ds-rule-title">{label}</h3>
                  <p className="wc-ds-rule-copy">{use}</p>
                </div>
                <div className="wc-ds-swatch-strip" aria-label={`${label} palette`}>
                  {grades.map((grade) => (
                    <span
                      className="wc-ds-swatch"
                      key={`${prefix}-${grade}`}
                      title={`--wc-${prefix}-${grade}`}
                      style={{ background: `var(--wc-${prefix}-${grade})` }}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const TypographyRhythm = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Typography</p>
          <h1 className="wc-ds-title">Type creates the grid.</h1>
          <p className="wc-ds-lede">
            In Watercolor, hierarchy should be obvious before any border, card, or divider is added.
          </p>
        </section>

        <section className="wc-ds-specimen wc-ds-specimen--plain" aria-label="Typography rhythm">
          {typeRows.map(([label, size, sample, guidance]) => (
            <div className="wc-ds-type-row" key={label}>
              <span className="wc-ds-type-label">{label}</span>
              <p className="wc-ds-type-sample" data-size={size}>{sample}</p>
              <span className="wc-ds-type-guidance">{guidance}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export const TypographySystem = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Type tokens</p>
          <h1 className="wc-ds-title">Readable by default.</h1>
          <p className="wc-ds-lede">
            Watercolor uses the system font stack, moderate weights, tight display tracking,
            and comfortable body line-height. Typography should reduce the need for visual containers.
          </p>
        </section>

        <section className="wc-ds-grid wc-ds-grid--two">
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Font families</span>
            <h2 className="wc-ds-rule-title">Use system text unless a theme overrides it</h2>
            <div className="wc-ds-token-table">
              {fontFamilies.map(([name, token, use]) => (
                <div className="wc-ds-token-row wc-ds-token-row--compact" key={token}>
                  <span className="wc-ds-token-name">{name}</span>
                  <code className="wc-ds-code">{token}</code>
                  <span className="wc-ds-token-use">{use}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Weights</span>
            <h2 className="wc-ds-rule-title">Keep weight changes intentional</h2>
            <div className="wc-ds-weight-list">
              {fontWeights.map(([name, value, use]) => (
                <div className="wc-ds-weight-row" key={name}>
                  <span style={{ fontWeight: value }}>{name}</span>
                  <span>{value}</span>
                  <span>{use}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">Type scale</h2>
          <div className="wc-ds-type-scale-table">
            {typeScaleFull.map(([name, px, use, token]) => (
              <div className="wc-ds-type-scale-row" key={name}>
                <span className="wc-ds-token-name">{name}</span>
                <span className="wc-ds-token-value">{px}</span>
                <code className="wc-ds-code">{token}</code>
                <p className="wc-ds-type-preview" style={{ fontSize: `var(${token})` }}>Aa</p>
                <span className="wc-ds-token-use">{use}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const SurfaceRules = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Surfaces</p>
          <h1 className="wc-ds-title">Default state is quiet.</h1>
          <p className="wc-ds-lede">
            Permanent decoration is expensive. Prefer invisible structure, then reveal state through
            hover, selection, focus, error, or an actual floating overlay.
          </p>
        </section>

        <section className="wc-ds-surface-demo" aria-label="Surface state rules">
          {surfaces.map(([name, copy, state, rule]) => (
            <div className="wc-ds-surface-row" data-state={state} key={name}>
              <span className="wc-ds-surface-name">{name}</span>
              <span className="wc-ds-surface-copy">{copy}</span>
              <span className="wc-ds-surface-state">{rule}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export const ShapeMotionAndElevation = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Shape, motion, elevation</p>
          <h1 className="wc-ds-title">Soft shape, almost no elevation.</h1>
          <p className="wc-ds-lede">
            Radius creates approachable controls. Motion is short and functional.
            Shadows are reserved for floating layers, not static page structure.
          </p>
        </section>

        <section className="wc-ds-grid wc-ds-grid--two">
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Radius</span>
            <h2 className="wc-ds-rule-title">Shape scale</h2>
            <div className="wc-ds-radius-grid">
              {radiusScale.map(([name, value, use]) => (
                <div className="wc-ds-radius-item" key={name}>
                  <span className="wc-ds-radius-box" style={{ borderRadius: `var(--wc-radius-${name})` }} />
                  <span className="wc-ds-token-name">{name}</span>
                  <span className="wc-ds-token-value">{value}</span>
                  <span className="wc-ds-token-use">{use}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Motion</span>
            <h2 className="wc-ds-rule-title">Fast, quiet, optional</h2>
            <div className="wc-ds-token-table">
              {motionTokens.map(([name, token, value, use]) => (
                <div className="wc-ds-token-row wc-ds-token-row--motion" key={name}>
                  <span className="wc-ds-token-name">{name}</span>
                  <code className="wc-ds-code">{token}</code>
                  <span className="wc-ds-token-value">{value}</span>
                  <span className="wc-ds-token-use">{use}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export const ResponsiveAndStates = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Responsive + states</p>
          <h1 className="wc-ds-title">Rules before patches.</h1>
          <p className="wc-ds-lede">
            Layout should degrade predictably. Interaction states should be consistent across React and Vue.
          </p>
        </section>

        <section className="wc-ds-grid wc-ds-grid--two">
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Content width</span>
            <h2 className="wc-ds-rule-title">Page sizes</h2>
            <div className="wc-ds-token-table">
              {contentWidths.map(([name, value, use]) => (
                <div className="wc-ds-token-row wc-ds-token-row--compact" key={name}>
                  <span className="wc-ds-token-name">{name}</span>
                  <span className="wc-ds-token-value">{value}</span>
                  <span className="wc-ds-token-use">{use}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Breakpoints</span>
            <h2 className="wc-ds-rule-title">Collapse order</h2>
            <ol className="wc-ds-checklist">
              <li>At lg, collapse spacious Split layouts when the sidebar starts stealing reading width.</li>
              <li>At md, product split pages become one column and Inline action bars wrap.</li>
              <li>At sm, reduce Page gutter and keep controls touch-friendly instead of shrinking text.</li>
            </ol>
          </article>
        </section>

        <section className="wc-ds-section">
          <h2 className="wc-ds-section-title">State contract</h2>
          <div className="wc-ds-surface-demo">
            {stateRules.map(([state, rule, visual]) => (
              <div className="wc-ds-surface-row" data-state={state === 'Selected' ? 'selected' : state === 'Open' ? 'open' : 'default'} key={state}>
                <span className="wc-ds-surface-name">{state}</span>
                <span className="wc-ds-surface-copy">{rule}</span>
                <span className="wc-ds-surface-state">{visual}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export const LayoutPatterns = {
  render: () => (
    <main className="wc-ds-page">
      <div className="wc-ds-shell wc-ds-stack">
        <section className="wc-ds-hero">
          <p className="wc-ds-eyebrow">Layout primitives</p>
          <h1 className="wc-ds-title">Compose pages from four primitives.</h1>
          <p className="wc-ds-lede">
            Page controls width, Stack controls vertical rhythm, Inline controls rows,
            and Split controls product two-column layouts.
          </p>
        </section>

        <section className="wc-ds-grid wc-ds-grid--two">
          <article className="wc-ds-wire" aria-label="Stack page wireframe">
            <span className="wc-ds-pill">Page + Stack</span>
            <div className="wc-ds-wire-header" />
            <div className="wc-ds-wire-row" />
            <div className="wc-ds-wire-block" />
            <div className="wc-ds-wire-row" />
          </article>

          <article className="wc-ds-wire" aria-label="Split page wireframe">
            <span className="wc-ds-pill">Split collapse md</span>
            <div className="wc-ds-wire-split">
              <div className="wc-ds-wire-side" />
              <div className="wc-ds-wire-main" />
            </div>
          </article>
        </section>

        <section className="wc-ds-do-dont">
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Do</span>
            <h2 className="wc-ds-rule-title">Use structure tokens</h2>
            <ul className="wc-ds-checklist">
              {checklist.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="wc-ds-rule">
            <span className="wc-ds-rule-kicker">Avoid</span>
            <h2 className="wc-ds-rule-title">Adding decoration as layout</h2>
            <ul className="wc-ds-checklist">
              {checklist.slice(4).map((item) => <li key={item}>{item}</li>)}
              <li>Do not separate every section with hairlines. If the page needs clarity, adjust hierarchy first.</li>
              <li>Do not use shadows for static content. Save them for overlays and temporary layers.</li>
            </ul>
          </article>
        </section>
      </div>
    </main>
  )
}

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
  render: () => ({
    data: () => ({ principles }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Watercolor Design Standard</p>
            <h1 class="wc-ds-title">Quiet layout, clear hierarchy.</h1>
            <p class="wc-ds-lede">
              The default Watercolor interface is intentionally low chrome: text, icons, space,
              and interaction states do the work. Borders and shadows are exceptions, not structure.
            </p>
          </section>
          <section class="wc-ds-section" aria-labelledby="principles-title">
            <h2 id="principles-title" class="wc-ds-section-title">Core principles</h2>
            <div class="wc-ds-grid">
              <article v-for="rule in principles" :key="rule[0]" class="wc-ds-rule">
                <span class="wc-ds-rule-kicker">{{ rule[0] }}</span>
                <h3 class="wc-ds-rule-title">{{ rule[1] }}</h3>
                <p class="wc-ds-rule-copy">{{ rule[2] }}</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const SpacingAndRhythm = {
  render: () => ({
    data: () => ({ spacing }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Spacing</p>
            <h1 class="wc-ds-title">One spacing scale.</h1>
            <p class="wc-ds-lede">Use spacing tokens to create rhythm. The page should feel composed, not boxed.</p>
          </section>
          <section class="wc-ds-section">
            <h2 class="wc-ds-section-title">Token usage</h2>
            <div class="wc-ds-token-table" role="table" aria-label="Spacing token usage">
              <div v-for="row in spacing" :key="row[0]" class="wc-ds-token-row" role="row">
                <span class="wc-ds-token-name">gap {{ row[0] }}</span>
                <span class="wc-ds-token-value">{{ row[1] }}</span>
                <span class="wc-ds-token-use">{{ row[2] }}</span>
                <span class="wc-ds-space-bar" aria-hidden="true" :style="{ width: 'var(--wc-space-' + row[0] + ')' }"></span>
              </div>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const ColorSystem = {
  render: () => ({
    data: () => ({ semanticColors, paletteGroups }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Color</p>
            <h1 class="wc-ds-title">Color is semantic first.</h1>
            <p class="wc-ds-lede">
              Primitive palettes exist, but product UI should consume semantic tokens.
              The default interface stays neutral; accent appears where action or focus needs it.
            </p>
          </section>
          <section class="wc-ds-section">
            <h2 class="wc-ds-section-title">Semantic color roles</h2>
            <div class="wc-ds-semantic-grid">
              <article v-for="row in semanticColors" :key="row[1]" class="wc-ds-color-role">
                <span class="wc-ds-color-chip" :style="{ background: 'var(' + row[1] + ')' }"></span>
                <span class="wc-ds-token-name">{{ row[0] }}</span>
                <code class="wc-ds-code">{{ row[1] }}</code>
                <span class="wc-ds-token-use">{{ row[2] }}</span>
              </article>
            </div>
          </section>
          <section class="wc-ds-section">
            <h2 class="wc-ds-section-title">Primitive palettes</h2>
            <p class="wc-ds-section-note">Use primitives to author themes; components should prefer semantic aliases.</p>
            <div class="wc-ds-palette-stack">
              <article v-for="group in paletteGroups" :key="group[1]" class="wc-ds-palette-row">
                <div>
                  <h3 class="wc-ds-rule-title">{{ group[0] }}</h3>
                  <p class="wc-ds-rule-copy">{{ group[2] }}</p>
                </div>
                <div class="wc-ds-swatch-strip" :aria-label="group[0] + ' palette'">
                  <span
                    v-for="grade in group[3]"
                    :key="group[1] + '-' + grade"
                    class="wc-ds-swatch"
                    :title="'--wc-' + group[1] + '-' + grade"
                    :style="{ background: 'var(--wc-' + group[1] + '-' + grade + ')' }"
                  ></span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const TypographyRhythm = {
  render: () => ({
    data: () => ({ typeRows }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Typography</p>
            <h1 class="wc-ds-title">Type creates the grid.</h1>
            <p class="wc-ds-lede">In Watercolor, hierarchy should be obvious before any border, card, or divider is added.</p>
          </section>
          <section class="wc-ds-specimen wc-ds-specimen--plain" aria-label="Typography rhythm">
            <div v-for="row in typeRows" :key="row[0]" class="wc-ds-type-row">
              <span class="wc-ds-type-label">{{ row[0] }}</span>
              <p class="wc-ds-type-sample" :data-size="row[1]">{{ row[2] }}</p>
              <span class="wc-ds-type-guidance">{{ row[3] }}</span>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const TypographySystem = {
  render: () => ({
    data: () => ({ fontFamilies, fontWeights, typeScaleFull }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Type tokens</p>
            <h1 class="wc-ds-title">Readable by default.</h1>
            <p class="wc-ds-lede">
              Watercolor uses the system font stack, moderate weights, tight display tracking,
              and comfortable body line-height. Typography should reduce the need for visual containers.
            </p>
          </section>
          <section class="wc-ds-grid wc-ds-grid--two">
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Font families</span>
              <h2 class="wc-ds-rule-title">Use system text unless a theme overrides it</h2>
              <div class="wc-ds-token-table">
                <div v-for="row in fontFamilies" :key="row[1]" class="wc-ds-token-row wc-ds-token-row--compact">
                  <span class="wc-ds-token-name">{{ row[0] }}</span>
                  <code class="wc-ds-code">{{ row[1] }}</code>
                  <span class="wc-ds-token-use">{{ row[2] }}</span>
                </div>
              </div>
            </article>
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Weights</span>
              <h2 class="wc-ds-rule-title">Keep weight changes intentional</h2>
              <div class="wc-ds-weight-list">
                <div v-for="row in fontWeights" :key="row[0]" class="wc-ds-weight-row">
                  <span :style="{ fontWeight: row[1] }">{{ row[0] }}</span>
                  <span>{{ row[1] }}</span>
                  <span>{{ row[2] }}</span>
                </div>
              </div>
            </article>
          </section>
          <section class="wc-ds-section">
            <h2 class="wc-ds-section-title">Type scale</h2>
            <div class="wc-ds-type-scale-table">
              <div v-for="row in typeScaleFull" :key="row[0]" class="wc-ds-type-scale-row">
                <span class="wc-ds-token-name">{{ row[0] }}</span>
                <span class="wc-ds-token-value">{{ row[1] }}</span>
                <code class="wc-ds-code">{{ row[3] }}</code>
                <p class="wc-ds-type-preview" :style="{ fontSize: 'var(' + row[3] + ')' }">Aa</p>
                <span class="wc-ds-token-use">{{ row[2] }}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const SurfaceRules = {
  render: () => ({
    data: () => ({ surfaces }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Surfaces</p>
            <h1 class="wc-ds-title">Default state is quiet.</h1>
            <p class="wc-ds-lede">
              Permanent decoration is expensive. Prefer invisible structure, then reveal state through
              hover, selection, focus, error, or an actual floating overlay.
            </p>
          </section>
          <section class="wc-ds-surface-demo" aria-label="Surface state rules">
            <div v-for="row in surfaces" :key="row[0]" class="wc-ds-surface-row" :data-state="row[2]">
              <span class="wc-ds-surface-name">{{ row[0] }}</span>
              <span class="wc-ds-surface-copy">{{ row[1] }}</span>
              <span class="wc-ds-surface-state">{{ row[3] }}</span>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const ShapeMotionAndElevation = {
  render: () => ({
    data: () => ({ radiusScale, motionTokens }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Shape, motion, elevation</p>
            <h1 class="wc-ds-title">Soft shape, almost no elevation.</h1>
            <p class="wc-ds-lede">
              Radius creates approachable controls. Motion is short and functional.
              Shadows are reserved for floating layers, not static page structure.
            </p>
          </section>
          <section class="wc-ds-grid wc-ds-grid--two">
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Radius</span>
              <h2 class="wc-ds-rule-title">Shape scale</h2>
              <div class="wc-ds-radius-grid">
                <div v-for="row in radiusScale" :key="row[0]" class="wc-ds-radius-item">
                  <span class="wc-ds-radius-box" :style="{ borderRadius: 'var(--wc-radius-' + row[0] + ')' }"></span>
                  <span class="wc-ds-token-name">{{ row[0] }}</span>
                  <span class="wc-ds-token-value">{{ row[1] }}</span>
                  <span class="wc-ds-token-use">{{ row[2] }}</span>
                </div>
              </div>
            </article>
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Motion</span>
              <h2 class="wc-ds-rule-title">Fast, quiet, optional</h2>
              <div class="wc-ds-token-table">
                <div v-for="row in motionTokens" :key="row[0]" class="wc-ds-token-row wc-ds-token-row--motion">
                  <span class="wc-ds-token-name">{{ row[0] }}</span>
                  <code class="wc-ds-code">{{ row[1] }}</code>
                  <span class="wc-ds-token-value">{{ row[2] }}</span>
                  <span class="wc-ds-token-use">{{ row[3] }}</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    `
  })
}

export const ResponsiveAndStates = {
  render: () => ({
    data: () => ({ contentWidths, stateRules }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Responsive + states</p>
            <h1 class="wc-ds-title">Rules before patches.</h1>
            <p class="wc-ds-lede">
              Layout should degrade predictably. Interaction states should be consistent across React and Vue.
            </p>
          </section>
          <section class="wc-ds-grid wc-ds-grid--two">
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Content width</span>
              <h2 class="wc-ds-rule-title">Page sizes</h2>
              <div class="wc-ds-token-table">
                <div v-for="row in contentWidths" :key="row[0]" class="wc-ds-token-row wc-ds-token-row--compact">
                  <span class="wc-ds-token-name">{{ row[0] }}</span>
                  <span class="wc-ds-token-value">{{ row[1] }}</span>
                  <span class="wc-ds-token-use">{{ row[2] }}</span>
                </div>
              </div>
            </article>
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Breakpoints</span>
              <h2 class="wc-ds-rule-title">Collapse order</h2>
              <ol class="wc-ds-checklist">
                <li>At lg, collapse spacious Split layouts when the sidebar starts stealing reading width.</li>
                <li>At md, product split pages become one column and Inline action bars wrap.</li>
                <li>At sm, reduce Page gutter and keep controls touch-friendly instead of shrinking text.</li>
              </ol>
            </article>
          </section>
          <section class="wc-ds-section">
            <h2 class="wc-ds-section-title">State contract</h2>
            <div class="wc-ds-surface-demo">
              <div
                v-for="row in stateRules"
                :key="row[0]"
                class="wc-ds-surface-row"
                :data-state="row[0] === 'Selected' ? 'selected' : row[0] === 'Open' ? 'open' : 'default'"
              >
                <span class="wc-ds-surface-name">{{ row[0] }}</span>
                <span class="wc-ds-surface-copy">{{ row[1] }}</span>
                <span class="wc-ds-surface-state">{{ row[2] }}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

export const LayoutPatterns = {
  render: () => ({
    data: () => ({ checklist }),
    template: `
      <main class="wc-ds-page">
        <div class="wc-ds-shell wc-ds-stack">
          <section class="wc-ds-hero">
            <p class="wc-ds-eyebrow">Layout primitives</p>
            <h1 class="wc-ds-title">Compose pages from four primitives.</h1>
            <p class="wc-ds-lede">
              Page controls width, Stack controls vertical rhythm, Inline controls rows,
              and Split controls product two-column layouts.
            </p>
          </section>
          <section class="wc-ds-grid wc-ds-grid--two">
            <article class="wc-ds-wire" aria-label="Stack page wireframe">
              <span class="wc-ds-pill">Page + Stack</span>
              <div class="wc-ds-wire-header"></div>
              <div class="wc-ds-wire-row"></div>
              <div class="wc-ds-wire-block"></div>
              <div class="wc-ds-wire-row"></div>
            </article>
            <article class="wc-ds-wire" aria-label="Split page wireframe">
              <span class="wc-ds-pill">Split collapse md</span>
              <div class="wc-ds-wire-split">
                <div class="wc-ds-wire-side"></div>
                <div class="wc-ds-wire-main"></div>
              </div>
            </article>
          </section>
          <section class="wc-ds-do-dont">
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Do</span>
              <h2 class="wc-ds-rule-title">Use structure tokens</h2>
              <ul class="wc-ds-checklist">
                <li v-for="item in checklist.slice(0, 4)" :key="item">{{ item }}</li>
              </ul>
            </article>
            <article class="wc-ds-rule">
              <span class="wc-ds-rule-kicker">Avoid</span>
              <h2 class="wc-ds-rule-title">Adding decoration as layout</h2>
              <ul class="wc-ds-checklist">
                <li v-for="item in checklist.slice(4)" :key="item">{{ item }}</li>
                <li>Do not separate every section with hairlines. If the page needs clarity, adjust hierarchy first.</li>
                <li>Do not use shadows for static content. Save them for overlays and temporary layers.</li>
              </ul>
            </article>
          </section>
        </div>
      </main>
    `
  })
}

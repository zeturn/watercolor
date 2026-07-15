import Checkbox from '../src/components/Checkbox/Checkbox.vue'
import Autocomplete from '../src/components/Autocomplete/Autocomplete.vue'
import ColorPicker from '../src/components/ColorPicker/ColorPicker.vue'
import DatePicker from '../src/components/DatePicker/DatePicker.vue'
import FileInput from '../src/components/FileInput/FileInput.vue'
import Input from '../src/components/Input/Input.vue'
import Radio from '../src/components/Radio/Radio.vue'
import RadioGroup from '../src/components/Radio/RadioGroup.vue'
import Rating from '../src/components/Rating/Rating.vue'
import Select from '../src/components/Select/Select.vue'
import Slider from '../src/components/Slider/Slider.vue'
import Switch from '../src/components/Switch/Switch.vue'
import TextField from '../src/components/TextField/TextField.vue'
import './Forms.css'

export default {
  title: 'Foundations/Forms',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet form controls with borderless defaults and explicit interaction states.' } }
  }
}

export const QuietControls = {
  render: () => ({
    components: { Checkbox, Input, Radio, RadioGroup, Select, Switch, TextField },
    data: () => ({
      role: 'designer',
      updates: true,
      archive: false,
      consent: true,
      options: [
        { value: 'designer', label: 'Product designer' },
        { value: 'engineer', label: 'Software engineer' },
        { value: 'researcher', label: 'Researcher' }
      ]
    }),
    template: `
      <main class="wc-forms-page">
        <div class="wc-forms-shell">
          <header class="wc-forms-intro">
            <p class="wc-forms-eyebrow">Watercolor forms</p>
            <h1 class="wc-forms-title">Calm by default.</h1>
            <p class="wc-forms-description">Fields use soft surfaces instead of permanent outlines. Hover, focus, validation, and selection provide the feedback only when it is useful.</p>
          </header>

          <section class="wc-forms-section" aria-labelledby="field-composition">
            <h2 id="field-composition" class="wc-forms-section-title">COMPOSED FIELDS</h2>
            <div class="wc-forms-field-grid">
              <TextField v-model="role" label="Workspace name" placeholder="Design systems" helper-text="Visible to everyone in your workspace" />
              <Select v-model="role" label="Your role" :options="options" />
              <TextField label="Project note" multiline :rows="3" placeholder="Add useful context…" />
              <TextField label="Email" model-value="not-an-email" error="Enter a valid email address" />
            </div>
          </section>

          <section class="wc-forms-section" aria-labelledby="field-states">
            <h2 id="field-states" class="wc-forms-section-title">INTERACTION STATES</h2>
            <div class="wc-forms-state-grid">
              <div class="wc-forms-state"><span class="wc-forms-state-label">Default</span><Input placeholder="Ask anything" /></div>
              <div class="wc-forms-state wc-forms-force-hover"><span class="wc-forms-state-label">Hover</span><Input placeholder="Ask anything" /></div>
              <div class="wc-forms-state wc-forms-force-focus"><span class="wc-forms-state-label">Focus</span><Input model-value="Current thought" /></div>
              <div class="wc-forms-state"><span class="wc-forms-state-label">Disabled</span><Input model-value="Unavailable" disabled /></div>
            </div>
          </section>

          <section class="wc-forms-section" aria-labelledby="choice-controls">
            <h2 id="choice-controls" class="wc-forms-section-title">CHOICE CONTROLS</h2>
            <div class="wc-forms-choices">
              <div class="wc-forms-choice-group">
                <h3 class="wc-forms-choice-title">Checkbox</h3>
                <Checkbox v-model="consent" label="Share usage analytics" />
                <Checkbox label="Include diagnostics" />
                <Checkbox label="Managed by organization" disabled />
              </div>
              <RadioGroup v-model="role" name="role" label="Default role">
                <Radio value="designer" label="Product designer" />
                <Radio value="engineer" label="Software engineer" />
                <Radio value="researcher" label="Researcher" />
              </RadioGroup>
              <div class="wc-forms-choice-group">
                <h3 class="wc-forms-choice-title">Switch</h3>
                <Switch v-model="updates" label="Product updates" description="Occasional release notes" />
                <Switch v-model="archive" label="Auto archive" />
                <Switch label="Enterprise policy" disabled />
              </div>
            </div>
            <p class="wc-forms-note">Move across the controls with Tab to inspect the shared focus treatment.</p>
          </section>
        </div>
      </main>
    `
  })
}

export const ExtendedControls = {
  render: () => ({
    components: { Autocomplete, ColorPicker, DatePicker, FileInput, Rating, Slider },
    data: () => ({
      assignee: { value: 'maya', label: 'Maya Chen' },
      dueDate: new Date(2026, 6, 24),
      volume: 64,
      rating: 4,
      accent: '#4f8df7',
      people: [
        { value: 'maya', label: 'Maya Chen' },
        { value: 'alex', label: 'Alex Rivera' },
        { value: 'sam', label: 'Sam Wilson' }
      ]
    }),
    template: `
      <main class="wc-forms-page">
        <div class="wc-forms-shell">
          <header class="wc-forms-intro">
            <p class="wc-forms-eyebrow">Watercolor forms</p>
            <h1 class="wc-forms-title">Specialized, not louder.</h1>
            <p class="wc-forms-description">Advanced controls follow the same quiet defaults. Extra structure appears only for floating calendars, search results, selection, or drag-and-drop feedback.</p>
          </header>

          <section class="wc-forms-section" aria-labelledby="advanced-fields">
            <h2 id="advanced-fields" class="wc-forms-section-title">ADVANCED FIELDS</h2>
            <div class="wc-forms-advanced-grid">
              <Autocomplete v-model="assignee" label="Assignee" :options="people" helper-text="Type to filter people" />
              <div class="wc-forms-advanced-field"><p class="wc-forms-advanced-label">Due date</p><DatePicker v-model="dueDate" /></div>
              <Slider v-model="volume" label="Response detail" value-label-display="on" />
              <div class="wc-forms-advanced-field"><p class="wc-forms-advanced-label">Quality</p><div class="wc-forms-inline-control"><Rating v-model="rating" /><span class="wc-forms-inline-value">{{ rating }} / 5</span></div></div>
              <div class="wc-forms-advanced-field"><p class="wc-forms-advanced-label">Accent color</p><div class="wc-forms-inline-control"><ColorPicker v-model="accent" /><span class="wc-forms-inline-value">{{ accent }}</span></div></div>
            </div>
          </section>

          <section class="wc-forms-section" aria-labelledby="file-upload">
            <h2 id="file-upload" class="wc-forms-section-title">FILE INPUT</h2>
            <div class="wc-forms-upload-grid">
              <FileInput label="Add reference files" description="Click or drag files here" multiple />
              <div class="wc-forms-upload-actions">
                <FileInput variant="button" label="Attach file" />
                <FileInput variant="icon" label="Upload file" />
                <FileInput variant="button" label="Unavailable" disabled />
              </div>
            </div>
          </section>
        </div>
      </main>
    `
  })
}

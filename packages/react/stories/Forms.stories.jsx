import React, { useState } from 'react'
import Autocomplete from '@/components/Autocomplete/Autocomplete.jsx'
import Checkbox from '@/components/Checkbox/Checkbox.jsx'
import ColorPicker from '@/components/ColorPicker/ColorPicker.jsx'
import DatePicker from '@/components/DatePicker/DatePicker.jsx'
import FileInput from '@/components/FileInput/FileInput.jsx'
import Input from '@/components/Input/Input.jsx'
import Radio, { RadioGroup } from '@/components/Radio/Radio.jsx'
import Rating from '@/components/Rating/Rating.jsx'
import Select from '@/components/Select/Select.jsx'
import Slider from '@/components/Slider/Slider.jsx'
import Switch from '@/components/Switch/Switch.jsx'
import TextField from '@/components/TextField/TextField.jsx'
import './Forms.css'

export default {
  title: 'Foundations/Forms',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Quiet form controls with borderless defaults and explicit interaction states.' } }
  }
}

const options = [
  { value: 'designer', label: 'Product designer' },
  { value: 'engineer', label: 'Software engineer' },
  { value: 'researcher', label: 'Researcher' }
]

export const QuietControls = {
  render: () => {
    const [role, setRole] = useState('designer')
    const [updates, setUpdates] = useState(true)
    const [archive, setArchive] = useState(false)
    const [consent, setConsent] = useState(true)

    return (
      <main className="wc-forms-page">
        <div className="wc-forms-shell">
          <header className="wc-forms-intro">
            <p className="wc-forms-eyebrow">Watercolor forms</p>
            <h1 className="wc-forms-title">Calm by default.</h1>
            <p className="wc-forms-description">Fields use soft surfaces instead of permanent outlines. Hover, focus, validation, and selection provide the feedback only when it is useful.</p>
          </header>

          <section className="wc-forms-section" aria-labelledby="field-composition">
            <h2 id="field-composition" className="wc-forms-section-title">COMPOSED FIELDS</h2>
            <div className="wc-forms-field-grid">
              <TextField value={role} onChange={(event) => setRole(event.target.value)} label="Workspace name" placeholder="Design systems" helperText="Visible to everyone in your workspace" />
              <Select value={role} onChange={(event) => setRole(event.target.value)} label="Your role" options={options} />
              <TextField label="Project note" multiline rows={3} placeholder="Add useful context…" />
              <TextField label="Email" value="not-an-email" error="Enter a valid email address" />
            </div>
          </section>

          <section className="wc-forms-section" aria-labelledby="field-states">
            <h2 id="field-states" className="wc-forms-section-title">INTERACTION STATES</h2>
            <div className="wc-forms-state-grid">
              <div className="wc-forms-state"><span className="wc-forms-state-label">Default</span><Input placeholder="Ask anything" /></div>
              <div className="wc-forms-state wc-forms-force-hover"><span className="wc-forms-state-label">Hover</span><Input placeholder="Ask anything" /></div>
              <div className="wc-forms-state wc-forms-force-focus"><span className="wc-forms-state-label">Focus</span><Input value="Current thought" readOnly /></div>
              <div className="wc-forms-state"><span className="wc-forms-state-label">Disabled</span><Input value="Unavailable" disabled /></div>
            </div>
          </section>

          <section className="wc-forms-section" aria-labelledby="choice-controls">
            <h2 id="choice-controls" className="wc-forms-section-title">CHOICE CONTROLS</h2>
            <div className="wc-forms-choices">
              <div className="wc-forms-choice-group">
                <h3 className="wc-forms-choice-title">Checkbox</h3>
                <Checkbox checked={consent} onChange={(event) => setConsent(event.target.checked)} label="Share usage analytics" />
                <Checkbox label="Include diagnostics" />
                <Checkbox label="Managed by organization" disabled />
              </div>
              <RadioGroup value={role} onChange={setRole} name="role" label="Default role">
                <Radio value="designer" label="Product designer" />
                <Radio value="engineer" label="Software engineer" />
                <Radio value="researcher" label="Researcher" />
              </RadioGroup>
              <div className="wc-forms-choice-group">
                <h3 className="wc-forms-choice-title">Switch</h3>
                <Switch checked={updates} onChange={setUpdates} label="Product updates" description="Occasional release notes" />
                <Switch checked={archive} onChange={setArchive} label="Auto archive" />
                <Switch label="Enterprise policy" disabled />
              </div>
            </div>
            <p className="wc-forms-note">Move across the controls with Tab to inspect the shared focus treatment.</p>
          </section>
        </div>
      </main>
    )
  }
}

export const ExtendedControls = {
  render: () => {
    const [assignee, setAssignee] = useState({ value: 'maya', label: 'Maya Chen' })
    const [dueDate, setDueDate] = useState(new Date(2026, 6, 24))
    const [volume, setVolume] = useState(64)
    const [rating, setRating] = useState(4)
    const [accent, setAccent] = useState('#4f8df7')
    const people = [
      { value: 'maya', label: 'Maya Chen' },
      { value: 'alex', label: 'Alex Rivera' },
      { value: 'sam', label: 'Sam Wilson' }
    ]

    return (
      <main className="wc-forms-page">
        <div className="wc-forms-shell">
          <header className="wc-forms-intro">
            <p className="wc-forms-eyebrow">Watercolor forms</p>
            <h1 className="wc-forms-title">Specialized, not louder.</h1>
            <p className="wc-forms-description">Advanced controls follow the same quiet defaults. Extra structure appears only for floating calendars, search results, selection, or drag-and-drop feedback.</p>
          </header>

          <section className="wc-forms-section" aria-labelledby="advanced-fields">
            <h2 id="advanced-fields" className="wc-forms-section-title">ADVANCED FIELDS</h2>
            <div className="wc-forms-advanced-grid">
              <Autocomplete value={assignee} onChange={(event) => setAssignee(event.target.value)} label="Assignee" options={people} helperText="Type to filter people" />
              <div className="wc-forms-advanced-field"><p className="wc-forms-advanced-label">Due date</p><DatePicker value={dueDate} onChange={setDueDate} /></div>
              <Slider value={volume} onChange={setVolume} label="Response detail" valueLabelDisplay="on" />
              <div className="wc-forms-advanced-field"><p className="wc-forms-advanced-label">Quality</p><div className="wc-forms-inline-control"><Rating value={rating} onChange={setRating} /><span className="wc-forms-inline-value">{rating} / 5</span></div></div>
              <div className="wc-forms-advanced-field"><p className="wc-forms-advanced-label">Accent color</p><div className="wc-forms-inline-control"><ColorPicker value={accent} onChange={setAccent} /><span className="wc-forms-inline-value">{accent}</span></div></div>
            </div>
          </section>

          <section className="wc-forms-section" aria-labelledby="file-upload">
            <h2 id="file-upload" className="wc-forms-section-title">FILE INPUT</h2>
            <div className="wc-forms-upload-grid">
              <FileInput label="Add reference files" description="Click or drag files here" multiple />
              <div className="wc-forms-upload-actions">
                <FileInput variant="button" label="Attach file" />
                <FileInput variant="icon" label="Upload file" />
                <FileInput variant="button" label="Unavailable" disabled />
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

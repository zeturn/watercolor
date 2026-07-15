import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormControl from '@/components/Form/FormControl.vue'
import FormControlLabel from '@/components/Form/FormControlLabel.vue'
import FormGroup from '@/components/Form/FormGroup.vue'
import FormHelperText from '@/components/Form/FormHelperText.vue'

describe('Form composition components', () => {
  it('uses the quiet filled context by default', () => {
    const wrapper = mount(FormControl, { slots: { default: '<input />' } })
    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.vm.variant).toBe('filled')
  })

  it('applies layout and state classes', () => {
    const wrapper = mount(FormControl, { props: { fullWidth: true, disabled: true, margin: 'dense' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining([
      'form-control',
      'form-control--full-width',
      'form-control--disabled',
      'form-control--margin-dense'
    ]))
  })

  it('renders a quiet label row and required marker', () => {
    const wrapper = mount(FormControlLabel, {
      props: { label: 'Notifications', required: true },
      slots: { default: '<input type="checkbox" />' }
    })
    expect(wrapper.find('.form-control-label__text').text()).toContain('Notifications')
    expect(wrapper.find('.form-control-label__required').text()).toBe('*')
  })

  it('supports responsive row groups', () => {
    const wrapper = mount(FormGroup, { props: { row: true, spacing: 'compact' } })
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['form-group--row', 'form-group--spacing-compact']))
  })

  it('inherits error state in helper text and announces it', () => {
    const wrapper = mount(FormHelperText, {
      slots: { default: 'Invalid value' },
      global: { provide: { formControlContext: { error: true, disabled: false } } }
    })
    const helper = wrapper.find('.form-helper-text')
    expect(helper.classes()).toContain('form-helper-text--error')
    expect(helper.attributes('aria-live')).toBe('polite')
  })
})

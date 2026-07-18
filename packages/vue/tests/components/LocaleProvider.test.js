import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import Alert from '../../src/components/Alert/Alert.vue'
import Rating from '../../src/components/Rating/Rating.vue'
import Tabs from '../../src/components/Tabs/Tabs.vue'
import { LocaleProvider } from '../../src/LocaleVUE'

describe('LocaleProvider (Vue)', () => {
  it('uses default English aria messages without a provider', () => {
    const { getByLabelText } = render(Alert, { props: { closable: true, message: 'Saved' } })
    expect(getByLabelText('Close')).toBeInTheDocument()
  })

  it('overrides shared aria messages through provider', () => {
    const { getByLabelText, getByRole } = render({
      components: { LocaleProvider, Alert, Rating, Tabs },
      template: `
        <LocaleProvider :messages="messages">
          <Alert closable message="Saved" />
          <Rating :model-value="2" />
          <Tabs :tabs="[{ title: 'A' }]" />
        </LocaleProvider>
      `,
      data: () => ({
        messages: {
          close: '关闭',
          rating: '评分',
          ratingValue: (value, max) => `${value} / ${max}`,
          tabList: '内容分组',
        }
      })
    })

    expect(getByLabelText('关闭')).toBeInTheDocument()
    expect(getByLabelText('2 / 5')).toBeInTheDocument()
    expect(getByRole('tablist', { name: '内容分组' })).toBeInTheDocument()
  })
})


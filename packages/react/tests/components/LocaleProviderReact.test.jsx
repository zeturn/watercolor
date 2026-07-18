import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Alert from '@/components/Alert/Alert.jsx'
import Rating from '@/components/Rating/Rating.jsx'
import Tabs from '@/components/Tabs/Tabs.jsx'
import { LocaleProvider } from '@/LocaleReact.tsx'

describe('LocaleProvider (React)', () => {
  it('uses default English aria messages without a provider', () => {
    const { getByLabelText } = render(<Alert closable>Saved</Alert>)
    expect(getByLabelText('Close')).toBeInTheDocument()
  })

  it('overrides shared aria messages through provider', () => {
    const { getByLabelText, getByRole } = render(
      <LocaleProvider
        messages={{
          close: '关闭',
          rating: '评分',
          ratingValue: (value, max) => `${value} / ${max}`,
          tabList: '内容分组',
        }}
      >
        <Alert closable>Saved</Alert>
        <Rating value={2} />
        <Tabs tabs={[{ title: 'A' }]} />
      </LocaleProvider>
    )

    expect(getByLabelText('关闭')).toBeInTheDocument()
    expect(getByLabelText('2 / 5')).toBeInTheDocument()
    expect(getByRole('tablist', { name: '内容分组' })).toBeInTheDocument()
  })
})


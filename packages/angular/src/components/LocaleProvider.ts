import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core'
import { WC_LOCALE } from '../hooks.js'
import { defaultLocaleMessages, type LocaleStore, type WatercolorLocaleMessages } from '../locale.js'

@Component({
  selector: 'wc-locale-provider',
  standalone: true,
  template: '<ng-content />',
  styles: [':host{display:contents}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: WC_LOCALE, useExisting: forwardRef(() => LocaleProvider) }],
})
export class LocaleProvider implements LocaleStore {
  readonly localeInput = input<string | undefined>(undefined, { alias: 'locale' })
  readonly messagesInput = input<Partial<WatercolorLocaleMessages> | undefined>(undefined, {
    alias: 'messages',
  })

  get locale(): string | undefined {
    return this.localeInput()
  }
  get messages(): WatercolorLocaleMessages {
    return { ...defaultLocaleMessages, ...(this.messagesInput() ?? {}) }
  }
}

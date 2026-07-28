import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, output, signal } from '@angular/core'

@Component({
  selector: 'wc-file-input',
  standalone: true,
  template: `
    <label class="wc-file-input {{ disabled() ? 'wc-file-input--disabled' : '' }} {{ className() }}">
      <span class="wc-file-input__button">{{ label() }}</span>
      @if (fileNames()) {
        <span class="wc-file-input__names">{{ fileNames() }}</span>
      }
      <input
        type="file"
        class="wc-file-input__input"
        [accept]="accept()"
        [multiple]="multiple()"
        [disabled]="disabled()"
        (change)="handleChange($event)"
      />
    </label>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-file-input{display:inline-flex;align-items:center;gap:10px;cursor:pointer}
.wc-file-input--disabled{cursor:not-allowed;opacity:0.6}
.wc-file-input__button{display:inline-flex;align-items:center;padding:8px 14px;border-radius:8px;background:var(--wc-accent,#3b82f6);color:#fff;font-size:0.875rem;font-weight:500}
.wc-file-input__input{position:absolute;width:0;height:0;opacity:0}
.wc-file-input__names{font-size:0.8125rem;color:var(--wc-text-secondary,#6b7280)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInput {
  readonly accept = input('')
  readonly multiple = input(false)
  readonly disabled = input(false)
  readonly label = input('Choose file')
  readonly className = input('')
  readonly changed = output<Event>()

  readonly fileNames = signal('')

  handleChange(event: Event): void {
    const files = (event.target as HTMLInputElement).files
    this.fileNames.set(files && files.length ? Array.from(files).map((f) => f.name).join(', ') : '')
    this.changed.emit(event)
  }
}

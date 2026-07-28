import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
} from '@angular/core'
import { useLocale } from '../../hooks.js'

const DEFAULT_SWATCHES = [
  '#111827', '#4b5563', '#ffffff',
  '#2563eb', '#7c3aed', '#db2777',
  '#dc2626', '#ea580c', '#d97706',
  '#16a34a', '#0891b2', '#0f766e',
]

@Component({
  selector: 'wc-color-picker',
  standalone: true,
  template: `
    <span
      class="wc-color-picker wc-color-picker--{{ size() }} wc-color-picker--{{ shape() }} {{ disabled() ? 'wc-color-picker--disabled' : '' }} {{ className() }}"
    >
      <button
        class="wc-color-picker__trigger"
        type="button"
        [disabled]="disabled()"
        [attr.aria-label]="locale.messages.colorPicker"
        aria-haspopup="dialog"
        [attr.aria-expanded]="open()"
        (click)="togglePicker()"
      >
        <span class="wc-color-picker__preview" [style.background-color]="normalizedValue()"></span>
      </button>

      @if (open()) {
        <div class="wc-color-picker__popover" role="dialog" [attr.aria-label]="locale.messages.colorPicker">
          <div class="wc-color-picker__current">
            <span class="wc-color-picker__current-preview" [style.background-color]="normalizedValue()"></span>
            <label class="wc-color-picker__field">
              <span class="wc-color-picker__field-label">Hex</span>
              <input
                class="wc-color-picker__hex-input"
                [value]="draftValue()"
                spellcheck="false"
                inputmode="text"
                (input)="handleDraftInput($event)"
                (blur)="draftValue.set(normalizedValue())"
              />
            </label>
          </div>

          <div class="wc-color-picker__swatches" role="listbox" aria-label="Color swatches">
            @for (swatch of normalizedSwatches(); track swatch) {
              <button
                type="button"
                class="wc-color-picker__swatch {{ swatch === normalizedValue() ? 'wc-color-picker__swatch--selected' : '' }}"
                [style.background-color]="swatch"
                [attr.aria-label]="swatch"
                [attr.aria-selected]="swatch === normalizedValue()"
                role="option"
                (click)="commitColor(swatch)"
              ></button>
            }
          </div>
        </div>
      }
    </span>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-color-picker{position:relative;display:inline-flex}
.wc-color-picker--disabled{opacity:0.5}
.wc-color-picker__trigger{padding:3px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));background:var(--wc-surface-canvas,#fff);border-radius:50%;cursor:pointer;display:inline-flex}
.wc-color-picker--square .wc-color-picker__trigger{border-radius:4px}
.wc-color-picker--rounded .wc-color-picker__trigger{border-radius:8px}
.wc-color-picker__trigger:disabled{cursor:not-allowed}
.wc-color-picker__preview{display:block;width:20px;height:20px;border-radius:inherit;border:1px solid var(--wc-border-default,rgba(0,0,0,0.1))}
.wc-color-picker--sm .wc-color-picker__preview{width:16px;height:16px}
.wc-color-picker--lg .wc-color-picker__preview{width:26px;height:26px}
.wc-color-picker__popover{position:absolute;top:calc(100% + 8px);left:0;z-index:1000;width:220px;padding:12px;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15)}
.wc-color-picker__current{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.wc-color-picker__current-preview{width:32px;height:32px;border-radius:8px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));flex-shrink:0}
.wc-color-picker__field{display:flex;flex-direction:column;gap:2px;flex:1}
.wc-color-picker__field-label{font-size:0.7rem;color:var(--wc-text-secondary,#6b7280)}
.wc-color-picker__hex-input{width:100%;padding:4px 8px;font-size:0.85rem;font-family:monospace;border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));border-radius:6px;background:var(--wc-surface-muted,rgba(0,0,0,0.02));color:var(--wc-text-primary,#1a1a1a)}
.wc-color-picker__swatches{display:grid;grid-template-columns:repeat(6,1fr);gap:6px}
.wc-color-picker__swatch{aspect-ratio:1;border-radius:6px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));cursor:pointer;padding:0}
.wc-color-picker__swatch--selected{outline:2px solid var(--wc-color-primary,#3b82f6);outline-offset:1px}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPicker {
  readonly value = model('#ffffff')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly shape = input<'circle' | 'square' | 'rounded'>('circle')
  readonly disabled = input(false)
  readonly swatches = input<string[]>(DEFAULT_SWATCHES)
  readonly className = input('')
  readonly changed = output<string>()

  readonly locale = useLocale()
  readonly open = signal(false)
  readonly draftValue = signal('#ffffff')

  private readonly elementRef = inject(ElementRef<HTMLElement>)

  readonly normalizedValue = computed(() => this.normalizeHex(this.value()))
  readonly normalizedSwatches = computed(() => this.swatches().map((s) => this.normalizeHex(s)))

  constructor() {
    effect(() => {
      this.draftValue.set(this.normalizedValue())
    })

    effect((onCleanup) => {
      if (!this.open() || typeof document === 'undefined') return
      const handlePointerDown = (e: PointerEvent) => {
        const root = this.elementRef.nativeElement as HTMLElement
        if (root && !root.contains(e.target as Node)) this.open.set(false)
      }
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') this.open.set(false)
      }
      document.addEventListener('pointerdown', handlePointerDown)
      document.addEventListener('keydown', handleKeydown)
      onCleanup(() => {
        document.removeEventListener('pointerdown', handlePointerDown)
        document.removeEventListener('keydown', handleKeydown)
      })
    })
  }

  isValidHexColor(input: string): boolean {
    return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(input.trim())
  }

  normalizeHex(input?: string): string {
    if (!input || typeof input !== 'string') return '#ffffff'
    const nextValue = input.trim()
    if (!this.isValidHexColor(nextValue)) return '#ffffff'
    if (nextValue.length === 4) {
      return `#${nextValue[1]}${nextValue[1]}${nextValue[2]}${nextValue[2]}${nextValue[3]}${nextValue[3]}`.toLowerCase()
    }
    return nextValue.toLowerCase()
  }

  togglePicker(): void {
    if (this.disabled()) return
    this.open.set(!this.open())
  }

  commitColor(next: string): void {
    const nextValue = this.normalizeHex(next)
    this.draftValue.set(nextValue)
    this.value.set(nextValue)
    this.changed.emit(nextValue)
  }

  handleDraftInput(event: Event): void {
    const target = event.target as HTMLInputElement
    this.draftValue.set(target.value)
    if (this.isValidHexColor(target.value)) {
      this.commitColor(target.value)
    }
  }
}

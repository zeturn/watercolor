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

export type AutocompleteOption = string | number | Record<string, unknown>

@Component({
  selector: 'wc-autocomplete',
  standalone: true,
  template: `
    <div class="wc-autocomplete">
      @if (label()) {
        <label
          [attr.for]="autocompleteId"
          class="wc-autocomplete__label wc-autocomplete__label--{{ size() }} {{ error() ? 'wc-autocomplete__label--error' : '' }}"
        >
          {{ label() }}
          @if (required()) {<span class="wc-autocomplete__required">*</span>}
        </label>
      }

      <div
        class="wc-autocomplete__container wc-autocomplete__container--{{ variant() }} wc-autocomplete__container--{{ size() }} {{ disabled() ? 'wc-autocomplete__container--disabled' : '' }} {{ error() ? 'wc-autocomplete__container--error' : '' }} {{ open() ? 'wc-autocomplete__container--open' : '' }}"
      >
        <input
          [id]="autocompleteId"
          [value]="searchQuery()"
          type="text"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [readonly]="readonly()"
          class="wc-autocomplete__input"
          autocomplete="off"
          role="combobox"
          aria-autocomplete="list"
          [attr.aria-expanded]="open()"
          [attr.aria-controls]="autocompleteId + '-options'"
          [attr.aria-activedescendant]="highlightedIndex() >= 0 ? autocompleteId + '-option-' + highlightedIndex() : null"
          (focus)="handleFocus($event)"
          (blur)="handleBlur($event)"
          (input)="handleInput($event)"
          (keydown)="handleKeydown($event)"
        />

        @if (clearable() && searchQuery()) {
          <button type="button" class="wc-autocomplete__clear" tabindex="-1" (click)="handleClear()" aria-label="Clear">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </button>
        }

        <div class="wc-autocomplete__indicators">
          <div class="wc-autocomplete__arrow {{ open() && filteredOptions().length > 0 ? 'wc-autocomplete__arrow--open' : '' }}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </div>
        </div>
      </div>

      @if (open() && filteredOptions().length > 0) {
        <div class="wc-autocomplete__dropdown" [id]="autocompleteId + '-options'" role="listbox">
          <div class="wc-autocomplete__options">
            @for (opt of filteredOptions(); track getOptionValue(opt); let index = $index) {
              <div
                [id]="autocompleteId + '-option-' + index"
                class="wc-autocomplete__option {{ isSelected(opt) ? 'wc-autocomplete__option--selected' : '' }} {{ index === highlightedIndex() ? 'wc-autocomplete__option--highlighted' : '' }}"
                role="option"
                [attr.aria-selected]="isSelected(opt)"
                (click)="selectOption(opt)"
                (mouseenter)="highlightedIndex.set(index)"
                (keydown.enter)="selectOption(opt)"
                tabindex="-1"
              >
                <span class="wc-autocomplete__option-text">{{ getOptionLabel(opt) }}</span>
                @if (isSelected(opt)) {
                  <svg class="wc-autocomplete__option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                }
              </div>
            }
          </div>
        </div>
      }

      @if (open() && searchQuery() && filteredOptions().length === 0) {
        <div class="wc-autocomplete__dropdown" role="status">
          <div class="wc-autocomplete__no-options">{{ noOptionsText() }}</div>
        </div>
      }

      @if (error()) {
        <p class="wc-autocomplete__error">{{ error() }}</p>
      } @else if (helperText()) {
        <p class="wc-autocomplete__helper">{{ helperText() }}</p>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-autocomplete{position:relative;display:inline-block;min-width:220px}
.wc-autocomplete__label{display:block;margin-bottom:4px;font-size:0.85rem;font-weight:500;color:var(--wc-text-primary,#1a1a1a)}
.wc-autocomplete__label--error{color:var(--wc-color-error,#ef4444)}
.wc-autocomplete__required{color:var(--wc-color-error,#ef4444);margin-left:2px}
.wc-autocomplete__container{display:flex;align-items:center;gap:4px;padding:8px 12px;border-radius:8px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));background:var(--wc-surface-canvas,#fff);transition:border-color 0.15s ease}
.wc-autocomplete__container--filled{background:var(--wc-surface-muted,rgba(0,0,0,0.04))}
.wc-autocomplete__container--standard{border-width:0 0 1px;border-radius:0;background:transparent}
.wc-autocomplete__container--sm{padding:5px 10px}
.wc-autocomplete__container--lg{padding:11px 14px}
.wc-autocomplete__container--open,.wc-autocomplete__container:hover:not(.wc-autocomplete__container--disabled){border-color:var(--wc-color-primary,#3b82f6)}
.wc-autocomplete__container--error{border-color:var(--wc-color-error,#ef4444)}
.wc-autocomplete__container--disabled{opacity:0.5;pointer-events:none}
.wc-autocomplete__input{flex:1;border:none;outline:none;background:transparent;font-size:0.9rem;color:var(--wc-text-primary,#1a1a1a);min-width:0}
.wc-autocomplete__clear{display:inline-flex;width:18px;height:18px;padding:0;border:none;background:none;cursor:pointer;color:var(--wc-text-secondary,#6b7280);flex-shrink:0}
.wc-autocomplete__clear svg{width:100%;height:100%}
.wc-autocomplete__indicators{display:inline-flex;flex-shrink:0}
.wc-autocomplete__arrow{width:18px;height:18px;color:var(--wc-text-secondary,#6b7280);transition:transform 0.15s ease}
.wc-autocomplete__arrow svg{width:100%;height:100%}
.wc-autocomplete__arrow--open{transform:rotate(180deg)}
.wc-autocomplete__dropdown{position:absolute;top:100%;left:0;right:0;z-index:1000;margin-top:4px;max-height:240px;overflow-y:auto;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15)}
.wc-autocomplete__options{padding:4px}
.wc-autocomplete__option{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border-radius:6px;font-size:0.9rem;cursor:pointer;color:var(--wc-text-primary,#1a1a1a)}
.wc-autocomplete__option--highlighted{background:var(--wc-surface-hover,rgba(0,0,0,0.06))}
.wc-autocomplete__option--selected{color:var(--wc-color-primary,#3b82f6);font-weight:500}
.wc-autocomplete__option-check{width:16px;height:16px;flex-shrink:0}
.wc-autocomplete__no-options{padding:12px;font-size:0.85rem;text-align:center;color:var(--wc-text-secondary,#6b7280)}
.wc-autocomplete__error{margin:4px 0 0;font-size:0.75rem;color:var(--wc-color-error,#ef4444)}
.wc-autocomplete__helper{margin:4px 0 0;font-size:0.75rem;color:var(--wc-text-secondary,#6b7280)}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Autocomplete {
  readonly value = model<unknown>(null)
  readonly options = input<AutocompleteOption[]>([])
  readonly label = input('')
  readonly placeholder = input('请输入或选择...')
  readonly disabled = input(false)
  readonly readonly = input(false)
  readonly required = input(false)
  readonly error = input('')
  readonly helperText = input('')
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly variant = input<'outlined' | 'filled' | 'standard'>('filled')
  readonly multiple = input(false)
  readonly clearable = input(true)
  readonly freeSolo = input(false)
  readonly valueKey = input('value')
  readonly labelKey = input('label')
  readonly filterOptions = input<((options: AutocompleteOption[], query: string) => AutocompleteOption[]) | null>(null)
  readonly noOptionsText = input('没有找到选项')
  readonly minSearchLength = input(0)
  readonly changed = output<unknown>()
  readonly inputChanged = output<string>()
  readonly focused = output<FocusEvent>()
  readonly blurred = output<FocusEvent>()

  readonly autocompleteId = `autocomplete-${Math.random().toString(36).slice(2, 11)}`
  readonly open = signal(false)
  readonly searchQuery = signal('')
  readonly highlightedIndex = signal(-1)

  private readonly elementRef = inject(ElementRef<HTMLElement>)

  readonly filteredOptions = computed(() => {
    const query = this.searchQuery()
    if (query.length < this.minSearchLength()) return []
    const filter = this.filterOptions()
    if (filter) return filter(this.options(), query)
    if (!query) return this.options()
    return this.options().filter((option) => this.getOptionLabel(option).toLowerCase().includes(query.toLowerCase()))
  })

  constructor() {
    effect(() => {
      const value = this.value()
      if (!this.multiple() && value) {
        if (typeof value === 'object') {
          this.searchQuery.set(this.getOptionLabel(value as AutocompleteOption))
        } else {
          const matched = this.options().find((opt) => this.getOptionValue(opt) === value)
          this.searchQuery.set(matched ? this.getOptionLabel(matched) : String(value))
        }
      } else if (!value) {
        this.searchQuery.set('')
      }
    })

    effect((onCleanup) => {
      if (!this.open() || typeof document === 'undefined') return
      const handlePointerDown = (e: PointerEvent) => {
        const root = this.elementRef.nativeElement as HTMLElement
        if (root && !root.contains(e.target as Node)) this.closeDropdown()
      }
      document.addEventListener('pointerdown', handlePointerDown)
      onCleanup(() => document.removeEventListener('pointerdown', handlePointerDown))
    })
  }

  getOptionValue(option: AutocompleteOption | null | undefined): unknown {
    if (option === null || option === undefined) return null
    return typeof option === 'object' ? (option as Record<string, unknown>)[this.valueKey()] : option
  }

  getOptionLabel(option: AutocompleteOption | null | undefined): string {
    if (option === null || option === undefined) return ''
    return typeof option === 'object'
      ? String((option as Record<string, unknown>)[this.labelKey()] ?? '')
      : String(option)
  }

  isSelected(option: AutocompleteOption): boolean {
    const optionValue = this.getOptionValue(option)
    const value = this.value()
    if (this.multiple() && Array.isArray(value)) {
      return value.some((v) => (typeof v === 'object' && v !== null ? this.getOptionValue(v as AutocompleteOption) : v) === optionValue)
    }
    if (!value) return false
    const currentValue = typeof value === 'object' && value !== null ? this.getOptionValue(value as AutocompleteOption) : value
    return currentValue === optionValue
  }

  closeDropdown(): void {
    this.open.set(false)
    this.highlightedIndex.set(-1)
  }

  handleFocus(event: FocusEvent): void {
    this.open.set(true)
    this.focused.emit(event)
  }

  handleBlur(event: FocusEvent): void {
    setTimeout(() => {
      this.closeDropdown()
      this.blurred.emit(event)
    }, 200)
  }

  handleInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value
    this.searchQuery.set(query)
    this.open.set(true)
    this.highlightedIndex.set(-1)
    this.inputChanged.emit(query)
    if (this.freeSolo()) {
      this.value.set(query)
      this.changed.emit(query)
    }
  }

  handleClear(): void {
    this.searchQuery.set('')
    this.closeDropdown()
    const next = this.multiple() ? [] : null
    this.value.set(next)
    this.changed.emit(next)
  }

  selectOption(option: AutocompleteOption): void {
    const optionValue = this.getOptionValue(option)
    if (this.multiple()) {
      const current = this.value()
      const currentValue = Array.isArray(current) ? [...current] : []
      const index = currentValue.findIndex(
        (v) => (typeof v === 'object' && v !== null ? this.getOptionValue(v as AutocompleteOption) : v) === optionValue
      )
      if (index > -1) {
        currentValue.splice(index, 1)
      } else {
        currentValue.push(option)
      }
      this.value.set(currentValue)
      this.changed.emit(currentValue)
      this.searchQuery.set('')
    } else {
      this.value.set(option)
      this.changed.emit(option)
      this.searchQuery.set(this.getOptionLabel(option))
      this.closeDropdown()
    }
    this.highlightedIndex.set(-1)
  }

  handleKeydown(e: KeyboardEvent): void {
    if (!this.open() && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      this.open.set(true)
      e.preventDefault()
      return
    }
    const filtered = this.filteredOptions()
    if (!this.open() || filtered.length === 0) return
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        this.highlightedIndex.set(Math.min(this.highlightedIndex() + 1, filtered.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        this.highlightedIndex.set(Math.max(this.highlightedIndex() - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (this.highlightedIndex() >= 0 && this.highlightedIndex() < filtered.length) {
          this.selectOption(filtered[this.highlightedIndex()])
        }
        break
      case 'Escape':
        this.closeDropdown()
        break
    }
  }
}

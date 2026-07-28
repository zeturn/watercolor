import { ChangeDetectionStrategy, Component, ViewEncapsulation, input, model, output } from '@angular/core'

@Component({
  selector: 'wc-input',
  standalone: true,
  template: `
    <div class="wc-input wc-input--{{ size() }} {{ error() ? 'wc-input--error' : '' }} {{ disabled() ? 'wc-input--disabled' : '' }} {{ className() }}">
      @if (startIcon()) {
        <span class="wc-input__icon" [innerHTML]="startIcon()"></span>
      }
      <input
        class="wc-input__field"
        [type]="type()"
        [id]="id() || null"
        [placeholder]="placeholder()"
        [disabled]="disabled()"
        [readonly]="readonly()"
        [value]="value()"
        (input)="handleInput($event)"
        (change)="changed.emit($event)"
        (focus)="focused.emit($event)"
        (blur)="blurred.emit($event)"
      />
      @if (endIcon()) {
        <span class="wc-input__icon" [innerHTML]="endIcon()"></span>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-input{display:inline-flex;align-items:center;gap:8px;width:100%;box-sizing:border-box;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));border-radius:8px;color:var(--wc-text-primary,#1a1a1a);transition:border-color 0.15s ease,box-shadow 0.15s ease}
.wc-input--sm{min-height:32px;padding:0 10px;font-size:0.8125rem}
.wc-input--md{min-height:40px;padding:0 12px;font-size:0.875rem}
.wc-input--lg{min-height:48px;padding:0 14px;font-size:1rem}
.wc-input:focus-within{border-color:var(--wc-accent,#3b82f6);box-shadow:0 0 0 3px var(--wc-state-focus-ring,rgba(59,130,246,0.25))}
.wc-input--error{border-color:var(--wc-danger,#ef4444)}
.wc-input--error:focus-within{box-shadow:0 0 0 3px rgba(239,68,68,0.25)}
.wc-input--disabled{background:var(--wc-surface-subtle,#f1f3f5);opacity:0.7;cursor:not-allowed}
.wc-input__field{flex:1 1 auto;min-width:0;border:0;outline:0;background:transparent;color:inherit;font:inherit;padding:0}
.wc-input__field:disabled{cursor:not-allowed}
.wc-input__icon{display:inline-flex;color:var(--wc-text-secondary,#6b7280);flex:0 0 auto}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Input {
  readonly value = model('')
  readonly type = input('text')
  readonly id = input('')
  readonly placeholder = input('')
  readonly disabled = input(false)
  readonly readonly = input(false)
  readonly error = input(false)
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly startIcon = input('')
  readonly endIcon = input('')
  readonly className = input('')
  readonly inputted = output<Event>()
  readonly changed = output<Event>()
  readonly focused = output<FocusEvent>()
  readonly blurred = output<FocusEvent>()

  handleInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value)
    this.inputted.emit(event)
  }
}

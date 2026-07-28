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

interface CalendarDay {
  day: number
  month: 'prev' | 'current' | 'next'
  date: Date
}

@Component({
  selector: 'wc-date-picker',
  standalone: true,
  template: `
    <div class="wc-datepicker">
      <div
        class="wc-datepicker-wrapper wc-datepicker-wrapper--{{ variant() }} wc-datepicker-wrapper--{{ size() }} {{ disabled() ? 'wc-datepicker-wrapper--disabled' : '' }} {{ isOpen() ? 'wc-datepicker-wrapper--open' : '' }}"
        (click)="togglePicker()"
        role="presentation"
      >
        <input
          [id]="inputId"
          type="text"
          [value]="displayValue()"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          readonly
          class="wc-datepicker-input"
          role="combobox"
          aria-haspopup="dialog"
          [attr.aria-expanded]="isOpen()"
          [attr.aria-controls]="inputId + '-calendar'"
          (keydown)="handleInputKeydown($event)"
        />
        <span class="wc-datepicker-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
        </span>
      </div>

      @if (isOpen()) {
        <div [id]="inputId + '-calendar'" class="wc-datepicker-dropdown" role="dialog" [attr.aria-label]="locale.messages.openCalendar">
          <div class="wc-datepicker-header">
            <button type="button" class="wc-datepicker-nav" [attr.aria-label]="locale.messages.previousMonth" (click)="changeMonth(-1)">‹</button>
            <span class="wc-datepicker-title">{{ currentMonthYear() }}</span>
            <button type="button" class="wc-datepicker-nav" [attr.aria-label]="locale.messages.nextMonth" (click)="changeMonth(1)">›</button>
          </div>

          <div class="wc-datepicker-weekdays">
            @for (weekday of weekdays; track weekday) {
              <div class="wc-datepicker-weekday">{{ weekday }}</div>
            }
          </div>

          <div class="wc-datepicker-days">
            @for (day of calendarDays(); track day.month + '-' + day.day) {
              <button
                type="button"
                class="wc-datepicker-day wc-datepicker-day--{{ day.month }} {{ isDateSelected(day.date) ? 'wc-datepicker-day--selected' : '' }} {{ isToday(day.date) ? 'wc-datepicker-day--today' : '' }} {{ isDateDisabled(day) ? 'wc-datepicker-day--disabled' : '' }}"
                [disabled]="isDateDisabled(day)"
                [attr.aria-label]="formatDate(day.date, 'YYYY-MM-DD')"
                [attr.aria-pressed]="isDateSelected(day.date)"
                [attr.aria-current]="isToday(day.date) ? 'date' : null"
                (click)="selectDate(day)"
              >
                {{ day.day }}
              </button>
            }
          </div>

          @if (showToday()) {
            <div class="wc-datepicker-footer">
              <button type="button" class="wc-datepicker-today" (click)="commitToday()">今天</button>
              <button type="button" class="wc-datepicker-clear" (click)="commit(null)">清除</button>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [
    ':host{display:contents}',
    `.wc-datepicker{position:relative;display:inline-block}
.wc-datepicker-wrapper{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--wc-border-default,rgba(0,0,0,0.15));border-radius:8px;background:var(--wc-surface-canvas,#fff);cursor:pointer;transition:border-color 0.15s ease}
.wc-datepicker-wrapper--filled{background:var(--wc-surface-muted,rgba(0,0,0,0.04))}
.wc-datepicker-wrapper--sm{padding:5px 10px}
.wc-datepicker-wrapper--lg{padding:11px 14px}
.wc-datepicker-wrapper--open,.wc-datepicker-wrapper:hover:not(.wc-datepicker-wrapper--disabled){border-color:var(--wc-color-primary,#3b82f6)}
.wc-datepicker-wrapper--disabled{opacity:0.5;cursor:not-allowed}
.wc-datepicker-input{border:none;outline:none;background:transparent;font-size:0.9rem;width:120px;color:var(--wc-text-primary,#1a1a1a);cursor:inherit}
.wc-datepicker-icon{display:inline-flex;width:18px;height:18px;color:var(--wc-text-secondary,#6b7280)}
.wc-datepicker-icon svg{width:100%;height:100%}
.wc-datepicker-dropdown{position:absolute;top:calc(100% + 6px);left:0;z-index:1000;width:280px;padding:12px;background:var(--wc-surface-canvas,#fff);border:1px solid var(--wc-border-default,rgba(0,0,0,0.1));border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.15)}
.wc-datepicker-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.wc-datepicker-nav{background:none;border:none;font-size:1.2rem;cursor:pointer;padding:2px 10px;border-radius:6px;color:var(--wc-text-primary,#1a1a1a)}
.wc-datepicker-nav:hover{background:var(--wc-surface-hover,rgba(0,0,0,0.06))}
.wc-datepicker-title{font-weight:600;font-size:0.9rem;color:var(--wc-text-primary,#1a1a1a)}
.wc-datepicker-weekdays,.wc-datepicker-days{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
.wc-datepicker-weekday{text-align:center;font-size:0.75rem;color:var(--wc-text-secondary,#6b7280);padding:4px 0}
.wc-datepicker-day{aspect-ratio:1;border:none;background:none;border-radius:6px;font-size:0.8rem;cursor:pointer;color:var(--wc-text-primary,#1a1a1a)}
.wc-datepicker-day--prev,.wc-datepicker-day--next{color:var(--wc-text-disabled,#9ca3af)}
.wc-datepicker-day:hover:not(:disabled){background:var(--wc-surface-hover,rgba(0,0,0,0.06))}
.wc-datepicker-day--today{font-weight:700;color:var(--wc-color-primary,#3b82f6)}
.wc-datepicker-day--selected{background:var(--wc-color-primary,#3b82f6);color:#fff}
.wc-datepicker-day--selected:hover:not(:disabled){background:var(--wc-color-primary,#3b82f6)}
.wc-datepicker-day--disabled{cursor:not-allowed;opacity:0.4}
.wc-datepicker-footer{display:flex;justify-content:space-between;margin-top:8px;padding-top:8px;border-top:1px solid var(--wc-border-default,rgba(0,0,0,0.08))}
.wc-datepicker-today,.wc-datepicker-clear{background:none;border:none;font-size:0.8rem;cursor:pointer;padding:4px 8px;border-radius:6px;color:var(--wc-color-primary,#3b82f6)}
.wc-datepicker-clear{color:var(--wc-text-secondary,#6b7280)}
.wc-datepicker-today:hover,.wc-datepicker-clear:hover{background:var(--wc-surface-hover,rgba(0,0,0,0.06))}`,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePicker {
  readonly value = model<Date | string | null>(null)
  readonly placeholder = input('请选择日期')
  readonly format = input('YYYY-MM-DD')
  readonly disabled = input(false)
  readonly showToday = input(true)
  readonly minDate = input<Date | string | null>(null)
  readonly maxDate = input<Date | string | null>(null)
  readonly size = input<'sm' | 'md' | 'lg'>('md')
  readonly variant = input<'default' | 'outlined' | 'filled'>('default')
  readonly changed = output<Date | null>()

  readonly locale = useLocale()
  readonly inputId = `wc-datepicker-${Math.random().toString(36).slice(2, 11)}`
  readonly isOpen = signal(false)
  readonly currentDate = signal(new Date())
  readonly weekdays = ['日', '一', '二', '三', '四', '五', '六']

  private readonly elementRef = inject(ElementRef<HTMLElement>)

  readonly selectedDate = computed(() => {
    const value = this.value()
    if (!value) return null
    return value instanceof Date ? value : new Date(value)
  })

  readonly displayValue = computed(() => {
    const selected = this.selectedDate()
    return selected ? this.formatDate(selected, this.format()) : ''
  })

  readonly currentMonthYear = computed(
    () => `${this.currentDate().getFullYear()}年${this.currentDate().getMonth() + 1}月`
  )

  readonly calendarDays = computed(() => {
    const year = this.currentDate().getFullYear()
    const month = this.currentDate().getMonth()
    const firstDayWeekday = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days: CalendarDay[] = []
    const prevMonthLastDay = new Date(year, month, 0).getDate()
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, month: 'prev', date: new Date(year, month - 1, prevMonthLastDay - i) })
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, month: 'current', date: new Date(year, month, day) })
    }
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ day, month: 'next', date: new Date(year, month + 1, day) })
    }
    return days
  })

  constructor() {
    effect(() => {
      const value = this.value()
      if (value) {
        const date = value instanceof Date ? value : new Date(value)
        this.currentDate.set(new Date(date.getFullYear(), date.getMonth(), 1))
      }
    })

    effect((onCleanup) => {
      if (!this.isOpen() || typeof document === 'undefined') return
      const handlePointerDown = (e: PointerEvent) => {
        const root = this.elementRef.nativeElement as HTMLElement
        if (root && !root.contains(e.target as Node)) this.isOpen.set(false)
      }
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') this.isOpen.set(false)
      }
      document.addEventListener('pointerdown', handlePointerDown)
      document.addEventListener('keydown', handleKeydown)
      onCleanup(() => {
        document.removeEventListener('pointerdown', handlePointerDown)
        document.removeEventListener('keydown', handleKeydown)
      })
    })
  }

  formatDate(date: Date, fmt: string): string {
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return fmt.replace('YYYY', year).replace('MM', month).replace('DD', day)
  }

  isDateSelected(date: Date): boolean {
    const selected = this.selectedDate()
    if (!selected) return false
    return date.toDateString() === selected.toDateString()
  }

  isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString()
  }

  isDateDisabled(day: CalendarDay): boolean {
    const minDate = this.minDate()
    if (minDate) {
      const min = minDate instanceof Date ? minDate : new Date(minDate)
      if (day.date < min) return true
    }
    const maxDate = this.maxDate()
    if (maxDate) {
      const max = maxDate instanceof Date ? maxDate : new Date(maxDate)
      if (day.date > max) return true
    }
    return false
  }

  togglePicker(): void {
    if (this.disabled()) return
    this.isOpen.set(!this.isOpen())
  }

  handleInputKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      this.isOpen.set(true)
    } else if (event.key === 'Escape') {
      this.isOpen.set(false)
    }
  }

  changeMonth(delta: number): void {
    const newDate = new Date(this.currentDate())
    newDate.setMonth(newDate.getMonth() + delta)
    this.currentDate.set(newDate)
  }

  commit(next: Date | null): void {
    this.value.set(next)
    this.changed.emit(next)
    this.isOpen.set(false)
  }

  commitToday(): void {
    this.commit(new Date())
  }

  selectDate(day: CalendarDay): void {
    if (this.isDateDisabled(day)) return
    this.commit(new Date(day.date))
  }
}

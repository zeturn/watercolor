<script lang="ts">
  import { useLocale } from '../../hooks.js'

  interface CalendarDay {
    day: number
    month: 'prev' | 'current' | 'next'
    date: Date
  }

  let {
    value = $bindable(null),
    placeholder = '请选择日期',
    format = 'YYYY-MM-DD',
    disabled = false,
    showToday = true,
    minDate = null,
    maxDate = null,
    size = 'md',
    variant = 'default',
    onchange,
  }: {
    value?: Date | string | null
    placeholder?: string
    format?: string
    disabled?: boolean
    showToday?: boolean
    minDate?: Date | string | null
    maxDate?: Date | string | null
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'outlined' | 'filled'
    onchange?: (value: Date | null) => void
  } = $props()

  const localeStore = useLocale()
  const inputId = `wc-datepicker-${Math.random().toString(36).slice(2, 11)}`

  let isOpen = $state(false)
  let currentDate = $state(new Date())
  let rootEl: HTMLElement | null = $state(null)

  const weekdays = ['日', '一', '二', '三', '四', '五', '六']

  const selectedDate = $derived.by(() => {
    if (!value) return null
    return value instanceof Date ? value : new Date(value)
  })

  const displayValue = $derived(selectedDate ? formatDate(selectedDate, format) : '')

  const currentMonthYear = $derived(`${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`)

  const calendarDays = $derived.by(() => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
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

  function formatDate(date: Date, fmt: string): string {
    const year = String(date.getFullYear())
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return fmt.replace('YYYY', year).replace('MM', month).replace('DD', day)
  }

  function isDateSelected(date: Date): boolean {
    if (!selectedDate) return false
    return date.toDateString() === selectedDate.toDateString()
  }

  function isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString()
  }

  function isDateDisabled(day: CalendarDay): boolean {
    if (minDate) {
      const min = minDate instanceof Date ? minDate : new Date(minDate)
      if (day.date < min) return true
    }
    if (maxDate) {
      const max = maxDate instanceof Date ? maxDate : new Date(maxDate)
      if (day.date > max) return true
    }
    return false
  }

  function togglePicker() {
    if (disabled) return
    isOpen = !isOpen
  }

  function handleInputKeydown(event: KeyboardEvent) {
    if (disabled) return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      event.preventDefault()
      isOpen = true
    } else if (event.key === 'Escape') {
      isOpen = false
    }
  }

  function changeMonth(delta: number) {
    const newDate = new Date(currentDate)
    newDate.setMonth(newDate.getMonth() + delta)
    currentDate = newDate
  }

  function commit(next: Date | null) {
    value = next
    onchange?.(next)
    isOpen = false
  }

  function selectDate(day: CalendarDay) {
    if (isDateDisabled(day)) return
    commit(new Date(day.date))
  }

  $effect(() => {
    if (value) {
      const date = value instanceof Date ? value : new Date(value)
      currentDate = new Date(date.getFullYear(), date.getMonth(), 1)
    }
  })

  $effect(() => {
    if (!isOpen || typeof document === 'undefined') return
    const handlePointerDown = (e: PointerEvent) => {
      if (rootEl && !rootEl.contains(e.target as Node)) isOpen = false
    }
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') isOpen = false
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeydown)
    }
  })
</script>

<div bind:this={rootEl} class="wc-datepicker">
  <div
    class="wc-datepicker-wrapper wc-datepicker-wrapper--{variant} wc-datepicker-wrapper--{size}"
    class:wc-datepicker-wrapper--disabled={disabled}
    class:wc-datepicker-wrapper--open={isOpen}
    onclick={togglePicker}
    role="presentation"
  >
    <input
      id={inputId}
      type="text"
      value={displayValue}
      {placeholder}
      {disabled}
      readonly
      class="wc-datepicker-input"
      role="combobox"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="{inputId}-calendar"
      onkeydown={handleInputKeydown}
    />
    <span class="wc-datepicker-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
    </span>
  </div>

  {#if isOpen}
    <div id="{inputId}-calendar" class="wc-datepicker-dropdown" role="dialog" aria-label={localeStore.messages.openCalendar}>
      <div class="wc-datepicker-header">
        <button type="button" class="wc-datepicker-nav" aria-label={localeStore.messages.previousMonth} onclick={() => changeMonth(-1)}>‹</button>
        <span class="wc-datepicker-title">{currentMonthYear}</span>
        <button type="button" class="wc-datepicker-nav" aria-label={localeStore.messages.nextMonth} onclick={() => changeMonth(1)}>›</button>
      </div>

      <div class="wc-datepicker-weekdays">
        {#each weekdays as weekday (weekday)}
          <div class="wc-datepicker-weekday">{weekday}</div>
        {/each}
      </div>

      <div class="wc-datepicker-days">
        {#each calendarDays as day (`${day.month}-${day.day}`)}
          <button
            type="button"
            class="wc-datepicker-day wc-datepicker-day--{day.month}"
            class:wc-datepicker-day--selected={isDateSelected(day.date)}
            class:wc-datepicker-day--today={isToday(day.date)}
            class:wc-datepicker-day--disabled={isDateDisabled(day)}
            disabled={isDateDisabled(day)}
            aria-label={formatDate(day.date, 'YYYY-MM-DD')}
            aria-pressed={isDateSelected(day.date)}
            aria-current={isToday(day.date) ? 'date' : undefined}
            onclick={() => selectDate(day)}
          >
            {day.day}
          </button>
        {/each}
      </div>

      {#if showToday}
        <div class="wc-datepicker-footer">
          <button type="button" class="wc-datepicker-today" onclick={() => commit(new Date())}>今天</button>
          <button type="button" class="wc-datepicker-clear" onclick={() => commit(null)}>清除</button>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  .wc-datepicker {
    position: relative;
    display: inline-block;
  }
  .wc-datepicker-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.15));
    border-radius: 8px;
    background: var(--wc-surface-canvas, #fff);
    cursor: pointer;
    transition: border-color 0.15s ease;
  }
  .wc-datepicker-wrapper--filled {
    background: var(--wc-surface-muted, rgba(0, 0, 0, 0.04));
  }
  .wc-datepicker-wrapper--sm { padding: 5px 10px; }
  .wc-datepicker-wrapper--lg { padding: 11px 14px; }
  .wc-datepicker-wrapper--open,
  .wc-datepicker-wrapper:hover:not(.wc-datepicker-wrapper--disabled) {
    border-color: var(--wc-color-primary, #3b82f6);
  }
  .wc-datepicker-wrapper--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .wc-datepicker-input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.9rem;
    width: 120px;
    color: var(--wc-text-primary, #1a1a1a);
    cursor: inherit;
  }
  .wc-datepicker-icon {
    display: inline-flex;
    width: 18px;
    height: 18px;
    color: var(--wc-text-secondary, #6b7280);
  }
  .wc-datepicker-icon svg {
    width: 100%;
    height: 100%;
  }
  .wc-datepicker-dropdown {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    z-index: 1000;
    width: 280px;
    padding: 12px;
    background: var(--wc-surface-canvas, #fff);
    border: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.1));
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  .wc-datepicker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .wc-datepicker-nav {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 2px 10px;
    border-radius: 6px;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-datepicker-nav:hover {
    background: var(--wc-surface-hover, rgba(0, 0, 0, 0.06));
  }
  .wc-datepicker-title {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-datepicker-weekdays,
  .wc-datepicker-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }
  .wc-datepicker-weekday {
    text-align: center;
    font-size: 0.75rem;
    color: var(--wc-text-secondary, #6b7280);
    padding: 4px 0;
  }
  .wc-datepicker-day {
    aspect-ratio: 1;
    border: none;
    background: none;
    border-radius: 6px;
    font-size: 0.8rem;
    cursor: pointer;
    color: var(--wc-text-primary, #1a1a1a);
  }
  .wc-datepicker-day--prev,
  .wc-datepicker-day--next {
    color: var(--wc-text-disabled, #9ca3af);
  }
  .wc-datepicker-day:hover:not(:disabled) {
    background: var(--wc-surface-hover, rgba(0, 0, 0, 0.06));
  }
  .wc-datepicker-day--today {
    font-weight: 700;
    color: var(--wc-color-primary, #3b82f6);
  }
  .wc-datepicker-day--selected {
    background: var(--wc-color-primary, #3b82f6);
    color: #fff;
  }
  .wc-datepicker-day--selected:hover:not(:disabled) {
    background: var(--wc-color-primary, #3b82f6);
  }
  .wc-datepicker-day--disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  .wc-datepicker-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--wc-border-default, rgba(0, 0, 0, 0.08));
  }
  .wc-datepicker-today,
  .wc-datepicker-clear {
    background: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    color: var(--wc-color-primary, #3b82f6);
  }
  .wc-datepicker-clear {
    color: var(--wc-text-secondary, #6b7280);
  }
  .wc-datepicker-today:hover,
  .wc-datepicker-clear:hover {
    background: var(--wc-surface-hover, rgba(0, 0, 0, 0.06));
  }
</style>

<template>
  <div class="wc-datepicker" ref="datePickerRef">
    <div
      :class="inputClasses"
      @click="togglePicker"
    >
      <input
        ref="inputRef"
        type="text"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        readonly
        class="wc-datepicker-input"
      />
      <span class="wc-datepicker-icon">📅</span>
    </div>
    
    <div
      v-if="isOpen"
      class="wc-datepicker-dropdown"
      :style="dropdownStyles"
    >
      <div class="wc-datepicker-header">
        <button
          type="button"
          class="wc-datepicker-nav"
          @click="changeMonth(-1)"
        >
          ‹
        </button>
        <span class="wc-datepicker-title">
          {{ currentMonthYear }}
        </span>
        <button
          type="button"
          class="wc-datepicker-nav"
          @click="changeMonth(1)"
        >
          ›
        </button>
      </div>
      
      <div class="wc-datepicker-weekdays">
        <div
          v-for="weekday in weekdays"
          :key="weekday"
          class="wc-datepicker-weekday"
        >
          {{ weekday }}
        </div>
      </div>
      
      <div class="wc-datepicker-days">
        <button
          v-for="day in calendarDays"
          :key="`${day.month}-${day.day}`"
          type="button"
          :class="getDayClasses(day)"
          @click="selectDate(day)"
          :disabled="isDateDisabled(day)"
        >
          {{ day.day }}
        </button>
      </div>
      
      <div v-if="showToday" class="wc-datepicker-footer">
        <button
          type="button"
          class="wc-datepicker-today"
          @click="selectToday"
        >
          今天
        </button>
        <button
          type="button"
          class="wc-datepicker-clear"
          @click="clearDate"
        >
          清除
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Date, String],
    default: null
  },
  placeholder: {
    type: String,
    default: '请选择日期'
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
  minDate: {
    type: [Date, String],
    default: null
  },
  maxDate: {
    type: [Date, String],
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outlined', 'filled'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const datePickerRef = ref(null)
const inputRef = ref(null)
const isOpen = ref(false)
const currentDate = ref(new Date())

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

const inputClasses = computed(() => [
  'wc-datepicker-wrapper',
  `wc-datepicker-wrapper--${props.variant}`,
  `wc-datepicker-wrapper--${props.size}`,
  {
    'wc-datepicker-wrapper--disabled': props.disabled,
    'wc-datepicker-wrapper--open': isOpen.value
  }
])

const dropdownStyles = computed(() => ({
  zIndex: 1000
}))

const selectedDate = computed(() => {
  if (!props.modelValue) return null
  return props.modelValue instanceof Date ? props.modelValue : new Date(props.modelValue)
})

const displayValue = computed(() => {
  if (!selectedDate.value) return ''
  return formatDate(selectedDate.value, props.format)
})

const currentMonthYear = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth() + 1
  return `${year}年${month}月`
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const firstDayWeekday = firstDay.getDay()
  const daysInMonth = lastDay.getDate()
  
  const days = []
  
  // 添加上个月的日期
  const prevMonth = new Date(year, month - 1, 0)
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    days.push({
      day: prevMonth.getDate() - i,
      month: 'prev',
      date: new Date(year, month - 1, prevMonth.getDate() - i)
    })
  }
  
  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      month: 'current',
      date: new Date(year, month, day)
    })
  }
  
  // 添加下个月的日期
  const remainingDays = 42 - days.length
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      day,
      month: 'next',
      date: new Date(year, month + 1, day)
    })
  }
  
  return days
})

const getDayClasses = (day) => [
  'wc-datepicker-day',
  {
    'wc-datepicker-day--prev': day.month === 'prev',
    'wc-datepicker-day--next': day.month === 'next',
    'wc-datepicker-day--current': day.month === 'current',
    'wc-datepicker-day--selected': isDateSelected(day.date),
    'wc-datepicker-day--today': isToday(day.date),
    'wc-datepicker-day--disabled': isDateDisabled(day)
  }
]

const isDateSelected = (date) => {
  if (!selectedDate.value) return false
  return date.toDateString() === selectedDate.value.toDateString()
}

const isToday = (date) => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

const isDateDisabled = (day) => {
  const { date } = day
  
  if (props.minDate) {
    const minDate = props.minDate instanceof Date ? props.minDate : new Date(props.minDate)
    if (date < minDate) return true
  }
  
  if (props.maxDate) {
    const maxDate = props.maxDate instanceof Date ? props.maxDate : new Date(props.maxDate)
    if (date > maxDate) return true
  }
  
  return false
}

const formatDate = (date, format) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
}

const togglePicker = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}

const changeMonth = (delta) => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + delta)
  currentDate.value = newDate
}

const selectDate = (day) => {
  if (isDateDisabled(day)) return
  
  const newDate = new Date(day.date)
  emit('update:modelValue', newDate)
  emit('change', newDate)
  isOpen.value = false
}

const selectToday = () => {
  const today = new Date()
  emit('update:modelValue', today)
  emit('change', today)
  isOpen.value = false
}

const clearDate = () => {
  emit('update:modelValue', null)
  emit('change', null)
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (datePickerRef.value && !datePickerRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const date = newValue instanceof Date ? newValue : new Date(newValue)
    currentDate.value = new Date(date.getFullYear(), date.getMonth(), 1)
  }
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.wc-datepicker {
  position: relative;
  display: inline-block;
  font-family: var(--wc-font-family);
}

.wc-datepicker-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wc-datepicker-wrapper:hover:not(.wc-datepicker-wrapper--disabled) {
  border-color: #1a8cff;
}

.wc-datepicker-wrapper--open {
  border-color: #1a8cff;
  box-shadow: 0 0 0 3px rgba(26, 140, 255, 0.1);
}

.wc-datepicker-wrapper--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #f9fafb;
}

.wc-datepicker-wrapper--sm {
  padding: 6px 12px;
}

.wc-datepicker-wrapper--md {
  padding: 8px 14px;
}

.wc-datepicker-wrapper--lg {
  padding: 12px 16px;
}

.wc-datepicker-input {
  flex: 1;
  border: none;
  outline: none;
  background: none;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.wc-datepicker-input::placeholder {
  color: #9ca3af;
}

.wc-datepicker-input:disabled {
  cursor: not-allowed;
}

.wc-datepicker-icon {
  flex-shrink: 0;
  margin-left: 8px;
  font-size: 16px;
  color: #6b7280;
}

.wc-datepicker-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 280px;
}

.wc-datepicker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.wc-datepicker-nav {
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  color: #6b7280;
  transition: all 0.2s ease;
}

.wc-datepicker-nav:hover {
  background-color: #f3f4f6;
  color: #1a8cff;
}

.wc-datepicker-title {
  font-weight: 600;
  font-size: 16px;
  color: #1f2937;
}

.wc-datepicker-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.wc-datepicker-weekday {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  padding: 8px 4px;
}

.wc-datepicker-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.wc-datepicker-day {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wc-datepicker-day:hover:not(.wc-datepicker-day--disabled) {
  background-color: #f3f4f6;
}

.wc-datepicker-day--prev,
.wc-datepicker-day--next {
  color: #9ca3af;
}

.wc-datepicker-day--today {
  background-color: #1a8cff;
  color: white;
}

.wc-datepicker-day--selected {
  background-color: #1a8cff;
  color: white;
}

.wc-datepicker-day--disabled {
  color: #d1d5db;
  cursor: not-allowed;
}

.wc-datepicker-footer {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

.wc-datepicker-today,
.wc-datepicker-clear {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.wc-datepicker-today {
  background-color: #1a8cff;
  color: white;
}

.wc-datepicker-today:hover {
  background-color: #1976d2;
}

.wc-datepicker-clear {
  background-color: #f3f4f6;
  color: #6b7280;
}

.wc-datepicker-clear:hover {
  background-color: #e5e7eb;
}

/* 变体样式 */
.wc-datepicker-wrapper--outlined {
  border: 2px solid #d1d5db;
}

.wc-datepicker-wrapper--filled {
  background-color: #f9fafb;
  border: 1px solid transparent;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  .wc-datepicker-wrapper {
    background-color: #374151;
    border-color: #4b5563;
  }
  
  .wc-datepicker-wrapper:hover:not(.wc-datepicker-wrapper--disabled) {
    border-color: #60a5fa;
  }
  
  .wc-datepicker-wrapper--open {
    border-color: #60a5fa;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  }
  
  .wc-datepicker-wrapper--disabled {
    background-color: #4b5563;
  }
  
  .wc-datepicker-input {
    color: #f9fafb;
  }
  
  .wc-datepicker-input::placeholder {
    color: #9ca3af;
  }
  
  .wc-datepicker-icon {
    color: #d1d5db;
  }
  
  .wc-datepicker-dropdown {
    background: #1f2937;
    border-color: #374151;
  }
  
  .wc-datepicker-nav {
    color: #d1d5db;
  }
  
  .wc-datepicker-nav:hover {
    background-color: #374151;
    color: #60a5fa;
  }
  
  .wc-datepicker-title {
    color: #f9fafb;
  }
  
  .wc-datepicker-weekday {
    color: #9ca3af;
  }
  
  .wc-datepicker-day {
    color: #f9fafb;
  }
  
  .wc-datepicker-day:hover:not(.wc-datepicker-day--disabled) {
    background-color: #374151;
  }
  
  .wc-datepicker-day--prev,
  .wc-datepicker-day--next {
    color: #6b7280;
  }
  
  .wc-datepicker-day--today {
    background-color: #60a5fa;
  }
  
  .wc-datepicker-day--selected {
    background-color: #60a5fa;
  }
  
  .wc-datepicker-day--disabled {
    color: #4b5563;
  }
  
  .wc-datepicker-footer {
    border-top-color: #374151;
  }
  
  .wc-datepicker-today {
    background-color: #60a5fa;
  }
  
  .wc-datepicker-today:hover {
    background-color: #3b82f6;
  }
  
  .wc-datepicker-clear {
    background-color: #374151;
    color: #d1d5db;
  }
  
  .wc-datepicker-clear:hover {
    background-color: #4b5563;
  }
  
  .wc-datepicker-wrapper--filled {
    background-color: #4b5563;
  }
}

/* 响应式设计 */
@media (max-width: 480px) {
  .wc-datepicker-dropdown {
    position: fixed;
    top: 50% !important;
    left: 50% !important;
    right: auto !important;
    transform: translate(-50%, -50%);
    margin: 0;
    max-width: 320px;
    width: 90vw;
  }
}
</style> 
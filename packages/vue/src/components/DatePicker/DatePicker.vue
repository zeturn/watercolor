<template>
  <div
    ref="datePickerRef"
    class="wc-datepicker"
  >
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
      >
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
          :disabled="isDateDisabled(day)"
          @click="selectDate(day)"
        >
          {{ day.day }}
        </button>
      </div>
      
      <div
        v-if="showToday"
        class="wc-datepicker-footer"
      >
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
import './style.css'

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
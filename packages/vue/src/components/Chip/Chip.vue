<template>
  <div
    :class="chipClasses"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable && !disabled ? 0 : undefined"
    :aria-disabled="clickable ? disabled : undefined"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <!-- Avatar/Icon -->
    <div
      v-if="$slots.avatar || avatar"
      class="wc-chip-avatar"
    >
      <slot name="avatar">
        <img
          v-if="avatar"
          :src="avatar"
          alt=""
          class="wc-chip-avatar-image"
        >
      </slot>
    </div>

    <!-- Label -->
    <span class="wc-chip-label">
      <slot>{{ label }}</slot>
    </span>

    <!-- Delete Icon -->
    <button
      v-if="deletable"
      type="button"
      class="wc-chip-delete"
      :aria-label="deleteIcon || '删除'"
      @click.stop="handleDelete"
    >
      <slot name="deleteIcon">
        <svg
          class="wc-chip-delete-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </slot>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { isValidSize, isValidVariant, isValidColor, getChipClasses, handleChipClick, handleChipDelete } from './utils.jsx'
import './style.css'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  deletable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'filled',
    validator: isValidVariant
  },
  size: {
    type: String,
    default: 'md',
    validator: isValidSize
  },
  color: {
    type: String,
    default: 'default',
    validator: isValidColor
  },
  deleteIcon: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click', 'delete'])

const chipClasses = computed(() =>
  getChipClasses(props)
)

const handleClick = (event) => {
  handleChipClick(event, props.clickable, props.disabled, (e) => emit('click', e))
}

const handleDelete = (event) => {
  handleChipDelete(event, props.disabled, (e) => emit('delete', e))
}
</script>

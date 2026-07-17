<template>
  <div
    :class="cardClasses"
    :style="cardStyle"
    role="button"
    tabindex="0"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <div
      v-if="icon"
      class="wc-feature-icon"
      :style="iconStyle"
      v-html="icon"
    />
    <div class="wc-feature-content">
      <h3 class="wc-feature-title">
        {{ title }}
      </h3>
      <p class="wc-feature-description">
        <slot>{{ description }}</slot>
      </p>
      <a
        v-if="ctaLabel"
        :href="ctaHref"
        class="wc-feature-cta"
        @click.stop="$emit('cta-click')"
      >{{ ctaLabel }}</a>
    </div>
  </div>
</template>

<script>
import './style.css'

export default {
  name: 'Feature',
  props: {
    title: { type: String, default: 'Awesome Feature' },
    description: { type: String, default: 'Feature description goes here.' },
    icon: { type: String, default: '' }, // svg/html string
    iconSize: { type: [Number, String], default: 48 },
    align: { type: String, default: 'left' }, // left | center
    bgColor: { type: String, default: '' },
    reverse: { type: Boolean, default: false },
    ctaLabel: { type: String, default: '' },
    ctaHref: { type: String, default: '#' },
    variant: { type: String, default: 'default', validator: v => ['default','elevated','minimal'].includes(v) },
  },
  emits: ['click', 'cta-click'],
  computed: {
    cardClasses() {
      const classes = [
        'wc-feature-card',
        'wc-feature-card--clickable'
      ]
      
      // 变体样式
      if (this.variant !== 'default') {
        classes.push(`wc-feature-card--${this.variant}`)
      }
      
      // 对齐方式
      if (this.align === 'center') {
        classes.push('wc-feature-card--center')
      } else {
        classes.push('wc-feature-card--left')
      }
      
      // 反向布局
      if (this.reverse) {
        classes.push('wc-feature-card--reverse')
      }
      
      return classes
    },
    cardStyle() {
      return this.bgColor ? { background: this.bgColor } : undefined
    },
    iconStyle() {
      const size = typeof this.iconSize === 'number' ? `${this.iconSize}px` : this.iconSize
      return { width: size, height: size, fontSize: `calc(${size} * 0.75)` }
    },
  },
}
</script>

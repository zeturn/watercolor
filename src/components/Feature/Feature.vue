<template>
  <div :class="cardClasses" :style="cardStyle" @click="$emit('click')">
    <div v-if="icon" class="feature-icon" :style="iconStyle" v-html="icon"></div>
    <div class="feature-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-desc"><slot>{{ description }}</slot></p>
      <a v-if="ctaLabel" :href="ctaHref" class="feature-cta" @click.stop="$emit('cta-click')">{{ ctaLabel }}</a>
    </div>
  </div>
</template>

<script>
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
      return [
        'feature-card',
        `feature-card--${this.variant}`,
        { reverse: this.reverse, 'align-center': this.align === 'center' },
      ]
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

<style scoped>
.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px 28px;
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 14px;
  background: var(--color-gray-50, #f9fafb);
  transition: box-shadow 0.22s cubic-bezier(.4,0,.2,1), background 0.2s;
  cursor: pointer;
}
.feature-card.reverse { flex-direction: row-reverse; }
.feature-card.align-center { align-items: center; text-align: center; }

/* 浮层卡片风格 */
.feature-card--elevated {
  background: #fff;
  box-shadow: 0 4px 24px 0 rgba(56, 112, 255, 0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04);
  border: none;
}
.feature-card--elevated:hover {
  box-shadow: 0 8px 32px 0 rgba(56, 112, 255, 0.13), 0 2px 8px 0 rgba(0,0,0,0.08);
  background: #f5faff;
}

/* 极简线性卡片 */
.feature-card--minimal {
  background: transparent;
  border: 1.5px dashed var(--color-border, #e5e7eb);
  box-shadow: none;
}
.feature-card--minimal:hover {
  border-color: var(--color-primary, #3b82f6);
  background: rgba(59,130,246,0.03);
}

.feature-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary, #3b82f6);
  background: linear-gradient(135deg, #e0e7ff 0%, #f0f9ff 100%);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  font-size: 2.2rem;
  box-shadow: 0 2px 8px 0 rgba(59,130,246,0.08);
  margin-bottom: 0;
  transition: box-shadow 0.18s;
}
.feature-card--minimal .feature-icon {
  background: none;
  box-shadow: none;
}
.feature-title {
  margin: 0 0 6px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text, #111827);
  letter-spacing: 0.01em;
}
.feature-desc {
  margin: 0;
  color: var(--color-text-secondary, #6b7280);
  font-size: 1rem;
  line-height: 1.7;
}
.feature-cta {
  display: inline-block;
  margin-top: 16px;
  color: var(--color-primary, #3b82f6);
  font-weight: 600;
  text-decoration: underline;
  font-size: 1rem;
  letter-spacing: 0.01em;
  transition: color 0.18s;
}
.feature-cta:hover {
  color: #1d4ed8;
}
@media (prefers-color-scheme: dark) {
  .feature-card {
    background: var(--color-dark-surface, #1f2937);
    border-color: var(--color-dark-border, #374151);
  }
  .feature-card--elevated {
    background: #232a3a;
    box-shadow: 0 4px 24px 0 rgba(56, 112, 255, 0.13), 0 1.5px 6px 0 rgba(0,0,0,0.12);
    border: none;
  }
  .feature-card--minimal {
    background: transparent;
    border-color: #374151;
  }
  .feature-title { color: var(--color-dark-text, #f9fafb); }
  .feature-desc { color: var(--color-dark-text-secondary, #d1d5db); }
}
</style> 
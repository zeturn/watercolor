<template>
  <ul 
    :class="['wc-feed-list', variant]"
    :style="feedListStyles"
  >
    <FeedItem
      v-for="item in items"
      :key="item.id || item.time"
      :item="item"
      :show-avatar="showAvatar"
      :variant="variant"
      :color="color"
      :dot-size="dotSize"
      :line-width="lineWidth"
      @item-click="$emit('item-click', $event)"
    />
    <slot />
  </ul>
</template>

<script>
import { defineComponent, computed } from 'vue'

const FeedItem = defineComponent({
  name: 'FeedItem',
  components: {}, // will be replaced later for recursion
  props: {
    item: { type: Object, required: true },
    showAvatar: { type: Boolean, default: true },
    variant: { type: String, default: 'timeline' },
    color: { type: String, default: 'var(--wc-primary-500)' },
    dotSize: { type: [String, Number], default: 12 },
    lineWidth: { type: [String, Number], default: 2 },
  },
  emits: ['item-click'],
  computed: {
    feedItemStyles() {
      const dotSizeValue = typeof this.dotSize === 'number' ? `${this.dotSize}px` : this.dotSize
      const lineWidthValue = typeof this.lineWidth === 'number' ? `${this.lineWidth}px` : this.lineWidth
      
      return {
        '--feed-color': this.color,
        '--feed-dot-size': dotSizeValue,
        '--feed-line-width': lineWidthValue,
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('item-click', this.item)
    },
  },
  template: `
    <li 
      class="wc-feed-item" 
      :class="[variant, (item.children && item.children.length) ? 'has-children' : '']" 
      :style="feedItemStyles"
      @click="handleClick"
    >
      <div v-if="showAvatar && item.avatar" class="wc-feed-avatar"><img :src="item.avatar" alt="avatar" /></div>
      <div class="wc-feed-content">
        <div class="wc-feed-header">
          <strong class="wc-feed-author">{{ item.author }}</strong>
          <span class="wc-feed-time">{{ item.time }}</span>
        </div>
        <p class="wc-feed-text">{{ item.text }}</p>
        <ul v-if="item.children && item.children.length" class="wc-feed-children">
          <FeedItem
            v-for="child in item.children"
            :key="child.id || child.time"
            :item="child"
            :variant="variant"
            :show-avatar="showAvatar"
            :color="color"
            :dot-size="dotSize"
            :line-width="lineWidth"
            @item-click="$emit('item-click', $event)"
          />
        </ul>
      </div>
    </li>
  `,
})

// 自身递归引用
FeedItem.components = { FeedItem };

export default {
  name: 'Feed',
  components: { FeedItem },
  props: {
    items: { type: Array, default: () => [] },
    variant: { type: String, default: 'timeline' }, // timeline 默认
    showAvatar: { type: Boolean, default: true },
    color: { type: String, default: 'var(--wc-primary-500)' }, // 主题颜色
    dotSize: { type: [String, Number], default: 12 }, // 圆点大小
    lineWidth: { type: [String, Number], default: 3 }, // 线条粗细
  },
  emits: ['item-click'],
  setup(props) {
    const feedListStyles = computed(() => {
      const lineWidthValue = typeof props.lineWidth === 'number' ? `${props.lineWidth}px` : props.lineWidth
      
      return {
        '--feed-color': props.color,
        '--feed-line-width': lineWidthValue,
      }
    })

    return {
      feedListStyles
    }
  }
}
</script>

<style src="./style.css"></style> 
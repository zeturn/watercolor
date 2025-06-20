<template>
  <ul :class="['feed-list', variant]">
    <FeedItem
      v-for="item in items"
      :key="item.id || item.time"
      :item="item"
      :show-avatar="showAvatar"
      :variant="variant"
      @item-click="$emit('item-click', $event)"
    />
    <slot />
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

const FeedItem = defineComponent({
  name: 'FeedItem',
  components: {}, // will be replaced later for recursion
  props: {
    item: { type: Object, required: true },
    showAvatar: { type: Boolean, default: true },
    variant: { type: String, default: 'list' },
  },
  emits: ['item-click'],
  methods: {
    handleClick() {
      this.$emit('item-click', this.item)
    },
  },
  template: `
    <li class="feed-item" :class="variant" @click="handleClick">
      <div v-if="showAvatar && item.avatar" class="feed-avatar"><img :src="item.avatar" alt="avatar" /></div>
      <div class="feed-content">
        <div class="feed-header">
          <strong class="feed-author">{{ item.author }}</strong>
          <span class="feed-time">{{ item.time }}</span>
        </div>
        <p class="feed-text">{{ item.text }}</p>
        <ul v-if="item.children && item.children.length" class="feed-children">
          <FeedItem
            v-for="child in item.children"
            :key="child.id || child.time"
            :item="child"
            :variant="variant"
            :show-avatar="showAvatar"
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
  props: {
    items: { type: Array, default: () => [] },
    variant: { type: String, default: 'list' }, // list | timeline
    showAvatar: { type: Boolean, default: true },
  },
  components: { FeedItem },
  emits: ['item-click'],
}
</script>

<style scoped>
/* 基础 */
.feed-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;}
.feed-item{display:flex;gap:12px;position:relative;}
.feed-avatar img{width:40px;height:40px;border-radius:50%;object-fit:cover;}
.feed-content{flex:1;}
.feed-header{display:flex;gap:8px;align-items:center;}
.feed-author{color:var(--color-text,#111827);} 
.feed-time{font-size:0.75rem;color:var(--color-text-secondary,#6b7280);} 
.feed-text{margin:4px 0 0;font-size:0.875rem;color:var(--color-text,#374151);} 
/* 子级缩进 */
.feed-children{list-style:none;margin:12px 0 0 52px;padding:0;display:flex;flex-direction:column;gap:16px;}
/* 时间轴 variant */
.timeline{padding-left:24px;}
.timeline .feed-item::before{content:'';position:absolute;left:-12px;top:0;width:2px;height:100%;background:var(--color-border,#e5e7eb);} 
.timeline .feed-item::after{content:'';position:absolute;left:-13px;top:8px;width:8px;height:8px;border-radius:50%;background:var(--color-primary,#3b82f6);} 
@media(prefers-color-scheme:dark){
  .feed-text{color:var(--color-dark-text,#f9fafb);} 
  .feed-author{color:var(--color-dark-text,#f9fafb);} 
  .feed-time{color:var(--color-dark-text-secondary,#9ca3af);} 
  .timeline .feed-item::before{background:var(--color-dark-border,#374151);} 
  .timeline .feed-item::after{background:var(--color-primary,#3b82f6);} 
}
</style> 
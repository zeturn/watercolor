<template>
  <div class="wc-spinner" :style="style"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: { type: Number, default: 40 },
    color: { type: String, default: 'var(--wc-primary-500)' },
    thickness: { type: Number, default: 4 },
  },
  computed: {
    style () {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        borderWidth: this.thickness + 'px',
        borderTopColor: this.color
      }
    }
  }
}
</script>

<style scoped>
.wc-spinner {
  border: 4px solid var(--wc-neutral-200);
  border-top-color: var(--wc-primary-500);
  border-radius: 50%;
  animation: wc-spin 1s linear infinite;
}

@keyframes wc-spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 
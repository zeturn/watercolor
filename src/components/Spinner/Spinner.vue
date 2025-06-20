<template>
  <div class="spinner" :style="style"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    size: { type: Number, default: 40 },
    color: { type: String, default: 'var(--color-primary, #3b82f6)' },
    thickness: { type: Number, default: 4 },
  },
  computed:{
    style(){return{width:this.size+'px',height:this.size+'px',borderWidth:this.thickness+'px',borderTopColor:this.color}}
  }
}
</script>

<style scoped>
.spinner{border:4px solid var(--color-gray-200,#e5e7eb);border-top-color:var(--color-primary,#3b82f6);border-radius:50%;animation:spin 1s linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
</style> 
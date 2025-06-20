<template>
  <div class="video-wrapper">
    <video ref="video" class="video-el" :src="src" @timeupdate="updateProgress" @ended="onEnded"></video>
    <div class="controls">
      <button class="ctrl-btn" @click="togglePlay">{{ playing ? '❚❚' : '▶️' }}</button>
      <div class="progress" @click="seek($event)">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="time">{{ formattedCurrent }} / {{ formattedDuration }}</span>
      <button class="ctrl-btn" @click="toggleMute">{{ muted ? '🔇' : '🔊' }}</button>
      <input class="volume" type="range" min="0" max="1" step="0.05" v-model.number="volume" />
      <button class="ctrl-btn" @click="toggleFullscreen">⛶</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
export default {
  name: 'VideoPlayer',
  props: {
    src: { type: String, required: true },
    autoplay: { type: Boolean, default: false },
    loop: { type: Boolean, default: false },
  },
  setup(props) {
    const video = ref(null)
    const playing = ref(false)
    const progress = ref(0)
    const volume = ref(0.7)
    const muted = ref(false)
    const duration = ref(0)
    const current = ref(0)

    const formattedTime = (s) => {
      const m = Math.floor(s / 60)
      const sec = Math.floor(s % 60).toString().padStart(2, '0')
      return `${m}:${sec}`
    }
    const formattedCurrent = computed(() => formattedTime(current.value))
    const formattedDuration = computed(() => formattedTime(duration.value))

    const togglePlay = () => {
      if (!video.value) return
      if (video.value.paused) {
        video.value.play()
      } else {
        video.value.pause()
      }
    }
    const updateProgress = () => {
      if (!video.value) return
      duration.value = video.value.duration || 0
      current.value = video.value.currentTime
      progress.value = duration.value ? (current.value / duration.value) * 100 : 0
      playing.value = !video.value.paused
    }
    const seek = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      if (video.value) video.value.currentTime = percent * duration.value
    }
    const toggleMute = () => {
      muted.value = !muted.value
      if (video.value) video.value.muted = muted.value
    }
    const toggleFullscreen = () => {
      const el = video.value.parentElement
      if (!document.fullscreenElement) {
        el.requestFullscreen?.()
      } else {
        document.exitFullscreen?.()
      }
    }

    watch(volume, (v) => { if (video.value) video.value.volume = v })
    const onEnded = () => { playing.value = false }

    onMounted(() => {
      if (video.value) {
        video.value.volume = volume.value
        video.value.muted = muted.value
        video.value.loop = props.loop
        if (props.autoplay) video.value.play()
      }
    })

    return { video, playing, progress, togglePlay, updateProgress, seek, volume, muted, toggleMute, toggleFullscreen, formattedCurrent, formattedDuration, onEnded }
  }
}
</script>

<style scoped>
.video-wrapper { width: 100%; max-width: 640px; margin: 0 auto; }
.video-el { width: 100%; border-radius: 8px; background: black; }
.controls { display: flex; align-items: center; gap: 6px; margin-top: 4px; font-size: 0.875rem; }
.ctrl-btn { background: none; border: none; cursor: pointer; font-size: 1rem; }
.progress { flex: 1 1 auto; height: 6px; background: var(--color-gray-300, #d1d5db); border-radius: 3px; cursor: pointer; position: relative; }
.progress-bar { height: 100%; background: var(--color-primary, #3b82f6); border-radius: 3px; }
.volume { width: 80px; }
.time { min-width: 60px; text-align: center; }
@media (prefers-color-scheme: dark) {
  .progress { background: var(--color-dark-border, #4b5563); }
  .controls { color: var(--color-dark-text, #f9fafb); }
}
</style> 
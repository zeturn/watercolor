<template>
  <div class="video-wrapper">
    <video
      ref="video"
      class="video-el"
      :src="src"
      @timeupdate="updateProgress"
      @ended="onEnded"
    />
    <div class="controls">
      <button
        class="ctrl-btn"
        :aria-label="playing ? '暂停' : '播放'"
        @click="togglePlay"
      >
        {{ playing ? '❚❚' : '▶️' }}
      </button>
      <div
        class="progress"
        role="slider"
        tabindex="0"
        aria-label="播放进度"
        :aria-valuenow="Math.round(progress)"
        aria-valuemin="0"
        aria-valuemax="100"
        @click="seek($event)"
      >
        <div
          class="progress-bar"
          :style="{ width: progress + '%' }"
        />
      </div>
      <span class="time">{{ formattedCurrent }} / {{ formattedDuration }}</span>
      <button
        class="ctrl-btn"
        :aria-label="muted ? '取消静音' : '静音'"
        @click="toggleMute"
      >
        {{ muted ? '🔇' : '🔊' }}
      </button>
      <input
        v-model.number="volume"
        class="volume"
        type="range"
        min="0"
        max="1"
        step="0.05"
      >
      <button
        class="ctrl-btn"
        aria-label="全屏"
        @click="handleFullscreen"
      >
        ⛶
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { formatTime, calculateSeekPosition, toggleFullscreen } from './utils'
import './style.css'

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

    const formattedCurrent = computed(() => formatTime(current.value))
    const formattedDuration = computed(() => formatTime(duration.value))

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
      if (video.value) {
        video.value.currentTime = calculateSeekPosition(e, duration.value)
      }
    }
    
    const toggleMute = () => {
      muted.value = !muted.value
      if (video.value) video.value.muted = muted.value
    }
    
    const handleFullscreen = () => {
      toggleFullscreen(video.value?.parentElement)
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

    return { 
      video, playing, progress, togglePlay, updateProgress, seek, 
      volume, muted, toggleMute, handleFullscreen, 
      formattedCurrent, formattedDuration, onEnded 
    }
  }
}
</script>

<style src="./style.css"></style>

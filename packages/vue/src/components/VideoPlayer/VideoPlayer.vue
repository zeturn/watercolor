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
        :aria-label="playing ? messages.pauseVideo : messages.playVideo"
        @click="togglePlay"
      >
        <svg
          v-if="playing"
          class="video-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 6v12" />
          <path d="M16 6v12" />
        </svg>
        <svg
          v-else
          class="video-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5.5v13l10-6.5-10-6.5Z" />
        </svg>
      </button>
      <div
        class="progress"
        role="slider"
        tabindex="0"
        :aria-label="messages.videoProgress"
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
        :aria-label="muted ? messages.unmuteVideo : messages.muteVideo"
        @click="toggleMute"
      >
        <svg
          v-if="muted"
          class="video-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 10v4h4l5 4V6L8 10H4Z" />
          <path d="m17 10 4 4" />
          <path d="m21 10-4 4" />
        </svg>
        <svg
          v-else
          class="video-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 10v4h4l5 4V6L8 10H4Z" />
          <path d="M16 9.5a4 4 0 0 1 0 5" />
          <path d="M18.5 7a7.5 7.5 0 0 1 0 10" />
        </svg>
      </button>
      <input
        v-model.number="volume"
        class="volume"
        type="range"
        min="0"
        max="1"
        step="0.05"
        :aria-label="messages.volume"
      >
      <button
        class="ctrl-btn"
        :aria-label="messages.enterFullscreen"
        @click="handleFullscreen"
      >
        <svg
          class="video-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 4H4v4" />
          <path d="M16 4h4v4" />
          <path d="M20 16v4h-4" />
          <path d="M4 16v4h4" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useLocale } from '../../LocaleVUE'
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
    const { messages } = useLocale()
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
      formattedCurrent, formattedDuration, onEnded, messages
    }
  }
}
</script>

<style src="./style.css"></style>

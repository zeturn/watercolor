<script lang="ts">
  import { onMount } from 'svelte'
  import { useLocale } from '../../hooks'

  let {
    src,
    autoplay = false,
    loop = false,
  }: {
    src: string
    autoplay?: boolean
    loop?: boolean
  } = $props()

  const localeStore = useLocale()

  let video: HTMLVideoElement | null = $state(null)
  let playing = $state(false)
  let progress = $state(0)
  let volume = $state(0.7)
  let muted = $state(false)
  let duration = $state(0)
  let current = $state(0)

  function formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  const formattedCurrent = $derived(formatTime(current))
  const formattedDuration = $derived(formatTime(duration))

  function togglePlay() {
    if (!video) return
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  function updateProgress() {
    if (!video) return
    duration = video.duration || 0
    current = video.currentTime
    progress = duration ? (current / duration) * 100 : 0
    playing = !video.paused
  }

  function seek(e: MouseEvent) {
    if (!video || !duration) return
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    video.currentTime = ratio * duration
  }

  function toggleMute() {
    muted = !muted
    if (video) video.muted = muted
  }

  function handleFullscreen() {
    const wrapper = video?.parentElement
    if (!wrapper) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      wrapper.requestFullscreen?.()
    }
  }

  $effect(() => {
    if (video) video.volume = volume
  })

  onMount(() => {
    if (video) {
      video.volume = volume
      video.muted = muted
      video.loop = loop
      if (autoplay) video.play()
    }
  })
</script>

<div class="video-wrapper">
  <!-- Captions are supplied by consumers when their media requires a text track. -->
  <!-- svelte-ignore a11y_media_has_caption -->
  <video
    bind:this={video}
    class="video-el"
    {src}
    ontimeupdate={updateProgress}
    onended={() => (playing = false)}
  ></video>
  <div class="controls">
    <button
      class="ctrl-btn"
      aria-label={playing ? localeStore.messages.pauseVideo : localeStore.messages.playVideo}
      onclick={togglePlay}
    >
      {#if playing}
        <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6v12" /><path d="M16 6v12" /></svg>
      {:else}
        <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5-10-6.5Z" /></svg>
      {/if}
    </button>
    <div
      class="progress"
      role="slider"
      tabindex="0"
      aria-label={localeStore.messages.videoProgress}
      aria-valuenow={Math.round(progress)}
      aria-valuemin="0"
      aria-valuemax="100"
      onclick={seek}
      onkeydown={(e) => {
        if (!video || !duration) return
        if (e.key === 'ArrowRight') video.currentTime = Math.min(video.currentTime + 5, duration)
        if (e.key === 'ArrowLeft') video.currentTime = Math.max(video.currentTime - 5, 0)
      }}
    >
      <div class="progress-bar" style="width: {progress}%;"></div>
    </div>
    <span class="time">{formattedCurrent} / {formattedDuration}</span>
    <button
      class="ctrl-btn"
      aria-label={muted ? localeStore.messages.unmuteVideo : localeStore.messages.muteVideo}
      onclick={toggleMute}
    >
      {#if muted}
        <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z" /><path d="m17 10 4 4" /><path d="m21 10-4 4" /></svg>
      {:else}
        <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6L8 10H4Z" /><path d="M16 9.5a4 4 0 0 1 0 5" /><path d="M18.5 7a7.5 7.5 0 0 1 0 10" /></svg>
      {/if}
    </button>
    <input
      bind:value={volume}
      class="volume"
      type="range"
      min="0"
      max="1"
      step="0.05"
      aria-label={localeStore.messages.volume}
    />
    <button class="ctrl-btn" aria-label={localeStore.messages.enterFullscreen} onclick={handleFullscreen}>
      <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4H4v4" /><path d="M16 4h4v4" /><path d="M20 16v4h-4" /><path d="M4 16v4h4" /></svg>
    </button>
  </div>
</div>

<style>
  .video-wrapper {
    position: relative;
    display: inline-block;
    max-width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background: #000;
  }
  .video-el {
    display: block;
    width: 100%;
    max-width: 100%;
  }
  .controls {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: #fff;
  }
  .ctrl-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    padding: 4px;
    border: none;
    border-radius: 6px;
    background: none;
    color: inherit;
    cursor: pointer;
  }
  .ctrl-btn:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  .video-icon {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .progress {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  .progress-bar {
    height: 100%;
    border-radius: 3px;
    background: var(--wc-color-primary, #3b82f6);
  }
  .time {
    font-size: 0.75rem;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .volume {
    width: 64px;
    accent-color: var(--wc-color-primary, #3b82f6);
  }
</style>

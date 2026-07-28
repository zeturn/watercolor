import { createSignal, createEffect, createMemo, onMount, onCleanup, useId, Show, For, Index } from 'solid-js'

import { useLocale } from '../../LocaleSolid'
import { formatTime, calculateSeekPosition, toggleFullscreen } from './utils'
import './style.css'

const PlayIcon = () => (
  <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
  </svg>
)

const PauseIcon = () => (
  <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 6v12" />
    <path d="M16 6v12" />
  </svg>
)

const VolumeIcon = () => (
  <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10v4h4l5 4V6L8 10H4Z" />
    <path d="M16 9.5a4 4 0 0 1 0 5" />
    <path d="M18.5 7a7.5 7.5 0 0 1 0 10" />
  </svg>
)

const MutedIcon = () => (
  <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10v4h4l5 4V6L8 10H4Z" />
    <path d="m17 10 4 4" />
    <path d="m21 10-4 4" />
  </svg>
)

const FullscreenIcon = () => (
  <svg class="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 4H4v4" />
    <path d="M16 4h4v4" />
    <path d="M20 16v4h-4" />
    <path d="M4 16v4h4" />
  </svg>
)

const VideoPlayer = ({
  src,
  autoplay = false,
  loop = false,
  className = '',
  style = {},
  ...rest
}) => {
  const { messages } = useLocale()
  let videoRef = null
  const [playing, setPlaying] = createSignal(false)
  const [progress, setProgress] = createSignal(0)
  const [volume, setVolume] = createSignal(0.7)
  const [muted, setMuted] = createSignal(false)
  const [duration, setDuration] = createSignal(0)
  const [current, setCurrent] = createSignal(0)

  const formattedCurrent = formatTime(current)
  const formattedDuration = formatTime(duration)

  const togglePlay = () => {
    const v = videoRef
    if (!v) return
    if (v.paused) {
      v.play()
    } else {
      v.pause()
    }
  }

  const updateProgress = () => {
    const v = videoRef
    if (!v) return
    setDuration(v.duration || 0)
    setCurrent(v.currentTime)
    setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
    setPlaying(!v.paused)
  }

  const seek = (e) => {
    const v = videoRef
    if (v) {
      v.currentTime = calculateSeekPosition(e, duration)
    }
  }

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev
      if (videoRef) videoRef.muted = next
      return next
    })
  }

  const handleFullscreen = () => {
    toggleFullscreen(videoRef?.parentElement)
  }

  // sync volume
  createEffect(() => {
    if (videoRef) videoRef.volume = volume
  }, [volume])

  createEffect(() => {
    const v = videoRef
    if (!v) return
    v.muted = muted
    v.loop = loop
    if (autoplay) v.play()
  }, [autoplay, loop, muted])

  return (
    <div class={`video-wrapper ${className}`} style={style} {...rest}>
      <video
        ref={videoRef}
        class="video-el"
        src={src}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      />
      <div class="controls">
        <button class="ctrl-btn" aria-label={playing ? messages.pauseVideo : messages.playVideo} onClick={togglePlay}>{playing ? <PauseIcon /> : <PlayIcon />}</button>
        <div class="progress" role="slider" tabIndex={0} aria-label={messages.videoProgress} aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} onClick={seek}>
          <div class="progress-bar" style={{ width: `${progress()}%` }} />
        </div>
        <span class="time">{formattedCurrent} / {formattedDuration}</span>
        <button class="ctrl-btn" aria-label={muted ? messages.unmuteVideo : messages.muteVideo} onClick={toggleMute}>{muted ? <MutedIcon /> : <VolumeIcon />}</button>
        <input class="volume" type="range" min="0" max="1" step="0.05" value={volume()} aria-label={messages.volume} onChange={(e)=>setVolume(Number(e.target.value))} />
        <button class="ctrl-btn" aria-label={messages.enterFullscreen} onClick={handleFullscreen}><FullscreenIcon /></button>
      </div>
    </div>
  )
}

VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer

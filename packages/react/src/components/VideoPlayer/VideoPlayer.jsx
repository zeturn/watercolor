import React, { useRef, useState, useEffect } from 'react'
import { useLocale } from '../../LocaleReact'
import { formatTime, calculateSeekPosition, toggleFullscreen } from './utils'
import './style.css'

const PlayIcon = () => (
  <svg className="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10-6.5-10-6.5Z" />
  </svg>
)

const PauseIcon = () => (
  <svg className="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 6v12" />
    <path d="M16 6v12" />
  </svg>
)

const VolumeIcon = () => (
  <svg className="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10v4h4l5 4V6L8 10H4Z" />
    <path d="M16 9.5a4 4 0 0 1 0 5" />
    <path d="M18.5 7a7.5 7.5 0 0 1 0 10" />
  </svg>
)

const MutedIcon = () => (
  <svg className="video-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10v4h4l5 4V6L8 10H4Z" />
    <path d="m17 10 4 4" />
    <path d="m21 10-4 4" />
  </svg>
)

const FullscreenIcon = () => (
  <svg className="video-icon" viewBox="0 0 24 24" aria-hidden="true">
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
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const formattedCurrent = formatTime(current)
  const formattedDuration = formatTime(duration)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
    } else {
      v.pause()
    }
  }

  const updateProgress = () => {
    const v = videoRef.current
    if (!v) return
    setDuration(v.duration || 0)
    setCurrent(v.currentTime)
    setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0)
    setPlaying(!v.paused)
  }

  const seek = (e) => {
    const v = videoRef.current
    if (v) {
      v.currentTime = calculateSeekPosition(e, duration)
    }
  }

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev
      if (videoRef.current) videoRef.current.muted = next
      return next
    })
  }

  const handleFullscreen = () => {
    toggleFullscreen(videoRef.current?.parentElement)
  }

  // sync volume
  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume
  }, [volume])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    v.loop = loop
    if (autoplay) v.play()
  }, [autoplay, loop, muted])

  return (
    <div className={`video-wrapper ${className}`} style={style} {...rest}>
      <video
        ref={videoRef}
        className="video-el"
        src={src}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      />
      <div className="controls">
        <button className="ctrl-btn" aria-label={playing ? messages.pauseVideo : messages.playVideo} onClick={togglePlay}>{playing ? <PauseIcon /> : <PlayIcon />}</button>
        <div className="progress" role="slider" tabIndex={0} aria-label={messages.videoProgress} aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} onClick={seek}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="time">{formattedCurrent} / {formattedDuration}</span>
        <button className="ctrl-btn" aria-label={muted ? messages.unmuteVideo : messages.muteVideo} onClick={toggleMute}>{muted ? <MutedIcon /> : <VolumeIcon />}</button>
        <input className="volume" type="range" min="0" max="1" step="0.05" value={volume} aria-label={messages.volume} onChange={(e)=>setVolume(Number(e.target.value))} />
        <button className="ctrl-btn" aria-label={messages.enterFullscreen} onClick={handleFullscreen}><FullscreenIcon /></button>
      </div>
    </div>
  )
}

VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer

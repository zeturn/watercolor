import React, { useRef, useState, useEffect, useCallback } from 'react'

const VideoPlayer = ({
  src,
  autoplay = false,
  loop = false,
  className = '',
  style = {},
  ...rest
}) => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [muted, setMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  const formattedTime = useCallback((s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }, [])

  const formattedCurrent = formattedTime(current)
  const formattedDuration = formattedTime(duration)

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
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const v = videoRef.current
    if (v) v.currentTime = percent * duration
  }

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev
      if (videoRef.current) videoRef.current.muted = next
      return next
    })
  }

  const toggleFullscreen = () => {
    const el = videoRef.current?.parentElement
    if (!el) return
    if (!document.fullscreenElement) {
      el.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
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
        <button className="ctrl-btn" onClick={togglePlay}>{playing ? '❚❚' : '▶️'}</button>
        <div className="progress" onClick={seek}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="time">{formattedCurrent} / {formattedDuration}</span>
        <button className="ctrl-btn" onClick={toggleMute}>{muted ? '🔇' : '🔊'}</button>
        <input className="volume" type="range" min="0" max="1" step="0.05" value={volume} onChange={(e)=>setVolume(Number(e.target.value))} />
        <button className="ctrl-btn" onClick={toggleFullscreen}>⛶</button>
      </div>
      <style>{`
        .video-wrapper { width: 100%; max-width: 640px; margin: 0 auto; }
        .video-el { width: 100%; border-radius: 8px; background: black; }
        .controls { display: flex; align-items: center; gap: 6px; margin-top: 4px; font-size: 0.875rem; color: var(--wc-neutral-700); }
        .ctrl-btn { background: none; border: none; cursor: pointer; font-size: 1rem; }
        .progress { flex: 1 1 auto; height: 6px; background: var(--wc-neutral-300); border-radius: 3px; cursor: pointer; position: relative; }
        .progress-bar { height: 100%; background: var(--wc-primary-500); border-radius: 3px; }
        .volume { width: 80px; }
        .time { min-width: 60px; text-align: center; }
        .dark .controls { color: var(--wc-neutral-200); }
        .dark .progress { background: var(--wc-neutral-600); }
        .dark .progress-bar { background: var(--wc-primary-400); }
      `}</style>
    </div>
  )
}

VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer
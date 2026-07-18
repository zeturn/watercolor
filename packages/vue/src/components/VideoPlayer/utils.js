// VideoPlayer 工具函数

// 格式化时间显示
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0')
  return `${minutes}:${secs}`
}

// 计算点击进度条的位置
export function calculateSeekPosition(event, duration) {
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = (event.clientX - rect.left) / rect.width
  return percent * duration
}

// 请求全屏/退出全屏
export function toggleFullscreen(element) {
  if (!element) return
  
  if (!document.fullscreenElement) {
    element.requestFullscreen?.()
  } else {
    document.exitFullscreen?.()
  }
}
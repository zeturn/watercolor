// Watermark 默认属性
export const defaultProps = {
  content: '',
  cross: false,
  debug: false,
  fontSize: 14,
  fontFamily: 'sans-serif',
  fontStyle: 'normal',
  fontVariant: '',
  fontWeight: 400,
  fontColor: 'var(--wc-neutral-500, rgba(128,128,128,.3))',
  fullscreen: false,
  globalRotate: 0,
  lineHeight: 14,
  height: 64,
  width: 200,
  image: undefined,
  imageHeight: undefined,
  imageWidth: undefined,
  imageOpacity: 1,
  rotate: 0,
  selectable: true,
  textAlign: 'center',
  xGap: 48,
  yGap: 48,
  xOffset: 0,
  yOffset: 0,
  zIndex: 10
}

// 解析CSS变量（用于Vue版本）
export function resolveColor(color) {
  if (typeof color === 'string' && color.startsWith('var(')) {
    const match = color.match(/--[^, )]+/)
    if (match) {
      const cssValue = getComputedStyle(document.documentElement).getPropertyValue(match[0]).trim()
      return cssValue || color
    }
  }
  return color
}

// 创建水印画布URL
export function createCanvasUrl(props) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  let tileWidth = props.width
  let tileHeight = props.height

  if (!props.image && props.content) {
    ctx.font = `${props.fontStyle} ${props.fontVariant} ${props.fontWeight} ${props.fontSize}px ${props.fontFamily}`

    const lines = props.content.split(/\n/)
    const maxLineWidth = Math.max(...lines.map((l) => ctx.measureText(l).width))

    const textBlockHeight = props.lineHeight * lines.length

    tileWidth = Math.max(tileWidth, Math.ceil(maxLineWidth))
    tileHeight = Math.max(tileHeight, Math.ceil(textBlockHeight))
  }

  tileWidth += props.xGap
  tileHeight += props.yGap

  canvas.width = tileWidth
  canvas.height = tileHeight

  if (props.image) {
    return new Promise((resolve) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        canvas.width = (props.imageWidth || img.width) + props.xGap
        canvas.height = (props.imageHeight || img.height) + props.yGap
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = props.imageOpacity
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate((props.rotate * Math.PI) / 180)
        const w = props.imageWidth || img.width
        const h = props.imageHeight || img.height
        ctx.drawImage(img, -w / 2, -h / 2, w, h)
        resolve(canvas.toDataURL())
      }
      img.src = props.image
    })
  }

  // 绘制文本
  const lines = (props.content || '').split(/\n/)
  ctx.textAlign = props.textAlign || 'center'
  ctx.textBaseline = 'middle'
  
  // 处理颜色（可能是CSS变量）
  const fillColor = props.fontColor.startsWith('var(') ? resolveColor(props.fontColor) : props.fontColor
  ctx.fillStyle = fillColor
  
  ctx.font = `${props.fontStyle} ${props.fontVariant} ${props.fontWeight} ${props.fontSize}px ${props.fontFamily}`

  ctx.translate(tileWidth / 2, tileHeight / 2)
  ctx.rotate((props.rotate * Math.PI) / 180)

  const startY = -(lines.length - 1) * props.lineHeight / 2
  lines.forEach((line, idx) => {
    const y = startY + idx * props.lineHeight
    ctx.fillText(line, 0, y)
  })

  return Promise.resolve(canvas.toDataURL())
}

// 创建水印样式对象
export function createWatermarkStyle(props, url) {
  const style = {
    position: props.fullscreen ? 'fixed' : 'absolute',
    top: 0,
    left: 0,
    width: props.fullscreen ? '100vw' : '100%',
    height: props.fullscreen ? '100vh' : '100%',
    pointerEvents: props.selectable ? 'none' : 'auto',
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'repeat',
    backgroundPosition: `${props.xOffset}px ${props.yOffset}px`,
    zIndex: props.zIndex,
    transform: `rotate(${props.globalRotate}deg)`,
    mixBlendMode: 'multiply'
  }
  
  if (props.debug) {
    style.outline = '1px dashed red'
  }
  
  if (!props.cross) {
    style.overflow = 'hidden'
  }
  
  return style
}
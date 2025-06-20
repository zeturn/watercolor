import React, { useEffect, useMemo, useRef, useState } from 'react'

const defaultProps = {
  content: '',
  cross: false,
  debug: false,
  fontSize: 14,
  fontFamily: 'sans-serif',
  fontStyle: 'normal',
  fontVariant: '',
  fontWeight: 400,
  fontColor: 'rgba(128,128,128,.3)',
  fullscreen: false,
  globalRotate: 0,
  lineHeight: 14,
  height: 32,
  width: 32,
  image: undefined,
  imageHeight: undefined,
  imageWidth: undefined,
  imageOpacity: 1,
  rotate: 0,
  selectable: true,
  textAlign: 'left',
  xGap: 0,
  yGap: 0,
  xOffset: 0,
  yOffset: 0,
  zIndex: 10
}

const createCanvasUrl = (props) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const tileWidth = props.width + props.xGap
  const tileHeight = props.height + props.yGap
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

  // draw text
  const lines = (props.content || '').split(/\n/)
  ctx.textAlign = props.textAlign
  ctx.textBaseline = 'middle'
  ctx.fillStyle = props.fontColor
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

const Watermark = (rawProps) => {
  const props = { ...defaultProps, ...rawProps }
  const [url, setUrl] = useState('')
  const show = !!props.content || !!props.image
  const mountedRef = useRef(false)

  useEffect(() => {
    if (!show) return
    let active = true
    createCanvasUrl(props).then((u) => {
      if (active) setUrl(u)
    })
    return () => { active = false }
  }, [JSON.stringify(props)])

  const style = useMemo(() => {
    if (!show) return {}
    const s = {
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
    if (props.debug) s.outline = '1px dashed red'
    if (!props.cross) s.overflow = 'hidden'
    return s
  }, [url, show])

  if (!show) return props.children || null

  return (
    <>
      <div className="wc-watermark" style={style} />
      {props.children}
    </>
  )
}

Watermark.displayName = 'Watermark'
export default Watermark
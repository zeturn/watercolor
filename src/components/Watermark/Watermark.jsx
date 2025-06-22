import React, { useEffect, useMemo, useRef, useState } from 'react'
import { defaultProps, createCanvasUrl, createWatermarkStyle } from './utils'
import './style.css'

const Watermark = (rawProps) => {
  const props = { ...defaultProps, ...rawProps }
  const [url, setUrl] = useState('')
  const show = !!props.content || !!props.image

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
    return createWatermarkStyle(props, url)
  }, [url, show, props])

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
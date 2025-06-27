import React, { useEffect, useMemo, useRef, useState } from 'react'
import { defaultProps, createCanvasUrl, createWatermarkStyle } from './utils'
import './style.css'

const Watermark = (rawProps) => {
  const props = { ...defaultProps, ...rawProps }
  const [url, setUrl] = useState('')
  const show = !!props.content || !!props.image

  // 仅追踪可序列化的配置项，避免 React children 等产生循环引用导致 JSON.stringify 报错
  const propsSignature = useMemo(() => {
    // 排除 children 以及可能的循环引用
    const {
      children: _children, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...serializable
    } = props
    return JSON.stringify(serializable)
  }, [props])

  useEffect(() => {
    if (!show) return
    let active = true
    createCanvasUrl(props).then((u) => {
      if (active) setUrl(u)
    })
    return () => {
      active = false
    }
  }, [propsSignature, show])

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
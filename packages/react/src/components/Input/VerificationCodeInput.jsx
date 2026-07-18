import React, { useRef, useEffect } from 'react'
import { useLocale } from '../../LocaleReact'
import './style.css'

/**
 * VerificationCodeInput 组件
 * 用于输入定长验证码 / 短信验证码 / 授权码等。
 *
 * Props
 * - length        验证码长度，默认 6
 * - value         受控值字符串
 * - onChange      输入变化时触发 (value: string) => void
 * - onComplete    输入达到 length 时触发 (value: string) => void
 * - autoFocus     是否在挂载时自动聚焦第一个输入框
 * - className     额外的自定义类名
 */
const VerificationCodeInput = ({
  length = 6,
  value = '',
  onChange,
  onComplete,
  autoFocus = false,
  className = '',
  ...rest
}) => {
  const { messages } = useLocale()
  // 保存每个 input 的引用
  const inputsRef = useRef([])

  // 初始化/更新外部 value
  useEffect(() => {
    // 外部传入的 value 会填充输入框
    if (typeof value === 'string') {
      value.split('').forEach((ch, idx) => {
        if (inputsRef.current[idx]) inputsRef.current[idx].value = ch
      })
    }
  }, [value])

  // 自动聚焦第一个框
  useEffect(() => {
    if (autoFocus && inputsRef.current[0]) {
      inputsRef.current[0].focus()
    }
  }, [autoFocus])

  /**
   * 聚焦指定框
   */
  const focusBox = (idx) => {
    const el = inputsRef.current[idx]
    if (el) el.focus()
  }

  /**
   * 获取当前输入值
   */
  const getCurrentValue = () =>
    inputsRef.current.map((el) => (el ? el.value : '')).join('')

  /**
   * 处理输入
   */
  const handleInput = (index) => (e) => {
    const val = e.target.value.replace(/[^0-9a-zA-Z]/g, '')
    // 转大写再赋值（防止用户粘贴小写字母时光标错位）
    e.target.value = val.toUpperCase()

    const current = getCurrentValue()
    onChange?.(current)

    if (val && index < length - 1) {
      focusBox(index + 1)
    }

    if (current.length === length) {
      onComplete?.(current)
    }
  }

  /**
   * 处理退格键
   */
  const handleKeyDown = (index) => (e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      e.preventDefault()
      focusBox(index - 1)
    }
  }

  /**
   * 选中内容，方便用户直接覆盖
   */
  const handleFocus = (e) => {
    e.target.select()
  }

  /**
   * 处理粘贴
   */
  const handlePaste = (e) => {
    e.preventDefault()
    const text = (e.clipboardData?.getData('text') || '')
      .trim()
      .slice(0, length)

    if (!text) return

    text.split('').forEach((ch, i) => {
      if (inputsRef.current[i]) inputsRef.current[i].value = ch
    })

    onChange?.(text)
    if (text.length === length) onComplete?.(text)
  }

  return (
    <div
      className={['wc-input-code', className].filter(Boolean).join(' ')}
      onPaste={handlePaste}
      {...rest}
    >
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          id={`wc-input-code-${idx}`}
          name={`wc-input-code-${idx}`}
          className="wc-input-code__box"
          type="text"
          maxLength={1}
          autoComplete="one-time-code"
          inputMode="numeric"
          aria-label={messages.verificationCodeDigit(idx + 1)}
          onInput={handleInput(idx)}
          onKeyDown={handleKeyDown(idx)}
          onFocus={handleFocus}
        />
      ))}
    </div>
  )
}

VerificationCodeInput.displayName = 'VerificationCodeInput'

export default VerificationCodeInput; 

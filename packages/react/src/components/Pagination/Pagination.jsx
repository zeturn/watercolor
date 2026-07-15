import React, { useState, useMemo, useEffect, useCallback } from 'react'
import './style.css'

/**
 * Pagination component – React version
 * Props:
 *   value        当前页码（受控）
 *   onChange     (page:number)=>void  页码变化回调
 *   total        数据总数
 *   pageSize     每页条数
 *   siblingCount 同级页码数量
 *   boundaryCount 边界页码数量
 *   size         尺寸
 */
export default function Pagination({
  value = 1,
  onChange,
  total,
  pageSize = 10,
  siblingCount = 1,
  boundaryCount = 1,
  size = 'md', // sm | md | lg | xl
  className = '',
  ...rest
}) {
  const [currentPage, setCurrentPage] = useState(value)

  // 同步外部 value
  useEffect(() => {
    setCurrentPage(value)
  }, [value])

  const pageCount = useMemo(() => Math.max(1, Math.ceil(total / pageSize)), [total, pageSize])

  const range = (start, end) => {
    const arr = []
    for (let i = start; i <= end; i++) arr.push(i)
    return arr
  }

  const pageItems = useMemo(() => {
    const totalNumbers = siblingCount * 2 + 3 + boundaryCount * 2
    if (pageCount <= totalNumbers) {
      return range(1, pageCount).map((n) => ({ key: n, num: n }))
    }

    const leftSibling = Math.max(currentPage - siblingCount, boundaryCount + 2)
    const rightSibling = Math.min(currentPage + siblingCount, pageCount - boundaryCount - 1)

    const showLeftEllipsis = leftSibling > boundaryCount + 2
    const showRightEllipsis = rightSibling < pageCount - boundaryCount - 1

    const items = []

    for (let i = 1; i <= boundaryCount; i++) items.push({ key: 'b' + i, num: i })
    if (showLeftEllipsis) items.push({ key: 'l-ellipsis', ellipsis: true })

    for (let i = leftSibling; i <= rightSibling; i++) items.push({ key: 'm' + i, num: i })
    if (showRightEllipsis) items.push({ key: 'r-ellipsis', ellipsis: true })

    for (let i = pageCount - boundaryCount + 1; i <= pageCount; i++) items.push({ key: 'e' + i, num: i })

    return items
  }, [currentPage, pageCount, siblingCount, boundaryCount])

  const select = useCallback(
    (page) => {
      if (page < 1 || page > pageCount || page === currentPage) return
      setCurrentPage(page)
      onChange?.(page)
    },
    [currentPage, pageCount, onChange]
  )

  if (pageCount <= 1) return null

  // 组装根元素类
  const rootClasses = [
    'pagination',
    'wc-pagination',
    size !== 'md' ? `wc-pagination--${size}` : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <nav className={rootClasses} aria-label="分页导航" {...rest}>
      <button
        className="page-btn wc-page-btn wc-page-btn--prev wc-page-btn--nav"
        disabled={currentPage === 1}
        onClick={() => select(currentPage - 1)}
        aria-label="上一页"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {pageItems.map((page) =>
        page.ellipsis ? (
          <span key={page.key} className="page-ellipsis">
            …
          </span>
        ) : (
          <button
            key={page.key}
            className={`page-btn wc-page-btn${page.num === currentPage ? ' active wc-page-btn--active' : ''}`}
            onClick={() => select(page.num)}
            aria-current={page.num === currentPage ? 'page' : undefined}
            aria-label={`第 ${page.num} 页`}
          >
            {page.num}
          </button>
        )
      )}

      <button
        className="page-btn wc-page-btn wc-page-btn--next wc-page-btn--nav"
        disabled={currentPage === pageCount}
        onClick={() => select(currentPage + 1)}
        aria-label="下一页"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </nav>
  )
}

// 样式通过同名 Vue 组件的 scoped style 复用

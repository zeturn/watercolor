import React, { createContext } from 'react'

/**
 * ListContext 用于向 ListItem 及其子组件传递密集模式 (dense) 设置
 */
export const ListContext = createContext({ dense: false })

/**
 * React 版本的 List 组件
 *
 * Props:
 *  - dense            是否使用紧凑模式，影响内部 padding 与字体大小
 *  - disablePadding   是否禁用垂直内边距
 *  - subheader        可选子标题（暂未实现渲染，保持 API 对齐）
 */
const List = ({
  children,
  dense = false,
  disablePadding = false,
  subheader = '',
  className = '',
  ...rest
}) => {
  const listClasses = [
    'w-full',
    !disablePadding && 'py-2',
    className
  ].filter(Boolean).join(' ')

  return (
    <ListContext.Provider value={{ dense }}>
      <ul role="list" className={listClasses} {...rest}>
        {children}
      </ul>
    </ListContext.Provider>
  )
}

export default List
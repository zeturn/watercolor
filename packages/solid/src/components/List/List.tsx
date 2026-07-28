
import './style.css'
import { getListClasses } from './utils.js'

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
  nav = false,
  subheader = '',
  className = '',
  ...rest
}) => {
  // 使用工具函数根据 props 生成原生 CSS 类，避免直接使用 Tailwind 类
  const listClasses = getListClasses({ dense, disablePadding, className }).concat(nav ? 'list--nav' : []).join(' ')

  return (
    <ListContext.Provider value={{ dense }}>
      <div role={nav ? 'navigation' : 'list'} class={listClasses} {...rest}>
        {subheader && <div class="list-subheader">{subheader}</div>}
        {children}
      </div>
    </ListContext.Provider>
  )
}

export default List

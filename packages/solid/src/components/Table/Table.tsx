import { createContext, useContext } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import './style.css'

const TableContext = createContext({ size: 'md', dense: false, hover: false, striped: false })

export const Table = ({
  size = 'md',
  stickyHeader = false,
  dense = false,
  hover = false,
  striped = false,
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      class={`wc-table-container${stickyHeader ? ' wc-table-container--sticky' : ''} ${className}`}
      {...rest}
    >
      <table
        class={`wc-table wc-table--${size}${hover ? ' wc-table--hover' : ''}${striped ? ' wc-table--striped' : ''}${dense ? ' wc-table--dense' : ''}`}
      >
        <TableContext.Provider value={{ size, dense, hover, striped, stickyHeader }}>
          {children}
        </TableContext.Provider>
      </table>
    </div>
  )
}

Table.displayName = 'Table'

export const TableHead = ({ children, className = '', ...rest }) => {
  const { stickyHeader } = useContext(TableContext)
  return (
    <thead class={`wc-table-head${stickyHeader ? ' wc-table-head--sticky' : ''} ${className}`} {...rest}>
      {children}
    </thead>
  )
}
TableHead.displayName = 'TableHead'

export const TableBody = ({ children, className = '', ...rest }) => (
  <tbody class={`wc-table-body ${className}`} {...rest}>{children}</tbody>
)
TableBody.displayName = 'TableBody'

export const TableRow = ({
  hover: hoverProp,
  selected = false,
  clickable = false,
  children,
  className = '',
  onClick,
  ...rest
}) => {
  const ctx = useContext(TableContext)
  const shouldHover = hoverProp !== undefined ? hoverProp : ctx.hover
  const classes = [
    'wc-table-row',
    shouldHover || clickable ? 'wc-table-row--hover' : '',
    selected ? 'wc-table-row--selected' : '',
    clickable ? 'wc-table-row--clickable' : '',
    className
  ].filter(Boolean).join(' ')
  return (
    <tr
      class={classes}
      onClick={clickable ? onClick : undefined}
      {...rest}
    >
      {children}
    </tr>
  )
}
TableRow.displayName = 'TableRow'

export const TableCell = ({
  component: Component = 'td',
  align = 'inherit',
  padding = 'normal',
  size: sizeProp,
  sortDirection = false,
  variant = 'body',
  scope,
  children,
  className = '',
  ...rest
}) => {
  const ctx = useContext(TableContext)
  const cellSize = sizeProp || (ctx.dense ? 'small' : 'medium')
  const classes = [
    'wc-table-cell',
    `wc-table-cell--${variant}`,
    `wc-table-cell--${cellSize}`,
    `wc-table-cell--padding-${padding}`,
    align !== 'inherit' ? `wc-table-cell--align-${align}` : '',
    sortDirection ? 'wc-table-cell--sortable' : '',
    sortDirection ? `wc-table-cell--sort-${sortDirection}` : '',
    className
  ].filter(Boolean).join(' ')

  return (
    <Dynamic component={Component} class={classes} scope={Component === 'th' || variant === 'head' ? scope : undefined} {...rest}>
      {children}
    </Dynamic>
  )
}
TableCell.displayName = 'TableCell'

// shortcut export
const TableExport = Object.assign(Table, { Head: TableHead, Body: TableBody, Row: TableRow, Cell: TableCell })
export default TableExport

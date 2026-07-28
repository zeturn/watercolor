import { Link } from 'react-router-dom'
import { useLangPath } from '../i18n'

// 与 <Link> 用法一致，自动为绝对路径 to 加上当前语言前缀。
// 形如 http(s):// 或 # 的外部链接会原样透传。
export default function LangLink({ to, ...rest }) {
  const { localize } = useLangPath()
  const href = typeof to === 'string' ? localize(to) : to
  return <Link to={href} {...rest} />
}

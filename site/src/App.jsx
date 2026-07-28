import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Components from './pages/Components'
import ComponentDetail from './pages/ComponentDetail'
import Skill from './pages/Skill'
import { useI18n, detectInitialLangPath } from './i18n'
import { isLangPath, PATH_TO_LANG, toLangPath, stripLang } from './i18n/langMap'

// 访问无语言前缀的地址（如 `/`、`/docs/intro`）时，
// 依据浏览器/存储偏好重定向到对应语言前缀路径，保留原 path。
function RootRedirect() {
  const location = useLocation()
  const pathname = location.pathname
  // 防御：若路径已带合法语言前缀（或为空），不再重定向，避免重复叠加前缀导致死循环。
  const seg = pathname.split('/')[1] || ''
  if (isLangPath(seg)) {
    return <Navigate to={`${pathname}${location.search}`} replace />
  }
  const target = `/${detectInitialLangPath()}${pathname === '/' ? '' : pathname}${location.search}`
  return <Navigate to={target} replace />
}

// `/docs` 无具体小节时，重定向到默认小节 intro。
// 注意：必须基于语言参数拼绝对路径 `/${lang}/docs/intro`。
// 若写成相对 <Navigate to="docs/intro">，在 Splat 路由 /:lang/* 内部的嵌套
// <Routes> 中会被相对解析成 /zh/docs/docs/intro，从而落入 "*" 被重定向回首页。
function DocsRedirect() {
  const { lang } = useParams()
  return <Navigate to={`/${lang}/docs/intro`} replace />
}

// `/:lang` 路由布局：校验前缀、同步 i18n 语言、渲染 Navbar + 子路由。
function LangLayout() {
  const { lang: pathLang } = useParams()
  const location = useLocation()
  const { setLang, lang } = useI18n()

  const valid = isLangPath(pathLang)

  useEffect(() => {
    if (valid) {
      const next = PATH_TO_LANG[pathLang]
      if (next !== lang) setLang(next)
    }
  }, [valid, pathLang, lang, setLang])

  if (!valid) {
    const rest = stripLang(location.pathname)
    return <Navigate to={`/${toLangPath(PATH_TO_LANG[pathLang] || 'zh-CN')}${rest}${location.search}`} replace />
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="docs" element={<DocsRedirect />} />
        <Route path="docs/:sectionId" element={<Docs />} />
        <Route path="components" element={<Components />} />
        <Route path="components/:id" element={<ComponentDetail />} />
        <Route path="skill" element={<Skill />} />
        {/* 未知子路径 → 回到该语言首页 */}
        <Route path="*" element={<Navigate to={`/${pathLang}`} replace />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/:lang/*" element={<LangLayout />} />
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Router>
  )
}

export default App

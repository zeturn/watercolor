import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Markdown from '../components/Markdown'
import { Button, Badge, List, ListItem, ListItemText } from '@zeturn/watercolor-react'
import { getDocSections, getAllDocSections, getDocById, getAdjacentDocs } from '../data/docs'
import { useI18n } from '../i18n'

export default function Docs() {
  const { t, lang } = useI18n()
  const { sectionId } = useParams()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sections = getDocSections(lang)
  const all = getAllDocSections(lang)
  const activeId = sectionId || all[0]?.id
  const doc = getDocById(activeId, lang)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeId])

  if (!doc) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="text-6xl text-base-content/30">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <h1 className="text-2xl font-bold">{t('docs.notFound')}</h1>
        <Link to="/docs"><Button size="sm" variant="primary">{t('docs.backHome')}</Button></Link>
      </div>
    )
  }

  const { prev, next } = getAdjacentDocs(activeId, lang)

  return (
    <div className="flex min-h-[calc(100vh-65px)]">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-[65px] left-0 h-[calc(100vh-65px)] w-72 bg-base-100 border-r border-base-300 overflow-y-auto z-50 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="font-semibold text-lg">Docs</span>
            <button onClick={() => setSidebarOpen(false)} className="inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-base-200 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <nav className="space-y-6">
            {sections.map((group) => (
              <div key={group.group}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2 px-3">{group.group}</h3>
                <List disablePadding>
                  {group.items.map((item) => (
                    <ListItem
                      key={item.id}
                      button
                      selected={activeId === item.id}
                      onClick={() => { navigate(`/docs/${item.id}`); setSidebarOpen(false) }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="lg:hidden sticky top-[65px] z-30 bg-base-100/90 backdrop-blur border-b border-base-300 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} className="inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-base-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <span className="font-medium">{doc.label}</span>
        </div>

        <article className="max-w-3xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
          <ScrollReveal>
            <div className="mb-2">
              <Badge size="sm">{doc.group}</Badge>
            </div>
            <Markdown key={lang} content={doc.content} />

            {/* Prev / Next navigation */}
            <div className="mt-16 pt-8 border-t border-base-300 flex justify-between items-center">
              {prev ? (
                <Link to={`/docs/${prev.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                  {prev.label}
                </Button></Link>
              ) : <span />}
              {next ? (
                <Link to={`/docs/${next.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
                  {next.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </Button></Link>
              ) : <span />}
            </div>
          </ScrollReveal>
        </article>
      </main>
    </div>
  )
}

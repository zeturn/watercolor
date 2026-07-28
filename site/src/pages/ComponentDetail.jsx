import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ComponentPreview from '../components/ComponentPreview'
import { Menu, Breadcrumb, Badge, Card, Table, Button, List, ListItem, ListItemText } from '@zeturn/watercolor-react'
import { getComponentById, getAdjacentComponents, allComponents } from '../data/components'
import { useI18n, useComponentText, useLangPath } from '../i18n'
import LangLink from '../components/LangLink'
import { useDocumentMeta } from '../seo'

export default function ComponentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const { localize } = useLangPath()
  const { desc, propDesc } = useComponentText()
  const component = getComponentById(id)

  useDocumentMeta({
    title: component ? component.name : t('compDetail.notFoundTitle'),
    description: component ? desc(component) : t('compDetail.notFoundDesc', { id }),
    path: `/components/${id}`,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!component) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">🔍</div>
        <h1 className="text-2xl font-bold">{t('compDetail.notFoundTitle')}</h1>
        <p className="text-base-content/50">{t('compDetail.notFoundDesc', { id })}</p>
        <LangLink to="/components"><Button size="sm" variant="primary">{t('compDetail.backToLib')}</Button></LangLink>
      </div>
    )
  }

  const { prev, next } = getAdjacentComponents(id)

  return (
    <main className="min-h-screen pb-16">
      {/* Breadcrumb header */}
      <div className="bg-base-200/30 border-b border-base-300">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: t('compDetail.breadcrumbHome'), href: localize('/') },
              { label: t('compDetail.breadcrumbLib'), href: localize('/components') },
              { label: component.category, href: localize(`/components?category=${component.category}`) },
              { label: component.name, current: true },
            ]}
            onItemClick={(item) => {
              if (item.href) navigate(item.href)
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Main content */}
          <div className="min-w-0">
            {/* Title */}
            <ScrollReveal>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-4xl font-bold">{component.name}</h1>
                <Badge variant="default" size="sm">{component.category}</Badge>
                <Badge variant="primary" size="sm">v1.1</Badge>
              </div>
              <p className="text-lg text-base-content/60 mb-6">{desc(component)}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {component.tags.map((tag) => (
                  <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                ))}
              </div>
            </ScrollReveal>

            {/* Live Preview */}
            <ScrollReveal>
              <div id="preview" className="mb-8 scroll-mt-24">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-primary rounded-full"></span>
                    {t('compDetail.livePreview')}
                  </h2>
                  <span className="text-xs text-base-content/40">{t('compDetail.interactiveDemo')}</span>
                </div>
                <div className="bg-base-200/40 rounded-2xl p-8 min-h-[200px] flex items-center justify-center border border-base-200">
                  <ComponentPreview componentId={component.id} />
                </div>
              </div>
            </ScrollReveal>

            {/* Installation */}
            <ScrollReveal>
              <div id="usage" className="mb-8 scroll-mt-24">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-5 bg-secondary rounded-full"></span>
                  {t('compDetail.installUsage')}
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">{t('compDetail.reactImport')}</p>
                    <pre className="code-block"><code>{`import { ${component.name} } from '${component.importPath}'

// or import on demand
import ${component.name} from '${component.importPath}'`}</code></pre>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">{t('compDetail.vueImport')}</p>
                    <pre className="code-block"><code>{`import { ${component.name} } from '@zeturn/watercolor-vue'`}</code></pre>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">{t('compDetail.basicExample')}</p>
                    <pre className="code-block"><code>{`<${component.name}${component.props[0] ? ` ${component.props[0].name}={${component.props[0].default}}` : ''} />`}</code></pre>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Props API */}
            <ScrollReveal>
              <div id="props" className="mb-8 scroll-mt-24">
                <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-5 bg-accent rounded-full"></span>
                  Props API
                </h2>
                <div className="overflow-x-auto rounded-xl border border-base-200">
                  <Table size="md" hover>
                    <Table.Head>
                      <Table.Row>
                        <Table.Cell component="th">{t('compDetail.colProp')}</Table.Cell>
                        <Table.Cell component="th">{t('compDetail.colType')}</Table.Cell>
                        <Table.Cell component="th">{t('compDetail.colDefault')}</Table.Cell>
                        <Table.Cell component="th">{t('compDetail.colDesc')}</Table.Cell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      {component.props.map((p) => (
                        <Table.Row key={p.name}>
                          <Table.Cell><code className="text-primary font-mono text-sm">{p.name}</code></Table.Cell>
                          <Table.Cell><code className="text-sm text-base-content/70 font-mono">{p.type}</code></Table.Cell>
                          <Table.Cell><code className="text-sm text-secondary font-mono">{p.default}</code></Table.Cell>
                          <Table.Cell className="text-sm text-base-content/60">{propDesc(component, p)}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right sidebar - component nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-[80px] space-y-4">
              {/* On this page */}
              <Card variant="outlined" className="p-4">
                <Menu
                  triggerText={t('compDetail.onThisPage')}
                  size="sm"
                  placement="bottom-start"
                  items={[
                    { key: 'preview', label: t('compDetail.livePreview') },
                    { key: 'usage', label: t('compDetail.installUsage') },
                    { key: 'props', label: 'Props API' },
                  ]}
                  onSelect={(item) => {
                    const el = document.getElementById(item.key)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                />
              </Card>

              {/* Category components */}
              <Card variant="outlined" className="p-4">
                <h3 className="font-semibold mb-3 text-sm">{t('compDetail.categoryHeader', { category: component.category })}</h3>
                <List disablePadding>
                  {allComponents
                    .filter((c) => c.category === component.category)
                    .map((c) => (
                      <ListItem
                        key={c.id}
                        button
                        selected={c.id === id}
                        onClick={() => navigate(localize(`/components/${c.id}`))}
                      >
                        <ListItemText primary={c.name} />
                      </ListItem>
                    ))}
                </List>
              </Card>
            </div>
          </aside>
        </div>

        {/* Prev / Next navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-base-300">
          {prev ? (
            <LangLink to={`/components/${prev.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              {prev.name}
            </Button></LangLink>
          ) : <span />}
          {next ? (
            <LangLink to={`/components/${next.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
              {next.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Button></LangLink>
          ) : <span />}
        </div>
      </div>
    </main>
  )
}

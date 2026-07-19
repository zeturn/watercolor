import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ComponentPreview from '../components/ComponentPreview'
import { Menu, Breadcrumb, Badge, Card, Table, Button, List, ListItem, ListItemText } from '@zeturn/watercolor-react'
import { getComponentById, getAdjacentComponents, allComponents } from '../data/components'

export default function ComponentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const component = getComponentById(id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!component) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">🔍</div>
        <h1 className="text-2xl font-bold">组件未找到</h1>
        <p className="text-base-content/50">未找到 ID 为 "{id}" 的组件</p>
        <Link to="/components"><Button size="sm" variant="primary">返回组件库</Button></Link>
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
              { label: '首页', href: '/' },
              { label: '组件库', href: '/components' },
              { label: component.category, href: `/components?category=${component.category}` },
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
              <p className="text-lg text-base-content/60 mb-6">{component.description}</p>

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
                    实时预览
                  </h2>
                  <span className="text-xs text-base-content/40">可交互 Demo</span>
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
                  安装与使用
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">React 导入：</p>
                    <pre className="code-block"><code>{`import { ${component.name} } from '${component.importPath}'

// 或按需导入
import ${component.name} from '${component.importPath}'`}</code></pre>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">Vue 导入：</p>
                    <pre className="code-block"><code>{`import { ${component.name} } from '@zeturn/watercolor-vue'`}</code></pre>
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60 mb-2">基础示例：</p>
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
                        <Table.Cell component="th">属性</Table.Cell>
                        <Table.Cell component="th">类型</Table.Cell>
                        <Table.Cell component="th">默认值</Table.Cell>
                        <Table.Cell component="th">说明</Table.Cell>
                      </Table.Row>
                    </Table.Head>
                    <Table.Body>
                      {component.props.map((p) => (
                        <Table.Row key={p.name}>
                          <Table.Cell><code className="text-primary font-mono text-sm">{p.name}</code></Table.Cell>
                          <Table.Cell><code className="text-sm text-base-content/70 font-mono">{p.type}</code></Table.Cell>
                          <Table.Cell><code className="text-sm text-secondary font-mono">{p.default}</code></Table.Cell>
                          <Table.Cell className="text-sm text-base-content/60">{p.desc}</Table.Cell>
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
                  triggerText="本页导航"
                  size="sm"
                  placement="bottom-start"
                  items={[
                    { key: 'preview', label: '实时预览' },
                    { key: 'usage', label: '安装与使用' },
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
                <h3 className="font-semibold mb-3 text-sm">{component.category} 分类</h3>
                <List disablePadding>
                  {allComponents
                    .filter((c) => c.category === component.category)
                    .map((c) => (
                      <ListItem
                        key={c.id}
                        button
                        selected={c.id === id}
                        onClick={() => navigate(`/components/${c.id}`)}
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
            <Link to={`/components/${prev.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              {prev.name}
            </Button></Link>
          ) : <span />}
          {next ? (
            <Link to={`/components/${next.id}`}><Button size="sm" buttonStyle="text" className="gap-2">
              {next.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Button></Link>
          ) : <span />}
        </div>
      </div>
    </main>
  )
}

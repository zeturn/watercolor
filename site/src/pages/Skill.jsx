import { useState, useEffect } from 'react'
import { Button, Card } from '@zeturn/watercolor-react'
import { useDocumentMeta } from '../seo'

const SKILL_URL = '/skills/watercolor-ui/SKILL.md'
const COMPONENTS_URL = '/skills/watercolor-ui/references/components.md'
const SITE = 'https://watercolorui.com'

const tools = [
  {
    name: 'Codex',
    desc: 'Place the file under your project’s .codex/skills directory so the agent can load it on demand.',
    command: `curl -o .codex/skills/watercolor-ui/SKILL.md ${SITE}/skills/watercolor-ui/SKILL.md`,
  },
  {
    name: 'Claude Code',
    desc: 'Drop it into the project or user skills folder (e.g. .claude/skills) to make it available to the agent.',
    command: `curl -o .claude/skills/watercolor-ui/SKILL.md ${SITE}/skills/watercolor-ui/SKILL.md`,
  },
  {
    name: 'Cursor / Other agents',
    desc: 'Save it as a project rule or agent skill (e.g. .cursor/skills) so the agent can read it while coding.',
    command: `curl -o .cursor/skills/watercolor-ui/SKILL.md ${SITE}/skills/watercolor-ui/SKILL.md`,
  },
]

export default function Skill() {
  const [content, setContent] = useState('')
  const [copied, setCopied] = useState(false)

  useDocumentMeta({
    title: 'Watercolor UI Skill for AI Agents',
    description:
      'Download a ready-to-use AI skill so coding agents (Codex, Claude, Cursor) can scaffold and extend UIs with the Watercolor UI component library.',
    path: '/skill',
  })

  useEffect(() => {
    fetch(SKILL_URL)
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent(''))
  }, [])

  const copy = async () => {
    if (!content) return
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="blob absolute -top-32 -right-24 w-[26rem] h-[26rem] bg-gradient-to-br from-fuchsia-500/20 to-transparent blur-3xl" />
          <div className="blob-2 absolute top-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-sky-400/15 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-wide text-primary uppercase mb-3">
              For AI Agents
            </span>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              Watercolor UI{' '}
              <span className="gradient-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500">
                Skill
              </span>
            </h1>
            <p className="mt-5 text-lg text-base-content/60 leading-relaxed">
              Download a ready-to-use skill so coding agents — Codex, Claude Code, Cursor and
              others — can scaffold and extend UIs with the Watercolor UI component library instead
              of hand-writing markup or guessing component APIs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SKILL_URL} download>
                <Button
                  variant="primary"
                  size="lg"
                  className="gap-2 shadow-lg shadow-primary/25"
                  endIcon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                      />
                    </svg>
                  }
                >
                  Download SKILL.md
                </Button>
              </a>
              <Button variant="outlined" size="lg" className="gap-2" onClick={copy}>
                {copied ? 'Copied!' : 'Copy contents'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Install instructions */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Install in your agent</h2>
          <p className="text-base-content/60 mb-8">
            Download the file, then place it in your agent’s skills folder — or run the matching
            curl command to fetch it directly.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-sm text-base-content/60 mb-4">{tool.desc}</p>
                <pre className="text-xs bg-base-200/60 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all">
                  {tool.command}
                </pre>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl lg:text-3xl font-bold">SKILL.md preview</h2>
            <Button variant="text" size="sm" onClick={copy}>
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-200/40 p-5 overflow-x-auto">
            <pre className="text-sm leading-relaxed whitespace-pre-wrap font-mono">
              {content || 'Loading…'}
            </pre>
          </div>
          <p className="mt-4 text-sm text-base-content/50">
            The full component catalog lives in{' '}
            <a className="text-primary underline" href={COMPONENTS_URL} download>
              references/components.md
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

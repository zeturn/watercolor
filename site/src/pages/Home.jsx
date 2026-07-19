import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal, { useScrollProgress } from '../components/ScrollReveal'
import { Copy, Button, Card, NumberAnimation, Feature } from '@zeturn/watercolor-react'

/* 单次触发 hook：元素首次进入视口后锁定为 true，之后不再重置 */
function useOnceInView(threshold = 0.3) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || triggered) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, triggered])

  return [ref, triggered]
}

// Hero Section with scroll animation
function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const heroTexts = [
    { title: 'Beautiful', subtitle: '水彩风格的视觉体验', color: 'from-rose-500 to-orange-400' },
    { title: 'Cross-Framework', subtitle: 'Vue 3 & React 双框架支持', color: 'from-violet-500 to-fuchsia-500' },
    { title: 'Accessible', subtitle: '完全无障碍的组件设计', color: 'from-emerald-400 to-cyan-500' },
    { title: 'Minimal', subtitle: '超扁平设计哲学', color: 'from-amber-400 via-pink-500 to-purple-500' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute -top-48 -right-32 w-[28rem] h-[28rem] bg-gradient-to-br from-fuchsia-500/25 to-transparent blur-3xl" />
        <div className="blob-2 absolute top-1/2 -left-48 w-80 h-80 bg-gradient-to-br from-sky-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/15 to-transparent rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-8 lg:pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Main heading with animated text */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              <span className="block text-base-content">Build with</span>
              <span
                key={currentText}
                className={`block gradient-text bg-gradient-to-r whitespace-nowrap ${heroTexts[currentText].color} transition-all duration-700`}
                style={{ animation: 'fadeInUp 0.6s ease-out', fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}
              >
                {heroTexts[currentText].title}
              </span>
              <span className="block text-base-content">UI Components</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-base-content/70 max-w-lg leading-relaxed">
              Watercolor UI 是一个现代、极简、<br/>
              <span className="font-semibold text-base-content">水彩风格</span>的跨框架组件库。
              一套代码，Vue 和 React 同时使用。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/components">
                <Button
                  size="lg"
                  variant="primary"
                  className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
                  style={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'row' }}
                  startIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>}
                >
                  浏览组件
                </Button>
              </Link>
              <a href="https://github.com/zeturn/watercolor" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  buttonStyle="outlined"
                  className="gap-2 hover:bg-base-200"
                  style={{ display: 'inline-flex', alignItems: 'center', flexDirection: 'row' }}
                  startIcon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>}
                >
                  GitHub
                </Button>
              </a>
            </div>

            {/* Install command */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-base-200 max-w-md">
              <Copy
                text="npm install @zeturn/watercolor-react @zeturn/watercolor-core"
                variant="ghost"
                showLabel={false}
                className="font-mono text-sm text-left flex-1"
              >
                $ npm install @zeturn/watercolor-react @zeturn/watercolor-core
              </Copy>
            </div>
          </div>

          {/* Right: Animated component preview card */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 glass rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-base-300">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-base-300 rounded-full h-6 flex items-center px-3">
                    <span className="text-xs text-base-content/50">watercolor-ui.dev</span>
                  </div>
                </div>
              </div>
              
              {/* Preview content */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  {['Features', 'Links', 'Message', 'Design system'].map((tab, i) => (
                    <button key={tab} className={`text-xs py-2 px-3 rounded-lg transition-colors ${i === 0 ? 'bg-primary text-white' : 'hover:bg-base-200'}`}>
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {['Faster development', 'Cleaner HTML', 'Customizable', 'Themeable', 'Pure CSS'].map((item, i) => (
                    <div key={item} className="flex items-center justify-between py-2 px-3 rounded-lg bg-base-100">
                      <span className="text-sm">{item}</span>
                      <div className={`w-8 h-5 rounded-full ${i < 4 ? 'bg-primary' : 'bg-base-300'} relative`}>
                        <div className={`absolute w-4 h-4 rounded-full bg-white top-0.5 transition-all ${i < 4 ? 'right-0.5' : 'left-0.5'} shadow-sm`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-base-300">
                  <p className="text-xs text-base-content/50 mb-2">Semantic colors</p>
                  <div className="flex gap-2">
                    {[
                      { name: 'primary', class: 'bg-primary' },
                      { name: 'secondary', class: 'bg-secondary' },
                      { name: 'accent', class: 'bg-accent' },
                      { name: 'success', class: 'bg-success' },
                      { name: 'warning', class: 'bg-warning' },
                    ].map(c => (
                      <div key={c.name} className="flex-1">
                        <div className={`${c.class} h-8 rounded-lg mb-1`} />
                        <span className="text-[10px] text-center block text-base-content/50">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration cards */}
            <div className="absolute -left-8 top-20 glass rounded-xl p-3 shadow-lg animate-float z-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-success/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">No Dependencies</p>
                  <p className="text-[10px] text-base-content/50">Zero runtime deps</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-32 glass rounded-xl p-3 shadow-lg animate-float z-0" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">Tree-shakeable</p>
                  <p className="text-[10px] text-base-content/50">Import only what you need</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-base-content/40">向下滚动</span>
          <svg className="w-5 h-5 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

// "Instead of writing..." section with code comparison
function ComparisonSection() {
  const [ref, visible] = useOnceInView(0.3)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big text */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h2 ref={ref} className="text-4xl lg:text-6xl font-bold leading-tight">
                instead of writing{' '}
                <NumberAnimation from={0} to={88} duration={2500} active={visible} suffix="%" />{' '}
                more code
              </h2>
              <p className="text-lg text-base-content/60 leading-relaxed">
                For every element, every page, every project,<br/>again and again...
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Code comparison */}
          <ScrollReveal direction="right">
            <div className="glass rounded-2xl overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-base-200/50 border-b border-base-300">
                <span className="text-sm font-medium">// styling a simple button</span>
              </div>
              <div className="p-6 space-y-4 font-mono text-sm">
                <pre className="text-error leading-relaxed whitespace-pre-wrap break-all">
{`<button class="bg-zinc-100 border font-semibold
  text-zinc-900 text-sm px-4 duration-200 py-2.5
  transition-all hover:border-zinc-300 hover:bg-zinc-200
  focus-visible:outline-offset-2 focus-visible:outline-zinc-900
  active:translate-y-px ...">`}
                </pre>
                <div className="text-right text-xs text-base-content/40 pb-2">Tailwind Button</div>
                
                <div className="border-t border-dashed border-base-300 my-4" />
                
                <pre className="text-success leading-relaxed">
{`<Button variant="filled" size="md">
  Click me!
</Button>`}
                </pre>
                <div className="text-right text-xs text-base-content/40 pb-2">Watercolor Button</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// Stats / Benefits section
function StatsSection() {
  const stats = [
    { value: 60, suffix: '+', label: 'UI 组件', desc: '覆盖表单、布局、导航等全场景' },
    { value: 2, label: '框架支持', desc: 'Vue 3 & React 18/19' },
    { value: 88, suffix: '%', label: '更少代码量', desc: '相比原生 Tailwind 开发' },
    { value: 0, label: '运行时依赖', desc: '完全 Tree-shakeable' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-base-200/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Fewer class names<br/>
              <span className="gradient-text">Faster development</span><br/>
              Smaller file size
            </h2>
            <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
              使用 Watercolor，你将写出更少的代码，获得更好的开发体验，同时保持极小的打包体积。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, suffix = '', label, desc, index }) {
  const [ref, visible] = useOnceInView(0.3)
  return (
    <ScrollReveal delay={index * 150}>
      <div ref={ref} className="h-full">
        <Card variant="elevated" className="p-6 text-center group hover:shadow-md transition-shadow h-full">
          <div className="text-4xl lg:text-5xl font-black mb-2">
            <NumberAnimation from={0} to={value} duration={2000} active={visible} suffix={suffix || undefined} />
          </div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{label}</h3>
          <p className="text-sm text-base-content/50">{desc}</p>
        </Card>
      </div>
    </ScrollReveal>
  )
}

// Features grid section
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: '极速开发',
      description: '预构建的语义化组件，让你专注于业务逻辑而非样式细节。开箱即用，无需配置。',
      gradient: 'from-primary/10 to-primary/5',
      iconBg: 'bg-primary/10 text-primary'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
        </svg>
      ),
      title: '纯净 HTML',
      description: '生成的 DOM 结构简洁清晰，没有冗余的 wrapper 元素。HTML size 减少约 79%。',
      gradient: 'from-secondary/10 to-secondary/5',
      iconBg: 'bg-secondary/10 text-secondary'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      title: '高度可定制',
      description: '通过 CSS 变量和主题系统，轻松定制颜色、圆角、字体等所有设计令牌。',
      gradient: 'from-accent/10 to-accent/5',
      iconBg: 'bg-accent/10 text-accent'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      ),
      title: '主题切换',
      description: '内置明暗模式支持，一行代码即可实现全局主题切换。支持自定义多套主题。',
      gradient: 'from-warning/10 to-warning/5',
      iconBg: 'bg-warning/10 text-warning'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: '完全无障碍',
      description: '所有组件内置键盘导航、ARIA 属性和屏幕阅读器支持，符合 WCAG 标准。',
      gradient: 'from-success/10 to-success/5',
      iconBg: 'bg-success/10 text-success'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
        </svg>
      ),
      title: '纯 CSS 驱动',
      description: '零 JavaScript 运行时开销。使用原生 CSS 变量系统，性能极致优化。',
      gradient: 'from-info/10 to-info/5',
      iconBg: 'bg-info/10 text-info'
    },
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why choose <span className="gradient-text">Watercolor UI</span>?
            </h2>
            <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
              Watercolor is for you if you:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="card"
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-violet-500/5 to-sky-400/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-base-content/60 mb-8 max-w-xl mx-auto">
              安装 Watercolor UI，开始构建你的下一个项目。只需一行命令。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/docs">
                <Button size="lg" variant="primary" className="gap-2 shadow-lg shadow-primary/25">
                  快速开始
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Button>
              </Link>
              <Link to="/components">
                <Button size="lg" buttonStyle="outlined">
                  探索组件库
                </Button>
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-base-200/80 backdrop-blur">
              <Copy
                text="npm install @zeturn/watercolor-react @zeturn/watercolor-core"
                variant="ghost"
                showLabel={false}
                className="text-sm font-mono text-base-content/70"
              >
                $ npm install @zeturn/watercolor-react @zeturn/watercolor-core
              </Copy>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-base-200/50 border-t border-base-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold">
                Water<span className="text-primary">color</span> UI
              </span>
            </div>
            <p className="text-base-content/60 max-w-sm">
              现代、极简、水彩风格的跨框架 UI 组件库。一套代码，Vue 和 React 同时使用。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">文档</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><Link to="/docs" className="hover:text-primary transition-colors">快速开始</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">安装指南</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">主题定制</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">API 参考</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">社区</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="https://github.com/zeturn/watercolor" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://github.com/zeturn/watercolor/issues" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">问题反馈</a></li>
              <li><a href="https://github.com/zeturn/watercolor/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">讨论区</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-base-300 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
          <p>&copy; 2024-2026 Watercolor UI Team. All rights reserved.</p>
          <p>Built with React + Vite + WaterColor UI</p>
        </div>
      </div>
    </footer>
  )
}

// 顶部滚动进度条：独立组件，避免 Home 因滚动而整体重渲染
function ScrollProgressBar() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-base-200 z-[60]">
      <div
        className="h-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Main Home page
export default function Home() {
  return (
    <main className="relative">
      <ScrollProgressBar />

      <HeroSection />
      <ComparisonSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}

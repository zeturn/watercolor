import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@zeturn/watercolor-react'

export default function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/docs', label: 'Docs' },
    { path: '/components', label: 'Components' },
  ]

  const githubIcon = (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )

  return (
    <AppBar
      position="sticky"
      color="default"
      style={{ top: 0, zIndex: 50, backdropFilter: isScrolled ? 'blur(12px)' : 'none', backgroundColor: isScrolled ? 'rgba(255,255,255,0.7)' : 'transparent', borderBottom: isScrolled ? '1px solid var(--wc-border-default, #e5e7eb)' : 'none' }}
    >
      <Toolbar className="container mx-auto px-4 lg:px-8" style={{ width: '100%' }}>
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Typography variant="h6" style={{ fontWeight: 700 }}>
            Water<span style={{ color: 'var(--wc-color-primary, #6366f1)' }}>color</span> UI
          </Typography>
        </Link>

        <div style={{ flexGrow: 1 }} />

        {/* Center: Navigation */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-1 absolute lg:static top-full left-0 w-full lg:w-auto bg-base-100 lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 z-40`}>
          {navItems.map((item) => {
            const isActive = item.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${isActive
                  ? 'nav-active'
                  : 'hover:bg-base-200 hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div style={{ flexGrow: 1 }} />

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/zeturn/watercolor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-base-200"
          >
            {githubIcon}
          </a>
          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-base-200"
            aria-label="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

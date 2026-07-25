import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { FlagCN, FlagUS, FlagJP, FlagFR, FlagDE, FlagES } from './Flags'

const LANGUAGES = [
  { code: 'zh-CN', label: '简体中文', Flag: FlagCN },
  { code: 'en-US', label: 'English', Flag: FlagUS },
  { code: 'ja-JP', label: '日本語', Flag: FlagJP },
  { code: 'fr-FR', label: 'Français', Flag: FlagFR },
  { code: 'de-DE', label: 'Deutsch', Flag: FlagDE },
  { code: 'es-ES', label: 'Español', Flag: FlagES },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Switch language"
        className="inline-flex items-center gap-2 h-10 px-3 rounded-lg transition-colors hover:bg-base-200"
      >
        <span className="inline-block w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10 leading-none">
          <current.Flag className="block w-full h-auto" />
        </span>
        <span className="hidden sm:inline text-sm">{current.label}</span>
        <svg
          className={`w-3.5 h-3.5 text-base-content/50 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Language"
          className="absolute right-0 top-full mt-2 w-44 py-1.5 rounded-xl bg-base-100 border border-base-300 shadow-xl z-50 overflow-hidden"
        >
          {LANGUAGES.map(({ code, label, Flag }) => {
            const active = code === lang
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => { setLang(code); setOpen(false) }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors hover:bg-base-200 ${active ? 'text-primary font-medium' : 'text-base-content'}`}
                >
                  <span className="inline-block w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10 leading-none">
                    <Flag className="block w-full h-auto" />
                  </span>
                  <span className="flex-1">{label}</span>
                  {active && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

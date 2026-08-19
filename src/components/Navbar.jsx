import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Spooker.png'

const links = [
  { label: 'Serviços',      href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato',       href: '#contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef       = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const op = Math.min(window.scrollY / 1000, 1)
      const el = headerRef.current
      if (!el) return
      el.style.backgroundColor    = `rgba(12, 12, 12, ${(op * 0.96).toFixed(3)})`
      el.style.backdropFilter     = `blur(${(op * 12).toFixed(1)}px)`
      el.style.webkitBackdropFilter = `blur(${(op * 12).toFixed(1)}px)`
      el.style.borderBottom       = op > 0.05 ? `1px solid rgba(255,255,255,${(op * 0.06).toFixed(3)})` : 'none'
      el.style.boxShadow          = op > 0.05 ? `0 4px 24px rgba(0,0,0,${(op * 0.35).toFixed(3)})` : 'none'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 inset-x-0 z-50"
      style={{ overflow: 'visible' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between" style={{ height: '72px', overflow: 'visible' }}>
        {/* Logo */}
        <a href="#" className="flex items-center" style={{ overflow: 'visible' }}>
          <img
            src={logo}
            alt="Spooker"
            className="object-contain"
            style={{ height: '170px', width: 'auto', position: 'relative', zIndex: 10 }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contato"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-violet-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-purple-900/30"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-brand-muted hover:text-brand-text hover:bg-white/5 transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-surface border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      )}
    </header>
  )
}

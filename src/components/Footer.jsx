import { MessageCircle } from 'lucide-react'
import logo from '../assets/Spooker.png'

const footerLinks = {
  Serviços: [
    'Automações com IA',
    'Chatbot para Atendimento',
    'Marketing Digital',
    'Desenvolvimento SaaS',
    'Landing Pages',
    'Suporte em TI',
  ],
  Contato: [
    { label: 'comercial@spooker.com.br', href: 'mailto:comercial@spooker.com.br' },
    { label: '+55 (51) 98146-2148',       href: 'tel:+5551981462148' },
    { label: 'Porto Alegre, RS',         href: null },
    { label: 'WhatsApp',                 href: 'https://wa.me/5551981462148' },
  ],
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

const socials = [
  { Icon: IconInstagram, href: 'https://instagram.com/spooker_ia', label: 'Instagram' },
  { Icon: IconFacebook,  href: '#',                                label: 'Facebook' },
  { Icon: IconLinkedin,  href: '#',                                label: 'LinkedIn' },
  { Icon: MessageCircle, href: 'https://wa.me/5551981462148',      label: 'WhatsApp', isLucide: true },
]

export default function Footer({ onNav }) {
  return (
    <footer className="bg-brand-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 relative" style={{ height: '80px' }}>
              <img
                src={logo}
                alt="Spooker"
                className="object-contain absolute top-1/2 left-0 -translate-y-1/2"
                style={{ height: '170px', width: 'auto' }}
              />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-xs">
              Tecnologia que transforma negócios. Somos parceiros estratégicos de empresas brasileiras que buscam crescer com inteligência digital.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-text hover:bg-white/10 hover:border-brand-primary/30 transition-colors"
                >
                  {s.isLucide ? <s.Icon size={16} /> : <s.Icon />}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-brand-text font-semibold text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label
                  const href  = typeof link === 'string' ? null : link.href
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className="text-brand-muted text-sm hover:text-brand-text transition-colors">
                          {label}
                        </a>
                      ) : (
                        <span className="text-brand-muted text-sm">{label}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted/60">
          <p>© {new Date().getFullYear()} Spooker Tecnologia. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <button onClick={() => onNav('privacy')} className="hover:text-brand-muted transition-colors">Política de Privacidade</button>
            <button onClick={() => onNav('terms')}   className="hover:text-brand-muted transition-colors">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

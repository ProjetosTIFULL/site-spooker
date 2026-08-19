const items = [
  'Inteligência Artificial',
  'Chatbots',
  'Marketing Digital',
  'Desenvolvimento SaaS',
  'Landing Pages',
  'Suporte em TI',
  'Consultoria Estratégica',
  'Gestão de Redes Sociais',
]

export default function ServiceTicker() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-brand-surface border-y border-white/5 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 mx-6 text-sm font-medium text-brand-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

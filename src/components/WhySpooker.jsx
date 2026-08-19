import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Clock, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Equipe especializada',
    desc: 'Time multidisciplinar com anos de experiência em TI, marketing digital e inteligência artificial aplicada a negócios.',
  },
  {
    icon: Clock,
    title: 'Entrega com prazo garantido',
    desc: 'Metodologia ágil com sprints curtos, comunicação transparente e prazos que são cumpridos — sem surpresas.',
  },
  {
    icon: TrendingUp,
    title: 'Foco em resultado mensurável',
    desc: 'Cada projeto tem KPIs definidos. Acompanhamos métricas reais e ajustamos a estratégia para maximizar o seu ROI.',
  },
]

export default function WhySpooker() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Por que a Spooker
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
            O parceiro certo para{' '}
            <span className="text-gradient">crescer com tecnologia</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-base">
            Mais do que um fornecedor — somos parceiros estratégicos comprometidos com o sucesso do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center px-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mx-auto mb-5">
                <r.icon size={24} className="text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-brand-text font-bold text-lg mb-3">{r.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

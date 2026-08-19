import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, FileText, Rocket, BarChart2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Analisamos sua operação, identificamos gargalos e oportunidades de melhoria com tecnologia.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Proposta',
    desc: 'Elaboramos um plano detalhado com escopo, cronograma e investimento claros e transparentes.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Execução',
    desc: 'Nossa equipe implementa a solução com metodologia ágil, entregas contínuas e comunicação constante.',
  },
  {
    num: '04',
    icon: BarChart2,
    title: 'Resultado',
    desc: 'Acompanhamos métricas, ajustamos a estratégia e garantimos que os resultados sejam sustentáveis.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="como-funciona" className="min-h-screen flex flex-col justify-center bg-brand-bg py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span className="w-4 h-px bg-brand-primary/60" />
            Como funciona
            <span className="w-4 h-px bg-brand-primary/60" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4"
          >
            Do diagnóstico ao resultado
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-brand-muted max-w-lg mx-auto text-base leading-relaxed"
          >
            Um processo claro, sem burocracia. Do primeiro contato à entrega em produção.
          </motion.p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-start">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.num} className="flex items-start flex-1">
                {/* Step */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center flex-1 group"
                >
                  <div className="relative mb-6">
                    <div className="w-[100px] h-[100px] rounded-2xl bg-brand-card border border-brand-primary/50 flex flex-col items-center justify-center gap-1.5 group-hover:border-brand-primary transition-colors">
                      <Icon size={22} className="text-brand-primary" strokeWidth={1.5} />
                      <span className="text-[10px] font-bold text-brand-primary/50 tracking-widest">{step.num}</span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  </div>
                  <h3 className="text-brand-text font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed px-2">{step.desc}</p>
                </motion.div>

                {/* Connector between steps */}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                    className="flex-shrink-0 flex items-center"
                    style={{ marginTop: '50px' }}
                  >
                    <div className="w-10 h-px bg-gradient-to-r from-brand-primary/40 to-brand-primary/40" />
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="flex-shrink-0 -ml-px">
                      <path d="M1 1l4 4-4 4" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-brand-card border border-brand-primary/50 flex items-center justify-center">
                    <Icon size={20} className="text-brand-primary" strokeWidth={1.5} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-brand-primary/30 to-transparent mt-2" style={{ minHeight: '28px' }} />
                  )}
                </div>
                <div className="pt-1 pb-6">
                  <span className="text-[10px] font-bold text-brand-primary/60 tracking-widest uppercase">{step.num}</span>
                  <h3 className="text-brand-text font-bold text-base mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

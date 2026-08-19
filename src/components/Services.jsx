import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Bot, MessageSquare, BarChart2, Code2,
  Rocket, Server, Lightbulb, Share2,
} from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Automações com Inteligência Artificial',
    desc: 'Automatize tarefas repetitivas e ganhe escala com IA aplicada ao seu processo de negócio.',
    tag: 'IA',
  },
  {
    icon: MessageSquare,
    title: 'Chatbot para Atendimento Automatizado',
    desc: 'Atenda clientes 24/7 com chatbots inteligentes integrados ao WhatsApp, Instagram e site.',
    tag: 'Automação',
  },
  {
    icon: BarChart2,
    title: 'Marketing Digital e Tráfego Pago',
    desc: 'Campanhas de Google Ads e Meta Ads com foco em ROI e geração de leads qualificados.',
    tag: 'Marketing',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento de SaaS',
    desc: 'Sistemas web e aplicações SaaS desenvolvidas com arquitetura escalável e segura.',
    tag: 'Dev',
  },
  {
    icon: Rocket,
    title: 'Landing Pages de Alta Conversão',
    desc: 'Páginas otimizadas para converter visitantes em clientes com testes A/B e analytics.',
    tag: 'Web',
  },
  {
    icon: Server,
    title: 'Suporte e Infraestrutura em TI',
    desc: 'Gestão de servidores, cloud, segurança e suporte técnico para sua operação.',
    tag: 'Infra',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Estratégica em Tecnologia',
    desc: 'Diagnóstico e roadmap tecnológico para alinhar TI com os objetivos do negócio.',
    tag: 'Consultoria',
  },
  {
    icon: Share2,
    title: 'Gestão de Instagram e Facebook',
    desc: 'Produção de conteúdo, calendário editorial e crescimento orgânico nas redes sociais.',
    tag: 'Social',
  },
]

function Card({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group relative bg-brand-card rounded-2xl p-6 border border-white/5 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-default"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary/15 transition-colors">
          <service.icon size={20} className="text-brand-primary" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-semibold text-brand-muted/70 bg-white/5 px-2.5 py-1 rounded-full">
          {service.tag}
        </span>
      </div>
      <h3 className="text-brand-text font-semibold text-base leading-snug mb-2">{service.title}</h3>
      <p className="text-brand-muted text-sm leading-relaxed">{service.desc}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary text-xs font-semibold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
            Soluções completas em tecnologia
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base">
            Do atendimento automatizado à infraestrutura de TI — temos a expertise para transformar cada área do seu negócio com tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Card key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

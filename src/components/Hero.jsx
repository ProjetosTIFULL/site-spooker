import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.35) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text leading-tight mb-6"
          >
            Tecnologia que{' '}
            <span className="text-gradient">transforma</span>
            <br />
            o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Da automação com inteligência artificial ao desenvolvimento de software sob medida — a Spooker é a parceira estratégica que empresas brasileiras precisam para crescer com eficiência e segurança no ambiente digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-primary hover:bg-violet-500 text-white font-semibold transition-all shadow-xl shadow-purple-900/40 hover:shadow-purple-900/60 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight size={16} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/10 text-brand-text hover:bg-white/5 font-semibold transition-all w-full sm:w-auto"
            >
              Conheça nossos serviços
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-muted/50 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

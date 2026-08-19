import { useState } from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, CheckCircle, Send, Clock, Gift, Shield } from 'lucide-react'

const serviceOptions = [
  'Automações com Inteligência Artificial',
  'Chatbot para Atendimento Automatizado',
  'Marketing Digital e Tráfego Pago',
  'Desenvolvimento de SaaS',
  'Landing Pages de Alta Conversão',
  'Suporte e Infraestrutura em TI',
  'Consultoria Estratégica em Tecnologia',
  'Gestão de Instagram e Facebook',
  'Outro / Não sei ainda',
]

const differentials = [
  { icon: Clock,  text: 'Resposta em até 24h' },
  { icon: Gift,   text: 'Diagnóstico gratuito' },
  { icon: Shield, text: 'Sem compromisso' },
]

const initialForm = { name: '', email: '', whatsapp: '', company: '', service: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm]           = useState(initialForm)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [apiError, setApiError]   = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Nome é obrigatório'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'E-mail inválido'
    if (!form.whatsapp.trim()) e.whatsapp = 'WhatsApp é obrigatório'
    if (!form.service)         e.service  = 'Selecione um serviço'
    if (!form.message.trim())  e.message  = 'Descreva sua necessidade'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    setApiError('')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Erro ao enviar.')
      }
      setSubmitted(true)
      setForm(initialForm)
    } catch (err) {
      setApiError(err.message || 'Falha ao enviar. Tente pelo WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  const inputCls =
    'w-full bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-brand-text text-sm placeholder-brand-muted/50 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors'
  const errCls = 'text-red-400 text-xs mt-1'

  return (
    <section id="contato" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="inline-block text-brand-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Entre em contato
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-brand-text mb-4">
            Vamos conversar sobre{' '}
            <span className="text-gradient">seu projeto</span>
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto text-base">
            Preencha o formulário ou entre em contato diretamente. Nossa equipe responde em até 24 horas.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto bg-brand-card rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center p-12"
          >
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/25 flex items-center justify-center mb-4">
              <CheckCircle size={30} className="text-brand-primary" />
            </div>
            <h3 className="text-brand-text font-bold text-xl mb-2">Solicitação enviada!</h3>
            <p className="text-brand-muted text-sm max-w-sm">
              Recebemos seu contato e retornaremos em até 24 horas. Obrigado por escolher a Spooker!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-brand-primary text-sm hover:text-violet-400 transition-colors"
            >
              Enviar outra mensagem
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10"
          >
            {/* Left column */}
            <div className="lg:col-span-2 flex flex-col gap-6 lg:pb-8">
              <div className="bg-brand-card rounded-2xl p-6 border border-white/5">
                <h3 className="text-brand-text font-semibold mb-5">Por que nos escolher?</h3>
                <div className="flex flex-col gap-4">
                  {differentials.map((d) => (
                    <div key={d.text} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                        <d.icon size={16} className="text-brand-primary" />
                      </div>
                      <span className="text-brand-muted text-sm">{d.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-brand-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
                <h3 className="text-brand-text font-semibold mb-1">Contato direto</h3>
                <a href="mailto:comercial@spooker.com.br" className="flex items-center gap-3 text-brand-muted hover:text-brand-text transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-brand-primary" />
                  </div>
                  <span className="text-sm">comercial@spooker.com.br</span>
                </a>
                <a href="tel:+5551981462148" className="flex items-center gap-3 text-brand-muted hover:text-brand-text transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-brand-primary" />
                  </div>
                  <span className="text-sm">+55 (51) 98146-2148</span>
                </a>
                <div className="flex items-center gap-3 text-brand-muted">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-brand-primary" />
                  </div>
                  <span className="text-sm">Porto Alegre, RS — Brasil</span>
                </div>
              </div>

              <a
                href="https://wa.me/5551981462148?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Spooker!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-green-900/30 hover:shadow-green-500/40"
              >
                Conversar no WhatsApp agora
              </a>
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="h-full bg-brand-card rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col gap-5"
              >
                <h3 className="text-brand-text font-bold text-lg">Solicitar orçamento</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5 font-medium">
                      Nome completo <span className="text-red-400">*</span>
                    </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" className={inputCls} />
                    {errors.name && <p className={errCls}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5 font-medium">
                      E-mail corporativo <span className="text-red-400">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@empresa.com" className={inputCls} />
                    {errors.email && <p className={errCls}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5 font-medium">
                      WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(51) 99999-9999" className={inputCls} />
                    {errors.whatsapp && <p className={errCls}>{errors.whatsapp}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-brand-muted mb-1.5 font-medium">Empresa</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nome da empresa" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-brand-muted mb-1.5 font-medium">
                    Serviço de interesse <span className="text-red-400">*</span>
                  </label>
                  <select name="service" value={form.service} onChange={handleChange} className={`${inputCls} cursor-pointer`}>
                    <option value="" disabled>Selecione um serviço</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-brand-card">{o}</option>
                    ))}
                  </select>
                  {errors.service && <p className={errCls}>{errors.service}</p>}
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-xs text-brand-muted mb-1.5 font-medium">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Descreva brevemente o que você precisa..." className={`${inputCls} resize-none flex-1`} />
                  {errors.message && <p className={errCls}>{errors.message}</p>}
                </div>

                {apiError && (
                  <p className="text-red-400 text-xs text-center -mb-2">{apiError}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-primary text-white font-semibold transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-500/50 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {sending ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

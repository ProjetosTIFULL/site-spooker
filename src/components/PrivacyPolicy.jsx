import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function PrivacyPolicy({ onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          Voltar ao site
        </button>

        <span className="block text-brand-primary text-xs font-semibold uppercase tracking-widest mb-3">
          Spooker Tecnologia
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Política de Privacidade
        </h1>
        <p className="text-brand-muted text-sm mb-10">
          Última atualização: agosto de 2025
        </p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-brand-muted">

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">1. Quem somos</h2>
            <p>
              A <strong className="text-brand-text">Spooker Tecnologia</strong> é uma empresa brasileira especializada em soluções digitais —
              automação com inteligência artificial, chatbots, marketing digital, desenvolvimento de software e suporte em TI.
              Estamos sediados em Porto Alegre, RS, e operamos em conformidade com a
              Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">2. Dados que coletamos</h2>
            <p className="mb-3">Coletamos apenas os dados estritamente necessários para prestar nossos serviços:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de WhatsApp / telefone</li>
              <li>Nome da empresa (opcional)</li>
              <li>Informações sobre o serviço de interesse</li>
              <li>Mensagem enviada pelo formulário de contato</li>
            </ul>
            <p className="mt-3">
              Não coletamos dados de navegação, cookies de rastreamento ou informações de pagamento diretamente por este site.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">3. Como utilizamos seus dados</h2>
            <p className="mb-3">As informações coletadas são utilizadas exclusivamente para:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
              <li>Responder à sua solicitação de contato ou orçamento</li>
              <li>Identificar e compreender sua necessidade para oferecer a melhor solução</li>
              <li>Enviar comunicações relacionadas ao serviço solicitado</li>
            </ul>
            <p className="mt-3">
              <strong className="text-brand-text">Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros</strong> para
              fins comerciais. Seus dados são tratados com total confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">4. Base legal para o tratamento</h2>
            <p>
              O tratamento dos seus dados é realizado com base no <strong className="text-brand-text">consentimento</strong> (Art. 7º, I da LGPD)
              e no <strong className="text-brand-text">legítimo interesse</strong> (Art. 7º, IX da LGPD) para responder às suas solicitações.
              A Spooker segue à risca todas as diretrizes da LGPD, garantindo que cada dado coletado tenha uma finalidade
              clara, legítima e proporcional.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">5. Armazenamento e segurança</h2>
            <p>
              Seus dados são armazenados em servidores seguros com acesso restrito apenas aos colaboradores que necessitam
              das informações para realizar o atendimento. Adotamos medidas técnicas e organizacionais adequadas para
              proteger seus dados contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">6. Retenção de dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para cumprir a finalidade para a qual foram coletados ou conforme
              exigido por lei. Após esse período, os dados são excluídos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">7. Seus direitos</h2>
            <p className="mb-3">Em conformidade com a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que possuímos sobre você</li>
              <li>Solicitar a correção de dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Opor-se ao tratamento em caso de descumprimento da LGPD</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
              <a href="mailto:comercial@spooker.com.br" className="text-brand-primary hover:text-violet-400 transition-colors">
                comercial@spooker.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">8. Links externos</h2>
            <p>
              Este site pode conter links para plataformas externas (WhatsApp, Instagram, etc.).
              Não somos responsáveis pelas práticas de privacidade dessas plataformas e recomendamos
              que você consulte as políticas de privacidade de cada uma delas.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">9. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir mudanças legais ou operacionais.
              Recomendamos revisitá-la regularmente. A data da última atualização sempre constará no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">10. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados, entre em contato:
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 pl-2">
              <li><strong className="text-brand-text">E-mail:</strong>{' '}
                <a href="mailto:comercial@spooker.com.br" className="text-brand-primary hover:text-violet-400 transition-colors">
                  comercial@spooker.com.br
                </a>
              </li>
              <li><strong className="text-brand-text">Telefone:</strong> +55 (51) 98146-2148</li>
              <li><strong className="text-brand-text">Endereço:</strong> Porto Alegre, RS — Brasil</li>
            </ul>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Voltar ao site
          </button>
        </div>
      </div>
    </div>
  )
}

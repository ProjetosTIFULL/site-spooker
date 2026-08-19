import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function TermsOfUse({ onBack }) {
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
          Termos de Uso
        </h1>
        <p className="text-brand-muted text-sm mb-10">
          Última atualização: agosto de 2025
        </p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-brand-muted">

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">1. Aceitação dos termos</h2>
            <p>
              Ao acessar e utilizar o site da <strong className="text-brand-text">Spooker Tecnologia</strong>, você concorda com estes
              Termos de Uso. Se não concordar com qualquer parte destes termos, solicitamos que não utilize nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">2. Sobre a Spooker</h2>
            <p>
              A Spooker Tecnologia é uma empresa brasileira que oferece soluções digitais, incluindo automação com
              inteligência artificial, chatbots, marketing digital, desenvolvimento de software e suporte em TI.
              Este site tem caráter informativo e comercial, destinado a apresentar nossos serviços e captar contatos
              de potenciais clientes.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">3. Uso permitido</h2>
            <p className="mb-3">O site pode ser utilizado exclusivamente para:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
              <li>Conhecer os serviços oferecidos pela Spooker</li>
              <li>Entrar em contato para solicitar orçamentos ou informações</li>
              <li>Navegar pelo conteúdo informativo disponibilizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">4. Uso proibido</h2>
            <p className="mb-3">É expressamente proibido:</p>
            <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
              <li>Utilizar o site para fins ilegais ou não autorizados</li>
              <li>Tentar obter acesso não autorizado a sistemas ou dados</li>
              <li>Reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia por escrito</li>
              <li>Enviar comunicações não solicitadas (spam) por meio dos formulários de contato</li>
              <li>Praticar qualquer ação que possa prejudicar a infraestrutura ou a reputação da Spooker</li>
            </ul>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">5. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo deste site — textos, imagens, logotipos, identidade visual e código — é propriedade
              exclusiva da Spooker Tecnologia e está protegido pelas leis brasileiras de propriedade intelectual.
              É vedada qualquer reprodução sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">6. Isenção de responsabilidade</h2>
            <p>
              As informações deste site são fornecidas "no estado em que se encontram", sem garantias de qualquer natureza.
              A Spooker não se responsabiliza por danos decorrentes do uso ou da impossibilidade de uso do site,
              incluindo interrupções técnicas, erros ou omissões no conteúdo.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">7. Links externos</h2>
            <p>
              Este site pode conter links para sites de terceiros. Esses links são fornecidos apenas por conveniência
              e não implicam endosso ou responsabilidade da Spooker pelo conteúdo dessas páginas externas.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">8. Formulário de contato e dados pessoais</h2>
            <p>
              O envio de informações por meio do formulário de contato é voluntário. Os dados fornecidos são tratados
              em conformidade com nossa{' '}
              <button
                onClick={() => {}}
                className="text-brand-primary hover:text-violet-400 transition-colors"
              >
                Política de Privacidade
              </button>
              {' '}e com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              A Spooker se compromete a tratar seus dados com total responsabilidade, sigilo e respeito.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">9. Modificações</h2>
            <p>
              A Spooker reserva-se o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em
              vigor imediatamente após a publicação nesta página. Recomendamos que você verifique periodicamente esta
              página para se manter atualizado.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">10. Lei aplicável e foro</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Para dirimir quaisquer controvérsias decorrentes
              deste instrumento, fica eleito o foro da comarca de Porto Alegre, RS, com exclusão de qualquer outro.
            </p>
          </section>

          <section>
            <h2 className="text-brand-text font-bold text-lg mb-3">11. Contato</h2>
            <p>
              Dúvidas sobre estes Termos de Uso podem ser enviadas para:
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

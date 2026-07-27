import { ArrowUpRight, HelpCircle } from 'lucide-react'
import { trackEvent } from '../utils/tracking'
import SectionReveal from './SectionReveal'

const faqs = [
  {
    question: 'A advogada Sabrina Coutinho atende apenas em Saquarema/RJ?',
    answer:
      'Não. O atendimento é realizado em Saquarema/RJ e também de forma online para clientes em outras cidades e estados.',
  },
  {
    question: 'Quanto tempo leva para receber uma primeira orientação jurídica?',
    answer:
      'Pelo WhatsApp, a triagem inicial costuma ser ágil. O prazo exato depende da complexidade do caso e dos documentos disponíveis.',
  },
  {
    question: 'Quais documentos devo separar para iniciar o atendimento?',
    answer:
      'Documentos pessoais, comprovantes e arquivos relacionados ao problema jurídico ajudam a acelerar a análise e a definição de estratégia.',
  },
  {
    question: 'É possível resolver tudo de forma online?',
    answer:
      'Em muitos casos, sim. A modalidade online permite orientação, acompanhamento e encaminhamentos com praticidade e segurança.',
  },
  {
    question: 'Como saber se meu caso tem viabilidade?',
    answer:
        'Na primeira análise, são avaliados contexto, provas e objetivo do cliente para indicar caminhos jurídicos realistas e transparentes.',
  },
  {
    question: 'O atendimento oferece acompanhamento durante o processo?',
    answer:
      'Sim. A proposta é manter comunicação clara sobre cada etapa, prazos e decisões estratégicas ao longo da atuação.',
  },
]

function Faq() {
  function handleFaqWhatsappClick() {
    trackEvent('whatsapp_click', {
      location: 'faq_section',
      channel: 'whatsapp',
    })
  }

  return (
    <SectionReveal className="section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-shell">
        <div className="faq-intro">
          <div className="section__header faq-intro__header">
            <p className="section__eyebrow section__eyebrow--with-icon">
              <HelpCircle size={14} aria-hidden="true" /> Perguntas frequentes
            </p>
            <h2 id="faq-heading" className="section__title">
              Dúvidas comuns sobre atendimento jurídico em Saquarema/RJ e Online
            </h2>
          </div>
          <p className="faq-intro__text">
            Se sua dúvida não estiver aqui, fale direto no WhatsApp para uma orientação inicial objetiva.
          </p>
          <a
            className="faq-intro__cta"
            href="https://wa.me/5522998820818"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp sobre uma dúvida jurídica"
            data-tracking="whatsapp_click"
            data-location="faq_section"
            onClick={handleFaqWhatsappClick}
          >
            Tirar dúvida no WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__indicator" aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export default Faq
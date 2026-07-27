import { ArrowUpRight } from 'lucide-react'
import { trackEvent } from '../utils/tracking'
import SectionReveal from './SectionReveal'

function FinalCta() {
  function handleWhatsappClick() {
    trackEvent('whatsapp_click', {
      location: 'final_cta',
      channel: 'whatsapp',
    })
  }

  function handleInstagramClick() {
    trackEvent('instagram_click', {
      location: 'final_cta',
      channel: 'instagram',
    })
  }

  return (
    <SectionReveal className="section section--cta" id="contato" aria-labelledby="cta-heading">
      <div className="cta-box">
        <div className="cta-grid">
          <div className="cta-lead">
            <p className="section__eyebrow">Pronta para te ouvir</p>
            <h2 id="cta-heading" className="section__title">
              Seu caso merece direção jurídica clara agora
            </h2>
            <p className="section__text cta-lead__text">
              Atendimento em Saquarema/RJ e online para todo o Brasil, com análise técnica,
              estratégia personalizada e acompanhamento próximo até a melhor solução possível.
            </p>

            <div className="cta-actions">
              <a
                className="hero__cta"
                href="https://wa.me/5522998820818"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Iniciar atendimento juridico pelo WhatsApp"
                data-tracking="whatsapp_click"
                data-location="final_cta"
                onClick={handleWhatsappClick}
              >
                Iniciar atendimento no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="cta-secondary"
                href="https://www.instagram.com/sabrinacoutinho.adv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Sabrina Coutinho"
                data-tracking="instagram_click"
                data-location="final_cta"
                onClick={handleInstagramClick}
              >
                Ver atuação no Instagram <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="cta-panel" aria-label="Etapas do primeiro atendimento">
            <p className="cta-panel__title">Primeiro atendimento</p>
            <ol className="cta-panel__list">
              <li>
                <span>01</span>
                <p>Triagem inicial do caso e do objetivo jurídico.</p>
              </li>
              <li>
                <span>02</span>
                <p>Definição dos próximos passos com clareza e segurança.</p>
              </li>
              <li>
                <span>03</span>
                <p>Condução estratégica com atualizações durante a jornada.</p>
              </li>
            </ol>
            <a
              className="cta-panel__link"
              href="https://wa.me/5522998820818"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar diretamente no WhatsApp"
              data-tracking="whatsapp_click"
              data-location="final_cta_side"
              onClick={handleWhatsappClick}
            >
              Falar direto com a advogada <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </aside>
        </div>

        <p className="cta-footnote">Canal prioritário de atendimento: WhatsApp.</p>
      </div>
    </SectionReveal>
  )
}

export default FinalCta
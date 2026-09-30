import {
  ArrowUpRight,
  Briefcase,
  HeartHandshake,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
} from 'lucide-react'
import { trackEvent } from '../utils/tracking'
import SectionReveal from './SectionReveal'

const areas = [
  {
    title: 'Direito Previdenciário',
    icon: Landmark,
    description:
      'Aposentadorias, benefícios, revisões e requerimentos administrativos perante o INSS, com estratégia clara do início ao fim.',
  },
  {
    title: 'Família e Sucessões',
    icon: HeartHandshake,
    description:
      'Divórcios, inventário, partilha e planejamento familiar com atuação humanizada e segurança jurídica.',
  },
  {
    title: 'Direito Civil',
    icon: Scale,
    description:
      'Contratos, indenizações, cobranças, obrigações e outras demandas da vida civil, no presencial e online.',
  },
  {
    title: 'Trabalhista',
    icon: Briefcase,
    description:
      'Defesa dos seus direitos no ambiente de trabalho, com análise objetiva e condução estratégica do caso.',
  },
  {
    title: 'Consumidor',
    icon: ShieldCheck,
    description:
      'Proteção em relações de consumo, cobranças indevidas, falhas de serviço e conflitos com empresas.',
  },
  {
    title: 'Planejamento Sucessório',
    icon: ScrollText,
    description:
      'Organização patrimonial e sucessória para proteger o futuro da família com tranquilidade e previsibilidade.',
  },
]

function PracticeAreas() {
  function handleAreaClick(area) {
    trackEvent('whatsapp_click', {
      location: 'practice_area',
      area,
      channel: 'whatsapp',
    })
  }

  return (
    <SectionReveal className="section" id="areas-de-atuacao" aria-labelledby="areas-heading">
      <div className="areas-featured">
        <figure className="areas-featured__media">
          <img
            src="/image-5.jpg"
            alt="Sabrina Coutinho em escritório, com documentos e livros jurídicos, em retrato profissional"
            width="1062"
            height="1328"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="areas-featured__copy">
          <p className="section__eyebrow">Áreas de atuação</p>
          <h2 id="areas-heading" className="section__title">
            Seu direito, minha prioridade
          </h2>
          <p className="section__text">
            Atuação jurídica com compromisso, ética e atenção em cada detalhe, para
            orientação segura em Saquarema/RJ e no atendimento online.
          </p>
          <ul className="areas-featured__values" aria-label="Pilares da atuação">
            <li>Ética e transparência</li>
            <li>Compromisso com o seu direito</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
      </div>

      <div className="areas-grid">
        {areas.map((area) => (
          <article key={area.title} className="card card--area">
            <div className="card__icon">
              <area.icon size={18} aria-hidden="true" />
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <a
              href="https://wa.me/5522998820818"
              target="_blank"
              rel="noopener noreferrer"
              className="card__link"
              aria-label={`Falar no WhatsApp sobre ${area.title}`}
              data-tracking="whatsapp_click"
              data-location="practice_area"
              data-area={area.title}
              onClick={() => handleAreaClick(area.title)}
            >
              Falar sobre este caso <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}

export default PracticeAreas
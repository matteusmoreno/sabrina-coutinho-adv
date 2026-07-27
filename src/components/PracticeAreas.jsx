import { ArrowUpRight, FileCheck2, HeartHandshake, Landmark, Scale } from 'lucide-react'
import { trackEvent } from '../utils/tracking'
import SectionReveal from './SectionReveal'

const areas = [
  {
    title: 'Direito de Familia',
    icon: HeartHandshake,
    description:
      'Atuação em divórcio, guarda, pensão e acordos familiares com foco em resolução segura e humanizada.',
  },
  {
    title: 'Direito Previdenciário',
    icon: Landmark,
    description:
        'Orientação para aposentadorias, benefícios e revisões com estratégia jurídica clara do início ao fim.',
  },
  {
    title: 'Direito Civel',
    icon: Scale,
    description:
      'Defesa de direitos em contratos, cobranças, indenizações e conflitos patrimoniais no presencial e online.',
  },
  {
    title: 'Consultoria Jurídica',
    icon: FileCheck2,
    description:
      'Análise preventiva para reduzir riscos e apoiar decisões importantes com segurança jurídica.',
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
      <div className="section__header">
        <p className="section__eyebrow">Atendimento estratégico</p>
        <h2 id="areas-heading" className="section__title">
          Áreas de atuação com atendimento em Saquarema/RJ e Online
        </h2>
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
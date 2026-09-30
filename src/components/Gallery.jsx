import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionReveal from './SectionReveal'

const portraits = [
  {
    src: '/image-2.jpg',
    alt: 'Sabrina Coutinho em atendimento no notebook, em ambiente sofisticado com detalhes dourados',
    caption: 'Atendimento estratégico',
  },
  {
    src: '/image-6.jpg',
    alt: 'Sabrina Coutinho em mesa de trabalho com computador, em cenário de mármore e blazer off-white',
    caption: 'Análise técnica',
  },
  {
    src: '/image-8.jpg',
    alt: 'Sabrina Coutinho em retrato editorial, com tablet e blazer bege',
    caption: 'Postura contemporânea',
  },
  {
    src: '/image-4.jpg',
    alt: 'Retrato próximo de Sabrina Coutinho em blusa branca com detalhes em pérola',
    caption: 'Escuta e presença',
  },
  {
    src: '/image-7.jpg',
    alt: 'Sabrina Coutinho em retrato de estúdio com blazer claro e notebook',
    caption: 'Clareza no diálogo',
  },
]

function Gallery() {
  const scrollerRef = useRef(null)

  function scrollByCard(direction) {
    const scroller = scrollerRef.current
    if (!scroller) return

    const card = scroller.querySelector('.gallery-card')
    const gap = 12
    const amount = card ? card.getBoundingClientRect().width + gap : 260

    scroller.scrollBy({
      left: direction * amount,
      behavior: 'smooth',
    })
  }

  return (
    <SectionReveal className="section section--gallery" aria-labelledby="gallery-heading">
      <div className="gallery-header">
        <div>
          <p className="section__eyebrow">Presença profissional</p>
          <h2 id="gallery-heading" className="section__title">
            Uma advocacia com identidade, seriedade e proximidade
          </h2>
        </div>

        <div className="gallery-nav">
          <button
            type="button"
            className="gallery-nav__btn"
            aria-label="Ver retrato anterior"
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="gallery-nav__btn"
            aria-label="Ver próximo retrato"
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="gallery-track"
        ref={scrollerRef}
        tabIndex={0}
        aria-label="Galeria de retratos profissionais. Deslize para o lado para ver mais."
      >
        {portraits.map((portrait) => (
          <figure key={portrait.src} className="gallery-card">
            <img
              src={portrait.src}
              alt={portrait.alt}
              width="720"
              height="900"
              loading="lazy"
              decoding="async"
            />
            <figcaption>{portrait.caption}</figcaption>
          </figure>
        ))}
      </div>
    </SectionReveal>
  )
}

export default Gallery


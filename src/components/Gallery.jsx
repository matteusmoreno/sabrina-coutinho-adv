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
  return (
    <SectionReveal className="section section--gallery" aria-labelledby="gallery-heading">
      <div className="section__header">
        <p className="section__eyebrow">Presença profissional</p>
        <h2 id="gallery-heading" className="section__title">
          Uma advocacia com identidade, seriedade e proximidade
        </h2>
        <p className="section__text">
          Imagens do estúdio para transmitir a mesma postura do atendimento: técnica,
          elegante e humana, em Saquarema/RJ e no online.
        </p>
      </div>

      <div className="gallery-grid">
        {portraits.map((portrait, index) => (
          <figure key={portrait.src} className={`gallery-card gallery-card--${index + 1}`}>
            <img
              src={portrait.src}
              alt={portrait.alt}
              width="900"
              height="1125"
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

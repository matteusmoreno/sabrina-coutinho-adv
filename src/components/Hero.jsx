import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import heroFallback from '../assets/hero.png'
import { trackEvent } from '../utils/tracking'

const WHATSAPP_URL = 'https://wa.me/5522998820818'
const HERO_IMAGE_PRIMARY = '/image-hero-2.jpg'
const HERO_IMAGE_TRANSPARENT = '/image-hero-2-removebg-preview.png'

function handleImageFallback(event) {
  const image = event.currentTarget
  if (image.dataset.fallbackStep === 'primary') {
    image.dataset.fallbackStep = 'transparent'
    image.src = HERO_IMAGE_TRANSPARENT
    return
  }

  if (image.dataset.fallbackStep === 'transparent') {
    image.dataset.fallbackStep = 'local'
    image.src = heroFallback
    return
  }

  if (image.dataset.fallbackStep === 'local') {
    return
  }

  image.dataset.fallbackStep = 'primary'
  image.src = HERO_IMAGE_PRIMARY
}

function Hero() {
  function handlePrimaryCtaClick() {
    trackEvent('whatsapp_click', {
      location: 'hero',
      channel: 'whatsapp',
    })
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <motion.div
        className="hero__content"
        initial={false}
      >
        <p className="hero__eyebrow">Sabrina Coutinho • Advocacia</p>
        <h1 id="hero-heading" className="hero__title">
          Orientação jurídica clara para decisões importantes
        </h1>

        <p className="hero__subtitle">
          Atendimento em Saquarema/RJ e online, com análise técnica, estratégia
          personalizada e acompanhamento próximo em cada etapa do seu caso.
        </p>

        <p className="hero__location">Atendimento presencial em Saquarema/RJ • Online para todo o Brasil</p>

        <div className="hero__actions">
          <a
            className="hero__cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar conversa no WhatsApp com Sabrina Coutinho"
            data-tracking="whatsapp_click"
            data-location="hero"
            onClick={handlePrimaryCtaClick}
          >
            Falar no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="hero__link" href="#areas-de-atuacao">
            Ver áreas de atuação
          </a>
        </div>

        <ul className="hero__proof" aria-label="Diferenciais de atendimento">
          <li>
            <CheckCircle2 size={16} aria-hidden="true" />
            Atendimento humano e objetivo
          </li>
          <li>
            <CheckCircle2 size={16} aria-hidden="true" />
            Suporte online e presencial
          </li>
          <li>
            <CheckCircle2 size={16} aria-hidden="true" />
            Estratégia jurídica personalizada
          </li>
        </ul>
      </motion.div>

      <motion.figure
        className="hero__media"
        initial={false}
      >
        <figcaption className="hero__media-badge">
          Defesa técnica com postura humana
        </figcaption>
        <picture>
          <source srcSet={HERO_IMAGE_PRIMARY} type="image/jpeg" />
          <img
            className="hero__image"
            src={HERO_IMAGE_PRIMARY}
            alt="Retrato profissional da advogada Sabrina Coutinho"
            width="1062"
            height="1406"
            loading="eager"
            fetchPriority="high"
            data-fallback-step="primary"
            onError={handleImageFallback}
          />
        </picture>
      </motion.figure>
    </section>
  )
}

export default Hero
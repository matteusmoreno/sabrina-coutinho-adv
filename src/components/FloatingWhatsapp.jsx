import { MessageCircleMore } from 'lucide-react'
import { trackEvent } from '../utils/tracking'

function FloatingWhatsapp() {
  function handleClick() {
    trackEvent('whatsapp_click', {
      location: 'floating_button',
      channel: 'whatsapp',
    })
  }

  return (
    <a
      href="https://wa.me/5522998820818"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Conversar no WhatsApp"
      data-tracking="whatsapp_click"
      data-location="floating_button"
      onClick={handleClick}
    >
      <MessageCircleMore size={17} aria-hidden="true" />
      <span className="floating-whatsapp__text">Fale no WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsapp
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { trackEvent } from '../utils/tracking'

const navItems = [
  { href: '#areas-de-atuacao', label: 'Áreas', target: 'areas-de-atuacao' },
  { href: '#sobre', label: 'Sobre', target: 'sobre' },
  { href: '#como-funciona', label: 'Processo', target: 'como-funciona' },
  { href: '#faq', label: 'FAQ', target: 'faq' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleNavClick(target) {
    trackEvent('navigation_click', {
      location: 'header',
      target,
    })
    setIsOpen(false)
  }

  function handleWhatsappClick() {
    trackEvent('whatsapp_click', {
      location: 'header',
      channel: 'whatsapp',
    })
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#conteudo-principal" className="site-header__brand">
          <span className="site-header__brand-text">
            <span className="site-header__brand-name">Sabrina Coutinho</span>
            <span className="site-header__brand-subtitle">Advocacia Estratégica</span>
          </span>
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          className={`site-header__nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-header__nav-link"
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/5522998820818"
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__menu-cta"
            data-tracking="whatsapp_click"
            data-location="header_menu"
            onClick={handleWhatsappClick}
          >
            Falar no WhatsApp
          </a>
        </nav>

        <a
          href="https://wa.me/5522998820818"
          target="_blank"
          rel="noopener noreferrer"
          className="site-header__cta"
          data-tracking="whatsapp_click"
          data-location="header"
          onClick={handleWhatsappClick}
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
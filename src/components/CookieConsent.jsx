import { useEffect, useState } from 'react'
import { trackEvent } from '../utils/tracking'

const CONSENT_KEY = 'sabrina-adv-lgpd-consent'

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY)
    setIsVisible(consent !== 'accepted' && consent !== 'rejected')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('has-cookie-banner', isVisible)

    return () => {
      document.body.classList.remove('has-cookie-banner')
    }
  }, [isVisible])

  function setConsent(value) {
    window.localStorage.setItem(CONSENT_KEY, value)
    trackEvent('cookie_consent_update', {
      decision: value,
      location: 'cookie_banner',
    })
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies e privacidade">
      <p>
        Utilizamos cookies essenciais e dados técnicos de navegação para melhorar sua
        experiência, conforme a LGPD. Leia nossa{' '}
        <a href="#politica-privacidade">Política de Privacidade</a>.
      </p>

      <div className="cookie-banner__actions">
        <button type="button" className="cookie-btn cookie-btn--ghost" onClick={() => setConsent('rejected')}>
          Recusar
        </button>
        <button type="button" className="cookie-btn cookie-btn--accept" onClick={() => setConsent('accepted')}>
          Aceitar
        </button>
      </div>
    </aside>
  )
}

export default CookieConsent
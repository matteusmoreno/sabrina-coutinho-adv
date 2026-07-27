const GTM_SCRIPT_ID = 'gtm-base-script'

export function initTagManager() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  const gtmId = import.meta.env.VITE_GTM_ID?.trim()
  if (!gtmId) {
    return
  }

  if (!Array.isArray(window.dataLayer)) {
    window.dataLayer = []
  }

  if (!window.__gtmInitialized) {
    window.dataLayer.push({
      'gtm.start': Date.now(),
      event: 'gtm.js',
    })
    window.__gtmInitialized = true
  }

  if (document.getElementById(GTM_SCRIPT_ID)) {
    return
  }

  const script = document.createElement('script')
  script.id = GTM_SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(script)
}
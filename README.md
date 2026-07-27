# Sabrina Coutinho Advocacia

Landing page institucional premium em React + Vite, com foco em:

- Conversao para WhatsApp
- SEO local (Saquarema/RJ + atendimento online)
- Dark mode de luxo
- Alta performance e estrutura semantica

## Stack

- React
- Vite
- JavaScript (sem TypeScript)
- CSS global mobile-first

## Scripts

- `npm run dev`: ambiente local
- `npm run build`: build de producao
- `npm run preview`: preview local do build

## Setup rapido

1. Instale dependencias:

```bash
npm install --cache .npm-cache
```

2. Configure variaveis de ambiente:

```bash
cp .env.example .env
```

3. Preencha o GTM:

- `VITE_GTM_ID=GTM-XXXXXXX`

## Analytics e eventos

O bootstrap do GTM e feito em [src/main.jsx](src/main.jsx) via [src/utils/gtm.js](src/utils/gtm.js).

Os eventos de conversao usam `dataLayer`, `gtag` (quando presente) e `fbq` (quando presente), via [src/utils/tracking.js](src/utils/tracking.js).

### Mapa de eventos

- `whatsapp_click`
	- `location`: `hero` | `practice_area` | `final_cta`
	- `channel`: `whatsapp`
	- `area`: nome da area (quando clicar em card de atuacao)

- `instagram_click`
	- `location`: `final_cta`
	- `channel`: `instagram`

- `cookie_consent_update`
	- `location`: `cookie_banner`
	- `decision`: `accepted` | `rejected`

## SEO tecnico

O projeto ja contem:

- Meta tags Open Graph e Twitter
- JSON-LD `LegalService` e `FAQPage` em [index.html](index.html)
- Preload da imagem principal para melhorar LCP

## Checklist para producao

- Inserir numero real da OAB em [src/components/Footer.jsx](src/components/Footer.jsx)
- Definir dominio final em dados estruturados de [index.html](index.html)
- Publicar com HTTPS e testar no Lighthouse

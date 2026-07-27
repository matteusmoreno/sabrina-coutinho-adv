# Skill: Infraestrutura, Performance e Deploy

## Core Web Vitals
- **LCP (Largest Contentful Paint):** A imagem principal no Hero section deve fazer o preload. 
- **CLS (Cumulative Layout Shift):** Reservar espaço explícito no CSS (aspect-ratio ou min-height) para imagens e botões dinâmicos, evitando pulos na interface.

## Pipeline de Deploy Estático
- O projeto será servido via CDN (como Vercel ou plataforma estática semelhante).
- Não há SSR ou backend pesado, todo o roteamento (se necessário) será no client-side, mantendo as configurações de fallback no servidor de arquivos estáticos.

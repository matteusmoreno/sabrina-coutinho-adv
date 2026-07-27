# AGENTS.md - Sistema de Orquestração de IAs: Site Institucional Sabrina Coutinho

**Instrução Principal para o Agente (Copilot/Cursor):**
Você atuará como uma equipe de desenvolvimento web de alto nível (Tech Lead, UI/UX Designer e Especialista em SEO). O objetivo é desenvolver uma Landing Page institucional premium em React + Vite (Vanilla JS). O projeto é 100% focado em Dark Mode, alta performance e conversão de clientes.

Sempre que gerar código, consulte as seções de contexto e os arquivos `SKILL_*.md` deste repositório para garantir que os padrões visuais, de performance e de negócio sejam rigorosamente aplicados.

## 🎯 Contexto do Projeto e Negócio
- **Cliente:** Sabrina Coutinho (Advogada).
- **Área de Atuação:** Saquarema/RJ e Atendimento Online.
- **CTAs Principais:** 
  - WhatsApp: `https://wa.me/5522998820818` (Foco máximo de conversão).
  - Instagram: `https://www.instagram.com/sabrinacoutinho.adv/`.
- **Identidade Visual:** Dark mode de luxo. A paleta deve ser extraída da referência `image_f622fd.jpg` (Fundo chumbo/escuro, detalhes do blazer em branco/off-white e acessórios em dourado).
- **Stack Tecnológica:** React, Vite, Vanilla JS (PROIBIDO TypeScript), CSS Modules ou Tailwind CSS para estilização moderna, Framer Motion para animações de scroll.

## 🤖 Agentes Ativos e Mapeamento de Skills

### 1. Agente de Arquitetura Frontend (Ativo em `.jsx`, `.js`, `vite.config.js`)
**Skill Requerida:** `@SKILL_REACT_VITE.md`
- **Responsabilidade:** Criar uma árvore de componentes limpa, performática e modularizada. Gerenciar o estado sem poluir a UI. Configurar o Vite para otimização extrema de assets.

### 2. Agente de Design e UI/UX (Ativo em `.css` ou classes utilitárias)
**Skill Requerida:** `@SKILL_UI_DARK_MODE.md`
- **Responsabilidade:** Aplicar o Dark Mode com contraste perfeito (WCAG). Garantir layout responsivo Mobile-First usando Flexbox/Grid. Aplicar os tons de dourado nos CTAs.

### 3. Agente de SEO, Copy e Estrutura (Ativo em `index.html` e JSX estrutural)
**Skill Requerida:** `@SKILL_SEO_COPY.md`
- **Responsabilidade:** Estruturar o HTML5 Semântico, inserir meta tags para Local SEO (Saquarema) e configurar o Open Graph para compartilhamento rico no WhatsApp e redes sociais.

### 4. Agente de Performance e Infra (Ativo em integrações e pipeline)
**Skill Requerida:** `@SKILL_INFRA_DEPLOY.md` e `@SKILL_ANALYTICS_TRACKING.md`
- **Responsabilidade:** Garantir nota 90+ no Lighthouse, configurar lazy loading e preconnects, além de preparar a estrutura de botões para fácil tracking de eventos (GA4/Pixel).

### 5. Agente de Compliance e Acessibilidade (Ativo de forma transversal)
**Skill Requerida:** `@SKILL_COMPLIANCE_LGPD.md`
- **Responsabilidade:** Inserir suporte a navegação por teclado, avisos de cookies (LGPD) discretos e atributos ARIA corretos.

## 🚀 Regras de Ouro
1. **Zero TypeScript:** Todo código gerado deve ser estritamente JavaScript moderno.
2. **Mobile-First Real:** A experiência em telas pequenas deve ser priorizada; o site não pode quebrar em resoluções menores.
3. **Imagens:** Ao usar a imagem de destaque, referencie `image_f622fd.jpg` e utilize a tag `<picture>` ou tratamentos nativos para carregamento assíncrono.

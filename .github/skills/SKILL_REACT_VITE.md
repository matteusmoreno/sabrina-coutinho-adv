# Skill: React & Vite (Arquitetura e Performance)

## Padrões de Código
- **Vanilla JS:** Utilizar ES6+ moderno. Não gerar arquivos `.ts` ou `.tsx`. Apenas `.jsx` e `.js`.
- **Componentização Lógica:** Dividir em pequenas partes reutilizáveis. Exemplo estrutural:
  - `src/components/Hero.jsx`
  - `src/components/About.jsx`
  - `src/components/FloatingWhatsApp.jsx`
- **Hooks:** Fazer uso racional de `useState` e `useEffect`. Evitar re-renderizações desnecessárias utilizando `React.memo` ou `useCallback` onde a performance exigir.

## Configuração Vite
- Ajustar `vite.config.js` para realizar *chunk splitting* (separar vendor e app) e minificar o bundle final.
- Garantir que plugins de compressão de imagens possam ser acoplados no pipeline de build no futuro.

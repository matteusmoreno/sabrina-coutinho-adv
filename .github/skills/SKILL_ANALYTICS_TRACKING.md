# Skill: Analytics e Rastreamento de Conversão

## Estrutura para Data Layer
- Os componentes de ação devem expor `data-attributes` (ex: `data-tracking="whatsapp_click"`) para facilitar a leitura via Google Tag Manager.
- O botão flutuante do WhatsApp deve ser tratável como um evento primário de conversão, acionando eventos para GA4 e Pixel sem acoplar regras de negócio rígidas no meio do componente React.

## Otimização de Scripts
- Scripts analíticos de terceiros devem ser carregados de forma assíncrona (`async` / `defer`) para não travar o Main Thread do JavaScript ou impactar o First Contentful Paint.

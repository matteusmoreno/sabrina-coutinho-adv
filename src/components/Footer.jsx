import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <section className="site-footer__identity">
            <h2 id="footer-heading" className="site-footer__brand">
              Sabrina Coutinho Advocacia
            </h2>
            <p className="site-footer__meta">
              Orientação jurídica em Saquarema/RJ e online para todo o Brasil.
            </p>
            <p className="site-footer__meta">
              Estratégia técnica, comunicação clara e acompanhamento próximo em cada caso.
            </p>
            <p className="site-footer__meta">OAB/RJ 271.318.</p>

            <a
              className="site-footer__cta"
              href="https://wa.me/5522998820818"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iniciar atendimento no WhatsApp"
            >
              Iniciar atendimento no WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </section>

          <section className="site-footer__column">
            <h3 className="site-footer__title">Navegação</h3>
            <nav aria-label="Links institucionais" className="site-footer__links">
              <a href="#conteudo-principal">Início</a>
              <a href="#areas-de-atuacao">Áreas de atuação</a>
              <a href="#sobre">Sobre a advogada</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#faq">FAQ</a>
              <a href="#contato">Contato</a>
            </nav>
          </section>

          <section className="site-footer__column" id="politica-privacidade">
            <h3 className="site-footer__title">Atendimento e Privacidade</h3>
            <ul className="site-footer__notes" aria-label="Informações de atendimento">
              <li>Canal prioritário: WhatsApp direto com a advogada.</li>
              <li>Atendimento presencial em Saquarema/RJ e modalidade online.</li>
              <li>Condução ética, sigilosa e personalizada para cada contexto.</li>
            </ul>

            <p className="site-footer__privacy-note">
              Este site pode coletar dados técnicos de navegação para melhorar a
              experiência do usuário, respeitando os princípios da LGPD.
            </p>
          </section>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {new Date().getFullYear()} Sabrina Coutinho. Todos os direitos reservados.
          </p>
          <p className="site-footer__signature">
            Desenvolvido por Matteus Moreno •{' '}
            <a
              className="site-footer__signature-link"
              href="https://github.com/matteusmoreno"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Matteus Moreno"
            >
              github.com/matteusmoreno
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
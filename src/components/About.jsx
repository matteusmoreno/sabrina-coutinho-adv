import { BadgeCheck, Handshake, Quote, Scale } from 'lucide-react'
import SectionReveal from './SectionReveal'

function About() {
  return (
    <SectionReveal className="section" id="sobre" aria-labelledby="about-heading">
      <div className="about-layout">
        <div className="about__intro">
          <p className="section__eyebrow">Sobre a advogada</p>
          <h2 id="about-heading" className="section__title">
            Advocacia com estratégia, clareza e atenção real ao seu momento
          </h2>
          <p className="section__text">
            Sabrina Coutinho atua com abordagem personalizada para transformar situações
            jurídicas complexas em decisões seguras. Cada atendimento combina leitura
            técnica, comunicação transparente e foco no melhor caminho para o cliente.
          </p>
          <p className="section__text">
            O trabalho é orientado por escuta qualificada, planejamento jurídico sólido e
            acompanhamento próximo, com suporte presencial em Saquarema/RJ e online.
          </p>

          <blockquote className="about-quote">
            <Quote size={16} aria-hidden="true" />
            "Cada caso merece estratégia com profundidade técnica, postura firme e cuidado humano."
          </blockquote>

          <div className="about__cta-wrap">
            <a
              className="hero__cta"
              href="https://wa.me/5522998820818"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar com Sabrina Coutinho sobre seu caso"
            >
              Conversar sobre meu caso
            </a>
          </div>
        </div>

        <div className="about__side">
          <section className="about__highlights" aria-label="Diferenciais da atuação">
            <article className="about__highlight-card">
              <BadgeCheck size={18} aria-hidden="true" />
              <h3>Atendimento personalizado</h3>
              <p>Cada estratégia é construída com base no seu contexto e objetivo.</p>
            </article>

            <article className="about__highlight-card">
              <Scale size={18} aria-hidden="true" />
              <h3>Rigor técnico</h3>
              <p>Análise jurídica criteriosa para orientar escolhas com segurança.</p>
            </article>

            <article className="about__highlight-card">
              <Handshake size={18} aria-hidden="true" />
              <h3>Relação de confiança</h3>
              <p>Comunicação clara, ética profissional e acompanhamento próximo.</p>
            </article>
          </section>

          <ul className="about-points" aria-label="Pilares de atuação">
            <li>Atendimento rápido e direto pelo WhatsApp</li>
            <li>Estratégias jurídicas sob medida para cada cliente</li>
            <li>Linguagem acessível para decisões com segurança</li>
          </ul>
        </div>
      </div>
    </SectionReveal>
  )
}

export default About
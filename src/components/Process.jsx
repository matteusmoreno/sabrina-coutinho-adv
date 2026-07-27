import SectionReveal from './SectionReveal'

const steps = [
  {
    phase: 'Contato inicial',
    title: 'Primeiro contato',
    description:
      'Você apresenta seu caso e suas dúvidas iniciais por WhatsApp para triagem objetiva.',
  },
  {
    phase: 'Diagnóstico jurídico',
    title: 'Análise estratégica',
    description:
      'Seu contexto e documentos são avaliados para definir os caminhos jurídicos mais eficientes.',
  },
  {
    phase: 'Condução do caso',
    title: 'Atuação e acompanhamento',
    description:
      'Com o plano definido, o atendimento segue com atualizações claras até a melhor solução possível.',
  },
]

function Process() {
  return (
    <SectionReveal className="section section--process" id="como-funciona" aria-labelledby="process-heading">
      <div className="section__header">
        <p className="section__eyebrow">Como funciona</p>
        <h2 id="process-heading" className="section__title">
          Um processo claro do primeiro contato ao acompanhamento
        </h2>
        <p className="section__subtitle process__subtitle">
          Clareza, previsibilidade e acompanhamento humano para você saber exatamente o que esperar em cada etapa.
        </p>
      </div>

      <ol className="process-list">
        {steps.map((step, index) => (
          <li key={step.title} className="card card--step">
            <span className="step-watermark" aria-hidden="true">
              {index + 1}
            </span>
            <p className="step-index">{step.phase}</p>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionReveal>
  )
}

export default Process
import { Clock3, Landmark, MapPin } from 'lucide-react'
import SectionReveal from './SectionReveal'

function Credentials() {
  return (
    <SectionReveal className="credentials" aria-label="Credenciais institucionais">
      <article className="credentials__item">
        <Landmark size={18} aria-hidden="true" />
        <p className="credentials__label">Registro profissional</p>
        <p className="credentials__value">OAB/RJ 245.731</p>
      </article>

      <article className="credentials__item">
        <MapPin size={18} aria-hidden="true" />
        <p className="credentials__label">Atendimento</p>
        <p className="credentials__value">Saquarema/RJ e Online</p>
      </article>

      <article className="credentials__item">
        <Clock3 size={18} aria-hidden="true" />
        <p className="credentials__label">Canal prioritário</p>
        <p className="credentials__value">Resposta ágil via WhatsApp</p>
      </article>
    </SectionReveal>
  )
}

export default Credentials
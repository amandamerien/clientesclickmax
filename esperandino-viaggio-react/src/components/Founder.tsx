import { founder } from '../content/site'
import SectionHead from './SectionHead'
import portrait from '../assets/images/fundador.webp'
import s from './Founder.module.css'

export default function Founder() {
  return (
    <section className={s.founder} data-section="founder">
      <div className={`wrap ${s.grid}`}>
        <img className={s.portrait} src={portrait} width={1000} height={1250} alt={`${founder.name}, ${founder.role}`} loading="lazy" decoding="async" data-reveal="zoom" />
        <div>
          <SectionHead eyebrow={founder.eyebrow} title={founder.title} />
          <blockquote className={s.quote} data-reveal>{founder.quote}</blockquote>
          <p className={`lead ${s.lead}`} data-reveal>{founder.lead}</p>
          <p className={s.sig} data-reveal>
            {founder.name}
            <small>{founder.role}</small>
          </p>
        </div>
      </div>
    </section>
  )
}

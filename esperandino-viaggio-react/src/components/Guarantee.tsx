import { guarantee } from '../content/site'
import SectionHead from './SectionHead'
import s from './Guarantee.module.css'

export default function Guarantee() {
  return (
    <section className={s.guar} id="sinal" data-section="guarantee">
      <div className={`wrap ${s.grid}`}>
        <SectionHead eyebrow={guarantee.eyebrow} title={guarantee.title}>
          <p className={`lead ${s.lead}`} data-reveal>{guarantee.lead}</p>
        </SectionHead>
        <ol className={s.list} data-reveal data-stagger>
          {guarantee.items.map((it, i) => (
            <li key={it.title}>
              <span className={s.index} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <b>{it.title}</b>
                <span>{it.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
